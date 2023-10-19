import logger from "utils/logger";
import { app } from "./app";
import { port } from "./utils/env";
require("dotenv").config();


async function launchApp(){
    const server = app.listen(port, (): void => {
        logger.info(`Listening on port ${process.env.PORT || 3000}`);
    })

    server.setTimeout(30*1000)
    return "Server is running"
}


launchApp().then(logger.info).catch(error =>{
    logger.error(error.message)
    process.exit(1)
})