// api.js

import axios from 'axios';
import { addProductOrDistributor } from './serviceEndPoints';

const addProductOrDistributorFun = async (category, inputname) => {

    try {
        const response = await axios.post(addProductOrDistributor.AddProductOrDist, { [category]: inputname });
        return response.data;
    } catch (error) {
        throw error;
    }
};


const fetchAllProduct = async () => {

    try {
        const response = await axios.get(addProductOrDistributor.fetchAllDistributor);
        return response.data;
    } catch (error) {
        throw error;
    }
};


const saleOrReturnFunction = async (payload) => {

    try {
        const response = await axios.post(addProductOrDistributor.saleOrReturn,  payload );
        return response.data;
    } catch (error) {
        throw error;
    }
};




export { addProductOrDistributorFun,fetchAllProduct,saleOrReturnFunction };
