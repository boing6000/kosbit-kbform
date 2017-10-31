import { EventEmitter, Injector, OnInit, SimpleChanges } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ElementBase } from './base/element-base';
import { SelectItem } from 'primeng/primeng';
export declare class FormDropdownComponent extends ElementBase<any> implements OnInit {
    model: NgModel;
    options: SelectItem[];
    filterable: boolean;
    filterBy: string;
    filterPlaceholder: string;
    lazyloadOptions: boolean;
    multiple: boolean;
    changeEvent: EventEmitter<any>;
    identifier: string;
    constructor(validators: any[], asyncValidators: any[], injector: Injector);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    change(): void;
}
