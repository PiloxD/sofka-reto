const Player = require("../models/player.model");

module.exports.createPlayer = async (req, res) => {
    try {
        const { username, score } = req.body;
        const newPlayer = new Player({
            username,
            score
        });

        const playerSaved = await newPlayer.save();
        res.status(201).json(playerSaved);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

module.exports.getPlayerByUsername = async (req, res) => {
    const { usernamePlayer } = req.params;
    const player = await Player.findOne({ username: usernamePlayer });
    return res.json(player);
  
  };

  module.exports.updatePlayerByusername = async (req, res) => {
    const {filter, update } = req.params;
    const opts = { new: true };
    const updatedPlayerScore = await Player.findOneAndUpdate({ username: filter }, { score: update }, opts);
    res.status(204).json(updatedPlayerScore);
  };