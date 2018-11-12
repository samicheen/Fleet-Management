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
    MyFleetDetailsComponent.title = "Vehicle Service Details";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZmxlZXQtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS1mbGVldC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwwQ0FBaUQ7QUFDakQsb0VBQWtFO0FBQ2xFLG1FQUFpRDtBQUNqRCwwRUFBd0U7QUFNeEU7SUFTSSxpQ0FBb0IsaUJBQW9DLEVBQ3BDLGNBQThCLEVBQzlCLGNBQThCO1FBRjlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVYxQyxrQkFBYSxHQUFHLGdDQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUk1QyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsWUFBTyxHQUFHLENBQUMsQ0FBQztJQUtuQixDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksZ0NBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3ZELEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBakJhLDZCQUFLLEdBQUcseUJBQXlCLENBQUM7SUFIdkMsdUJBQXVCO1FBSm5DLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG1DQUFtQztTQUNuRCxDQUFDO3lDQVV5QyxzQ0FBaUI7WUFDcEIsZ0NBQWM7WUFDZCx1QkFBYztPQVh6Qyx1QkFBdUIsQ0FxQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vY29yZS9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vY29yZS9zZXJ2aWNlcy9uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL215LWZsZWV0LWRldGFpbHMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBNeUZsZWV0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBkYXRhU3RvcmVUeXBlID0gS2ludmV5LkRhdGFTdG9yZVR5cGUuQ2FjaGU7XG4gICAgXG4gICAgcHVibGljIHN0YXRpYyB0aXRsZSA9IFwiVmVoaWNsZSBTZXJ2aWNlIERldGFpbHNcIjtcbiAgICBwdWJsaWMgaXRlbTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHB1YmxpYyByb3RhdGVUaXJlcyA9IDA7XG4gICAgcHVibGljIGNoYW5nZU9pbCA9IDE7XG4gICAgcHVibGljIGNhcldhc2ggPSAwO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB2YXIgcXVlcnkgPSBuZXcgS2ludmV5LlF1ZXJ5KCk7XG4gICAgICAgIHZhciB2ZWhpY2xlSWQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDtcbiAgICAgICAgcXVlcnkuZXF1YWxUbygndmVoaWNsZUlkJywgdmVoaWNsZUlkKTtcbiAgICAgICAgcXVlcnkuYXNjZW5kaW5nKCdzZXJ2aWNlVHlwZScpO1xuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLmJhY2tlbmRTZXJ2aWNlLmZpbmQoXCJ3b3Jrb3JkZXJzXCIsIHRoaXMuZGF0YVN0b3JlVHlwZSwgcXVlcnkpO1xuICAgIH1cbn1cbiJdfQ==