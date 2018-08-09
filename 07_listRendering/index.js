const example1Vm = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
});

const example2Vm = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
});

const example3Vm = new Vue({
  el: '#example-3',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
});

const example4Vm = new Vue({
  el: '#v-for-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
});

const example5Vm = new Vue({
  el: '#v-for-key',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
});

// 配列の変化を検出
// 配列の変更メソッド
example1Vm.items.push({ message: 'Baz' });

// 配列の置き換え
example1Vm.items = example1Vm.items.filter(function (item) {
  return item.message.match(/Foo/);
});

const vm1 = new Vue({
  el: '#vm1',
  data: {
    items: ['a', 'b', 'c']
  }
});
// vm.items[1] = 'x'; // リアクティブではありません
// vm.items.length = 2; // リアクティブではありません

// Vue.set
Vue.set(vm1.items, 1, 'x');

// Array.prototype.splice
vm1.items.splice(0, 1, 'y');

vm1.$set(vm1.items, 2, 'z');

vm1.items.splice(1);

// オブジェクトの変更検出の注意
const vm2 = new Vue({
  el: '#vm2',
  data: {
    a: 1
  }
});

// vm2.a // リアクティブ
vm2.b = 2; // リアクティブではない

// ネストされたオブジェクトにリアクティブなプロパティを追加
const vm3 = new Vue({
  el: '#vm3',
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
});

Vue.set(vm3.userProfile, 'age', 27);

vm3.$set(vm3.userProfile, 'sex', 'female');

vm3.userProfile = Object.assign({}, vm3.userProfile, {
  age: 28,
  favoriteColor: 'Vue Green'
});

// フィルタされた結果の表示
const vm4 = new Vue({
  el: '#vm4',
  data: {
    numbers: [ 1, 2, 3, 4, 5 ]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
});

const vm5 = new Vue({
  el: '#vm5',
});

const vm6 = new Vue({
  el: '#vm6',
  data: {
    items: [
      { msg: 'message1' },
      { msg: 'message2' },
      { msg: 'message3' },
    ]
}
});

const vm7 = new Vue({
  el: '#vm7',
  data: {
    todos: [
      { isComplete: true },
      { isComplete: false }
    ]
  }
});

const vm8 = new Vue({
  el: '#vm8',
  data: {
    todos: []
  }
});

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
});

const todoVm = new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = ''
    }
  }
});
