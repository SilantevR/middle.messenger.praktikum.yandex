const express = require("express");
const app = express();
const path = require("path")
const PORT = process.env.PORT ?? 3000;

app.use("/", express.static("dist"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
app.get("/profile", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
app.get("/settings", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
app.get("/signin", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
app.get("/chats", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
app.get("/500", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
app.get("/404", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}/ `);
});
