<template>
    <div>
      <form @submit.prevent="addItemAndClear(todo)">
        <input v-model="todo" type="text" />
        <button class="button-53" role="button">Ajouter une tâche</button>
        <div class="alert-div">
          <div v-show="store.showAlert" class="alert">
            Rentrez une tache
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, defineComponent } from "vue";
  import { useTodoListStore } from "../store/todoListStore";

  export default defineComponent({
    setup() {
      const todo = ref("");
      const store = useTodoListStore();
  
      function addItemAndClear(name: string) {
        if (name.length === 0) {
          store._inputAlert();
          return;
        }
        store._addTaskWithName(name);
        todo.value = "";
      }
  
      return { todo, addItemAndClear, store };
    },
  });
  </script>
  
  <style scoped>
  form {
    margin-bottom: 15px;
    text-align: center;
  }
  
  input {
    margin-top: 50px;
    margin-bottom: 27px;
    padding: 0.25rem 0.2rem;
    width: 100%;
    display: block;
    text-align: center;
    border-radius: 10px;
    font-size: large;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 7px;
  }
  .alert-div {
    min-height: 25px
  }
  
  .alert {
    color: #d1495b;
    font-size: 1em;
    font-weight: 600;
  }
.button-53 {
  background-color: #ffe601;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  color: #000000;
  display: inline-flex;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 12px;
  font-weight: 700;
  padding: .1rem .8rem;
  justify-content: center;
  line-height: 1.75rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-53:focus {
  outline: 0;
}

.button-53:after {
  content: '';
  position: absolute;
  border: 1px solid #000000;
  bottom: 2px;
  left: 2px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.button-53:hover:after {
  bottom: 0.5px;
  left: 0.5px;
}

</style>
