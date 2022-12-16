import express from "express";
import getPosts from "./context/get-posts";

const app = express();

const port = 9000;
app.get("/posts", (req, res) => {
  getPosts()
    .then((result) => {
      res.send({ message: "**Good implementation**", data: result });
    })
    .catch(() => {
      res.send("can't fetch data");
    });
});

app.listen(port, () => {});
