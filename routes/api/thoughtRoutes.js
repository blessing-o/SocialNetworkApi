const router = require('express').Router();
const {
getThought,
createThought,
getSingleThought,
updateThought,
deleteThought,
} = require('../../controllers/ThoughtController');

// /api/users
router.route('/').get(getThought).post(createThought);

// // /api/users/:userId
router
.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought); 

module.exports = router;