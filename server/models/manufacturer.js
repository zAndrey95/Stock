const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const manufacturerSchema = new Schema({
    name: String,
    country: String,
});

module.exports = mongoose.model('manufacturers', manufacturerSchema);