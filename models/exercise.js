const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {type: String, required: true}, //user input
    category: { type: String, 
                enum: [ 'Weights',   //user will select
                        'Kettlebell', 
                        'Body Weight', 
                        'Mixed', 
                        'Cardio', 
                        'Interval', 
                        'Stretching', 
                        'Other'] 
    }, 
    logType: {  type: String, 
                enum: [ 'Std Lft',   //user will select
                        'Body Wt', 
                        'EMOM(std)', 
                        'EMOM(wtd)', 
                        'AMRAP(wtd)', 
                        'AMRAP(wtd)', 
                        'RepsForTime(std)',
                        'RepsForTime(wtd)', 
                        'Cardio', 
                        'Simple']
    },
    description: {type: String},    //user input
    demoLink: {type: String},       //user input
    creatorID: {type: Schema.Types.ObjectId, ref: 'User'},  //pulled from user model
}, {
    timestamps: true,
});


module.exports = mongoose.model('Exercise', exerciseSchema);