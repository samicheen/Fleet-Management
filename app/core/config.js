"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logged_in_lazy_load_guard_1 = require("./guards/logged-in-lazy-load.guard");
exports.config = {
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
                canLoad: [logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsZ0ZBQTJFO0FBRWhFLFFBQUEsTUFBTSxHQUFHO0lBQ25CLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRTtZQUNGO2dCQUNJLElBQUksRUFBRSxFQUFFO2dCQUNSLFVBQVUsRUFBRSxzQ0FBc0M7Z0JBQ2xELFNBQVMsRUFBRSxNQUFNO2FBQ3BCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixZQUFZLEVBQUUsMENBQTBDO2dCQUN4RCxPQUFPLEVBQUUsQ0FBQyxpREFBcUIsQ0FBQzthQUNuQztTQUNKO1FBQ0QsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUU7WUFDSjtnQkFDSSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLFlBQVksRUFBRSxtREFBbUQ7YUFDcEU7U0FDSjtLQUNKO0NBQ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTG9nZ2VkSW5MYXp5TG9hZEd1YXJkIH0gZnJvbSBcIi4vZ3VhcmRzL2xvZ2dlZC1pbi1sYXp5LWxvYWQuZ3VhcmRcIjtcblxuZXhwb3J0IHZhciBjb25maWcgPSB7XG5cdGJhY2tlbmRDb25maWc6IHt9LFxuXHRyb3V0ZXM6IHtcblx0ICAgIHRhYnM6IFtcblx0ICAgICAgICB7XG5cdCAgICAgICAgICAgIHBhdGg6IFwiXCIsXG5cdCAgICAgICAgICAgIHJlZGlyZWN0VG86IFwiLyhteWZsZWV0VGFiOm15LWZsZWV0L215LWZsZWV0LWxpc3QpXCIsXG5cdCAgICAgICAgICAgIHBhdGhNYXRjaDogXCJmdWxsXCJcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHtcblx0ICAgICAgICAgICAgcGF0aDogXCJteS1mbGVldFwiLFxuXHQgICAgICAgICAgICBvdXRsZXQ6IFwibXlmbGVldFRhYlwiLFxuXHQgICAgICAgICAgICBsb2FkQ2hpbGRyZW46IFwiLi9teS1mbGVldC9teS1mbGVldC5tb2R1bGUjTXlGbGVldE1vZHVsZVwiLFxuXHQgICAgICAgICAgICBjYW5Mb2FkOiBbTG9nZ2VkSW5MYXp5TG9hZEd1YXJkXVxuXHQgICAgICAgIH1cblx0ICAgIF0sXG5cdCAgICBtb2RhbHM6IFtdLFxuXHQgICAgaGlkZGVuOiBbXG5cdCAgICAgICAge1xuXHQgICAgICAgICAgICBwYXRoOiBcImFkZC12ZWhpY2xlXCIsXG5cdCAgICAgICAgICAgIHRpdGxlOiBcIkFkZCBWZWhpY2xlXCIsXG5cdCAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogXCIuL2FkZC12ZWhpY2xlL2FkZC12ZWhpY2xlLm1vZHVsZSNBZGRWZWhpY2xlTW9kdWxlXCJcblx0ICAgICAgICB9XG5cdCAgICBdXG5cdH1cbn07XG5cdFx0Il19