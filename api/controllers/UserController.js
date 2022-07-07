'use strict'

var jwt = require('jsonwebtoken');

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


function login(req,res){

    pool.query(`select * from User where email = '${req.body.email}'`,(err,results) => {
        if (err) throw err;

        if(results.length){
            var token = jwt.sign({ data: results[0].IdUser }, '123456789');

            return res.status(200).json({
                status: "success",
                message: 'Order',
                data: {
                    id: results[0].IdUser,
                    token: token
                }
            });
        }else{
            return res.status(404).json({
                status: "fail",
                message: 'fail login',
                
            }); 
        }


        
    })


}




module.exports = {
    index,
    get,
    login
};