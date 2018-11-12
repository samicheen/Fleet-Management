"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var config_1 = require("./core/config");
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot([
                    {
                        path: "login",
                        loadChildren: "./login/login.module#LoginModule"
                    }
                ].concat(config_1.config.routes.tabs, config_1.config.routes.modals, config_1.config.routes.hidden))],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSx3Q0FBdUM7QUFjdkM7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQVo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPO29CQUN0Qzt3QkFDSSxJQUFJLEVBQUUsT0FBTzt3QkFDYixZQUFZLEVBQUUsa0NBQWtDO3FCQUNuRDt5QkFDRSxlQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFDbEIsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQ3BCLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUN6QixDQUFDO1lBQ0gsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuL2NvcmUvY29uZmlnXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgICAgICAgbG9hZENoaWxkcmVuOiBcIi4vbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlXCJcbiAgICAgICAgfSxcbiAgICAgICAgLi4uY29uZmlnLnJvdXRlcy50YWJzLFxuICAgICAgICAuLi5jb25maWcucm91dGVzLm1vZGFscyxcbiAgICAgICAgLi4uY29uZmlnLnJvdXRlcy5oaWRkZW5cbiAgICBdKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==