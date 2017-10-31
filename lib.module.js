import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, CheckboxModule, ColorPickerModule, DataTableModule, DialogModule, EditorModule, InputTextModule, ListboxModule, PanelModule, PasswordModule, RadioButtonModule, SpinnerModule, TooltipModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { FieldsetModule } from 'primeng/components/fieldset/fieldset';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { ToggleButtonModule } from 'primeng/components/togglebutton/togglebutton';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
import { BlockUIModule } from 'primeng/components/blockui/blockui';
import { KbFormComponent } from './kb-form.component';
import { FormTextComponent } from './fields/form-text.component';
import { FormCalendarComponent } from './fields/form-calendar.component';
import { FormDropdownComponent } from './fields/form-dropdown.component';
import { FormTextareaComponent } from './fields/form-textarea.component';
import { FormPasswordComponent } from './fields/form-password.component';
import { FormSpinnerComponent } from './fields/form-spinner.component';
import { FormToggleButtonComponent } from './fields/form-toggle-button.component';
import { FormCheckboxComponent } from './fields/form-checkbox.component';
import { FormColorComponent } from './fields/form-color.component';
import { FormEditorComponent } from './fields/form-editor.component';
import { FormListboxComponent } from './fields/form-listbox.component';
import { FormRadioComponent } from './fields/form-radio.component';
import { FormHiddenComponent } from './fields/form-hidden.component';
import { KbvalidationComponent } from './validation/kbvalidation.component';
var MODULES = [
    KbFormComponent,
    KbvalidationComponent,
    FormTextComponent,
    FormCalendarComponent,
    FormDropdownComponent,
    FormTextareaComponent,
    FormPasswordComponent,
    FormSpinnerComponent,
    FormToggleButtonComponent,
    FormCheckboxComponent,
    FormColorComponent,
    FormEditorComponent,
    FormListboxComponent,
    FormRadioComponent,
    FormHiddenComponent,
];
var KbFormModule = (function () {
    function KbFormModule() {
    }
    KbFormModule.forRoot = function () {
        return {
            ngModule: KbFormModule,
            providers: []
        };
    };
    KbFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DataTableModule,
                        DialogModule,
                        ButtonModule,
                        PanelModule,
                        TooltipModule,
                        InputTextModule,
                        PasswordModule,
                        CalendarModule,
                        SpinnerModule,
                        CheckboxModule,
                        InputTextareaModule,
                        EditorModule,
                        ColorPickerModule,
                        DropdownModule,
                        FieldsetModule,
                        AccordionModule,
                        SelectButtonModule,
                        ToggleButtonModule,
                        ListboxModule,
                        MultiSelectModule,
                        RadioButtonModule,
                        BlockUIModule,
                    ],
                    declarations: [MODULES],
                    exports: [MODULES]
                },] },
    ];
    KbFormModule.ctorParameters = function () { return []; };
    return KbFormModule;
}());
export { KbFormModule };
