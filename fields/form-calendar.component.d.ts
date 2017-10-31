import { Injector, SimpleChanges } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ElementBase } from './base/element-base';
export declare class FormCalendarComponent extends ElementBase<Date | Date[]> {
    model: NgModel;
    label: string;
    placeholder: string;
    name: string;
    hasFilter: boolean;
    cssClass: string;
    dateFormat: string;
    serverFormat: string;
    mode: string;
    readOnly: boolean;
    private lang;
    private identifier;
    constructor(validators: any[], asyncValidators: any[], injector: Injector);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    changeData($event: any): void;
}
