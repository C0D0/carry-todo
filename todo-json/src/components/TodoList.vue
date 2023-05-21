<template>
  <div class="list">
    <div v-for="todo in store._todoList.results" :key="todo.id" class="item">
      <span @click="displayModal(todo)" :class="{ completed: todo.completed }">{{ todo.name }}</span>
      <div class="actions-container">
        <span class="checkbox" :class="{ 'checked': todo.completed }" name="completed"
          @click="toggleCompleted(todo)"></span>
        <span @click="deleteTodo(todo.id)" class="x">&#10060;</span>
      </div>
    </div>
  </div>
  <EditTask :visible="modalVisible" @close="closeModal" />
</template>
  
<script lang="ts">
import { TodoItem } from "../assets/interfaces";
import { useTodoListStore } from "../store/todoListStore";
import EditTask from "./EditTask.vue";

export default {
  data() {
    return {
      "store": useTodoListStore(),
      "modalVisible": false,
      "taskIdToDisplay": 0
    };
  },
  mounted() {
    this.store._getTasks();
  },
  methods: {
    deleteTodo(itemID: number) {
      this.store._deleteTask(itemID);
    },
    displayModal(task: TodoItem) {
      this.store._editingTask = task
      this.modalVisible = true;
    },
    closeModal(): void {
      this.modalVisible = false;
    },
    toggleCompleted(todo: TodoItem) {
      todo.completed = !todo.completed;
      this.store._updateTask(todo);
    }
  },
  components: { EditTask }
};
</script>
<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
}

.list {
  width: 100%;
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  font-size: 1.5em;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  margin: 0.5rem;
  border-radius: 20px;
  background-color: #fff;
}

.actions-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.checkbox {
  display: block;
  width: 1.5rem;height:1.5rem;
  border: solid 2px var(--main-color);
  border-radius: 1rem;
  box-shadow: 0 0 0.3rem 0 var(--main-color);
}

.checked {
  
  background-color: var(--main-color);
}

.checked:after {
  content:"";
  display: block;
  position: relative;
  left: 0.45rem;
  top: 0.3rem;
  width: 0.25rem;
  height: 0.5rem;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>