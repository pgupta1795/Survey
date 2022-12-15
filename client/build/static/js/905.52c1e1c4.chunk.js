"use strict";(self.webpackChunksurvey=self.webpackChunksurvey||[]).push([[905],{70905:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var i=t(29439),s=t(13239),o=t(72791),r=t(21593),a=t(1428),c=t(87122),l=t(36151),d=t(84557),u=t(2207),x=t(72802),v=t(75337),h=t(80184),p=function(n){var e=n.organizations,t=n.organization,i=n.setOrganization;return(0,h.jsx)(d.Z,{ariaLabel:"SpeedDial basic example",sx:{position:"fixed",bottom:25,right:25},icon:(0,h.jsx)(x.Z,{icon:(0,h.jsx)(c.Z,{})}),children:null===e||void 0===e?void 0:e.map((function(n){var e=Object.keys(n)[0],s=Object.keys(t)[0];return(0,h.jsx)(u.Z,{FabProps:{variant:"extended"},icon:(0,h.jsx)(l.Z,{startIcon:s===e?(0,h.jsx)(a.Z,{}):null,variant:"text",component:"div",children:e}),tooltipTitle:e,onClick:function(){i(n),(0,v.u)()}},e)}))})},m=t(93044),j=t(61889),Z=t(90493),f=t(84852),g=t(20653),b=t(10703),y=t(20890),w=t(59434),P=t(16871),O=t(22733),k=t(17951),z=t(57406),S=t(99576),D=t(47047),Q=t(53012),q=t(1413),R=t(45987),F=t(13496),C=t(13967),L=t(70049),_=t(65169),A=t(98662),B=["activeQuestion","activeSection"],I=function(n){var e=n.activeQuestion,t=n.activeSection,i=(0,R.Z)(n,B),s=(0,C.Z)(),o={series:[],options:{chart:{id:"".concat(e._id),toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0}}},fill:{type:"gradient"},yaxis:{labels:{show:!0}},xaxis:{labels:{show:!1}},plotOptions:{bar:{horizontal:!0,columnWidth:"70%",borderRadius:4,dataLabels:{position:"bottom",maxItems:100,hideOverflowingLabels:!0}}},colors:[L.Z.GRAPH_COLOR_1],legend:{show:!1}}},r=(0,w.v9)((function(n){var e;return null===n||void 0===n||null===(e=n.response)||void 0===e?void 0:e.value})),a=(0,_.Z)(r,o,A.ZP.getQuestionAnswerSeries,{activeQuestion:e,activeSection:t},s.palette.mode);return(0,h.jsxs)("div",{className:"question-response-chart",children:[(0,h.jsx)(y.Z,{sx:{typography:{xs:"smallQuestion",sm:"body2",md:"question"}},children:e.text}),(0,h.jsx)("div",(0,q.Z)((0,q.Z)({className:"apex-chart"},i),{},{children:(0,h.jsx)(F.Z,{options:a.options,series:a.series,type:"bar",height:"300"})}))]})},U=function(n){var e,t,i,s,o=n.data,r=(0,Q.Z)(null===o||void 0===o||null===(e=o.formData)||void 0===e?void 0:e.sections,"text"),a=r.activeStep,c=r.BasicStepper;return(0,h.jsx)(j.ZP,{component:b.Z,item:!0,sx:{width:"100%",p:1},children:null!==o&&void 0!==o&&null!==(t=o.formData)&&void 0!==t&&t.sections?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(y.Z,{sx:{mb:5,typography:{xs:"body2",sm:"body2",md:"question"},color:"primary.main"},children:["Responses for the Section -",(0,h.jsx)("strong",{children:null===(i=o.formData.sections[a])||void 0===i?void 0:i.name})]}),null===(s=o.formData.sections[a])||void 0===s?void 0:s.questions.map((function(n){return(0,h.jsx)(I,{activeQuestion:n,activeSection:o.formData.sections[a]},n._id)})),c]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(D.Z,{variant:"rectangular",height:150}),(0,h.jsx)(D.Z,{variant:"rectangular",height:150})]})})},M=function(n){var e=n.organization,t=(0,P.UO)().formId,i=Object.keys(e)[0],s=Object.values(e)[0][0]._id,o=k.Z.getUrlByUser(t,s),r=(0,O.Z)(!1,s),a=r.savePDF,c=r.Report,l=(0,w.v9)((function(n){var e;return null===n||void 0===n||null===(e=n.response)||void 0===e?void 0:e.value}));return(0,h.jsxs)(j.ZP,{container:!0,sx:{mt:2,gap:3,width:"min(100%, 85vw)"},children:[(0,h.jsx)(j.ZP,{component:b.Z,item:!0,sx:{width:"100%",p:1,textAlign:"center"},children:(0,h.jsx)(Z.Z,{sx:{wordBreak:"break-word"},children:(0,h.jsxs)(f.ZP,{alignItems:"flex-start",children:[(0,h.jsx)(g.Z,{children:(0,h.jsx)(m.Z,{alt:"Users",sx:{bgcolor:"primary.main"}})}),(0,h.jsxs)(j.ZP,{container:!0,direction:"column",spacing:"2",component:"p",children:[(0,h.jsx)(y.Z,{component:"span",sx:{typography:{xs:"smallQuestion",sm:"smallQuestion",md:"question"},color:"primary.main"},children:"Who has Responded ?"}),Object.values(e)[0].map((function(n){var e=n.email;return(0,h.jsxs)(y.Z,{component:"span",variant:"body2",children:[(0,h.jsx)("strong",{children:"\u2022"})," ",e]},e)}))]})]})})}),(0,h.jsx)(U,{data:l}),(0,h.jsx)(j.ZP,{item:!0,sx:{width:"100%",p:1,textAlign:"center"},children:(0,h.jsxs)(j.ZP,{container:!0,direction:"column",spacing:"5",justifyContent:"center",children:[(0,h.jsx)(y.Z,{variant:"question",children:(0,h.jsx)("strong",{children:"PLM Maturity Report for ".concat(i)})}),(0,h.jsx)(S.Z,{url:o,variant:"text"}),(0,h.jsx)(z.Z,{savePDF:a,variant:"text"}),c]})})]})},N=function(){var n=(0,r.qi)(),e=n.loading,t=n.organizations,a=(0,o.useState)(null),c=(0,i.Z)(a,2),l=c[0],d=c[1];return(0,o.useEffect)((function(){return e||d(t[0]),function(){d(null)}}),[e]),(0,h.jsx)(r.l0,{children:(0,h.jsx)(r.Bo,{children:!e&&t&&l?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(M,{organization:l}),(0,h.jsx)(p,{organization:l,organizations:t,setOrganization:d})]}):(0,h.jsx)(s.Z,{})})})}}}]);
//# sourceMappingURL=905.52c1e1c4.chunk.js.map