const express = require("express");
const path = require("path");
const usersJson = require("./users.json");
const app = express();
const publicPath = path.join(__dirname, "./views");
const viewsPath = path.join(__dirname, "./views");
console.log("hi", __dirname);
app.set("views", viewsPath);

app.set("view engine", "hbs");

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log(`Server is running on`);
});

// app.get("/raw-html", (req, res) => {
//   res.render(`<h1>Welcome</h1>`);
// });
app.get("/users", (req, res) => {
  res.render("users", { users: JSON.stringify(usersJson, "utf-8") });
});

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello!!!",
    name: "Dana Cohen",
  });
});
