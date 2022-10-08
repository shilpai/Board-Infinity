
const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/",(req,res)=>{
  res.send("Server running...")
})

app.get("/age",(req,res)=>{
  try {
    let year = req.query.year
    let month = req.query.month
    let date = req.query.date
    let name = req.query.name

    let dob = new Date(`${month}/${date}/${year}`)
    let currentDate = new Date()
    let age = parseInt((currentDate - dob)/(1000 * 60 * 60 * 24 * 365))

    let template = `<p>Hello ${name}</p><p>You are currently ${age} years old</p>`
    res.send(template)
  }
  catch(e){
    res.send("Error")
  }
})

app.get("/vegetables",(req,res)=>{
  fs.readFile('vegetables.json', function(err, data) {
    let jsonData = JSON.parse(data);
    res.json(jsonData);
  });
})

app.get("/metrics",(req,res)=>{
  try {
    let object = req.query.object;
    let metric = req.query.metric;
    let radius = req.query.radius;

    let area = 0;

    if(object === "sphere"){
      area = (4/3) * Math.PI * Math.pow(radius, 3);
    } 
    else if(object === "circle") {
      area = Math.PI * radius * radius;
    } else {
      area = 0;
    }

    let msg = `${metric} of ${object} is ${area.toFixed(2)}`;
    res.send(msg);
  }
  catch(e){
    res.send("Error")
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});