import instance from './axiosClient';

const productApi = {
  getAll: async () => {
    console.log('products');
    return await instance.get('products');
  },
  getCategories: async () => {
    console.log('categories');
    return await instance.get('products/categories');
  },
};
export default productApi;
