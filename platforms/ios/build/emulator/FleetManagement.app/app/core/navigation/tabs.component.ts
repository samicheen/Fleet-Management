import { Component } from "@angular/core";
import { isAndroid } from "platform";

@Component({
    selector: "tabs",
    moduleId: module.id,
    templateUrl: "./tabs.component.html"
})
export class TabsComponent {
    onTabViewLoaded({ object: tabView }) {
        if (isAndroid) {
            return;
        }

        tabView.eachChild((child) => {
            const tabBarItem = child.__controller.tabBarItem;
            tabBarItem.titlePositionAdjustment = { horizontal: 0, vertical: -14 };
        });
    }
}
