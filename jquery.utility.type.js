/*!
 * jquery data type utilities
 * https://github.com/SamuelWang/jQueryUtilities
 * 
 * Copyright 2015 Samuel W.
 * Released under the MIT license
 * 
 * Date: 2015-05-4 22:20 GMT+0800
 */

(function ($) {
    "use strict";

    $.isString = function (value) {
        return typeof value === 'string';
    };

    $.isInteger = function (value) {
        return isFinite(value) &&
               Math.floor(value) === value;
    };

}(jQuery));
