'use strict';

var config = require('meanio').loadConfig(),
    nodemailer = require('nodemailer'),
    mailgen = require('mailgen');

var mailGenerator = new mailgen({
  	theme: 'salted',
  	product: {
        name: 'Initial Project',
        link: 'https://www.extemp.online/'
        // logo: 'https://mailgen.js/img/logo.png'
    }
});

function sendMail(mailOptions) {
   	var transport = nodemailer.createTransport(config.mailer);
   	transport.sendMail(mailOptions, function(err, response) {
       	if (err) return err;
       	return response;
   	});
}

/**
 * Function to send mail automatically.
 * @param {string} body Mail body
 * @param {string} sendTo Reciever mail id
 */
module.exports = {
    forwardMail: function(body, sendTo) {
        var emailBody = mailGenerator.generate(body);
        var mailOptions = {
            to: sendTo,
            from: config.emailFrom,
            subject: body.subject,
            html: emailBody,
            createTextFromHtml: true
        };
        sendMail(mailOptions);
    }
};