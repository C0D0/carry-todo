import { defineStore } from "pinia";
import api from '../api';


interface TodoItem {
  item: string;
  id: number;
  completed: boolean;
}

const saveStoreItem = async (todoItem: any) => {
  console.log(todoItem);
  api.post('/save-item', todoItem)
          .then((response) => {
            console.log("Item saved successfully : " + response.data)
          })
          .catch((error) => {
            console.error('Error saving todo item:', error);
          });
};

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [] as TodoItem[],
    id: 0,
    showAlert: false,
  }),
  actions: {
    addTodo(item: string) {
      let todoItem = { item, id: this.id++, completed: false };
      this.todoList.push(todoItem);
      saveStoreItem(todoItem)
    },
    deleteTodo(itemID: number) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID;
      });
    },
    toggleCompleted(idToFind: number) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
        saveStoreItem(todo);
      }
    },
    inputAlert() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 1000);
    },
  },
});