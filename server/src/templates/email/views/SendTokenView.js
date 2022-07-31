const tokenEmailView = (token) => {
  const view = `
    <div style="margin:1em;padding:1em;background: #2e3335;">
      <div
        style="box-shadow:-10px 0px 13px -7px #005F83;background:linear-gradient(to top, #3EB1C8 0%, #005F83 100%);display:grid;grid-template-columns:auto;gap:3em;align-items:center;font-size:1.1em;justify-content: space-between;padding:1em;border-radius: 10px;">
        <div style="font-size:1em;">
          Hey there!
          <br><br>You are just one step away from resetting your password.</br>
          <br>Here is the verification code : </br>
        </div>

        <div
          style="color: #2e3335;font-weight: bold;box-shadow: 1px 1px 1px #73DDF6;padding: 10px 10px;border-radius: 10px;background: #3EB1C8;height: 4em;font-size: 1em;display: flex;align-items: center; text-align: center;width: min(50vw,90%); word-break: break-all;height: fit-content;">
          ${token}
        </div>
        
        <div style="font-size:1em;margin-top: -1.5em;">
          <br>You will also be prompted to set a new password immediately. This is to ensure that only you have access
          to your account. </br>
        </div>
      </div>

      <div style="background:none;padding-top: 4em;">
        <img src="https://www.technia.com/wp-content/themes/techniatheme/library/img/logo.svg" alt="TECHNIA"
          style="width: min(250px,90%);">
      </div>
    </div>

  `;
  return view;
};

module.exports = tokenEmailView;
