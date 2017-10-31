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
var FormEditorComponent = (function (_super) {
    __extends(FormEditorComponent, _super);
    function FormEditorComponent(validators, asyncValidators, injector) {
        var _this = _super.call(this, validators, asyncValidators, injector) || this;
        _this.readOnly = false;
        _this.showFonts = false;
        _this.showImage = false;
        _this.showLink = true;
        _this.showCode = false;
        _this.identifier = "form-editor-" + identifier++;
        return _this;
    }
    FormEditorComponent.prototype.ngOnChanges = function (changes) {
        this.filterChanges(FILTER_STRING_OPTIONS, 'like', changes);
    };
    FormEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-editor',
                    template: "\n    <div class=\"kb-form-element\" ngClass=\"{{cssClass}}\">\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\">\n          <label [attr.for]=\"identifier\">{{label}}</label>\n        </div>\n      </div>\n\n      <div class=\"ui-grid-row kb-filter\" [ngClass]=\"{'hidden':!isFilterEnabled()}\">\n        <div class=\"ui-grid-col-12\">\n          <p-dropdown [options]=\"filterOptions\" [(ngModel)]=\"filterModel\"\n                      (onChange)=\"selectFilter($event)\"></p-dropdown>\n        </div>\n      </div>\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\">\n          <p-editor [readonly]=\"readOnly\" [(ngModel)]=\"value\">\n            <p-header>\n              <div class=\"ql-formats\">\n                <select class=\"ql-header\">\n                  <option value=\"1\">T\u00EDtulo</option>\n                  <option value=\"2\">Subt\u00EDtulo</option>\n                  <option selected>Par\u00E1grafo</option>\n                </select>\n                <select class=\"ql-font\" *ngIf=\"showFonts\">\n                  <option selected>Sans Serif</option>\n                  <option value=\"serif\">Serif</option>\n                  <option value=\"monospace\">Monospace</option>\n                </select>\n              </div>\n              <div class=\"ql-formats\">\n                <button class=\"ql-bold\" pTooltip=\"Negrito\" aria-label=\"Negrito\"></button>\n                <button class=\"ql-italic\" pTooltip=\"It\u00E1lico\" aria-label=\"It\u00E1lico\"></button>\n                <button class=\"ql-underline\" pTooltip=\"Sublinhado\" aria-label=\"Sublinhado\"></button>\n              </div>\n              <div class=\"ql-formats\">\n                <div pTooltip=\"Cor do Texto\" style=\"float: left;\">\n                  <select class=\"ql-color\"></select>\n                </div>\n                <div pTooltip=\"Cor de Fundo\" style=\"float: left;\">\n                  <select class=\"ql-background\"></select>\n                </div>\n              </div>\n              <div class=\"ql-formats\">\n                <button class=\"ql-list\" pTooltip=\"Lista Ordenada\" value=\"ordered\"\n                        aria-label=\"Ordered List\"></button>\n                <button class=\"ql-list\" pTooltip=\"Lista Desordenada\" value=\"bullet\"\n                        aria-label=\"Unordered List\"></button>\n                <select class=\"ql-align\">\n                  <option selected>Esquerda</option>\n                  <option value=\"center\">Centralizado</option>\n                  <option value=\"right\">Direita</option>\n                  <option value=\"justify\">Justificado</option>\n                </select>\n              </div>\n              <div class=\"ql-formats\">\n                <button class=\"ql-link\" pTooltip=\"Inserir Link\" *ngIf=\"showLink\"\n                        aria-label=\"Insert Link\"></button>\n                <button class=\"ql-image\" pTooltip=\"Inserir Imagem\" *ngIf=\"showImage\"\n                        aria-label=\"Insert Image\"></button>\n                <button class=\"ql-code-block\" pTooltip=\"Bloco de C\u00F3digo\" *ngIf=\"showCode\"\n                        aria-label=\"Insert Code Block\"></button>\n                <button class=\"ql-clean\" pTooltip=\"Limpar Formata\u00E7\u00E3o\"\n                        aria-label=\"Remove Styles\"></button>\n              </div>\n            </p-header>\n          </p-editor>\n        </div>\n      </div>\n\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-12\">\n          <kb-validation *ngIf=\"(invalid | async) && control.dirty && control.invalid\"\n                         [messages]=\"failures | async\">\n          </kb-validation>\n        </div>\n      </div>\n    </div>\n  ",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: FormEditorComponent, multi: true }
                    ],
                },] },
    ];
    FormEditorComponent.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Injector, },
    ]; };
    FormEditorComponent.propDecorators = {
        'model': [{ type: ViewChild, args: [NgModel,] },],
        'readOnly': [{ type: Input },],
        'showFonts': [{ type: Input },],
        'showImage': [{ type: Input },],
        'showLink': [{ type: Input },],
        'showCode': [{ type: Input },],
    };
    return FormEditorComponent;
}(ElementBase));
export { FormEditorComponent };
var identifier = 0;
