import express from 'express';
import { ProductController } from '../controllers/productController.js';
import { ReviewController } from '../controllers/reviewController.js';

const router = express.Router();
const productController = new ProductController();
const reviewController = new ReviewController();

// Product routes
router.post('/products', productController.upsertProduct);
router.get('/products', productController.getProducts);
router.get('/products/low-stock', productController.getLowStockAlerts);
router.get('/analytics/top-products', productController.getTopProductsByRegion);

// Review routes
router.post('/reviews', reviewController.addReview);
router.get('/products/:product_id/reviews', reviewController.getProductReviews);

export default router;

