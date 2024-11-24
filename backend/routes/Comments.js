const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({ where: { PostId: postId } });

  if (comments) {
    res.json(comments);
  } else {
    res.status(404).json({ message: "Comments not found" });
  }
});

module.exports = router;
