const express = require("express");
const router = express.Router();
const { rewriteContent, translateContent } = require("../services/geminiClient");

router.post("/rewrite", async (req, res) => {
  try {
    const { text, style } = req.body;
    const result = await rewriteContent(text, style);
    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Rewrite failed" });
  }
});

router.post("/translate", async (req, res) => {
  try {
    const { text, language } = req.body;
    const result = await translateContent(text, language);
    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Translation failed" });
  }
});

module.exports = router;

