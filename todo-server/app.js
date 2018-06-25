const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require('./routes/routes');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

mongoose.connect('mongodb://localhost/ToDo_DB');
mongoose.connection.on('connected', ()=>{
	console.log('DB Connected Successfully.');
});
mongoose.connection.on('error', (error)=>{
	console.log('Error in DB Connection - ', error);
});

const SERVER_PORT = 3000;
app.listen(SERVER_PORT, () => {
	console.log('Server is Start on Port - ', SERVER_PORT);
});