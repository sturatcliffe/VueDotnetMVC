(function (Vue, VeeValidate) {

  if (document.querySelector('#contact')) {
    Vue.use(VeeValidate);

    var app = new Vue({
      el: "#contact",
      data: {
        name: '',
        email: '',
        message: '',
        errorMessage: ''
      },
      methods: {
        send: function () {
          this.$validator.validateAll().then(result => { 
            if (result) {
              this.reset();
              alert('Form submitted!');
            } else {
              this.errorMessage = 'Please fix all validation errors.'
            }
          });
        },
        reset: function () {
          this.name = '';
          this.email = '';
          this.message = '';
          this.errorMessage = '';
          this.$validator.clean();
        }
      }
    });
  }

})(Vue, VeeValidate);