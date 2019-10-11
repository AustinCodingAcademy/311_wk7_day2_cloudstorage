
const fs = require("fs");
const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'arctic-thought-252600',
  keyFilename: './My-First-Project-4ce6cd3065d0.json'
})


storage.bucket("stuff-react-nae").upload("./bruce.jpg", {
    gzip: true,
    metadata: {
        cacheControl: 'public, max-age=31536000',
    },
}).then(()=>{
    console.log("file uploaded")
});