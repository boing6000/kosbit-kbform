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
import { Component, EventEmitter, Inject, Injector, Input, Optional, Output, ViewChild } from '@angular/core';
import { NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel, } from '@angular/forms';
import { ElementBase } from './base/element-base';
import { FILTER_STRING_OPTIONS } from '../filter.constants';
var FormDropdownComponent = (function (_super) {
    __extends(FormDropdownComponent, _super);
    function FormDropdownComponent(validators, asyncValidators, injector) {
        var _this = _super.call(this, validators, asyncValidators, injector) || this;
        _this.options = [];
        _this.filterable = false;
        _this.filterBy = null;
        _this.filterPlaceholder = null;
        _this.lazyloadOptions = false;
        _this.multiple = false;
        _this.changeEvent = new EventEmitter();
        _this.identifier = "form-dropdown-" + identifier++;
        return _this;
    }
    FormDropdownComponent.prototype.ngOnInit = function () {
    };
    FormDropdownComponent.prototype.ngOnChanges = function (changes) {
        this.filterChanges(FILTER_STRING_OPTIONS, 'like', changes);
    };
    FormDropdownComponent.prototype.change = function () {
        this.changeEvent.emit(this.value);
    };
    FormDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-dropdown',
                    template: "\n        <div class=\"kb-form-element\" ngClass=\"{{cssClass}}\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-12\">\n                    <label [attr.for]=\"identifier\">{{label}}</label>\n                </div>\n            </div>\n\n            <div class=\"ui-grid-row kb-filter\" [ngClass]=\"{'hidden':!isFilterEnabled()}\">\n                <div class=\"ui-grid-col-12\">\n                    <p-dropdown [options]=\"filterOptions\" [(ngModel)]=\"filterModel\" (onChange)=\"selectFilter($event)\"></p-dropdown>\n                </div>\n            </div>\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-12\" [hidden]=\"multiple\">\n                    <p-dropdown [name]=\"name\" [id]=\"identifier\"\n                                [placeholder]=\"placeholder\"\n                                [options]=\"options\"\n                                [filter]=\"filterable\"\n                                [filterBy]=\"filterBy\"\n                                [filterPlaceholder]=\"filterPlaceholder\"\n                                [lazy]=\"lazyloadOptions\"\n                                (onChange)=\"change()\"\n                                [(ngModel)]=\"value\">\n                    </p-dropdown>\n                </div>\n                <!--<div class=\"ui-grid-col-12\" [hidden]=\"!multiple\">\n                  <p-multiSelect [options]=\"options\" [(ngModel)]=\"value\"></p-multiSelect>\n                </div>-->\n            </div>\n\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-12\">\n                  <kb-validation *ngIf=\"(invalid | async) && control.dirty && control.invalid\"\n                                 [messages]=\"failures | async\">\n                  </kb-validation>\n                </div>\n            </div>\n        </div>\n    ",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: FormDropdownComponent, multi: true }
                    ],
                },] },
    ];
    FormDropdownComponent.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Injector, },
    ]; };
    FormDropdownComponent.propDecorators = {
        'model': [{ type: ViewChild, args: [NgModel,] },],
        'options': [{ type: Input },],
        'filterable': [{ type: Input },],
        'filterBy': [{ type: Input },],
        'filterPlaceholder': [{ type: Input },],
        'lazyloadOptions': [{ type: Input },],
        'multiple': [{ type: Input },],
        'changeEvent': [{ type: Output, args: ['change',] },],
    };
    return FormDropdownComponent;
}(ElementBase));
export { FormDropdownComponent };
var identifier = 0;
