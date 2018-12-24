// lamado a la configuracion del puerto

require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function(req, res) {

    res.json('Hola mundo desde la aplicacion donde se usa mongoDB');

})


//get de usuario
app.get('/usuario', (req, res) => {

    res.send('get Usuario');

})

// post de usuario

app.post('/usuario', (req, res) => {

    let body = req.body;
    res.json({
        body
    })

})

//Update de usuario

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;


    res.json({
        id
    });

})

//Delete
app.delete('/usuario', (req, res) => {
    res.send('Este es delate de usuario');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto:', 3000);
});