(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(17)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),i=t(4),s=t(5),g=t(7),o=t(6),m=t(1),u=t.n(m),d=function(e){var a=e.selectedPage,t=e.prevPageHandler;return l.a.createElement("li",{className:"page-item",onClick:t},l.a.createElement("a",{className:u()("page-link",{"text-danger disable":1===a}),href:"#".concat(a)},"Previous"))},p=function(e){var a=e.pagesQuantity,t=e.selectedPage,n=e.nextPageHandler;return l.a.createElement("li",{className:"page-item",onClick:function(){n(a)}},l.a.createElement("a",{className:u()("page-link",{"text-danger disable":t===a}),href:"#".concat(t)},"Next"))},P=(t(14),function(){return l.a.createElement("div",{className:"container news"},l.a.createElement("p",{className:"news__date"},"\u041c\u0410\u0420\u0422 16, 2021"),l.a.createElement("h2",null,"\u0411\u044b\u0432\u0448\u0438\u0439 \u043d\u0430\u0440\u043a\u043e\u0431\u0430\u0440\u043e\u043d \u043e\u0431\u0432\u0438\u043d\u0438\u043b \u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430 \u0413\u043e\u043d\u0434\u0443\u0440\u0430\u0441\u0430 \u0432 \u043a\u043e\u0440\u0440\u0443\u043f\u0446\u0438\u0438"),l.a.createElement("div",{className:"news__main main"},l.a.createElement("img",{alt:"person",className:"main__image",src:"https://gdb.voanews.com/1f8970ee-f9a6-4ab4-a363-b059d2a7a4ab_w1023_r1_s.jpg"}),l.a.createElement("p",null,"\u041b\u0435\u043e\u043d\u0435\u043b \u0420\u0438\u0432\u0435\u0440\u0430 \u0437\u0430\u044f\u0432\u0438\u043b \u0432 \u0441\u0443\u0434\u0435, \u0447\u0442\u043e \u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442 \u0425\u0443\u0430\u043d \u041e\u0440\u043b\u0430\u043d\u0434\u043e \u042d\u0440\u043d\u0430\u043d\u0434\u0435\u0441",l.a.createElement("br",null),"\u043e\u0431\u043c\u0430\u043d\u044b\u0432\u0430\u043b \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0421\u0428\u0410 \u043f\u043e \u0431\u043e\u0440\u044c\u0431\u0435 \u0441 \u043d\u0430\u0440\u043a\u043e\u0442\u0438\u043a\u0430\u043c\u0438")))}),f=(t(15),function(e){var a=e.total,t=e.perPage,n=e.page,r=e.handlerPage,c=e.prevPageHandler,i=e.nextPageHandler,s=e.withInfo,g=Math.ceil(a/t),o=Array(g).fill(1);return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"pagination"},l.a.createElement(d,{selectedPage:n,prevPageHandler:c}),o.map((function(e,a){return l.a.createElement("li",{key:a+1,className:u()("page-item",{active:a+1===n}),onClick:function(e){e.preventDefault(),r(a+1)}},l.a.createElement("a",{className:"page-link",href:a+1},a+1))})),l.a.createElement(p,{pagesQuantity:g,selectedPage:n,nextPageHandler:i})),n>=s&&l.a.createElement(P,null))}),E=(t(16),function(e){Object(g.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={selectedPage:1},e.onPageChange=function(a){e.setState({selectedPage:a})},e.nextPageHandler=function(a){e.setState((function(e){return e.selectedPage===a?0:{selectedPage:e.selectedPage+1}}))},e.prevPageHandler=function(){e.setState((function(e){return 1===e.selectedPage?0:{selectedPage:e.selectedPage-1}}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state.selectedPage;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Pagination"),l.a.createElement("nav",{"aria-label":"Page navigation example"},l.a.createElement(f,{total:42,perPage:5,page:e,handlerPage:this.onPageChange,prevPageHandler:this.prevPageHandler,nextPageHandler:this.nextPageHandler,withInfo:6})))}}]),t}(l.a.PureComponent));c.a.render(l.a.createElement(E,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.f02fd1d3.chunk.js.map