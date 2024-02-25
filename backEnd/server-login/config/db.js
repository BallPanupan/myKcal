const mongoose = require('mongoose');

mongoose.connect('mongodb://myKcal:myKcalService@localhost:27017/myKcal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
