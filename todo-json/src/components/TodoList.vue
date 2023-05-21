<template>
  <div v-for="todo in todoList" :key="todo.id" class="list">
    <div class="item">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <div class="bouton-flex">
        <button @click.stop="toggleCompleted(todo.id)"><i class="fa fa-check bouton-completed"></i></button>
        <button @click="deleteTodo(todo.id)"><i class="fa fa-trash bouton-trash"></i></button>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import { useTodoListStore } from "../store/useTodoListStore";
import { storeToRefs } from "pinia";
export default defineComponent({
  setup() {
    const store = useTodoListStore();

    const { todoList } = storeToRefs(store);
    const { toggleCompleted, deleteTodo } = store;

    return { todoList, toggleCompleted, deleteTodo };
  },
});
</script>
  
<style scoped>
button {
  margin: 0 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  opacity: 20%;
}

.list {
  display: flex;
  justify-content: center;
}

.item {
  display: flex;
  font-size: 1.5em;
  Font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
  font-size: x-large;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px;
  border: 2px solid rgb(11, 205, 219);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 7px;
}

.bouton-flex {
  display: flex;
}

.bouton-completed {
  color: green;
  font-size: 30px;
}

.bouton-trash {
  color: red;
  font-size: 30px;
}

</style>
