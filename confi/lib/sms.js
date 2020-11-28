const twilio = require("twilio");
export const sendSms = (data, callback) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const appHash = process.env.OTP_APP_HASH;
  const client = twilio(accountSid, authToken);
  const { message, number } = data;
  client.messages
    .create({
      body: `${message}`,
      from: "+19109330107",
      to: "+91" + number,
    })
    .then((response) => {
      callback(response);
    })
    .catch((err) => {
      callback(err);
    });
};

export const getAllSms = (callback) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const appHash = process.env.OTP_APP_HASH;
  const client = twilio(accountSid, authToken);
  client.messages
    .list()
    .then((messages) => {
      callback(messages);
    })
    .catch((err) => {
      callback(err);
    });
};
