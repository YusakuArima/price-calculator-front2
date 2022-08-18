import axios from 'axios'

const productsApi = axios.create({
  baseURL: 'http://localhost:4000/api/products',
  responseType: 'json',
})

export default {
  async getProductsApiData() {
    try {
      const response = await productsApi.get('')
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
  //  async getCartsData(id) {
  //    try {
  //      const response = await cartsApi.get(`/${id}`);
  //      return response.data;
  //    } catch (error) {
  //      console.log(error);
  //    }
  // }
}
