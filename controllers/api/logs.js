const Log = require('../../models/log');

module.exports = {
    index,
    create,
    // show,
    // update,
    // delete: deleteOne
};


async function index(req, res) {
    const logs = await Log.find({});
    res.status(200).json(logs);
}


async function create(req, res) {
    console.log(`req.body (before): ${req.body}`)
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
    console.log(`req.body (after): ${req.body}`)
    // need to clear out exerciseObj (will look up exercise info by searching by ID on log index page)
    const log = await Log.create(req.body);
    console.log(`new log: ${log}`)
    res.status(201).json(log);
}

// async function show(req, res) {
//     const log = await Log.findById(req.params.id);
//     res.status(200).json(log);
// }

// async function update(req, res) {
//     const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, {
//         new: true
//     });
//     res.status(200).json(updatedLog);
// }

// async function deleteOne(req, res) {
//     const deletedLog = await Log.findByIdAndRemove(req.params.id);
//     res.status(200).json(deletedLog)
// }