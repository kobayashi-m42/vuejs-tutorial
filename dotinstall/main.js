const vm = new Vue({
  el: '#app',
  data: {
    name: 'taguchi',
    newItem: '',
    todos: [
      {
        title: 'task 1',
        isDone: false
      },
      {
        title: 'task 2',
        isDone: false
      },
      {
        title: 'task 3',
        isDone: true
      }
    ]
  },
  methods: {
    addItem: function () {
      const item = {
        title: this.newItem,
        isDone: false
      }
      this.todos.push(item);
      this.newItem = '';
    },
    deleteItem: function (index) {
      if (confirm('are you sure?')) {
        this.todos.splice(index, 1)
      }
    },
    purge: function () {
      if (!confirm('delete finished?')) {
        return;
      }
      this.todos = this.remaining;
    }
  },
  computed: {
    remaining: function () {
      return this.todos.filter(function (todo) {
        return !todo.isDone;
      });
    }
  }
});
