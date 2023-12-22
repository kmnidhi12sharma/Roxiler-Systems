const mongoose  = require('mongoose');

//uri = "mongodb://nidhisharmacsit2019:gmailclone2021N@ac-qemwjtk-shard-00-00.noajv9q.mongodb.net:27017,ac-qemwjtk-shard-00-01.noajv9q.mongodb.net:27017,ac-qemwjtk-shard-00-02.noajv9q.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-n1it2a-shard-0&authSource=admin&retryWrites=true&w=majority"


const connectDB  = (uri)=>{
    console.log("database connected successfully");
    return mongoose.connect(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
}

module.exports = connectDB;