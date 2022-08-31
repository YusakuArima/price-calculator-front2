<template>
  <div>
    <b-table :data="tableProductsApiData" :columns="columns" @click="clicked"></b-table>
  </div>
</template>

<script>
import productsApi from '~/api/index'

export default {
  async asyncData() {
    const res = await productsApi.getProductsApiData()
    return {
      tableProductsApiData: res,
    }
  },
  data() {
    return {
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
  methods: {

    clicked(onRowClicked) {
      this.$router.push(`products/${onRowClicked.id}`)
    },
  },
}
</script>
