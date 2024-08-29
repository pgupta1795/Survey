const reportEmailView = (user) => `<p>Hello ${user.name},</p> \
<p><span><strong style="color: #3EB1C8;font-size: 1em;">Assess Your PLM Discipline Maturity :</strong></span></p> \
<p><span>The following assessment reveals how mature your product life cycle management (PLM) process is, and how well your company is positioned to reap benefits similar to those realized by other PLM leaders. Your company's <strong style="color:c60000cc">(${user.organization})</strong> PLM maturity is measured against multiple Stage Model, across different dimensions: scope and focus, design and launch, life cycle value management, technology, and metrics. Upon completion of the assessment, either individually or as a team, your scores by dimension are presented, together with recommendations on how to advance along your PLM maturity journey. </span></p>
<span><strong style="text-decoration: underline;">Please find the attached <span style="color: #3EB1C8;font-size: 2.5em;">PLM Maturity Survey </span></strong>Report</span> \
<p><span>The assessment measures cross-functional and multilevel perspectives on how your PLM processes work today. The results of these assessments may be used to guide dialogue across your organization on the current state of maturity of your process and the vision. From this insight, build your roadmap to improved maturity that drives greater business value and improved business performance. </span></p>
<pre><em><sub>Automated message from <span style="color: #3EB1C8;"><strong>TECHNIA</strong></span></sub></em></pre>
`;

module.exports = reportEmailView;
