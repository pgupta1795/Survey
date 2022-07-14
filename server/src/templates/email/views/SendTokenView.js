const tokenEmailView = (token) => {
  const view = `
  <b>Hey there!</b>
  <br>You are just one step away from resetting your password.</br>
  <br>Here is the verification code ${token}</br>
  <br> You will also be prompted to set a new password immediately. This is to ensure that only you have access to your account. <br/>`;
  return view;
};

module.exports = tokenEmailView;
