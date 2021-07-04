const axios = require("axios");

let status = "";

const getOrders = () => {
    return axios.get('http://localhost:8888/orders');
};

const getAddressForOrder = (orderId) => {
    return axios.get(`http://localhost:8888/orders/${orderId}`);
};

const getInvalidOrder = () => {
    return axios.get('http://localhost:8888/orders/-1');
};

const setStatus = (orderId) => {
    return axios.get(`http://localhost:8888/orders/${orderId}`);
};

const resolvedPromise = () => {};

const rejectedPromise = () => {};

const loadPartialMetadata = () => {
    let categories = axios.get("http://localhost:8888/itemCategories");
    let statuses = axios.get("http://localhost:8888/orderStatuses");
    let userTypes = axios.get("http://localhost:8888/userTypes");
};

const loadAllMetadata = () => {
    let addressTypes = axios.get("http://localhost:8888/addressTypes");
    let categories = axios.get("http://localhost:8888/itemCategories");
    let statuses = axios.get("http://localhost:8888/orderStatuses");    
};

module.exports = {
    getAddressForOrder,
    getInvalidOrder,
    getOrders,
    loadAllMetadata,
    loadPartialMetadata,
    rejectedPromise,
    resolvedPromise,
    setStatus,
    status
}