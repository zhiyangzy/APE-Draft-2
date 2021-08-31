const express = require('express');
const router = express.Router();

const admin =[{userid:'admin1', password:'pwd'},
        {userid:'admin2', password:'123'}
        ];

router.get('/adminInfo', (_,res)=>{
    res.json({ok:true, admin});
})
// npm start, open up your broswer, enter in the url
//localhost:3000/admin{the \??? in app.use}/adminInfo

router.get('/admin/:id', (req,res)=>{
    const {id} = req.params;
    //look into the parameters /:id, look for id 
    //and assign a variable id to it
    console.log("user look up for", id);
    const thisadmin = admin.filter((a)=>
    a.userid==id)[0];
    res.json({ok:true, thisadmin});
})

//create a API (application programmable interface)
//for insert from a post method from a form in html
router.post('/add',function(req,res){
    const {userid, password} =req.body;
    if(userid && password){
        admin.push({userid,password});
        console.log("new admin added");
        res.send("new admin added with admin id" +
                               req.body.userid);
    }
})

// npm start, open up your broswer, enter in the url
//localhost:3000/{the \??? in app.use}/admin/admin2


module.exports = router

