/**
 * Basic draw editor in order to generate an Ink annotation.
 */
export class InkEditor extends DrawingEditor {
    static _type: string;
    static _editorType: number;
    static _defaultDrawingOptions: null;
    /** @inheritdoc */
    static initialize(l10n: any, uiManager: any): void;
    /** @inheritdoc */
    static getDefaultDrawingOptions(options: any): any;
    /** @inheritdoc */
    static get typesMap(): any;
    /** @inheritdoc */
    static createDrawerInstance(x: any, y: any, parentWidth: any, parentHeight: any, rotation: any): InkDrawOutliner;
    /** @inheritdoc */
    static deserializeDraw(pageX: any, pageY: any, pageWidth: any, pageHeight: any, innerMargin: any, data: any): InkDrawOutline;
    /** @inheritdoc */
    createDrawingOptions({ color, thickness, opacity }: {
        color: any;
        thickness: any;
        opacity: any;
    }): void;
    _drawingOptions: any;
    /** @inheritdoc */
    serialize(isForCopying?: boolean): Object | null;
    #private;
}
import { DrawingEditor } from "./draw.js";
import { InkDrawOutliner } from "./drawers/inkdraw.js";
import { InkDrawOutline } from "./drawers/inkdraw.js";
