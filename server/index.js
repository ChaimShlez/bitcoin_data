const express = require("express");
const cors = require('cors');
require('dotenv').config();

const bitcoinController = require("./controllers/bitcoin-controller");
const server = express();


server.use(cors());


server.use("/bitcoinData", bitcoinController);


server.listen(process.env.REST_API_PORT, () => console.log(`Listening on ${process.env.REST_API_PORT}`));
