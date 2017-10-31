import { Injector } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ElementBase } from './base/element-base';
import { FieldChanges } from './field-change';
import { SelectItem } from 'primeng/primeng';
export declare class FormRadioComponent extends ElementBase<any> {
    model: NgModel;
    options: SelectItem[];
    identifier: string;
    constructor(validators: any[], asyncValidators: any[], injector: Injector);
    ngOnChanges(changes: FieldChanges): void;
    change(selected: any): void;
}
