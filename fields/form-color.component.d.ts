import { Injector } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ElementBase } from './base/element-base';
import { FieldChanges } from './field-change';
export declare class FormColorComponent extends ElementBase<string> {
    model: NgModel;
    format: string;
    inline: boolean;
    identifier: string;
    constructor(validators: any[], asyncValidators: any[], injector: Injector);
    ngOnChanges(changes: FieldChanges): void;
}
