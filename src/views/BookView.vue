<template>
<book></book>
</template>
<script>
  import book from '../components/Book'
  export default {
    name: 'Book',
    components:{
      book
    },
   mounted () {
      this.$store.dispatch('getList')
   }
  }
</script>

<style scoped>

</style>
