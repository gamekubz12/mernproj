const mongodb = require("mongodb").MongoClient;

const uri = process.env.ATLAS_URI;
const client = new mongodb(
    uri
    ,{
        useNewUrlParser: true
        ,useUnifiedTopology: true
    }
);

let db_;

module.exports = {
    connectServer: (callback) => {
        client.connect(
            (err, db) => {
                if (db) {
                    db_ = db.db("mystart")
                    console.log("Successfully connected to MongoDB.")
                }
                return callback(err);
            }
        );
    }
    ,getDB: () => {
        return db_
    }
};