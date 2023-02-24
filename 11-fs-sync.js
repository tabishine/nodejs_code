const {readFile, writeFile} = require("fs");
readFile("./content/test.txt", "utf-8", (err, data) => {
     if (err) {
        console.log(err);
        return;
    }
    console.log("first data fetched");
    readFile("./content/test-to-write.txt", "utf-8", (err, data2) => {
        if(err){
            console.log("error2", err);
            return;
        }
    console.log("second data fetched");
    console.log(data);
    console.log(data2);
 });

 writeFile("./content/result-async.txt", 
 `Async result: ${data + " " + data2}`, 
 (err) => {
    if(err) {
        console.log("err write: ", err);
        return;
    }
    console.log("write completed");
     
 })
});
console.log(2);