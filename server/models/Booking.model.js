const { Schema, model } = require("mongoose");

const reserveSchema = new Schema(
    {
        reserveNumber: {
            type: String,
            trim: true,

        },
        entranceDate: {
            type: Date,
            require: true,

        },
        exitDate: {
            type: Date,
            require: true,

        },
        resevedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        reservedProperty: {
            type: Schema.Types.ObjectId,
            ref: 'Property',
        },

    },
    {

        timestamps: true
    }
);



module.exports = model('Reserve', reserveSchema)