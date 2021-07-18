const fs = require('fs');
const path = require('path');

const orders = require('./modules/orders')
const express = require('express');
const app = new express();
const port = 8080;

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('index'));

app.get('/store', (req, res) =>  res.render('store'));
app.get('/orders', orders.loadOrders);

app.listen(port, () => { console.log(`Carved Rock Order Service Running on ${port}!`) });
