module.exports = function (app) {
    app.get("/hello", async (req, res) => {
        res.send("Hello World!!").status(200);
    });
};