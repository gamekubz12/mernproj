require("dotenv").config({ path: "../config.env" });

const userModel = {

    getUserAll: (res, coll) => {
        const data = coll.find({});

        data.toArray(
            (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ err: err });
                }
                res.status(200).json({ result });
            }
        );
    },

    getUser: (q, res, coll) => {
        coll.findOne(
            q
            ,(err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ err: err });
                }
                res.status(200).json({ result });
            }
        );
    },
    
    createUser: (obj, res, coll) => {
        coll.insertOne(
            obj
            ,(err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ err: err });
                }
                res.status(200).json({
                    create: true
                    ,data: obj
                    ,result: result
                });
            }
        );
    },

    updateUpdate: (q, val, res, coll) => {
        coll.updateOne(
            q
            ,val
            ,(err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ err: err });
                }
                res.status(200).json({
                    update: true
                    ,id: q._id
                    ,result: result
                });
            }
        );
    },

    deleteUser: (q, res, coll) => {
        coll.deleteOne(
            q
            ,(err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ err: err });
                }
                res.status(200).json({
                    delete: true
                    ,id: q._id
                    ,result: result
                });
            }
        );

    },
};

module.exports = userModel;