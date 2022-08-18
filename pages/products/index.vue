<template>
  <div>
    <b-table :data="tableProductsApiData" :columns="columns" @click="clicked"></b-table>
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
          width: '40',
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
      ],
    }
  },
  mounted() {
    this.getProductsApiData()
  },
  methods: {
    async getProductsApiData() {
      const res = await productsApi.getProductsApiData()
      this.tableProductsApiData = res
    },
    clicked(onRowClicked) {
      this.$router.push(`products/${onRowClicked.id}`)
    },
  },
}
</script>
