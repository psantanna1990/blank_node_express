module.exports = function (app) {
    app.get("/health", async (req, res) => {
        res.send("SUCCESS").status(200);
    });
};