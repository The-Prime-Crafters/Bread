import { config } from 'dotenv';
import { resolve } from 'path';
import { Pool } from 'pg';

// Load environment variables from .env.local FIRST
config({ path: resolve(process.cwd(), '.env.local') });

async function setupDatabase() {
  let pool: Pool | null = null;
  
  try {
    console.log('🔧 Setting up database...');

    // Check if DATABASE_URL is set
    if (!process.env.DATABASE_URL) {
      console.error('❌ DATABASE_URL not found in .env.local');
      console.log('💡 Make sure you have .env.local file with DATABASE_URL set');
      process.exit(1);
    }

    console.log('✅ DATABASE_URL found');

    // Create pool AFTER environment is loaded
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    });

    // Create signups table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS signups (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        signup_type VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        user_agent TEXT,
        ip_address VARCHAR(45)
      );
    `);

    console.log('✅ Created signups table');

    // Create indexes
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_email ON signups(email);
    `);

    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_created_at ON signups(created_at DESC);
    `);

    console.log('✅ Created indexes');

    // Check if table exists and show count
    const result = await pool.query('SELECT COUNT(*) FROM signups');
    console.log(`✅ Database ready! Current signups: ${result.rows[0].count}`);

    await pool.end();
    console.log('\n🎉 Setup complete! Your database is ready to use.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    if (pool) {
      await pool.end();
    }
    process.exit(1);
  }
}

setupDatabase();
