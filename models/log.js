const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},  //pull from user model
    exerciseID: {type: String}, //pull from exercise model
    //exerciseCat: {type: String},  //pull from exercise model as needed (could change!)
    //exerciseLogType: {type: String},  //pull from exercise model as needed (could change!)
    //exerciseDescription: {type: String},  //pull from exercise model as needed (could change!)
    //exerciseDemoLink: {type: String},  //pull from exercise model as needed (could change!)
    dateTime: {type: Date}, //user will input
    exerciseData: {type: Object}, //will be determined by form based on exerciselogType
    notes: {type: String}, //user will input
}, {
    timestamps: true,
})

module.exports = mongoose.model('Log', logSchema);