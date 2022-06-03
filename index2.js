const express = require ("express")
const app = express();

const  mysql = require ('mysql')

const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password: 'root',
    database: "FakeDatabase",
});


app.get('/select', (req,res)=>{

    db.query("SELECT * FROM countries", (err,result) => {
        if(err)   { 
        console.log(err);
        }
        res.send(result)
});

})
app.listen (5005, () => {
    console.log("server running")
});