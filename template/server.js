const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

/*
const mongoose = require('mongoose');  
const connectionString = 'mongodb+srv://SamaraCassie:Ikywm9TpxzGdpA6X@firstcluster.tf5bbhx.mongodb.net/test';
mongoose.connect(connectionString);
mongoose.set('strictQuery', true); //a opção `strictQuery` será alterada de volta para `false` por padrão no Mongoose 7
*/
//const database = 'NEW_DATABASE_NAME';
//const collection = 'NEW_COLLECTION_NAME';

// Create a new database.
//use(database);

// Create a new collection.
//db.createCollection(collection)

app.use(express.urlencoded({ extended: true}));
app.use(express.static('./public'))
app.use(routes);


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(3003, () => {
    console.log('Acessar http://localhost:3003');
});