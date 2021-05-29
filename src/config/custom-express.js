const express = require("express");
const consign = require("consign");

module.exports = function () {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    consign({ verbose: false })
        .then("/src/controllers")
        .into(app);

    return app;
};
