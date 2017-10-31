import { Injector, SimpleChanges } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ElementBase } from './base/element-base';
export declare class FormToggleButtonComponent extends ElementBase<boolean> {
    model: NgModel;
    identifier: string;
    onLabel: string;
    offLabel: string;
    onIcon: string;
    offIcon: string;
    constructor(validators: any[], asyncValidators: any[], injector: Injector);
    ngOnChanges(changes: SimpleChanges): void;
}
