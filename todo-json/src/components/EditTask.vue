<template>
	<div id="editTaskModal" class="modal" v-if="visible">
		<div class="modal-content">
			<div class="topbar">
				<h1>Modifier la tâche n°{{ store._editingTask.id }}</h1>
				<button id="closeButton" @click="close">Close</button>
			</div>

			<p>Créée le {{ store._editingTask.createdAt }}</p>
			<form id="editTaskForm" @submit="saveAndQuit">

				<div class="input-group-container">
					<div class="input-label-container">
						<label for="name">Titre</label>
						<input v-model="store._editingTask.name" type="text" name="name">
					</div>
					<div class="input-label-container">
						<label for="completed">Terminé</label>
						<input v-model="store._editingTask.completed" type="checkbox" name="completed" id="">
					</div>
				</div>



				<div class="input-label-container">
					<label for="description">Description</label>
					<textarea v-model="store._editingTask.description" name="description" rows="5" cols="40"></textarea>
				</div>

				<button type="submit">Enregistrer</button>
			</form>

		</div>
	</div>
</template>
<script lang="ts">
import { useTodoListStore } from '../store/todoListStore';

export default {
	props: {
		"visible": {
			type: Boolean,
			default: false,
		}
	},
	data() {
		return {
			"store": useTodoListStore(),
		};
	},
	mounted() {
	},
	methods: {
		saveAndQuit() {
			this.store._updateTask(this.store._editingTask);
			this.$emit('close');
		},
		close() {
			this.$emit('close');
		}
	},
};
</script>
<style>
#editTaskModal {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

#editTaskModal>.modal-content {
	background: #eee;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50vw;
	height: 50vh;
	border-radius: 20px;
	box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
	padding: 2rem;
}

.topbar {
	display: flex;
	justify-content: space-between;
	margin: 0 0 1rem 0;
	width: 100%;
}

.topbar>h1 {
	margin: 0 auto 0 0;
}

#editTaskForm {
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	width: 100%;
}

#editTaskForm input {
	margin: 0, 5rem;
}

.input-group-container {
	display: flex;
	justify-content: space-around;
	width: 100%;
}

.input-label-container {
	display: flex;
	flex-direction: column;
}
</style>