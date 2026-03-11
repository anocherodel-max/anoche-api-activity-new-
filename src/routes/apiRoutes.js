const express = require('express');
const router = express.Router();
const chefController = require('../controllers/chefController');

const { protect, authorize } = require('../middleware/authMiddleware');

// ANYONE can get dishes

// ONLY Admins and Managers can create dishes



const {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish, 
} = require('../controllers/dishController');



router.get('/chefs', chefController.getAllChefs);
router.post('/chefs', chefController.createChef);

router.get('/dishes', getAllDishes);
router.post('/dishes', protect, authorize('admin', 'manager'), createDish);
router.get('/dishes/:id', getDishById);
router.put('/dishes/:id', updateDish);
router.delete('/dishes/:id', deleteDish);

module.exports = router;