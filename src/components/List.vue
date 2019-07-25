<template>
    <div id="pkg">
      <a-table :columns="columns"
               :dataSource="this.packages"
      >
       <span slot="status" v-if="packages.status===2">未取件</span>
      </a-table>
    <a-button type="primary" class="foot-btn" @click="getAllPackages">All</a-button>
    <a-button type="primary" class="foot-btn" @click="getNotFetch">未取件</a-button>
    <a-button type="primary" class="foot-btn" @click="getBooked">已预约</a-button>
    <a-button type="primary" class="foot-btn" @click="getFetched">已取件</a-button>
    <a-button type="primary" class="foot-btn" @click="goHome">+添加</a-button>
    </div>
</template>

<script>
  const columns = [
    {
      title: '运单号',
      dataIndex: 'orderId',
      key: 'orderId',
    }, {
      title: '收件人',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: '电话',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '预约时间',
      dataIndex: 'bookTime',
      key: 'bookTime',
    },
  ];

import {mapState} from 'vuex'
  export default {
    name: 'List',
    data(){
      return{
        columns,
      }
    },
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
  .foot-btn{
    margin: 10px;
  }
</style>
