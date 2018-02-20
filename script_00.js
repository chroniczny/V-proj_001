/**
 * Created by jakub_000 on 2018-02-18.
 */
new Vue({
    el: '#app',
    data: {
        name: 'Jake',
        title: 'Hello world!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0
    },
    methods : {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        sayHello: function() {
            this.title = 'Say Hello changed by sayHello function';
            return 'Hey Joe say Hello!';
        },
        sayTitle: function() {
            return 'the data.title from method: '+this.title;
        },
        increase: function(step, event) { // noneed 'event' here
            this.counter += step;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
        ,
        // dummy: function(event) {
        //     event.stopPropagation();
        // }
        alertMe: function () {
            alert('Alerto moi!');
        }
    }
});

// movie: 23...