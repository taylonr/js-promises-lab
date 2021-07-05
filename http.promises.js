const axios = require("axios");

let status = "";

const getOrders = () => {
    return axios.get('http://localhost:8888/orders')
    .then(({data}) => {
        return data;
    });
};

const getAddressForOrder = (orderId) => {
    return axios.get(`http://localhost:8888/orders/${orderId}`)
    .then(({data}) => {
        return axios.get(`http://localhost:8888/addresses/${data.shippingAddress}`);
    })
    .then(({data}) => {
        return data;
    });
};

const getInvalidOrder = () => {
    return axios.get('http://localhost:8888/orders/-1')
    .catch(() => {
        return new Error();
    });
};

const setStatus = (orderId) => {
    return axios.get(`http://localhost:8888/orders/${orderId}`)
    .then(({data}) => {
        return data;
    })
    .catch(() => {
        return new Error();
    })
    .finally(() => {
        status = "done";
    });
};

module.exports = {
    getAddressForOrder,
    getInvalidOrder,
    getOrders,
    setStatus,
    status
}