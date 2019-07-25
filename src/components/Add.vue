<template>
  <div id="add">
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
          setFieldsValue = this.
        ]"
      />
    </a-form-item>
      <a-form-item
        label="收件人："
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-input
          v-model ="this.customerName"
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
          v-model ="this.phone"
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
          v-model ="this.weight"
          v-decorator="[
          'weight',
          {rules: [{ required: true, message: '请输入运单重量！' }]}
        ]"
        />
      </a-form-item>

        <a-button
          type="primary"
          html-type="submit"
          @click="addPackage"
        >
          Submit
        </a-button>
    </a-form>
  </div>
</template>

<script>
  export default {
    name: 'Add',
    data () {
      return {
        orderId: getFieldsValue[orderId],
        customerName: '',
        phone: '',
        weight: '',
        formLayout: 'horizontal',
        form: this.$form.createForm(this),
      }
    },
    methods: {
      handleSubmit (e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },
      addPackage () {
        if (this.orderId !== '' && this.customerName !== '' && this.phone !== '' && this.weight !== '') {
          let pkg = {
            orderId: this.orderId,
            customerName: this.customerName,
            phone: this.phone,
            weight: parseFloat(this.weight),
            status: 1
          }
          this.$store.dispatch('addPackage', pkg)
          this.$router.push('/')
        } else {
          alert('请填写所有信息')
        }
      },
      goBack () {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
