const express = require('express');
const nodemailer = require('nodemailer');
const session = require('express-session');
const app = express();

app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Set up the Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Endpoint to handle user signup and send verification email
app.post('/signup', (req, res) => {
  const { email } = req.body;

  // Generate a 6-digit verification code
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  // Store the verification code in the session (or database)
  req.session.verificationCode = verificationCode;

  // Send the email
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Verify your email',
    text: `Your verification code is: ${verificationCode}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to send email' });
    } else {
      return res.status(200).json({ message: 'Verification email sent' });
    }
  });
});

// Endpoint to verify the code
app.post('/verify-code', (req, res) => {
  const { code } = req.body;

  if (code === req.session.verificationCode) {
    return res.status(200).json({ message: 'Email verified successfully' });
  } else {
    return res.status(400).json({ error: 'Invalid verification code' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});