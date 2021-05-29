// eslint-disable-next-line no-unused-vars
const app = require("./config/custom-express")();
const logger = require("./util/logger");

// define que estou ouvindo em determinada porta
app.listen(3000, () => {
    logger.logger.info("Servidor rodando na porta 3000");
});
