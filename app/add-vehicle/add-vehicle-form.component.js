"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var createMetadata = require("./add-vehicle-form.create.metadata.json");
var updateMetadata = require("./add-vehicle-form.update.metadata.json");
var router_1 = require("@angular/router");
var backend_service_1 = require("../core/services/backend.service");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var navigation_service_1 = require("../core/services/navigation.service");
var action_bar_controller_directive_1 = require("../shared/directives/action-bar-controller.directive");
var AddVehicleFormComponent = /** @class */ (function () {
    function AddVehicleFormComponent(navigationService, backendService, activatedRoute) {
        this.navigationService = navigationService;
        this.backendService = backendService;
        this.activatedRoute = activatedRoute;
        this.dataStoreType = kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Cache;
    }
    AddVehicleFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var itemId = this.activatedRoute.snapshot.params.id;
        var foreignKeyName = this.activatedRoute.snapshot.params.foreignKeyName;
        if (itemId && !foreignKeyName) {
            this.backendService.findById("vehicles", itemId, this.dataStoreType).subscribe(function (dbItem) {
                _this.item = dbItem;
                _this.metadata = updateMetadata;
            });
        }
        else {
            this.item = { image: "", registrationPLate: "", vin: "", year: 0, model: "", make: "", readyToPick: 0 };
            if (foreignKeyName) {
                this.item[foreignKeyName] = itemId;
            }
            this.metadata = createMetadata;
        }
    };
    AddVehicleFormComponent.prototype.submitForm = function () {
        var _this = this;
        this.radDataForm.dataForm.validateAll()
            .then(function (result) {
            if (result) {
                var itemToSave = _this.item;
                console.log(itemToSave);
                _this.item = null;
                var actionController = _this.actionBarController;
                kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("vehicles").save(itemToSave)
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
                    kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("workorders").save(carWash).then(function () {
                        kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("workorders").save(oilChange).then(function () {
                            kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("workorders").save(rotateTires).then(function () {
                                actionController.goBack();
                            });
                        });
                    });
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }
        });
    };
    AddVehicleFormComponent.title = "Add Vehicle";
    __decorate([
        core_1.ViewChild(action_bar_controller_directive_1.ActionBarController),
        __metadata("design:type", action_bar_controller_directive_1.ActionBarController)
    ], AddVehicleFormComponent.prototype, "actionBarController", void 0);
    __decorate([
        core_1.ViewChild("formObject"),
        __metadata("design:type", Object)
    ], AddVehicleFormComponent.prototype, "radDataForm", void 0);
    AddVehicleFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./add-vehicle-form.component.html"
        }),
        __metadata("design:paramtypes", [navigation_service_1.NavigationService,
            backend_service_1.BackendService,
            router_1.ActivatedRoute])
    ], AddVehicleFormComponent);
    return AddVehicleFormComponent;
}());
exports.AddVehicleFormComponent = AddVehicleFormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXZlaGljbGUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGQtdmVoaWNsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUMxRSxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUMxRSwwQ0FBaUQ7QUFDakQsb0VBQWtFO0FBQ2xFLG1FQUFpRDtBQUNqRCwwRUFBd0U7QUFDeEUsd0dBQTJGO0FBTTNGO0lBUUksaUNBQW9CLGlCQUFvQyxFQUNwQyxjQUE4QixFQUM5QixjQUE4QjtRQUY5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFUMUMsa0JBQWEsR0FBRyxnQ0FBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFVbkQsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmRyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3RELElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDMUUsSUFBSSxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDcEYsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1lBQ2hDLENBQUMsQ0FB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QXNFbkM7SUFBRCw4QkFBQztDQUFBLEFBdEVELElBc0VDO0FBdEVZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuY29uc3QgY3JlYXRlTWV0YWRhdGEgPSByZXF1aXJlKFwiLi9hZGQtdmVoaWNsZS1mb3JtLmNyZWF0ZS5tZXRhZGF0YS5qc29uXCIpO1xuY29uc3QgdXBkYXRlTWV0YWRhdGEgPSByZXF1aXJlKFwiLi9hZGQtdmVoaWNsZS1mb3JtLnVwZGF0ZS5tZXRhZGF0YS5qc29uXCIpO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi9jb3JlL3NlcnZpY2VzL25hdmlnYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgQWN0aW9uQmFyQ29udHJvbGxlciB9IGZyb20gXCIuLi9zaGFyZWQvZGlyZWN0aXZlcy9hY3Rpb24tYmFyLWNvbnRyb2xsZXIuZGlyZWN0aXZlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hZGQtdmVoaWNsZS1mb3JtLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQWRkVmVoaWNsZUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZGF0YVN0b3JlVHlwZSA9IEtpbnZleS5EYXRhU3RvcmVUeXBlLkNhY2hlO1xuICAgIHB1YmxpYyBpdGVtOiBhbnk7XG4gICAgcHVibGljIG1ldGFkYXRhOiBhbnk7XG4gICAgcHVibGljIHN0YXRpYyB0aXRsZSA9IFwiQWRkIFZlaGljbGVcIjtcbiAgICBAVmlld0NoaWxkKEFjdGlvbkJhckNvbnRyb2xsZXIpIGFjdGlvbkJhckNvbnRyb2xsZXI6IEFjdGlvbkJhckNvbnRyb2xsZXI7XG4gICAgQFZpZXdDaGlsZChcImZvcm1PYmplY3RcIikgcmFkRGF0YUZvcm06IGFueTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQ7XG4gICAgICAgIGNvbnN0IGZvcmVpZ25LZXlOYW1lID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXMuZm9yZWlnbktleU5hbWU7XG4gICAgICAgIGlmIChpdGVtSWQgJiYgIWZvcmVpZ25LZXlOYW1lKSB7XG4gICAgICAgIFx0dGhpcy5iYWNrZW5kU2VydmljZS5maW5kQnlJZChcInZlaGljbGVzXCIsIGl0ZW1JZCwgdGhpcy5kYXRhU3RvcmVUeXBlKS5zdWJzY3JpYmUoZGJJdGVtID0+IHtcbiAgICAgICAgXHRcdHRoaXMuaXRlbSA9IGRiSXRlbTtcbiAgICAgICAgXHRcdHRoaXMubWV0YWRhdGEgPSB1cGRhdGVNZXRhZGF0YTtcbiAgICAgICAgXHR9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgXHR0aGlzLml0ZW0gPSB7IGltYWdlOiBcIlwiLCByZWdpc3RyYXRpb25QTGF0ZTogXCJcIiwgdmluOiBcIlwiLCB5ZWFyOiAwLCBtb2RlbDogXCJcIiwgbWFrZTogXCJcIiwgcmVhZHlUb1BpY2s6IDAgfTtcbiAgICAgICAgXHRpZiAoZm9yZWlnbktleU5hbWUpIHtcbiAgICAgICAgXHRcdHRoaXMuaXRlbVtmb3JlaWduS2V5TmFtZV0gPSBpdGVtSWQ7XG4gICAgICAgIFx0fVxuICAgICAgICBcbiAgICAgICAgXHR0aGlzLm1ldGFkYXRhID0gY3JlYXRlTWV0YWRhdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc3VibWl0Rm9ybSgpIHtcbiAgICBcdHRoaXMucmFkRGF0YUZvcm0uZGF0YUZvcm0udmFsaWRhdGVBbGwoKVxuICAgIFx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XG4gICAgXHRcdFx0XHRpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtVG9TYXZlID0gdGhpcy5pdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbVRvU2F2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbkNvbnRyb2xsZXIgPSB0aGlzLmFjdGlvbkJhckNvbnRyb2xsZXI7XG4gICAgXHRcdFx0XHRcdEtpbnZleS5EYXRhU3RvcmUuY29sbGVjdGlvbihcInZlaGljbGVzXCIpLnNhdmUoaXRlbVRvU2F2ZSlcbiAgICBcdFx0XHRcdFx0XHQudGhlbihmdW5jdGlvbiAodmVoaWNsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FyV2FzaCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlaGljbGVJZDogdmVoaWNsZS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlVHlwZTogJ2Nhcl93YXNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2lsQ2hhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoaWNsZUlkOiB2ZWhpY2xlLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VUeXBlOiAnY2hhbmdlX29pbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdGF0ZVRpcmVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoaWNsZUlkOiB2ZWhpY2xlLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VUeXBlOiAncm90YXRlX3RpcmVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb24oXCJ3b3Jrb3JkZXJzXCIpLnNhdmUoY2FyV2FzaCkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2ludmV5LkRhdGFTdG9yZS5jb2xsZWN0aW9uKFwid29ya29yZGVyc1wiKS5zYXZlKG9pbENoYW5nZSkudGhlbigoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb24oXCJ3b3Jrb3JkZXJzXCIpLnNhdmUocm90YXRlVGlyZXMpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uQ29udHJvbGxlci5nb0JhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0pO1xuICAgIH1cbn1cbiJdfQ==