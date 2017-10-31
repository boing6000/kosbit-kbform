import { Injector } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ElementBase } from './base/element-base';
import { FieldChanges } from './field-change';
export declare class FormCheckboxComponent extends ElementBase<any> {
    model: NgModel;
    identifier: string;
    constructor(validators: any[], asyncValidators: any[], injector: Injector);
    ngOnChanges(changes: FieldChanges): void;
}
