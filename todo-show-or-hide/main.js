const vm = new Vue({
  el: '#app',
  data: {
    items: [
        { title: 'TODO-01', isChecked: false },
        { title: 'TODO-02', isChecked: true },
        { title: 'TODO-03', isChecked: false },
    ],
    newItemTitle: '',
    showTodo: true,
    showDone: true,
  },
  methods: {
    addTodo: function(newTitle){
      this.items.push({
        title: newTitle,
        isChecked: false
      });
      this.newItemTitle = '';
    },
    showOrHideTodo: function(item){
      if (this.showTodo && !item.isChecked) {
        return true;
      }
      if (this.showDone && item.isChecked) {
        return true;
      }
      return false;
    },
  },
})