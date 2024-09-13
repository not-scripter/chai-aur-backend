import e from "express";

const app = e();

const port = process.env.PORT || 3001;

const jokes = [
  {
    id: 1,
    content: "Why don't skeletons fight each other? They don't have the guts.",
  },
  {
    id: 2,
    content:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  },
  {
    id: 3,
    content:
      "Why don’t scientists trust atoms? Because they make up everything!",
  },
  {
    id: 4,
    content: "What’s orange and sounds like a parrot? A carrot.",
  },
  {
    id: 5,
    content:
      "Why did the math book look sad? Because it had too many problems.",
  },
];

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
