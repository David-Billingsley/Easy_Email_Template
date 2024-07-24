# EmailTemplate
    This is to allow beginners to easily send emails.  This project contains some
    basic templates.  This package is possible due to nodemailer.  This is just an 
    easy wraper for users to use node mailer

## textEmail
    This function sends email with only text based body.

    Example: 
        textEmail('smtp.office365.com', 587, 'user@user.com', 'password', 'user2@user.com', 'user@user.com', 'this is the subject', 'this is the body')

    Requirments:
        Host - This is the SMTP host address for your server
        Port - The port number for your email server
        Username -  The senders email username 
        Password - The senders email password 
        To - Who do you want in the To email line 
        From - Who you are sending the email to 
        Subject- The subject line of the email 
        Body - The text you wish to send in the email

## htmlEmail    
    This function sends email with only html based body.

    Requirments:
        Host - This is the SMTP host address for your server
        Port - The port number for your email server
        Username -  The senders email username 
        Password - The senders email password 
        To - Who do you want in the To email line 
        From - Who you are sending the email to 
        Subject- The subject line of the email 
        html - The html you wish to send in the email