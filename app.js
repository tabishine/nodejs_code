const http = require("http");
const fs = require("fs");
const zlib = require("zlib");
const { pipeline } = require("stream");

async function run() {
    await pipeline(
        fs.createReadStream("./")
    )
}