import { View, AddArrayFromBuilder, Property } from "tns-core-modules/ui/core/view";
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";
import { CartesianAxis } from "./visualization/views/chart-axis.common";
import { RadLegendView } from "./visualization/views/chart-legend-view.common";
import { RadCartesianChartGrid } from "./visualization/parts/chart-cartesian-chart-grid.common";
import { Trackball } from "./visualization/parts/chart-track-ball.common";
import * as initializersCommon from "./initializers/chart-initializers.common";
import { Palette } from "./visualization/parts/chart-palette.common";
export declare class RadChartBase extends View implements AddArrayFromBuilder {
    static seriesSelectedEvent: string;
    static seriesDeselectedEvent: string;
    static pointSelectedEvent: string;
    static pointDeselectedEvent: string;
    static chartZoomedEvent: string;
    static chartPannedEvent: string;
    static trackballTrackedSelectionEvent: string;
    legend: RadLegendView;
    series: ObservableArray<any>;
    palettes: ObservableArray<Palette>;
    annotations: ObservableArray<any>;
    selectionMode: string;
    seriesSelectionMode: string;
    pointSelectionMode: string;
    protected _initializer: initializersCommon.ChartBaseValueMapper;
    constructor();
    readonly androidView: any;
    readonly rootLayout: any;
    reloadPalettes(): void;
    static legendProperty: Property<RadChartBase, RadLegendView>;
    static seriesProperty: Property<RadChartBase, ObservableArray<any>>;
    static palettesProperty: Property<RadChartBase, ObservableArray<Palette>>;
    static annotationsProperty: Property<RadChartBase, ObservableArray<any>>;
    static selectionModeProperty: Property<RadChartBase, string>;
    static seriesSelectionModeProperty: Property<RadChartBase, string>;
    static pointSelectionModeProperty: Property<RadChartBase, string>;
    readonly initializer: initializersCommon.ChartBaseValueMapper;
    updateChart(): void;
    _addArrayFromBuilder(name: string, value: Array<any>): void;
    private baseBindingContextChanged(data);
    getAxixByID(axisID: string): CartesianAxis;
    getAxisByID(axisID: string): CartesianAxis;
    private onLegendPropertyChanged(oldValue, newValue);
    protected onLegendChanged(oldValue: RadLegendView, newValue: RadLegendView): void;
    private onPalettesPropertyChanged(oldValue, newValue);
    protected onPalettesChanged(oldValue: ObservableArray<Palette>, newValue: ObservableArray<Palette>): void;
    protected PalettesCollectionChangedInternal(data: any): void;
    private onSeriesPropertyChanged(oldValue, newValue);
    protected onSeriesChanged(oldValue: ObservableArray<any>, newValue: ObservableArray<any>): void;
    protected SeriesCollectionChangedInternal(data: ChangedData<any>): void;
    private onAnnotationsPropertyChanged(oldValue, newValue);
    protected onAnnotationsChanged(oldValue: ObservableArray<any>, newValue: ObservableArray<any>): void;
    protected AnnotationsCollectionChangedInternal(data: any): void;
    private onSelectionModePropertyChanged(oldValue, newValue);
    private onSeriesSelectionModePropertyChanged(oldValue, newValue);
    private onPointSelectionModePropertyChanged(oldValue, newValue);
    protected onSelectionModeChanged(oldValue: string, newValue: string): void;
    protected onSeriesSelectionModeChanged(oldValue: string, newValue: string): void;
    protected onPointSelectionModeChanged(oldValue: string, newValue: string): void;
}
export declare class RadCartesianChart extends RadChartBase {
    grid: RadCartesianChartGrid;
    horizontalAxis: CartesianAxis;
    verticalAxis: CartesianAxis;
    verticalZoom: number;
    horizontalZoom: number;
    trackball: Trackball;
    constructor();
    static gridProperty: Property<RadCartesianChart, RadCartesianChartGrid>;
    static horizontalAxisProperty: Property<RadCartesianChart, CartesianAxis>;
    static verticalAxisProperty: Property<RadCartesianChart, CartesianAxis>;
    static verticalZoomProperty: Property<RadCartesianChart, number>;
    static horizontalZoomProperty: Property<RadCartesianChart, number>;
    static trackballProperty: Property<RadCartesianChart, Trackball>;
    private onGridPropertyChanged(oldValue, newValue);
    protected onGridChanged(oldValue: RadCartesianChartGrid, newValue: RadCartesianChartGrid): void;
    private onHorizontalAxisPropertyChanged(oldValue, newValue);
    private onVerticalAxisPropertyChanged(oldValue, newValue);
    private onHorizontalZoomPropertyChanged(oldValue, newValue);
    private onVerticalZoomPropertyChanged(oldValue, newValue);
    private onTrackballPropertyChanged(oldValue, newValue);
    protected onHorizontalAxisChanged(oldValue: CartesianAxis, newValue: CartesianAxis): void;
    protected onVerticalAxisChanged(oldValue: CartesianAxis, newValue: CartesianAxis): void;
    protected onHorizontalZoomChanged(oldValue: number, newValue: number): void;
    protected onVerticalZoomChanged(oldValue: number, newValue: number): void;
    protected onTrackballChanged(oldValue: Trackball, newValue: Trackball): void;
    private updateAxisBindingContext(oldValue, newValue);
    private bindingContextChanged(data);
}
export declare class RadPieChart extends RadChartBase {
}
