var mongoose = require('mongoose');
var blobSchema = new mongoose.Schema({
name: String,
Rollno: Number,
dob: { type: Date, default: Date.now },

});
mongoose.model('Blob', blobSchema);