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
import { Validators } from '@angular/forms';
var KbValidation = (function (_super) {
    __extends(KbValidation, _super);
    function KbValidation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KbValidation.base64 = function () {
        var _this = this;
        var res = function (control) {
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { base64: true };
        };
        return res;
    };
    KbValidation.creditCard = function () {
        var _this = this;
        var res = function (control) {
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            var msg = 'Número do Cartão de Crédito é inválido.';
            var sanitized = v.replace(/[^0-9]+/g, '');
            if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(sanitized))) {
                return { creditCard: msg };
            }
            var sum = 0;
            var digit;
            var tmpNum;
            var shouldDouble;
            for (var i = sanitized.length - 1; i >= 0; i--) {
                digit = sanitized.substring(i, (i + 1));
                tmpNum = parseInt(digit, 10);
                if (shouldDouble) {
                    tmpNum *= 2;
                    if (tmpNum >= 10) {
                        sum += ((tmpNum % 10) + 1);
                    }
                    else {
                        sum += tmpNum;
                    }
                }
                else {
                    sum += tmpNum;
                }
                shouldDouble = !shouldDouble;
            }
            if (Boolean((sum % 10) === 0 ? sanitized : false)) {
                return null;
            }
            return { creditCard: msg };
        };
        return res;
    };
    KbValidation.date = function () {
        var _this = this;
        var res = function (control) {
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            return _this.isDate(v) ? null : { date: true };
        };
        return res;
    };
    KbValidation.dateISO = function () {
        var _this = this;
        var res = function (control) {
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { dateISO: true };
        };
        return res;
    };
    KbValidation.digits = function () {
        var _this = this;
        var res = function (control) {
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            return /^\d+$/.test(v) ? null : { digits: true };
        };
        return res;
    };
    KbValidation.email = function () {
        var _this = this;
        var res = function (control) {
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { email: true };
        };
        return res;
    };
    KbValidation.equal = function (val) {
        var _this = this;
        var res = function (control) {
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            return val === v ? null : { equal: true };
        };
        return res;
    };
    KbValidation.equalTo = function (equalControl) {
        var subscribe = false;
        var res = function (control) {
            if (!subscribe) {
                subscribe = true;
                equalControl.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                });
            }
            var v = control.value;
            return equalControl.value === v ? null : { equalTo: true };
        };
        return res;
    };
    KbValidation.gt = function (gt) {
        var _this = this;
        var res = function (control) {
            if (!_this.isPresent(gt))
                return null;
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = +control.value;
            return v > +gt ? null : { gt: gt };
        };
        return res;
    };
    KbValidation.gte = function (gte) {
        var _this = this;
        var res = function (control) {
            if (!_this.isPresent(gte))
                return null;
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = +control.value;
            return v >= +gte ? null : { gte: gte };
        };
        return res;
    };
    KbValidation.json = function () {
        var _this = this;
        var res = function (control) {
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            try {
                var obj = JSON.parse(v);
                if (Boolean(obj) && typeof obj === 'object') {
                    return null;
                }
            }
            catch (e) {
            }
            return { json: true };
        };
        return res;
    };
    KbValidation.lt = function (lt) {
        var _this = this;
        var res = function (control) {
            if (!_this.isPresent(lt))
                return null;
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = +control.value;
            return v < +lt ? null : { lt: lt };
        };
        return res;
    };
    KbValidation.lte = function (lte) {
        var _this = this;
        var res = function (control) {
            if (!_this.isPresent(lte))
                return null;
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = +control.value;
            return v <= +lte ? null : { lte: lte };
        };
        return res;
    };
    KbValidation.max = function (max) {
        var _this = this;
        var res = function (control) {
            if (!_this.isPresent(max))
                return null;
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = +control.value;
            return v <= +max ? null : { actualValue: v, requiredValue: +max, max: true };
        };
        return res;
    };
    KbValidation.maxDate = function (maxDate) {
        var _this = this;
        if (!this.isDate(maxDate) && !(maxDate instanceof Function)) {
            throw Error('maxDate value must be or return a formatted date');
        }
        var res = function (control) {
            if (_this.isPresent(Validators.required(control)))
                return null;
            var d = new Date(control.value);
            if (!_this.isDate(d))
                return { maxDate: true };
            if (maxDate instanceof Function)
                maxDate = maxDate();
            return d <= new Date(maxDate) ? null : { maxDate: true };
        };
        return res;
    };
    KbValidation.min = function (min) {
        var _this = this;
        var res = function (control) {
            if (!_this.isPresent(min))
                return null;
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = +control.value;
            return v >= +min ? null : { actualValue: v, requiredValue: +min, min: true };
        };
        return res;
    };
    KbValidation.minDate = function (minDate) {
        var _this = this;
        if (!this.isDate(minDate) && !(minDate instanceof Function)) {
            throw Error('minDate value must be or return a formatted date');
        }
        var res = function (control) {
            if (_this.isPresent(Validators.required(control)))
                return null;
            var d = new Date(control.value);
            if (!_this.isDate(d))
                return { minDate: true };
            if (_this.minDate instanceof Function)
                minDate = minDate();
            return d >= new Date(minDate) ? null : { minDate: true };
        };
        return res;
    };
    KbValidation.notEqual = function (val) {
        var _this = this;
        var res = function (control) {
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            return val !== v ? null : { notEqual: true };
        };
        return res;
    };
    KbValidation.noEqualTo = function (notEqualControl) {
        var subscribe = false;
        return function (control) {
            if (!subscribe) {
                subscribe = true;
                notEqualControl.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                });
            }
            var v = control.value;
            return notEqualControl.value !== v ? null : { notEqualTo: true };
        };
    };
    KbValidation.number = function () {
        var _this = this;
        var res = function (control) {
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { number: true };
        };
        return res;
    };
    KbValidation.range = function (range) {
        var _this = this;
        var res = function (control) {
            if (!_this.isPresent(range))
                return null;
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = +control.value;
            return v >= range[0] && v <= range[1] ? null : {
                actualValue: v,
                requiredValue: range,
                range: true
            };
        };
        return res;
    };
    KbValidation.rangeLength = function (rangeLength) {
        var _this = this;
        var res = function (control) {
            if (!_this.isPresent(rangeLength)) {
                return null;
            }
            if (_this.isPresent(Validators.required(control))) {
                return null;
            }
            var v = control.value;
            var msg = "O valor deve ser entre " + rangeLength[0] + " :type: e " + rangeLength[1] + " :type:";
            return v.length >= rangeLength[0] && v.length <= rangeLength[1] ? null : { rangeLength: msg };
        };
        return res;
    };
    KbValidation.url = function () {
        var _this = this;
        var res = function (control) {
            if (_this.isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { url: true };
        };
        return res;
    };
    KbValidation.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    KbValidation.isDate = function (obj) {
        return obj instanceof Date;
    };
    return KbValidation;
}(Validators));
export { KbValidation };
