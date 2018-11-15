var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mysql = require("mysql");

var indexRouter = require("./routes/index");
var memory = require("./routes/memory");
var space = require("./routes/space");
var network = require("./routes/network");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(function(req, res, next) {
  res.locals.connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "react_sql"
  });
  res.locals.connection.connect();
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/memory", memory);
app.use("/space", space);
app.use("/network", network);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

let http = require("http");
module.exports = app;
let server = http.createServer(app);
server.listen(3001);
