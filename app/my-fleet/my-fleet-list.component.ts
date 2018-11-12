import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BackendService } from "../core/services/backend.service";
import { Kinvey } from "kinvey-nativescript-sdk";
import { ListViewEventData } from "nativescript-ui-listview";
import { ActivatedRoute } from "@angular/router";
import { NavigationService } from "../core/services/navigation.service";

@Component({
    moduleId: module.id,
    templateUrl: "./my-fleet-list.component.html"
})
export class MyFleetListComponent implements OnInit {
    private dataStoreType = Kinvey.DataStoreType.Cache;
    private collectionName = "vehicles";
    public static title = "ACME Fleet List";
    public items: Observable<any[]>;
    
    constructor(private backendService: BackendService,
                private navigationService: NavigationService,
                private activatedRoute: ActivatedRoute) {
    }
    
    ngOnInit(): void {
        var query = new Kinvey.Query();
        query.ascending('readyToPick');
        this.items = this.backendService.find("vehicles", this.dataStoreType, query);
    }
    
    public onPullToRefreshInitiated({ object: listView }: ListViewEventData) {
    	this.backendService.refresh(this.collectionName, this.items).then(() => {
    		listView.notifyPullToRefreshFinished();
    	});
    }
    
    public onItemTap(args: ListViewEventData) {
    	const item = args.view.bindingContext;
    	this.navigationService.navigate(
    		["../my-fleet-details", item._id, item.make],
    		{ relativeTo: this.activatedRoute }
    	);
    }
    
    public addTapped() {
        this.navigationService.navigateTo(`../../add-vehicle`);
    }
}
