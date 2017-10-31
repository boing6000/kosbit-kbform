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
import { animations } from './base/animations';
var FormSpinnerComponent = (function (_super) {
    __extends(FormSpinnerComponent, _super);
    function FormSpinnerComponent(validators, asyncValidators, injector) {
        var _this = _super.call(this, validators, asyncValidators, injector) || this;
        _this.step = 1;
        _this.min = undefined;
        _this.max = undefined;
        _this.decimalSeparator = ',';
        _this.thousandSeparator = '.';
        _this.formatInput = true;
        _this.identifier = "form-spinner-" + identifier++;
        return _this;
    }
    FormSpinnerComponent.prototype.ngOnChanges = function (changes) {
        this.filterChanges(FILTER_STRING_OPTIONS, 'like', changes);
    };
    FormSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-spinner',
                    template: "\n    <div class=\"kb-form-element\" ngClass=\"{{cssClass}}\">\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\">\n          <label [attr.for]=\"identifier\">{{label}}</label>\n        </div>\n      </div>\n\n      <div class=\"ui-grid-row kb-filter\" [ngClass]=\"{'hidden':!isFilterEnabled()}\">\n        <div class=\"ui-grid-col-12\">\n          <p-dropdown [options]=\"filterOptions\" [(ngModel)]=\"filterModel\" (onChange)=\"selectFilter($event)\"></p-dropdown>\n        </div>\n      </div>\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\">\n          <p-spinner [name]=\"name\" [id]=\"identifier\"\n                     [step]=\"step\" [min]=\"min\" [max]=\"max\"\n                     [decimalSeparator]=\"decimalSeparator\"\n                     [thousandSeparator]=\"thousandSeparator\"\n                     [formatInput]=\"formatInput\"\n                     [placeholder]=\"placeholder\" [(ngModel)]=\"value\">\n          </p-spinner>\n        </div>\n      </div>\n\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\">\n          <kb-validation *ngIf=\"(invalid | async) && control.dirty && control.invalid\"\n                         [messages]=\"failures | async\">\n          </kb-validation>\n        </div>\n      </div>\n    </div>\n  ",
                    animations: animations,
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: FormSpinnerComponent, multi: true }
                    ],
                },] },
    ];
    FormSpinnerComponent.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Injector, },
    ]; };
    FormSpinnerComponent.propDecorators = {
        'model': [{ type: ViewChild, args: [NgModel,] },],
        'step': [{ type: Input },],
        'min': [{ type: Input },],
        'max': [{ type: Input },],
        'decimalSeparator': [{ type: Input },],
        'thousandSeparator': [{ type: Input },],
        'formatInput': [{ type: Input },],
    };
    return FormSpinnerComponent;
}(ElementBase));
export { FormSpinnerComponent };
var identifier = 0;
