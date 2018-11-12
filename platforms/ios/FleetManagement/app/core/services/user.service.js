"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var router_2 = require("nativescript-angular/router");
var backend_service_1 = require("./backend.service");
var navigation_service_1 = require("./navigation.service");
var UserService = /** @class */ (function () {
    function UserService(backendService, navigationService, routerExtensions) {
        this.backendService = backendService;
        this.navigationService = navigationService;
        this.routerExtensions = routerExtensions;
        this.lastRoute = "";
        this.onLoggedInChangedSubject = new rxjs_1.ReplaySubject(1);
        this.backendService.setLoggedInChangedObservable(this.onLoggedInChanged);
        this.updateIsLoggedInPromise();
        this.resetHistoryAfterLogin();
    }
    Object.defineProperty(UserService.prototype, "isLoggedInStatus", {
        get: function () {
            return !!this.backendService.getActiveUser();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "onLoggedInChanged", {
        get: function () {
            return this.onLoggedInChangedSubject
                .asObservable()
                .pipe(operators_1.distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.register = function (user) {
        var _this = this;
        var registerPromise = this.logout()
            .then(function () { return _this.backendService.signup(user.username, user.password, user.email); });
        registerPromise.catch(this.handleErrors);
        this.updateIsLoggedInPromise(registerPromise);
        return registerPromise.then(function (user) {
            return new Promise(function (resolve) { return setTimeout(function () { return resolve(user); }, 1000); });
        });
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        var loginPromise = this.logout()
            .then(function () { return _this.backendService.login(user.username, user.password); });
        loginPromise.catch(this.handleErrors);
        this.updateIsLoggedInPromise(loginPromise);
        return loginPromise;
    };
    UserService.prototype.loginWithMIC = function (redirectUri, authorizationGrant, options) {
        var _this = this;
        var loginPromise = this.logout()
            .then(function () { return _this.backendService.loginWithMIC(redirectUri, authorizationGrant, options); });
        loginPromise.catch(this.handleErrors);
        this.updateIsLoggedInPromise(loginPromise);
        return loginPromise;
    };
    UserService.prototype.logout = function () {
        var logoutPromise = this.backendService.logout();
        this.updateIsLoggedInPromise(logoutPromise);
        return logoutPromise;
    };
    UserService.prototype.resetPassword = function (email) {
        var resetPasswordPromise = this.backendService.resetPassword(email);
        resetPasswordPromise.catch(this.handleErrors);
        return resetPasswordPromise;
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(error.toString());
    };
    UserService.prototype.updateIsLoggedInPromise = function (pendingPromise) {
        var _this = this;
        if (!pendingPromise) {
            this.isLoggedIn = Promise.resolve(this.isLoggedInStatus);
            this.onLoggedInChangedSubject.next(this.isLoggedInStatus);
            return;
        }
        this.isLoggedIn = pendingPromise
            .catch()
            .then(function () {
            _this.onLoggedInChangedSubject.next(_this.isLoggedInStatus);
            return _this.isLoggedInStatus;
        });
    };
    UserService.prototype.resetHistoryAfterLogin = function () {
        var _this = this;
        this.routerExtensions.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function () {
            if (_this.lastRoute.startsWith("/login/login") || _this.lastRoute.startsWith("/login/mic-login")) {
                _this.navigationService.navigate([""], { clearHistory: true });
            }
            _this.lastRoute = _this.routerExtensions.router.url;
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [backend_service_1.BackendService,
            navigation_service_1.NavigationService,
            router_2.RouterExtensions])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBDQUFnRDtBQUNoRCw2QkFBcUM7QUFDckMsNENBQThEO0FBQzlELHNEQUErRDtBQUcvRCxxREFBbUQ7QUFFbkQsMkRBQXlEO0FBR3pEO0lBZ0JJLHFCQUFvQixjQUE4QixFQUM5QixpQkFBb0MsRUFDcEMsZ0JBQWtDO1FBRmxDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFoQjlDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFpQjNCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLG9CQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBbEJELHNCQUFZLHlDQUFnQjthQUE1QjtZQUNJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBaUI7YUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyx3QkFBd0I7aUJBQy9CLFlBQVksRUFBRTtpQkFDZCxJQUFJLENBQUMsZ0NBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBWUQsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFBbkIsaUJBVUM7UUFURyxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO2FBQ2hDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FB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LENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDMUQsT0FBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU8sNENBQXNCLEdBQTlCO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDOUIsSUFBSSxDQUFDLGtCQUFNLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLFlBQVksc0JBQWEsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2FBQ3ZELFNBQVMsQ0FBQztZQUNQLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBRTtnQkFDNUYsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDakU7WUFFRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXRHUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBaUIyQixnQ0FBYztZQUNYLHNDQUFpQjtZQUNsQix5QkFBZ0I7T0FsQjdDLFdBQVcsQ0F1R3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXZHRCxJQXVHQztBQXZHWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIG9uTG9nZ2VkSW5DaGFuZ2VkU3ViamVjdDogUmVwbGF5U3ViamVjdDxib29sZWFuPjtcbiAgICBwcml2YXRlIGxhc3RSb3V0ZTogc3RyaW5nID0gXCJcIjtcblxuICAgIGlzTG9nZ2VkSW46IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgICBwcml2YXRlIGdldCBpc0xvZ2dlZEluU3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLmJhY2tlbmRTZXJ2aWNlLmdldEFjdGl2ZVVzZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgb25Mb2dnZWRJbkNoYW5nZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uTG9nZ2VkSW5DaGFuZ2VkU3ViamVjdFxuICAgICAgICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5vbkxvZ2dlZEluQ2hhbmdlZFN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcbiAgICAgICAgdGhpcy5iYWNrZW5kU2VydmljZS5zZXRMb2dnZWRJbkNoYW5nZWRPYnNlcnZhYmxlKHRoaXMub25Mb2dnZWRJbkNoYW5nZWQpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlSXNMb2dnZWRJblByb21pc2UoKTtcbiAgICAgICAgdGhpcy5yZXNldEhpc3RvcnlBZnRlckxvZ2luKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgICAgICBjb25zdCByZWdpc3RlclByb21pc2UgPSB0aGlzLmxvZ291dCgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmJhY2tlbmRTZXJ2aWNlLnNpZ251cCh1c2VyLnVzZXJuYW1lLCB1c2VyLnBhc3N3b3JkLCB1c2VyLmVtYWlsKSk7XG5cbiAgICAgICAgcmVnaXN0ZXJQcm9taXNlLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICAgICAgdGhpcy51cGRhdGVJc0xvZ2dlZEluUHJvbWlzZShyZWdpc3RlclByb21pc2UpO1xuXG4gICAgICAgIHJldHVybiByZWdpc3RlclByb21pc2UudGhlbigodXNlcjogS2ludmV5LlVzZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxLaW52ZXkuVXNlcj4oKHJlc29sdmUpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSh1c2VyKSwgMTAwMCkpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgY29uc3QgbG9naW5Qcm9taXNlID0gdGhpcy5sb2dvdXQoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5iYWNrZW5kU2VydmljZS5sb2dpbih1c2VyLnVzZXJuYW1lLCB1c2VyLnBhc3N3b3JkKSk7XG5cbiAgICAgICAgbG9naW5Qcm9taXNlLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICAgICAgdGhpcy51cGRhdGVJc0xvZ2dlZEluUHJvbWlzZShsb2dpblByb21pc2UpO1xuXG4gICAgICAgIHJldHVybiBsb2dpblByb21pc2U7XG4gICAgfVxuXG4gICAgbG9naW5XaXRoTUlDKHJlZGlyZWN0VXJpOiBzdHJpbmcsIGF1dGhvcml6YXRpb25HcmFudD86IEtpbnZleS5BdXRob3JpemF0aW9uR3JhbnQsIG9wdGlvbnM/OiBLaW52ZXkuUmVxdWVzdE9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgbG9naW5Qcm9taXNlID0gdGhpcy5sb2dvdXQoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5iYWNrZW5kU2VydmljZS5sb2dpbldpdGhNSUMocmVkaXJlY3RVcmksIGF1dGhvcml6YXRpb25HcmFudCwgb3B0aW9ucykpO1xuXG4gICAgICAgIGxvZ2luUHJvbWlzZS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgICAgIHRoaXMudXBkYXRlSXNMb2dnZWRJblByb21pc2UobG9naW5Qcm9taXNlKTtcblxuICAgICAgICByZXR1cm4gbG9naW5Qcm9taXNlO1xuICAgIH1cblxuICAgIGxvZ291dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgbG9nb3V0UHJvbWlzZSA9IHRoaXMuYmFja2VuZFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlSXNMb2dnZWRJblByb21pc2UobG9nb3V0UHJvbWlzZSk7XG5cbiAgICAgICAgcmV0dXJuIGxvZ291dFByb21pc2U7XG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xuICAgICAgICBjb25zdCByZXNldFBhc3N3b3JkUHJvbWlzZSA9IHRoaXMuYmFja2VuZFNlcnZpY2UucmVzZXRQYXNzd29yZChlbWFpbCk7XG5cbiAgICAgICAgcmVzZXRQYXNzd29yZFByb21pc2UuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuXG4gICAgICAgIHJldHVybiByZXNldFBhc3N3b3JkUHJvbWlzZTtcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVJc0xvZ2dlZEluUHJvbWlzZShwZW5kaW5nUHJvbWlzZT86IFByb21pc2U8YW55Pikge1xuICAgICAgICBpZiAoIXBlbmRpbmdQcm9taXNlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBQcm9taXNlLnJlc29sdmUodGhpcy5pc0xvZ2dlZEluU3RhdHVzKTtcbiAgICAgICAgICAgIHRoaXMub25Mb2dnZWRJbkNoYW5nZWRTdWJqZWN0Lm5leHQodGhpcy5pc0xvZ2dlZEluU3RhdHVzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHBlbmRpbmdQcm9taXNlXG4gICAgICAgICAgICAuY2F0Y2goKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25Mb2dnZWRJbkNoYW5nZWRTdWJqZWN0Lm5leHQodGhpcy5pc0xvZ2dlZEluU3RhdHVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc0xvZ2dlZEluU3RhdHVzO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEhpc3RvcnlBZnRlckxvZ2luKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLmV2ZW50c1xuICAgICAgICAgICAgLnBpcGUoZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3RSb3V0ZS5zdGFydHNXaXRoKFwiL2xvZ2luL2xvZ2luXCIpIHx8IHRoaXMubGFzdFJvdXRlLnN0YXJ0c1dpdGgoXCIvbG9naW4vbWljLWxvZ2luXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoW1wiXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RSb3V0ZSA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19