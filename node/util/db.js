const mongoosedb = require('mongoose')
// const MongoClient = mongodb.MongoClient;
const MongoConnect = (callback) => {
    mongoosedb.connect("mongodb+srv://mongodb:mongodb@maxdatabase.rycom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology:true})
    .then(res=>{
        console.log("database is connected")
        callback(res);
    }).catch(err => console.log(err))

} 
module.exports = MongoConnect;