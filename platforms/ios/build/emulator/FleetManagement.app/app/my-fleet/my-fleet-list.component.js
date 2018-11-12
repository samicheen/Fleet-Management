"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("../core/services/backend.service");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var router_1 = require("@angular/router");
var navigation_service_1 = require("../core/services/navigation.service");
var MyFleetListComponent = /** @class */ (function () {
    function MyFleetListComponent(backendService, navigationService, activatedRoute) {
        this.backendService = backendService;
        this.navigationService = navigationService;
        this.activatedRoute = activatedRoute;
        this.dataStoreType = kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Cache;
        this.collectionName = "vehicles";
    }
    MyFleetListComponent.prototype.ngOnInit = function () {
        this.items = this.backendService.find("vehicles", this.dataStoreType);
    };
    MyFleetListComponent.prototype.onPullToRefreshInitiated = function (_a) {
        var listView = _a.object;
        this.backendService.refresh(this.collectionName, this.items).then(function () {
            listView.notifyPullToRefreshFinished();
        });
    };
    MyFleetListComponent.prototype.onItemTap = function (args) {
        var item = args.view.bindingContext;
        this.navigationService.navigate(["../my-fleet-details", item._id], { relativeTo: this.activatedRoute });
    };
    MyFleetListComponent.prototype.addTapped = function () {
        this.navigationService.navigateTo("../../add-vehicle");
    };
    MyFleetListComponent.title = "My Fleet List";
    MyFleetListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./my-fleet-list.component.html"
        }),
        __metadata("design:paramtypes", [backend_service_1.BackendService,
            navigation_service_1.NavigationService,
            router_1.ActivatedRoute])
    ], MyFleetListComponent);
    return MyFleetListComponent;
}());
exports.MyFleetListComponent = MyFleetListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZmxlZXQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS1mbGVldC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxvRUFBa0U7QUFDbEUsbUVBQWlEO0FBRWpELDBDQUFpRDtBQUNqRCwwRUFBd0U7QUFNeEU7SUFNSSw4QkFBb0IsY0FBOEIsRUFDOUIsaUJBQW9DLEVBQ3BDLGNBQThCO1FBRjlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVAxQyxrQkFBYSxHQUFHLGdDQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUMzQyxtQkFBYyxHQUFHLFVBQVUsQ0FBQztJQU9wQyxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU0sdURBQXdCLEdBQS9CLFVBQWdDLEVBQXVDO1lBQXJDLG9CQUFnQjtRQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakUsUUFBUSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sd0NBQVMsR0FBaEIsVUFBaUIsSUFBdUI7UUFDdkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FDOUIsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ2pDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FDbkMsQ0FBQztJQUNILENBQUM7SUFFTSx3Q0FBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBNUJhLDBCQUFLLEdBQUcsZUFBZSxDQUFDO0lBSDdCLG9CQUFvQjtRQUpoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDaEQsQ0FBQzt5Q0FPc0MsZ0NBQWM7WUFDWCxzQ0FBaUI7WUFDcEIsdUJBQWM7T0FSekMsb0JBQW9CLENBZ0NoQztJQUFELDJCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vY29yZS9zZXJ2aWNlcy9uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL215LWZsZWV0LWxpc3QuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBNeUZsZWV0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBkYXRhU3RvcmVUeXBlID0gS2ludmV5LkRhdGFTdG9yZVR5cGUuQ2FjaGU7XG4gICAgcHJpdmF0ZSBjb2xsZWN0aW9uTmFtZSA9IFwidmVoaWNsZXNcIjtcbiAgICBwdWJsaWMgc3RhdGljIHRpdGxlID0gXCJNeSBGbGVldCBMaXN0XCI7XG4gICAgcHVibGljIGl0ZW1zOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuYmFja2VuZFNlcnZpY2UuZmluZChcInZlaGljbGVzXCIsIHRoaXMuZGF0YVN0b3JlVHlwZSk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoeyBvYmplY3Q6IGxpc3RWaWV3IH06IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgXHR0aGlzLmJhY2tlbmRTZXJ2aWNlLnJlZnJlc2godGhpcy5jb2xsZWN0aW9uTmFtZSwgdGhpcy5pdGVtcykudGhlbigoKSA9PiB7XG4gICAgXHRcdGxpc3RWaWV3Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgIFx0fSk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICBcdGNvbnN0IGl0ZW0gPSBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XG4gICAgXHR0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFxuICAgIFx0XHRbXCIuLi9teS1mbGVldC1kZXRhaWxzXCIsIGl0ZW0uX2lkXSxcbiAgICBcdFx0eyByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlIH1cbiAgICBcdCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBhZGRUYXBwZWQoKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGVUbyhgLi4vLi4vYWRkLXZlaGljbGVgKTtcbiAgICB9XG59XG4iXX0=