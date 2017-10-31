import { ValidatorFn } from '@angular/forms';
export interface PropertyField {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    validations?: any[];
}
export interface FieldModel {
    id?: string;
    name: string;
    label?: string;
    placeholder?: string;
    type: string;
    cssClass?: string;
    validation?: ValidatorFn | ValidatorFn[];
    rows?: number;
    cols?: number;
    autoResize?: boolean;
    step?: number;
    min?: number;
    max?: number;
    decimalSeparator?: string;
    thousandSeparator?: string;
    formatInput?: boolean;
}
export interface ValidationModel {
    [propName: string]: ValidatorFn | ValidatorFn[];
}
