
import { LoggedInLazyLoadGuard } from "./guards/logged-in-lazy-load.guard";

export var config = {
	backendConfig: {},
	routes: {
	    tabs: [
	        {
	            path: "",
	            redirectTo: "/(myfleetTab:my-fleet/my-fleet-list)",
	            pathMatch: "full"
	        },
	        {
	            path: "my-fleet",
	            outlet: "myfleetTab",
	            loadChildren: "./my-fleet/my-fleet.module#MyFleetModule",
	            canLoad: [LoggedInLazyLoadGuard]
	        }
	    ],
	    modals: [],
	    hidden: [
	        {
	            path: "add-vehicle",
	            title: "Add Vehicle",
	            loadChildren: "./add-vehicle/add-vehicle.module#AddVehicleModule"
	        }
	    ]
	}
};
		