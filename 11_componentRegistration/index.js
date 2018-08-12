// コンポーネント名の定義
// ケバブケース
Vue.component('my-component-name1',{
  template: '<div>my-component-name1</div>'
});
// パスカルケース
Vue.component('MyComponentName2',{
  template: '<div>MyComponentName2</div>'
});

new Vue({ el: '#example-1' });

// ローカル登録
const ComponentA = {
  template: '<div>ComponentA</div>'
};

new Vue({
  el: '#example-2',
  components: {
    'component-a': ComponentA
  }
});


