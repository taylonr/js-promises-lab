const customPromise = (id, cb) => {    
    new http.get(`http://localhost:8888/orderStatuses/${id}`, (res) => {
        if(res.statusCode === 200){
            res.on('data', (chunk) => {
                cb(JSON.parse(chunk));
            });
        } else {
            res.resume();
            cb(res.statusCode);
        }       
    });
};

module.exports = {
    customPromise,
}