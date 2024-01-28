const router = require('express').Router();
// const postRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes.js');

// router.use('/thought', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;