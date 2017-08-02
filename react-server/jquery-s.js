(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ?
			factory(global, true) :
			function (w) {
			    if (!w.document) {
			        throw new Error("jQuery requires a window with a document");
			    }
			    return factory(w);
			};
    } else {
        factory(global);
    }

    // Pass this if window is not defined yet
    //typeof window !== undefined ? window : this
})(this, function (window, noGlobal) {
    // Support: Firefox 18+
    // Can't be in strict mode, several libs including ASP.NET trace
    // the stack via arguments.caller.callee and Firefox dies if
    // you try to trace through "use strict" call chains. (#13335)
    //"use strict";
    var jQueryS = (function () {
        var jQueryS = {};

        var deletedIds = [];

        var document = window.document;

        var slice = deletedIds.slice;

        var concat = deletedIds.concat;

        var push = deletedIds.push;

        var indexOf = deletedIds.indexOf;

        var class2type = {};

        var toString = class2type.toString;

        var hasOwn = class2type.hasOwnProperty;

        var support = {};

        var _sid = 0;

        jQueryS.cache = {};

        var version = '1.0.0';
        function S(dom, selector) {
            var i, len = dom ? dom.length : 0;
            for (i = 0; i < len; i++) this[i] = dom[i];
            this.length = len;
            this.selector = selector || '';
        }
        function sId(element) {
            return element._sid || (element._sid = _sid++);
        }
        jQueryS.initFactory = function (dom, selector) {
            return new S(dom, selector);
        }
        jQueryS.init = function (selector, context) {
            // A simple way to check for HTML strings
            // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
            // Strict HTML recognition (#11290: must start with <)
            var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            //是否包含:
            var isSimpleExpr = /^[\w:]*$/;
            var type = typeof selector;
            var match,element;
            if (type === 'string') {
                match = rquickExpr.exec(selector);
                if (match && match[2]) {
                    element = document.getElementById(match[2]);
                    if(element.id!==match[2]){
                        element = rootjQuery.find(selector);
                    }
                    this[0] = element;
                } else {
                    try{
                        element = document.querySelectorAll(selector);
                    } catch (e) {
                        element=rootjQuery.find(selector);
                    }
                }
            } else if (isFunction(selector)) {

            } else {
            }
            return jQueryS.initFactory(element,selector);
        }
        var isArray = Array.isArray || function (obj) {
            return toString.call(obj) === "[object Array]";
        }
        var isFunction = function (obj) {
            return typeof obj === 'function';
        }
        jQueryS.extend = function (target, source, deep) {
            if(!deep){
                for (var key in source) {
                    if (!(key in target)) {
                        target[key] = source[key];
                    }
                }
                return target;
            } else {
                for (var key in source) {
                    if (!(key in target)) {
                        target[key] = typeof source[key] !== 'object' ? source[key] : jQueryS.extend({}, source[key], deep);
                    }
                }
                return target;
            }
        }
        jQueryS.DOMReady = function (fn) {
            if(document.addEventListener){
                document.addEventListener('DOMContentLoaded', fn);
                document.addEventListener('onload', fn);
            }
            var done = false;
            jQueryS.ready.promise().done(fn);
            return this;
        }
        var ready = function () {

        }
        ready.promise = function () {
            try {
                document.doScroll('left');
            }catch(e){
                setTimeout(arguments.callee, 50);
            }
            done = true;
        }
        ready.promise.done = function (fn) {
            if(done){
                fn();
            }
        }

        jQueryS.event = {
            //add方法用于绑定事件
            addEvent: function (eventElement,eventType,eventCallback,eventData,eventSelector) {
                var id = sId(element);
                if(!eventCallback.guid){
                    eventCallback.guid =id;
                }
            }
            
            //remove方法用于卸载事件
            //dispatch方法用于统一执行用户回调
            //trigger方法用于派发事件
        }
        $ = function (selector,context) {
            return jQueryS.init(selector, context);
        }
        function isArrayLike(obj) {
            var length = !!obj && 'length' in obj && obj.length;
            return length == 0 || (typeof length == 'number' && length > 0 && (length - 1) in obj);
        }
        jQueryS.each = function (obj, callback) {
            if (isArrayLike(obj)) {
                for (var i = 0; i < obj.length; i++) {
                    if(callback.apply(obj[i])===false) return obj;
                }
            } else {
                for (var key in obj) {
                    if (callback.apply(obj[key]) === false) return obj;
                }
            }
            return obj;
        }
        $.each = function (callback) {
            return jQueryS.each(this, callback);
        }
        $.isArray = isArray;
        $.isFunction = isFunction;
        $.extend = jQueryS.extend;
        return $;
    })();
    //异步模块
    (function ($) {
        function Callbacks(options) {

        }
    })(jQueryS);
    //AJAX模块
    (function ($) {
        function f() {

        }
        $.ajaxSettings = {
            type: 'GET',
            beforeSend: f,
            success: f,
            error: f,
            complete: f,
            context: null,
            crossDomain: false,
            // MIME types mapping
            // IIS returns Javascript as "application/x-javascript"
            accepts: {
                script: 'text/javascript, application/javascript, application/x-javascript',
                json: 'application/json',
                xml: 'application/xml, text/xml',
                html: 'text/html',
                text: 'text/plain'
            },
        }
        $.ajax = function (options) {
            if(typeof options==='object'){
                var setting = $.extend(options, $.ajaxSettings,true);

            } else {
                throw Error('参数应为对象');
            }
        }
    })(jQueryS)
    window.jQueryS = jQueryS;
    window.$ === undefined && (window.$ == jQueryS);
    return jQueryS;
})