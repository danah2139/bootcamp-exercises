require("./src/db/mongoose");
const express = require("express");
const cors = require("cors");

const userRouter = require("./src/routers/user");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(userRouter);
app.use(cors());

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
