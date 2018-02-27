
// Vue.component('hello', {
//     template: '<h1>hello component - hit me baby one more time</h1>'
// });

var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = "Changed by refs button";
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

// vm1.$mount('#app1'); // sets a vm to div app when we didn't create an 'el' in vm;

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The VueJS Instance',
        showParagraph: false
    },
    methods: {
        updateTitle: function() {
            vm1.title = 'Got you vm1!';
        }
    }
});


var vm3 = new Vue({
  template: '<h1>Hello vm3</h1>'
});

// vm3.$mount('#app3');
// or even:
vm3.$mount(); // plus: ...
document.getElementById('app3').appendChild(vm3.$el); // also do this work