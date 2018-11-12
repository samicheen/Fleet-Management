import { Component, ViewContainerRef, OnInit } from "@angular/core";
import { config } from "./core/config";
import { NavigationService } from "./core/services/navigation.service";
import { UserService } from "./core/services/user.service";
import { BackendService } from "./core/services/backend.service";

@Component({
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    get enableSideDrawer() {
        return config.routes.modals.length > 0;
    }

    get user() {
        return this.backendService.getActiveUser();
    }

    constructor(private navigationService: NavigationService,
                private userService: UserService,
                private backendService: BackendService,
                // provide access to root ViewContainerRef from AppComponent
                public viewContainerRef: ViewContainerRef) {
    }

    ngOnInit() {
        this.userService.isLoggedIn.then((isLoggedIn) => {
            if (!isLoggedIn) {
                this.navigationService.navigateToModal("login");
            }
        });
    }
}
