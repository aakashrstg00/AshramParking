//require mongoose
//connect to localhost:port/dbname
//export it
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ashramCars");
module.exports = mongoose;