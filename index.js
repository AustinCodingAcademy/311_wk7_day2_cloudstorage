
const fs = require("fs");
const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'genuine-sector-258100',
  keyFilename: './Project-b7baeeb74ebb.json'
})


storage.bucket("mphillips_aca_class_hd").upload("./bruce.jpg", {
    gzip: true,
    metadata: {
        cacheControl: 'public, max-age=31536000',
    },
}).then(()=>{
    console.log("file uploaded")
});