const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).post(createThought);
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:userId/thoughts').post(createThought);
router.route('/:userId/thoughts/:thoughtId').delete(deleteThought);
router.route('/:thoughtId/reaction/').post(addReaction);
router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

module.exports = router;