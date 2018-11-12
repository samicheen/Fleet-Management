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
        var query = new kinvey_nativescript_sdk_1.Kinvey.Query();
        query.ascending('readyToPick');
        this.items = this.backendService.find("vehicles", this.dataStoreType, query);
    };
    MyFleetListComponent.prototype.onPullToRefreshInitiated = function (_a) {
        var listView = _a.object;
        this.backendService.refresh(this.collectionName, this.items).then(function () {
            listView.notifyPullToRefreshFinished();
        });
    };
    MyFleetListComponent.prototype.onItemTap = function (args) {
        var item = args.view.bindingContext;
        this.navigationService.navigate(["../my-fleet-details", item._id, item.make], { relativeTo: this.activatedRoute });
    };
    MyFleetListComponent.prototype.addTapped = function () {
        this.navigationService.navigateTo("../../add-vehicle");
    };
    MyFleetListComponent.title = "ACME Fleet List";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZmxlZXQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS1mbGVldC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxvRUFBa0U7QUFDbEUsbUVBQWlEO0FBRWpELDBDQUFpRDtBQUNqRCwwRUFBd0U7QUFNeEU7SUFNSSw4QkFBb0IsY0FBOEIsRUFDOUIsaUJBQW9DLEVBQ3BDLGNBQThCO1FBRjlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVAxQyxrQkFBYSxHQUFHLGdDQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUMzQyxtQkFBYyxHQUFHLFVBQVUsQ0FBQztJQU9wQyxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksZ0NBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVNLHVEQUF3QixHQUEvQixVQUFnQyxFQUF1QztZQUFyQyxvQkFBZ0I7UUFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pFLFFBQVEsQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLHdDQUFTLEdBQWhCLFVBQWlCLElBQXVCO1FBQ3ZDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQzlCLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQzVDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FDbkMsQ0FBQztJQUNILENBQUM7SUFFTSx3Q0FBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBOUJhLDBCQUFLLEdBQUcsaUJBQWlCLENBQUM7SUFIL0Isb0JBQW9CO1FBSmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztTQUNoRCxDQUFDO3lDQU9zQyxnQ0FBYztZQUNYLHNDQUFpQjtZQUNwQix1QkFBYztPQVJ6QyxvQkFBb0IsQ0FrQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvcmUvc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzL25hdmlnYXRpb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbXktZmxlZXQtbGlzdC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIE15RmxlZXRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGRhdGFTdG9yZVR5cGUgPSBLaW52ZXkuRGF0YVN0b3JlVHlwZS5DYWNoZTtcbiAgICBwcml2YXRlIGNvbGxlY3Rpb25OYW1lID0gXCJ2ZWhpY2xlc1wiO1xuICAgIHB1YmxpYyBzdGF0aWMgdGl0bGUgPSBcIkFDTUUgRmxlZXQgTGlzdFwiO1xuICAgIHB1YmxpYyBpdGVtczogT2JzZXJ2YWJsZTxhbnlbXT47XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHZhciBxdWVyeSA9IG5ldyBLaW52ZXkuUXVlcnkoKTtcbiAgICAgICAgcXVlcnkuYXNjZW5kaW5nKCdyZWFkeVRvUGljaycpO1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5iYWNrZW5kU2VydmljZS5maW5kKFwidmVoaWNsZXNcIiwgdGhpcy5kYXRhU3RvcmVUeXBlLCBxdWVyeSk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoeyBvYmplY3Q6IGxpc3RWaWV3IH06IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgXHR0aGlzLmJhY2tlbmRTZXJ2aWNlLnJlZnJlc2godGhpcy5jb2xsZWN0aW9uTmFtZSwgdGhpcy5pdGVtcykudGhlbigoKSA9PiB7XG4gICAgXHRcdGxpc3RWaWV3Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgIFx0fSk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICBcdGNvbnN0IGl0ZW0gPSBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XG4gICAgXHR0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFxuICAgIFx0XHRbXCIuLi9teS1mbGVldC1kZXRhaWxzXCIsIGl0ZW0uX2lkLCBpdGVtLm1ha2VdLFxuICAgIFx0XHR7IHJlbGF0aXZlVG86IHRoaXMuYWN0aXZhdGVkUm91dGUgfVxuICAgIFx0KTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFkZFRhcHBlZCgpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZVRvKGAuLi8uLi9hZGQtdmVoaWNsZWApO1xuICAgIH1cbn1cbiJdfQ==