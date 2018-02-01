(() => {

    function Sale (price) {
        this.price  = price || 100;
        this.decorators_list = [];
    }

    Sale.decorators = {};

    Sale.decorators.money = {
        getPrice: function(price){
            return `$${ price} dollars`
        }
    }

    Sale.decorators.grn = {
        getPrice: function(price){
            return `Ua${ price * 28} grn`;
        }
    }

    Sale.prototype.decorate = function(decorator) {
        this.decorators_list.push(decorator)
    }

    Sale.prototype.getPrice = function () {
        var price = this.price, 
        i,
        max = this.decorators_list.length,
        name;

        for(i = 0; i < max; i++) {
            name = this.decorators[i];
            price = Sale.decorators[name].getPrice(price);
        }
        return price;
    }

    var sale = new Sale(1000);
    console.log(sale.getPrice());
    sale.decorate('money');
    console.log(sale.getPrice());



})();



