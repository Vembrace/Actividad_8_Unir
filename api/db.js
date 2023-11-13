const { MongoClient, ServerApiVersion } = require("mongodb");

//mongoose.connect('mongodb://0.0.0.0:27017/inmuebleDB?directConnection=true');
const uri = "mongodb://0.0.0.0:27017";
const mongo = new MongoClient(uri);

module.exports = mongo;