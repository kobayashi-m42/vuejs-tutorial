Vue.component('navigation-link', {
  props: {
    url: String
    },
    template: `
    <a
      v-bind:href="url"
      class="nav-link"
     >
      <slot></slot>
     </a>   
  `
});

new Vue({
  el: '#example-1',
  data: {
    user: {
      name: 'Vue.js'
    }
  }
});

Vue.component('base-layout', {
  template:`
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>  
  `
});

new Vue({
  el: '#example-2'
});

Vue.component('default-slot', {
  template: `
    <button type="submit">
      <slot>Submit</slot>
    </button>
  `
});

new Vue({
  el: '#example-3'
});

Vue.component('todo-list', {
  props: {
    todos: Array
  },
  template:`
    <ul>
      <li
        v-for="todo in todos"
        v-bind:key="todo.id"
      >
        <!-- それぞれの todo のためのスロットがあり 'todo' オブジェクトを -->
        <!-- スロットのプロパティとして渡している                           -->
        <slot v-bind:todo="todo">
          <!-- フォールバックコンテンツ -->
          {{ todo.text }}
        </slot>
      </li>
    </ul>  
  `
});

new Vue({
  el: '#example-4',
  data: {
    todos: [
      { text: 'todoA', isComplete: true },
      { text: 'todoB', isComplete: false },
    ]
  }
});
