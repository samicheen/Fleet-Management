import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "../shared/shared.module";
import { MyFleetListComponent } from "./my-fleet-list.component";
import { MyFleetDetailsComponent } from "./my-fleet-details.component";

@NgModule({
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "my-fleet-list" },
            { path: "my-fleet-list", component: MyFleetListComponent },
            { path: "my-fleet-details/:id/:name", component: MyFleetDetailsComponent }
        ])
    ],
    entryComponents: [
        MyFleetListComponent,
        MyFleetDetailsComponent,
    ],
    declarations: [
        MyFleetListComponent,
        MyFleetDetailsComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class MyFleetModule { }
