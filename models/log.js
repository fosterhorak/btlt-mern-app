const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    exerciseName: {type: String}, //pull from exercise model
    exerciseCat: {type: String},  //pull from exercise model
    exerciseLogType: {type: String},  //pull from exercise model
    exerciseDescription: {type: String},  //pull from exercise model
    exerciseDemoLink: {type: String},  //pull from exercise model
    dateTime: {type: Date}, //user will input
    exerciseData: {type: Object}, //will be determined by form based on exerciselogType
    notes: {type: String}, //user will input
    userId: {type: Schema.Types.ObjectId, ref: 'User'},  //pull from user model
}, {
    timestamps: true,
})

module.exports = mongoose.model('Log', logSchema);