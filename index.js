
const fs = require("fs");
const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'concrete-kayak-258101',
  keyFilename: './first-instance-0911220e2eac.json'
})


storage.bucket("justinbarsalou_aca-harddrive").upload("./bruce.jpg", {
    gzip: true,
    metadata: {
        cacheControl: 'public, max-age=31536000',
    },
}).then(()=>{
    console.log("file uploaded")
});