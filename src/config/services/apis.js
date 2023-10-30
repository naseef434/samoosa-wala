// api.js

import axios from 'axios';
import { addProductOrDistributor } from './serviceEndPoints';


// const axiosInstance = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//     headers: {
//         'Content-Type': 'application/json', // Set the content type you are sending
//         'Access-Control-Allow-Origin': '*', // This is a sample header; you may not need to set it here
//         // Add any other headers as needed
//     },
// });
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
        const response = await axios.post(addProductOrDistributor.saleOrReturn, payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};



const selectbydaterange = async (payload) => {
    try {
     
        const formattedStartDate = payload?.startDate.slice(0, -5);
        const formattedEndDate = payload?.endDate.slice(0, -5);
        const response = await axios.post(addProductOrDistributor.selectbydaterange, { fromDate:formattedStartDate, toDate: formattedEndDate });
        return response.data;
    } catch (error) {
        throw error;
    }
};






export { addProductOrDistributorFun, fetchAllProduct, saleOrReturnFunction, selectbydaterange };
