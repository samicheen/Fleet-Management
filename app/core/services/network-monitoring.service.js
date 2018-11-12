"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var Connectivity = require("tns-core-modules/connectivity");
var NetworkMonitoringService = /** @class */ (function () {
    function NetworkMonitoringService(zone) {
        this.zone = zone;
        this.init();
    }
    Object.defineProperty(NetworkMonitoringService.prototype, "connectionObservable", {
        get: function () {
            return this.subject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NetworkMonitoringService.prototype.init = function () {
        var _this = this;
        this.isOnline = this.getOnlineStatus(Connectivity.getConnectionType());
        this.subject = new rxjs_1.BehaviorSubject(this.isOnline);
        Connectivity.startMonitoring(function (connectionType) {
            _this.isOnline = _this.getOnlineStatus(connectionType);
            _this.subject.next(_this.isOnline);
        });
    };
    NetworkMonitoringService.prototype.getOnlineStatus = function (connectionType) {
        return connectionType === Connectivity.connectionType.wifi
            || connectionType === Connectivity.connectionType.mobile;
    };
    NetworkMonitoringService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], NetworkMonitoringService);
    return NetworkMonitoringService;
}());
exports.NetworkMonitoringService = NetworkMonitoringService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay1tb25pdG9yaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXR3b3JrLW1vbml0b3Jpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUNuRCw2QkFBbUQ7QUFDbkQsNERBQThEO0FBRzlEO0lBSUksa0NBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQzVCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsc0JBQUksMERBQW9CO2FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBRU8sdUNBQUksR0FBWjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHNCQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELFlBQVksQ0FBQyxlQUFlLENBQUMsVUFBQSxjQUFjO1lBQ3ZDLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sa0RBQWUsR0FBdkIsVUFBd0IsY0FBc0I7UUFDMUMsT0FBTyxjQUFjLEtBQUssWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJO2VBQ25ELGNBQWMsS0FBSyxZQUFZLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUNqRSxDQUFDO0lBeEJRLHdCQUF3QjtRQURwQyxpQkFBVSxFQUFFO3lDQUtpQixhQUFNO09BSnZCLHdCQUF3QixDQXlCcEM7SUFBRCwrQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0ICogYXMgQ29ubmVjdGl2aXR5IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2Nvbm5lY3Rpdml0eVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV0d29ya01vbml0b3JpbmdTZXJ2aWNlIHtcbiAgICBwdWJsaWMgaXNPbmxpbmU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBzdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBnZXQgY29ubmVjdGlvbk9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICB0aGlzLmlzT25saW5lID0gdGhpcy5nZXRPbmxpbmVTdGF0dXMoQ29ubmVjdGl2aXR5LmdldENvbm5lY3Rpb25UeXBlKCkpO1xuICAgICAgICB0aGlzLnN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuaXNPbmxpbmUpO1xuICAgICAgICBDb25uZWN0aXZpdHkuc3RhcnRNb25pdG9yaW5nKGNvbm5lY3Rpb25UeXBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNPbmxpbmUgPSB0aGlzLmdldE9ubGluZVN0YXR1cyhjb25uZWN0aW9uVHlwZSk7XG4gICAgICAgICAgICB0aGlzLnN1YmplY3QubmV4dCh0aGlzLmlzT25saW5lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRPbmxpbmVTdGF0dXMoY29ubmVjdGlvblR5cGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY29ubmVjdGlvblR5cGUgPT09IENvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS53aWZpXG4gICAgICAgICAgICB8fCBjb25uZWN0aW9uVHlwZSA9PT0gQ29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm1vYmlsZTtcbiAgICB9XG59Il19