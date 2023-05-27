import { config } from 'dotenv';
config();
export default {
  port: 3000,
  host: 'localhost',
  dbUri: process.env.DB_URI,
  refreshTokenTtl: '1y',
  accesstokenTtl: '15m',
  privatekey: 'dhairya' //generated for demo purposes only
};
