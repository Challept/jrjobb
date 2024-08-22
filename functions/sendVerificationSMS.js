const twilio = require('twilio');

exports.handler = async (event, context) => {
  const { phoneNumber } = JSON.parse(event.body);

  // Generate a 6-digit verification code
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  // Twilio credentials
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = new twilio(accountSid, authToken);

  try {
    await client.messages.create({
      body: `Your verification code is ${verificationCode}`,
      to: phoneNumber, // The user's phone number
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Verification code sent successfully', code: verificationCode }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send SMS' }),
    };
  }
};