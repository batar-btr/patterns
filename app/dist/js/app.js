"use strict";

(function () {

    function fib(x) {
        if (!fib.cache[x]) {
            x > 1 ? fib.cache[x] = fib(x - 1) + fib(x - 2) : fib.cache[x] = x;
        }
        return fib.cache[x];
    }

    fib.cache = {};

    console.log(fib(500));

    for (var i = 0; i < 50; i++) {
        console.log(fib(i));
    }
})();