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
                index += 2;
                return element;
            },
            hasNext: function hasNext() {
                return index < data.length;
            }
        };
    }();

    while (iterator.hasNext()) {
        console.log(iterator.next());
    }
})();