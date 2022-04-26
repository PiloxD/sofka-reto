const express = require('express');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const mongoose = require('./db/database');
const helmet = require('helmet');
const askRoutes = require('./routes/ask.routes')
const playerRoutes = require('./routes/player.routes')


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Middlewares
const corsOptions = {
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes 

app.use('/api/ask', askRoutes);
app.use('/api/player', playerRoutes);




// Listening 
app.listen(8080, () => console.log('Server ON port 8080'.rainbow));

