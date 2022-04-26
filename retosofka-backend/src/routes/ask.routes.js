const { Router } = require("express");
const router = Router();
const askCtrl = require("../controllers/ask.controller");


router.post("/addask", askCtrl.createAsk);

router.get("/ask/bycategory/:level", askCtrl.getAskByCategory);

 
module.exports = router;
