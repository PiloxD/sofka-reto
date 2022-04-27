const Player = require("../models/player.model");

// Este controlador crea un jugador nuevo con su nombre de usuario
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
// Este controlador busca al jugador que ingresó en el concurso 
module.exports.getPlayerByUsername = async (req, res) => {
    const { usernamePlayer } = req.params;
    const player = await Player.findOne({ username: usernamePlayer });
    return res.json(player);
  
  };
//Este controlador actualiza el puntaje de cada jugador según se desempeña en el concurso
  module.exports.updatePlayerByusername = async (req, res) => {
    const {filter, update } = req.params;
    const opts = { new: true };
    const updatedPlayerScore = await Player.findOneAndUpdate({ username: filter }, { score: update }, opts);
    res.status(204).json(updatedPlayerScore);
  };