module.exports = function(data){
  const cmd = data.toString().trim();
  if (cmd === 'pwd'){
    process.stdout.write(process.cwd());
  } else {
    process.stdout.write('none')
  }
  process.stdout.write('\nprompt >');
}
