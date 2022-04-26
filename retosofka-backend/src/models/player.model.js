const { Schema, model } = require('mongoose');


const playerSchema = new Schema(
    {
        username:
        {
            type: String,
            unique: false
        },

        score: Number

    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model("Player", playerSchema);
