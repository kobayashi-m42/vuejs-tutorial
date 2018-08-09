const vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage : function () {
     return this.message.split('').reverse().join('')
    },
    now: function () {
      return Date.now()
    }
  }
});
// vm.message = 'Goodbye' -> reversedMessage : 'eybdooG'

const demoVm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
  },
  computed: {
    fullName: {
      // getter 関数
      get: function () {
        return `${this.firstName} ${this.lastName}`
      },
      // setter 関数
      set: function (newValue) {
        const names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  }
});

const watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...';
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)';
        return
      }
      this.answer = 'Thinking...';
      const vm = this;
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
});
