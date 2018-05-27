const vm = new Vue({
  el: '#app',
  data: {
    items: [
        { title: 'TODO-01', isChecked: false },
        { title: 'TODO-02', isChecked: true },
        { title: 'TODO-03', isChecked: false },
    ],
    removedItems: [
        { title: 'TODO-91', isChecked: false },
        { title: 'TODO-92', isChecked: false },
        { title: 'TODO-93', isChecked: false },
    ],
    newItemTitle: '',
    showDoneTodo: false,
  },
  methods: {
    addTodo: function(newTitle){
      this.items.push({
        title: newTitle,
        isChecked: false
      });
      this.newItemTitle = '';
    },
    deleteTodo: function(){
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].isChecked === true) {
          this.removedItems.push({
            title: this.items[i].title,
            isChecked: false
          });
        }
      }
      this.items = this.items.filter(function (item) {
        return item.isChecked === false;
      });
    },
    recoverTodo: function(){
      for (var i = 0; i < this.removedItems.length; i++) {
        if (this.removedItems[i].isChecked === true) {
          this.items.push({
            title: this.removedItems[i].title,
            isChecked: false
          });
        }
      }
      this.removedItems = this.removedItems.filter(function (item) {
        return item.isChecked === false;
      });
    },
  },
})