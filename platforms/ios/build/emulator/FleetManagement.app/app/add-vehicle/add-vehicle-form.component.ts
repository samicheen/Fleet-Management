import { Component, OnInit, ViewChild } from "@angular/core";
const createMetadata = require("./add-vehicle-form.create.metadata.json");
const updateMetadata = require("./add-vehicle-form.update.metadata.json");
import { ActivatedRoute } from "@angular/router";
import { BackendService } from "../core/services/backend.service";
import { Kinvey } from "kinvey-nativescript-sdk";
import { NavigationService } from "../core/services/navigation.service";
import { ActionBarController } from "../shared/directives/action-bar-controller.directive";

@Component({
    moduleId: module.id,
    templateUrl: "./add-vehicle-form.component.html"
})
export class AddVehicleFormComponent implements OnInit {
    private dataStoreType = Kinvey.DataStoreType.Cache;
    public item: any;
    public metadata: any;
    public static title = "Add Vehicle";
    @ViewChild(ActionBarController) actionBarController: ActionBarController;
    @ViewChild("formObject") radDataForm: any;
    
    constructor(private navigationService: NavigationService,
                private backendService: BackendService,
                private activatedRoute: ActivatedRoute) {
    }
    
    ngOnInit(): void {
        const itemId = this.activatedRoute.snapshot.params.id;
        const foreignKeyName = this.activatedRoute.snapshot.params.foreignKeyName;
        if (itemId && !foreignKeyName) {
        	this.backendService.findById("vehicles", itemId, this.dataStoreType).subscribe(dbItem => {
        		this.item = dbItem;
        		this.metadata = updateMetadata;
        	});
        } else {
        	this.item = { image: "", registrationPLate: "", vin: "", year: 0, model: "", make: "", readyToPick: 0 };
        	if (foreignKeyName) {
        		this.item[foreignKeyName] = itemId;
        	}
        
        	this.metadata = createMetadata;
        }
    }
    
    submitForm() {
    	this.radDataForm.dataForm.validateAll()
    			.then(result => {
    				if (result) {
                        const itemToSave = this.item;
                        console.log(itemToSave);
                        this.item = null;
                        var actionController = this.actionBarController;
    					Kinvey.DataStore.collection("vehicles").save(itemToSave)
    						.then(function (vehicle) {
                                var carWash = {
                                    vehicleId: vehicle._id,
                                    serviceType: 'car_wash',
                                    completed: 0
                                };
                                var oilChange = {
                                    vehicleId: vehicle._id,
                                    serviceType: 'change_oil',
                                    completed: 0
                                };
                                var rotateTires = {
                                    vehicleId: vehicle._id,
                                    serviceType: 'rotate_tires',
                                    completed: 0
                                };
                                Kinvey.DataStore.collection("workorders").save(carWash).then(()=>{
                                    Kinvey.DataStore.collection("workorders").save(oilChange).then(() =>{
                                        Kinvey.DataStore.collection("workorders").save(rotateTires).then(()=>{
                                            actionController.goBack();
                                        });
                                    });
                                });
                            })
                            .catch(function(err){
                                console.log(err);
                            });
    				}
    			});
    }
}
