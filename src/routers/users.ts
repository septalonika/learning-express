import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User home page");
});

router.get("/profile", (req, res) => {
  res.send("User profile page");
});

export default router;
