const router = require('express').Router();
const {
getThought,
createThought,
getSingleThought,
updateThought,
deleteThought,
addReaction,
removeReaction,
} = require('../../controllers/ThoughtController');

// /api/thought
router.route('/').get(getThought).post(createThought);

// // /api/thought/:thoughtId
router
.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought); 

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thouhgtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;