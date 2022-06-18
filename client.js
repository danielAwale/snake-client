const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541,
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
    conn.write("Name: DMA");
  });

   conn.on("connect", () => {
     conn.write("Say: LES GETT IT!!!");
   })

  return conn;
};



module.exports = {connect};

