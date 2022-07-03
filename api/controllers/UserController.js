'use strict'

const pool = require('./../db.js');

function index(req,res){
    
    pool.query(`select * from User`,(err,results) => {
        if (err) throw err;
        res.status(200).json({
            status: "success",
            message: 'Order lists',
            data: results
        });
    })
}


function get(req,res){
    
    pool.query(`select * from User where IdUSer = ${req.params.userId}`,(err,results) => {
        if (err) throw err;
        res.status(200).json({
            status: "success",
            message: 'Order',
            data: results[0]
        });
    })
}




module.exports = {
    index,
    get
};