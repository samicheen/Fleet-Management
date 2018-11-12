"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_module_1 = require("../shared/shared.module");
var my_fleet_list_component_1 = require("./my-fleet-list.component");
var my_fleet_details_component_1 = require("./my-fleet-details.component");
var MyFleetModule = /** @class */ (function () {
    function MyFleetModule() {
    }
    MyFleetModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "", redirectTo: "my-fleet-list" },
                    { path: "my-fleet-list", component: my_fleet_list_component_1.MyFleetListComponent },
                    { path: "my-fleet-details/:id/:name", component: my_fleet_details_component_1.MyFleetDetailsComponent }
                ])
            ],
            entryComponents: [
                my_fleet_list_component_1.MyFleetListComponent,
                my_fleet_details_component_1.MyFleetDetailsComponent,
            ],
            declarations: [
                my_fleet_list_component_1.MyFleetListComponent,
                my_fleet_details_component_1.MyFleetDetailsComponent,
            ],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], MyFleetModule);
    return MyFleetModule;
}());
exports.MyFleetModule = MyFleetModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZmxlZXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXktZmxlZXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNFO0FBQ3RFLHNEQUF1RTtBQUN2RSx5REFBdUQ7QUFDdkQscUVBQWlFO0FBQ2pFLDJFQUF1RTtBQXVCdkU7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFyQnpCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCw0QkFBWTtnQkFDWixpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7b0JBQzlCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFO29CQUN6QyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLDhDQUFvQixFQUFFO29CQUMxRCxFQUFFLElBQUksRUFBRSw0QkFBNEIsRUFBRSxTQUFTLEVBQUUsb0RBQXVCLEVBQUU7aUJBQzdFLENBQUM7YUFDTDtZQUNELGVBQWUsRUFBRTtnQkFDYiw4Q0FBb0I7Z0JBQ3BCLG9EQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDViw4Q0FBb0I7Z0JBQ3BCLG9EQUF1QjthQUMxQjtZQUNELFNBQVMsRUFBRSxFQUNWO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7QUFBakIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgTXlGbGVldExpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9teS1mbGVldC1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTXlGbGVldERldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi9teS1mbGVldC1kZXRhaWxzLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAgICAgICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIm15LWZsZWV0LWxpc3RcIiB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcIm15LWZsZWV0LWxpc3RcIiwgY29tcG9uZW50OiBNeUZsZWV0TGlzdENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcIm15LWZsZWV0LWRldGFpbHMvOmlkLzpuYW1lXCIsIGNvbXBvbmVudDogTXlGbGVldERldGFpbHNDb21wb25lbnQgfVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIE15RmxlZXRMaXN0Q29tcG9uZW50LFxuICAgICAgICBNeUZsZWV0RGV0YWlsc0NvbXBvbmVudCxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBNeUZsZWV0TGlzdENvbXBvbmVudCxcbiAgICAgICAgTXlGbGVldERldGFpbHNDb21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBNeUZsZWV0TW9kdWxlIHsgfVxuIl19