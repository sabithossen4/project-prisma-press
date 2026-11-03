import app from "./app";
import config from "./config";
import { prisma } from "./lib/prisma";
import "dotenv/config";

async function main(){

    const PORT = config.port; 

    try{
        // await  prisma.$connect();
        // console.log("Database connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.error("Error starting the server:", error);
        // aswit prisma.$disconnect();
        process.exit(1);
    }

}
main();