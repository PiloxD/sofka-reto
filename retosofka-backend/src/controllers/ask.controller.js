const Ask = require("../models/ask.model");


// Este controlador es para crear preguntas nuevas
module.exports.createAsk = async (req, res) => {
    try {
        const { ask, category, answerA, answerB, answerC, answerD, correctAnswer } = req.body;
        const newAsk = new Ask({
            ask,
            category,
            answerA,
            answerB,
            answerC,
            answerD,
            correctAnswer
        });
        const askSaved = await newAsk.save();
        res.status(201).json(askSaved);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

// Este controlador es para requerir una pregunta aleatoria entre la colección de preguntas según la categoría
module.exports.getAskByCategory = async (req, res) => {
    Ask.count().exec(function (err, count) {
        var random = Math.floor(Math.random() * count)
        const { level } = req.params;
        Ask.findOne({ category: level }).skip(random).exec(
            function (err, result) {
                res.status(200).json(result);
            })
    })
};