let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume(); 

  const handleUserInput = function (data) {
    if (data === '\u0003') {
      process.exit();
    } else if (data === '\u0077') {
      connection.write("Move: up");
    } else if (data === '\u0061') {
      connection.write("Move: left");
    } else if (data === '\u0073') {
      connection.write("Move: down");
    } else if (data === '\u0064') {
      connection.write("Move: right");
    }
  }
  
  stdin.on('data', handleUserInput);
}

module.exports = { setupInput };