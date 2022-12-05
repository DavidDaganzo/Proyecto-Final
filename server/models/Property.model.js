const { Schema, model } = require("mongoose");

const propertySchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: false,

        },
        capacity: {
            type: Number,
            required: true,
            trim: true
        },
        location: {
            lat: {
                type: Number,
                required: true,
            },
            lng: {
                type: Number,
                required: true,
            },
        },
        image: {
            type: String
        },
        description: {
            type: String,
            minlength: 50,

        },
        city: {
            type: String,
            required: true
        },
        // createdBy: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'User',
        // },
        price: {
            type: Number,
            require: true
        },
        category: {
            type: String,
            enum: ['House', 'Hotel', 'Villa', 'Capsule-Hotel'],
            default: 'House'
        },
        extras: {
            pool: {
                type: Boolean
            },
            barbaque: {
                type: Boolean
            },
            terrace: {
                type: Boolean

            },
            wifi: {
                type: Boolean
            },
            airconditioning: {
                type: Boolean
            }
        },


    },
    {

        timestamps: true
    }
);



module.exports = model('Property', propertySchema)