const mysql = require("mysql2");

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Chirag.1234",
    database:"stockPrices"
})

async function queryDatabase(query,param){
    return new Promise((resolve,reject)=>{
        pool.query(query,param,(error,result)=>{
            if(error){
                return reject(error)
            }
            resolve(result)
        })
    })
}

module.exports = {queryDatabase}