const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const exerciseSchema = new Schema({
    name: {type: String, required: true}, //user input
    category: { type: String, 
                enum: [ 'Weights',   //user will select
                        'Kettlebells', 
                        'Body Weight', 
                        'Mixed', 
                        'Cardio', 
                        'Interval', 
                        'Stretching/Mobility', 
                        'Other'] 
    }, 
    logType: {  type: String, 
                enum: [ 'Std Lft',   //user will select
                        'Body Wt', 
                        'EMOM(std)', 
                        'EMOM(wtd)', 
                        'AMRAP(std)', 
                        'AMRAP(wtd)', 
                        'RepsForTime(std)',
                        'RepsForTime(wtd)', 
                        'Cardio', 
                        'Simple']
    },
    description: {type: String},    //user input
    demoLink: {type: String},       //user input  //ice box: deal with urls without "https://..."
    creator: {type: Schema.Types.ObjectId, ref:'User'}, //pulled from req.user
    creatorEmail: {type: String},  //also pulled from req.user
}, {
    timestamps: true,
    //incase i need a virtual porperty
    toJSON: { virtuals: true},
});


module.exports = mongoose.model('Exercise', exerciseSchema);