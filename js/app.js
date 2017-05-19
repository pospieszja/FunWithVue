var app = new Vue({
  el: '#app',
  data: {
    text: "",
    todos: [{
        id: 1,
        text: 'Learn JavaScript',
        isCompleted: false
      },
      {
        id: 2,
        text: 'Learn Vue',
        isCompleted: false
      },
      {
        id: 3,
        text: 'Build something awesome',
        isCompleted: false
      }
    ]
  },
  methods: {
    addItem: function () {
      var newText = this.text
      if (newText) {
        this.todos.push({
          id: 1,
          text: newText,
          isCompleted: false
        })
        this.text = ''
      }
    },
    removeItem: function (todo) {
      var index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    }
  }
})