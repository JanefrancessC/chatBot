import express from "express";
import "dotenv/config" ;
import bodyParser from "body-parser";
import apiRouter from "./api.js";


const app = express();
const port = 3100;

app.use(express.json());
app.use(bodyParser.json());

app.use("/api", apiRouter);
const startServer = async () => {
  app
    .listen(port, () => console.log(`Listening on port ${port}`))
    .on("error", (err) => {
      console.log(err.message);
      process.exit(1);
    });
};

startServer();
