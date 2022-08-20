const Express = require("express");
const app = Express();
const cors = require("cors");
require("dotenv").config();
const { createServer } = require("http");
const httpServer = createServer(app);
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(Express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use(Express.json());

// routes setup
const filesRoute = require("./app/routes/files.routes");
app.use("/api/", filesRoute);

httpServer.listen(process.env.APP_PORT, () => {
  console.log("app running at port " + process.env.APP_PORT);
});
