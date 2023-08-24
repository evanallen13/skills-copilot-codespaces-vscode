// Create web server application

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Import database
const db = require('./db');
// Import routes
const commentRoutes = require('./routes/comments');

// Create web server application
const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/comments', commentRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Connect to database
db.connect();


