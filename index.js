const pty = process.platform !== 'win32' ? require('node-pty') : require('node-pty-win');
module.exports = pty;
