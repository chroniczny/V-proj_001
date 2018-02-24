/**
 * Created by jakub_000 on 2018-02-18.
 */
new Vue({
    el: '#app',
    data: {
        show: true,
        ingredients: ['meat', 'FRUIT', 'cookies'],
        persons: [
            {name: 'Max', age: 27, color: 'red'},
            {name: 'Anna', age: 'unknown', color: 'blue'}
        ]
    },
    methods : { // onclick it can be two methods() but separated with comma
        addItemToList: function() {
            this.ingredients.push('spices');
        },
        changeCase: function() {
            var newIn = this.ingredients.map(function(item) {
                var regE = /[a-z]/g;
                return regE.test(item[0]) ? item.toUpperCase() : item.toLowerCase();
            });
            console.log(newIn);
            this.ingredients = newIn;
        }
    }
});

