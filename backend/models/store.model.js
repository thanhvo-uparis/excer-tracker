const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3
        },
        address: {type: String, required: true},
        country: {type: String, required: true},

    }, {
        timestamps: true
    }
);

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;