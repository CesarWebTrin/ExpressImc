const express = require("express");

const IMCService = require("../services/imcService");

const router = express.Router();

const imcService = new IMCService();

router.post("/calculate", (req, res) => {
  const { weight, height } = req.body;

  if (!weight || !height) {
    return res
      .status(400)
      .json({ error: "Peso e altura precisam ser informados." });
  }

  const { imc, result } = imcService.calculate(Number(weight), Number(height));
  return res.json({ imc, result });
});

module.exports = router;
