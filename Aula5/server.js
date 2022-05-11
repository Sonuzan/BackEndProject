const express = require('express');
const fs = require('fs');
const { request } = require('http');
const app = express();
const port = 3000;

//
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



function readFile(path){
    var fileContent = fs.readFileSync(path, "utf-8");
    return fileContent;
}


// Endpoint
// Responde a um pedido HTTP GET(leitura)
// Primeiro Argumento - Rota ou PATH do Endpoint
// Segundo Argumento - Funcção ou código que será executado quando este Endpoint for invocado
app.get('/users/:id', (req, res) => {
  var id = req.params.id;

  var person = personObject['person'+ id];

  if (person == undefined) {
    res.send("This person doesn't exist! Try giving birth to them maybe?");
  }
  else{
    res.send(person);
  }
});

app.post('/users', (req, res) => {
  var person = req.body;

  //Quantidade de chaves num objeto
  var size = Object.keys(personObject).length;

  //Incrementa 1 valor ao tamanho anterior
  size++;

  //Atribuir um ID igual ao tamanho
  person.id = size;

  //Define a nova chave com nome "person" e o valor de ID atribuido anteriormente
  personObject['person'+ person.id] = person;

  //Enviar o ID da pessoa inserida
  res.send(person.id + "");
});

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var personData = req.body;

  var person = personObject['person'+ id];

  if (person == undefined) {
    res.send("This person doesn't exist! Try giving birth to them maybe?");
  }
  else{
    
  }
});

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;

  var person = personObject['person'+ id];

  if (person == undefined) {
    res.send("This person doesn't exist! Try giving birth to them maybe?");
  }
  else{
    delete personObject['person'+ id];
    res.send("This person has been deleted! Shame.")
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

var personString = readFile('./persons.json');
var personObject = JSON.parse(personString);