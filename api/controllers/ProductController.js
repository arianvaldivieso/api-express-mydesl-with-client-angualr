'use strict'

const pool = require('./../db.js');

function index(req,res){
    
    pool.query(`select * from OrdersProducts where IsDelete != 1`,(err,results) => {
        if (err) throw err;
        res.status(200).json({
            status: "success",
            message: 'Products lists',
            data: results
        });
    })
}

function get(req,res){
    
    pool.query(`select * from OrdersProducts where IdOrdersProducts = ${req.params.productId}`,(err,results) => {
        if (err) throw err;
        res.status(200).json({
            status: "success",
            message: 'Order',
            data: results[0]
        });
    })
}



function store(req,res){

    let payload = req.body;
   
    pool.query(`insert into OrdersProducts set ?`, payload, (err, results) =>  {
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: 'Prouct Created',
            id: results.insertId
        });
    });


}

function update(req,res){

    let payload = req.body;
     

    pool.query(`update OrdersProducts set ValueUnit = ${payload.ValueUnit},Unit = '${payload.Unit}',Description = '${payload.Description}',Quantity = ${payload.Quantity},QtyBox = ${payload.QtyBox},Weight = ${payload.Weight},Volumen = ${payload.Volumen},Mark = '${payload.Mark}',Status = ${payload.Status} where IdOrdersProducts = ${req.params.productId}`, payload, (err, results) =>  {
        if (err) throw err;
        res.status(200).json({
            status: "success",
            message: 'Product Updated',
            changedRows: results.changedRows
        });
    });

    
}

function destroy(req,res){
    pool.query(`update OrdersProducts set IsDelete = '1' where IdOrdersProducts = ${req.params.productId}`,(err,results) => {
        if (err) throw err;
        res.status(200).json({
            status: "success",
            message: 'Product Deleted',
            affectedRows: results.affectedRows
        });
    });
}

module.exports = {
    index,
    get,
    store,
    update,
    destroy
};