# easy-email-template
    This is to allow beginners to easily send emails.  This project contains
    some basic templates.  This package is only possible due to the 
    nodemailer package. This is just an easy wrapper for users to use 
    nodemailer in a quick way.

## Feedback / Questions / Issues / Request:
    I welcome all feedback.  Please add any feedback, questions, request to the
    github issue tracker and I will responds as soon as I can.  Thank you.

## textEmail
    This function sends email with only text based body.

    To call the function after importing please do the following ( replacing
    the placeholders with your info ): textEmail('smtp.office365.com', 587, 
    'user@user.com', 'password', 'user2@user.com', 'user@user.com', 
    'this is the subject', 'this is the body')

    Requirements:
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

    Requirements:
        Host - This is the SMTP host address for your server
        Port - The port number for your email server
        Username -  The senders email username 
        Password - The senders email password 
        To - Who do you want in the To email line 
        From - Who you are sending the email to 
        Subject- The subject line of the email 
        html - The html you wish to send in the email

## attachmentEmail
    This function sends email with only text based body with attachments.
    The attachment parameters is json data type.

    To call the function after importing please do the following ( replacing
    the placeholders with your info ): attachmentEmail('smtp.office365.com', 587, 
    'user@user.com', 'password', 'user2@user.com', 'user@user.com', 
    'this is the subject', 'this is the body', [{id: value}])

    Requirements:
        Host - This is the SMTP host address for your server
        Port - The port number for your email server
        Username -  The senders email username 
        Password - The senders email password 
        To - Who do you want in the To email line 
        From - Who you are sending the email to 
        Subject- The subject line of the email 
        Body - The text you wish to send in the email
        Attachments- This is a json data type with two different methods of adding
        a file.  Please see folder JsonExamples\emailattachment for the two different
        methods of sending emails.
