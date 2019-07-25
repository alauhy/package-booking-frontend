<template>
    <div id="pkg">
      <h2>运单号&nbsp&nbsp&nbsp&nbsp收件人&nbsp&nbsp&nbsp&nbsp电话&nbsp&nbsp&nbsp&nbsp状态&nbsp&nbsp&nbsp&nbsp预约时间</h2>
      <dl >
        <dt v-for="(pkg,index) in packages" :key="index">
          <span>{{pkg.orderId}}</span>
          <span>{{pkg.customerName}}</span>
          <span>{{pkg.phone}}</span>
          <span v-if="pkg.status === 1">未取件</span>
          <span v-else-if="pkg.status === 2">已预约</span>
          <span v-else>已取件</span>

          <span v-if="pkg.bookTime === 0"></span>
          <span v-else>{{pkg.bookTime}}</span>
          <button v-if="pkg.status !== 3" @click="setStatus(pkg.id)">确定收货</button>
        </dt>

      </dl>
    <button @click="getAllPackages">All</button>
    <button @click="getNotFetch">未取件</button>
    <button @click="getBooked">已预约</button>
    <button @click="getFetched">已取件</button>
    <button @click="goHome">+添加</button>
    </div>
</template>

<script>

import {mapState} from 'vuex'
  export default {
    name: 'List',
    computed:mapState({
      packages: state => state.packageList
    }),
    methods:{
      getAllPackages(){
        this.$store.dispatch('getList')
      },
      getNotFetch(){
        this.$store.dispatch('getNotFetch')
      },
      getBooked(){
        this.$store.dispatch('getBooked')
      },
      getFetched(){
        this.$store.dispatch('getFetched')
      },
      goHome(){
        this.$router.push("/home")
      },
      setStatus(id){
        this.$store.dispatch('setStatusFetched',id)
      }
    }

  }
</script>

<style scoped>
  span{
    margin: 10px;
  }
</style>
