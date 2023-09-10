const os= require("os");

console.log("free memory", os.freemem()/1024 /1024/1024);
console.log("Total memory", os.totalmem()/1024 /1024/1024);
// => memory in byte that's why we convert it.... 1kb = 1024 bytes, 1mb = 1024 kb, 1gb = 1024 mb

console.log("user info", os.userInfo());
console.log("version", os.version())
console.log("platform", os.platform());
console.log(`processer, ${os.cpus().length} core`);
console.log("uptime ", os.uptime());

