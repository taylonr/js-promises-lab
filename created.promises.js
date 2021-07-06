const http = require('http');

const customPromise = (id) => {
    return new Promise((resolved, rejected) => {
        new http.get(`http://localhost:8888/orderStatuses/${id}`, (res) => {
            if(res.statusCode === 200){
                res.on('data', (chunk) => {
                    resolved(JSON.parse(chunk));
                });
            } else {
                res.resume();
                rejected(res.statusCode);
            }       
        });
    });
};

module.exports = {
    customPromise,
}