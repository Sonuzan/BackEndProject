const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Express Server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//SQL Connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'people',
})

connection.connect();




app.get('/persons', (req, res) => {
    connection.query('SELECT * FROM persons', function(err,rows,fields){
        if (err) throw err;
        
        res.send(rows);
    })
});

app.get('/persons/:age/:profession', (req, res) => {
    var age = req.params.age;
    var profession = req.params.profession;

    connection.query('SELECT * FROM persons WHERE age = ? and profession = ?',[age,profession], function(err,rows,fields){
       if (err) throw err;
       
       res.send(rows);
    })
});

app.get('/persons/:id', (req, res) => {
    var id = req.params.id;
    
    if (id == undefined) {
        res.send("This person doesn't exist! Try giving birth to them maybe?");
    }
    else{
        connection.query('SELECT * FROM persons WHERE id = ?',[id], function(err,rows,fields){
            if (err) throw err;
            
            res.send(rows);
        })
    }
});

app.post('/persons', (req, res) => {
    var personBody = req.body;
    
    connection.query('INSERT persons SET ?;', [personBody], function(err,rows,fields){
        if (err) throw err;
        
        res.send("Person: " + rows.insertId);
    })
});

app.delete('/persons', (req, res) => {
    var idBody = req.body.id;
  
    if (idBody == undefined) {
        res.send("This person doesn't exist! Try giving birth to them maybe?");
    }
    else{
        connection.query('DELETE FROM persons WHERE id = ?',[idBody] ,function(err,rows,fields){
            if (err) throw err;
            
            res.send("Affected Rows: " + rows.affectedRows);
        })
    }
});

app.delete('/persons/:id', (req, res) => {
    var idBody = req.params.id;
  
    if (idBody == undefined) {
        res.send("This person doesn't exist! Try giving birth to them maybe?");
    }
    else{
        connection.query('DELETE FROM persons WHERE id = ?',[idBody] ,function(err,rows,fields){
            if (err) throw err;
            
            res.send("Affected Rows: " + rows.affectedRow);
        })
    }
});

app.put('/persons/:id', (req, res) => {
    var id = req.params.id;
    var personData = req.body;
  
    if (id == undefined) {
      res.send("This person doesn't exist! Try giving birth to them maybe?");
    }
    else{
        connection.query('UPDATE persons SET ? WHERE id = ?;',[personData,id], function(err,rows,fields){
            if (err) throw err;
            
            res.send(rows);
         })
    }
});