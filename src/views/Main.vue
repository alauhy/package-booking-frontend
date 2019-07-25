<template>
  <div id="main">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>
        <List></List>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
  import List from '../components/List'

  export default {
    name: 'Main',
    components:{
      List,
    },
    created () {
      this.$store.dispatch('getList')

    }
  }
</script>

<style scoped>

</style>
