"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.onTabViewLoaded = function (_a) {
        var tabView = _a.object;
        if (platform_1.isAndroid) {
            return;
        }
        tabView.eachChild(function (child) {
            var tabBarItem = child.__controller.tabBarItem;
            tabBarItem.titlePositionAdjustment = { horizontal: 0, vertical: -14 };
        });
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: "tabs",
            moduleId: module.id,
            templateUrl: "./tabs.component.html"
        })
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxxQ0FBcUM7QUFPckM7SUFBQTtJQVdBLENBQUM7SUFWRyx1Q0FBZSxHQUFmLFVBQWdCLEVBQW1CO1lBQWpCLG1CQUFlO1FBQzdCLElBQUksb0JBQVMsRUFBRTtZQUNYLE9BQU87U0FDVjtRQUVELE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLO1lBQ3BCLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO1lBQ2pELFVBQVUsQ0FBQyx1QkFBdUIsR0FBRyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDMUUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBVlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQztPQUNXLGFBQWEsQ0FXekI7SUFBRCxvQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ0YWJzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RhYnMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IHtcbiAgICBvblRhYlZpZXdMb2FkZWQoeyBvYmplY3Q6IHRhYlZpZXcgfSkge1xuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0YWJWaWV3LmVhY2hDaGlsZCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhYkJhckl0ZW0gPSBjaGlsZC5fX2NvbnRyb2xsZXIudGFiQmFySXRlbTtcbiAgICAgICAgICAgIHRhYkJhckl0ZW0udGl0bGVQb3NpdGlvbkFkanVzdG1lbnQgPSB7IGhvcml6b250YWw6IDAsIHZlcnRpY2FsOiAtMTQgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19