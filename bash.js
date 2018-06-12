const exportsFromPwd = require('./pwd')
const fs = require('fs');
const exportsFromls = require('./ls')
process.stdout.write('prompt >'); //
// exportsFromPwd()
process.stdin.on('data', (data) =>{
  // const cmd = data.toString().trim();
  exportsFromPwd(data)
  exportsFromls(data)
  // const cmd = data.toString().trim();
});
