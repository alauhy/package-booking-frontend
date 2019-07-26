<template>
  <div id="add">
    <h2>包裹入库</h2>
    <a-form
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item
      label="运单号："
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"

    >
      <a-input
          v-decorator="[
          'orderId',
          {rules: [{ required: true, message: '请输入运单号！' }]},
        ]"
      />
    </a-form-item>
      <a-form-item
        label="收件人："
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-input
          v-decorator="[
          'receipt',
          {rules: [{ required: true, message: '请输入收件人！' }]}
        ]"
        />
      </a-form-item>
      <a-form-item
        label="电话："
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-input
          v-decorator="[
          'phone',
          {rules: [{ required: true, message: '请输入收件人电话!' }]}
        ]"
        />
      </a-form-item>
      <a-form-item
        label="重量："
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-input
          v-decorator="[
          'weight',
          {rules: [{ required: true, message: '请输入运单重量！' }]}
        ]"
        />
      </a-form-item>

        <a-button
          type="primary"
          html-type="submit"
          class="add-a-btn"
        >
          确定
        </a-button>
      <a-button
        class="add-a-btn"
        type="primary"
      @click="goBack">
        取消
      </a-button>
    </a-form>
  </div>
</template>

<script>
  export default {
    name: 'Add',
    data () {
      return {
        formLayout: 'horizontal',
        form: this.$form.createForm(this),
      }
    },
    methods: {
      handleSubmit (e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            let pkg = {
              orderId: values.orderId,
              customerName: values.receipt,
              phone: values.phone,
              weight: parseFloat(values.weight),
              status: 1
            }
            this.$store.dispatch('addPackage', pkg)
            this.$router.push('/')
          }
        });
      },

      goBack () {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  #add{
    text-align: center;
  }
  .add-a-btn{
    margin: 10px;
  }

</style>
