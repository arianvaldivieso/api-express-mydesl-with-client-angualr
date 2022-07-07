'use strict'

const pool = require('./../db.js');

function index(req,res){
    
    pool.query(`select orders.*,User.Name as user from orders inner join User on User.IdUser = orders.IdUser where orders.IsDeleted != 1`,(err,results) => {
        if (err) throw err;
        res.status(200).json({
            status: "success",
            message: 'Order lists',
            data: results
        });
    })
}


function get(req,res){
    
    const query = `select avg(OrdersProducts.ValueUnit) as avergarePrice,orders.* , User.Name as user
    from orders 
    inner join User on User.IdUser = orders.IdUser
    left join OrdersProducts on orders.IdOrder = OrdersProducts.IdOrder  where orders.IdOrder = ${req.params.orderId}` 

    pool.query(query,(err,results) => {
        if (err) throw err;
        res.status(200).json({
            status: "success",
            message: 'Order',
            data: results[0]
        });
    })
}

function getProducts(req,res){
    pool.query(`select * from OrdersProducts where IdOrder = ${req.params.orderId} and IsDelete != 1`,(err,results) => {
        if (err) throw err;
        res.status(200).json({
            status: "success",
            message: 'Order lists',
            data: results
        });
    })
}


function store(req,res){

    let payload = req.body;
    payload.DateTime = new Date(payload.DateTime);
    payload.DateCreated = new Date();
    payload.IdUser= req.token; 

    pool.query(`insert into orders set ?`, payload, (err, results) =>  {
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: 'Order Created',
            id: results.insertId
        });
    });

    
}

function update(req,res){

    let aux = req.body;
    aux.DateTime = aux.DateTime;

    //aux.DateCreated = new Date(aux.DateCreated);

    let payload = []
    for(let i in aux){
        payload.push(aux[i]);
    }

    pool.query(`
        update orders set IdUser = ${aux.IdUser},OrderNumber = ${aux.OrderNumber},DateTime = '${aux.DateTime}',ProviderName = '${aux.ProviderName}',Observation = '${aux.Observation}',TotalValue = ${aux.TotalValue},Status = '${aux.Status}' where idOrder = ${req.params.orderId}
    `, payload, (err, results) =>  {
        if (err) throw err;
        res.status(200).json({
            status: "success",
            message: 'Order Updated',
            changedRows: results.changedRows
        });
    });

    
}

function destroy(req,res){
    pool.query(`update orders set IsDeleted = '1' where IdOrder = ${req.params.orderId}`,(err,results) => {
        if (err) throw err;
        res.status(200).json({
            status: "success",
            message: 'Order Deleted',
            affectedRows: results.affectedRows
        });
    });
}

module.exports = {
    index,
    get,
    getProducts,
    store,
    update,
    destroy
};