const reportEmailView = () => {
  const view = `
    <div style="margin:1em;padding:1em;background: #2e3335;font-weight: 600;">
      <div
        style="box-shadow:-10px 0px 13px -7px #005F83;background:linear-gradient(to top, #3EB1C8 0%, #005F83 100%);display:grid;grid-template-columns:auto;gap:3em;align-items:center;font-size:1.1em;justify-content: space-between;padding:1em;border-radius: 10px;">
        <div style="font-size:1.5em;">
          Please find the attached PLM Maturity Report
        </div>
      </div>
      <div style="background:none;padding-top:4em;">
        <img src="https://www.technia.com/wp-content/themes/techniatheme/library/img/logo.svg" alt="TECHNIA" style="width: min(250px,90%);">
      </div>
    </div>
  `;
  return view;
};

module.exports = reportEmailView;
