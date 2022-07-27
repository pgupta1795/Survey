const formEmailView = (message, formUrl) => {
  const view = `
    <div style="margin:1em;padding:1em;background: #2e3335;font-weight: 600;">
      <div
        style="box-shadow:-10px 0px 13px -7px #005F83;background:linear-gradient(to top, #3EB1C8 0%, #005F83 100%);display:grid;grid-template-columns:auto;gap:3em;align-items:center;font-size:1.1em;justify-content: space-between;padding:1em;border-radius: 10px;">
        <div style="font-size:1.5em;">
          ${message}
        </div>
        <button
          style="width:fit-content;font-weight: bold;box-shadow: 1px 1px 1px #73DDF6;padding: 10px 15px;border-radius: 10px;border: 1px solid #005F83;background: #3EB1C8;height: 4em;font-size: 1em;">
          <a href=${formUrl} style="text-decoration: none;color: #2e3335;">
            FILL OUT FORM
          </a>
        </button>
      </div>
      <div style="background:none;padding-top: 4em;">
        <img src="https://www.technia.com/wp-content/themes/techniatheme/library/img/logo.svg" alt="TECHNIA" style="width: min(250px,90%);">
      </div>
    </div>
  `;
  return view;
};

module.exports = formEmailView;
