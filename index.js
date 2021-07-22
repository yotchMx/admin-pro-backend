require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//Crear el servidor Express
const app = express();

// Configurar cors
app.use(cors());


//Base de datos
dbConnection();
console.log(process.env);

// ptoWtDQHoCQpEwxj
// main_user


app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.json({
        ok: true,
        msg: 'Hola mundo'
    })
})
app.listen(process.env.PORT, () => console.log(`Example app listening on port port!` + process.env.PORT))