const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
const cors = require("cors")
app.use(cors())

// ROUTER
const router = require("./router")
app.use("/", router)

// LISTEN
app.listen(port, () => console.log(`Listening on port ${port}`));