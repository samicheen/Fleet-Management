"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("./core/config");
var navigation_service_1 = require("./core/services/navigation.service");
var user_service_1 = require("./core/services/user.service");
var backend_service_1 = require("./core/services/backend.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(navigationService, userService, backendService, 
    // provide access to root ViewContainerRef from AppComponent
    viewContainerRef) {
        this.navigationService = navigationService;
        this.userService = userService;
        this.backendService = backendService;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(AppComponent.prototype, "enableSideDrawer", {
        get: function () {
            return config_1.config.routes.modals.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "user", {
        get: function () {
            return this.backendService.getActiveUser();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isLoggedIn.then(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.navigationService.navigateToModal("login");
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            templateUrl: "./app.component.html"
        }),
        __metadata("design:paramtypes", [navigation_service_1.NavigationService,
            user_service_1.UserService,
            backend_service_1.BackendService,
            core_1.ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsd0NBQXVDO0FBQ3ZDLHlFQUF1RTtBQUN2RSw2REFBMkQ7QUFDM0QsbUVBQWlFO0FBS2pFO0lBU0ksc0JBQW9CLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixjQUE4QjtJQUN0Qyw0REFBNEQ7SUFDckQsZ0JBQWtDO1FBSmpDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRS9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDckQsQ0FBQztJQWJELHNCQUFJLDBDQUFnQjthQUFwQjtZQUNJLE9BQU8sZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFJO2FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFTRCwrQkFBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxVQUFVO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuRDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXRCUSxZQUFZO1FBSHhCLGdCQUFTLENBQUM7WUFDUCxXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7eUNBVXlDLHNDQUFpQjtZQUN2QiwwQkFBVztZQUNSLGdDQUFjO1lBRWIsdUJBQWdCO09BYjVDLFlBQVksQ0F1QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuL2NvcmUvY29uZmlnXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gXCIuL2NvcmUvc2VydmljZXMvbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL2NvcmUvc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2NvcmUvc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBnZXQgZW5hYmxlU2lkZURyYXdlcigpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZy5yb3V0ZXMubW9kYWxzLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgZ2V0IHVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tlbmRTZXJ2aWNlLmdldEFjdGl2ZVVzZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSxcbiAgICAgICAgICAgICAgICAvLyBwcm92aWRlIGFjY2VzcyB0byByb290IFZpZXdDb250YWluZXJSZWYgZnJvbSBBcHBDb21wb25lbnRcbiAgICAgICAgICAgICAgICBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW4udGhlbigoaXNMb2dnZWRJbikgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0xvZ2dlZEluKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZVRvTW9kYWwoXCJsb2dpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19