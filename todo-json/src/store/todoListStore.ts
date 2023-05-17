import { defineStore } from "pinia";
import { addTask, deleteTask, updateTask, getTasks } from "../services/todo.service";
import { TodoListStoreInterface, TodoItem } from "../assets/interfaces";

export const useTodoListStore = defineStore("todoList", {

  state: ():TodoListStoreInterface => ({
    _todoList: { results: [] },
    _showAlert: false,
  }),

  actions: {

    _getTasks() {
      getTasks()
        .then((res):void => {
          this._todoList.results = res.data;
        })
        .catch((err):void => {
          console.log(err);
        })
    },

    _addTaskWithName(name: string) {
      let task:TodoItem = {
        id:this._todoList.results.length+1,
        createdAt:new Date(),
        name:name,
        description:"",
        completed:false,
      }; 
      addTask(task)
        .then((res):void => {
          this._todoList.results.push(res.data);
        })
        .catch((err):void => {
          console.log(err);
        })
    },

    _deleteTask(itemID: number) {
      deleteTask(itemID)
        .then((res):void => {
          this._todoList.results = res.data;
        })
        .catch((err):void => {
          console.log(err);
        })
    },

    _updateTask(item: any) {
      updateTask(item)
        .then((res):void => {
          this._todoList.results = res.data;
        })
        .catch((err):void => {
          console.log(err);
        })
    },

    _inputAlert() {
      this._showAlert = true;
      setTimeout(() => {
        this._showAlert = false;
      }, 1000);
    }
  },

});