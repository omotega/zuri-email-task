const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tomoyibo@gmail.com',
        pass:'',
        
    }
})

let details = {
    from: 'tomoyibo@gmail.com',
    to: 'omoyibooghenetega68@gmail.com',
    subject: 'attempting my zuri task',
    text: 'testing my email sending task'
}

mailTransporter.sendMail(details,(err) => {
    if(err) {
        console.log('it has an error',err);
    } else{
        console.log('email has been sent');
    }
})