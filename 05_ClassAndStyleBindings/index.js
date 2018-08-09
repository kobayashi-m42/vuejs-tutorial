const inlineVm = new Vue({
  el: '#app-1',
  data: {
    isActive: true,
    hasError: false
  }
});

const objectVm = new Vue({
  el: '#app-2',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
});

const arrayVm = new Vue({
  el: '#app-3',
  data: {
    isActive: false,
    activeClass: 'active',
    errorClass: 'text-danger'
  }
});

Vue.component('my-component', {
  template: '<p class="foo bar">With Components</p>'
});

const componentVm = new Vue({
  el: '#app-4',
  data: {
    isActive: true,
  }
});

const objectStyleVm = new Vue({
  el: '#app-5',
  data: {
    activeColor: 'red',
    fontSize: 30,
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
});

const arrayStyleVm = new Vue({
  el: '#app−6',
  data: {
    moreStyles: {
      'border-radius': '10px'
    }
  },
  computed: {
    styles: function() {
      const height = 30;

      return {
        'background-color': 'blue',
        width: (height / 2) + 'px',
        height: height + 'px'
      };
    }  }
});
