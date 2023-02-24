const { readSync } = require("fs");
const http = require("http");
http
    .createServer((req, res) => {
        const stream = fs.createReadStream("./FinancialSample.xlsx");
        const options  = {
        host: "localhost",
        port: 8000,
        method: "POST",
    
    };
    const request = http.request(options, (res)=> {
        res.on("error", reject);
        res.on("data chunk", (re) => {

        })

    } );   
})
.listen(8080);
