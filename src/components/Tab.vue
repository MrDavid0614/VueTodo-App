<template>
  <div role="button" class="tab-content" v-show="isActive">

    <div class="create-task" v-if="!isCompletedTab">
      <input
        type="text"
        v-model="newTaskDescription"
        placeholder="Add details"
        @keyup.enter="addNewTask"
      />
      <AddButton @click="addNewTask" />
    </div>

    <div v-if="tasks.length">
      <Task
        v-for="task in tasks"
        :tabName="tab.name"
        :key="task.id"
        :task="task"
      />
      <div v-if="isCompletedTab" class="button-container">
        <DeleteButton @button-clicked="deleteAllTasks" />
      </div>
    </div>

    <div class="not-found" v-else>
      <p v-if="tab.name === 'All'">
        No tasks found.
      </p>
      <p v-else>
        No {{ tab.name.toLowerCase() }} tasks found.
      </p>
    </div>

  </div>
</template>

<script>
import store from '../store'
import Task from './Task.vue'
import AddButton from './buttons/AddButton.vue'
import DeleteButton from './buttons/DeleteButton.vue'

export default {
  props: {
    tab: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      newTaskDescription: ''
    }
  },
  computed: {
    isActive () {
      return this.tab.selected
    },
    isCompletedTab () {
      return this.tab.name === 'Completed'
    },
    tasks () {
      const tasksByTabName = {
        all: store.state.tasks,
        active: store.getActiveTasksAction(),
        completed: store.getCompletedTasksAction()
      }
      return tasksByTabName[this.tab.name.toLowerCase()]
    }
  },
  methods: {
    addNewTask () {
      const { tasks } = store.state
      const newTask = {
        id: tasks.length + 1,
        description: this.newTaskDescription,
        completed: false
      }
      this.newTaskDescription = ''
      store.addTaskMutation(newTask)
    },
    deleteAllTasks () {
      if (confirm('Are you sure you want to delete all tasks?')) {
        store.deleteAllTasksMutation()
      }
    }
  },
  components: {
    Task,
    AddButton,
    DeleteButton
  }
}
</script>

<style lang="scss" scoped>
.create-task {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  input {
    border: 1px solid rgb(133, 133, 133);
    border-radius: 12px;
    font-size: 1.1rem;
    grid-column-start: 1;
    grid-column-end: 3;
    padding-left: 10px;
    outline: none;
  }
  button {
    grid-column-start: 3;
  }
}

.button-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.not-found {
  padding: 20px;
}
</style>
