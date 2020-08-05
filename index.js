const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const { urlencoded, json } = require('body-parser');
const controller = require('./notes/controller')

const app = express();

app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api/notes', controller);

app.get('/', (req, res) => {
	res.send(`<h1>Hello</h1>`)
})

const connect = (url) => {
	return mongoose.connect(url);
};

connect('mongodb://localhost:27017/practice')
	.then(() => {
		app.listen(5000, () => {
      console.log('Running on port 5000')
    });
	})
	.catch((e) => console.error(e));
