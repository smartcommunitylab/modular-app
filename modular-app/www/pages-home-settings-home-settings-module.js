(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-settings-home-settings-module"],{

/***/ "./node_modules/ionic-angular/gestures/gesture.js":
/*!********************************************************!*\
  !*** ./node_modules/ionic-angular/gestures/gesture.js ***!
  \********************************************************/
/*! exports provided: Gesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gesture", function() { return Gesture; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "./node_modules/ionic-angular/util/util.js");
/* harmony import */ var _hammer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hammer */ "./node_modules/ionic-angular/gestures/hammer.js");


/**
 * @hidden
 * A gesture recognizer class.
 *
 * TODO(mlynch): Re-enable the DOM event simulation that was causing issues (or verify hammer does this already, it might);
 */
var Gesture = (function () {
    function Gesture(element, opts) {
        if (opts === void 0) { opts = {}; }
        this._callbacks = {};
        this.isListening = false;
        Object(_util_util__WEBPACK_IMPORTED_MODULE_0__["defaults"])(opts, {
            domEvents: true
        });
        this.element = element;
        // Map 'x' or 'y' string to hammerjs opts
        this.direction = opts.direction || 'x';
        opts.direction = this.direction === 'x' ?
            _hammer__WEBPACK_IMPORTED_MODULE_1__["DIRECTION_HORIZONTAL"] :
            _hammer__WEBPACK_IMPORTED_MODULE_1__["DIRECTION_VERTICAL"];
        this._options = opts;
    }
    Gesture.prototype.options = function (opts) {
        Object.assign(this._options, opts);
    };
    Gesture.prototype.on = function (type, cb) {
        if (type === 'pinch' || type === 'rotate') {
            this._hammer.get(type).set({ enable: true });
        }
        this._hammer.on(type, cb);
        (this._callbacks[type] || (this._callbacks[type] = [])).push(cb);
    };
    Gesture.prototype.off = function (type, cb) {
        this._hammer.off(type, this._callbacks[type] ? cb : null);
    };
    Gesture.prototype.listen = function () {
        if (!this.isListening) {
            this._hammer = Object(_hammer__WEBPACK_IMPORTED_MODULE_1__["Hammer"])(this.element, this._options);
        }
        this.isListening = true;
    };
    Gesture.prototype.unlisten = function () {
        var eventType;
        var i;
        if (this._hammer && this.isListening) {
            for (eventType in this._callbacks) {
                for (i = 0; i < this._callbacks[eventType].length; i++) {
                    this._hammer.off(eventType, this._callbacks[eventType]);
                }
            }
            this._hammer.destroy();
        }
        this._callbacks = {};
        this._hammer = null;
        this.isListening = false;
    };
    Gesture.prototype.destroy = function () {
        this.unlisten();
        this.element = this._options = null;
    };
    return Gesture;
}());

//# sourceMappingURL=gesture.js.map

/***/ }),

/***/ "./node_modules/ionic-angular/gestures/hammer.js":
/*!*******************************************************!*\
  !*** ./node_modules/ionic-angular/gestures/hammer.js ***!
  \*******************************************************/
/*! exports provided: DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, Hammer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_LEFT", function() { return DIRECTION_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_RIGHT", function() { return DIRECTION_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_HORIZONTAL", function() { return DIRECTION_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_VERTICAL", function() { return DIRECTION_VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hammer", function() { return Hammer; });
/* tslint:disable */
var win = window;
var doc = document;
/*! Hammer.JS - v2.0.6 - 2015-12-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2015 Jorik Tangelder;
 * Licensed under the  license */
var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = doc.createElement('div');
var TYPE_FUNCTION = 'function';
var round = Math.round;
var abs = Math.abs;
var now = Date.now;
/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}
/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}
/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;
    if (!obj) {
        return;
    }
    if (obj.forEach) {
        obj.forEach(iterator, context);
    }
    else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    }
    else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}
/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype, childP;
    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;
    if (properties) {
        Object.assign(childP, properties);
    }
}
/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}
/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}
/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}
/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
        target.addEventListener(type, handler, false);
    });
}
/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function (type) {
        target.removeEventListener(type, handler, false);
    });
}
/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}
/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}
/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    }
    else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}
/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}
/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;
    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }
    if (sort) {
        if (!key) {
            results = results.sort();
        }
        else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key] ? 1 : 0;
            });
        }
    }
    return results;
}
/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);
    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;
        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}
/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}
/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}
var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';
var COMPUTE_INTERVAL = 25;
var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;
var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;
var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];
/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;
    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function (ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };
    this.init();
}
Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function () { },
    /**
     * bind the events
     */
    init: function () {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },
    /**
     * unbind the events
     */
    destroy: function () {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};
/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;
    if (inputClass) {
        Type = inputClass;
    }
    else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    }
    else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    }
    else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    }
    else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}
/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));
    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;
    if (isFirst) {
        manager.session = {};
    }
    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;
    // compute scale, rotation etc
    computeInputData(manager, input);
    // emit secret event
    manager.emit('hammer.input', input);
    manager.recognize(input);
    manager.session.prevInput = input;
}
/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;
    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }
    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    }
    else if (pointersLength === 1) {
        session.firstMultiple = false;
    }
    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;
    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);
    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;
    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);
    computeIntervalInputData(session, input);
    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}
function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};
    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };
        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }
    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}
/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input, deltaTime = input.timeStamp - last.timeStamp, velocity, velocityX, velocityY, direction;
    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;
        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);
        session.lastInterval = input;
    }
    else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }
    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}
/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }
    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}
/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;
    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }
    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }
    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}
/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}
/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }
    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}
/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
    return Math.sqrt((x * x) + (y * y));
}
/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}
/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}
/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}
var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};
var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput(_manager, _handler) {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;
    this.allow = true; // used by Input.TouchMouse to disable mouse events
    this.pressed = false; // mousedown state
    Input.apply(this, arguments);
}
inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];
        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }
        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }
        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
        if (!this.pressed || !this.allow) {
            return;
        }
        if (eventType & INPUT_END) {
            this.pressed = false;
        }
        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});
var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};
// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};
var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
// IE10 has prefixed support, and case-sensitive
if (win.MSPointerEvent && !win.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}
/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;
    Input.apply(this, arguments);
    this.store = (this.manager.session.pointerEvents = []);
}
inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;
        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
        var isTouch = (pointerType == INPUT_TYPE_TOUCH);
        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');
        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        }
        else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }
        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }
        // update the event in the store
        store[storeIndex] = ev;
        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });
        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});
var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};
var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;
    Input.apply(this, arguments);
}
inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }
        if (!this.started) {
            return;
        }
        var touches = normalizeSingleTouches.call(this, ev, type);
        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }
        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});
/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);
    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }
    return [all, changed];
}
var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};
var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput(_manager, _handler) {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};
    Input.apply(this, arguments);
}
inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }
        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});
/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;
    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }
    var i, targetTouches, changedTouches = toArray(ev.changedTouches), changedTargetTouches = [], target = this.target;
    // get target touches from touches
    targetTouches = allTouches.filter(function (touch) {
        return hasParent(touch.target, target);
    });
    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }
    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }
        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }
    if (!changedTargetTouches.length) {
        return;
    }
    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}
/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */
function TouchMouseInput() {
    Input.apply(this, arguments);
    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
}
inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH), isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);
        // when we're in a touch event, so  block all upcoming mouse events
        // most mobile browser also emit mouseevents, right after touchstart
        if (isTouch) {
            this.mouse.allow = false;
        }
        else if (isMouse && !this.mouse.allow) {
            return;
        }
        // reset the allowMouse when we're done
        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
            this.mouse.allow = true;
        }
        this.callback(manager, inputEvent, inputData);
    },
    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});
var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}
TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function (value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }
        if (NATIVE_TOUCH_ACTION && this.manager.element.style) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },
    /**
     * just re-set the touchAction value
     */
    update: function () {
        this.set(this.manager.options.touchAction);
    },
    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function () {
        var actions = [];
        each(this.manager.recognizers, function (recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },
    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function (input) {
        // not needed with native support for the touchAction property
        if (NATIVE_TOUCH_ACTION) {
            return;
        }
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;
        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }
        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        if (hasNone) {
            //do not prevent defaults if this is a tap gesture
            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;
            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }
        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }
        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },
    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function (srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};
/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }
    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }
    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }
    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }
    return TOUCH_ACTION_AUTO;
}
/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;
/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = Object.assign({}, this.defaults, options || {});
    this.id = uniqueId();
    this.manager = null;
    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);
    this.state = STATE_POSSIBLE;
    this.simultaneous = {};
    this.requireFail = [];
}
Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},
    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function (options) {
        Object.assign(this.options, options);
        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },
    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function (otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }
        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },
    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function (otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },
    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function (otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }
        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },
    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function (otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },
    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function () {
        return this.requireFail.length > 0;
    },
    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function (otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },
    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function (input) {
        var self = this;
        var state = this.state;
        function emit(event) {
            self.manager.emit(event, input);
        }
        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
        emit(self.options.event); // simple 'eventName' events
        if (input.additionalEvent) {
            emit(input.additionalEvent);
        }
        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },
    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function (input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },
    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function () {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },
    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function (inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = Object.assign({}, inputData);
        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }
        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }
        this.state = this.process(inputDataClone);
        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },
    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function (_inputData) { },
    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function () { },
    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function () { }
};
/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    }
    else if (state & STATE_ENDED) {
        return 'end';
    }
    else if (state & STATE_CHANGED) {
        return 'move';
    }
    else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}
/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    }
    else if (direction == DIRECTION_UP) {
        return 'up';
    }
    else if (direction == DIRECTION_LEFT) {
        return 'left';
    }
    else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}
/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}
/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}
inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },
    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function (input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },
    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function (input) {
        var state = this.state;
        var eventType = input.eventType;
        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);
        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        }
        else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            }
            else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});
/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);
    this.pX = null;
    this.pY = null;
}
inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },
    getTouchAction: function () {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },
    directionTest: function (input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;
        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            }
            else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },
    attrTest: function (input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },
    emit: function (input) {
        this.pX = input.deltaX;
        this.pY = input.deltaY;
        var direction = directionStr(input.direction);
        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});
/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}
inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },
    getTouchAction: function () {
        return [TOUCH_ACTION_NONE];
    },
    attrTest: function (input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },
    emit: function (input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});
/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);
    this._timer = null;
    this._input = null;
}
inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251,
        threshold: 9 // a minimal movement is ok, but keep it low
    },
    getTouchAction: function () {
        return [TOUCH_ACTION_AUTO];
    },
    process: function (input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;
        this._input = input;
        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        }
        else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function () {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        }
        else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },
    reset: function () {
        clearTimeout(this._timer);
    },
    emit: function (input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }
        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        }
        else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});
/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}
inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },
    getTouchAction: function () {
        return [TOUCH_ACTION_NONE];
    },
    attrTest: function (input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});
/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}
inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },
    getTouchAction: function () {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },
    attrTest: function (input) {
        var direction = this.options.direction;
        var velocity;
        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        }
        else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        }
        else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }
        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },
    emit: function (input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }
        this.manager.emit(this.options.event, input);
    }
});
/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);
    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;
    this._timer = null;
    this._input = null;
    this.count = 0;
}
inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 9,
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },
    getTouchAction: function () {
        return [TOUCH_ACTION_MANIPULATION];
    },
    process: function (input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;
        this.reset();
        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }
        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }
            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
            this.pTime = input.timeStamp;
            this.pCenter = input.center;
            if (!validMultiTap || !validInterval) {
                this.count = 1;
            }
            else {
                this.count += 1;
            }
            this._input = input;
            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                }
                else {
                    this._timer = setTimeoutContext(function () {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },
    failTimeout: function () {
        this._timer = setTimeoutContext(function () {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },
    reset: function () {
        clearTimeout(this._timer);
    },
    emit: function () {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});
/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, _defaults.preset);
    return new Manager(element, options);
}
/**
 * default settings
 * @namespace
 */
var _defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,
    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,
    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,
    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,
    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,
    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, { enable: false }],
        [PinchRecognizer, { enable: false }, ['rotate']],
        [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }],
        [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
        [PressRecognizer]
    ],
    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',
        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',
        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',
        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',
        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',
        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};
var STOP = 1;
var FORCED_STOP = 2;
/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = Object.assign({}, _defaults, options || {});
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);
    toggleCssProps(this, true);
    each(this.options.recognizers, function (item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}
Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function (options) {
        Object.assign(this.options, options);
        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },
    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function (force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },
    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function (inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }
        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);
        var recognizer;
        var recognizers = this.recognizers;
        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;
        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }
        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];
            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && (!curRecognizer || recognizer == curRecognizer ||
                recognizer.canRecognizeWith(curRecognizer))) {
                recognizer.recognize(inputData);
            }
            else {
                recognizer.reset();
            }
            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },
    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function (recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }
        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },
    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function (recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }
        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }
        this.recognizers.push(recognizer);
        recognizer.manager = this;
        this.touchAction.update();
        return recognizer;
    },
    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function (recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }
        recognizer = this.get(recognizer);
        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);
            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }
        return this;
    },
    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function (events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function (event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },
    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function (events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function (event) {
            if (!handler) {
                delete handlers[event];
            }
            else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },
    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function (event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }
        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }
        data.type = event;
        data.preventDefault = function () {
            data.srcEvent.preventDefault();
        };
        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },
    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function () {
        this.element && toggleCssProps(this, false);
        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};
/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    each(manager.options.cssProps, function (value, name) {
        element.style[prefixed(element.style, name)] = add ? value : '';
    });
}
/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = doc.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}
Object.assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,
    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,
    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,
    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,
    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,
    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,
    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});
win.Hammer = Hammer;

//# sourceMappingURL=hammer.js.map

/***/ }),

/***/ "./node_modules/ionic-angular/util/util.js":
/*!*************************************************!*\
  !*** ./node_modules/ionic-angular/util/util.js ***!
  \*************************************************/
/*! exports provided: clamp, deepCopy, deepEqual, debounce, normalizeURL, defaults, isBoolean, isString, isNumber, isFunction, isDefined, isUndefined, isPresent, isBlank, isObject, isArray, isPrimitive, isTrueProperty, isCheckedProperty, isRightSide, reorderArray, removeArrayItem, swipeShouldReset, requestIonicCallback, assert, runInDev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeURL", function() { return normalizeURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPresent", function() { return isPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlank", function() { return isBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrueProperty", function() { return isTrueProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCheckedProperty", function() { return isCheckedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRightSide", function() { return isRightSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reorderArray", function() { return reorderArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeArrayItem", function() { return removeArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swipeShouldReset", function() { return swipeShouldReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestIonicCallback", function() { return requestIonicCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInDev", function() { return _runInDev; });
/**
 * @hidden
 * Given a min and max, restrict the given number
 * to the range.
 * @param min the minimum
 * @param n the value
 * @param max the maximum
 */
function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
}
/** @hidden */
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/** @hidden */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    return JSON.stringify(a) === JSON.stringify(b);
}
/** @hidden */
function debounce(fn, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout, args, context, timestamp, result;
    return function () {
        context = this;
        args = arguments;
        timestamp = Date.now();
        var later = function () {
            var last = Date.now() - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                if (!immediate)
                    result = fn.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        if (callNow)
            result = fn.apply(context, args);
        return result;
    };
}
/**
 * @hidden
 * Rewrites an absolute URL so it works across file and http based engines
 */
function normalizeURL(url) {
    var ionic = window['Ionic'];
    if (ionic && ionic.normalizeURL) {
        return ionic.normalizeURL(url);
    }
    return url;
}
/**
 * @hidden
 * Apply default arguments if they don't exist in
 * the first object.
 * @param {any} dest the destination to apply defaults to.
 */
function defaults(dest) {
    var _args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        _args[_i - 1] = arguments[_i];
    }
    for (var i = arguments.length - 1; i >= 1; i--) {
        var source = arguments[i];
        if (source) {
            for (var key in source) {
                if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}
/** @hidden */
function isBoolean(val) { return typeof val === 'boolean'; }
/** @hidden */
function isString(val) { return typeof val === 'string'; }
/** @hidden */
function isNumber(val) { return typeof val === 'number'; }
/** @hidden */
function isFunction(val) { return typeof val === 'function'; }
/** @hidden */
function isDefined(val) { return typeof val !== 'undefined'; }
/** @hidden */
function isUndefined(val) { return typeof val === 'undefined'; }
/** @hidden */
function isPresent(val) { return val !== undefined && val !== null; }
/** @hidden */
function isBlank(val) { return val === undefined || val === null; }
/** @hidden */
function isObject(val) { return typeof val === 'object'; }
/** @hidden */
function isArray(val) { return Array.isArray(val); }
/** @hidden */
function isPrimitive(val) {
    return isString(val) || isBoolean(val) || (isNumber(val) && !isNaN(val));
}
/** @hidden */
function isTrueProperty(val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === 'on' || val === '');
    }
    return !!val;
}
/** @hidden */
function isCheckedProperty(a, b) {
    if (a === undefined || a === null || a === '') {
        return (b === undefined || b === null || b === '');
    }
    else if (a === true || a === 'true') {
        return (b === true || b === 'true');
    }
    else if (a === false || a === 'false') {
        return (b === false || b === 'false');
    }
    else if (a === 0 || a === '0') {
        return (b === 0 || b === '0');
    }
    // not using strict comparison on purpose
    return (a == b); // tslint:disable-line
}
/**
 * @hidden
 * Given a side, return if it should be on the right
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 * @param defaultRight whether the default side is right
 */
function isRightSide(side, isRTL, defaultRight) {
    if (defaultRight === void 0) { defaultRight = false; }
    switch (side) {
        case 'right': return true;
        case 'left': return false;
        case 'end': return !isRTL;
        case 'start': return isRTL;
        default: return defaultRight ? !isRTL : isRTL;
    }
}
/** @hidden */
function reorderArray(array, indexes) {
    var element = array[indexes.from];
    array.splice(indexes.from, 1);
    array.splice(indexes.to, 0, element);
    return array;
}
/** @hidden */
function removeArrayItem(array, item) {
    var index = array.indexOf(item);
    return !!~index && !!array.splice(index, 1);
}
/** @hidden */
function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
    // The logic required to know when the sliding item should close (openAmount=0)
    // depends on three booleans (isCloseDirection, isMovingFast, isOnCloseZone)
    // and it ended up being too complicated to be written manually without errors
    // so the truth table is attached below: (0=false, 1=true)
    // isCloseDirection | isMovingFast | isOnCloseZone || shouldClose
    //         0        |       0      |       0       ||    0
    //         0        |       0      |       1       ||    1
    //         0        |       1      |       0       ||    0
    //         0        |       1      |       1       ||    0
    //         1        |       0      |       0       ||    0
    //         1        |       0      |       1       ||    1
    //         1        |       1      |       0       ||    1
    //         1        |       1      |       1       ||    1
    // The resulting expression was generated by resolving the K-map (Karnaugh map):
    var shouldClose = (!isMovingFast && isOnResetZone) || (isResetDirection && isMovingFast);
    return shouldClose;
}
/** @hidden */
var ASSERT_ENABLED = true;
/** @hidden */
function _runInDev(fn) {
    if (ASSERT_ENABLED === true) {
        return fn();
    }
}
/** @hidden */
function _assert(actual, reason) {
    if (!actual && ASSERT_ENABLED === true) {
        var message = 'IONIC ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
}
/** @hidden */
function requestIonicCallback(functionToLazy) {
    if ('requestIdleCallback' in window) {
        return window.requestIdleCallback(functionToLazy);
    }
    else {
        return setTimeout(functionToLazy, 500);
    }
}
/** @hidden */

/** @hidden */

//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/ionic-long-press/fesm5/ionic-long-press.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ionic-long-press/fesm5/ionic-long-press.js ***!
  \*****************************************************************/
/*! exports provided: LongPressDirective, LongPressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPressDirective", function() { return LongPressDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPressModule", function() { return LongPressModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ionic_angular_gestures_gesture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-angular/gestures/gesture */ "./node_modules/ionic-angular/gestures/gesture.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LongPressDirective = /** @class */ (function () {
    function LongPressDirective(zone, el) {
        this.zone = zone;
        this.onPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    LongPressDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.interval)
            this.interval = 500;
        if (this.interval < 40) {
            throw new Error('A limit of 40ms is imposed so you don\'t destroy device performance. If you need less than a 40ms interval, please file an issue explaining your use case.');
        }
        this.pressGesture = new ionic_angular_gestures_gesture__WEBPACK_IMPORTED_MODULE_1__["Gesture"](this.el);
        this.pressGesture.listen();
        this.pressGesture.on('press', function (e) {
            _this.onPressStart.emit(e);
            _this.clearInt();
            _this.int = /** @type {?} */ (setInterval(function () {
                _this.onPressing.emit();
            }, _this.interval));
        });
        this.pressGesture.on('pressup', function (e) {
            _this.pressEnd();
        });
        this.pressGesture.on('pan', function (e) {
            _this.pressEnd();
        });
        this.pressGesture.on('release', function (e) {
            _this.pressEnd();
        });
        this.el.addEventListener('mouseleave', function (e) {
            _this.pressEnd();
        });
        this.el.addEventListener('mouseout', function (e) {
            _this.pressEnd();
        });
    };
    /**
     * @return {?}
     */
    LongPressDirective.prototype.clearInt = /**
     * @return {?}
     */
    function () {
        if (this.int !== undefined) {
            clearInterval(this.int);
            this.int = undefined;
        }
    };
    /**
     * @return {?}
     */
    LongPressDirective.prototype.pressEnd = /**
     * @return {?}
     */
    function () {
        this.clearInt();
        this.onPressEnd.emit();
    };
    /**
     * @return {?}
     */
    LongPressDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.pressEnd();
        this.pressGesture.destroy();
    };
    LongPressDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ion-long-press]'
                },] },
    ];
    /** @nocollapse */
    LongPressDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    LongPressDirective.propDecorators = {
        "interval": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onPressStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onPressing": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onPressEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return LongPressDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LongPressModule = /** @class */ (function () {
    function LongPressModule() {
    }
    LongPressModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    declarations: [LongPressDirective],
                    exports: [LongPressDirective]
                },] },
    ];
    return LongPressModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbG9uZy1wcmVzcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaW9uaWMtbG9uZy1wcmVzcy9kaXJlY3RpdmVzL2xvbmctcHJlc3MuZGlyZWN0aXZlLnRzIiwibmc6Ly9pb25pYy1sb25nLXByZXNzL2xvbmctcHJlc3MubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHZXN0dXJlIH0gZnJvbSAnaW9uaWMtYW5ndWxhci9nZXN0dXJlcy9nZXN0dXJlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaW9uLWxvbmctcHJlc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBMb25nUHJlc3NEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBpbnRlcnZhbDogbnVtYmVyO1xuXG4gICAgQE91dHB1dCgpIG9uUHJlc3NTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uUHJlc3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblByZXNzRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGVsOiBIVE1MRWxlbWVudDtcbiAgICBwcmVzc0dlc3R1cmU6IEdlc3R1cmU7XG5cbiAgICBpbnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgem9uZTogTmdab25lLFxuICAgICAgICBlbDogRWxlbWVudFJlZlxuICAgICkge1xuICAgICAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVydmFsKSB0aGlzLmludGVydmFsID0gNTAwO1xuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCA8IDQwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbGltaXQgb2YgNDBtcyBpcyBpbXBvc2VkIHNvIHlvdSBkb25cXCd0IGRlc3Ryb3kgZGV2aWNlIHBlcmZvcm1hbmNlLiBJZiB5b3UgbmVlZCBsZXNzIHRoYW4gYSA0MG1zIGludGVydmFsLCBwbGVhc2UgZmlsZSBhbiBpc3N1ZSBleHBsYWluaW5nIHlvdXIgdXNlIGNhc2UuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZSA9IG5ldyBHZXN0dXJlKHRoaXMuZWwpO1xuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5saXN0ZW4oKTtcbiAgICAgICAgdGhpcy5wcmVzc0dlc3R1cmUub24oJ3ByZXNzJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblByZXNzU3RhcnQuZW1pdChlKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJJbnQoKTtcbiAgICAgICAgICAgIHRoaXMuaW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25QcmVzc2luZy5lbWl0KCk7XG4gICAgICAgICAgICB9LCB0aGlzLmludGVydmFsKSBhcyBhbnk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJlc3NHZXN0dXJlLm9uKCdwcmVzc3VwJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5vbigncGFuJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5vbigncmVsZWFzZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NFbmQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhckludCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnQpO1xuICAgICAgICAgICAgdGhpcy5pbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmVzc0VuZCgpIHtcbiAgICAgICAgdGhpcy5jbGVhckludCgpO1xuICAgICAgICB0aGlzLm9uUHJlc3NFbmQuZW1pdCgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnByZXNzRW5kKCk7XG4gICAgICAgIHRoaXMucHJlc3NHZXN0dXJlLmRlc3Ryb3koKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHZXN0dXJlIH0gZnJvbSAnaW9uaWMtYW5ndWxhci9nZXN0dXJlcy9nZXN0dXJlJztcbmltcG9ydCB7IExvbmdQcmVzc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9sb25nLXByZXNzLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW0xvbmdQcmVzc0RpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0xvbmdQcmVzc0RpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTG9uZ1ByZXNzTW9kdWxlIHsgfSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBbUJJLDRCQUNXLE1BQ1AsRUFBYztRQURQLFNBQUksR0FBSixJQUFJOzRCQVY2QixJQUFJLFlBQVksRUFBRTswQkFDcEIsSUFBSSxZQUFZLEVBQUU7MEJBQ2xCLElBQUksWUFBWSxFQUFFO1FBV3hELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM5Qjs7OztJQUVELHFDQUFROzs7SUFBUjtRQUFBLGlCQW1DQztRQWxDRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsNEpBQTRKLENBQUMsQ0FBQztTQUNqTDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBTTtZQUNqQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsS0FBSSxDQUFDLEdBQUcscUJBQUcsV0FBVyxDQUFDO2dCQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzFCLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBUSxDQUFBLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBTTtZQUNuQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsQ0FBTTtZQUMvQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBTTtZQUNuQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBQyxDQUFNO1lBQzFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxVQUFDLENBQU07WUFDeEMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUN4QixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO0tBQ0o7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUMxQjs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQy9COztnQkEzRUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7aUJBQy9COzs7O2dCQUxvRCxNQUFNO2dCQUF2QyxVQUFVOzs7NkJBUXpCLEtBQUs7aUNBRUwsTUFBTTsrQkFDTixNQUFNOytCQUNOLE1BQU07OzZCQVpYOzs7Ozs7O0FDQUE7Ozs7Z0JBS0MsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3FCQUNmO29CQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDaEM7OzBCQVhEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./src/app/directives/delay-drag.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/delay-drag.directive.ts ***!
  \****************************************************/
/*! exports provided: DelayDragDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayDragDirective", function() { return DelayDragDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DelayDragDirective = /** @class */ (function () {
    function DelayDragDirective() {
        this.draggable = false;
    }
    Object.defineProperty(DelayDragDirective.prototype, "delay", {
        get: function () {
            // if it's a string, that's because we didn't pass a value (<div delayDragLift></div>)
            return (typeof this.dragDelay === 'number')
                ? this.dragDelay
                : 200;
        },
        enumerable: true,
        configurable: true
    });
    DelayDragDirective.prototype.onTouchStart = function (evt) {
        var _this = this;
        console.log('touchstart');
        this.touchTimeout = setTimeout(function () {
            _this.draggable = true;
        }, this.delay);
    };
    DelayDragDirective.prototype.onTouchMove = function (evt) {
        console.log('touchmove');
        if (!this.draggable) {
            evt.stopPropagation();
            clearTimeout(this.touchTimeout);
        }
        evt.preventDefault();
    };
    DelayDragDirective.prototype.onTouchEnd = function (evt) {
        console.log('touchend');
        clearTimeout(this.touchTimeout);
        this.draggable = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('delayDrag'),
        __metadata("design:type", Number)
    ], DelayDragDirective.prototype, "dragDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.delay-drag-lifted'),
        __metadata("design:type", Boolean)
    ], DelayDragDirective.prototype, "draggable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], DelayDragDirective.prototype, "onTouchStart", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchmove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], DelayDragDirective.prototype, "onTouchMove", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], DelayDragDirective.prototype, "onTouchEnd", null);
    DelayDragDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: "[delayDrag]" })
    ], DelayDragDirective);
    return DelayDragDirective;
}());



/***/ }),

/***/ "./src/app/pages/home-settings/home-settings.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/home-settings/home-settings.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSettingsPageModule", function() { return HomeSettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-settings.page */ "./src/app/pages/home-settings/home-settings.page.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_directives_delay_drag_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/directives/delay-drag.directive */ "./src/app/directives/delay-drag.directive.ts");
/* harmony import */ var ionic_long_press__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-long-press */ "./node_modules/ionic-long-press/fesm5/ionic-long-press.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _home_settings_page__WEBPACK_IMPORTED_MODULE_5__["HomeSettingsPage"]
    }
];
var HomeSettingsPageModule = /** @class */ (function () {
    function HomeSettingsPageModule() {
    }
    HomeSettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_6__["DragulaModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                ionic_long_press__WEBPACK_IMPORTED_MODULE_9__["LongPressModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_home_settings_page__WEBPACK_IMPORTED_MODULE_5__["HomeSettingsPage"], src_app_directives_delay_drag_directive__WEBPACK_IMPORTED_MODULE_8__["DelayDragDirective"]]
        })
    ], HomeSettingsPageModule);
    return HomeSettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/home-settings/home-settings.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/home-settings/home-settings.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <button ion-button icon-only (click)=\"close()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </button> </ion-buttons>\n    <ion-title class=\"title\">{{'title_home_setting'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding forceOverscroll=\"false\">\n    <ion-chip outline=true (click)=\"goToSettings()\">\n        <ion-icon name=\"cog\" color=\"primary\"></ion-icon>\n        <ion-label>{{'label_other_settinga'|translate}}</ion-label>\n      </ion-chip>\n  <ion-grid id=\"category-buttons\">\n    <ion-row dragula=\"entries\" [(dragulaModel)]=\"categories\" lines=\"none\">\n      <ion-col size=\"6\"ion-long-press [interval]=\"400\" delayDrag *ngFor=\"let category of categories\">\n        <div class=\"home-button\" (press)=\"doSomething()\">\n          <div>\n            <div>{{category.name[language]}}</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <div class=\"drag-label\">\n        {{'label_setting_drag'|translate}}\n    </div>\n  </ion-grid>\n  <div class=\"wrapper\">\n    <div class=\"scrolling-wrapper-flexbox loop\" dragula=\"entries\" [(dragulaModel)]=\"allCategories\">\n      <div class=\"card\" ion-long-press [interval]=\"400\" delayDrag *ngFor=\"let category of allCategories\" (press)=\"doSomething()\">\n        <h2>{{category.name[language]}}</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"horizzontal-arrow\">\n      <div class=\"icon\">\n          <div class=\"arrow-right\"></div>\n          <div class=\"arrow-left\"></div>\n        </div>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"save-button\" (click)=\"saveHome()\">\n      <ion-icon name=\"save\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home-settings/home-settings.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/home-settings/home-settings.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html.ios{--ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif}html.md{--ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif}html{--ion-font-family: var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}.ion-color-primary{--ion-color-base: var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb: var(--ion-color-primary-rgb, 56,128,255) !important;--ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;--ion-color-base-rgb: var(--ion-color-secondary-rgb, 12,209,232) !important;--ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;--ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important}.ion-color-tertiary{--ion-color-base: var(--ion-color-tertiary, #7044ff) !important;--ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112,68,255) !important;--ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;--ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important}.ion-color-success{--ion-color-base: var(--ion-color-success, #10dc60) !important;--ion-color-base-rgb: var(--ion-color-success-rgb, 16,220,96) !important;--ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;--ion-color-tint: var(--ion-color-success-tint, #28e070) !important}.ion-color-warning{--ion-color-base: var(--ion-color-warning, #ffce00) !important;--ion-color-base-rgb: var(--ion-color-warning-rgb, 255,206,0) !important;--ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;--ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important}.ion-color-danger{--ion-color-base: var(--ion-color-danger, #f04141) !important;--ion-color-base-rgb: var(--ion-color-danger-rgb, 240,65,65) !important;--ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;--ion-color-tint: var(--ion-color-danger-tint, #f25454) !important}.ion-color-light{--ion-color-base: var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb: var(--ion-color-light-rgb, 244,245,248) !important;--ion-color-contrast: var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0,0,0) !important;--ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base: var(--ion-color-medium, #989aa2) !important;--ion-color-base-rgb: var(--ion-color-medium-rgb, 152,154,162) !important;--ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;--ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important}.ion-color-dark{--ion-color-base: var(--ion-color-dark, #222428) !important;--ion-color-base-rgb: var(--ion-color-dark-rgb, 34,36,40) !important;--ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden,[hidden]{display:none !important}.ion-page-invisible{opacity:0}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding: 20px}@supports (padding-top: 20px){html{--ion-safe-area-top: var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){html{--ion-safe-area-top: constant(safe-area-inset-top);--ion-safe-area-bottom: constant(safe-area-inset-bottom);--ion-safe-area-left: constant(safe-area-inset-left);--ion-safe-area-right: constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top: env(safe-area-inset-top);--ion-safe-area-bottom: env(safe-area-inset-bottom);--ion-safe-area-left: env(safe-area-inset-left);--ion-safe-area-right: env(safe-area-inset-right)}}audio,canvas,progress,video{vertical-align:baseline}audio:not([controls]){display:none;height:0}b,strong{font-weight:bold}img{max-width:100%;border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:1px;border-width:0;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}label,input,select,textarea{font-family:inherit;line-height:normal}textarea{overflow:auto;height:auto;font:inherit;color:inherit}textarea::-webkit-input-placeholder{padding-left:2px}textarea::-moz-placeholder{padding-left:2px}textarea:-ms-input-placeholder{padding-left:2px}textarea::-ms-input-placeholder{padding-left:2px}textarea::placeholder{padding-left:2px}form,input,optgroup,select{margin:0;font:inherit;color:inherit}html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{cursor:pointer;-webkit-appearance:button}a,a div,a span,a ion-icon,a ion-label,button,button div,button span,button ion-icon,button ion-label,.ion-tappable,[tappable],[tappable] div,[tappable] span,[tappable] ion-icon,[tappable] ion-label,input,textarea{touch-action:manipulation}a ion-label,button ion-label{pointer-events:none}button{border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}[tappable]{cursor:pointer}a[disabled],button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input[type=\"checkbox\"],input[type=\"radio\"]{padding:0;box-sizing:border-box}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}html{width:100%;height:100%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.plt-pwa{height:100vh}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}html{font-family:var(--ion-font-family)}a{background-color:transparent;color:var(--ion-color-primary, #3880ff)}h1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}h1{margin-top:20px;font-size:26px}h2{margin-top:18px;font-size:24px}h3{font-size:22px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}small{font-size:75%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}.ion-no-padding,[no-padding]{--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.ion-padding,[padding]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding,[padding]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}.ion-padding-top,[padding-top]{--padding-top: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px)}.ion-padding-start,[padding-start]{--padding-start: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-start,[padding-start]{padding-left:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px)}}.ion-padding-end,[padding-end]{--padding-end: var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-end,[padding-end]{padding-right:unset;-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}.ion-padding-bottom,[padding-bottom]{--padding-bottom: var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-vertical,[padding-vertical]{--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-horizontal,[padding-horizontal]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-horizontal,[padding-horizontal]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}.ion-no-margin,[no-margin]{--margin-start: 0;--margin-end: 0;--margin-top: 0;--margin-bottom: 0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.ion-margin,[margin]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin,[margin]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}.ion-margin-top,[margin-top]{--margin-top: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px)}.ion-margin-start,[margin-start]{--margin-start: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-start,[margin-start]{margin-left:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px)}}.ion-margin-end,[margin-end]{--margin-end: var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-end,[margin-end]{margin-right:unset;-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}.ion-margin-bottom,[margin-bottom]{--margin-bottom: var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-vertical,[margin-vertical]{--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-horizontal,[margin-horizontal]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-horizontal,[margin-horizontal]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}[float-left]{float:left !important}[float-right]{float:right !important}[float-start]{float:left !important}:host-context([dir=rtl]) [float-start]{float:right !important}[float-end]{float:right !important}:host-context([dir=rtl]) [float-end]{float:left !important}@media (min-width: 576px){[float-sm-left]{float:left !important}[float-sm-right]{float:right !important}[float-sm-start]{float:left !important}:host-context([dir=rtl]) [float-sm-start]{float:right !important}[float-sm-end]{float:right !important}:host-context([dir=rtl]) [float-sm-end]{float:left !important}}@media (min-width: 768px){[float-md-left]{float:left !important}[float-md-right]{float:right !important}[float-md-start]{float:left !important}:host-context([dir=rtl]) [float-md-start]{float:right !important}[float-md-end]{float:right !important}:host-context([dir=rtl]) [float-md-end]{float:left !important}}@media (min-width: 992px){[float-lg-left]{float:left !important}[float-lg-right]{float:right !important}[float-lg-start]{float:left !important}:host-context([dir=rtl]) [float-lg-start]{float:right !important}[float-lg-end]{float:right !important}:host-context([dir=rtl]) [float-lg-end]{float:left !important}}@media (min-width: 1200px){[float-xl-left]{float:left !important}[float-xl-right]{float:right !important}[float-xl-start]{float:left !important}:host-context([dir=rtl]) [float-xl-start]{float:right !important}[float-xl-end]{float:right !important}:host-context([dir=rtl]) [float-xl-end]{float:left !important}}.ion-text-center,[text-center]{text-align:center !important}.ion-text-justify,[text-justify]{text-align:justify !important}.ion-text-start,[text-start]{text-align:start !important}.ion-text-end,[text-end]{text-align:end !important}.ion-text-left,[text-left]{text-align:left !important}.ion-text-right,[text-right]{text-align:right !important}.ion-text-nowrap,[text-nowrap]{white-space:nowrap !important}.ion-text-wrap,[text-wrap]{white-space:normal !important}@media (min-width: 576px){.ion-text-sm-center,[text-sm-center]{text-align:center !important}.ion-text-sm-justify,[text-sm-justify]{text-align:justify !important}.ion-text-sm-start,[text-sm-start]{text-align:start !important}.ion-text-sm-end,[text-sm-end]{text-align:end !important}.ion-text-sm-left,[text-sm-left]{text-align:left !important}.ion-text-sm-right,[text-sm-right]{text-align:right !important}.ion-text-sm-nowrap,[text-sm-nowrap]{white-space:nowrap !important}.ion-text-sm-wrap,[text-sm-wrap]{white-space:normal !important}}@media (min-width: 768px){.ion-text-md-center,[text-md-center]{text-align:center !important}.ion-text-md-justify,[text-md-justify]{text-align:justify !important}.ion-text-md-start,[text-md-start]{text-align:start !important}.ion-text-md-end,[text-md-end]{text-align:end !important}.ion-text-md-left,[text-md-left]{text-align:left !important}.ion-text-md-right,[text-md-right]{text-align:right !important}.ion-text-md-nowrap,[text-md-nowrap]{white-space:nowrap !important}.ion-text-md-wrap,[text-md-wrap]{white-space:normal !important}}@media (min-width: 992px){.ion-text-lg-center,[text-lg-center]{text-align:center !important}.ion-text-lg-justify,[text-lg-justify]{text-align:justify !important}.ion-text-lg-start,[text-lg-start]{text-align:start !important}.ion-text-lg-end,[text-lg-end]{text-align:end !important}.ion-text-lg-left,[text-lg-left]{text-align:left !important}.ion-text-lg-right,[text-lg-right]{text-align:right !important}.ion-text-lg-nowrap,[text-lg-nowrap]{white-space:nowrap !important}.ion-text-lg-wrap,[text-lg-wrap]{white-space:normal !important}}@media (min-width: 1200px){.ion-text-xl-center,[text-xl-center]{text-align:center !important}.ion-text-xl-justify,[text-xl-justify]{text-align:justify !important}.ion-text-xl-start,[text-xl-start]{text-align:start !important}.ion-text-xl-end,[text-xl-end]{text-align:end !important}.ion-text-xl-left,[text-xl-left]{text-align:left !important}.ion-text-xl-right,[text-xl-right]{text-align:right !important}.ion-text-xl-nowrap,[text-xl-nowrap]{white-space:nowrap !important}.ion-text-xl-wrap,[text-xl-wrap]{white-space:normal !important}}.ion-text-uppercase,[text-uppercase]{text-transform:uppercase !important}.ion-text-lowercase,[text-lowercase]{text-transform:lowercase !important}.ion-text-capitalize,[text-capitalize]{text-transform:capitalize !important}@media (min-width: 576px){.ion-text-sm-uppercase,[text-sm-uppercase]{text-transform:uppercase !important}.ion-text-sm-lowercase,[text-sm-lowercase]{text-transform:lowercase !important}.ion-text-sm-capitalize,[text-sm-capitalize]{text-transform:capitalize !important}}@media (min-width: 768px){.ion-text-md-uppercase,[text-md-uppercase]{text-transform:uppercase !important}.ion-text-md-lowercase,[text-md-lowercase]{text-transform:lowercase !important}.ion-text-md-capitalize,[text-md-capitalize]{text-transform:capitalize !important}}@media (min-width: 992px){.ion-text-lg-uppercase,[text-lg-uppercase]{text-transform:uppercase !important}.ion-text-lg-lowercase,[text-lg-lowercase]{text-transform:lowercase !important}.ion-text-lg-capitalize,[text-lg-capitalize]{text-transform:capitalize !important}}@media (min-width: 1200px){.ion-text-xl-uppercase,[text-xl-uppercase]{text-transform:uppercase !important}.ion-text-xl-lowercase,[text-xl-lowercase]{text-transform:lowercase !important}.ion-text-xl-capitalize,[text-xl-capitalize]{text-transform:capitalize !important}}[align-self-start]{align-self:flex-start !important}[align-self-end]{align-self:flex-end !important}[align-self-center]{align-self:center !important}[align-self-stretch]{align-self:stretch !important}[align-self-baseline]{align-self:baseline !important}[align-self-auto]{align-self:auto !important}[wrap]{flex-wrap:wrap !important}[nowrap]{flex-wrap:nowrap !important}[wrap-reverse]{flex-wrap:wrap-reverse !important}[justify-content-start]{justify-content:flex-start !important}[justify-content-center]{justify-content:center !important}[justify-content-end]{justify-content:flex-end !important}[justify-content-around]{justify-content:space-around !important}[justify-content-between]{justify-content:space-between !important}[justify-content-evenly]{justify-content:space-evenly !important}[align-items-start]{align-items:flex-start !important}[align-items-center]{align-items:center !important}[align-items-end]{align-items:flex-end !important}[align-items-stretch]{align-items:stretch !important}[align-items-baseline]{align-items:baseline !important}html {\n  font-family: 'Titillium Web', sans-serif !important; }.fixed {\n  position: fixed !important; }.spacing {\n  height: 50px !important; }.category {\n  width: 100%;\n  text-align: center;\n  color: black;\n  font-size: 24px;\n  margin-bottom: 1%;\n  border-bottom: 1px solid black; }.searchbar-input {\n  background: white !important; }.bg {\n  background: lightgrey; }/* in-flight clone */.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  pointer-events: none; }/* high-performance display:none; helper */.gu-hide {\n  left: -9999px !important; }/* added to mirrorContainer (default = body) while dragging */.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important; }/* added to the source element while its mirror is dragged */.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20); }.title {\n  background-color: rgba(255, 255, 255, 0.5);\n  color: #11B3EF;\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px;\n  margin: 8px 0px; }.scrolling-wrapper-flexbox {\n  background-color: rgba(255, 255, 255, 0.5);\n  left: 0px;\n  position: fixed;\n  bottom: 50px;\n  width: 100vw;\n  height: 100px;\n  display: flex;\n  overflow-x: auto;\n  z-index: 999; }.scrolling-wrapper-flexbox .card {\n    flex: 0 0 auto;\n    color: black;\n    border: 2px solid black;\n    background: white;\n    padding: 8px;\n    margin: 4px; }#category-buttons {\n  height: calc(100% - 187px);\n  border: 3px solid #11B3EF;\n  position: relative; }#category-buttons .drag-label {\n    position: absolute;\n    bottom: 0px;\n    text-align: center;\n    width: 100%;\n    opacity: 0.5; }#category-buttons .home-button {\n    color: black;\n    border-radius: 4px;\n    width: 100%;\n    height: 100%;\n    margin-bottom: 5%;\n    background: white;\n    color: #11B3EF;\n    text-align: center;\n    padding: 2%; }#category-buttons .home-button .label-button {\n      padding: 8px 0px;\n      font-size: 16px;\n      font-weight: bold; }.close {\n  font-size: 12px; }.horizzontal-arrow {\n  position: fixed;\n  bottom: 0px;\n  height: 50px;\n  width: 100%; }.icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 55%;\n  height: 60px;\n  cursor: pointer; }.arrow-right {\n  position: absolute;\n  top: 25px;\n  width: 90%;\n  height: 2px;\n  background-color: #000000;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n  -webkit-animation: arrow 700ms linear infinite;\n          animation: arrow 700ms linear infinite; }.arrow-right::after {\n  content: '';\n  position: absolute;\n  width: 10px;\n  height: 2px;\n  top: -3px;\n  right: -2px;\n  background-color: #000000;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }.arrow-right::before {\n  content: '';\n  position: absolute;\n  width: 10px;\n  height: 2px;\n  top: 3px;\n  right: -2px;\n  background-color: #000000;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }.arrow-left {\n  position: absolute;\n  top: 25px;\n  width: 90%;\n  height: 2px;\n  background-color: #000000;\n  -webkit-animation: arrow 700ms linear infinite;\n          animation: arrow 700ms linear infinite; }.arrow-left::after {\n  content: '';\n  position: absolute;\n  width: 10px;\n  height: 2px;\n  top: -3px;\n  left: -2px;\n  background-color: #000000;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }.arrow-left::before {\n  content: '';\n  position: absolute;\n  width: 10px;\n  height: 2px;\n  top: 3px;\n  left: -2px;\n  background-color: #000000;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }.gu-mirror {\n  flex: 0 0 auto;\n  border: 2px solid #11B3EF;\n  background: white;\n  margin: 4px;\n  padding: 8px;\n  -webkit-transform-origin: 20% 40%;\n          transform-origin: 20% 40%; }@media screen and (max-width: 768px) {\n  .child {\n    -webkit-touch-callout: none;\n    /* may be useful if your child is an anchor you can otherwise click */\n    -webkit-user-select: none !important;\n    /* Disable selection/copy in UIWebView */\n    -moz-user-select: none !important;\n    -ms-user-select: none !important;\n    user-select: none !important; } }.gu-mirror.child:after {\n  content: \".gu-mirror\"; }.delay-drag-lifted.child:after {\n  content: \".delay-drag-lifted\"; }.gu-mirror.delay-drag-lifted.child:after {\n  content: \".delay-drag-lifted.gu-mirror\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzcyIsIi9ob21lL2NoaW44L0RvY3VtZW50cy93b3JrL21vZHVsYXJBcHAvbW9kdWxhci1hcHAvc3JjL2dsb2JhbC5zY3NzIiwiL2hvbWUvY2hpbjgvRG9jdW1lbnRzL3dvcmsvbW9kdWxhckFwcC9tb2R1bGFyLWFwcC9zcmMvYXBwL3BhZ2VzL2hvbWUtc2V0dGluZ3MvaG9tZS1zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyw2RkFBNkYsQ0FBQyxRQUFRLDBEQUEwRCxDQUFDLEtBQUssMENBQTBDLENBQUMsS0FBSyxzQ0FBc0MsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLG1CQUFtQiwrREFBK0QsMEVBQTBFLHlFQUF5RSx3RkFBd0Ysc0VBQXNFLG1FQUFtRSxDQUFDLHFCQUFxQixpRUFBaUUsNEVBQTRFLDJFQUEyRSwwRkFBMEYsd0VBQXdFLHFFQUFxRSxDQUFDLG9CQUFvQixnRUFBZ0UsMkVBQTJFLDBFQUEwRSx5RkFBeUYs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QUksQUFDbEU7RUFBMkMsd0NBQXVDLEVBQUkiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXNldHRpbmdzL2hvbWUtc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbC5pb3N7LS1pb24tZGVmYXVsdC1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZn1odG1sLm1key0taW9uLWRlZmF1bHQtZm9udDogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfWh0bWx7LS1pb24tZm9udC1mYW1pbHk6IHZhcigtLWlvbi1kZWZhdWx0LWZvbnQpfWJvZHl7YmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcil9Ym9keS5iYWNrZHJvcC1uby1zY3JvbGx7b3ZlcmZsb3c6aGlkZGVufS5pb24tY29sb3ItcHJpbWFyeXstLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwxMjgsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMzE3MWUwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICM0YzhkZmYpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1zZWNvbmRhcnl7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgIzBjZDFlOCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IsIDEyLDIwOSwyMzIpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUsICMwYmI4Y2MpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50LCAjMjRkNmVhKSAhaW1wb3J0YW50fS5pb24tY29sb3ItdGVydGlhcnl7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LCAjNzA0NGZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktcmdiLCAxMTIsNjgsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlLCAjNjMzY2UwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50LCAjN2U1N2ZmKSAhaW1wb3J0YW50fS5pb24tY29sb3Itc3VjY2Vzc3stLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzEwZGM2MCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiLCAxNiwyMjAsOTYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUsICMwZWMyNTQpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCwgIzI4ZTA3MCkgIWltcG9ydGFudH0uaW9uLWNvbG9yLXdhcm5pbmd7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcsICNmZmNlMDApICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiwgMjU1LDIwNiwwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlLCAjZTBiNTAwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQsICNmZmQzMWEpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1kYW5nZXJ7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2YwNDE0MSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IsIDI0MCw2NSw2NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSwgI2QzMzkzOSkgIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQsICNmMjU0NTQpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1saWdodHstLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmNGY1ZjgpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwyNDUsMjQ4KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLDAsMCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50LCAjZjVmNmY5KSAhaW1wb3J0YW50fS5pb24tY29sb3ItbWVkaXVtey0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM5ODlhYTIpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiLCAxNTIsMTU0LDE2MikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSwgIzg2ODg4ZikgIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNhMmE0YWIpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1kYXJrey0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1kYXJrLCAjMjIyNDI4KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IsIDM0LDM2LDQwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlLCAjMWUyMDIzKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQsICMzODNhM2UpICFpbXBvcnRhbnR9Lmlvbi1wYWdle2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Y29udGFpbjpsYXlvdXQgc2l6ZSBzdHlsZTtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDowfWlvbi1yb3V0ZSxpb24tcm91dGUtcmVkaXJlY3QsaW9uLXJvdXRlcixpb24tc2VsZWN0LW9wdGlvbixpb24tbmF2LWNvbnRyb2xsZXIsaW9uLW1lbnUtY29udHJvbGxlcixpb24tYWN0aW9uLXNoZWV0LWNvbnRyb2xsZXIsaW9uLWFsZXJ0LWNvbnRyb2xsZXIsaW9uLWxvYWRpbmctY29udHJvbGxlcixpb24tbW9kYWwtY29udHJvbGxlcixpb24tcGlja2VyLWNvbnRyb2xsZXIsaW9uLXBvcG92ZXItY29udHJvbGxlcixpb24tdG9hc3QtY29udHJvbGxlciwuaW9uLXBhZ2UtaGlkZGVuLFtoaWRkZW5de2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fS5pb24tcGFnZS1pbnZpc2libGV7b3BhY2l0eTowfWh0bWwucGx0LWlvcy5wbHQtaHlicmlkLGh0bWwucGx0LWlvcy5wbHQtcHdhey0taW9uLXN0YXR1c2Jhci1wYWRkaW5nOiAyMHB4fUBzdXBwb3J0cyAocGFkZGluZy10b3A6IDIwcHgpe2h0bWx7LS1pb24tc2FmZS1hcmVhLXRvcDogdmFyKC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nKX19QHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCkpe2h0bWx7LS1pb24tc2FmZS1hcmVhLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCk7LS1pb24tc2FmZS1hcmVhLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7LS1pb24tc2FmZS1hcmVhLWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCl9fUBzdXBwb3J0cyAocGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSl7aHRtbHstLWlvbi1zYWZlLWFyZWEtdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7LS1pb24tc2FmZS1hcmVhLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pOy0taW9uLXNhZmUtYXJlYS1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpOy0taW9uLXNhZmUtYXJlYS1yaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCl9fVxuIiwiYXVkaW8sY2FudmFzLHByb2dyZXNzLHZpZGVve3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfWF1ZGlvOm5vdChbY29udHJvbHNdKXtkaXNwbGF5Om5vbmU7aGVpZ2h0OjB9YixzdHJvbmd7Zm9udC13ZWlnaHQ6Ym9sZH1pbWd7bWF4LXdpZHRoOjEwMCU7Ym9yZGVyOjB9c3ZnOm5vdCg6cm9vdCl7b3ZlcmZsb3c6aGlkZGVufWZpZ3VyZXttYXJnaW46MWVtIDQwcHh9aHJ7aGVpZ2h0OjFweDtib3JkZXItd2lkdGg6MDtib3gtc2l6aW5nOmNvbnRlbnQtYm94fXByZXtvdmVyZmxvdzphdXRvfWNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19bGFiZWwsaW5wdXQsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7bGluZS1oZWlnaHQ6bm9ybWFsfXRleHRhcmVhe292ZXJmbG93OmF1dG87aGVpZ2h0OmF1dG87Zm9udDppbmhlcml0O2NvbG9yOmluaGVyaXR9dGV4dGFyZWE6OnBsYWNlaG9sZGVye3BhZGRpbmctbGVmdDoycHh9Zm9ybSxpbnB1dCxvcHRncm91cCxzZWxlY3R7bWFyZ2luOjA7Zm9udDppbmhlcml0O2NvbG9yOmluaGVyaXR9aHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLGlucHV0W3R5cGU9XCJyZXNldFwiXSxpbnB1dFt0eXBlPVwic3VibWl0XCJde2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259YSxhIGRpdixhIHNwYW4sYSBpb24taWNvbixhIGlvbi1sYWJlbCxidXR0b24sYnV0dG9uIGRpdixidXR0b24gc3BhbixidXR0b24gaW9uLWljb24sYnV0dG9uIGlvbi1sYWJlbCwuaW9uLXRhcHBhYmxlLFt0YXBwYWJsZV0sW3RhcHBhYmxlXSBkaXYsW3RhcHBhYmxlXSBzcGFuLFt0YXBwYWJsZV0gaW9uLWljb24sW3RhcHBhYmxlXSBpb24tbGFiZWwsaW5wdXQsdGV4dGFyZWF7dG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbn1hIGlvbi1sYWJlbCxidXR0b24gaW9uLWxhYmVse3BvaW50ZXItZXZlbnRzOm5vbmV9YnV0dG9ue2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXZhcmlhbnQ6aW5oZXJpdDtsaW5lLWhlaWdodDoxO3RleHQtdHJhbnNmb3JtOm5vbmU7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1bdGFwcGFibGVde2N1cnNvcjpwb2ludGVyfWFbZGlzYWJsZWRdLGJ1dHRvbltkaXNhYmxlZF0saHRtbCBpbnB1dFtkaXNhYmxlZF17Y3Vyc29yOmRlZmF1bHR9YnV0dG9uOjotbW96LWZvY3VzLWlubmVyLGlucHV0OjotbW96LWZvY3VzLWlubmVye3BhZGRpbmc6MDtib3JkZXI6MH1pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0saW5wdXRbdHlwZT1cInJhZGlvXCJde3BhZGRpbmc6MDtib3gtc2l6aW5nOmJvcmRlci1ib3h9aW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixpbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue2hlaWdodDphdXRvfWlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24saW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH10ZCx0aHtwYWRkaW5nOjB9XG4iLCIqe2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmV9aHRtbHt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RleHQtc2l6ZS1hZGp1c3Q6MTAwJX1odG1sLnBsdC1wd2F7aGVpZ2h0OjEwMHZofWJvZHl7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXgtaGVpZ2h0OjEwMCU7dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVMZWdpYmlsaXR5O292ZXJmbG93OmhpZGRlbjt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uOy13ZWJraXQtdXNlci1kcmFnOm5vbmU7LW1zLWNvbnRlbnQtem9vbWluZzpub25lO3dvcmQtd3JhcDpicmVhay13b3JkO292ZXJzY3JvbGwtYmVoYXZpb3IteTpub25lO3RleHQtc2l6ZS1hZGp1c3Q6bm9uZX1cbiIsImh0bWx7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5KX1he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpfWgxLGgyLGgzLGg0LGg1LGg2e21hcmdpbi10b3A6MTZweDttYXJnaW4tYm90dG9tOjEwcHg7Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjEuMn1oMXttYXJnaW4tdG9wOjIwcHg7Zm9udC1zaXplOjI2cHh9aDJ7bWFyZ2luLXRvcDoxOHB4O2ZvbnQtc2l6ZToyNHB4fWgze2ZvbnQtc2l6ZToyMnB4fWg0e2ZvbnQtc2l6ZToyMHB4fWg1e2ZvbnQtc2l6ZToxOHB4fWg2e2ZvbnQtc2l6ZToxNnB4fXNtYWxse2ZvbnQtc2l6ZTo3NSV9c3ViLHN1cHtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vwe3RvcDotLjVlbX1zdWJ7Ym90dG9tOi0uMjVlbX1cbiIsIi5pb24tbm8tcGFkZGluZyxbbm8tcGFkZGluZ117LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7LS1wYWRkaW5nLXRvcDogMDstLXBhZGRpbmctYm90dG9tOiAwO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9Lmlvbi1wYWRkaW5nLFtwYWRkaW5nXXstLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTstLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpOy0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tcGFkZGluZyxbcGFkZGluZ117cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX19Lmlvbi1wYWRkaW5nLXRvcCxbcGFkZGluZy10b3Bdey0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9Lmlvbi1wYWRkaW5nLXN0YXJ0LFtwYWRkaW5nLXN0YXJ0XXstLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLXBhZGRpbmctc3RhcnQsW3BhZGRpbmctc3RhcnRde3BhZGRpbmctbGVmdDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX19Lmlvbi1wYWRkaW5nLWVuZCxbcGFkZGluZy1lbmRdey0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1wYWRkaW5nLWVuZCxbcGFkZGluZy1lbmRde3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX19Lmlvbi1wYWRkaW5nLWJvdHRvbSxbcGFkZGluZy1ib3R0b21dey0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9Lmlvbi1wYWRkaW5nLXZlcnRpY2FsLFtwYWRkaW5nLXZlcnRpY2FsXXstLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9Lmlvbi1wYWRkaW5nLWhvcml6b250YWwsW3BhZGRpbmctaG9yaXpvbnRhbF17LS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctbGVmdDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1yaWdodDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tcGFkZGluZy1ob3Jpem9udGFsLFtwYWRkaW5nLWhvcml6b250YWxde3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9fS5pb24tbm8tbWFyZ2luLFtuby1tYXJnaW5dey0tbWFyZ2luLXN0YXJ0OiAwOy0tbWFyZ2luLWVuZDogMDstLW1hcmdpbi10b3A6IDA7LS1tYXJnaW4tYm90dG9tOiAwO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH0uaW9uLW1hcmdpbixbbWFyZ2luXXstLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTstLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpOy0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWxlZnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXJpZ2h0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1tYXJnaW4sW21hcmdpbl17bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfX0uaW9uLW1hcmdpbi10b3AsW21hcmdpbi10b3Bdey0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX0uaW9uLW1hcmdpbi1zdGFydCxbbWFyZ2luLXN0YXJ0XXstLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWxlZnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tbWFyZ2luLXN0YXJ0LFttYXJnaW4tc3RhcnRde21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9fS5pb24tbWFyZ2luLWVuZCxbbWFyZ2luLWVuZF17LS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tcmlnaHQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tbWFyZ2luLWVuZCxbbWFyZ2luLWVuZF17bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLWVuZDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX19Lmlvbi1tYXJnaW4tYm90dG9tLFttYXJnaW4tYm90dG9tXXstLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9Lmlvbi1tYXJnaW4tdmVydGljYWwsW21hcmdpbi12ZXJ0aWNhbF17LS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTstLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX0uaW9uLW1hcmdpbi1ob3Jpem9udGFsLFttYXJnaW4taG9yaXpvbnRhbF17LS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpOy0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWxlZnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXJpZ2h0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLW1hcmdpbi1ob3Jpem9udGFsLFttYXJnaW4taG9yaXpvbnRhbF17bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfX1cbiIsIltmbG9hdC1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9W2Zsb2F0LXJpZ2h0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fVtmbG9hdC1zdGFydF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtc3RhcnRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Zsb2F0LWVuZF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LWVuZF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fUBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7W2Zsb2F0LXNtLWxlZnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH1bZmxvYXQtc20tcmlnaHRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Zsb2F0LXNtLXN0YXJ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1zbS1zdGFydF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH1bZmxvYXQtc20tZW5kXXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtc20tZW5kXXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7W2Zsb2F0LW1kLWxlZnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH1bZmxvYXQtbWQtcmlnaHRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Zsb2F0LW1kLXN0YXJ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1tZC1zdGFydF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH1bZmxvYXQtbWQtZW5kXXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbWQtZW5kXXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7W2Zsb2F0LWxnLWxlZnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH1bZmxvYXQtbGctcmlnaHRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Zsb2F0LWxnLXN0YXJ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1sZy1zdGFydF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH1bZmxvYXQtbGctZW5kXXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbGctZW5kXXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpe1tmbG9hdC14bC1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9W2Zsb2F0LXhsLXJpZ2h0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fVtmbG9hdC14bC1zdGFydF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQteGwtc3RhcnRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Zsb2F0LXhsLWVuZF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXhsLWVuZF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fX1cbiIsIi5pb24tdGV4dC1jZW50ZXIsW3RleHQtY2VudGVyXXt0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50fS5pb24tdGV4dC1qdXN0aWZ5LFt0ZXh0LWp1c3RpZnlde3RleHQtYWxpZ246anVzdGlmeSAhaW1wb3J0YW50fS5pb24tdGV4dC1zdGFydCxbdGV4dC1zdGFydF17dGV4dC1hbGlnbjpzdGFydCAhaW1wb3J0YW50fS5pb24tdGV4dC1lbmQsW3RleHQtZW5kXXt0ZXh0LWFsaWduOmVuZCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZWZ0LFt0ZXh0LWxlZnRde3RleHQtYWxpZ246bGVmdCAhaW1wb3J0YW50fS5pb24tdGV4dC1yaWdodCxbdGV4dC1yaWdodF17dGV4dC1hbGlnbjpyaWdodCAhaW1wb3J0YW50fS5pb24tdGV4dC1ub3dyYXAsW3RleHQtbm93cmFwXXt3aGl0ZS1zcGFjZTpub3dyYXAgIWltcG9ydGFudH0uaW9uLXRleHQtd3JhcCxbdGV4dC13cmFwXXt3aGl0ZS1zcGFjZTpub3JtYWwgIWltcG9ydGFudH1AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpey5pb24tdGV4dC1zbS1jZW50ZXIsW3RleHQtc20tY2VudGVyXXt0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1qdXN0aWZ5LFt0ZXh0LXNtLWp1c3RpZnlde3RleHQtYWxpZ246anVzdGlmeSAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1zdGFydCxbdGV4dC1zbS1zdGFydF17dGV4dC1hbGlnbjpzdGFydCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1lbmQsW3RleHQtc20tZW5kXXt0ZXh0LWFsaWduOmVuZCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1sZWZ0LFt0ZXh0LXNtLWxlZnRde3RleHQtYWxpZ246bGVmdCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1yaWdodCxbdGV4dC1zbS1yaWdodF17dGV4dC1hbGlnbjpyaWdodCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1ub3dyYXAsW3RleHQtc20tbm93cmFwXXt3aGl0ZS1zcGFjZTpub3dyYXAgIWltcG9ydGFudH0uaW9uLXRleHQtc20td3JhcCxbdGV4dC1zbS13cmFwXXt3aGl0ZS1zcGFjZTpub3JtYWwgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXsuaW9uLXRleHQtbWQtY2VudGVyLFt0ZXh0LW1kLWNlbnRlcl17dGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtanVzdGlmeSxbdGV4dC1tZC1qdXN0aWZ5XXt0ZXh0LWFsaWduOmp1c3RpZnkgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtc3RhcnQsW3RleHQtbWQtc3RhcnRde3RleHQtYWxpZ246c3RhcnQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtZW5kLFt0ZXh0LW1kLWVuZF17dGV4dC1hbGlnbjplbmQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtbGVmdCxbdGV4dC1tZC1sZWZ0XXt0ZXh0LWFsaWduOmxlZnQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtcmlnaHQsW3RleHQtbWQtcmlnaHRde3RleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtbm93cmFwLFt0ZXh0LW1kLW5vd3JhcF17d2hpdGUtc3BhY2U6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLXdyYXAsW3RleHQtbWQtd3JhcF17d2hpdGUtc3BhY2U6bm9ybWFsICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7Lmlvbi10ZXh0LWxnLWNlbnRlcixbdGV4dC1sZy1jZW50ZXJde3RleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWp1c3RpZnksW3RleHQtbGctanVzdGlmeV17dGV4dC1hbGlnbjpqdXN0aWZ5ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLXN0YXJ0LFt0ZXh0LWxnLXN0YXJ0XXt0ZXh0LWFsaWduOnN0YXJ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWVuZCxbdGV4dC1sZy1lbmRde3RleHQtYWxpZ246ZW5kICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWxlZnQsW3RleHQtbGctbGVmdF17dGV4dC1hbGlnbjpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLXJpZ2h0LFt0ZXh0LWxnLXJpZ2h0XXt0ZXh0LWFsaWduOnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLW5vd3JhcCxbdGV4dC1sZy1ub3dyYXBde3doaXRlLXNwYWNlOm5vd3JhcCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy13cmFwLFt0ZXh0LWxnLXdyYXBde3doaXRlLXNwYWNlOm5vcm1hbCAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXsuaW9uLXRleHQteGwtY2VudGVyLFt0ZXh0LXhsLWNlbnRlcl17dGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudH0uaW9uLXRleHQteGwtanVzdGlmeSxbdGV4dC14bC1qdXN0aWZ5XXt0ZXh0LWFsaWduOmp1c3RpZnkgIWltcG9ydGFudH0uaW9uLXRleHQteGwtc3RhcnQsW3RleHQteGwtc3RhcnRde3RleHQtYWxpZ246c3RhcnQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtZW5kLFt0ZXh0LXhsLWVuZF17dGV4dC1hbGlnbjplbmQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtbGVmdCxbdGV4dC14bC1sZWZ0XXt0ZXh0LWFsaWduOmxlZnQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtcmlnaHQsW3RleHQteGwtcmlnaHRde3RleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtbm93cmFwLFt0ZXh0LXhsLW5vd3JhcF17d2hpdGUtc3BhY2U6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLXdyYXAsW3RleHQteGwtd3JhcF17d2hpdGUtc3BhY2U6bm9ybWFsICFpbXBvcnRhbnR9fVxuIiwiLmlvbi10ZXh0LXVwcGVyY2FzZSxbdGV4dC11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1sb3dlcmNhc2UsW3RleHQtbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQtY2FwaXRhbGl6ZSxbdGV4dC1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXsuaW9uLXRleHQtc20tdXBwZXJjYXNlLFt0ZXh0LXNtLXVwcGVyY2FzZV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXNtLWxvd2VyY2FzZSxbdGV4dC1zbS1sb3dlcmNhc2Vde3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1jYXBpdGFsaXplLFt0ZXh0LXNtLWNhcGl0YWxpemVde3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXsuaW9uLXRleHQtbWQtdXBwZXJjYXNlLFt0ZXh0LW1kLXVwcGVyY2FzZV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLWxvd2VyY2FzZSxbdGV4dC1tZC1sb3dlcmNhc2Vde3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1tZC1jYXBpdGFsaXplLFt0ZXh0LW1kLWNhcGl0YWxpemVde3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXsuaW9uLXRleHQtbGctdXBwZXJjYXNlLFt0ZXh0LWxnLXVwcGVyY2FzZV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWxvd2VyY2FzZSxbdGV4dC1sZy1sb3dlcmNhc2Vde3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1jYXBpdGFsaXplLFt0ZXh0LWxnLWNhcGl0YWxpemVde3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7Lmlvbi10ZXh0LXhsLXVwcGVyY2FzZSxbdGV4dC14bC11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC14bC1sb3dlcmNhc2UsW3RleHQteGwtbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQteGwtY2FwaXRhbGl6ZSxbdGV4dC14bC1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9fVxuIiwiW2FsaWduLXNlbGYtc3RhcnRde2FsaWduLXNlbGY6ZmxleC1zdGFydCAhaW1wb3J0YW50fVthbGlnbi1zZWxmLWVuZF17YWxpZ24tc2VsZjpmbGV4LWVuZCAhaW1wb3J0YW50fVthbGlnbi1zZWxmLWNlbnRlcl17YWxpZ24tc2VsZjpjZW50ZXIgIWltcG9ydGFudH1bYWxpZ24tc2VsZi1zdHJldGNoXXthbGlnbi1zZWxmOnN0cmV0Y2ggIWltcG9ydGFudH1bYWxpZ24tc2VsZi1iYXNlbGluZV17YWxpZ24tc2VsZjpiYXNlbGluZSAhaW1wb3J0YW50fVthbGlnbi1zZWxmLWF1dG9de2FsaWduLXNlbGY6YXV0byAhaW1wb3J0YW50fVt3cmFwXXtmbGV4LXdyYXA6d3JhcCAhaW1wb3J0YW50fVtub3dyYXBde2ZsZXgtd3JhcDpub3dyYXAgIWltcG9ydGFudH1bd3JhcC1yZXZlcnNlXXtmbGV4LXdyYXA6d3JhcC1yZXZlcnNlICFpbXBvcnRhbnR9W2p1c3RpZnktY29udGVudC1zdGFydF17anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQgIWltcG9ydGFudH1banVzdGlmeS1jb250ZW50LWNlbnRlcl17anVzdGlmeS1jb250ZW50OmNlbnRlciAhaW1wb3J0YW50fVtqdXN0aWZ5LWNvbnRlbnQtZW5kXXtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQgIWltcG9ydGFudH1banVzdGlmeS1jb250ZW50LWFyb3VuZF17anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZCAhaW1wb3J0YW50fVtqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbl17anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW4gIWltcG9ydGFudH1banVzdGlmeS1jb250ZW50LWV2ZW5seV17anVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seSAhaW1wb3J0YW50fVthbGlnbi1pdGVtcy1zdGFydF17YWxpZ24taXRlbXM6ZmxleC1zdGFydCAhaW1wb3J0YW50fVthbGlnbi1pdGVtcy1jZW50ZXJde2FsaWduLWl0ZW1zOmNlbnRlciAhaW1wb3J0YW50fVthbGlnbi1pdGVtcy1lbmRde2FsaWduLWl0ZW1zOmZsZXgtZW5kICFpbXBvcnRhbnR9W2FsaWduLWl0ZW1zLXN0cmV0Y2hde2FsaWduLWl0ZW1zOnN0cmV0Y2ggIWltcG9ydGFudH1bYWxpZ24taXRlbXMtYmFzZWxpbmVde2FsaWduLWl0ZW1zOmJhc2VsaW5lICFpbXBvcnRhbnR9XG4iLCIvLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cbkBpbXBvcnQgJ35AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MnO1xuQGltcG9ydCAnfkBpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzJztcbkBpbXBvcnQgJ35AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyc7XG5AaW1wb3J0ICd+QGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzJztcblxuQGltcG9ydCAnfkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyc7XG5AaW1wb3J0ICd+QGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzcyc7XG5AaW1wb3J0ICd+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzcyc7XG5AaW1wb3J0ICd+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzJztcbkBpbXBvcnQgJ35AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3MnO1xuXG4kYXBwLWludGVyYWN0aW9uLWNvbG9yOiAjMTFCM0VGO1xuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuLmZpeGVkIHtcbiAgICBwb3NpdGlvbjpmaXhlZCAhaW1wb3J0YW50O1xufVxuLnNwYWNpbmcge1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuLmNhdGVnb3J5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5zZWFyY2hiYXItaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uYmcge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbn1cbi8qIGluLWZsaWdodCBjbG9uZSAqL1xuLmd1LW1pcnJvciB7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTgwKVwiO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgIFxuICAvKiBoaWdoLXBlcmZvcm1hbmNlIGRpc3BsYXk6bm9uZTsgaGVscGVyICovXG4gIC5ndS1oaWRlIHtcbiAgICBsZWZ0OiAtOTk5OXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgIFxuICAvKiBhZGRlZCB0byBtaXJyb3JDb250YWluZXIgKGRlZmF1bHQgPSBib2R5KSB3aGlsZSBkcmFnZ2luZyAqL1xuICAuZ3UtdW5zZWxlY3RhYmxlIHtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgIFxuICAvKiBhZGRlZCB0byB0aGUgc291cmNlIGVsZW1lbnQgd2hpbGUgaXRzIG1pcnJvciBpcyBkcmFnZ2VkICovXG4gIC5ndS10cmFuc2l0IHtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0yMClcIjtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xuICB9IiwiQGltcG9ydCAnLi4vLi4vLi4vZ2xvYmFsLnNjc3MnO1xuXG4udGl0bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICAgIGNvbG9yOiAkYXBwLWludGVyYWN0aW9uLWNvbG9yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luOiA4cHggMHB4O1xufVxuXG4uc2Nyb2xsaW5nLXdyYXBwZXItZmxleGJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG4gICAgbGVmdDogMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHotaW5kZXg6IDk5OTtcblxuICAgIC5jYXJkIHtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuICAgIH1cbn1cblxuI2NhdGVnb3J5LWJ1dHRvbnMge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTg3cHgpO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICRhcHAtaW50ZXJhY3Rpb24tY29sb3I7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5kcmFnLWxhYmVse1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIC5ob21lLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAkYXBwLWludGVyYWN0aW9uLWNvbG9yO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuXG4gICAgICAgIC5sYWJlbC1idXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xvc2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnNhdmUtYnV0dG9uIHt9XG5cbi5ob3JpenpvbnRhbC1hcnJvdyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXJyb3ctcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1cHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICBhbmltYXRpb246IGFycm93IDcwMG1zIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmFycm93LXJpZ2h0OjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIHRvcDogLTNweDtcbiAgICByaWdodDogLTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmFycm93LXJpZ2h0OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB0b3A6IDNweDtcbiAgICByaWdodDogLTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uYXJyb3ctbGVmdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjVweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgYW5pbWF0aW9uOiBhcnJvdyA3MDBtcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5hcnJvdy1sZWZ0OjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIHRvcDogLTNweDtcbiAgICBsZWZ0OiAtMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmFycm93LWxlZnQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIHRvcDogM3B4O1xuICAgIGxlZnQ6IC0ycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmd1LW1pcnJvciB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgYm9yZGVyOiAycHggc29saWQgJGFwcC1pbnRlcmFjdGlvbi1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW46IDRweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMjAlIDQwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmNoaWxkIHtcbiAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogbWF5IGJlIHVzZWZ1bCBpZiB5b3VyIGNoaWxkIGlzIGFuIGFuY2hvciB5b3UgY2FuIG90aGVyd2lzZSBjbGljayAqL1xuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50OyAvKiBEaXNhYmxlIHNlbGVjdGlvbi9jb3B5IGluIFVJV2ViVmlldyAqL1xuICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5ndS1taXJyb3IuY2hpbGQ6YWZ0ZXIgeyBjb250ZW50OiBcIi5ndS1taXJyb3JcIjsgfVxuICAuZGVsYXktZHJhZy1saWZ0ZWQuY2hpbGQ6YWZ0ZXIgeyBjb250ZW50OiBcIi5kZWxheS1kcmFnLWxpZnRlZFwiOyB9XG4gIC5ndS1taXJyb3IuZGVsYXktZHJhZy1saWZ0ZWQuY2hpbGQ6YWZ0ZXIgeyBjb250ZW50OiBcIi5kZWxheS1kcmFnLWxpZnRlZC5ndS1taXJyb3JcIjsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home-settings/home-settings.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-settings/home-settings.page.ts ***!
  \***********************************************************/
/*! exports provided: HomeSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSettingsPage", function() { return HomeSettingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/setting.service */ "./src/app/services/setting.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeSettingsPage = /** @class */ (function () {
    function HomeSettingsPage(dragulaService, router, location, navCtrl, config, translate, settings) {
        this.dragulaService = dragulaService;
        this.router = router;
        this.location = location;
        this.navCtrl = navCtrl;
        this.config = config;
        this.translate = translate;
        this.settings = settings;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.categories = [];
        this.allCategories = [];
        this.language = 'it';
        this.language = window[this.config.getAppModuleName()]['language'];
        translate.use(this.language);
        this.subs.add(dragulaService.dropModel('entries')
            .subscribe(function (_a) {
            var el = _a.el, target = _a.target, source = _a.source, sourceModel = _a.sourceModel, targetModel = _a.targetModel, item = _a.item;
            console.log('dropModel:');
            console.log(el);
            console.log(source);
            console.log(target);
            console.log(sourceModel);
            console.log(targetModel);
            console.log(item);
        }));
        this.subs.add(dragulaService.removeModel('entries')
            .subscribe(function (_a) {
            var el = _a.el, source = _a.source, item = _a.item, sourceModel = _a.sourceModel;
            console.log('removeModel:');
            console.log(el);
            console.log(source);
            console.log(sourceModel);
            console.log(item);
        }));
    }
    HomeSettingsPage.prototype.ngOnInit = function () {
    };
    HomeSettingsPage.prototype.doSomething = function () {
        console.log('longpress');
    };
    HomeSettingsPage.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    HomeSettingsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.language = this.settings.getUserLanguage();
        this.translate.use(this.language);
        this.categories = this.config.getModuleEntries().map(function (x) { return _this.convertCategories(x); });
        this.config.getAllModuleEntries().then(function (res) {
            _this.allCategories = res.map(function (x) { return _this.convertCategories(x); });
            _this.allCategories = _this.allCategories.filter(function (el) {
                //solo gli elementi non presenti nell'array categories.
                var present = _this.categories.filter(function (element) {
                    console.log(element.id);
                    return element.id === el.id;
                });
                if (present.length == 0)
                    return true;
                return false;
            });
        });
        console.log(this.categories);
    };
    HomeSettingsPage.prototype.saveHome = function () {
        this.config.storeModuleEntries(this.categories);
        this.close();
    };
    HomeSettingsPage.prototype.close = function () {
        this.navCtrl.navigateRoot('/home-common');
        // this.location.back()
    };
    HomeSettingsPage.prototype.convertCategories = function (x) {
        var categoryElement = {};
        if (x.id) {
            categoryElement.id = x.id;
        }
        if (x.name) {
            categoryElement.name = x.name;
        }
        if (x.icon) {
            categoryElement.icon = x.icon;
        }
        if (x.url) {
            categoryElement.url = x.url;
        }
        if (x.params) {
            categoryElement.params = x.params;
        }
        return categoryElement;
    };
    HomeSettingsPage.prototype.goToSettings = function () {
        this.router.navigate(['/setting']);
    };
    HomeSettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-settings',
            template: __webpack_require__(/*! ./home-settings.page.html */ "./src/app/pages/home-settings/home-settings.page.html"),
            styles: [__webpack_require__(/*! ./home-settings.page.scss */ "./src/app/pages/home-settings/home-settings.page.scss")]
        }),
        __metadata("design:paramtypes", [ng2_dragula__WEBPACK_IMPORTED_MODULE_1__["DragulaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
            src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            src_app_services_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"]])
    ], HomeSettingsPage);
    return HomeSettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-settings-home-settings-module.js.map