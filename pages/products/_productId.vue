<template>
  <div>
    <b-table :data="tableProductsApiData" :columns="columns"></b-table>
    <b-field label="Amount">
      <b-numberinput v-model="amount" style="width: 200px" placeholder="1" :min="1"></b-numberinput>
    </b-field>
    <b-button @click="addToCart(tableProductsApiData[0], amount)">カートに追加</b-button>
  </div>
</template>

<script>
import productsApi from '~/api/index'

export default {
  data() {
    return {
      tableProductsApiData: [],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '20',
        },
        {
          field: 'productName',
          label: 'Name',
          width: '20',
        },
        {
          field: 'price',
          label: 'Price',
          width: '20',
        },
      ],
    }
  },
  mounted() {
    this.getProductsApiData()
  },
  methods: {
    async getProductsApiData() {
      const res = await productsApi.getProductsApiData()
      const selectItem = res.find((v) => v.id === this.$route.params.productId)
      this.tableProductsApiData = [selectItem]
    },
    addToCart(product, amount) {
      if (amount > 0) {
        this.$buefy.notification.open('カートに追加されました。')
        product.amount = amount
        this.$store.dispatch('cart/addProductToCart', product)
        this.$router.push('/cart')
        console.log(product)
      } else {
        this.$buefy.notification.open('数量を入力してください。')
      }
    },
  },
}
</script>
