"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-ui-chart/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var angular_3 = require("nativescript-ui-calendar/angular");
var angular_4 = require("nativescript-ui-autocomplete/angular");
var angular_5 = require("nativescript-ui-dataform/angular");
var angular_6 = require("nativescript-ui-gauge/angular");
var hide_nav_bar_directive_1 = require("./directives/hide-nav-bar.directive");
var show_nav_bar_directive_1 = require("./directives/show-nav-bar.directive");
var action_bar_controller_directive_1 = require("./directives/action-bar-controller.directive");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUIChartModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUICalendarModule,
                angular_4.NativeScriptUIAutoCompleteTextViewModule,
                angular_5.NativeScriptUIDataFormModule,
                angular_6.NativeScriptUIGaugeModule
            ],
            exports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIChartModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUICalendarModule,
                angular_4.NativeScriptUIAutoCompleteTextViewModule,
                angular_5.NativeScriptUIDataFormModule,
                angular_6.NativeScriptUIGaugeModule,
                hide_nav_bar_directive_1.HideNavBarDirective,
                show_nav_bar_directive_1.ShowNavBarDirective,
                action_bar_controller_directive_1.ActionBarController
            ],
            declarations: [
                hide_nav_bar_directive_1.HideNavBarDirective,
                show_nav_bar_directive_1.ShowNavBarDirective,
                action_bar_controller_directive_1.ActionBarController
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLG9EQUFxRTtBQUNyRSx5REFBMEU7QUFDMUUsNERBQWdGO0FBQ2hGLDREQUFnRjtBQUNoRixnRUFBZ0c7QUFDaEcsNERBQWdGO0FBQ2hGLHlEQUEwRTtBQUUxRSw4RUFBMEU7QUFDMUUsOEVBQTBFO0FBQzFFLGdHQUFtRjtBQWlDbkY7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQS9CeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsbUNBQXlCO2dCQUN6QixzQ0FBNEI7Z0JBQzVCLHNDQUE0QjtnQkFDNUIsa0RBQXdDO2dCQUN4QyxzQ0FBNEI7Z0JBQzVCLG1DQUF5QjthQUM1QjtZQUNELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLCtCQUF1QjtnQkFDdkIsbUNBQXlCO2dCQUN6QixzQ0FBNEI7Z0JBQzVCLHNDQUE0QjtnQkFDNUIsa0RBQXdDO2dCQUN4QyxzQ0FBNEI7Z0JBQzVCLG1DQUF5QjtnQkFFekIsNENBQW1CO2dCQUNuQiw0Q0FBbUI7Z0JBQ25CLHFEQUFtQjthQUN0QjtZQUNELFlBQVksRUFBRTtnQkFDViw0Q0FBbUI7Z0JBQ25CLDRDQUFtQjtnQkFDbkIscURBQW1CO2FBQ3RCO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFlBQVksQ0FBRztJQUFELG1CQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEhpZGVOYXZCYXJEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2hpZGUtbmF2LWJhci5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IFNob3dOYXZCYXJEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3Nob3ctbmF2LWJhci5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IEFjdGlvbkJhckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2FjdGlvbi1iYXItY29udHJvbGxlci5kaXJlY3RpdmVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuXG4gICAgICAgIEhpZGVOYXZCYXJEaXJlY3RpdmUsXG4gICAgICAgIFNob3dOYXZCYXJEaXJlY3RpdmUsXG4gICAgICAgIEFjdGlvbkJhckNvbnRyb2xsZXJcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIaWRlTmF2QmFyRGlyZWN0aXZlLFxuICAgICAgICBTaG93TmF2QmFyRGlyZWN0aXZlLFxuICAgICAgICBBY3Rpb25CYXJDb250cm9sbGVyXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9XG4iXX0=