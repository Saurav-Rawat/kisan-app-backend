const twilio = require("twilio");
const accountSid = "ACdc570419de374455d6bfd24b9bd564ec";
const authToken = "61e5f1610a677e5eb6f5aef51af34751";
export const sendSms = (data, callback) => {
  //   const appHash = process.env.OTP_APP_HASH;
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
