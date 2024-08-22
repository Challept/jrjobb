const mailjet = require('node-mailjet').connect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_API_SECRET
  );
  
  exports.handler = async (event, context) => {
    const { email } = JSON.parse(event.body);
  
    // Generate a 6-digit verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
  
    const request = mailjet
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: "your-email@example.com", // Replace with your sender email
              Name: "Your Name or Company",
            },
            To: [
              {
                Email: email,
                Name: "Recipient Name",
              },
            ],
            Subject: "Verify your email",
            TextPart: `Your verification code is: ${verificationCode}`,
          },
        ],
      });
  
    try {
      const result = await request;
      console.log(result.body);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Verification email sent', code: verificationCode }),
      };
    } catch (err) {
      console.error(err.statusCode);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send email' }),
      };
    }
  };  