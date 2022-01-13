
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const { connect } = require("./src/utils/database/db");


const fut = require("./src/api/routes/fut.routes");

connect();

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());


app.use("/public", express.static("public"));


app.use("/api", fut);

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Algo ha salido mal"));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
