Vue.component('tab-posts', {
  data: function () {
    return {
      posts: [
        {
          id: 1,
          title: 'Cat Ipsum',
          content: '<p>Cat Ipsum...</p>'
        },
        {
          id: 2,
          title: 'Hipster Ipsum',
          content: '<p>Hipster Ipsum...</p>'
        },
        {
          id: 3,
          title: 'Cupcake Ipsum',
          content: '<p>Cupcake Ipsum...</p>'
        }
      ],
      selectedPost: null
    }
  },
  template: `
  	<div class="posts-tab">
      <ul class="posts-sidebar">
        <li
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:class="{ selected: post === selectedPost }"
					v-on:click="selectedPost = post"
        >
          {{ post.title }}
        </li>
      </ul>
      <div class="selected-post-container">
      	<div 
        	v-if="selectedPost"
          class="selected-post"
        >
          <h3>{{ selectedPost.title }}</h3>
          <div v-html="selectedPost.content"></div>
        </div>
        <strong v-else>
          Click on a blog title to the left to view it.
        </strong>
      </div>
    </div>
  `
});

Vue.component('tab-archive', {
  template: '<div>Archive component</div>'
});

new Vue({
  el: '#dynamic-component-demo',
  data: {
    currentTab: 'Posts',
    tabs: ['Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
});

Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // resolve コールバックにコンポーネント定義を渡します
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
});

new Vue({
  el: '#async-example'
});
