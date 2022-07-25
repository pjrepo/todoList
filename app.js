const express = require("express");

const app = express();

const routes = require("./routes/tasks");

const connectDB = require("./db/connect");

require("dotenv").config();

const notFound = require("./middleware/not-found");

const errorHandlerMiddleware = require("./middleware/not-found");

app.use(express.static("./public"));

app.use(express.json());

app.use("/api/v1/tasks", routes);

app.use(notFound);

app.use(errorHandlerMiddleware);

app.use((req, res) => {});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  } catch (erreor) {
    console.log(error);
  }
};

start();
