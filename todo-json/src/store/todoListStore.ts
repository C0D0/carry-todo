import { defineStore } from "pinia";
import { addTask, deleteTask, updateTask, getTasks} from "../services/todo.service";
import { TodoListStoreInterface, TodoItem } from "../assets/interfaces";

export const useTodoListStore = defineStore("todoList", {

  state: (): TodoListStoreInterface => ({
    _todoList: { results: [] as TodoItem[] },
    _editingTask: TodoItem.createEmptyTodoItem(),
    _showAlert: false,
  }),

  actions: {

    _getTasks() {
      getTasks()
        .then((res): void => {
          this._todoList.results = res.data;
        })
        .catch((err): void => {
          console.log(err);
        })
    },
    _getTask(taskId: Number): TodoItem {
      var result = this._todoList.results.find(task => task.id === taskId);
      if (!result) {
        throw new Error(`Task with ID ${taskId} not found`);
      }
      return result;
    },
    _addTaskWithName(name: string) {
      let task: TodoItem = {
        id: this._todoList.results.length + 1,
        createdAt: new Date(),
        name: name,
        description: "",
        completed: false,
      };
      addTask(task)
        .then((res): void => {
          this._todoList.results.push(res.data);
        })
        .catch((err): void => {
          console.log(err);
        })
    },

    _deleteTask(itemID: number) {
      deleteTask(itemID)
        .then((res): void => {
          this._todoList.results = this._todoList.results.filter((e, i) => e.id !== res.data.id);
        })
        .catch((err): void => {
          console.log(err);
        })
    },

    _updateTask(item: any) {
      updateTask(item)
        .then((res): void => {
          var index = this._todoList.results.findIndex(task => task.id == item.id)
          this._todoList.results[index] = res.data;
          console.log(this._todoList.results)
        })
        .catch((err): void => {
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