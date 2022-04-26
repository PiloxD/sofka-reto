const { Schema, model } = require('mongoose');


const askSchema = new Schema(
    {
        ask: String,

        category: Number,

        answerA: String,

        answerB: String,

        answerC: String,

        answerD: String,

        correctAnswer: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model("Ask", askSchema);
