import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
export declare class KbValidation extends Validators {
    static base64(): ValidatorFn;
    static creditCard(): ValidatorFn;
    static date(): ValidatorFn;
    static dateISO(): ValidatorFn;
    static digits(): ValidatorFn;
    static email(): ValidatorFn;
    static equal(val: any): ValidatorFn;
    static equalTo(equalControl: AbstractControl): ValidatorFn;
    static gt(gt: number): ValidatorFn;
    static gte(gte: number): ValidatorFn;
    static json(): ValidatorFn;
    static lt(lt: number): ValidatorFn;
    static lte(lte: number): ValidatorFn;
    static max(max: number): ValidatorFn;
    static maxDate(maxDate: any): ValidatorFn;
    static min(min: number): ValidatorFn;
    static minDate(minDate: any): ValidatorFn;
    static notEqual(val: any): ValidatorFn;
    static noEqualTo(notEqualControl: AbstractControl): ValidatorFn;
    static number(): ValidatorFn;
    static range(range: number[]): ValidatorFn;
    static rangeLength(rangeLength: number[]): ValidatorFn;
    static url(): ValidatorFn;
    private static isPresent(obj);
    private static isDate(obj);
}
