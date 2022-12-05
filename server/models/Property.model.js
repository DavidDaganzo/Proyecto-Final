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
            type: {
                type: String
            },
            coordinates: [Number]

        },
        image: {
            type: String,
            default: 'http://crismhom.org/wp-content/uploads/2014/07/desafios-generales-en-diseno-de-una-casa.jpg'
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


propertySchema.index({ location: '2dsphere' })

module.exports = model('Property', propertySchema)