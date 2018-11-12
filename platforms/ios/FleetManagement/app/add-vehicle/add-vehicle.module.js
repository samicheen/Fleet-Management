"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_module_1 = require("../shared/shared.module");
var add_vehicle_form_component_1 = require("./add-vehicle-form.component");
var AddVehicleModule = /** @class */ (function () {
    function AddVehicleModule() {
    }
    AddVehicleModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "", redirectTo: "add-vehicle-form" },
                    { path: "add-vehicle-form", component: add_vehicle_form_component_1.AddVehicleFormComponent },
                    { path: "add-vehicle-form/:id", component: add_vehicle_form_component_1.AddVehicleFormComponent },
                    { path: "add-vehicle-form/:id/:foreignKeyName", component: add_vehicle_form_component_1.AddVehicleFormComponent }
                ])
            ],
            entryComponents: [
                add_vehicle_form_component_1.AddVehicleFormComponent,
            ],
            declarations: [
                add_vehicle_form_component_1.AddVehicleFormComponent,
            ],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AddVehicleModule);
    return AddVehicleModule;
}());
exports.AddVehicleModule = AddVehicleModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXZlaGljbGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLXZlaGljbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNFO0FBQ3RFLHNEQUF1RTtBQUN2RSx5REFBdUQ7QUFDdkQsMkVBQXVFO0FBc0J2RTtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBcEI1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsNEJBQVk7Z0JBQ1osaUNBQXdCLENBQUMsUUFBUSxDQUFDO29CQUM5QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFO29CQUM1QyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsb0RBQXVCLEVBQUU7b0JBQ2hFLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxvREFBdUIsRUFBRTtvQkFDcEUsRUFBRSxJQUFJLEVBQUUsc0NBQXNDLEVBQUUsU0FBUyxFQUFFLG9EQUF1QixFQUFFO2lCQUN2RixDQUFDO2FBQ0w7WUFDRCxlQUFlLEVBQUU7Z0JBQ2Isb0RBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG9EQUF1QjthQUMxQjtZQUNELFNBQVMsRUFBRSxFQUNWO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgQWRkVmVoaWNsZUZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9hZGQtdmVoaWNsZS1mb3JtLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAgICAgICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcImFkZC12ZWhpY2xlLWZvcm1cIiB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcImFkZC12ZWhpY2xlLWZvcm1cIiwgY29tcG9uZW50OiBBZGRWZWhpY2xlRm9ybUNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcImFkZC12ZWhpY2xlLWZvcm0vOmlkXCIsIGNvbXBvbmVudDogQWRkVmVoaWNsZUZvcm1Db21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogXCJhZGQtdmVoaWNsZS1mb3JtLzppZC86Zm9yZWlnbktleU5hbWVcIiwgY29tcG9uZW50OiBBZGRWZWhpY2xlRm9ybUNvbXBvbmVudCB9XG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgQWRkVmVoaWNsZUZvcm1Db21wb25lbnQsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQWRkVmVoaWNsZUZvcm1Db21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRWZWhpY2xlTW9kdWxlIHsgfVxuIl19