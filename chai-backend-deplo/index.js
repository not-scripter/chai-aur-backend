require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

const githubData = {
  login: "not-scripter",
  id: 106903627,
  node_id: "U_kgDOBl84Sw",
  avatar_url: "https://avatars.githubusercontent.com/u/106903627?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/not-scripter",
  html_url: "https://github.com/not-scripter",
  followers_url: "https://api.github.com/users/not-scripter/followers",
  following_url:
    "https://api.github.com/users/not-scripter/following{/other_user}",
  gists_url: "https://api.github.com/users/not-scripter/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/not-scripter/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/not-scripter/subscriptions",
  organizations_url: "https://api.github.com/users/not-scripter/orgs",
  repos_url: "https://api.github.com/users/not-scripter/repos",
  events_url: "https://api.github.com/users/not-scripter/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/not-scripter/received_events",
  type: "User",
  site_admin: false,
  name: "Mrinmoy",
  company: null,
  blog: "https://not-scripter.github.io",
  location: "India",
  email: null,
  hireable: true,
  bio: null,
  twitter_username: "notscripter_in",
  public_repos: 36,
  public_gists: 2,
  followers: 2,
  following: 29,
  created_at: "2022-06-05T07:21:44Z",
  updated_at: "2024-09-12T18:34:27Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/x", (req, res) => {
  res.send("notscripter_in");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login</h1>");
});

app.get("/chai", (req, res) => {
  res.send("<h2>chai code</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
