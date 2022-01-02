const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const papayeSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true},
    store: {type: String, required: true},
}, {
    timestamps: true
});

const Papaye = mongoose.model('Papaye', papayeSchema);
module.exports = Papaye;