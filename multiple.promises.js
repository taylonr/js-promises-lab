const axios = require("axios");

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
    loadAllMetadata,
    loadPartialMetadata
}