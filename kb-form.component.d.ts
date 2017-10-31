import { EventEmitter, OnInit } from '@angular/core';
import { FieldModel } from './fields/field.model';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class KbFormComponent implements OnInit {
    private fb;
    model: object;
    submit: EventEmitter<object>;
    cancel: EventEmitter<boolean>;
    formBlocked: boolean;
    fields: FieldModel[];
    form: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    onSubmit(): void;
    onCancel(): void;
}
