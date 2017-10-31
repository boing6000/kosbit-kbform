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
import { Observable } from 'rxjs';
import { ValueAccessorBase } from './value-acessor';
import { message, validate } from './validate';
import { EventEmitter, Input, Output } from '@angular/core';
import { isUndefined } from 'util';
var ElementBase = (function (_super) {
    __extends(ElementBase, _super);
    function ElementBase(validators, asyncValidators, injector) {
        var _this = _super.call(this, injector) || this;
        _this.validators = validators;
        _this.asyncValidators = asyncValidators;
        _this.injector = injector;
        _this.label = 'Label';
        _this.placeholder = '';
        _this.name = '';
        _this.hasFilter = false;
        _this.cssClass = 'ui-grid-col-12';
        _this.nameChange = new EventEmitter();
        _this.filterOptions = [];
        _this.filterNameFC = true;
        return _this;
    }
    ElementBase.prototype.ngOnChanges = function (changes) {
    };
    ElementBase.prototype.filterChanges = function (filters, defaultFilter, changes) {
        if (this.hasFilter) {
            if (!isUndefined(changes.hasFilter) && changes.hasFilter.isFirstChange()) {
                this.filterOptions = filters;
                this.filterModel = defaultFilter;
            }
            if (!isUndefined(changes.name)) {
                if (changes.name.isFirstChange()) {
                    this.filterName = this.name;
                }
                if (changes.name.previousValue !== changes.name.currentValue) {
                    this.selectFilter();
                }
            }
        }
    };
    ElementBase.prototype.selectFilter = function (event) {
        if (event === void 0) { event = null; }
        var name = this.filterName + '_' + this.filterModel;
        this.nameChange.emit(name);
    };
    ElementBase.prototype.isFilterEnabled = function () {
        return this.hasFilter || false;
    };
    ElementBase.prototype.validateInnerModel = function () {
        return validate(this.validators, this.asyncValidators)(this.model.control);
    };
    Object.defineProperty(ElementBase.prototype, "invalid", {
        get: function () {
            return Observable.combineLatest(this.validateInnerModel(), this.getErrorsFromOuterModel())
                .map(function (v) {
                var errors = Object.assign(v[0] || {}, v[1] || {});
                return Object.keys(errors || {}).length > 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementBase.prototype, "failures", {
        get: function () {
            return Observable.combineLatest(this.validateInnerModel(), this.getErrorsFromOuterModel())
                .map(function (v) {
                var errors = Object.assign(v[0] || {}, v[1] || {});
                return Object.keys(errors || {}).map(function (k) { return message(errors, k); });
            });
        },
        enumerable: true,
        configurable: true
    });
    ElementBase.prototype.getErrorsFromOuterModel = function () {
        if (this.control == null || this.control.errors == null) {
            return Observable.of(null);
        }
        return Observable.of(this.control.errors);
    };
    ElementBase.propDecorators = {
        'label': [{ type: Input },],
        'placeholder': [{ type: Input },],
        'name': [{ type: Input },],
        'hasFilter': [{ type: Input },],
        'cssClass': [{ type: Input },],
        'nameChange': [{ type: Output },],
    };
    return ElementBase;
}(ValueAccessorBase));
export { ElementBase };
