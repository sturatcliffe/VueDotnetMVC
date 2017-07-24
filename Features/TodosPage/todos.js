(function () {

  if (document.querySelector('#todos')) {

    var todos = document.getElementById('todos').value;

    var app = new Vue({
      el: "#todos",
      data: {
        todos: window.todos,
        newTodo: ''
      },
      methods: {
        addTodo: function () {
          if (this.newTodo.length) {
            this.todos.push(this.newTodo);
            this.newTodo = '';
          }
        },
        removeTodo: function (index) {
          this.todos.splice(index, 1);
        },
        save: function () {
          alert('Saving: ' + JSON.stringify(this.todos));
        }
      }
    });
  }

})();