const config = require("config");
const serverConfig = config.get("app.server");
const sequelize = require("./util/db");
const teacherRouter = require("./routes/teacherRouter")
const userRouter = require("./routes/userRouter")
const authRouter = require("./routes/authRouter")

var express = require("express");
var app = express();

var port = serverConfig.get("port");

app.use(express.json());
app.use("/teacher", teacherRouter);
app.use("/user", userRouter);
app.use("/", authRouter);

app.listen(port, () => {
    console.log("Server started and listening to port " + port);
});

// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
//  }).catch((error) => {
//     console.error('Unable to connect to the database: ', error);
//  });

sequelize
  .sync()
  .then(() => {
    console.info("Database initialization success");
  })
  .catch(err => {
    console.error("Database initialization error:", err);
  });