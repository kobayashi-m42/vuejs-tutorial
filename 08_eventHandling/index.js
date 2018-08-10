const example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
});

const example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function (event) {
      // メソッド内の 'this' は Vue インスタンスを参照する
      alert(`Hello ${this.name}!`);
      // `event` は、ネイティブ DOM イベント
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
});

// JavaScript からメソッドを呼び出すことも可能
// example2.greet();

const example3 = new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message);
    },
    warn: function (message, event) {
      // オリジナルの Dom イベントを参照
      if (event) event.preventDefault();
      alert(message);
    }
  }
});

const example4 = new Vue({
  el: '#example-4',
  methods: {
    say: function (message) {
      alert(message);
    }
  }
});

const example5 = new Vue({
  el: '#example-5',
  methods: {
    enter: function () {
      alert('enter');
    }
  }
});

const example6 = new Vue({
  el: '#example-6',
  methods: {
    deleteMessage: function () {
      alert('delete');
    }
  }
});

const example7 = new Vue({
  el: '#example-7',
  methods: {
    doSomething: function () {
      alert('Shift + Click');
    }
  }
});

const example8 = new Vue({
  el: '#example-8',
  methods: {
    onClick: function () {
      alert('click');
    },
    onCtrlClick: function () {
      alert('click');
    },
    onClickNoSystemModifiers: function () {
      alert('click');
    }
  }
});
