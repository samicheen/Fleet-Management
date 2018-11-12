"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var logged_in_lazy_load_guard_1 = require("./guards/logged-in-lazy-load.guard");
var helpers_service_1 = require("./services/helpers.service");
var navigation_service_1 = require("./services/navigation.service");
var backend_service_1 = require("./services/backend.service");
var user_service_1 = require("./services/user.service");
var network_monitoring_service_1 = require("./services/network-monitoring.service");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [
                logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard,
                modal_dialog_1.ModalDialogService,
                helpers_service_1.HelpersService,
                navigation_service_1.NavigationService,
                backend_service_1.BackendService,
                user_service_1.UserService,
                network_monitoring_service_1.NetworkMonitoringService
            ]
        };
    };
    var CoreModule_1;
    CoreModule = CoreModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                router_1.NativeScriptRouterModule,
                angular_1.NativeScriptUISideDrawerModule,
            ],
            exports: [
                router_1.NativeScriptRouterModule,
                angular_1.NativeScriptUISideDrawerModule,
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRixzREFBdUU7QUFDdkUsa0VBQXVFO0FBQ3ZFLDhEQUFvRjtBQUVwRixnRkFBMkU7QUFFM0UsOERBQTREO0FBQzVELG9FQUFrRTtBQUNsRSw4REFBNEQ7QUFDNUQsd0RBQXNEO0FBQ3RELG9GQUFpRjtBQWFqRjtJQUFBO0lBZ0JBLENBQUM7bUJBaEJZLFVBQVU7SUFDWixrQkFBTyxHQUFkO1FBQ0ksT0FBTztZQUNILFFBQVEsRUFBRSxZQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDUCxpREFBcUI7Z0JBRXJCLGlDQUFrQjtnQkFDbEIsZ0NBQWM7Z0JBQ2Qsc0NBQWlCO2dCQUNqQixnQ0FBYztnQkFDZCwwQkFBVztnQkFDWCxxREFBd0I7YUFDM0I7U0FDSixDQUFDO0lBQ04sQ0FBQzs7SUFmUSxVQUFVO1FBWHRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHdDQUE4QjthQUNqQztZQUNELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHdDQUE4QjthQUNqQztZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxVQUFVLENBZ0J0QjtJQUFELGlCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBMb2dnZWRJbkxhenlMb2FkR3VhcmQgfSBmcm9tIFwiLi9ndWFyZHMvbG9nZ2VkLWluLWxhenktbG9hZC5ndWFyZFwiO1xuXG5pbXBvcnQgeyBIZWxwZXJzU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2hlbHBlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgTmV0d29ya01vbml0b3JpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbmV0d29yay1tb25pdG9yaW5nLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBDb3JlTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgTG9nZ2VkSW5MYXp5TG9hZEd1YXJkLFxuXG4gICAgICAgICAgICAgICAgTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIEhlbHBlcnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIFVzZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIE5ldHdvcmtNb25pdG9yaW5nU2VydmljZVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==