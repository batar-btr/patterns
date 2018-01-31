'use strict';

(function () {

    function CarMaker() {};

    CarMaker.prototype.drive = function () {
        console.log('Vroom, i have ' + this.wheels + ' wheels');
    };

    CarMaker.factory = function (type) {
        var constr = type,
            newcar;

        if (typeof CarMaker[constr] !== 'function') {
            throw {
                name: 'Error',
                message: constr + ' doesn\'t exist'
            };
        };
        if (typeof CarMaker[constr].drive !== 'function') {
            CarMaker[constr].prototype = new CarMaker();
        }

        // create new example

        newcar = new CarMaker[constr]();
        return newcar;
    };

    CarMaker.Compact = function () {
        this.wheels = 4;
    };

    CarMaker.Large = function () {
        this.wheels = 8;
    };

    CarMaker.Track = function () {
        this.wheels = 18;
    };

    var car = CarMaker.factory('Compact');
    var bus = CarMaker.factory('Large');
    var track = CarMaker.factory('Track');

    var park = [car, bus, track];

    park.forEach(function (item) {
        return item.drive();
    });

    // console.log(car);

})();