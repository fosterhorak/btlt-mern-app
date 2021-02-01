const express = require('express');
const router = express.Router();
const logsCtrl = require('../../controllers/api/logs');

// routes for /api/logs
router.get('/', logsCtrl.index);
router.post('/', logsCtrl.create);
// router.get('/:id', logsCtrl.show);
// router.put('/:id', logsCtrl.update);
// router.delete('/:id', logsCtrl.delete);


module.exports = router;