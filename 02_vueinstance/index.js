// データオブジェクト
const obj = {
  foo: 'bar'
};

// 既存のプロパティの変更を防ぐ
Object.freeze(obj);

// Vue インスタンスにオブジェクトを追加する
const vm1 = new Vue({
  el: '#app-1',
  data: obj
});

// ライフサイクルフックの１つであるcreatedフックはインスタンスが生成された後にコードを実行する
const vm2 = new Vue({
  el: '#app-2',
  data: {
    a: 1
  },
  created: function () {
    console.log('a is:' + this.a)
  }
});
