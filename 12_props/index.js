Vue.component('blog-post', {
  // JavaScript 内ではキャメルケース
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
});

new Vue({ el: '#example-1' });


// プロパティメイト型を設定したオブジェクト配列として、プロパティを列挙可能
Vue.component('prop-types', {
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object
  },
  template: `
  <span>
    title: {{ title }}<br>
    likes: {{ likes }}<br>
    isPublished: {{ isPublished }}<br>
    commentIds: {{ commentIds }}<br>
    author: {{ author }}<br>
  </span>
  `
});

new Vue({
  el: '#example-2',
  data: {
    post: {
      title: 'Title',
      likes: 42,
      isPublished: true,
      commentIds: [234, 266, 273],
      author: { name: 'Veronica', company: 'Veridian Dynamics' }
    }
  }
});

// プロパティを初期値として受け渡し、
// 子コンポーネントにてローカルのデータとしてあとで利用する場合
Vue.component('initial-counter', {
  props: ['initialCounter'],
  template: '<h3>{{ initialCounter }}</h3>'
});

new Vue({
  el: '#example-3',
  data: {
    counter: 1
  }
});

// プロパティのバリデーション
Vue.component('my-component', {
  props: {
    // 基本的な型の検査
    propA: Number,
    // 複数の型の許容
    propB: [String, Number],
    // 文字列型を必須で要求する
    propC: {
      type: String,
      required: true
    },
    // デフォルト値つきの数値型
    propD: {
      type: Number,
      default: 100
    },
    // デフォルト値つきのオブジェクト型
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // カスタマイズしたバリデーション関数
    propF: {
      validator: function (value) {
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
  template: `
  <span>
    propA: {{ propA }}<br>
    propB: {{ propB }}<br>
    propC: {{ propC }}<br>
    propD: {{ propD }}<br>
    propE: {{ propE }}<br>
    propF: {{ propF }}<br>
  </span>
  `
});

new Vue({
  el: '#example-4',
  data: {
    props: {
      propA: 'string',
      propB: true,
      propC: null,
      // propD: // default 値が設定される
      // propE: // default 値が設定される
      propF: 'error'
    }
  }
});

Vue.component('bootstrap-date-input', {
  template: '<input type="date" class="form-control">'
});

new Vue({
  el: '#example-5',
});

// inheritAttrs: true 親の属性が継承される
Vue.component('inherit-attrs-link', {
  inheritAttrs: true,
  props: ['src'],
  template: '<a v-bind="$attrs" :href="src">{{ src }}</a>'
});

new Vue({
  el: '#example-6',
});

// inheritAttrs: false 親の属性が継承されない
// v-bind="$attrs" を指定することで、target属性は継承される
// hrefに ついても :href="src" の指定が優先される
Vue.component('not-inherit-attrs-link', {
  inheritAttrs: false,
  props: ['src'],
  template: '<a v-bind="$attrs" :href="src">{{ src }}</a>'
});

new Vue({
  el: '#example-7',
});
