'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    var Box = function Box(x, y) {
        _classCallCheck(this, Box);

        this.x = x;
        this.y = y;
    };

    var obj = {
        weight: 100,
        height: 250,
        newBox: function (param) {
            console.log(param);
        }(obj),
        getSquare: function getSquare() {
            console.log(this.weight * this.height);
            return this.weight * this.height;
        }
    };

    function showSquare(callback, context) {
        if (typeof callback != 'function') {
            callback = false;
        }

        if (callback) {
            callback.call(context);
        }
        return 123;
    }

    console.log(showSquare(obj.getSquare, obj));

    console.log(obj);
})();