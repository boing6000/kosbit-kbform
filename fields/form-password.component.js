var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, Inject, Injector, Input, Optional, ViewChild } from '@angular/core';
import { NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel, } from '@angular/forms';
import { ElementBase } from './base/element-base';
import { FILTER_STRING_OPTIONS } from '../filter.constants';
var FormPasswordComponent = (function (_super) {
    __extends(FormPasswordComponent, _super);
    function FormPasswordComponent(validators, asyncValidators, injector) {
        var _this = _super.call(this, validators, asyncValidators, injector) || this;
        _this.promptLabel = 'Força da Senha';
        _this.weakLabel = 'Fraca';
        _this.mediumLabel = 'Médio';
        _this.strongLabel = 'Forte';
        _this.feedback = true;
        _this.identifier = "form-text-" + identifier++;
        return _this;
    }
    FormPasswordComponent.prototype.ngOnChanges = function (changes) {
        this.filterChanges(FILTER_STRING_OPTIONS, 'like', changes);
    };
    FormPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-password',
                    template: "\n        <div class=\"kb-form-element\" ngClass=\"{{cssClass}}\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-12\">\n                    <label [attr.for]=\"identifier\">{{label}}</label>\n                </div>\n            </div>\n\n            <div class=\"ui-grid-row kb-filter\" [ngClass]=\"{'hidden':!isFilterEnabled()}\">\n                <div class=\"ui-grid-col-12\">\n                    <p-dropdown [options]=\"filterOptions\" [(ngModel)]=\"filterModel\" (onChange)=\"selectFilter($event)\"></p-dropdown>\n                </div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-12\">\n                    <input type=\"password\" [attr.id]=\"identifier\"\n                           [name]=\"name\"\n                           pPassword=\"\" [(ngModel)]=\"value\"\n                           [promptLabel]=\"promptLabel\" [weakLabel]=\"weakLabel\"\n                           [mediumLabel]=\"mediumLabel\" [strongLabel]=\"strongLabel\"\n                           [feedback]=\"feedback\">\n                </div>\n            </div>\n\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-12\">\n                  <kb-validation *ngIf=\"(invalid | async) && control.dirty && control.invalid\"\n                                 [messages]=\"failures | async\">\n                  </kb-validation>\n                </div>\n            </div>\n        </div>\n    ",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: FormPasswordComponent, multi: true }
                    ],
                },] },
    ];
    FormPasswordComponent.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Injector, },
    ]; };
    FormPasswordComponent.propDecorators = {
        'model': [{ type: ViewChild, args: [NgModel,] },],
        'promptLabel': [{ type: Input },],
        'weakLabel': [{ type: Input },],
        'mediumLabel': [{ type: Input },],
        'strongLabel': [{ type: Input },],
        'feedback': [{ type: Input },],
    };
    return FormPasswordComponent;
}(ElementBase));
export { FormPasswordComponent };
var identifier = 0;
