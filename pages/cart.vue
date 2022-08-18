<template>
  <div>
    <b-table :data="tableCartData" :columns="columns"></b-table>
    <br />
    <strong>Total Price: {{ calcTotal() }} JPY </strong>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableCartData: [],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '20',
        },
        {
          field: 'productName',
          label: 'Name',
          width: '40',
        },
        {
          field: 'price',
          label: 'Price',
          width: '40',
        },
        {
          field: 'amount',
          label: 'Amount',
          width: '40',
        },
      ],
    }
  },
  mounted() {
    this.getCartData()
  },
  methods: {
    getCartData() {
      const cartItems = this.$store.state.cart.products
      this.tableCartData = cartItems
    },
    calcTotal() {
      const total = this.$store.state.cart.products.reduce((total, product) => {
        const totalPrice = total + product.subtotal
        return totalPrice
      }, 0)
      return total
    },
  },
}
</script>
