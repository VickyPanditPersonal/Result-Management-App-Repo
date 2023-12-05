const config = require("config");
const serverConfig = config.get("app.server");
const sequelize = require("./util/db");
const teacherRouter = require("./routes/teacherRouter")
const userRouter = require("./routes/userRouter")
const authRouter = require("./routes/authRouter")
const studentRouter = require("./routes/studentRouter")

var express = require("express");
var app = express();

var port = serverConfig.get("port");

app.use(express.json());
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.use("/user", userRouter);
app.use("/", authRouter);

app.listen(port, () => {
    console.log("Server started and listening to port " + port);
});

sequelize
  .sync()
  .then(() => {
    console.info("Database initialization success");
  })
  .catch(err => {
    console.error("Database initialization error:", err);
  });

  