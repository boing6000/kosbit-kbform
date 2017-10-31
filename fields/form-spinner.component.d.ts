import { Injector } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ElementBase } from './base/element-base';
import { FieldChanges } from './field-change';
export declare class FormSpinnerComponent extends ElementBase<number> {
    model: NgModel;
    step: number;
    min: number;
    max: number;
    decimalSeparator: string;
    thousandSeparator: string;
    formatInput: boolean;
    identifier: string;
    constructor(validators: any[], asyncValidators: any[], injector: Injector);
    ngOnChanges(changes: FieldChanges): void;
}
