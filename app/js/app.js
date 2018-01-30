(() => {
    
    function Moon () {
        var instance = this;
        if(typeof Moon.instance === 'object') {
            return Moon.instance;
        }

        this.name = 'planet';
        this.color = 'gray';
        this.getInstance = function(){
            return instance;
        }
        

        Moon.instance = this;
    }

    var planet = new Moon();
    var planet2 = new Moon();

    console.log(planet == planet2);
    console.log(planet.getInstance());


    function Box(x, y) {
        console.log('start constructor....');
        this.x = x;
        this.y = y;
    }

    // var obj = {
    //     w: 100,
    //     h: 200,
    //     get box1() {
            
    //         if(typeof Box.clouds === 'object' ) {
    //             return Box.clouds;
    //         }
    //         Box.clouds = new Box(this.w, this.h);
    //         return Box.clouds;
    //     }
    // }

    // var boxA = obj.box1;
    // var boxB = obj.box1;
    // console.log(boxA===boxB);

     var obj = {
        w: 100,
        h: 200,
        get box1() {
        //    this.box1.www = 10;
           var obj = new Box(this.w, this.h);
           delete this.box1;
           return this.box1 = obj;
        }
    }

  var boxA = obj.box1;
    var boxB = obj.box1;
    var boxC = obj.box1;
    var boxD = obj.box1;
    var boxE = obj.box1;
    console.log(boxA===boxD);
    console.log(boxA===boxC);
    console.log(boxA===boxB);
    console.log(boxA===boxE);// true
    // console.log(obj)
    
// function www() {
//     www.bbb = 10;
//     console.log(www.bbb);
// };

// www();





})();



