"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var backend_service_1 = require("../core/services/backend.service");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var navigation_service_1 = require("../core/services/navigation.service");
var MyFleetDetailsComponent = /** @class */ (function () {
    function MyFleetDetailsComponent(navigationService, backendService, activatedRoute) {
        this.navigationService = navigationService;
        this.backendService = backendService;
        this.activatedRoute = activatedRoute;
        this.dataStoreType = kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Cache;
        this.rotateTires = 0;
        this.changeOil = 1;
        this.carWash = 0;
    }
    MyFleetDetailsComponent.prototype.ngOnInit = function () {
        var query = new kinvey_nativescript_sdk_1.Kinvey.Query();
        var vehicleId = this.activatedRoute.snapshot.params.id;
        query.equalTo('vehicleId', vehicleId);
        query.ascending('serviceType');
        this.item = this.backendService.find("workorders", this.dataStoreType, query);
    };
    MyFleetDetailsComponent.title = "Vehicle Service Status";
    MyFleetDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./my-fleet-details.component.html"
        }),
        __metadata("design:paramtypes", [navigation_service_1.NavigationService,
            backend_service_1.BackendService,
            router_1.ActivatedRoute])
    ], MyFleetDetailsComponent);
    return MyFleetDetailsComponent;
}());
exports.MyFleetDetailsComponent = MyFleetDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZmxlZXQtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS1mbGVldC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwwQ0FBaUQ7QUFDakQsb0VBQWtFO0FBQ2xFLG1FQUFpRDtBQUNqRCwwRUFBd0U7QUFNeEU7SUFTSSxpQ0FBb0IsaUJBQW9DLEVBQ3BDLGNBQThCLEVBQzlCLGNBQThCO1FBRjlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVYxQyxrQkFBYSxHQUFHLGdDQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUk1QyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsWUFBTyxHQUFHLENBQUMsQ0FBQztJQUtuQixDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksZ0NBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3ZELEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBakJhLDZCQUFLLEdBQUcsd0JBQXdCLENBQUM7SUFIdEMsdUJBQXVCO1FBSm5DLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG1DQUFtQztTQUNuRCxDQUFDO3lDQVV5QyxzQ0FBaUI7WUFDcEIsZ0NBQWM7WUFDZCx1QkFBYztPQVh6Qyx1QkFBdUIsQ0FxQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vY29yZS9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vY29yZS9zZXJ2aWNlcy9uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL215LWZsZWV0LWRldGFpbHMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBNeUZsZWV0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBkYXRhU3RvcmVUeXBlID0gS2ludmV5LkRhdGFTdG9yZVR5cGUuQ2FjaGU7XG4gICAgXG4gICAgcHVibGljIHN0YXRpYyB0aXRsZSA9IFwiVmVoaWNsZSBTZXJ2aWNlIFN0YXR1c1wiO1xuICAgIHB1YmxpYyBpdGVtOiBPYnNlcnZhYmxlPGFueT47XG4gICAgcHVibGljIHJvdGF0ZVRpcmVzID0gMDtcbiAgICBwdWJsaWMgY2hhbmdlT2lsID0gMTtcbiAgICBwdWJsaWMgY2FyV2FzaCA9IDA7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHZhciBxdWVyeSA9IG5ldyBLaW52ZXkuUXVlcnkoKTtcbiAgICAgICAgdmFyIHZlaGljbGVJZCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1zLmlkO1xuICAgICAgICBxdWVyeS5lcXVhbFRvKCd2ZWhpY2xlSWQnLCB2ZWhpY2xlSWQpO1xuICAgICAgICBxdWVyeS5hc2NlbmRpbmcoJ3NlcnZpY2VUeXBlJyk7XG4gICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuYmFja2VuZFNlcnZpY2UuZmluZChcIndvcmtvcmRlcnNcIiwgdGhpcy5kYXRhU3RvcmVUeXBlLCBxdWVyeSk7XG4gICAgfVxufVxuIl19