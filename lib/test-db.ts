import { config } from 'dotenv';
import { resolve } from 'path';
import { Pool } from 'pg';

// Load environment variables
config({ path: resolve(process.cwd(), '.env.local') });

async function testConnection() {
  console.log('🔍 Testing database connection...');
  
  const dbUrl = process.env.DATABASE_URL;
  
  if (!dbUrl) {
    console.error('❌ DATABASE_URL not found in .env.local');
    process.exit(1);
  }
  
  // Show redacted URL (hide password)
  const redactedUrl = dbUrl.replace(/:([^@]+)@/, ':****@');
  console.log('📡 Connecting to:', redactedUrl);
  
  const pool = new Pool({
    connectionString: dbUrl,
    ssl: {
      rejectUnauthorized: false
    }
  });
  
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Connection successful!');
    console.log('⏰ Server time:', result.rows[0].now);
    await pool.end();
    process.exit(0);
  } catch (error) {
    console.error('❌ Connection failed:', error);
    await pool.end();
    process.exit(1);
  }
}

testConnection();
