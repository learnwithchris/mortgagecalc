(this.webpackJsonpmortgagecalc=this.webpackJsonpmortgagecalc||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),o=a.n(l),c=a(4),s=a(1),u=a(5),m=a(6),i=a(7),h=a(8);a(14);var d=function(e){Object(h.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={amount:"",rate:"",years:"",payment:0,touched:{amount:!1,rate:!1,years:!1}},e.handleUserChange=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.handleBlur=function(t){return function(a){e.setState({touched:Object(c.a)({},e.state.touched,Object(s.a)({},t,!0))})}},e.handleSubmit=function(t){t.preventDefault(),e.calculatePayment()},e.calculatePayment=function(){var t=e.state,a=t.amount,n=t.rate/1200,r=12*t.years,l=(a*n/(1-Math.pow(1+n,-r))).toFixed(2);e.setState({payment:l})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=function(e,t,a){return{amount:0===e.length||isNaN(e),rate:0===t.length||isNaN(t),years:0===a.length||isNaN(a)}}(t.amount,t.rate,t.years),n=Object.keys(a).some((function(e){return a[e]})),l=function(t){var n=a[t],r=e.state.touched[t];return!!n&&r};return r.a.createElement("div",{className:"container col-md-6"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",null,"Loan Amount"),r.a.createElement("input",{type:"text",className:"form-control ".concat(l("amount")?"error":""),name:"amount",value:this.state.amount,onChange:this.handleUserChange,onBlur:this.handleBlur("amount"),placeholder:"Enter loan amount"})),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",null,"Annual Rate"),r.a.createElement("input",{type:"text",className:"form-control ".concat(l("rate")?"error":""),name:"rate",value:this.state.rate,onChange:this.handleUserChange,onBlur:this.handleBlur("rate"),placeholder:"Enter annual rate (as a %)"})),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",null,"Loan Length"),r.a.createElement("input",{type:"text",className:"form-control ".concat(l("years")?"error":""),name:"years",value:this.state.years,onChange:this.handleUserChange,onBlur:this.handleBlur("years"),placeholder:"Enter loan length (in years)"})),r.a.createElement("div",{className:"form-group row"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:n},"calculate")),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",null,"Payment"),r.a.createElement("input",{type:"text",className:"form-control",name:"payment",value:this.state.payment,readOnly:!0}))))}}]),a}(n.Component);var p=function(){return r.a.createElement("div",{className:"container col-md-9"},r.a.createElement(d,null))};a(15);o.a.render(r.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.b140a2c3.chunk.js.map