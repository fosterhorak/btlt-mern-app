const Exercise = require('../../models/exercise');
const User = require('../../models/user');

module.exports = {
    index,
    create,
    // show,
    // update,
    // delete: deleteOne
};


async function index(req, res) {
    const exercises = await Exercise.find({});
    res.status(200).json(exercises);
}

async function create(req, res) {
    const exercise = await Exercise.create(req.body);
    console.log(exercise);

    res.status(201).json(exercise);
}

// async function show(req, res) {
//     const exercise = await Exercise.findById(req.params.id);
//     res.status(200).json(exercise);
// }

// async function update(req, res) {
//     const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {
//         new: true
//     });
//     res.status(200).json(updatedExercise);
// }

// async function deleteOne(req, res) {
//     const deletedExercise = await Exercise.findByIdAndRemove(req.params.id);
//     res.status(200).json(deletedExercise)
// }