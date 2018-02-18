/**
 * Created by jakub_000 on 2018-02-18.
 */
new Vue({
    el: '#app',
    data: {
        title: 'Hello world!'
    },
    methods : {
        changeTitle: function(event) {
            this.title = event.target.value;
        }
    }
});