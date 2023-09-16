
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (text: String) {
  console.log(text);
  if (text.trim() === 'quit') {
    done();
  }
});

function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.');
  process.exit();
}