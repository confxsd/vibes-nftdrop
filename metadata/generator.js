const fs = require('fs');
const imageDir = fs.readdirSync("./assets");
imageDir.forEach(img => {
  const metadata = {
    name: `vibes - ${img.split(".")[0]}`,
    description: "NFT Drop",
    image: `ipfs://FOLDER_CID/${img.split(".")[0]}.png`,
    attributes: []
  }
  fs.writeFileSync(`./metadata/${img.split(".")[0]}`, JSON.stringify(metadata))
});