import { Injector } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ElementBase } from './base/element-base';
import { FieldChanges } from './field-change';
export declare class FormEditorComponent extends ElementBase<string> {
    model: NgModel;
    readOnly: boolean;
    showFonts: boolean;
    showImage: boolean;
    showLink: boolean;
    showCode: boolean;
    identifier: string;
    constructor(validators: any[], asyncValidators: any[], injector: Injector);
    ngOnChanges(changes: FieldChanges): void;
}
