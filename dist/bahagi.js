/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal helper to bind a function known to have 3 arguments
 * to a given context.
 */
module.exports = function bindInternal3 (func, thisContext) {
  return function (a, b, c) {
    return func.call(thisContext, a, b, c);
  };
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(22));
__export(__webpack_require__(23));
__export(__webpack_require__(24));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
module.exports = function bindInternal4 (func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal helper for applying a function with a context.
 */
module.exports = function applyWithContext (subject, thisContext, args) {
  switch (args.length) {
    case 0:
      return subject.call(thisContext);
    case 1:
      return subject.call(thisContext, args[0]);
    case 2:
      return subject.call(thisContext, args[0], args[1]);
    case 3:
      return subject.call(thisContext, args[0], args[1], args[2]);
    case 4:
      return subject.call(thisContext, args[0], args[1], args[2], args[3]);
    case 5:
      return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4]);
    case 6:
      return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5]);
    case 7:
      return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    case 8:
      return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
    default:
      return subject.apply(thisContext, args);
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * # Constructor
 *
 * Provided as a convenient wrapper around Fast functions.
 *
 * ```js
 * var arr = fast([1,2,3,4,5,6]);
 *
 * var result = arr.filter(function (item) {
 *   return item % 2 === 0;
 * });
 *
 * result instanceof Fast; // true
 * result.length; // 3
 * ```
 *
 *
 * @param {Array} value The value to wrap.
 */
function Fast (value) {
  if (!(this instanceof Fast)) {
    return new Fast(value);
  }
  this.value = value || [];
}

module.exports = exports = Fast;

Fast.array = __webpack_require__(25);
Fast['function'] = Fast.fn = __webpack_require__(33);
Fast.object = __webpack_require__(39);
Fast.string = __webpack_require__(43);


Fast.apply = Fast['function'].apply;
Fast.bind = Fast['function'].bind;
Fast.partial = Fast['function'].partial;
Fast.partialConstructor = Fast['function'].partialConstructor;
Fast['try'] = Fast.attempt = Fast['function']['try'];

Fast.assign = Fast.object.assign;
Fast.cloneObject = Fast.object.clone; // @deprecated use fast.object.clone()
Fast.keys = Fast.object.keys;
Fast.values = Fast.object.values;


Fast.clone = __webpack_require__(45);
Fast.map = __webpack_require__(46);
Fast.filter = __webpack_require__(47);
Fast.forEach = __webpack_require__(48);
Fast.reduce = __webpack_require__(49);
Fast.reduceRight = __webpack_require__(50);


Fast.cloneArray = Fast.array.clone; // @deprecated use fast.array.clone()

Fast.concat = Fast.array.concat;
Fast.some = Fast.array.some;
Fast.every = Fast.array.every;
Fast.indexOf = Fast.array.indexOf;
Fast.lastIndexOf = Fast.array.lastIndexOf;
Fast.pluck = Fast.array.pluck;
Fast.fill = Fast.array.fill;

Fast.intern = Fast.string.intern;


/**
 * # Concat
 *
 * Concatenate multiple arrays.
 *
 * @param  {Array|mixed} item, ... The item(s) to concatenate.
 * @return {Fast}                  A new Fast object, containing the results.
 */
Fast.prototype.concat = function Fast$concat () {
  var length = this.value.length,
      arr = new Array(length),
      i, item, childLength, j;

  for (i = 0; i < length; i++) {
    arr[i] = this.value[i];
  }

  length = arguments.length;
  for (i = 0; i < length; i++) {
    item = arguments[i];
    if (Array.isArray(item)) {
      childLength = item.length;
      for (j = 0; j < childLength; j++) {
        arr.push(item[j]);
      }
    }
    else {
      arr.push(item);
    }
  }
  return new Fast(arr);
};

/**
 * Fast Map
 *
 * @param  {Function} fn          The visitor function.
 * @param  {Object}   thisContext The context for the visitor, if any.
 * @return {Fast}                 A new Fast object, containing the results.
 */
Fast.prototype.map = function Fast$map (fn, thisContext) {
  return new Fast(Fast.map(this.value, fn, thisContext));
};

/**
 * Fast Filter
 *
 * @param  {Function} fn          The filter function.
 * @param  {Object}   thisContext The context for the filter function, if any.
 * @return {Fast}                 A new Fast object, containing the results.
 */
Fast.prototype.filter = function Fast$filter (fn, thisContext) {
  return new Fast(Fast.filter(this.value, fn, thisContext));
};

/**
 * Fast Reduce
 *
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value, if any.
 * @param  {Object}   thisContext  The context for the reducer, if any.
 * @return {mixed}                 The final result.
 */
Fast.prototype.reduce = function Fast$reduce (fn, initialValue, thisContext) {
  return Fast.reduce(this.value, fn, initialValue, thisContext);
};


/**
 * Fast Reduce Right
 *
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value, if any.
 * @param  {Object}   thisContext  The context for the reducer, if any.
 * @return {mixed}                 The final result.
 */
Fast.prototype.reduceRight = function Fast$reduceRight (fn, initialValue, thisContext) {
  return Fast.reduceRight(this.value, fn, initialValue, thisContext);
};

/**
 * Fast For Each
 *
 * @param  {Function} fn          The visitor function.
 * @param  {Object}   thisContext The context for the visitor, if any.
 * @return {Fast}                 The Fast instance.
 */
Fast.prototype.forEach = function Fast$forEach (fn, thisContext) {
  Fast.forEach(this.value, fn, thisContext);
  return this;
};

/**
 * Fast Some
 *
 * @param  {Function} fn          The matcher predicate.
 * @param  {Object}   thisContext The context for the matcher, if any.
 * @return {Boolean}              True if at least one element matches.
 */
Fast.prototype.some = function Fast$some (fn, thisContext) {
  return Fast.some(this.value, fn, thisContext);
};

/**
 * Fast Every
 *
 * @param  {Function} fn          The matcher predicate.
 * @param  {Object}   thisContext The context for the matcher, if any.
 * @return {Boolean}              True if at all elements match.
 */
Fast.prototype.every = function Fast$every (fn, thisContext) {
  return Fast.some(this.value, fn, thisContext);
};

/**
 * Fast Index Of
 *
 * @param  {mixed}  target    The target to lookup.
 * @param  {Number} fromIndex The index to start searching from, if known.
 * @return {Number}           The index of the item, or -1 if no match found.
 */
Fast.prototype.indexOf = function Fast$indexOf (target, fromIndex) {
  return Fast.indexOf(this.value, target, fromIndex);
};


/**
 * Fast Last Index Of
 *
 * @param  {mixed}  target    The target to lookup.
 * @param  {Number} fromIndex The index to start searching from, if known.
 * @return {Number}           The last index of the item, or -1 if no match found.
 */
Fast.prototype.lastIndexOf = function Fast$lastIndexOf (target, fromIndex) {
  return Fast.lastIndexOf(this.value, target, fromIndex);
};

/**
 * Reverse
 *
 * @return {Fast} A new Fast instance, with the contents reversed.
 */
Fast.prototype.reverse = function Fast$reverse () {
  return new Fast(this.value.reverse());
};

/**
 * Value Of
 *
 * @return {Array} The wrapped value.
 */
Fast.prototype.valueOf = function Fast$valueOf () {
  return this.value;
};

/**
 * To JSON
 *
 * @return {Array} The wrapped value.
 */
Fast.prototype.toJSON = function Fast$toJSON () {
  return this.value;
};

/**
 * Item Length
 */
Object.defineProperty(Fast.prototype, 'length', {
  get: function () {
    return this.value.length;
  }
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * # Clone Array
 *
 * Clone an array or array like object (e.g. `arguments`).
 * This is the equivalent of calling `Array.prototype.slice.call(arguments)`, but
 * significantly faster.
 *
 * @param  {Array} input The array or array-like object to clone.
 * @return {Array}       The cloned array.
 */
module.exports = function fastCloneArray (input) {
  var length = input.length,
      sliced = new Array(length),
      i;
  for (i = 0; i < length; i++) {
    sliced[i] = input[i];
  }
  return sliced;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindInternal3 = __webpack_require__(0);

/**
 * # Filter
 *
 * A fast `.filter()` implementation.
 *
 * @param  {Array}    subject     The array (or array-like) to filter.
 * @param  {Function} fn          The filter function.
 * @param  {Object}   thisContext The context for the filter.
 * @return {Array}                The array containing the results.
 */
module.exports = function fastFilter (subject, fn, thisContext) {
  var length = subject.length,
      result = [],
      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
      i;
  for (i = 0; i < length; i++) {
    if (iterator(subject[i], i, subject)) {
      result.push(subject[i]);
    }
  }
  return result;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindInternal3 = __webpack_require__(0);

/**
 * # For Each
 *
 * A fast `.forEach()` implementation.
 *
 * @param  {Array}    subject     The array (or array-like) to iterate over.
 * @param  {Function} fn          The visitor function.
 * @param  {Object}   thisContext The context for the visitor.
 */
module.exports = function fastForEach (subject, fn, thisContext) {
  var length = subject.length,
      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
      i;
  for (i = 0; i < length; i++) {
    iterator(subject[i], i, subject);
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindInternal3 = __webpack_require__(0);

/**
 * # Map
 *
 * A fast `.map()` implementation.
 *
 * @param  {Array}    subject     The array (or array-like) to map over.
 * @param  {Function} fn          The mapper function.
 * @param  {Object}   thisContext The context for the mapper.
 * @return {Array}                The array containing the results.
 */
module.exports = function fastMap (subject, fn, thisContext) {
  var length = subject.length,
      result = new Array(length),
      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
      i;
  for (i = 0; i < length; i++) {
    result[i] = iterator(subject[i], i, subject);
  }
  return result;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindInternal4 = __webpack_require__(2);

/**
 * # Reduce
 *
 * A fast `.reduce()` implementation.
 *
 * @param  {Array}    subject      The array (or array-like) to reduce.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
module.exports = function fastReduce (subject, fn, initialValue, thisContext) {
  var length = subject.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[0];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    result = iterator(result, subject[i], i, subject);
  }

  return result;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindInternal4 = __webpack_require__(2);

/**
 * # Reduce Right
 *
 * A fast `.reduceRight()` implementation.
 *
 * @param  {Array}    subject      The array (or array-like) to reduce.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
module.exports = function fastReduce (subject, fn, initialValue, thisContext) {
  var length = subject.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, result;

  if (initialValue === undefined) {
    i = length - 2;
    result = subject[length - 1];
  }
  else {
    i = length - 1;
    result = initialValue;
  }

  for (; i >= 0; i--) {
    result = iterator(result, subject[i], i, subject);
  }

  return result;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal helper for applying a function without a context.
 */
module.exports = function applyNoContext (subject, args) {
  switch (args.length) {
    case 0:
      return subject();
    case 1:
      return subject(args[0]);
    case 2:
      return subject(args[0], args[1]);
    case 3:
      return subject(args[0], args[1], args[2]);
    case 4:
      return subject(args[0], args[1], args[2], args[3]);
    case 5:
      return subject(args[0], args[1], args[2], args[3], args[4]);
    case 6:
      return subject(args[0], args[1], args[2], args[3], args[4], args[5]);
    case 7:
      return subject(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    case 8:
      return subject(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
    default:
      return subject.apply(undefined, args);
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * # Clone Object
 *
 * Shallow clone a simple object.
 *
 * > Note: Prototypes and non-enumerable properties will not be copied!
 *
 * @param  {Object} input The object to clone.
 * @return {Object}       The cloned object.
 */
module.exports = function fastCloneObject (input) {
  var keys = Object.keys(input),
      total = keys.length,
      cloned = {},
      i, key;

  for (i = 0; i < total; i++) {
    key = keys[i];
    cloned[key] = input[key];
  }

  return cloned;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindInternal3 = __webpack_require__(0);

/**
 * # Filter
 *
 * A fast object `.filter()` implementation.
 *
 * @param  {Object}   subject     The object to filter.
 * @param  {Function} fn          The filter function.
 * @param  {Object}   thisContext The context for the filter.
 * @return {Object}               The new object containing the filtered results.
 */
module.exports = function fastFilterObject (subject, fn, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      result = {},
      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
      i, key;
  for (i = 0; i < length; i++) {
    key = keys[i];
    if (iterator(subject[key], key, subject)) {
      result[key] = subject[key];
    }
  }
  return result;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindInternal3 = __webpack_require__(0);

/**
 * # For Each
 *
 * A fast object `.forEach()` implementation.
 *
 * @param  {Object}   subject     The object to iterate over.
 * @param  {Function} fn          The visitor function.
 * @param  {Object}   thisContext The context for the visitor.
 */
module.exports = function fastForEachObject (subject, fn, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
      key, i;
  for (i = 0; i < length; i++) {
    key = keys[i];
    iterator(subject[key], key, subject);
  }
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindInternal3 = __webpack_require__(0);

/**
 * # Map
 *
 * A fast object `.map()` implementation.
 *
 * @param  {Object}   subject     The object to map over.
 * @param  {Function} fn          The mapper function.
 * @param  {Object}   thisContext The context for the mapper.
 * @return {Object}               The new object containing the results.
 */
module.exports = function fastMapObject (subject, fn, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      result = {},
      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
      i, key;
  for (i = 0; i < length; i++) {
    key = keys[i];
    result[key] = iterator(subject[key], key, subject);
  }
  return result;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindInternal4 = __webpack_require__(2);

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
module.exports = function fastReduceObject (subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, key, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindInternal4 = __webpack_require__(2);

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
module.exports = function fastReduceRightObject (subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, key, result;

  if (initialValue === undefined) {
    i = length - 2;
    result = subject[keys[length - 1]];
  }
  else {
    i = length - 1;
    result = initialValue;
  }

  for (; i >= 0; i--) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(20));
__export(__webpack_require__(1));
// Testing...


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(21));
__export(__webpack_require__(51));
__export(__webpack_require__(52));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(1);
const eventemitter3_1 = __webpack_require__(5);
const fast = __webpack_require__(4);
/**
 * The ComponentCollection class provides an interface for managing our components. It's purpose is to track multiple
 * caches of components and to expose public methods for retrieving or manipulating those components. By default, the
 * ComponentCollection maintains the following caches:
 *
 * 1. allComponents: Array[] = This is simply an array containing all components in this collection
 * 2. componentsByType: Map<string, IComponent> = This is a Map storing an array of IComponents with the key being the common 'type' for that component.
 * 3. componentsByTag: Map<string, IComponent> = This is a Map storing an array of IComponents with the key being a property on the component called "tag".
 *
 * By breaking down our cache into multiple list, we gain a slight performance boost when doing reads when our component collection has _many_
 * components.
 */
class ComponentCollection extends eventemitter3_1.EventEmitter {
    constructor() {
        super();
        /**
         * Private cache of all components
         */
        this._allComponents = [];
        /**
         * Private cache of all components sorted by their type
         */
        this._componentsByType = new Map();
        /**
         * Private cache of all components sorted by their tag
         */
        this._componentsByTag = new Map();
        /**
         * The total amount of components that exist in this collection.
         */
        this._count = 0;
    }
    /**
     * Called when you want to add a new component to the ComponentCollection
     * @param components A single or multple components you wish to add.
     */
    add(...components) {
        fast.forEach(components, (component) => {
            // Add to all component list
            this._allComponents.push(component);
            let componentType = common_1.Utils.getComponentType(component);
            // Check to see if a component of <T> already exists
            let typeList = this._componentsByType.get(componentType);
            if (typeList) {
                // Component exists, add to the IComponent<T>[] array
                typeList.push(component);
            }
            else {
                // Component does not exist. Set it and create a new array with the component.
                this._componentsByType.set(componentType, [component]);
            }
            // If component has a "tag" property set, add it to our tag sorted lists
            if (component["tag"]) {
                let tagList = this._componentsByTag.get(component["tag"]);
                if (tagList) {
                    // Component exists, add to the IComponent<T>[] array
                    tagList.push(component);
                }
                else {
                    // Component does not exist. Set it and create a new array with the component.
                    this._componentsByTag.set(component["tag"], [component]);
                }
            }
            // Increase total component count
            this._count++;
            // Dispatch added signal
            this.emit(common_1.ComponentCollectionEvents.COMPONENT_ADDED, component);
        }, null);
    }
    /**
     * Used to remove a component from the component collection. Note, this can be slow so it is suggested you use it sparingly.
     * Instead, build in an 'active' state into your components and have your systems respect it.
     * @param component The component to remove
     */
    remove(component) {
        // Get the component 'type' and the typeList, if possible
        let type = common_1.Utils.getComponentType(component);
        let typeList = this._componentsByType.get(type);
        // Get the component tag and tagList, if possible.
        let tag = component["tag"] || null;
        let tagList = this._componentsByTag.get(tag);
        // Clean up all component caches...
        common_1.Utils.cleanCache(this._allComponents, component);
        if (type && typeList) {
            // Purge the type list of this component
            common_1.Utils.cleanCache(typeList, component);
        }
        if (tag && tagList) {
            // Purge the tag list of this component
            common_1.Utils.cleanCache(tagList, component);
        }
        this._count--;
        if (component["destroy"]) {
            component.destroy();
        }
        this.emit(common_1.ComponentCollectionEvents.COMPONENT_REMOVED, component);
    }
    /**
     * Returns _all_ components currently in the component collection
     */
    getAll() {
        return this._allComponents;
    }
    /**
     * Returns an array of components of the given type.
     * @param {IComponent<T>} component
     * @returns {IComponent<T>[] | any | null}
     */
    getByType(component) {
        return this._componentsByType.get(common_1.Utils.getConstructorType(component));
    }
    /**
     * Returns the _first_ element in an array by the given type.
     * @param {IComponent<T>} component
     * @returns {IComponent<T> | null}
     */
    getFirstByType(component) {
        let typeList = this._componentsByType.get(common_1.Utils.getConstructorType(component));
        return (typeList && typeList.length >= 0) ? typeList[0] : null;
    }
    /**
     * Return an array of components by the provided tag
     * @param {string} tag
     * @returns {IComponent<any>[] | null}
     */
    getByTag(tag) {
        return this._componentsByTag.get(tag);
    }
    /**
     * Returns the first element in an array by the provided tag
     * @param {string} tag
     * @returns {IComponent<any> | null}
     */
    getFirstByTag(tag) {
        let tagList = this._componentsByTag.get(tag);
        return (tagList && tagList.length >= 0) ? tagList[0] : null;
    }
    /**
     * Returns an array of components matching the provided type.
     * @param {IComponent<T>} component
     * @returns {IComponent<T>[] | null}
     */
    contains(component) {
        return this._componentsByType.get(common_1.Utils.getConstructorType(component));
    }
    /**
     * Returns the total amount of components in the collection
     * @returns {number}
     */
    getCount() {
        return this._count;
    }
    /**
     * When you want to clean-up a collection, invoke this method. This will clean all caches
     */
    destroy() {
        // The reason we iterate through all components is because the remove() method calls the destroy() method on a
        // component, if it exists. This way, you can set-up clean-up code specific to the component.
        fast.forEach(this._allComponents, (component) => {
            this.remove(component);
        }, null);
        this._allComponents = null;
        this._componentsByType.clear();
        this._componentsByTag.clear();
        this._componentsByType = null;
        this._componentsByTag = null;
    }
}
exports.ComponentCollection = ComponentCollection;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * These are the events that the ComponentCollection emits.
 *
 * 1. componentAdded = Emitted when a new component has been added. It has one argument, which is the new components.
 * 2. componentRemoved = Emitted when a component has been removed. It has one argument, which is the component removed.
 */
var ComponentCollectionEvents;
(function (ComponentCollectionEvents) {
    ComponentCollectionEvents["COMPONENT_ADDED"] = "componentAdded";
    ComponentCollectionEvents["COMPONENT_REMOVED"] = "componentRemoved";
})(ComponentCollectionEvents = exports.ComponentCollectionEvents || (exports.ComponentCollectionEvents = {}));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This are events that the EntityCollection class emits
 *
 * 1. entityAdded = Emitted when a new entity has been added. It has one argument, which is the new entity
 * 2. entityRemoved = Emitted when an entity has been removed. It has one argument, which is the entity removed.
 */
var EntityCollectionEvents;
(function (EntityCollectionEvents) {
    EntityCollectionEvents["ENTITY_ADDED"] = "entityAdded";
    EntityCollectionEvents["ENTITY_REMOVED"] = "entityRemoved";
})(EntityCollectionEvents = exports.EntityCollectionEvents || (exports.EntityCollectionEvents = {}));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fast = __webpack_require__(4);
class Utils {
    /**
     * From https://github.com/mreinstein/remove-array-items
     * A faster implementation of splice that generates minimal garbage
     * @param arr
     * @param startIdx
     * @param removeCount
     */
    static fastSplice(arr, startIdx, removeCount) {
        let i, length = arr.length;
        if (startIdx >= length || removeCount === 0) {
            return;
        }
        removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount);
        let len = length - removeCount;
        for (i = startIdx; i < len; ++i) {
            arr[i] = arr[i + removeCount];
        }
        arr.length = len;
    }
    static getComponentType(component) {
        return component.constructor.name;
    }
    static getConstructorType(ctor) {
        return ctor.name;
    }
    static cleanCache(list, component) {
        let idxMatch = -1;
        fast.forEach(list, (cacheComponent, idx) => {
            if (cacheComponent === component && idxMatch < 0) {
                idxMatch = idx;
            }
        }, null);
        if (idxMatch >= 0) {
            Utils.fastSplice(list, idxMatch, 1);
        }
    }
    static flatten(arr) {
        return arr.reduce((flat, toFlatten) => {
            return flat.concat(Array.isArray(toFlatten) ? Utils.flatten(toFlatten) : toFlatten);
        }, []);
    }
}
exports.Utils = Utils;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.clone = __webpack_require__(6);
exports.concat = __webpack_require__(26);
exports.every = __webpack_require__(27);
exports.filter = __webpack_require__(7);
exports.forEach = __webpack_require__(8);
exports.indexOf = __webpack_require__(28);
exports.lastIndexOf = __webpack_require__(29);
exports.map = __webpack_require__(9);
exports.pluck = __webpack_require__(30);
exports.reduce = __webpack_require__(10);
exports.reduceRight = __webpack_require__(11);
exports.some = __webpack_require__(31);
exports.fill = __webpack_require__(32);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * # Concat
 *
 * Concatenate multiple arrays.
 *
 * > Note: This function is effectively identical to `Array.prototype.concat()`.
 *
 *
 * @param  {Array|mixed} item, ... The item(s) to concatenate.
 * @return {Array}                 The array containing the concatenated items.
 */
module.exports = function fastConcat () {
  var length = arguments.length,
      arr = [],
      i, item, childLength, j;

  for (i = 0; i < length; i++) {
    item = arguments[i];
    if (Array.isArray(item)) {
      childLength = item.length;
      for (j = 0; j < childLength; j++) {
        arr.push(item[j]);
      }
    }
    else {
      arr.push(item);
    }
  }
  return arr;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindInternal3 = __webpack_require__(0);

/**
 * # Every
 *
 * A fast `.every()` implementation.
 *
 * @param  {Array}    subject     The array (or array-like) to iterate over.
 * @param  {Function} fn          The visitor function.
 * @param  {Object}   thisContext The context for the visitor.
 * @return {Boolean}              true if all items in the array passes the truth test.
 */
module.exports = function fastEvery (subject, fn, thisContext) {
  var length = subject.length,
      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
      i;
  for (i = 0; i < length; i++) {
    if (!iterator(subject[i], i, subject)) {
      return false;
    }
  }
  return true;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * # Index Of
 *
 * A faster `Array.prototype.indexOf()` implementation.
 *
 * @param  {Array}  subject   The array (or array-like) to search within.
 * @param  {mixed}  target    The target item to search for.
 * @param  {Number} fromIndex The position to start searching from, if known.
 * @return {Number}           The position of the target in the subject, or -1 if it does not exist.
 */
module.exports = function fastIndexOf (subject, target, fromIndex) {
  var length = subject.length,
      i = 0;

  if (typeof fromIndex === 'number') {
    i = fromIndex;
    if (i < 0) {
      i += length;
      if (i < 0) {
        i = 0;
      }
    }
  }

  for (; i < length; i++) {
    if (subject[i] === target) {
      return i;
    }
  }
  return -1;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * # Last Index Of
 *
 * A faster `Array.prototype.lastIndexOf()` implementation.
 *
 * @param  {Array}  subject The array (or array-like) to search within.
 * @param  {mixed}  target  The target item to search for.
 * @param  {Number} fromIndex The position to start searching backwards from, if known.
 * @return {Number}         The last position of the target in the subject, or -1 if it does not exist.
 */
module.exports = function fastLastIndexOf (subject, target, fromIndex) {
  var length = subject.length,
      i = length - 1;

  if (typeof fromIndex === 'number') {
    i = fromIndex;
    if (i < 0) {
      i += length;
    }
  }
  for (; i >= 0; i--) {
    if (subject[i] === target) {
      return i;
    }
  }
  return -1;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * # Pluck
 * Pluck the property with the given name from an array of objects.
 *
 * @param  {Array}  input The values to pluck from.
 * @param  {String} field The name of the field to pluck.
 * @return {Array}        The plucked array of values.
 */
module.exports = function fastPluck (input, field) {
  var length = input.length,
      plucked = [],
      count = 0,
      value, i;

  for (i = 0; i < length; i++) {
    value = input[i];
    if (value != null && value[field] !== undefined) {
      plucked[count++] = value[field];
    }
  }
  return plucked;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bindInternal3 = __webpack_require__(0);

/**
 * # Some
 *
 * A fast `.some()` implementation.
 *
 * @param  {Array}    subject     The array (or array-like) to iterate over.
 * @param  {Function} fn          The visitor function.
 * @param  {Object}   thisContext The context for the visitor.
 * @return {Boolean}              true if at least one item in the array passes the truth test.
 */
module.exports = function fastSome (subject, fn, thisContext) {
  var length = subject.length,
      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
      i;
  for (i = 0; i < length; i++) {
    if (iterator(subject[i], i, subject)) {
      return true;
    }
  }
  return false;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * # Fill
 * Fill an array with values, optionally starting and stopping at a given index.
 *
 * > Note: unlike the specced Array.prototype.fill(), this version does not support
 * > negative start / end arguments.
 *
 * @param  {Array}   subject The array to fill.
 * @param  {mixed}   value   The value to insert.
 * @param  {Integer} start   The start position, defaults to 0.
 * @param  {Integer} end     The end position, defaults to subject.length
 * @return {Array}           The now filled subject.
 */
module.exports = function fastFill (subject, value, start, end) {
  var length = subject.length,
      i;
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = length;
  }
  for (i = start; i < end; i++) {
    subject[i] = value;
  }
  return subject;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.apply = __webpack_require__(34);
exports.bind = __webpack_require__(35);
exports.partial = __webpack_require__(36);
exports.partialConstructor = __webpack_require__(37);
exports.try = __webpack_require__(38);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var applyWithContext = __webpack_require__(3);
var applyNoContext = __webpack_require__(12);

/**
 * # Apply
 *
 * Faster version of `Function::apply()`, optimised for 8 arguments or fewer.
 *
 *
 * @param  {Function} subject   The function to apply.
 * @param  {Object} thisContext The context for the function, set to undefined or null if no context is required.
 * @param  {Array} args         The arguments for the function.
 * @return {mixed}              The result of the function invocation.
 */
module.exports = function fastApply (subject, thisContext, args) {
  return thisContext !== undefined ? applyWithContext(subject, thisContext, args) : applyNoContext(subject, args);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var applyWithContext = __webpack_require__(3);
var applyNoContext = __webpack_require__(12);

/**
 * # Bind
 * Analogue of `Function::bind()`.
 *
 * ```js
 * var bind = require('fast.js').bind;
 * var bound = bind(myfunc, this, 1, 2, 3);
 *
 * bound(4);
 * ```
 *
 *
 * @param  {Function} fn          The function which should be bound.
 * @param  {Object}   thisContext The context to bind the function to.
 * @param  {mixed}    args, ...   Additional arguments to pre-bind.
 * @return {Function}             The bound function.
 */
module.exports = function fastBind (fn, thisContext) {
  var boundLength = arguments.length - 2,
      boundArgs;

  if (boundLength > 0) {
    boundArgs = new Array(boundLength);
    for (var i = 0; i < boundLength; i++) {
      boundArgs[i] = arguments[i + 2];
    }
    if (thisContext !== undefined) {
      return function () {
        var length = arguments.length,
            args = new Array(boundLength + length),
            i;
        for (i = 0; i < boundLength; i++) {
          args[i] = boundArgs[i];
        }
        for (i = 0; i < length; i++) {
          args[boundLength + i] = arguments[i];
        }
        return applyWithContext(fn, thisContext, args);
      };
    }
    else {
      return function () {
        var length = arguments.length,
            args = new Array(boundLength + length),
            i;
        for (i = 0; i < boundLength; i++) {
          args[i] = boundArgs[i];
        }
        for (i = 0; i < length; i++) {
          args[boundLength + i] = arguments[i];
        }
        return applyNoContext(fn, args);
      };
    }
  }
  if (thisContext !== undefined) {
    return function () {
      return applyWithContext(fn, thisContext, arguments);
    };
  }
  else {
    return function () {
      return applyNoContext(fn, arguments);
    };
  }
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var applyWithContext = __webpack_require__(3);

/**
 * # Partial Application
 *
 * Partially apply a function. This is similar to `.bind()`,
 * but with one important difference - the returned function is not bound
 * to a particular context. This makes it easy to add partially
 * applied methods to objects. If you need to bind to a context,
 * use `.bind()` instead.
 *
 * > Note: This function does not support partial application for
 * constructors, for that see `partialConstructor()`
 *
 *
 * @param  {Function} fn          The function to partially apply.
 * @param  {mixed}    args, ...   Arguments to pre-bind.
 * @return {Function}             The partially applied function.
 */
module.exports = function fastPartial (fn) {
  var boundLength = arguments.length - 1,
      boundArgs;

  boundArgs = new Array(boundLength);
  for (var i = 0; i < boundLength; i++) {
    boundArgs[i] = arguments[i + 1];
  }
  return function () {
    var length = arguments.length,
        args = new Array(boundLength + length),
        i;
    for (i = 0; i < boundLength; i++) {
      args[i] = boundArgs[i];
    }
    for (i = 0; i < length; i++) {
      args[boundLength + i] = arguments[i];
    }
    return applyWithContext(fn, this, args);
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var applyWithContext = __webpack_require__(3);

/**
 * # Partial Constructor
 *
 * Partially apply a constructor function. The returned function
 * will work with or without the `new` keyword.
 *
 *
 * @param  {Function} fn          The constructor function to partially apply.
 * @param  {mixed}    args, ...   Arguments to pre-bind.
 * @return {Function}             The partially applied constructor.
 */
module.exports = function fastPartialConstructor (fn) {
  var boundLength = arguments.length - 1,
      boundArgs;

  boundArgs = new Array(boundLength);
  for (var i = 0; i < boundLength; i++) {
    boundArgs[i] = arguments[i + 1];
  }
  return function partialed () {
    var length = arguments.length,
        args = new Array(boundLength + length),
        i;
    for (i = 0; i < boundLength; i++) {
      args[i] = boundArgs[i];
    }
    for (i = 0; i < length; i++) {
      args[boundLength + i] = arguments[i];
    }

    var thisContext = Object.create(fn.prototype),
        result = applyWithContext(fn, thisContext, args);

    if (result != null && (typeof result === 'object' || typeof result === 'function')) {
      return result;
    }
    else {
      return thisContext;
    }
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * # Try
 *
 * Allows functions to be optimised by isolating `try {} catch (e) {}` blocks
 * outside the function declaration. Returns either the result of the function or an Error
 * object if one was thrown. The caller should then check for `result instanceof Error`.
 *
 * ```js
 * var result = fast.try(myFunction);
 * if (result instanceof Error) {
 *    console.log('something went wrong');
 * }
 * else {
 *   console.log('result:', result);
 * }
 * ```
 *
 * @param  {Function} fn The function to invoke.
 * @return {mixed}       The result of the function, or an `Error` object.
 */
module.exports = function fastTry (fn) {
  try {
    return fn();
  }
  catch (e) {
    if (!(e instanceof Error)) {
      return new Error(e);
    }
    else {
      return e;
    }
  }
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.assign = __webpack_require__(40);
exports.clone = __webpack_require__(13);
exports.filter = __webpack_require__(14);
exports.forEach = __webpack_require__(15);
exports.map = __webpack_require__(16);
exports.reduce = __webpack_require__(17);
exports.reduceRight = __webpack_require__(18);
exports.keys = __webpack_require__(41);
exports.values = __webpack_require__(42);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Analogue of Object.assign().
 * Copies properties from one or more source objects to
 * a target object. Existing keys on the target object will be overwritten.
 *
 * > Note: This differs from spec in some important ways:
 * > 1. Will throw if passed non-objects, including `undefined` or `null` values.
 * > 2. Does not support the curious Exception handling behavior, exceptions are thrown immediately.
 * > For more details, see:
 * > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 *
 *
 *
 * @param  {Object} target      The target object to copy properties to.
 * @param  {Object} source, ... The source(s) to copy properties from.
 * @return {Object}             The updated target object.
 */
module.exports = function fastAssign (target) {
  var totalArgs = arguments.length,
      source, i, totalKeys, keys, key, j;

  for (i = 1; i < totalArgs; i++) {
    source = arguments[i];
    keys = Object.keys(source);
    totalKeys = keys.length;
    for (j = 0; j < totalKeys; j++) {
      key = keys[j];
      target[key] = source[key];
    }
  }
  return target;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Object.keys() shim for ES3 environments.
 *
 * @param  {Object} obj The object to get keys for.
 * @return {Array}      The array of keys.
 */
module.exports = typeof Object.keys === "function" ? Object.keys : /* istanbul ignore next */ function fastKeys (obj) {
  var keys = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * # Values
 * Return all the (enumerable) property values for an object.
 * Like Object.keys() but for values.
 *
 * @param  {Object} obj The object to retrieve values from.
 * @return {Array}      An array containing property values.
 */
module.exports = function fastValues (obj) {
  var keys = Object.keys(obj),
      length = keys.length,
      values = new Array(length);

  for (var i = 0; i < length; i++) {
    values[i] = obj[keys[i]];
  }
  return values;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.intern = __webpack_require__(44);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Compilers such as V8 use string interning to make string comparison very fast and efficient,
// as efficient as comparing two references to the same object.
//
//
// V8 does its best to intern strings automatically where it can, for instance:
// ```js
//   var greeting = "hello world";
// ```
// With this, comparison will be very fast:
// ```js
//   if (greeting === "hello world") {}
// ```
// However, there are several cases where V8 cannot intern the string, and instead
// must resort to byte-wise comparison. This can be signficantly slower for long strings.
// The most common example is string concatenation:
// ```js
//   function subject () { return "world"; };
//   var greeting = "hello " + subject();
// ```
// In this case, V8 cannot intern the string. So this comparison is *much* slower:
// ```js
//  if (greeting === "hello world") {}
// ```



// At the moment, the fastest, safe way of interning a string is to
// use it as a key in an object, and then use that key.
//
// Note: This technique comes courtesy of Petka Antonov - http://jsperf.com/istrn/11
//
// We create a container object in hash mode.
// Most strings being interned will not be valid fast property names,
// so we ensure hash mode now to avoid transitioning the object mode at runtime.
var container = {'- ': true};
delete container['- '];


/**
 * Intern a string to make comparisons faster.
 *
 * > Note: This is a relatively expensive operation, you
 * shouldn't usually do the actual interning at runtime, instead
 * use this at compile time to make future work faster.
 *
 * @param  {String} string The string to intern.
 * @return {String}        The interned string.
 */
module.exports = function fastIntern (string) {
  container[string] = true;
  var interned = Object.keys(container)[0];
  delete container[interned];
  return interned;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cloneArray = __webpack_require__(6);
var cloneObject = __webpack_require__(13);

/**
 * # Clone
 *
 * Clone an item. Primitive values will be returned directly,
 * arrays and objects will be shallow cloned. If you know the
 * type of input you're dealing with, call `.cloneArray()` or `.cloneObject()`
 * instead.
 *
 * @param  {mixed} input The input to clone.
 * @return {mixed}       The cloned input.
 */
module.exports = function clone (input) {
  if (!input || typeof input !== 'object') {
    return input;
  }
  else if (Array.isArray(input)) {
    return cloneArray(input);
  }
  else {
    return cloneObject(input);
  }
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mapArray = __webpack_require__(9),
    mapObject = __webpack_require__(16);

/**
 * # Map
 *
 * A fast `.map()` implementation.
 *
 * @param  {Array|Object} subject     The array or object to map over.
 * @param  {Function}     fn          The mapper function.
 * @param  {Object}       thisContext The context for the mapper.
 * @return {Array|Object}             The array or object containing the results.
 */
module.exports = function fastMap (subject, fn, thisContext) {
  if (subject instanceof Array) {
    return mapArray(subject, fn, thisContext);
  }
  else {
    return mapObject(subject, fn, thisContext);
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var filterArray = __webpack_require__(7),
    filterObject = __webpack_require__(14);

/**
 * # Filter
 *
 * A fast `.filter()` implementation.
 *
 * @param  {Array|Object} subject     The array or object to filter.
 * @param  {Function}     fn          The filter function.
 * @param  {Object}       thisContext The context for the filter.
 * @return {Array|Object}             The array or object containing the filtered results.
 */
module.exports = function fastFilter (subject, fn, thisContext) {
  if (subject instanceof Array) {
    return filterArray(subject, fn, thisContext);
  }
  else {
    return filterObject(subject, fn, thisContext);
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEachArray = __webpack_require__(8),
    forEachObject = __webpack_require__(15);

/**
 * # ForEach
 *
 * A fast `.forEach()` implementation.
 *
 * @param  {Array|Object} subject     The array or object to iterate over.
 * @param  {Function}     fn          The visitor function.
 * @param  {Object}       thisContext The context for the visitor.
 */
module.exports = function fastForEach (subject, fn, thisContext) {
  if (subject instanceof Array) {
    return forEachArray(subject, fn, thisContext);
  }
  else {
    return forEachObject(subject, fn, thisContext);
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reduceArray = __webpack_require__(10),
    reduceObject = __webpack_require__(17);

/**
 * # Reduce
 *
 * A fast `.reduce()` implementation.
 *
 * @param  {Array|Object} subject      The array or object to reduce over.
 * @param  {Function}     fn           The reducer function.
 * @param  {mixed}        initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}       thisContext  The context for the reducer.
 * @return {Array|Object}              The array or object containing the results.
 */
module.exports = function fastReduce (subject, fn, initialValue, thisContext) {
  if (subject instanceof Array) {
    return reduceArray(subject, fn, initialValue, thisContext);
  }
  else {
    return reduceObject(subject, fn, initialValue, thisContext);
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reduceRightArray = __webpack_require__(11),
    reduceRightObject = __webpack_require__(18);

/**
 * # Reduce Right
 *
 * A fast `.reduceRight()` implementation.
 *
 * @param  {Array|Object} subject      The array or object to reduce over.
 * @param  {Function}     fn           The reducer function.
 * @param  {mixed}        initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}       thisContext  The context for the reducer.
 * @return {Array|Object}              The array or object containing the results.
 */
module.exports = function fastReduceRight (subject, fn, initialValue, thisContext) {
  if (subject instanceof Array) {
    return reduceRightArray(subject, fn, initialValue, thisContext);
  }
  else {
    return reduceRightObject(subject, fn, initialValue, thisContext);
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(1);
const eventemitter3_1 = __webpack_require__(5);
const fast = __webpack_require__(4);
/**
 * The EntityCollection class is responsible for managing our entities. In this implementation, the EntityCollection considers
 * any entity that has a "components" key with the ComponentCollection type to be valid.
 */
class EntityCollection extends eventemitter3_1.EventEmitter {
    constructor() {
        super();
        /**
         * Contains all of our currently tracked entities.
         * @type {any[]}
         */
        this.entities = [];
        /**
         * Contains all entities which have been tagged (They have a property called "tag" with string type)
         * @type {Map<any, any>}
         * @private
         */
        this._entitiesByTag = new Map();
        /**
         * The total number of entities currently in this collection.
         * @type {number}
         * @private
         */
        this._count = 0;
    }
    ;
    /**
     * Adds a new entity (Or entities) to the cache for tracking. When added, the EntityCollection will sort the entity appropriately.
     * @param {IEntity} entities
     */
    add(...entities) {
        fast.forEach(entities, (entity) => {
            this.entities.push(entity);
            let tag = entity["tag"];
            if (tag) {
                let tagList = this._entitiesByTag.get(tag);
                if (tagList) {
                    tagList.push(entity);
                }
                else {
                    this._entitiesByTag.set(tag, [entity]);
                }
            }
            this.emit(common_1.EntityCollectionEvents.ENTITY_ADDED, entity);
            this._count++;
        }, null);
    }
    /**
     * Called to remove an entity from the EntityCollection. This will also call the "destroy()" method on the ComponentCollection
     * @param {IEntity} entity
     */
    remove(entity) {
        // Clean the main entity cache
        common_1.Utils.cleanCache(this.entities, entity);
        let tag = entity["tag"];
        let tagList = this._entitiesByTag.get(tag);
        if (tagList) {
            common_1.Utils.cleanCache(tagList, entity);
        }
        // Destroy entity components.
        entity.components.destroy();
        this._count--;
        this.emit(common_1.EntityCollectionEvents.ENTITY_REMOVED, entity);
    }
    /**
     * Returns an array of all tracked entities
     * @returns {IEntity[]}
     */
    getAll() {
        return this.entities;
    }
    /**
     * Returns an array of entities which matches the provided tag
     * @param {string} tag
     * @returns {IEntity[] | null}
     */
    getByTag(tag) {
        return this._entitiesByTag.get(tag);
    }
    /**
     * Returns the first entity in an array which matches the provided tag
     * @param {string} tag
     * @returns {IEntity | null}
     */
    getFirstByTag(tag) {
        let tagList = this._entitiesByTag.get(tag);
        return (tagList && tagList.length >= 0) ? tagList[0] : null;
    }
    /**
     * Returns an array of entities which contains the component of type <T>
     * @param component
     * @returns {IEntity[]}
     */
    getByComponent(component) {
        return fast.filter(this.entities, (entity => entity.components.contains(component)));
    }
    /**
     * Returns a flattened array of _all_ components matching type <T> This method is useful when you are working with
     * systems. Instead of traversing with nested lists to find the components you want, you can invoke this and receive
     * a list of components that match the type you are seeking.
     * @param component
     * @returns {IComponent<any>[]}
     */
    getAllComponentsWithType(component) {
        let componentMap = fast.map(this.entities, (entity) => {
            return entity.components.contains(component);
        });
        return common_1.Utils.flatten(componentMap);
    }
    /**
     * Returns the total amount of entities in this collection.
     * @returns {number}
     */
    getCount() {
        return this._count;
    }
    /**
     * When invoked, this will call `EntityCollection.remove()` on each entity
     */
    destroy() {
        // Iterate through all entities and remove them. This also calls the .destroy() function for each ComponentCollection.
        fast.forEach(this.entities, (entity) => {
            this.remove(entity);
        }, null);
        this.entities = null;
        this._entitiesByTag.clear();
        this._entitiesByTag = null;
    }
}
exports.EntityCollection = EntityCollection;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(1);
const eventemitter3_1 = __webpack_require__(5);
/**
 * The AbstractSystem class is a _mostly_ stubbed out class to provide a simple foundation for building out your systems.
 * The default behaviour of this abstract class is to accept an EntityCollection as the first parameter in the constructor
 * and then setup event listeners for the ENTITY_ADDED and ENTITY_REMOVED events. From there, it calls out stubbed functions
 * depending on the event received: onEntityAdded for when an entity is added and onEntityRemoved for when an entity is removed.
 * Further, the destroy() method in the AbstractSystem is used to clean-up the registered listeners on the EntityCollection.
 *
 * The AbstractSystem is intentionally bare, since the logic for your systems will be dependent on both your game and the function
 * of the system.
 */
class AbstractSystem extends eventemitter3_1.EventEmitter {
    constructor(entities) {
        super();
        /**
         * STUBBED: Extend this method with your logic for when new entities are added to the collection
         * @param {IEntity} entity The new entity that was added to the collection.
         */
        this.onEntityAdded = (entity) => { };
        /**
         * STUBBED: Extend this method with your logic for when an entity has been removed from the collection
         * @param {IEntity} entity The entity that has been removed from the collection.
         */
        this.onEntityRemoved = (entity) => { };
        this._collection = entities;
        this._collection.on(common_1.EntityCollectionEvents.ENTITY_ADDED, this.onEntityAdded);
        this._collection.on(common_1.EntityCollectionEvents.ENTITY_REMOVED, this.onEntityRemoved);
    }
    /**
     * STUBBED: Call this method when you need to update the system or the components this system is responsible for.
     * Example usage: Call your MySystem.update(delta) in your main loop, then have your MySystem call Component<T>.update(delta)
     * on each component.
     * @param {number} delta Optional: The delay from last frame to current frame.
     */
    update(delta) { }
    ;
    /**
     * STUBBED: Call this to clean up event listeners.
     */
    destroy() {
        this._collection.off(common_1.EntityCollectionEvents.ENTITY_ADDED, this.onEntityAdded);
        this._collection.off(common_1.EntityCollectionEvents.ENTITY_REMOVED, this.onEntityRemoved);
    }
    ;
}
exports.AbstractSystem = AbstractSystem;


/***/ })
/******/ ]);