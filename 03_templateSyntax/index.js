const vm = new Vue({
  el: '#app',
  data: {
    msg : 'message',
    rawHTML: '<span style="color:red">This should be red.</span>',
    dynamicId: 123,
    isButtonDisabled: true,
    number: 2,
    ok: true,
    message: 'Message',
    seen: true,
    url : 'https://jp.vuejs.org/v2/guide/'
  }
});
