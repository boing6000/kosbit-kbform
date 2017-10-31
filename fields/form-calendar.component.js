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
import { FILTER_NUMBER_DATE_OPTIONS } from '../filter.constants';
var FormCalendarComponent = (function (_super) {
    __extends(FormCalendarComponent, _super);
    function FormCalendarComponent(validators, asyncValidators, injector) {
        var _this = _super.call(this, validators, asyncValidators, injector) || this;
        _this.label = 'Label';
        _this.placeholder = '';
        _this.name = '';
        _this.hasFilter = false;
        _this.cssClass = 'ui-grid-col-12';
        _this.dateFormat = 'dd/mm/yy';
        _this.serverFormat = 'MM-DD-YYYY HH:mm:ss';
        _this.mode = 'single';
        _this.readOnly = false;
        _this.lang = {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
            monthNames: [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro'
            ],
            monthNamesShort: [
                'Jan',
                'Fev',
                'Mar',
                'Abr',
                'Maio',
                'Jun',
                'Jul',
                'Ago',
                'Set',
                'Out',
                'Nov',
                'Dez'
            ],
            today: 'Hoje',
            clear: 'Limpar'
        };
        _this.identifier = "form-calendar-" + identifier++;
        return _this;
    }
    FormCalendarComponent.prototype.ngOnInit = function () { };
    FormCalendarComponent.prototype.ngOnChanges = function (changes) {
        this.filterChanges(FILTER_NUMBER_DATE_OPTIONS, 'equals', changes);
    };
    FormCalendarComponent.prototype.changeData = function ($event) {
    };
    FormCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-calendar',
                    template: "\n    <div class=\"kb-form-element\" ngClass=\"{{cssClass}}\">\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\">\n          <label [attr.for]=\"identifier\">{{label}}</label>\n        </div>\n      </div>\n\n      <div class=\"ui-grid-row kb-filter\" [ngClass]=\"{'hidden':!isFilterEnabled()}\">\n        <div class=\"ui-grid-col-12\">\n          <p-dropdown [options]=\"filterOptions\" [(ngModel)]=\"filterModel\"\n                      (onChange)=\"selectFilter($event)\"></p-dropdown>\n        </div>\n      </div>\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\">\n          <p-calendar [(ngModel)]=\"value\"\n                      [locale]=\"lang\"\n                      [dateFormat]=\"dateFormat\"\n                      [selectionMode]=\"mode\"\n                      [readonlyInput]=\"readOnly\"\n                      showIcon=\"true\">\n          </p-calendar>\n        </div>\n      </div>\n\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\">\n          <kb-validation *ngIf=\"(invalid | async) && control.dirty && control.invalid\"\n                         [messages]=\"failures | async\">\n          </kb-validation>\n        </div>\n      </div>\n    </div>\n  ",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: FormCalendarComponent, multi: true }
                    ],
                },] },
    ];
    FormCalendarComponent.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Injector, },
    ]; };
    FormCalendarComponent.propDecorators = {
        'model': [{ type: ViewChild, args: [NgModel,] },],
        'label': [{ type: Input },],
        'placeholder': [{ type: Input },],
        'name': [{ type: Input },],
        'hasFilter': [{ type: Input },],
        'cssClass': [{ type: Input },],
        'dateFormat': [{ type: Input },],
        'serverFormat': [{ type: Input },],
        'mode': [{ type: Input },],
        'readOnly': [{ type: Input },],
    };
    return FormCalendarComponent;
}(ElementBase));
export { FormCalendarComponent };
var identifier = 0;
