const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB (Docker service name)
mongoose.connect("mongodb://mongo:27017/devopsdb")
.then(() => console.log("Mongo connected"))
.catch(err => console.log(err));

const User = mongoose.model("User", {
  name: String,
  email: String
});

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.get("/users", async (req, res) => {
  res.json(await User.find());
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "nano-devops",
    time: new Date()
  });
});
