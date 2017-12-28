const ABI_VERSION = '57';

const nodeAbi = require('node-abi');
const abiVersion = nodeAbi.getAbi();
if (abiVersion !== ABI_VERSION) {
  throw new Error(`Wrong ABI version: got ${abiVersion}, expected ${ABI_VERSION}`);
}

const pty = process.platform !== 'win32' ? require('node-pty') : require('node-pty-win');
module.exports = pty;
