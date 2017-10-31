import { AbstractControl, AsyncValidatorFn, Validator, ValidatorFn } from '@angular/forms';
export interface ValidationResult {
    [validator: string]: string | boolean;
}
export declare type AsyncValidatorArray = Array<Validator | AsyncValidatorFn>;
export declare type ValidatorArray = Array<Validator | ValidatorFn>;
export declare const composeValidators: (validators: (ValidatorFn | Validator)[]) => ValidatorFn | AsyncValidatorFn;
export declare const validate: (validators: (ValidatorFn | Validator)[], asyncValidators: (Validator | AsyncValidatorFn)[]) => (control: AbstractControl) => any;
export declare const message: (validator: ValidationResult, key: string) => string;
