const app = require('./app');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 9999;


const serverURI = 'http://localhost:' + PORT;
const mongoURI = 'mongodb+srv://Jesper:Zacke1324@cluster0.3xkh2.mongodb.net/REST?retryWrites=true&w=majority'


app.listen(PORT, () => console.log('Webserver: ' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to DB'));