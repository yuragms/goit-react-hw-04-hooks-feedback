(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{13:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c,a,r,o,i,s=n(1),b=n.n(s),j=n(6),d=n.n(j),u=(n(13),n(4)),l=n(2),O=n(3),h=O.a.button(c||(c=Object(l.a)(["\n  font-size: 20px;\n  font-weight: 600;\n  margin-right: 10px;\n"]))),f=n(0),x=function(e){var t=e.options,n=e.onLeaveFeedback;return Object.keys(t).map((function(e){return Object(f.jsxs)(h,{onClick:function(){return n(e)},children:[" ",e]},e)}))},g=O.a.p(a||(a=Object(l.a)(["\n  font-size: 20px;\n  color: grey;\n"]))),p=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.countPositiveFeedbackPercentage;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(g,{children:["Good: ",t]}),Object(f.jsxs)(g,{children:["Neutral: ",n]}),Object(f.jsxs)(g,{children:["Bad: ",c]}),Object(f.jsxs)(g,{children:["Total: ",a]}),Object(f.jsxs)(g,{children:["Positive Feedback: ",r,"%"]})]})},k=O.a.h1(r||(r=Object(l.a)(["\n  font-size: 20px;\n  font-weight: 600;\n"]))),v=O.a.section(o||(o=Object(l.a)(["\n  padding: 10px 40px;\n"]))),m=function(e){var t=e.title,n=e.children;return Object(f.jsxs)(v,{children:[Object(f.jsx)(k,{children:t}),n]})},w=O.a.p(i||(i=Object(l.a)(["\n  font-size: 30px;\n  color: tomato;\n  margin-left: 20px;\n"])));function F(e){var t=e.message;return Object(f.jsx)(w,{children:t})}n(18);var P=function(){var e=Object(s.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(0),r=Object(u.a)(a,2),o=r[0],i=r[1],b=Object(s.useState)(0),j=Object(u.a)(b,2),d=j[0],l=j[1],O={good:n,neutral:o,bad:d};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m,{title:"Please leave feedback",children:Object(f.jsx)(x,{options:O,onLeaveFeedback:function(e){switch(e){case"good":c((function(e){return e+1}));break;case"neutral":i((function(e){return e+1}));break;case"bad":l((function(e){return e+1}));break;default:return}}})}),n||o||d?Object(f.jsx)(m,{title:"Statistics",children:Object(f.jsx)(p,{good:n,neutral:o,bad:d,total:n+o+d,countPositiveFeedbackPercentage:Math.round(100*n/(n+o+d))})}):Object(f.jsx)(F,{message:"No feedback given"})]})};d.a.render(Object(f.jsx)(b.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.758365e6.chunk.js.map