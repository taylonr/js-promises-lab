const axios = require('axios');

module.exports = {
    loadOrders : (req, res) => {
        
        let statuses = axios.get("http://localhost:3000/orderStatuses");
        let users = axios.get("http://localhost:3000/users");
        let orders = axios.get('http://localhost:3000/orders?userId=2');
        let items = axios.get("http://localhost:3000/items");
        let addresses = axios.get("http://localhost:3000/addresses");
    
        let metadata = {};
        
        Promise.all()
        .then(() => {
        })
        .then((orders) => {            
        })
        .then(orders => {
          res.render('order', {orders: orders})
        });
    }
};