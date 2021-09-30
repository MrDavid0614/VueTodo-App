<template>
    <section class="tabs-container">
        <div class="tabs">
          <ul>
            <li
              v-for="tab in tabs"
              :class="{ 'is-active': tab.selected }"
              :key="tab.id"
              @click="selectTab(tab)">
                {{ tab.name }}
            </li>
          </ul>
        </div>

        <Tab
          v-for="tab in tabs"
          :tab="tab"
          :key="tab.id"
        />
    </section>
</template>

<script>
import Tab from './Tab.vue'

export default {
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  computed: {
    selectedTab () {
      return this.tabs.find(tab => tab.selected)
    }
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.selected = false
      })

      selectedTab.selected = true
    }
  },
  components: {
    Tab
  }
}
</script>

<style lang="scss" scoped>
  .tabs-container{
    display: flex;
    justify-content: center;
    flex-direction: column;

    .tabs {
      ul {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(170, 170, 170);
        gap: 50px;

        li {
          list-style: none;
          padding: 10px;
          cursor: pointer;
          transition: border-color 200ms ease-in;
          border-bottom: 3px solid transparent;
        }

        .is-active {
          border-color: lightseagreen;
        }
      }
    }
  }
</style>
