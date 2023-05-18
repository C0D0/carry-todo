<template>
  <div v-for="todo in store._todoList.results" :key="todo.id" class="list">
    <div class="item">
      <span @click="displayModal(todo.id)" :class="{ completed: todo.completed }">{{ todo.name }}</span>
      <div>
        <input type="checkbox" name="completed" v-model="todo.completed">
        <span @click="deleteTodo(todo.id)" class="x">&#10060;</span>
      </div>
    </div>
  </div>
  <EditTask :visible="modalVisible" :taskId="taskIdToDisplay" @close="closeModal" />
</template>
  
<script lang="ts">
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
    displayModal(taskId: number) {
      this.taskIdToDisplay = taskId
      this.modalVisible = true;
    },
    closeModal(): void {
      this.modalVisible = false;
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
  display: flex;
  justify-content: center;
}

.item {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
</style>