<template>
  <h1 class="app-title">VueTodo-App</h1>
  <Tabs :tabs="tabs" />
</template>

<script>
import Tabs from '@/components/Tabs.vue'

const tabs = [
  {
    id: 1,
    name: 'All',
    selected: true
  },
  {
    id: 2,
    name: 'Active',
    selected: false
  },
  {
    id: 3,
    name: 'Completed',
    selected: false
  }
]

export default {
  name: 'App',
  data () {
    return {
      tabs
    }
  },
  components: {
    Tabs
  }
}
</script>

<style lang="scss">
.app-title {
  font-size: 3.5rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
