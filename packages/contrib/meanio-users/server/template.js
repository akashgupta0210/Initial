'use strict';

module.exports = {
    forgot_password_email: function(user, req, token, mailOptions) {
        mailOptions.html = [
            'Hi ' + user.name + ',',
            'We have received a request to reset the password for your account.',
            'If you made this request, please click on the link below or paste this into your browser to complete the process:',
            'http://' + req.headers.host + '/reset/' + token,
            'This link will work for 1 hour or until your password is reset.',
            'If you did not ask to change your password, please ignore this email and your account will remain unchanged.'
        ].join('\n\n');
        mailOptions.subject = 'Resetting the password';
        return mailOptions;
    },

    verification_email: function(user, req, token, mailOptions) {
        var email = {
            body: {
                name: user.name,
                intro: 'Welcome to Initial Project We are very excited to have you on board. '+
                        'Your login credential are </br>' + 
                        '<b> Username: ' + user.username + '</br>' + 
                        ' Email: ' + user.email + '</br>'+ 'Password: ' + user.confirmationToken +'</b>' + '</br>' + 
                        'To get started, please verify by your email address',
                action: {
                    button: {
                        color: 'green',
                        text: 'To verify Click Here',
                        link: 'http://' + req.headers.host + '/' + token
                    }
                },
                outro: 'For any queries email us on link ashu9990@gmail.com',
                signature: 'Best'
            },
        subject: 'Confirmation Mail'
        }
        return email;
    }
};
