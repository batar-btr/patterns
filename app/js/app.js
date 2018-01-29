(() => {
    
    class Box {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    let obj = {
        weight: 100,
        height: 250,
        newBox: ((param)=>{
            console.log(param);
        })(obj),
        getSquare() {
            console.log(this.weight * this.height);
            return this.weight * this.height;
        }
    };


    function showSquare(callback, context) {
        if(typeof callback != 'function') {
            callback = false;
        }

        if(callback) {
            callback.call(context);
        }
        return 123;
    }

    console.log(showSquare(obj.getSquare, obj));

    console.log(obj);

})();



