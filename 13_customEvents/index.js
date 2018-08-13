// value 属性を別の目的で使用することが可能となる
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
  <input
    type="checkbox"
    v-bind:checked="checked"
    v-on:change="$emit('change', $event.target.checked)"
  >
  `
});

new Vue({
  el: '#example-1',
  data: {
    lovingVue: true
  }
});

Vue.component('native-component', {
  template: '<span>click</span>'
});

new Vue({
  el: '#example-2',
  methods: {
    handleClick: function () {
      alert('clicked!')
    }
  }
});

Vue.component('base-input', {
  inheritAttrs: false,
  props: ['value'],
  computed: {
    inputListeners: function () {
      const vm = this;
      // `Object.assign` が複数のオブジェクトを一つの新しいオブジェクトにマージします
      return Object.assign({},
        // 親からの全てのリスナを追加します
        this.$listeners,
        // そしてカスタムリスナを追加したり
        // すでに存在するリスナの振る舞いを変えることができます
        {
          // こうすることでコンポーネントが v-model と動作します
          input: function (event) {
            vm.$emit('input', event.target.value)
          },
          focus: function (event) {
            console.log('focus');
          }
        }
      )
    }
  },
  template: `
    <div class="base-input">
      <label>
        Label
        <input
          v-bind="$attrs"
          v-bind:value="value"
          v-on="inputListeners"
        >
      </label>
      <span>{{ value }}</span>
    </div>
  `
});

new Vue({
  el: '#example-3',
  data: {
    inputText: ''
  }
});

