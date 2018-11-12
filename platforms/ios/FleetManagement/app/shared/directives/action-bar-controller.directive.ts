import { Directive, OnInit, ElementRef, Injector } from "@angular/core";
import { ActionItem, NavigationButton } from "tns-core-modules/ui/action-bar/action-bar";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Label } from "tns-core-modules/ui/label";
import { ActivatedRoute } from "@angular/router";
import { isAndroid } from "platform";
import * as app from "application";
import { Page } from "ui/page";
import { path } from "tns-core-modules/file-system";
import { ModalDialogParams, RouterExtensions } from "nativescript-angular";
import { NavigationService } from "../../core/services/navigation.service";
import { config } from "../../core/config";

@Directive({
    selector: "ActionBar"
})
export class ActionBarController implements OnInit {
    private modalDialogParams: ModalDialogParams;

    constructor(private el: ElementRef,
                private page: Page,
                private injector: Injector,
                private routerExtensions: RouterExtensions,
                private activatedRoute: ActivatedRoute,
                private navigationService: NavigationService) {}

    ngOnInit(): void {
        this.page.actionBarHidden = false;

        if (this.isInsideModalDialog() || this.activatedRoute.snapshot.url.some(x => x.path.endsWith("-details"))) {
            this.addNavButton();
        } else if (config.routes.modals.length) {
            this.addSideButton();
        }

        this.addTitle();
    }

    goBack() {
        if (this.routerExtensions.canGoBackToPreviousPage()) {
            this.routerExtensions.backToPreviousPage();
            return;
        }

        if (this.isInsideModalDialog()) {
            this.modalDialogParams.closeCallback();
            return;
        }
        
        if (!this.routerExtensions.canGoBack()) {
            return;
        }
    
        this.activatedRoute.params.subscribe(params => {
            const backPath = "..";
            let navigationPath = backPath;
            for (const key in params) {
                if (params.hasOwnProperty(key)) {
                    navigationPath = path.join(navigationPath, backPath);
                }
            }

            this.navigationService.navigate([navigationPath], {relativeTo: this.activatedRoute});
        });
    }

    private isInsideModalDialog() {
        try {
            // ModalDialogParams will resolve if inside a modal dialog
            this.modalDialogParams = this.injector.get(ModalDialogParams);
            return true;
        } catch (e) {
            return false;
        }
    }

    private addNavButton() {
        const navBtn = new NavigationButton();
        navBtn.on("tap", () => this.goBack());
        if (app.android) {
            navBtn.android.systemIcon = "ic_menu_back";
        }

        this.page.actionBar.navigationButton = navBtn;
        if (app.ios) {
            this.page.actionBar.navigationButton.visibility = "collapsed";
            const backButton = new ActionItem();
            backButton.on("tap", () => this.goBack());
            backButton.text = String.fromCharCode(0x2770);
            this.page.actionBar.actionItems.addItem(backButton);
        }
    }
    
    private addTitle() {
        const label = new Label();
        label.text = this.activatedRoute.component["title"];
        this.el.nativeElement.titleView = label;
    }

    private addSideButton() {
        let btn: any;
        const actionBar = this.el.nativeElement;

        if (isAndroid) {
            btn = new NavigationButton();
            btn.android.systemIcon = "ic_menu_moreoverflow_normal_holo_dark";
            actionBar.navigationButton = btn;
        } else {
            btn = new ActionItem();
            btn.text = String.fromCharCode(0x2630);
            btn.ios.position = "left";
            actionBar.actionItems.addItem(btn);
        }

        btn.on("tap", () => (<RadSideDrawer>app.getRootView()).showDrawer());
    }
}
