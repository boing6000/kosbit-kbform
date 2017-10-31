import { Component, Input } from '@angular/core';
import { replaceAll } from '../utils';
var KbvalidationComponent = (function () {
    function KbvalidationComponent() {
        this.type = 'text';
    }
    KbvalidationComponent.prototype.replaceMessage = function (message) {
        var msg = '';
        switch (this.type) {
            case 'text':
                msg = 'caractéres';
                break;
            default:
                break;
        }
        return replaceAll(message, ':type:', msg);
    };
    KbvalidationComponent.prototype.ngOnInit = function () {
    };
    KbvalidationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kb-validation',
                    template: "\n    <div class=\"validation\">\n      <div *ngFor=\"let message of messages\">{{replaceMessage(message)}}</div>\n    </div>\n  ",
                    styles: ["\n\n  "]
                },] },
    ];
    KbvalidationComponent.ctorParameters = function () { return []; };
    KbvalidationComponent.propDecorators = {
        'messages': [{ type: Input },],
        'type': [{ type: Input },],
    };
    return KbvalidationComponent;
}());
export { KbvalidationComponent };
