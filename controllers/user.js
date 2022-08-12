require("dotenv").config({ path: "../config.env" });
const dbo = require("../db/conn");
const userModel = require("../models/user");
const ObjectId = require("mongodb").ObjectId;

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
};

function formatDate(date) {
    return (
        [   date.getFullYear()
            ,padTo2Digits(date.getMonth() + 1)
            ,padTo2Digits(date.getDate())
        ].join('-') +
        ' ' +
        [   padTo2Digits(date.getHours())
            ,padTo2Digits(date.getMinutes())
            ,padTo2Digits(date.getSeconds())
        ].join(':')
    );
};

const userControll = {

    getUserAll: (req, res) => {
        const db_conn = dbo.getDB("mystart");
        const db_coll = db_conn.collection("user");

        userModel.getUserAll(res, db_coll);
        console.log(req.method, res.statusCode, req.url);
    },

    getUserbyId: (req, res) => {
        const db_conn = dbo.getDB("mystart");
        const db_coll = db_conn.collection("user");
        const query = { _id: ObjectId(req.params.id) };

        userModel.getUser(query, res, db_coll);
        console.log(req.method, res.statusCode, req.url);
    },

    readUser: (req, res) => {
        const db_conn = dbo.getDB("mystart");
        const db_coll = db_conn.collection("user");
        const query = {
            username: req.body.username
            ,password: req.body.password
        };

        userModel.getUser(query, res, db_coll);
        console.log(req.method, res.statusCode, req.url);
    },
    
    createUser: (req, res) => {
        const db_conn = dbo.getDB("mystart");
        const db_coll = db_conn.collection("user");
        let now = formatDate(new Date());
        const userObj = {
            username: req.body.username
            ,password: req.body.password
            ,name: req.body.name
            ,adminFlag: req.body.adminFlag
            ,created_at: now
            ,updated_at: now
        };
        
        userModel.createUser(userObj, res, db_coll);
        console.log(req.method, res.statusCode, req.url);
    },

    updateUser: (req, res) => {
        const db_conn = dbo.getDB("mystart");
        const db_coll = db_conn.collection("user");
        let now = new Date();
        const userObj = {};
        const setData = userObj.$set = req.body;
        setData.updated_at = formatDate(now)
        const query = { _id: ObjectId(req.params.id) };
        
        userModel.updateUpdate(query, userObj, res, db_coll);
        console.log(userObj);
        console.log(req.method, res.statusCode, req.url);
    },

    deleteUser: (req, res) => {
        const db_conn = dbo.getDB("mystart");
        const db_coll = db_conn.collection("user");
        const query = { _id: ObjectId(req.params.id) };

        userModel.deleteUser(query, res, db_coll);
        console.log(req.method, res.statusCode, req.url);
    },
};

module.exports = userControll;