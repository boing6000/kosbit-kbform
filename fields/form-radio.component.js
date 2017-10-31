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
var FormRadioComponent = (function (_super) {
    __extends(FormRadioComponent, _super);
    function FormRadioComponent(validators, asyncValidators, injector) {
        var _this = _super.call(this, validators, asyncValidators, injector) || this;
        _this.options = [];
        _this.identifier = "form-radio-" + identifier++;
        return _this;
    }
    FormRadioComponent.prototype.ngOnChanges = function (changes) {
        this.filterChanges(FILTER_STRING_OPTIONS, 'like', changes);
    };
    FormRadioComponent.prototype.change = function (selected) {
        this.value = selected;
    };
    FormRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-radio',
                    template: "\n        <div class=\"kb-form-element\" ngClass=\"{{cssClass}}\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-12\">\n                    <label [attr.for]=\"identifier\">{{label}}</label>\n                </div>\n            </div>\n\n            <div class=\"ui-grid-row kb-filter\" [ngClass]=\"{'hidden':!isFilterEnabled()}\">\n                <div class=\"ui-grid-col-12\">\n                    <p-dropdown [options]=\"filterOptions\" [(ngModel)]=\"filterModel\" (onChange)=\"selectFilter($event)\"></p-dropdown>\n                </div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-12\">\n                    <div class=\"ui-grid-col-4\" *ngFor=\"let option of options\">\n                        <p-radioButton [formControl]=\"model.control\" [name]=\"name\" (onClick)=\"change(option.value)\" [value]=\"option.value\"\n                                       [label]=\"option.label\"></p-radioButton>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-12\">\n                  <kb-validation *ngIf=\"(invalid | async) && control.dirty && control.invalid\"\n                                 [messages]=\"failures | async\">\n                  </kb-validation>\n                </div>\n            </div>\n        </div>\n    ",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: FormRadioComponent, multi: true }
                    ],
                },] },
    ];
    FormRadioComponent.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Injector, },
    ]; };
    FormRadioComponent.propDecorators = {
        'model': [{ type: ViewChild, args: [NgModel,] },],
        'options': [{ type: Input },],
    };
    return FormRadioComponent;
}(ElementBase));
export { FormRadioComponent };
var identifier = 0;
