const path = require('path');
const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN,
});

const uploadDocsPath = path.resolve(__dirname, `../../attachments`);

exports.upload = function upload(req, res) {
    let sampleFile;
    let uploadPath;
    const { subject } = req.body;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;
    uploadPath = `${uploadDocsPath}/${sampleFile.name}`;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);
        else {
            mailgun.messages().send(
                {
                    from: process.env.MAILGUN_SENDER,
                    to: process.env.MAILGUN_RECEIVER,
                    subject: `Career Application ${subject}`,
                    html: `Position: ${subject}<br/>CV Attached.`,
                    attachment: `${uploadDocsPath}/${sampleFile.name}`,
                },
                (error, body) => {
                    if (error) console.log(error);
                }
            );
            res.send('File uploaded!');
        }
    });
};

exports.uploadCvForm = function uploadCvForm(req, res) {
    let sampleFile;
    let uploadPath;
    const { name, professional, living, story } = req.body;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;
    uploadPath = `${uploadDocsPath}/${sampleFile.name}`;
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);
        else {
            mailgun.messages().send(
                {
                    from: process.env.MAILGUN_SENDER,
                    to: process.env.MAILGUN_RECEIVER,
                    subject: 'Career Application [JOIN FORM]',
                    html: `Name: ${name},<br/>
                        Professional at: ${professional},<br/>
                        Living in: ${living},<br/>
                        About: ${story}
                    `,
                    attachment: `${uploadDocsPath}/${sampleFile.name}`,
                },
                (error, body) => {
                    if (error) console.log(error);
                    console.log('body', body);
                }
            );
            res.send('File uploaded!');
        }
    });
};
