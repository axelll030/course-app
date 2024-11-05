const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  const postList = await Posts.findAll();
  res.json(postList);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.status(201).json(post);
});

module.exports = router;
