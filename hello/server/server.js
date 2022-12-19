require('dotenv').config();
const express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors");
const { registerController } = require('./src/configs/controller.config');
const { sequelize } = require('./src/configs/db.config');

const host = process.env.HOST;
const port = process.env.PORT;
const server = express();

try {

    server.use(cors());
    server.use(express.json());
    // register Controller
    registerController(server);

    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    // Create connection to database(MySQL)
    sequelize(process.env.POSTGRES_HOST, process.env.POSTGRES_PORT, process.env.POSTGRES_DB, process.env.POSTGRES_USERNAME, process.env.POSTGRES_PASSWORD);

   
    server.listen(port, () => {
        console.log(`Example app listening at http://${host}:${port}`); 
    });

} catch (err) {
    throw err;
}
