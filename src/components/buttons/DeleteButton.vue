<template>
  <div @click="$emit('button-clicked')" class="delete-btn-container">
      <Icon :src="deleteIcon" />
      <button class="delete-btn">Delete all</button>
  </div>
</template>

<script>
import Icon from '../common/Icon.vue'
import deleteIcon from '@/assets/icons/delete.svg'

export default {
  data () {
    return {
      deleteIcon
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
.delete-btn-container {
    grid-column-start: 3;
    display: flex;
    background-color: #EB5757;
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;

    .delete-btn {
        border: none;
        background-color: inherit;
        color: #fff;
        cursor: inherit;
    }
}
</style>
