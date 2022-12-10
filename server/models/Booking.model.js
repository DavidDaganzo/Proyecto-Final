const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(
    {

        entranceDate: {
            type: Date,
            required: true,

        },
        exitDate: {
            type: Date,
            required: true,

        },
        bookedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            //     required: true,
        },
        bookedProperty: {
            type: Schema.Types.ObjectId,
            ref: 'Property',
            // required: true,
        },

    },
    {

        timestamps: true
    }
)



module.exports = model('booking', bookingSchema)