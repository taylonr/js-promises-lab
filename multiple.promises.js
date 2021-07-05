const axios = require("axios");

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
    loadAllMetadata,
    loadPartialMetadata
}