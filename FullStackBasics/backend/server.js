// const express = require('express');
import express from "express";

const app = express();

app.use(express.static("dist"));

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });



// get a List of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 2,
      joke: "Why don’t skeletons fight each other? They don’t have the guts.",
    },
    { id: 3, joke: `What do you call cheese that isn't yours? Nacho cheese!` },
    {
      id: 4,
      joke: `What did the grape do when he got stepped on? Nothing, he just let out a little wine!`,
    },
    {
      id: 5,
      joke: `Why was the math book sad? Because it had too many problems.`,
    },
  ];

  res.send(jokes);
}); // need to check api data in json formatter.

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
