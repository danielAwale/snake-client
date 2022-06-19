const net = require("net");
const {host, port, NAME} = require("./constants")
const connect = function () {
  const conn = net.createConnection({
    host,
    port,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write(`Name: ${NAME}`);
  });

   conn.on("connect", () => {
     conn.write("Say: LES GETT IT!!!");
   })

  return conn;
};



module.exports = {connect};

