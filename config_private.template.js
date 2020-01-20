/**
 * Global private configuration object.
 */
const config_private = {
  db: {
    'host': 'localhost',
    'port': '27017',
    'name': 'limitlessdb',
    'user': 'limitlessuser',
    'pass': 'limitlesspassword'
  },
  rpc: {
    'host': 'localhost',
    'port': '8008',
    'user': 'rpcuser',
    'pass': 'rpcpassword',

    /**
     * Timeout 8 seconds.
     */
    'timeout': 8000,
  }
};

module.exports = config_private;
