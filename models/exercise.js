const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//embed log schema in exercise schema
const logSchema = new Schema({
    exerciseName: {type: String},
    exerciseCat: {type: String},
    dateTime: {type: Date},
    exerciseData: {type: Object},
    notes: {type: String}, 
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true,
})

// exercise schema with log schema embedded
const exerciseSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, enum: ['Weights', 'Kettlebell', 'Body Weight', 'Mixed', 'Cardio', 'Interval', 'Stretching', 'Other'] },
    logType: {type: String, enum: ['Std Lft', 'Body Wt', 'EMOM(std)', 'EMOM(wtd)', 'AMRAP(wtd)', 'AMRAP(wtd)', 'RepsForTime(std)','RepsForTime(wtd)', 'Cardio', 'Simple']},
    description: {type: String},
    demoLink: {type: String},
    creatorID: {type: Schema.Types.ObjectId, ref: 'User'},
    logs: [logSchema]
}, {
    timestamps: true,
});


module.exports = mongoose.model('Exercise', userSchema);