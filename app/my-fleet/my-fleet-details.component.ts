import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { BackendService } from "../core/services/backend.service";
import { Kinvey } from "kinvey-nativescript-sdk";
import { NavigationService } from "../core/services/navigation.service";

@Component({
    moduleId: module.id,
    templateUrl: "./my-fleet-details.component.html"
})
export class MyFleetDetailsComponent implements OnInit {
    private dataStoreType = Kinvey.DataStoreType.Cache;
    
    public static title = "Vehicle Service Status";
    public item: Observable<any>;
    public rotateTires = 0;
    public changeOil = 1;
    public carWash = 0;
    
    constructor(private navigationService: NavigationService,
                private backendService: BackendService,
                private activatedRoute: ActivatedRoute) {
    }
    
    ngOnInit(): void {
        var query = new Kinvey.Query();
        var vehicleId = this.activatedRoute.snapshot.params.id;
        query.equalTo('vehicleId', vehicleId);
        query.ascending('serviceType');
        this.item = this.backendService.find("workorders", this.dataStoreType, query);
    }
}
