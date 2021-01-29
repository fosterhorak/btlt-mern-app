const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../../controllers/api/exercises');

// routes for /api/exercises
router.get('/', exercisesCtrl.index);
router.post('/', exercisesCtrl.create);
// router.get('/:id', exercisesCtrl.show);
router.put('/:id', exercisesCtrl.update);
// router.delete('/:id', exercisesCtrl.delete);


module.exports = router;