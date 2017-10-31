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
var FormListboxComponent = (function (_super) {
    __extends(FormListboxComponent, _super);
    function FormListboxComponent(validators, asyncValidators, injector) {
        var _this = _super.call(this, validators, asyncValidators, injector) || this;
        _this.options = [];
        _this.filterable = true;
        _this.multiple = false;
        _this.withCheckbox = true;
        _this.identifier = "form-listbox-" + identifier++;
        return _this;
    }
    FormListboxComponent.prototype.ngOnInit = function () {
    };
    FormListboxComponent.prototype.ngOnChanges = function (changes) {
        this.filterChanges(FILTER_STRING_OPTIONS, 'like', changes);
    };
    FormListboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-listbox',
                    template: "\n    <div class=\"kb-form-element\" ngClass=\"{{cssClass}}\">\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\">\n          <label [attr.for]=\"identifier\">{{label}}</label>\n        </div>\n      </div>\n\n      <div class=\"ui-grid-row kb-filter\" [ngClass]=\"{'hidden':!isFilterEnabled()}\">\n        <div class=\"ui-grid-col-12\">\n          <p-dropdown [options]=\"filterOptions\" [(ngModel)]=\"filterModel\"\n                      (onChange)=\"selectFilter($event)\"></p-dropdown>\n        </div>\n      </div>\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\">\n          <p-listbox [name]=\"name\"\n                     [options]=\"options\"\n                     [filter]=\"filterable\"\n                     [multiple]=\"multiple\"\n                     [checkbox]=\"withCheckbox\"\n                     [(ngModel)]=\"value\">\n          </p-listbox>\n        </div>\n      </div>\n\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\">\n          <kb-validation *ngIf=\"(invalid | async) && control.dirty && control.invalid\"\n                         [messages]=\"failures | async\">\n          </kb-validation>\n        </div>\n      </div>\n    </div>\n  ",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: FormListboxComponent, multi: true }
                    ],
                },] },
    ];
    FormListboxComponent.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Injector, },
    ]; };
    FormListboxComponent.propDecorators = {
        'model': [{ type: ViewChild, args: [NgModel,] },],
        'options': [{ type: Input },],
        'filterable': [{ type: Input },],
        'multiple': [{ type: Input },],
        'withCheckbox': [{ type: Input, args: ['checkbox',] },],
    };
    return FormListboxComponent;
}(ElementBase));
export { FormListboxComponent };
var identifier = 0;
