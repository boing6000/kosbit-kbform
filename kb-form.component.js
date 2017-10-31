import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
var KbFormComponent = (function () {
    function KbFormComponent(fb) {
        this.fb = fb;
        this.model = {};
        this.submit = new EventEmitter();
        this.cancel = new EventEmitter();
        this.formBlocked = false;
        this.form = this.fb.group({});
    }
    KbFormComponent.prototype.ngOnInit = function () {
        var fbConnfig = {};
        this.fields.forEach(function (field) {
            fbConnfig[field.name] = new FormControl('', field.validation);
        });
        this.form = this.fb.group(fbConnfig);
    };
    KbFormComponent.prototype.onSubmit = function () {
        this.submit.emit(this.model);
    };
    KbFormComponent.prototype.onCancel = function () {
        this.cancel.emit(true);
    };
    KbFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kb-form',
                    template: "\n    <div class=\"kb-form\">\n\n      <p-blockUI [target]=\"panel\" [blocked]=\"formBlocked\">\n        <i class=\"fa fa-spinner fa-spin fa-5x\"></i>\n      </p-blockUI>\n\n      <p-panel styleClass=\"form-panel\" header=\"form\" #panel>\n        <form (ngSubmit)=\"onSubmit($event)\" class=\"ui-form\">\n          <div class=\"ui-grid ui-grid-responsive\">\n\n            <div *ngFor=\"let field of fields\" [ngSwitch]=\"field.type\" [formGroup]=\"form\">\n\n              <form-hidden *ngSwitchCase=\"'hidden'\"\n                           [name]=\"field.name\"\n                           [formControlName]=\"field.name\"\n                           [(ngModel)]=\"model[field.name]\">\n              </form-hidden>\n\n              <form-text *ngSwitchCase=\"'text'\"\n                         [name]=\"field.name\"\n                         [label]=\"field.label\"\n                         [placeholder]=\"field.placeholder || ''\"\n                         [cssClass]=\"field.cssClass || 'ui-grid-col-12'\"\n                         [formControlName]=\"field.name\"\n                         [(ngModel)]=\"model[field.name]\">\n              </form-text>\n\n              <form-textarea *ngSwitchCase=\"'textarea'\"\n                             [name]=\"field.name\"\n                             [label]=\"field.label\"\n                             [placeholder]=\"field.placeholder || ''\"\n                             [rows]=\"field.rows || 5\"\n                             [cols]=\"field.cols || 10\"\n                             [autoResize]=\"field.autoResize || false\"\n                             [cssClass]=\"field.cssClass || 'ui-grid-col-12'\"\n                             [formControlName]=\"field.name\"\n                             [(ngModel)]=\"model[field.name]\">\n              </form-textarea>\n\n              <form-spinner *ngSwitchCase=\"'spinner'\"\n                            [name]=\"field.name\"\n                            [label]=\"field.label\"\n                            [placeholder]=\"field.placeholder || ''\"\n                            [step]=\"field.step || 1\"\n                            [min]=\"field.min || undefined\"\n                            [max]=\"field.max || undefined\"\n                            [decimalSeparator]=\"field.decimalSeparator || ','\"\n                            [thousandSeparator]=\"field.thousandSeparator || '.'\"\n                            [formatInput]=\"field.formatInput || true\"\n                            [cssClass]=\"field.cssClass || 'ui-grid-col-12'\"\n                            [formControlName]=\"field.name\"\n                            [(ngModel)]=\"model[field.name]\">\n              </form-spinner>\n\n\n              <pre *ngSwitchDefault=\"\">{{field|json}}</pre>\n            </div>\n\n            <ng-content></ng-content>\n\n            <div class=\"ui-grid-row\" style=\"padding: 0 3px;\">\n              <div class=\"ui-grid-col-12\">\n                <button type=\"Submit\" pButton=\"\" label=\"Salvar\" [disabled]=\"!form.valid\"></button>\n                <button type=\"button\" pButton=\"\" label=\"Cancelar\" (click)=\"onCancel()\"></button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </p-panel>\n    </div>\n  ",
                    styles: ["\n\n  "]
                },] },
    ];
    KbFormComponent.ctorParameters = function () { return [
        { type: FormBuilder, },
    ]; };
    KbFormComponent.propDecorators = {
        'model': [{ type: Input },],
        'submit': [{ type: Output, args: ['onSubmit',] },],
        'cancel': [{ type: Output, args: ['onCancel',] },],
        'formBlocked': [{ type: Input, args: ['blocked',] },],
        'fields': [{ type: Input },],
    };
    return KbFormComponent;
}());
export { KbFormComponent };
