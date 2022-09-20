import logger from 'redux-logger';
import instance from './axiosClient';

const productApi = {
  getAll: async () => {
    console.log('products');
    return await instance.get('products');
  },
};
export default productApi;
