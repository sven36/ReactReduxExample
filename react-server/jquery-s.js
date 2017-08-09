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


        var version = '1.0.0';
        function S(dom, selector) {
            var i, len = dom ? dom.length : 0;
            for (i = 0; i < len; i++) this[i] = dom[i];
            this.length = len;
            this.selector = selector || '';
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
            var match, element;
            if (type === 'string') {
                match = rquickExpr.exec(selector);
                if (match && match[2]) {
                    element = document.getElementById(match[2]);
                    if (element.id !== match[2]) {
                        element = rootjQuery.find(selector);
                    }
                    this[0] = element;
                } else {
                    try {
                        element = document.querySelectorAll(selector);
                    } catch (e) {
                        element = rootjQuery.find(selector);
                    }
                }
            } else if (isFunction(selector)) {

            } else {
            }
            return jQueryS.initFactory(element, selector);
        }
        var isArray = Array.isArray || function (obj) {
            return toString.call(obj) === "[object Array]";
        }
        var isFunction = function (obj) {
            return typeof obj === 'function';
        }

        jQueryS.DOMReady = function (fn) {
            if (document.addEventListener) {
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
            } catch (e) {
                setTimeout(arguments.callee, 50);
            }
            done = true;
        }
        ready.promise.done = function (fn) {
            if (done) {
                fn();
            }
        }
        $ = function (selector, context) {
            return jQueryS.init(selector, context);
        }
        function isArrayLike(obj) {
            var length = !!obj && 'length' in obj && obj.length;
            return length == 0 || (typeof length == 'number' && length > 0 && (length - 1) in obj);
        }
        function each(obj, callback) {
            if (isArrayLike(obj)) {
                for (var i = 0; i < obj.length; i++) {
                    if (callback.call(obj[i],i,obj[i]) === false) return obj;
                }
            } else {
                for (var key in obj) {
                    if (callback.call(obj[key], i, obj[i]) === false) return obj;
                }
            }
            return obj;
        }
        jQueryS.fn = {
            expando:'jQueryS' + Math.random().toString().replace(/\D/g, ""),
            extend: function (target, source, deep) {
                if (!deep) {
                    for (var key in source) {
                        if (!(key in target)) {
                            target[key] = source[key];
                        }
                    }
                    return target;
                } else {
                    for (var key in source) {
                        if (!(key in target)) {
                            target[key] = typeof source[key] !== 'object' ? source[key] : $.extend({}, source[key], deep);
                        }
                    }
                    return target;
                }
            },
            each: function (callback) {
                //if(deletedIds.every){

                //}
                if (arguments.length === 2 && typeof arguments[0] === 'object') {
                    //内部调用
                    return each(arguments[0], arguments[1]);
                }
                return each(this, callback);
            },
            isArray: isArray,
            isFunction: isFunction,
            ArrayIndexOf: function (array, item) {
                if (isArray(array) && array.length > 0) {
                    if (deletedIds.indexOf) {
                        return deletedIds.indexOf.call(array, item);
                    } else {
                        for (var i = 0; i < array.length; i++) {
                            if (array[i] === item) {
                                return i;
                            }
                        }
                        return -1;
                    }
                }
            },
            isEmptyObject:function(obj){
                for(var name in obj){
                    return false;
                }
                return true;
            }
        }
        $.cache = {};
        $.deletedIds=deletedIds;
        $.guid = 0;
        jQueryS.fn.each(("blur focus focusin focusout load resize scroll unload click dblclick " +
    "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
    "change select submit keydown keypress keyup error contextmenu").split(" "),
    function (i, name) {
        // Handle event binding
        jQueryS.fn[name] = function (data, fn) {
            return arguments.length > 0 ?
               $.on.call(this,name,data,fn) :
                $.event.trigger.call(this, name);
        };
    });
        jQueryS.fn.extend($, jQueryS.fn);
        //$.extend = jQueryS.extend;
        //$.isArray = isArray;
        //$.isFunction = isFunction;
        //$.ArrayIndexOf = jQueryS.fn.ArrayIndexOf;
        S.prototype = jQueryS.prototype = jQueryS.fn;
        return $;
    })();

    //异步模块
    (function ($) {
        $.Callbacks= function(options) {
            if (typeof options === 'object') {
                var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1;
                var fireList = function () {
                    //once为True时事件只允许回调一次，否则可多次重复调用
                    locked = options.once;
                    fired = firing = true;
                    for (; queue.length; firingIndex = -1) {
                        //保存当前队列要触发的事件到memory，并从当前队列移除;
                        //queue保存的是要回调函数的作用域对象，和参数数组；
                        memory = queue.shift();
                        while (firingIndex++ < list.length) {
                            //出错的话不会重新尝试而是直接中断并释放内存
                            if (list[firingIndex].apply(memory[0], memory[1]) == false) {
                                firingIndex = list.length;
                                memory = false;
                            }
                        }
                    }
                    //执行完之后复原firing等状态，并释放list事件队列
                    //如果locked为false即允许事件反复执行则不必释放
                    if (!options.memory) {
                        memory = false;
                    }

                    firing = false;
                    if (locked) {
                        if (memory) {
                            list = []
                        } else {
                            list = '';
                        }
                    }
                }
                var self = {
                    //给list添加回调事件队列
                    addCallback: function () {
                        if (list) {
                            if (memory && !firing) {
                                firingIndex = list.length - 1;
                                queue.push(memory);
                            }
                            (function add(args) {
                                $.each(args, function (_, arg) {
                                    if ($.isFunction(arg)) {
                                        if (!options.unique || !self.has(arg)) {
                                            list.push(arg);
                                        } else if (arg && arg.length && typeof arg !== 'string') {
                                            add(arg);
                                        }
                                    }
                                })
                            })(arguments);
                            if (memory && !firing) {
                                fireList();
                            }
                        }
                        return this;
                    },
                    removeCallback: function () {
                        $.each(arguments, function (_, arg) {
                            var index;
                            while (index = $.ArrayIndexOf(list, arg) > -1) {
                                list.splice(index, 1);
                                if (index < firingIndex) {
                                    firingIndex--;
                                }
                            }
                        });
                        return this;
                    },
                    disable: function () {
                        locked = queue = [];
                        list = memory = '';
                        return this;
                    },
                    //把list事件队列的回调方法对应的上下文和参数保存在queue中
                    fireWith: function (context, args) {
                        if (!locked) {
                            args = args || [];
                            args = [context, args.slice ? args.slice() : args];
                            queue.push(args);
                            if (!firing) {
                                fireList();
                            }
                        }
                        return this;
                    },
                    fire: function () {
                        self.fireWith(this, arguments);
                        return this;
                    },
                    // To know if the callbacks have already been called at least once
                    fired: function () {
                        return !!fired;
                    },
                    lock: function () {
                        locked = true;
                        if(!memory){
                            locked = queue = [];
                            list = memory = '';
                            return this;
                        }
                    return this;
                    }
                };
                return self;
            }
        }
        $.Deferred = function (func) {
            var resolve = {
                action: 'resolve',//action
                listener: 'done',//add listerer
                callback: $.Callbacks({ once: true, memory: true }),//listener list
                finalState: 'resolved'//final state
            }
            var reject = {
                action: 'reject',//action
                listener: 'fail',//add listerer
                callback: $.Callbacks({ once: true, memory: true }),//listener list
                finalState: 'resolved'//final state
            }
            var notify = {
                action: 'notify',//action
                listener: 'progress',//add listerer
                callback: $.Callbacks({ memory: true }),//listener list
            }
            var deferred = {};
            var state = 'pending';
            var promise = {
                state: function () {
                    return state;
                },
                then: function ( /* fnDone, fnFail, fnProgress */) {
                    var fns = arguments;
                    return $.Deferred(thenDeferred).promise();
                },
                promise: function (obj) {
                    return obj != null ? $.extend(obj, promise) : promise;
                }
            }
            promise.pipe = promise.then;
            function thenDeferred(newDefer) {
                var def = function (option) {
                    var fn = typeof fns[i] === 'function' && fns[i];
                    // deferred[ done | fail | progress ] for forwarding actions to newDefer
                    deferred[option.listener](function () {
                        var returned = fn && fn.apply(this, arguments);
                        if (returned && typeof returned.promise === 'function') {
                            returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                        } else {
                            newDefer[option.action + 'With'](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                        }
                    });
                }
                fns = null;
                def(resolve);
                def(reject);
                def(notify);
            }
            function internalAddCallback(option) {
                var list = option.callback;
                var stateString = option.finalState;
                var action = option.action;
                var disable = stateString === 'resolved' ? reject.callback.disable : resolve.callback.disable;
                promise[option.listener] = list.addCallback;
                if (stateString) {
                    list.addCallback(function () {
                        state = stateString;// state = [ resolved | rejected ]
                    }, disable, notify.callback.lock);// [ reject_list | resolve_list ].disable; progress_list.lock
                }
                deferred[action] = function () {
                    deferred[action + 'With'](this === deferred ? promise : this, arguments);
                    return this;
                };
                deferred[action + 'With'] = list.fireWith;
            }
            internalAddCallback(resolve);
            internalAddCallback(reject);
            internalAddCallback(notify);
            promise.promise(deferred);
            if (func) {
                func.call(deferred, deferred);
            }
            return deferred;
        }
    })(jQueryS);
    //事件模块
    (function ($) {
        var _sid = 0;
        function sId(element) {
            return element._sid || (element._sid = _sid++);
        }

        $.event =  {
            global: {},
            special: {
                load: {
                    noBubble: true// Prevent triggered image.load events from bubbling to window.load
                },
                focus: {

                },
                blur: {

                },
                click: {

                },
                beforeunload: {

                }
            },
            //add方法用于绑定事件
            addEvent: function (eventElement, eventType, eventCallback, eventData, eventSelector) {
                var events,eventHandle,handlers;
                var nodeType = +eventElement.nodeType || 1;
                //1为元素节点，9为document
                if (nodeType === 1 || nodeType === 9) {
                    var id = sId(eventElement);
                    if (!eventCallback.guid) {
                        eventCallback.guid = id;
                    }
                    var internalKey = $.expando;
                    var cache = eventElement.nodeType ? $.cache : eventElement;
                    var id = eventElement.nodeType ? eventElement[internalKey] : eventElement[internalKey] && internalKey;
                    if (!id) {
                        if(eventElement.nodeType){
                            id = eventElement[internalKey] = $.deletedIds.pop() || $.guid++;
                        } else {
                            id = internalKey;
                        }
                    }
                    if(!cache[id]){
                        cache[id] = {};
                    }
                    //每次都取出该元素的事件缓存
                    var eventCache = cache[id];
                    if(!eventCallback.guid){
                        eventCallback.guid = $.guid++;
                    }
                    if (!(events = eventCache.events)) {
                        events = eventCache.events = {};
                    }
                    if(!(eventHandle=eventCache.handle)){
                        eventHandle = eventCache.handle = function (e) {
                            return typeof $ !== 'undefined' && $.event.dispatch.apply(eventHandle.elem, arguments);
                        }
                        eventHandle.elem = eventElement;
                    }
                    var special = $.event.special[eventType] || {};

                    var handleInfo = {
                        eventType: eventType,
                        guid: eventCallback.guid,
                        eventData: eventData,
                        eventSelector: eventSelector
                    }
                    if (!(handlers = events[eventType])) {
                        handlers = events[eventType] = [];
                        handlers.delegateCount = 0;
                        if(!special.setup){
                            if(eventElement.addEventListener){
                                eventElement.addEventListener(eventType, eventHandle, false);
                            }else if(eventElement.attachEvent){
                                eventElement.attachEvent('on' + eventType, eventHandle);
                            }
                        }
                    }
                    if(special.add){
                        special.add.call(eventElement, handleInfo);
                        if(handleInfo.handler.guid){
                            handleInfo.handler.guid = eventCallback.guid;
                        }
                    }
                    if (!eventSelector) {
                        handlers.push(handleInfo);
                    } else {

                    }
                    // Keep track of which events have ever been used, for event optimization
                    $.event.global[eventType] = true;
                }
                eventElement = null;
            },
            //remove方法用于卸载事件
            removeEvent: function (eventElement, eventType, eventCallback, eventSelector,mappedTypes) {
                var handleInfo, events;
                var id = eventElement.nodeType ? eventElement[internalKey] : eventElement[internalKey] && internalKey;
                if(!id){
                    return;
                }
                var eventCache = cache[id];
                if(!(events=eventCache.events)){
                    return
                }
                var special = $.event.special[eventType] || {};
                handlers = events[eventType] || [];
                handleInfo = handlers[0];
                if (!eventType && eventType.guid === handleInfo.guid) {
                    handlers.shift();
                    if (handleInfo.eventSelector) {
                        handlers.delegateCount--;
                    }
                    if (special.remove) {
                        special.remove.call(eventElement, handleInfo);
                    }
                }
                if(!handlers.length){
                    $.removeEvent(eventElement, eventType, eventCache.handle);
                    delete events[eventType];
                }
                if ($.isEmptyObject(events)) {
                    delete eventCache.handle;
                    //jQuery._removeData(elem, "events");
                }
            },
            //trigger方法用于派发事件
            trigger: function (event,data,eventElement,onlyHandlers) {
                var handle;
                var type = {}.hasOwnProperty.call(event, 'type') ? event.type : event;

            },
            //dispatch方法用于统一执行用户回调
            dispatch: function (event) {
                var matched,handleInfo;
                var args = [].slice.call(arguments);
                var internalKey = $.expando;
                var eventElement = this || {};
                var cache = eventElement.nodeType ? $.cache : eventElement;
                var id = eventElement.nodeType ? eventElement[internalKey] : eventElement[internalKey] && internalKey;

                //取出该元素的事件缓存
                var eventCache = cache[id]['events'][event.type];
                var special = $.event.special[event.type] || {};
                event = $.event.fix.call(eventElement,event);
                args[0] = event;
                event.delegateTarget = this;
                // 如果存在特殊事件的回调则执行
                if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                    return;
                }
                handlerQueue = $.event.handleQueue.call(this, event, eventCache);
                var i = j = 0;
                while ((matched=handlerQueue[i++])) {
                    event.currentTarget = matched.elem;
                    while ((handleInfo=matched[j++])) {
                        event.handleInfo = handleInfo;
                        event.data = handleInfo.data;
                        handleInfo.handler.apply(matched.elem, args);
                    }
                }
                return event.result;
            },
            handleQueue: function (event, handlers) {
                var handleQueue = [];
                var delegateCount = handlers.delegateCount;
                if(delegateCount<handlers.length){
                    handleQueue.push({ elem: this, handlers: handlers.slice(delegateCount) });
                }
                return handleQueue;
            },
            fix: function (event) {
                if (event[$.expando]) {
                    return event;
                }
                var type = event.type;
                // Support: IE<9
                if(!event.target){
                    event.target = event.srcElement || this;
                }
                // Support: Safari 6-8+
                // Target should not be a text node (#504, #13143)
                if (event.target.nodeType === 3) {
                    event.target = event.target.parentNode;
                }
                //防止同一元素同一事件多次绑定
                event[$.expando] = true;
                return event;
            }
        }
        $.on = function (type,callback) {
            var elem = this;
            if (callback) {
                for (var i = 0; i < elem.length;i++){
                    $.event.addEvent(elem[i], type, callback);
                }
            }
        }
    })(jQueryS);
    //AJAX模块
    (function ($) {
        function f() { };
        $.ajaxSettings = {
            type: 'GET',
            beforeSend: f,
            success: f,
            error: f,
            complete: f,
            context: null,
            crossDomain: false,
            async: true,


        }
        // MIME types mapping
        // IIS returns Javascript as "application/x-javascript"
        var accepts= {
                script: 'text/javascript, application/javascript, application/x-javascript',
                json: 'application/json',
                xml: 'application/xml, text/xml',
                html: 'text/html',
                text: 'text/plain'
        }
        $.ajax = function (options) {
            if (typeof options === 'object') {
                var setting = $.extend(options, $.ajaxSettings, true);
                var callbackContext = setting;
                var deferred = $.Deferred();
                var completeDeferred = $.Callbacks({ once: true, memory: true });
                var jqXHR = {
                    readyState: 0
                };
                deferred.promise(jqXHR).complete = completeDeferred.addCallback;
                jqXHR.success = jqXHR.done;
                jqXHR.error = jqXHR.fail;
                setting.url = setting.replace(/#.*$/, '');
                setting.dataType = setting.dataType ? accepts[setting.dataType.toLowerCase()] : '*';
                if (!setting.crossDomain) {
                    var match = /^http(s)?:\/\/(.*?)\//.exec(setting.url);
                    setting.crossDomain=match ? location.protocol+'//'+location.host+'/' !==(match[0]):false;
                }
                var fireGlobals = $.event && s.global;
            } else {
                throw Error('参数应为对象');
            }
        }
    })(jQueryS)
    window.jQueryS = jQueryS;
    window.$ = window.$||jQueryS;
    return jQueryS;
})