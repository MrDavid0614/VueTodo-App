import { reactive } from 'vue'

const { tasks } = JSON.parse(localStorage.getItem('state')) || { tasks: [] }

export default reactive({
  state: {
    tasks: tasks
  },
  addTaskMutation (task) {
    const { tasks } = this.state
    tasks.push(task)
    this.saveStateInLocalStorage()
  },
  markCompletedMutation (task) {
    task.completed = !task.completed
    this.saveStateInLocalStorage()
  },
  deleteAllTasksMutation () {
    const { tasks } = this.state
    tasks.splice(0, tasks.length)
    this.saveStateInLocalStorage()
  },
  deleteTaskMutation (task) {
    const { tasks } = this.state
    tasks.splice(tasks.indexOf(task), 1)
    this.saveStateInLocalStorage()
  },
  getCompletedTasksAction () {
    const { tasks } = this.state
    return tasks.filter(task => task.completed)
  },
  getActiveTasksAction () {
    const { tasks } = this.state
    return tasks.filter(task => !task.completed)
  },
  saveStateInLocalStorage () {
    localStorage.setItem('state', JSON.stringify(this.state))
  }
})
