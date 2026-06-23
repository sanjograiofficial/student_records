import express from "express";
import dotenv from "dotenv/config";
import routes from "./routes/routes.js";
import errorHandler from "./middlewares/errorHandler.js";
import {
  checkAPIKeyInHeader,
  checkXRoleHeaderMiddleWare,
} from "./middlewares/header.middleware.js";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("req url: " + req.url);
  if (req.url == "/") {
    return res.json({
      errorMsg: "This url can't be accessed",
    });
  }
  next();
});

app.use(checkXRoleHeaderMiddleWare);

app.use("/apikey", checkAPIKeyInHeader, (req, res) => {
  res.status(200).json({
    message: "Api key called",
    data: req.headers["x-api-key"],
  });
});

let port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({
    message: "Server started",
  });
});
app.use("/", routes);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server started at port: ${port}. http://localhost:${port}`);
});
