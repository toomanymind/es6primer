'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(f1),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(f2),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(f3),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(fib),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(gen);

/* Chapter 16 Generator */

// Generator可用于直接赋值给对象的[Symbol.iterator]使其可遍历
// 执行Generator返回的遍历器也具有遍历器函数，执行之返回自己
// 因此for of对其进行循环会返回所有yield，不包括return
// Generator与其返回的遍历器的关系是类和实例的关系
// .throw
// .return

/* next参数 */
function f1() {
    var i, reset;
    return regeneratorRuntime.wrap(function f1$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!true) {
                        _context.next = 9;
                        break;
                    }

                    _context.next = 4;
                    return i;

                case 4:
                    reset = _context.sent;

                    if (reset) {
                        i = -1;
                    }

                case 6:
                    i++;
                    _context.next = 1;
                    break;

                case 9:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

function f2(x) {
    var y, z;
    return regeneratorRuntime.wrap(function f2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return x + 1;

                case 2:
                    _context2.t0 = _context2.sent;
                    y = 2 * _context2.t0;
                    _context2.next = 6;
                    return y / 3;

                case 6:
                    z = _context2.sent;
                    return _context2.abrupt('return', x + y + z);

                case 8:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}
function f3() {
    return regeneratorRuntime.wrap(function f3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    console.log('Started');
                    _context3.t0 = console;
                    _context3.next = 4;
                    return;

                case 4:
                    _context3.next = 6;
                    return _context3.sent;

                case 6:
                    _context3.t1 = _context3.sent;
                    _context3.t2 = '1.' + _context3.t1;

                    _context3.t0.log.call(_context3.t0, _context3.t2);

                    _context3.t3 = console;
                    _context3.next = 12;
                    return;

                case 12:
                    _context3.t4 = _context3.sent;
                    _context3.t5 = '2.' + _context3.t4;

                    _context3.t3.log.call(_context3.t3, _context3.t5);

                    return _context3.abrupt('return', 'result');

                case 16:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this);
}
var g = f3();

/* for of */
function fib() {
    var prev, curr, _ref;

    return regeneratorRuntime.wrap(function fib$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    prev = 0, curr = 1;

                case 1:
                    _ref = [curr, prev + curr];
                    prev = _ref[0];
                    curr = _ref[1];
                    _context4.next = 6;
                    return curr;

                case 6:
                    _context4.next = 1;
                    break;

                case 8:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked4, this);
}
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = fib()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var e = _step.value;

        if (e > 1000) {
            break;
        }
        // console.log(e);
    }

    /* yield* */
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

function gen() {
    return regeneratorRuntime.wrap(function gen$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    return _context5.delegateYield(['a', 'b', 'c', 'd'], 't0', 1);

                case 1:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _marked5, this);
}