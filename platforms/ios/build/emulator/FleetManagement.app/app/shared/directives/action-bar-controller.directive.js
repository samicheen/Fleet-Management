"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var action_bar_1 = require("tns-core-modules/ui/action-bar/action-bar");
var label_1 = require("tns-core-modules/ui/label");
var router_1 = require("@angular/router");
var platform_1 = require("platform");
var app = require("application");
var page_1 = require("ui/page");
var file_system_1 = require("tns-core-modules/file-system");
var nativescript_angular_1 = require("nativescript-angular");
var navigation_service_1 = require("../../core/services/navigation.service");
var config_1 = require("../../core/config");
var ActionBarController = /** @class */ (function () {
    function ActionBarController(el, page, injector, routerExtensions, activatedRoute, navigationService) {
        this.el = el;
        this.page = page;
        this.injector = injector;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.navigationService = navigationService;
    }
    ActionBarController.prototype.ngOnInit = function () {
        this.page.actionBarHidden = false;
        if (this.isInsideModalDialog() || this.activatedRoute.snapshot.url.some(function (x) { return x.path.endsWith("-details"); })) {
            this.addNavButton();
        }
        else if (config_1.config.routes.modals.length) {
            this.addSideButton();
        }
        this.addTitle();
    };
    ActionBarController.prototype.goBack = function () {
        var _this = this;
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
        this.activatedRoute.params.subscribe(function (params) {
            var backPath = "..";
            var navigationPath = backPath;
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    navigationPath = file_system_1.path.join(navigationPath, backPath);
                }
            }
            _this.navigationService.navigate([navigationPath], { relativeTo: _this.activatedRoute });
        });
    };
    ActionBarController.prototype.isInsideModalDialog = function () {
        try {
            // ModalDialogParams will resolve if inside a modal dialog
            this.modalDialogParams = this.injector.get(nativescript_angular_1.ModalDialogParams);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    ActionBarController.prototype.addNavButton = function () {
        var _this = this;
        var navBtn = new action_bar_1.NavigationButton();
        navBtn.on("tap", function () { return _this.goBack(); });
        if (app.android) {
            navBtn.android.systemIcon = "ic_menu_back";
        }
        this.page.actionBar.navigationButton = navBtn;
        if (app.ios) {
            this.page.actionBar.navigationButton.visibility = "collapsed";
            var backButton = new action_bar_1.ActionItem();
            backButton.on("tap", function () { return _this.goBack(); });
            backButton.text = String.fromCharCode(0x2770);
            this.page.actionBar.actionItems.addItem(backButton);
        }
    };
    ActionBarController.prototype.addTitle = function () {
        var label = new label_1.Label();
        label.text = this.activatedRoute.component["title"];
        this.el.nativeElement.titleView = label;
    };
    ActionBarController.prototype.addSideButton = function () {
        var btn;
        var actionBar = this.el.nativeElement;
        if (platform_1.isAndroid) {
            btn = new action_bar_1.NavigationButton();
            btn.android.systemIcon = "ic_menu_moreoverflow_normal_holo_dark";
            actionBar.navigationButton = btn;
        }
        else {
            btn = new action_bar_1.ActionItem();
            btn.text = String.fromCharCode(0x2630);
            btn.ios.position = "left";
            actionBar.actionItems.addItem(btn);
        }
        btn.on("tap", function () { return app.getRootView().showDrawer(); });
    };
    ActionBarController = __decorate([
        core_1.Directive({
            selector: "ActionBar"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            page_1.Page,
            core_1.Injector,
            nativescript_angular_1.RouterExtensions,
            router_1.ActivatedRoute,
            navigation_service_1.NavigationService])
    ], ActionBarController);
    return ActionBarController;
}());
exports.ActionBarController = ActionBarController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci1jb250cm9sbGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbi1iYXItY29udHJvbGxlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsd0VBQXlGO0FBRXpGLG1EQUFrRDtBQUNsRCwwQ0FBaUQ7QUFDakQscUNBQXFDO0FBQ3JDLGlDQUFtQztBQUNuQyxnQ0FBK0I7QUFDL0IsNERBQW9EO0FBQ3BELDZEQUEyRTtBQUMzRSw2RUFBMkU7QUFDM0UsNENBQTJDO0FBSzNDO0lBR0ksNkJBQW9CLEVBQWMsRUFDZCxJQUFVLEVBQ1YsUUFBa0IsRUFDbEIsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLGlCQUFvQztRQUxwQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUFHLENBQUM7SUFFNUQsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUVsQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxFQUFFO1lBQ3ZHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjthQUFNLElBQUksZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztT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SyxDQUFDO0lBQzVDLENBQUM7SUFFTywyQ0FBYSxHQUFyQjtRQUNJLElBQUksR0FBUSxDQUFDO1FBQ2IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFFeEMsSUFBSSxvQkFBUyxFQUFFO1lBQ1gsR0FBRyxHQUFHLElBQUksNkJBQWdCLEVBQUUsQ0FBQztZQUM3QixHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyx1Q0FBdUMsQ0FBQztZQUNqRSxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1NBQ3BDO2FBQU07WUFDSCxHQUFHLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7WUFDdkIsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUMxQixTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QztRQUVELEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBZ0IsR0FBRyxDQUFDLFdBQVcsRUFBRyxDQUFDLFVBQVUsRUFBRSxFQUEvQyxDQUErQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQW5HUSxtQkFBbUI7UUFIL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1NBQ3hCLENBQUM7eUNBSTBCLGlCQUFVO1lBQ1IsV0FBSTtZQUNBLGVBQVE7WUFDQSx1Q0FBZ0I7WUFDbEIsdUJBQWM7WUFDWCxzQ0FBaUI7T0FSL0MsbUJBQW1CLENBb0cvQjtJQUFELDBCQUFDO0NBQUEsQUFwR0QsSUFvR0M7QUFwR1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGlvbkl0ZW0sIE5hdmlnYXRpb25CdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyL2FjdGlvbi1iYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IHBhdGggfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvcmUvc2VydmljZXMvbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vY29yZS9jb25maWdcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiQWN0aW9uQmFyXCJcbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uQmFyQ29udHJvbGxlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBtb2RhbERpYWxvZ1BhcmFtczogTW9kYWxEaWFsb2dQYXJhbXM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzSW5zaWRlTW9kYWxEaWFsb2coKSB8fCB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybC5zb21lKHggPT4geC5wYXRoLmVuZHNXaXRoKFwiLWRldGFpbHNcIikpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZE5hdkJ1dHRvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5yb3V0ZXMubW9kYWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hZGRTaWRlQnV0dG9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZFRpdGxlKCk7XG4gICAgfVxuXG4gICAgZ29CYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXJFeHRlbnNpb25zLmNhbkdvQmFja1RvUHJldmlvdXNQYWdlKCkpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzSW5zaWRlTW9kYWxEaWFsb2coKSkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbERpYWxvZ1BhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmNhbkdvQmFjaygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYWNrUGF0aCA9IFwiLi5cIjtcbiAgICAgICAgICAgIGxldCBuYXZpZ2F0aW9uUGF0aCA9IGJhY2tQYXRoO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25QYXRoID0gcGF0aC5qb2luKG5hdmlnYXRpb25QYXRoLCBiYWNrUGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFtuYXZpZ2F0aW9uUGF0aF0sIHtyZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNJbnNpZGVNb2RhbERpYWxvZygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIE1vZGFsRGlhbG9nUGFyYW1zIHdpbGwgcmVzb2x2ZSBpZiBpbnNpZGUgYSBtb2RhbCBkaWFsb2dcbiAgICAgICAgICAgIHRoaXMubW9kYWxEaWFsb2dQYXJhbXMgPSB0aGlzLmluamVjdG9yLmdldChNb2RhbERpYWxvZ1BhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGROYXZCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IG5hdkJ0biA9IG5ldyBOYXZpZ2F0aW9uQnV0dG9uKCk7XG4gICAgICAgIG5hdkJ0bi5vbihcInRhcFwiLCAoKSA9PiB0aGlzLmdvQmFjaygpKTtcbiAgICAgICAgaWYgKGFwcC5hbmRyb2lkKSB7XG4gICAgICAgICAgICBuYXZCdG4uYW5kcm9pZC5zeXN0ZW1JY29uID0gXCJpY19tZW51X2JhY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbiA9IG5hdkJ0bjtcbiAgICAgICAgaWYgKGFwcC5pb3MpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbi52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZWRcIjtcbiAgICAgICAgICAgIGNvbnN0IGJhY2tCdXR0b24gPSBuZXcgQWN0aW9uSXRlbSgpO1xuICAgICAgICAgICAgYmFja0J1dHRvbi5vbihcInRhcFwiLCAoKSA9PiB0aGlzLmdvQmFjaygpKTtcbiAgICAgICAgICAgIGJhY2tCdXR0b24udGV4dCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyNzcwKTtcbiAgICAgICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXIuYWN0aW9uSXRlbXMuYWRkSXRlbShiYWNrQnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGFkZFRpdGxlKCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbCgpO1xuICAgICAgICBsYWJlbC50ZXh0ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5jb21wb25lbnRbXCJ0aXRsZVwiXTtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnRpdGxlVmlldyA9IGxhYmVsO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkU2lkZUJ1dHRvbigpIHtcbiAgICAgICAgbGV0IGJ0bjogYW55O1xuICAgICAgICBjb25zdCBhY3Rpb25CYXIgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgYnRuID0gbmV3IE5hdmlnYXRpb25CdXR0b24oKTtcbiAgICAgICAgICAgIGJ0bi5hbmRyb2lkLnN5c3RlbUljb24gPSBcImljX21lbnVfbW9yZW92ZXJmbG93X25vcm1hbF9ob2xvX2RhcmtcIjtcbiAgICAgICAgICAgIGFjdGlvbkJhci5uYXZpZ2F0aW9uQnV0dG9uID0gYnRuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnRuID0gbmV3IEFjdGlvbkl0ZW0oKTtcbiAgICAgICAgICAgIGJ0bi50ZXh0ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweDI2MzApO1xuICAgICAgICAgICAgYnRuLmlvcy5wb3NpdGlvbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgYWN0aW9uQmFyLmFjdGlvbkl0ZW1zLmFkZEl0ZW0oYnRuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ0bi5vbihcInRhcFwiLCAoKSA9PiAoPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCkpLnNob3dEcmF3ZXIoKSk7XG4gICAgfVxufVxuIl19