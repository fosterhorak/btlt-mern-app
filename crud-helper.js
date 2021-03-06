// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Exercise = require('./models/exercise');
const Log = require('./models/log');

// Local variables will come in handy
let u, e, l;

