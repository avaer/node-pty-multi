const ABI_VERSION = '57';

const nodeAbi = require('node-abi');
const abiVersion = nodeAbi.getAbi();
if (abiVersion !== ABI_VERSION) {
  throw new Error(`Wrong ABI version: got ${abiVersion}, expected ${ABI_VERSION}`);
}

let pty = null;
switch (process.platform) {
  case 'linux': {
    pty = require('node-pty-linux');
    break;
  }
  case 'win32': {
    pty = require('node-pty-win');
    break;
  }
}
if (pty === null) {
  throw new Error(`Platform not supported: ${process.platform}`);
}
module.exports = pty;
