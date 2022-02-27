const products = require("./routes/products");
const orders = require("./routes/orders");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb://127.0.0.1:27017/orders-app-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the MongoDB !!!"))
  .catch((err) => console.log("Could not connect to the MongoDB... " + err));

app.use(cors());

app.use(express.json());

app.use("/api/products", products);
app.use("/api/orders", orders);

app.get("/", (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

const port = 3000;
http.listen(port, () => console.log(`Listening on port ${port}...`));
