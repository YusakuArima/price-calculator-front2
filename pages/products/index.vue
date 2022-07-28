<template>
  <div class="container">
    <h1>商品一覧</h1>
    <template>
      <el-table :data="tableProductsApiData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="productName" label="Name" width="180"></el-table-column>
        <el-table-column prop="price" label="Price"></el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import Vue from 'vue'
import productsApi from '~/api/index'

export default Vue.extend({
  data() {
    return {
      tableProductsApiData: [],
    }
  },
  methods: {
    async getProductsApiData() {
      const res = await productsApi.getProductsApiData()
      this.tableProductsApiData = res;
    },
  },
  mounted() {
    this.getProductsApiData()
  },
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
