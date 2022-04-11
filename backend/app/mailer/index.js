'use strict';

const mjml2html = require('mjml');
const config = require('../../config');
const path = require('path');
const fs = require('fs');
const nunjucks = require('nunjucks');

const mjConfig = {
    validationLevel: 'strict',
};
const from = `"SoftConstruct.com" <${process.env.SMTP_USER}>`;

const pathToHtml = async (path, options) => {
    const readTemplate = fs.readFileSync(path, 'utf8');
    const mjmlWithData = nunjucks.renderString(readTemplate, options);
    return mjml2html(mjmlWithData, mjConfig).html;
};

exports.sendEmail = async (receiver, options) => {
    const { templateName = 'default', to, subject } = receiver;
    const html = await pathToHtml(path.join(__dirname, `./templates/${templateName}.mjml`), options);

    return config.transporter.sendMail({ from, to, subject, html });
};
