const Log = require('../../models/log');

module.exports = {
    index,
    create,
    // show,
    update,
    delete: deleteOne
};


async function index(req, res) {
    const logs = await Log.find({userId: req.user._id});
    res.status(200).json(logs);
}


async function create(req, res) {
    console.log(`req.body.exerciseID (before): ${req.body.exerciseID}`)
    console.log(`req.body.exerciseLogType (before): ${req.body.exerciseLogType}`)
    console.log(`req.body.exerciseObj._id (before): ${req.body.exerciseObj._id}`)
    console.log(`req.body.exerciseObj.logType (before): ${req.body.exerciseObj.logType}`)


    req.body.userId = req.user._id;
    req.body.exerciseID = req.body.exerciseObj._id;//whatever the id is of the exerciseObj
    req.body.exerciseLogType = req.body.exerciseObj.logType;//whatever the logtype is of exerciseObj
    //req.body.dateTime and req.body.notes should already be good...
    req.body.exerciseData = {
        weight: req.body.weight,
        reps: req.body.reps,
        sets: req.body.sets, 
        restInt: req.body.restInt,
        volCalc: req.body.volCalc,
        totReps: req.body.totReps,
        repsPerRd: req.body.repsPerRd,
        time: req.body.time,
        numRds: req.body.numRds,
        timeCap: req.body.timeCap,
        distance: req.body.distance,
        avgSpeed: req.body.avgSpeed,
        complete: req.body.complete,
    };
    req.body.exerciseObj = null;
    console.log(`req.body.exerciseID (after): ${req.body.exerciseID}`)
    console.log(`req.body.exerciseLogType (after): ${req.body.exerciseLogType}`)
    // need to clear out exerciseObj (will look up exercise info by searching by ID on log index page)
    const log = await Log.create(req.body);
    console.log(`new log: ${log}`)
    res.status(201).json(log);
}

// async function show(req, res) {
//     const log = await Log.findById(req.params.id);
//     res.status(200).json(log);
// }

async function update(req, res) {
    req.body.userId = req.body.exerciseObj.userId; //whatever the userId is of the active exercise - exerciseObj
    //req.body._id, req.body.exerciseID, and req.body.exerciseLogType set on update form...
    //req.body.dateTime, req.body.notes, and req.body.exerciseData set in form...
    req.body.exerciseData = {
        weight: req.body.weight ? req.body.weight : null,
        reps: req.body.reps ? req.body.reps : null,
        sets: req.body.sets ? req.body.sets : null, 
        restInt: req.body.restInt ? req.body.restInt : null,
        volCalc: req.body.volCalc ? req.body.volCalc : null,
        totReps: req.body.totReps ? req.body.totReps : null,
        repsPerRd: req.body.repsPerRd ? req.body.repsPerRd : null,
        time: req.body.time ? req.body.timeCap : null,
        numRds: req.body.numRds ? req.body.numRds : null,
        timeCap: req.body.timeCap ? req.body.timeCap : null,
        distance: req.body.distance ? req.body.distance : null,
        avgSpeed: req.body.avgSpeed ? req.body.avgSpeed : null,
        complete: req.body.complete ? req.body.complete : null,
    };
    console.log(`req.params.id: ${req.params.id}`)
    console.log(`req.body._id: ${req.body._id}`)
    
    req.body.exerciseObj = null;
    
    
    const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedLog);
}

async function deleteOne(req, res) {
    const deletedLog = await Log.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedLog)
}