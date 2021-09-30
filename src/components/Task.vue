<template>
  <div
    class="task"
    :class="{ completed: task.completed }"
    >
      <div class="task-description" @click="changeTaskState(task)">
        <input
            type="checkbox"
            :checked="task.completed"
            class="checkbox"
        >
        <p>{{ task.description }}</p>
      </div>
      <Icon v-if="tabName === 'Completed'" :src="deleteIcon" @click="deleteTask(task)" />
  </div>
</template>

<script>
import store from '../store'
import Icon from './common/Icon.vue'
import deleteIcon from '@/assets/icons/delete.svg'

export default {
  props: {
    tabName: {
      type: String,
      required: true
    },
    task: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      deleteIcon
    }
  },
  methods: {
    changeTaskState (task) {
      store.markCompletedMutation(task)
    },
    deleteTask (task) {
      if (confirm('Are you sure you want to delete this task?')) {
        store.deleteTaskMutation(task)
      }
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
    .task, .task-description {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }

    .checkbox {
        width: 20px;
        height: 20px;
    }

    .completed {
        color: rgb(114, 114, 114);
        text-decoration: line-through;
    }
</style>
