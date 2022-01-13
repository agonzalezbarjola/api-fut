
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let futSchema = new Schema({
    name: {
        type: 'string',
    },
    team: {
        type: 'string'
    },
    age: {
        type: 'number'
    },
}, {
    collection: 'futbolistas'
});

module.exports = mongoose.model('futbolista', futSchema);