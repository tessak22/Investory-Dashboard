import { client } from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

export class ReviewController {
  // Add product review
  async addReview(req, res) {
    try {
      const { product_id, rating, comment } = req.body;
      
      const review = {
        id: uuidv4(),
        product_id,
        rating,
        comment,
        created_at: new Date().toISOString()
      };

      const result = await client.insert({
        schema: 'inventory',
        table: 'reviews',
        records: [review]
      });

      res.json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  // Get product reviews with sentiment analysis
  async getProductReviews(req, res) {
    try {
      const { product_id } = req.params;
      
      const reviews = await client.sql(`
        SELECT 
          r.*,
          p.name as product_name
        FROM inventory.reviews r
        JOIN inventory.products p ON r.product_id = p.id
        WHERE r.product_id = ?
        ORDER BY r.created_at DESC
      `, [product_id]);

      // Calculate average rating
      const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

      res.json({ 
        success: true, 
        data: {
          reviews,
          analytics: {
            total_reviews: reviews.length,
            average_rating: avgRating
          }
        }
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}

