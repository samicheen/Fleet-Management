export * from "./ui-sidedrawer.common";
import * as commonModule from "./ui-sidedrawer.common";
import { View } from "tns-core-modules/ui/core/view";
import * as colorModule from "tns-core-modules/color";
export declare class RadSideDrawer extends commonModule.RadSideDrawer {
    private _nativeDelegate;
    private _ios;
    readonly ios: TKSideDrawerView;
    private _drawerController;
    constructor();
    createNativeView(): TKSideDrawerView;
    disposeNativeView(): void;
    private onNavigatingFrom(args);
    onLoaded(): void;
    onUnloaded(): void;
    protected _onDrawerLocationChanged(oldValue: string, newValue: string): void;
    protected _onShadowColorChanged(oldValue: colorModule.Color, newValue: colorModule.Color): void;
    private setShadowColor(color);
    protected _onGesturesEnabledChanged(oldValue: boolean, newValue: boolean): void;
    protected _onAllowEdgeSwipeChanged(oldValue: boolean, newValue: boolean): void;
    private setDrawerLocation(newLocation);
    protected _onDrawerContentSizeChanged(oldValue: number, newValue: number): void;
    protected _onDrawerTransitionChanged(oldValue: commonModule.DrawerTransitionBase, newValue: commonModule.DrawerTransitionBase): void;
    protected _onMainContentChanged(oldValue: View, newValue: View): void;
    protected _onDrawerContentChanged(oldValue: View, newValue: View): void;
    readonly _nativeView: TKSideDrawerView;
    closeDrawer(): void;
    showDrawer(): void;
    eachChildView(callback: (child: View) => boolean): void;
    onLayout(left: number, top: number, right: number, bottom: number): void;
    onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    _addViewToNativeVisualTree(child: View, atIndex: number): boolean;
}
export declare class FadeTransition extends commonModule.DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class PushTransition extends commonModule.DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class RevealTransition extends commonModule.DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class ReverseSlideOutTransition extends commonModule.DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class ScaleDownPusherTransition extends commonModule.DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class ScaleUpTransition extends commonModule.DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class SlideAlongTransition extends commonModule.DrawerTransitionBase {
    getNativeContent(): any;
}
export declare class SlideInOnTopTransition extends commonModule.DrawerTransitionBase {
    getNativeContent(): any;
}
