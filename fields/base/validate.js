import { Validators, } from '@angular/forms';
import { Observable } from 'rxjs';
var normalizeValidator = function (validator) {
    var func = validator.validate.bind(validator);
    if (typeof func === 'function') {
        return function (c) { return func(c); };
    }
    else {
        return validator;
    }
};
export var composeValidators = function (validators) {
    if (validators == null || validators.length === 0) {
        return null;
    }
    return Validators.compose(validators.map(normalizeValidator));
};
export var validate = function (validators, asyncValidators) {
    return function (control) {
        var synchronousValid = function () { return composeValidators(validators)(control); };
        if (asyncValidators) {
            var asyncValidator = composeValidators(asyncValidators);
            return asyncValidator(control).map(function (v) {
                var secondary = synchronousValid();
                if (secondary || v) {
                    return Object.assign({}, secondary, v);
                }
            });
        }
        if (validators) {
            return Observable.of(synchronousValid());
        }
        return Observable.of(null);
    };
};
export var message = function (validator, key) {
    switch (key) {
        case 'required':
            return 'Campo obrigatório';
        case 'gte':
            return "N\u00FAmero deve ser maior ou igual \u00E0 " + validator[key];
        case 'gt':
            return "N\u00FAmero dever maior que " + validator[key];
        case 'lte':
            return "N\u00FAmero deve ser menor ou iqual \u00E0 " + validator[key];
        case 'lt':
            return "N\u00FAmero deve ser menor que " + validator[key];
        default:
            return "Validation failed: " + key + " = " + validator[key];
    }
};
