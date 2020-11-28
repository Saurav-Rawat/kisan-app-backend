const express = require("express");
const router = express.Router();
const console = require("tracer").console();
import { sendSms, getAllSms } from "../confi/lib/sms";

//testing routes
router.get("/getSms", async (req, res) => {
  getAllSms((messages) => {
    res.json(messages);
  });
});

router.post("/test", async (req, res) => {
  console.log(req.body);
  res.json({});
});

router.post("/sendSms", async (req, res) => {
  const { number, message } = req.body;
  console.log(req.body);
  sendSms(
    {
      number,
      message,
    },
    (respData) => {
      res.json({ data: respData });
    }
  );
  // res.json({});
});

module.exports = router;
