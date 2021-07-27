const express = require('express')
const router = express.Router();
const controller = require('../controllers/people')

router.get('/',controller.getPeople)

router.post('/',controller.createPerson)

router.put('/:id',controller.updatePerson)
// Delete will not have any req.body
router.delete('/:id',controller.deletePerson)

//alternative chaining of routes
//router.route('/').get(controller.getPeople).post(controller.createPerson)
//router.route('/:id').put(controller.updatePerson).delete(controller.deletePerson)

module.exports = router