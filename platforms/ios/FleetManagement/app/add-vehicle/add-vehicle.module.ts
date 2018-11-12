import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "../shared/shared.module";
import { AddVehicleFormComponent } from "./add-vehicle-form.component";

@NgModule({
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "add-vehicle-form" },
            { path: "add-vehicle-form", component: AddVehicleFormComponent },
            { path: "add-vehicle-form/:id", component: AddVehicleFormComponent },
            { path: "add-vehicle-form/:id/:foreignKeyName", component: AddVehicleFormComponent }
        ])
    ],
    entryComponents: [
        AddVehicleFormComponent,
    ],
    declarations: [
        AddVehicleFormComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AddVehicleModule { }
