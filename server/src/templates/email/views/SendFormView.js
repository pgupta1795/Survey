const formEmailView = (user, message, formUrl) => `<p>Hello ${user.name},</p> \
<p><span><strong style="color: #3EB1C8;font-size: 1em;">Assess Your PLM Discipline Maturity :</strong></span></p> \
<p><span>The following assessment will reveal how mature your product life cycle management (PLM) process is, and how well your company is positioned to reap benefits similar to those realized by other PLM leaders. Your company's <strong style="color:c60000cc">(${user.organization})</strong> PLM maturity will be measured against PLM Five-Stage Model, across different dimensions: scope and focus, design and launch, life cycle value management, technology, and metrics. Upon completion of the assessment, either individually or as a team, your scores by dimension will be presented, together with recommendations on how to advance along your PLM maturity journey. </span></p>
<span><strong style="text-decoration: underline;">${message}</strong></span> \
<p><a href="${formUrl}"> \
<span style="color: #3EB1C8;font-size: 2.5em;"><strong>PLM Maturity Survey</strong></span></p> \
</a> \
<p><span>It is recommended to have multiple stakeholders complete the assessment to get both cross-functional and multilevel perspectives on how your PLM processes work today. Use the combined results of these assessments to guide dialogue across your organization on the current state of maturity of your process and the vision. From this insight, build your roadmap to improved maturity that drives greater business value and improved business performance. </span></p>
<pre><em><sub>Automated message from <span style="color: #3EB1C8;"><strong>TECHNIA</strong></span></sub></em></pre>
`;

module.exports = formEmailView;
