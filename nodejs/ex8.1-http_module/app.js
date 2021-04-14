const https = require("https");
const url = "https://www.tronalddump.io/random/quote";

https
  .request(url, (res) => {
    let data = "";
    //res.setEncoding("utf8");
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      const body = JSON.parse(data);
      console.log(body);
    });
  })
  .end();
