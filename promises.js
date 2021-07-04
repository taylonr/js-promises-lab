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

const resolvedPromise = () => {
    return new Promise(resolve => {
        resolve("Hello");
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        reject("Failed");
    });
};

const loadPartialMetadata = () => {
    let categories = axios.get("http://localhost:8888/itemCategories");
    let statuses = axios.get("http://localhost:8888/orderStatuses");
    let userTypes = axios.get("http://localhost:8888/userTypes");

    return Promise.all([categories, statuses, userTypes])
    .then(([cats, stats, users]) => {
        return [].concat(cats.data, stats.data, users.data);
    });
};

const loadAllMetadata = () => {
    let addressTypes = axios.get("http://localhost:8888/addressTypes");
    let categories = axios.get("http://localhost:8888/itemCategories");
    let statuses = axios.get("http://localhost:8888/orderStatuses");

    return Promise.allSettled([addressTypes, categories, statuses])
    .then(([addresses, cats, stats]) => {
        return [].concat(addresses.status, cats.status, stats.status);
    });
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