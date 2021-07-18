const axios = require('axios');

module.exports = {
    loadOrders : (req, res) => {
        
        let statuses = axios.get("http://localhost:8888/orderStatuses");
        let users = axios.get("http://localhost:8888/users");
        let orders = axios.get('http://localhost:8888/orders?userId=2');
        let items = axios.get("http://localhost:8888/items");
        let addresses = axios.get("http://localhost:8888/addresses");
    
        let metadata = {};
        
        Promise.all([statuses, users, orders, items, addresses])
        .then(([stats, users, myOrders, items, addresses]) => {
            metadata.statuses = stats.data;
            metadata.users = users.data;
            metadata.items = items.data;
            metadata.addresses = addresses.data;
            return myOrders.data;
        })
        .then((orders) => {
            return orders.map(o => {
                return {
                  id: o.id,
                  status: metadata.statuses.find(s => s.id === o.orderStatusId).description,
                  address: metadata.addresses.find(a => a.id === o.shippingAddress),
                  items: o.itemIds.map(itemId => {
                    return metadata.items.find(i => i.id === itemId)
                  })
                }     
            });
        })
        .then(orders => {
          res.render('order', {orders: orders})
        });
    }
};