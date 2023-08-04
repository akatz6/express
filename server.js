const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT),
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`We are listening on port ${PORT}`);
    }
  };

app.get("/", (req, res) => {
  console.log("In get");
  res.send("Hello");
});

app.get("/status", (req, res) => {
  console.log("In status");
  res.status(200).send("This is ok");
});

app.get("/hello/:name", (req, res) => {
  console.log(req.params.name);
  res.status(200).send(req.params.name);
});

// get-params?test=1
app.get("/get-params", (req, res) => {
  console.log(req.query);
  res.status(200).send(req.query.test);
});

app.get("/json", (req, res) => {
  const json = {
    name: "Aaron Katz",
    city: "Seattle",
  };
  res.status(200).send(json);
});
console.log("test");
