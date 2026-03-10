const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let tasks = [
  { id: 1, title: "Node lernen", done: false },
  { id: 2, title: "API verstehen", done: false }
];

// Alle Tasks holen
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Task hinzufügen
app.post("/api/tasks", (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title,
    done: false
  };

  tasks.push(task);
  res.json(task);
});

app.listen(3000, () => {
  console.log("Server läuft auf http://localhost:3000");
});