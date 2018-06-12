process.stdout.write('prompt >'); //
process.stdin.on('data', (data) =>{
  //const cmd = data.toString().trim();
  const exportsFromPwd = require('./pwd')
  exportsFromPwd()
});
