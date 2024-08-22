const twilio = require('twilio');

const accountSid = 'AC7fc63676c9e461101d22e5b550c44063'; // Your Account SID
const authToken = '3d9db878052bdba641722f106cd5ebad'; // Your Auth Token
const client = twilio(accountSid, authToken);

exports.handler = async (event, context) => {
  const { phoneNumber } = JSON.parse(event.body);

  // Generate a 6-digit verification code
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    const message = await client.messages.create({
      body: `Your verification code is: ${verificationCode}`,
      from: '+13343732237', // Your Twilio phone number
      to: phoneNumber,
    });

    console.log(message.sid);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Verification SMS sent', code: verificationCode }),
    };
  } catch (error) {
    console.error('Failed to send SMS:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send SMS' }),
    };
  }
};