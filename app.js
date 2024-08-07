const express = require("express");
const cors = require("cors")
const request = require("request")

const allRoutes = require('./routes/allRoutes')

const app = express();

app.use(cors("*"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/users', allRoutes);

app.get("/",(req,res)=>{
    res.send("Hi there");
})


// Testing to get stock price and structure of response
app.get("/getStockData",(req,res)=>{
    
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=1min&apikey=TK9AV602GVZHI5Q2';

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
});
});

app.listen(3000,()=>{
    console.log("App is listening on port 3000");
});