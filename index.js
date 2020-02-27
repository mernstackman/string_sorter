const app = require("express")();
const path = require("path");
const data = require("./utils/operations");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", { data });
});

app.listen(3000, function() {
  console.log(
    "Open: http://localhost:3000 in your browser to see the sorted names"
  );
  console.log("Press Ctrl+C (or Cmd+C on Mac) to quir this app.");
  console.log(
    "You can also see the sorted names in 'sorted-names-list.txt' file in the root folder."
  );
});
