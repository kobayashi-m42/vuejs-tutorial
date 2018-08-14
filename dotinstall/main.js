const vm = new Vue({
  el: '#app',
  data: {
    name: 'taguchi',
    newItem: '',
    todos: [
      'task 1',
      'task 2',
      'task 3'
    ]
  },
  methods: {
    addItem: function () {
      this.todos.push(this.newItem);
      this.newItem = '';
    },
    deleteItem: function (index) {
      if (confirm('are you sure?')) {
        this.todos.splice(index, 1)
      }
    }
  }
});
