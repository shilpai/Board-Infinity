const express = require('express')
const fs = require("fs")
const cors = require("cors")

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
  res.send("Server running...")
})

// problem 1
app.post("/student/add",(req,res)=>{

  if(req.body.studentFirstName && req.body.collegeName && req.body.location){
    let studentData = {
      "studentFirstName": req.body.studentFirstName,
      "collegeName": req.body.collegeName,
      "location": req.body.location
     }

    let rawData = fs.readFileSync('students.json');
    let jsonData = JSON.parse(rawData)
    let newList = [...jsonData,studentData]

    fs.writeFileSync("students.json", JSON.stringify(newList,null,2),(err)=>{
      console.log(err)
    });

    res.json({"result":"Success"})
  } else {
    res.json({"result":"Failed"})
  }
  
})

// problem 1
app.get("/student/getDetails",(req,res)=>{

    let rawData = fs.readFileSync('students.json');
    let jsonData = JSON.parse(rawData)

    res.json(jsonData)
})

// problem 2
app.get("/student/studentsList",(req,res)=>{

  let rawData = fs.readFileSync('students.json');
  let jsonData = JSON.parse(rawData)

  let results = []

  jsonData.forEach(item => {
    results.push(item["studentFirstName"])
  });

  res.json({"results":results})
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});