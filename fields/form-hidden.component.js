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
var FormHiddenComponent = (function (_super) {
    __extends(FormHiddenComponent, _super);
    function FormHiddenComponent(validators, asyncValidators, injector) {
        var _this = _super.call(this, validators, asyncValidators, injector) || this;
        _this.label = 'Label';
        _this.placeholder = '';
        _this.name = '';
        _this.hasFilter = false;
        _this.cssClass = 'ui-grid-col-12';
        _this.identifier = "form-hidden-" + identifier++;
        return _this;
    }
    FormHiddenComponent.prototype.ngOnChanges = function (changes) {
        this.filterChanges([], '', changes);
    };
    FormHiddenComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-hidden',
                    template: "\n    <input [name]=\"name\" type=\"hidden\" [(ngModel)]=\"value\">\n  ",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: FormHiddenComponent, multi: true }
                    ],
                },] },
    ];
    FormHiddenComponent.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Injector, },
    ]; };
    FormHiddenComponent.propDecorators = {
        'label': [{ type: Input },],
        'placeholder': [{ type: Input },],
        'name': [{ type: Input },],
        'hasFilter': [{ type: Input },],
        'cssClass': [{ type: Input },],
        'model': [{ type: ViewChild, args: [NgModel,] },],
    };
    return FormHiddenComponent;
}(ElementBase));
export { FormHiddenComponent };
var identifier = 0;
