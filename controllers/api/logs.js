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
    const log = await Log.create(req.body);
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