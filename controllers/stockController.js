const http = require('http').createServer(express());
const io = require('socket.io')(http);
const db = require('../models/stock')

io.on('connection', (socket) => {
 console.log('A user connected');
 // Listen for stock price update event
 socket.on('stockPriceUpdate', (data) => {
    io.emit('stockPriceUpdate', data); // Broadcast to all clients
 });

 socket.on('disconnect', () => {
    console.log('A user disconnected');
 });
});

exports.stocksBuy = async (req, res, next) => {
    try {

        // TODO Buy stock

        

        
    } catch (err) {
        next(err);
    }
};


exports.stocksSell = async (req, res, next) => {
    try {

        // TODO Buy stock

        
    } catch (err) {
        next(err);
    }
};


exports.transactions = async (req, res, next) => {
    try {
        let user_id = req.query.user_id;

        // Get all transaction from MYSQL --- testing purpose
        let queryString = `SELECT * From Transactions Where user_id=?`
        let result = await db.queryDatabase(queryString,
            [user_id]);

        res.send(result)

        
    } catch (err) {
        next(err);
    }
};