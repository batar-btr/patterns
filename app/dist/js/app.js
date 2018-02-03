'use strict';

var publisher = {
    subscribers: {
        any: []
    },
    subscribe: function subscribe(fn, type) {
        type = type || 'any';
        if (typeof this.subscribers[type] === 'undefined') {
            this.subscribers[type] = [];
        }
        console.log(this.subscribers[type]);
        this.subscribers[type].push(fn);
    },
    unsubscribe: function unsubscribe(fn, type) {
        this.visitSubscribers('unsubscribe', fn, type);
    },
    publish: function publish(publication, type) {
        this.visitSubscribers('publish', publication, type);
    },
    visitSubscribers: function visitSubscribers(action, arg, type) {
        var pubtype = type || 'any',
            subscribers = this.subscribers[pubtype],
            i,
            max = subscribers.length;

        for (i = 0; i < max; i++) {
            if (action === 'publish') {
                subscribers[i](arg);
            } else {
                if (subscribers[i] === arg) {
                    subscribers.splice(i, 1);
                }
            }
        }
    }
};

function makePublisher(object) {
    var i;
    for (i in publisher) {
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
            object[i] = publisher[i];
        }
        object.subscribers = { any: [] };
    }
}

var paper = {
    daily: function daily() {
        this.publish('bignews today');
    },
    monthly: function monthly() {
        this.publish('monthly newspaper', 'monthly');
    }
};

makePublisher(paper);
console.dir(paper);

var joe = {
    drinkCoffe: function drinkCoffe(paper) {
        console.log('Just read ' + paper);
    },
    sundayPreNap: function sundayPreNap(monthly) {
        console.log('Just read ' + monthly);
    }
};

paper.subscribe(joe.drinkCoffe);
paper.subscribe(joe.sundayPreNap, 'monthly');

paper.daily();
paper.daily();
paper.monthly();