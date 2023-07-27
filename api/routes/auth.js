import express from "express";

const router = express.Router();

router.get("/register", (req, res) => {
  res.send("user register routes");
});
export default router;
