const app = require("express")();
const path = require("path");
const data = require("./utils/operations");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", { data });
});

app.listen(3000);
