const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');
const logger = require('./utils/logger');
const blogRouter = require('./controllers/blogs');
const app = express();

mongoose.set('strictQuery', false);

logger.info('connecting to DB');

mongoose
	.connect(config.MONGODB_URI)
	.then(() => logger.info('DB connected successfully'))
	.catch((err) => logger.error('error connecting to DB', err.message));

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRouter);

module.exports = app;
