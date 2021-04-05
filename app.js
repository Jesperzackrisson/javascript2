const express = require('express');
const app = express();
const cors = require('cors');

const productController = require('./controllers/productController');
const userController = require('./controllers/userController');

app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, Origin, X-Requested-With')
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'Get, POST, PUT, PATCH')
    }
    next();
})
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// CONTROLLERS
app.use('/api/products', productController);
app.use('/api/users', userController);



module.exports = app;