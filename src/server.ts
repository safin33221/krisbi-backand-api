import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server

const startServer = async () => {
    try {
        await mongoose.connect('mongodb+srv://safin33221:0d04s9VNvxNlmL8a@cluster0.blz8y.mongodb.net/krisbi?retryWrites=true&w=majority&appName=Cluster0')
        console.log('db is connected');

        server = app.listen(5000, () => {
            console.log(`server is listing port on ${5000}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer()




process.on("SIGINT", () => {
    console.log("SIGINT signal  received ....sever shuting down");
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
})


process.on("unHandleRejection", (err) => {
    console.log("unHandle Rejection detected", err);
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
})
process.on("uncaughtException", (err) => {
    console.log("Un caught exception detected", err);
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
})