const { Router } = require("express");
const router = Router();
const playerCtrl = require("../controllers/player.controller");

router.post("/addplayer", playerCtrl.createPlayer);

router.get("/searchplayer/:usernamePlayer", playerCtrl.getPlayerByUsername);

router.put("/updatescore/:filter/:update", playerCtrl.updatePlayerByusername);

module.exports = router;
