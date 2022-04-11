const fs = require('fs');
const config = require('../../config');

function saveImage(req, res) {
    const { id, url, type } = req.body;

    
    if (!url.includes('base64')) return { id, url, type };
    const urlRaw = url.replace(/^data:image\/[a-z]+;base64,/, '');
    var bitmap = Buffer.from(urlRaw, 'base64');
    const fileName = `${id}.${type}`;
    fs.writeFile(`${config.uploads}/${fileName}`, bitmap, (err) => {
        if (err) throw new Error(`Can't save image ${fileName}`);
    });
    res.send({ id, url: fileName, type });
    return { id, url: fileName, type };
}

function getImage(req, res) {
    const { fileName } = req.body;

    try {
        let bitmap = fs.readFileSync(`${config.uploads}/${fileName}`);
        let image =  Buffer(bitmap).toString('base64');
        res.send({image});
      } catch (err) {
        throw new Error(`Can't get image ${fileName}`);
      }
}

function removeImage(img) {
    return fs.unlink(`${config.uploads}/${img.url}`, console.error);
}

exports.saveImage = saveImage;
exports.getImage = getImage;
exports.removeImage = removeImage;
exports.saveImages = async (images = []) => images.map((image) => saveImage(image));
exports.removeImages = async (images) => images.forEach(removeImage);
