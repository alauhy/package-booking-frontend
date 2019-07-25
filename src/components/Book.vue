<template>
  <div>
    <p>运单号：<input type="text" v-model="orderId"></p>
   <p>预约时间：</p>
    <a-date-picker
      format="YYYY-MM-DD" @change="getChange"/>
    <a-time-picker use24Hours @change="onChange"/>
    <button @click="bookFetch">确定</button>
    <button @click="goMain">取消</button>

  </div>
</template>

<script>
  export default {
    name: 'Book',
    data () {
      return {
        timeString: '',
        date: '',
        orderId:''
      }
    },
    methods: {
      getChange (date,dateString) {
        this.date = dateString
      },
      onChange (time,timeString) {

        this.timeString = timeString
      },
      bookFetch(){
         let pkg = {
           orderId : this.orderId,
           bookTime : `${this.date} ${this.timeString} `
         }
        this.$store.dispatch('setStatusUnfetch',pkg)
        this.$router.push("/")

      },
      goMain(){
        this.$router.push("/")
      }

    }
  }
</script>

<style scoped>

</style>
