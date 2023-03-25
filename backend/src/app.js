const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.get("/read", function (req, res) {
  fs.readFile("./webshopItems.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    return res.end(jsonString);
  });
});

app.post("/create", async (req, res, next) => {
  const { name, descript, quantity } = req.body;

  let data = {
    name: name,
    descript: descript,
    quantity: quantity,
  };

  fs.readFile(
    "./webshopItems.json",
    "utf8",
    function readFileCallback(err, items) {
      if (err) {
        console.log(err);
      } else {
        let obj = JSON.parse(items);
        obj.items.push(data);
        let json = JSON.stringify(obj);
        fs.writeFile("./webshopItems.json", json, "utf8", function (err) {
          if (err) throw err;
          console.log("complete");
          res.json({ ok: true });
        });
      }
    }
  );
});

app.post("/delete", async (req, res, next) => {
  fs.readFile(
    "./webshopItems.json",
    "utf8",
    function readFileCallback(err, items) {
      if (err) {
        console.log(err);
      } else {
        let obj = JSON.parse(items);
        obj.items.splice(req.body.index, 1);
        let json = JSON.stringify(obj);
        fs.writeFile("./webshopItems.json", json, "utf8", function (err) {
          if (err) throw err;
          console.log("complete");
          res.json({ ok: true });
        });
      }
    }
  );
});

app.post("/update", async (req, res, next) => {
  const { name, descript, quantity, indexValue } = req.body;
  console.log(indexValue);
  const jsonRecords = fs.readFile(
    "./webshopItems.json",
    "utf8",
    function readFileCallback(err, items) {
      if (err) {
        console.log(err);
      } else {
        let obj = JSON.parse(items);
        const item = obj.items[indexValue];
        console.log(item);
        if (!item) {
          throw new Error(`Id '${index}' not found`);
        }
        Object.assign(item, { name, descript, quantity });
        fs.writeFile(
          "./webshopItems.json",
          JSON.stringify(obj, null, 2),
          function (err) {
            if (err) throw err;
            console.log("updated");
            res.json({ ok: true });
          }
        );
      }
    }
  );
});

module.exports = app;
