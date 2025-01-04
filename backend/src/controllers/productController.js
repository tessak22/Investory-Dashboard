import { client } from '../config/db.js';

export class ProductController {
  // Add or update product
  async upsertProduct(req, res) {
    try {
      const product = req.body;
      
      const result = await client.insert({
        schema: 'inventory',
        table: 'products',
        records: [{
          id: product.id,
          name: product.name,
          stock: product.stock,
          location: product.location,
          updated_at: new Date().toISOString()
        }]
      });

      res.json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  // Get all products
  async getProducts(req, res) {
    try {
      const products = await client.sql(
        'SELECT * FROM inventory.products ORDER BY updated_at DESC'
      );
      res.json({ success: true, data: products });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  // Get low stock products
  async getLowStockAlerts(req, res) {
    try {
      const threshold = req.query.threshold || 10;
      const products = await client.sql(
        'SELECT * FROM inventory.products WHERE stock < ? ORDER BY stock ASC',
        [threshold]
      );
      res.json({ success: true, data: products });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  // Get top products by region
  async getTopProductsByRegion(req, res) {
    try {
      const products = await client.sql(`
        SELECT 
          location,
          name,
          stock,
          COUNT(*) as total_sales
        FROM inventory.products
        GROUP BY location, name, stock
        ORDER BY total_sales DESC
        LIMIT 10
      `);
      res.json({ success: true, data: products });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}

