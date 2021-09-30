<template>
    <img class="icon" :src="src">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 22px;
  cursor: pointer;
}
</style>
