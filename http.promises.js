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

module.exports = {
    getAddressForOrder,
    getInvalidOrder,
    getOrders,
    setStatus,
    status
}