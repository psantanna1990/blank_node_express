const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
require("dotenv").config();

module.exports = function () {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    // adiciono a pasta controllers dentro da variável app
    consign({ verbose: false })
        .then("/src/controllers")
        .then("/src/consultas_rest")
        .into(app);

    return app;
};
