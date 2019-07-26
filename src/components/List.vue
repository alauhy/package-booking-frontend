<template>
  <div id="pkg">
    <a-table :columns="columns"
             :dataSource="this.packages"
    >
      <template slot="status" slot-scope="status">
      {{ getStatus(status) }}
    </template>
      <template slot="operation" slot-scope="operation,index">
        <a-button v-if="index.status !== 3" @click="setStatus(index.id)">确定收货</a-button>
      </template>

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
      scopedSlots: { customRender: 'status' },
    },
    {
      title: '预约时间',
      dataIndex: 'bookTime',
      key: 'bookTime',
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      key: 'operation',
      scopedSlots: { customRender: 'operation' },
    },
  ]

  import { mapState } from 'vuex'

  export default {
    name: 'List',
    data () {
      return {
        columns,
      }
    },
    computed: mapState({
      packages: state => state.packageList
    }),
    methods: {
      getStatus (status) {
        if (status === 1) {
          return '未取件'
        } else if (status === 2) {
          return '已预约'
        } else {
          return '已取件'
        }

      },
      getAllPackages () {
        this.$store.dispatch('getList')
      },
      getNotFetch () {
        this.$store.dispatch('getNotFetch')
      },
      getBooked () {
        this.$store.dispatch('getBooked')
      },
      getFetched () {
        this.$store.dispatch('getFetched')
      },
      goHome () {
        this.$router.push('/home')
      },
      setStatus (id) {
        this.$store.dispatch('setStatusFetched', id)
      }
    }

  }
</script>

<style scoped>
  span {
    margin: 10px;
  }

  .foot-btn {
    margin: 10px;
  }
</style>
