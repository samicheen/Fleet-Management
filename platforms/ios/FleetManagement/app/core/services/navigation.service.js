"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_component_1 = require("../../core/navigation/modal.component");
var app = require("tns-core-modules/application/application");
var NavigationService = /** @class */ (function () {
    function NavigationService(modalDialogService, applicationRef, zone, routerExtensions) {
        this.modalDialogService = modalDialogService;
        this.applicationRef = applicationRef;
        this.zone = zone;
        this.routerExtensions = routerExtensions;
        this.modalDialogPromise = null;
    }
    NavigationService.prototype.navigateTo = function (path, extras) {
        if (this.isInsideModal()) {
            this.navigate([path], extras || {});
        }
        else {
            this.navigateToModal(path);
        }
    };
    NavigationService.prototype.navigate = function (command, extras) {
        var _this = this;
        extras.animated = true;
        extras.transition = extras.transition || {
            name: "slide",
            duration: 200,
            curve: "ease"
        };
        this.zone.run(function () { return _this.routerExtensions.navigate(command, extras); });
    };
    NavigationService.prototype.navigateToModal = function (path, params) {
        var _this = this;
        if (this.modalDialogPromise) {
            this.modalDialogPromise.then(function () { return _this.navigateToModal(path, params); });
            return;
        }
        var options = {
            context: {
                path: path,
                params: params
            },
            fullscreen: true,
            // Access root viewContainerRef
            // https://github.com/angular/angular/issues/6446#issuecomment-173459525
            viewContainerRef: this.applicationRef.components[0].instance.viewContainerRef
        };
        this.zone.run(function () {
            _this.modalDialogPromise = _this.modalDialogService
                .showModal(modal_component_1.ModalComponent, options)
                .then(function () { return _this.modalDialogPromise = null; });
        });
    };
    NavigationService.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    NavigationService.prototype.isInsideModal = function () {
        var rootView = app.getRootView();
        return rootView && rootView.modal;
    };
    NavigationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ApplicationRef,
            core_1.NgZone,
            router_1.RouterExtensions])
    ], NavigationService);
    return NavigationService;
}());
exports.NavigationService = NavigationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBQ25FLHNEQUErRDtBQUUvRCxrRUFBMkY7QUFDM0YseUVBQXVFO0FBQ3ZFLDhEQUFnRTtBQUdoRTtJQUdJLDJCQUFvQixrQkFBc0MsRUFDdEMsY0FBOEIsRUFDOUIsSUFBWSxFQUNaLGdCQUFrQztRQUhsQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1oscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUw5Qyx1QkFBa0IsR0FBRyxJQUFJLENBQUM7SUFNbEMsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxJQUFZLEVBQUUsTUFBaUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRCxvQ0FBUSxHQUFSLFVBQVMsT0FBYyxFQUFFLE1BQWdDO1FBQXpELGlCQVNDO1FBUkcsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJO1lBQ3JDLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsTUFBTTtTQUNoQixDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUEvQyxDQUErQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELDJDQUFlLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLE1BQWlCO1FBQS9DLGlCQXNCQztRQXJCRyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO1lBQ3ZFLE9BQU87U0FDVjtRQUVELElBQU0sT0FBTyxHQUF1QjtZQUNoQyxPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxNQUFBO2dCQUNKLE1BQU0sRUFBRSxNQUFNO2FBQ2pCO1lBQ0QsVUFBVSxFQUFFLElBQUk7WUFDaEIsK0JBQStCO1lBQy9CLHdFQUF3RTtZQUN4RSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCO1NBQ2hGLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNWLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFJLENBQUMsa0JBQWtCO2lCQUM1QyxTQUFTLENBQUMsZ0NBQWMsRUFBRSxPQUFPLENBQUM7aUJBQ2xDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVPLHlDQUFhLEdBQXJCO1FBQ0ksSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQTNEUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FJK0IsaUNBQWtCO1lBQ3RCLHFCQUFjO1lBQ3hCLGFBQU07WUFDTSx5QkFBZ0I7T0FON0MsaUJBQWlCLENBNEQ3QjtJQUFELHdCQUFDO0NBQUEsQUE1REQsSUE0REM7QUE1RFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lLCBBcHBsaWNhdGlvblJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb3JlL25hdmlnYXRpb24vbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb25cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgICBwcml2YXRlIG1vZGFsRGlhbG9nUHJvbWlzZSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsRGlhbG9nU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIH1cblxuICAgIG5hdmlnYXRlVG8ocGF0aDogc3RyaW5nLCBleHRyYXM/OiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNJbnNpZGVNb2RhbCgpKSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKFtwYXRoXSwgZXh0cmFzIHx8IHt9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb01vZGFsKHBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2aWdhdGUoY29tbWFuZDogYW55W10sIGV4dHJhczogRXh0ZW5kZWROYXZpZ2F0aW9uRXh0cmFzKSB7XG4gICAgICAgIGV4dHJhcy5hbmltYXRlZCA9IHRydWU7XG4gICAgICAgIGV4dHJhcy50cmFuc2l0aW9uID0gZXh0cmFzLnRyYW5zaXRpb24gfHwge1xuICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKGNvbW1hbmQsIGV4dHJhcykpO1xuICAgIH1cblxuICAgIG5hdmlnYXRlVG9Nb2RhbChwYXRoOiBzdHJpbmcsIHBhcmFtcz86IHN0cmluZ1tdKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGFsRGlhbG9nUHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbERpYWxvZ1Byb21pc2UudGhlbigoKSA9PiB0aGlzLm5hdmlnYXRlVG9Nb2RhbChwYXRoLCBwYXJhbXMpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgIC8vIEFjY2VzcyByb290IHZpZXdDb250YWluZXJSZWZcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzY0NDYjaXNzdWVjb21tZW50LTE3MzQ1OTUyNVxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy5hcHBsaWNhdGlvblJlZi5jb21wb25lbnRzWzBdLmluc3RhbmNlLnZpZXdDb250YWluZXJSZWZcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kYWxEaWFsb2dQcm9taXNlID0gdGhpcy5tb2RhbERpYWxvZ1NlcnZpY2VcbiAgICAgICAgICAgICAgICAuc2hvd01vZGFsKE1vZGFsQ29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMubW9kYWxEaWFsb2dQcm9taXNlID0gbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzSW5zaWRlTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0IHJvb3RWaWV3ID0gYXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHJldHVybiByb290VmlldyAmJiByb290Vmlldy5tb2RhbDtcbiAgICB9XG59XG4iXX0=