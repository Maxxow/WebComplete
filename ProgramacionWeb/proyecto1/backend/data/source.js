const {Product} = require("../models/Products");
const {DataSource} = require("typeorm")
require("reflect-metadata");

const AppDataSource = new DataSource({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"123",
    database:"tienda",
    entities:[Product],
});

modules.exports - {AppDataSource}