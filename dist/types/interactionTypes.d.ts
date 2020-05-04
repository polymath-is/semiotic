/// <reference types="react" />
import { ScaleLinear } from "d3-scale";
import { CustomHoverType } from "./annotationTypes";
import { MarginType } from "./generalTypes";
export interface AdvancedInteractionSettings {
    voronoiClipping?: boolean | number;
    voronoiFilter?: Function;
}
export interface Interactivity {
    start?: Function;
    during?: Function;
    end?: Function;
    brush?: string;
    extent?: Array<number[]> | number[];
    columnsBrush?: boolean;
    projection?: string;
    projectedColumns?: object;
    startEmpty?: boolean;
}
export declare type InteractionLayerProps = {
    name?: string;
    interaction?: Interactivity;
    overlay?: Array<object>;
    oColumns?: object;
    xScale: ScaleLinear<number, number>;
    yScale: ScaleLinear<number, number>;
    rScale?: ScaleLinear<number, number>;
    svgSize: Array<number>;
    hoverAnnotation?: CustomHoverType;
    interactionOverflow?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
    size: Array<number>;
    projectedYMiddle?: string;
    projectedX: string;
    projectedY: string;
    points?: Array<object>;
    position?: number[];
    enabled?: boolean;
    useSpans?: boolean;
    margin: MarginType;
    projection?: string;
    customDoubleClickBehavior?: Function;
    customClickBehavior?: Function;
    customHoverBehavior?: Function;
    voronoiHover: Function;
    canvasRendering?: boolean;
    disableCanvasInteraction: boolean;
    showLinePoints?: string;
    renderPipeline: object;
    advancedSettings?: AdvancedInteractionSettings;
};
export declare type VoronoiEntryType = {
    voronoiX: number;
    voronoiY: number;
    coincidentPoints: object[];
    type?: string;
    data?: object[];
};
export declare type BaseColumnType = {
    x: number;
    width: number;
};
export declare type InteractionLayerState = {
    overlayRegions: Array<React.ReactElement>;
    props: InteractionLayerProps;
    canvasMap: any;
    interactionCanvas: React.ReactNode;
    SpanOrDiv: Function;
};
