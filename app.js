const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
import cors from "cors";
require("dotenv").config();
const console = require("tracer").colorConsole();

//Routes
import testing from "./routes/testing";
var app = express();

//static folder for ejs
app.use(express.static("storage"));
//ejs
app.use(expressLayouts);
app.set("view engine", "ejs");

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
//routes
app.use("/", testing);
// app.use('/', require('./routes/employee'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Serving on port: ${PORT}`));
