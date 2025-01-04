import { Client } from 'harperdb';

// Initialize HarperDB client
export const client = new Client({
  url: process.env.HARPERDB_URL || 'http://localhost:9925',
  username: process.env.HARPERDB_USERNAME,
  password: process.env.HARPERDB_PASSWORD
});

// Initialize database schema and tables
export async function initializeDatabase() {
  try {
    // Create schema
    await client.create_schema({ schema: 'inventory' });

    // Create products table
    await client.create_table({
      schema: 'inventory',
      table: 'products',
      hash_attribute: 'id'
    });

    // Create reviews table
    await client.create_table({
      schema: 'inventory',
      table: 'reviews',
      hash_attribute: 'id'
    });

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization failed:', error);
    throw error;
  }
}

