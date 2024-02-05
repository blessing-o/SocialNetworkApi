const router = require('express').Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/UserController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// // /api/users/:userId
router
.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser); 

// /api/applications/:userId/friends
router.route('/:userId/friends').post(addFriend);

// /api/applications/:applicationId/tags/:tagId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
