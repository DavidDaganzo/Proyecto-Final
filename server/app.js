
require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");
const app = express();


require("./config")(app);
require('./routes')(app)

const capitalize = require("./utils/capitalize");
const projectName = "server";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;



require("./error-handling")(app);

module.exports = app;
