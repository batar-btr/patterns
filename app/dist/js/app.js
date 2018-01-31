"use strict";

(function () {

    var iterator = function () {
        var index = 0;
        var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var length = data.length;

        return {
            next: function next() {
                var element;

                if (!this.hasNext()) {
                    return null;
                }
                element = data[index];
                index++;
                return element;
            },
            hasNext: function hasNext() {
                return index < data.length;
            },
            reset: function reset() {
                index = 0;
            },
            current: function current() {
                return data[index];
            },
            showState: function showState() {
                console.log("this index = " + index);
                console.log("this.length = " + length);
            }

        };
    }();

    while (iterator.hasNext()) {
        console.log(iterator.next() * 10000);
    }

    iterator.showState();
    iterator.reset();
    console.log(iterator.current());
    iterator.next();
    console.log(iterator.current());
    iterator.next();
    console.log(iterator.current());
})();