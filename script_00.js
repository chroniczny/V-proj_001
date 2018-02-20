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
        counter1: 0,
        counter: 0,
        x: 0,
        y: 0,
        secondCounter: 0,

        attachRed: false,
        color: 'green',
        width: 100
    },
    computed: {
        output: function() {
            console.log('computed');
            return this.counter > 5 ? 'Grater than 5' : 'Smaller than 5';
        },
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        },
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    },
    watch: {
      counter: function() {
          var vm = this;
          setTimeout(function() {
              vm.counter = 0;
          }, 2000);
      }
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
        increase1: function(step, event) { // noneed 'event' here
            this.counter1 += step;
            this.result = this.counter1 > 5 ? 'Grater than 5' : 'Smaller than 5'
        },
        increase: function(step, event) { // noneed 'event' here
            this.counter += step;
            this.result = this.counter > 5 ? 'Grater than 5' : 'Smaller than 5'
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
        },
        result1: function() {
            return this.counter1 > 5 ? 'Grater than 5' : 'Smaller than 5';
        },
        result: function() {
            console.log('Method');
            return this.counter > 5 ? 'Grater than 5' : 'Smaller than 5';
        }
    }
});

// movie: 23...