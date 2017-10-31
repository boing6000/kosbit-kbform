import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Injector } from '@angular/core';
export declare abstract class ValueAccessorBase<T> implements ControlValueAccessor {
    private _injector;
    private innerValue;
    private changed;
    private touched;
    private _control;
    protected readonly control: NgControl;
    value: T;
    constructor(_injector: Injector);
    writeValue(value: T): void;
    registerOnChange(fn: (value: T) => void): void;
    registerOnTouched(fn: () => void): void;
    protected touch(): void;
}
