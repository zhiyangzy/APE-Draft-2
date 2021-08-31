const express = require('express');
const router = express.Router();
const path = require('path');
const jsonSource ='./jsonbase/db.json';
const fs= require('fs');
const {response}= require('express');

router.get('/all', function(req,res){
    const dataBuffer = fs.readFileSync(jsonSource);
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    for (let i in data){
        console.log(data[i].EmployeeID, data[i].WST, data[i].WET, data[i].TWH, data[i].WD);
    };
    res.send(dataJSON);
})

router.get('/find/:nm', function(req,res){
    const findID = req.params.nm;
    console.log(findnID);
    const dataBuffer = fs.readFileSync(jsonSource);
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    const retFound =[];
    for (let i in data){
        console.log(data[i].EmployeeID, data[i].WST, data[i].WET, data[i].TWH, data[i].WD);
        if(data[i].EmployeeID == findID){
            retFound.push(data[i]);
            //if only find the first match
            break;
        }
    };
    res.send(JSON.stringify(retFound));
})

router.post('/update', function(req,res){
    const {updateID, updateWST, updateWET, updateTWH, updateWD} = req.body;
    const dataBuffer = fs.readFileSync(jsonSource);
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    const retFound =[];
    for (let i in data){
        console.log(data[i].EmployeeID, data[i].WST, data[i].WET, data[i].TWH, data[i].WD);
        if(data[i].EmployeeID == updateID){
            data[i].WST = updateWST,
            data[i].WET = updateWET,
            data[i].TWH = updateTWH,
            data[i].WD = updateWD;
            //if only find the first match
            break;
        }
    };
    const updatedJSON = JSON.stringify(data);
    fs.writeFileSync(jsonSource, updatedJSON);
    res.statusCode = 302;
    res.setHeader('Location','/admin.html')
    return res.end();
})

module.exports = router