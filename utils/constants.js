const path = require('path');

const { ENV = 'sandbox', CI } = process.env;

if (!CI) {
  require('dotenv').config({ path: path.resolve(`.env.${ENV}`) });
}

const { NC_USER, NC_API_KEY, NC_DOMAIN, IP_ADDRESS } = process.env;

const IS_TEST = ENV === 'test';

module.exports = {
  ENV,
  VALID_RECORD_TYPES: ['CNAME', 'A', 'ALIAS', 'URL'],
  NC_DOMAIN: NC_DOMAIN || 'booboo.xyz',
  NC_USER: IS_TEST ? 'testuser' : NC_USER,
  NC_API_KEY: IS_TEST ? 'testkey' : NC_API_KEY,
  IP_ADDRESS,
  TTL: 5*60,
};
