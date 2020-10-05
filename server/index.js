require('dotenv').config();
const massive = require ('massive');
const axios = require ('axios');
const controller = require ('./controller');
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const express = require ('express');
const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db is connected securely');
})


app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));