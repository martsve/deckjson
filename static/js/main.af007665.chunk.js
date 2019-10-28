(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,n){e.exports=n(41)},33:function(e,t,n){},34:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),l=n.n(c),i=(n(33),n(34),n(3)),o=function(e){var t=Object(i.c)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Main"},r.a.createElement("h1",null,"Configuration"),r.a.createElement("button",{onClick:function(){t({type:"RESET"}),e.history.push("/")}},"Reset localstorage")))},s=n(2),u=n(4),m=n(12),d=function(e,t){t=t||",";for(var n=new RegExp("(\\"+t+'|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\'+t+"\\r\\n]*))","gi"),a=[[]],r=null;r=n.exec(e);){var c,l=r[1];l.length&&l!==t&&a.push([]),c=r[2]?r[2].replace(new RegExp('""',"g"),'"'):r[3],a[a.length-1].push(c)}return a},p=function(){return Array.from(Array(32)).map((function(e,t){var n=12===t?4:(+new Date+16*Math.random())%16|0;return"".concat(~[8,12,16,20].indexOf(t)?"-":"").concat((16===t?3&n|8:n).toString(16))})).join("")};var f=function(e,t){t=t.replace("/[^a-zA-Z0-9\\.\\-]/ig","_");var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),n.setAttribute("download",t),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)};var E=function(e){return(e=e||"").toLowerCase().endsWith(".csv")?"csv":e.toLowerCase().endsWith(".json")?"json":e.toLowerCase().endsWith(".txt")?"txt":e.toLowerCase().endsWith(".dec")?"dec":e.toLowerCase().endsWith(".dek")?"dek":null},b=function(e){var t="planeswalker",n={"":"c",W:"w",U:"u",B:"b",R:"r",G:"g",UW:"guild-azorius",BW:"guild-orzhov",RW:"guild-boros",GW:"guild-selesnya",BU:"guild-dimir",BG:"guild-golgari",GR:"guild-gruul",RU:"guild-izzet",BR:"guild-rakdos",GU:"guild-simic",BGW:"clan-abzan",RUW:"clan-jeskai",BRW:"clan-mardu",BGU:"clan-sultai",GRU:"clan-temur",BGR:"clan-atarka",GUW:"clan-dromoka",BRU:"clan-kolaghan",BUW:"clan-ojutai",GRW:"clan-silumgar",GRUW:"planeswalker",BRUW:"planeswalker",BGUW:"planeswalker",BGRW:"planeswalker",BGRU:"planeswalker",BGRUW:"planeswalker"};return void 0!==e.colorIdentity&&n[e.colorIdentity]&&(t=n[e.colorIdentity]),"ms-"+t},v=n(13),h=n.n(v),k=n(16),O=function(){var e=Object(k.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.cards.filter((function(e){return e.commander})))){e.next=11;break}return e.prev=2,e.next=5,fetch("https://api.scryfall.com/cards/named?fuzzy="+encodeURIComponent(n[0].name)).then((function(e){return e.json()})).then((function(e){var n=e.color_identity;return n.sort(),t.colorIdentity=n.join(""),e.card_faces?t.coverArt=e.card_faces[0].image_uris.art_crop:e.image_uris&&(t.coverArt=e.image_uris.art_crop),t}));case 5:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),g=function(e,t,n){var a;switch(t){case"csv":a=y(e,n);break;case"txt":a=j(e,n);break;case"json":a=x(e,n);break;case"dec":case"dek":a=C(e,n);break;default:a=null}return null!==a?(a.id=p(),{success:!0,deck:a}):{success:!1,error:"Unsupported format"}},y=function(e,t){var n=e.trim().split("\n")[0],a=n.indexOf("\t")>-1?"\t":void 0;void 0===a&&(a=n.indexOf(";")>-1?":":void 0),void 0===a&&(a=n.indexOf(",")>-1?",":void 0);var r=d(e.trim(),a),c=r[0];r.shift();var l={};return c.forEach((function(e){l[e]=c.indexOf(e)})),{name:t,cards:r.map((function(e){return function(e){function t(t,n){var a=void 0!==l[t]&&l[t]>-1?e[l[t]]:void 0;return n&&void 0!==a&&(a=n(a)),a}var n={name:t("Name"),count:t("QuantityX",(function(e){return parseInt(e.replace("x",""))})),set:t("Edition code"),number:t("Collector's number"),foil:t("Foil",(function(e){return"Foil"===e})),price:t("Price (total)",(function(e){return parseFloat(e)})),currency:t("Currency"),multiverseId:t("MultiverseID"),scryfallId:t("Scryfall ID"),proxy:t("Tag",(function(e){return e.indexOf("Proxy")>-1}))};return n.price=n.price||t("Price",(function(e){return parseFloat(e.split(" ")[1])})),n.currency=n.currency||t("Price",(function(e){return e.split(" ")[0]})),n.edition=n.edition||t("Edition"),n}(e)}))}},j=function(e,t){var n=e.trim().replace(/\r/gi,"").replace(/\t/gi," ").replace(/ +/gi," ").split("\n"),a=null,r=n.map((function(e){if(0===e.length)return a="Sideboard",null;if(e.startsWith("//"))return null;var t=e.split(" "),n=!1,r=null,c=null;if(e.match(/^[a-zA-Z]+$/))return a=e,null;"SB:"===t[0]&&(n=!0,t.shift());var l=parseInt(t[0].replace(/x/gi,""));t.shift();var i=t.join(" "),o=i.match(/(.*?) \(([a-z0-9]+)\) ([a-z0-9]+)$/i);return o&&(i=o[1],r=o[2],c=o[3]),(o=i.match(/(.*?) \(([a-z0-9]+)\)$/i))&&(i=o[1],r=o[2]),{count:l,name:i,set:r||void 0,number:c||void 0,sideboard:!("Sideboard"!==a&&!n)||void 0,category:a&&"Sideboard"!==a?a:void 0}}));return{name:t,cards:r.filter((function(e){return e}))}},N=n(11);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var x=function(e,t){var n=JSON.parse(e);return n.cards?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(N.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{name:t}):null},C=function(e,t){return{name:t,cards:e.trim().replace(/\r/gi,"").replace(/\t/gi," ").replace(/ +/gi," ").split("\n").map((function(e){if(e.startsWith("//")||0===e.length)return null;var t=e.split(" "),n=!1;"SB:"===t[0]&&(n=!0,t.shift());var a=parseInt(t[0].replace(/x/gi,""));return t.shift(),{count:a,name:t.join(" "),sideboard:!!n||void 0}})).filter((function(e){return e}))}},S=function(e){var t=function(e){return e.count+" "+e.name+(e.set&&e.number?" ("+e.set+") "+e.number:"")},n=e.cards.filter((function(e){return!e.sideboard})),a=e.cards.filter((function(e){return e.sideboard})),r=n.map(t);return(r=(r=r.concat([""])).concat(a.map(t))).join("\n")},D=function(e){return e.cards.map((function(e){return(e.sideboard?"SB: ":"")+e.count+" "+e.name})).join("\n")},P=function(e){return e.cards.map((function(e){return(e.sideboard?"SB: ":"")+e.count+" "+e.name})).join("\n")};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){Object(N.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){var t=e.deck,n=e.editable,c=e.setDeck,l=Object(a.useState)("table"),i=Object(s.a)(l,2),o=i[0],u=i[1],m=Object(a.useState)(null),d=Object(s.a)(m,2),p=d[0],f=d[1],E=Object(a.useState)(null),b=Object(s.a)(E,2),v=b[0],h=b[1];function k(e){function t(e){a(parseInt(e.target.dataset.id))}function a(t){h(R({},e.cards[t])),f(t)}var l=new Set;for(var i in e.cards){var o=Object.keys(e.cards[i]);for(var u in o)l.add(o[u])}return l=Array.from(l),r.a.createElement("table",{width:"100%"},r.a.createElement("thead",null,r.a.createElement("tr",null,function(e){return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("th",null,"Edit"),Object.entries(e).map((function(e){var t=Object(s.a)(e,2),n=(t[0],t[1]);return r.a.createElement("th",{key:n},n)})))}(l))),r.a.createElement("tbody",null,function(l,i){var o=0;return r.a.createElement(r.a.Fragment,null,Object.entries(l).map((function(a){var l=Object(s.a)(a,2),u=l[0],m=l[1],d=o++;return d===p&&v?r.a.createElement("tr",{key:u},r.a.createElement("td",{colSpan:"999"},r.a.createElement("button",{"data-id":d,onClick:function(){return f(null)}},"x"),r.a.createElement("div",{className:"edit"},function(e,t){return r.a.createElement(r.a.Fragment,null,Object.entries(t).map((function(t){var n=Object(s.a)(t,2),a=(n[0],n[1]);return r.a.createElement("div",{className:"editLine",key:a},r.a.createElement("b",null,a,":"),r.a.createElement("input",{id:"edit_"+a,defaultValue:JSON.stringify(e[a])}))})))}(v,i),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{"data-id":d,onClick:function(){return function(t){for(var n in t){var a=t[n],r=document.getElementById("edit_"+a).value;document.getElementById("edit_"+a).classList.remove("invalid");try{v[a]=r.length?JSON.parse(r):void 0}catch(i){return void document.getElementById("edit_"+a).classList.add("invalid")}}var l=R({},e);l.cards[p]=v,f(null),h(null),c(l)}(i)}},"Save"),r.a.createElement("button",{"data-id":d,onClick:function(){return function(){var t=R({},e);delete t.cards[p],f(null),h(null),c(t)}()}},"Delete"))))):r.a.createElement("tr",{key:u},n&&r.a.createElement("td",null,r.a.createElement("button",{"data-id":d,onClick:t},"...")),function(e,t){return r.a.createElement(r.a.Fragment,null,Object.entries(t).map((function(t){var n=Object(s.a)(t,2),a=(n[0],n[1]);return r.a.createElement("td",{key:a},function(e){return void 0===e?"":"boolean"==typeof e?e?"X":"":e}(e[a]))})))}(m,i))})),n&&r.a.createElement("tr",{key:"add"},r.a.createElement("td",{colSpan:"999"},r.a.createElement("button",{onClick:function(){return function(){var t=R({},e);t.cards.push({}),a(t.cards.length-1),c(t)}()}},"+"))))}(e.cards,l)))}return r.a.createElement("div",{className:"deckListContainer"},r.a.createElement("ul",{className:"view"},r.a.createElement("button",{className:"table"===o?"active":"",onClick:function(){return u("table")}},"Table"),r.a.createElement("button",{className:"list"===o?"active":"",onClick:function(){return u("list")}},"List view"),r.a.createElement("button",{className:"json"===o?"active":"",onClick:function(){return u("json")}},"JSON")),r.a.createElement("div",{className:"list"},function(e){switch(e){case"table":return k(t);case"json":return function(e){return r.a.createElement("pre",null,JSON.stringify(e,null,2))}(t);default:return function(e){return r.a.createElement("pre",null,S(e))}(t)}}(o)))},F=Object(i.b)((function(e){return{}}))((function(e){var t=e.history,n=Object(a.useState)(""),c=Object(s.a)(n,2),l=c[0],o=c[1],u=Object(a.useState)(null),m=Object(s.a)(u,2),d=m[0],p=m[1],f=Object(a.useState)(null),b=Object(s.a)(f,2),v=b[0],h=b[1],k=Object(a.useState)(null),O=Object(s.a)(k,2),y=O[0],j=O[1],N=Object(i.c)(),w="";if(d&&null===y){var x=g(d,v,l);x.success?j(x.deck):w=x.error}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Import a new deck"),r.a.createElement("section",null,r.a.createElement("p",null,"Import most standard deck formats. Use .txt file extension if you are unsure. Tetst files can be found at ",r.a.createElement("a",{href:"https://github.com/martsve/deckjson/"},"Github"),". (",r.a.createElement("a",{href:"https://raw.githubusercontent.com/martsve/deckjson/master/test/delver.csv"},"Delver lens csv"),",",r.a.createElement("a",{href:"https://raw.githubusercontent.com/martsve/deckjson/master/test/arena.txt"},"Arena list"),",",r.a.createElement("a",{href:"https://raw.githubusercontent.com/martsve/deckjson/master/test/mtgo.txt"},"MTGO list"),",",r.a.createElement("a",{href:"https://raw.githubusercontent.com/martsve/deckjson/master/test/misc.dec"},"Misc dec/dek file"),",",r.a.createElement("a",{href:"https://raw.githubusercontent.com/martsve/deckjson/master/test/strange.txt"},"Guess file"),", )"),r.a.createElement("form",{key:"inputform",action:"#",onSubmit:function(){return!1}},r.a.createElement("input",{key:"fileinput",type:"file",id:"fileinput",onChange:function(e){var t=e.target.files[0];if(t){var n=new FileReader;n.onload=function(e){p(e.target.result),h(E(t.name)),o(t.name),j(null)},n.readAsText(t)}}}))),y?r.a.createElement("section",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"deckNameInput"},"Deck name"),r.a.createElement("input",{id:"deckNameInput",value:l,onChange:function(e){return function(e){o(e),j(null)}(e.target.value)}}),r.a.createElement("button",{onClick:function(){N({type:"SAVEDECK",deck:y}),j(null),p(null),t.push(y.id)}},r.a.createElement("span",{className:"icon-plus"}))),r.a.createElement(B,{deck:y})):r.a.createElement(r.a.Fragment,null),w&&r.a.createElement("section",{className:"error"},w))})),U=function(){return r.a.createElement("div",{className:"Main"},r.a.createElement("h1",null,"Not found"))};function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var A=Object(i.b)((function(e){return{decks:e.decks}}))((function(e){var t=e.history,n=e.match,a=e.decks,c=Object(i.c)(),l=n.params.id,o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(n,!0).forEach((function(t){Object(N.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a.filter((function(e){return e.id===l}))[0]);if(!o)return r.a.createElement(U,null);var s=a.indexOf(a.filter((function(e){return e.id===l}))[0]);var u=function(){var e=Object(k.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in o.cards)o.cards[n].commander=void 0;if(0!==t){e.next=5;break}c({type:"UPDATEDECK",deck:o}),e.next=10;break;case 5:return o.cards[t-1].commander=!0,e.next=8,O(o);case 8:o=e.sent,c({type:"UPDATEDECK",index:s,deck:o});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement("i",{className:"large ms "+b(o)})," ",o.name),r.a.createElement("div",{className:"buttons"},"Set commander: "," ",r.a.createElement("select",{onChange:function(){var e=Object(k.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(parseInt(t.target.options[t.target.selectedIndex].value));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},r.a.createElement("option",{value:"0"}),o.cards.map((function(e,t){return console.log(e),r.a.createElement("option",{selected:e.commander?"selected":"",key:t,value:parseInt(t)+1},e.name)})))),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){f(JSON.stringify(o,null,2),o.name+".json")}},"Export deck as JSON"),r.a.createElement("button",{onClick:function(){f(D(o),o.name+".txt")}},"Export deck as text file"),r.a.createElement("button",{onClick:function(){f(S(o),o.name+".clip")}},"Export deck as MTGA clipboard"),r.a.createElement("button",{onClick:function(){f(P(o),o.name+".dek")}},"Export deck as MTGO .dek"),r.a.createElement("button",{onClick:function(){c({type:"DELETEDECK",id:l}),t.push("/decks")}},r.a.createElement("span",{className:"icon-trash-empty"}))),r.a.createElement(B,{deck:o,editable:!0,setDeck:function(e){c({type:"UPDATEDECK",index:s,deck:e})}}))})),G=function(e){var t=e.list;return Object.entries(t.slice(0,10)).map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1],c=r.a.createElement("i",{className:"large ms "+b(a)});return a.coverArt&&(c=r.a.createElement("img",{src:a.coverArt,width:"100",alt:"deck cover art"})),r.a.createElement(u.b,{className:"tile",key:n,to:"/decks/"+a.id},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"art"},c),r.a.createElement("span",{className:"title"},a.name)))}))},T=Object(i.b)((function(e){return{decks:e.decks}}))((function(e){var t=e.decks;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("h2",null,"New decks"),r.a.createElement("div",{className:"tiles"},r.a.createElement(u.b,{to:"/decks/import",className:"tile"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"art"},r.a.createElement("span",{className:"icon-plus large"})),r.a.createElement("span",{className:"title"},"Import a deck"))))),r.a.createElement("section",null,r.a.createElement("h2",null,"Your collection"),r.a.createElement("div",{className:"tiles"},r.a.createElement(G,{list:t}))))})),M=function(e){var t=e.list;return r.a.createElement("ul",null,Object.entries(t).map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return r.a.createElement("li",{key:n},r.a.createElement(u.c,{activeClassName:"active",to:"/decks/"+a.id},r.a.createElement("span",{className:"title"},r.a.createElement("i",{className:"ms "+b(a)})," "," ",a.name)))})),r.a.createElement("li",{key:"import"},r.a.createElement(u.c,{activeClassName:"active",to:"/decks/import"},r.a.createElement("span",{className:"title"},r.a.createElement("span",{className:"icon-plus"})," Import"))))},J=Object(i.b)((function(e){return{decks:e.decks}}))((function(e){var t=e.decks;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"SideBar"},r.a.createElement(M,{list:t})),r.a.createElement("div",{className:"Main"},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/decks/import",component:F}),r.a.createElement(m.b,{path:"/decks/:id",component:A}),r.a.createElement(m.b,{path:"/decks",component:T}),r.a.createElement(m.b,{component:U}))))})),L=n(14),_=function(e,t){var n=e.reduce((function(e,n){var a=t(n);return void 0!==a&&(e[a]=n.count+(e[a]?e[a]:0)),e}),{}),a=Object.keys(n).map((function(e){return[e,n[e]]}));return a.sort((function(e,t){return t[1]-e[1]})),a},z=function(e,t){return Array.from(e.reduce((function(e,n){return e.add(t(n)),e}),new Set))},K=function(e,t){return e.reduce((function(e,n){var a=t(n);return e+(a?parseFloat(a):0)}),0)},$=function(e){var t=function(e){var t=[],n=e.reduce((function(e,t){return e.concat(t.cards)}),[]),a=K(n,(function(e){return e.count})),r=K(n,(function(e){return(e.foil&&!e.proxy?1:0)*e.count}));return t.push({title:"Decks",icon:"thumbs-up",text:e.length}),t.push({title:"Cards",icon:"smile",text:a}),t.push({title:"Proxies",icon:"thumbs-down",text:K(n,(function(e){return(e.proxy?1:0)*e.count}))}),t.push({title:"Value",icon:"frown",text:Math.round(K(n,(function(e){return e.proxy?0:e.price*e.count})))+"$"}),t.push({title:"Proxy value",icon:"frown",text:Math.round(K(n,(function(e){return e.proxy?e.price*e.count:0})))+"$"}),t.push({title:"Unique cards",icon:"meh",text:z(n,(function(e){return e.name})).length}),t.push({title:"Foils",icon:"thumbs-up",text:r}),t.push({title:"Foil price",icon:"thumbs-up",text:Math.round(K(n,(function(e){return!e.proxy&&e.foil?e.price:0})))+"$"}),t.push({title:"Foiled",icon:"thumbs-up",text:Math.round(100*r/a)+"%"}),t}(e.decks);return Object.entries(t).map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{key:n,className:"tile"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"art"},r.a.createElement("span",{className:"icon-"+a.icon+" large"})),r.a.createElement("span",{className:"title"},a.title,": ",a.text)))}))},V=function(e){var t=function(e){var t=[],n=e.reduce((function(e,t){return e.concat(t.cards)}),[]),a=_(n,(function(e){return e.set})),r=1;for(var c in a.slice(0,5))t.push({title:"Most popular set #"+r++,text:a[c][0]+", "+a[c][1]+" cards"});for(c in t.push({}),r=1,(a=_(n,(function(e){return e.name}))).slice(0,20))t.push({title:"Most popular card #"+r++,text:a[c][0]+", "+a[c][1]+" times"});return t}(e.decks);return r.a.createElement("ul",null,Object.entries(t).map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return a.title?r.a.createElement("li",{key:n},r.a.createElement("b",null,a.title,":")," ",a.text):r.a.createElement("li",null,"\xa0")})))},X=function(e){var t=e.decks;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("h2",null,"Collection summary"),r.a.createElement("div",{className:"tiles"},r.a.createElement($,{decks:t})),r.a.createElement("br",null),r.a.createElement(V,{decks:t})))},Z=function(e){var t=e.list;return Object.entries(t.slice(0,10)).map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1],c=r.a.createElement("i",{className:"large ms "+b(a)});return a.coverArt&&(c=r.a.createElement("img",{src:a.coverArt,width:"100",alt:"deck cover art"})),r.a.createElement("div",{className:"tile",key:n},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"art"},c),r.a.createElement("span",{className:"title"},a.name)))}))},q=function(e){var t=e.state,n=e.setState;return r.a.createElement("input",{type:"checkbox",onClick:function(e){n(e.target.checked)},defaultChecked:t})},Q=Object(i.b)((function(e){return{decks:e.decks}}))((function(e){var t=e.history,n=e.decks,c=Object(a.useState)(null),l=Object(s.a)(c,2),o=l[0],u=l[1],m=Object(a.useState)(null),d=Object(s.a)(m,2),p=d[0],f=d[1],E=Object(a.useState)(!1),b=Object(s.a)(E,2),v=b[0],h=b[1],k=Object(i.c)(),O="";if(o&&null===p)try{var g=JSON.parse(o).decks;g?f(g):O="No decks found in the file."}catch(y){O="Unable to parse collection file."}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Import a new collection"),r.a.createElement("section",null,r.a.createElement("p",null,"Import a collection of DeckJson decks. "),r.a.createElement("pre",null,'{ "decks": [...] }'),r.a.createElement("p",null,"Tetst files can be found at ",r.a.createElement("a",{href:"https://github.com/martsve/deckjson/"},"Github"),". (",r.a.createElement("a",{href:"https://raw.githubusercontent.com/martsve/deckjson/master/test/Collection.json"},"Collection 1"),")"),r.a.createElement("form",{key:"inputform",action:"#",onSubmit:function(){return!1}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement(q,{state:v,setState:h}),r.a.createElement("span",null,"Overwrite existing collection"))),r.a.createElement("br",null),r.a.createElement("input",{key:"fileinput",type:"file",id:"fileinput",onChange:function(e){var t=e.target.files[0];if(t){var n=new FileReader;n.onload=function(e){u(e.target.result)},n.readAsText(t)}}}))),p?r.a.createElement("section",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{onClick:function(){var e=p;v||(e=Object(L.a)(n).concat(p)),k({type:"IMPORTCOLLECTION",decks:e}),t.push("/decks")}},r.a.createElement("span",{className:"icon-plus"}),"Import this collection")),r.a.createElement(X,{decks:p}),r.a.createElement("section",null,r.a.createElement("h2",null,"Decks in the collection"),r.a.createElement("div",{className:"tiles"},r.a.createElement(Z,{list:p})))):r.a.createElement(r.a.Fragment,null),O&&r.a.createElement("section",{className:"error"},O))})),Y=Object(i.b)((function(e){return{decks:e.decks}}))((function(e){var t=e.decks;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("h2",null,"Import/Export"),r.a.createElement("div",{className:"tiles"},r.a.createElement(u.b,{to:"/collection/import",className:"tile"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"art"},r.a.createElement("span",{className:"icon-upload-cloud large"})),r.a.createElement("span",{className:"title"},"Import collection"))),r.a.createElement(u.b,{to:"#",className:"tile",onClick:function(){f(JSON.stringify({decks:t},null,2),"Collection.json")}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"art"},r.a.createElement("span",{className:"icon-download-cloud large"})),r.a.createElement("span",{className:"title"},"Export collection"))))),r.a.createElement(X,{decks:t}))})),H=Object(i.b)((function(e){return{decks:e.decks}}))((function(e){e.decks;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Main"},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/collection/import",component:Q}),r.a.createElement(m.b,{path:"/collection",component:Y}),r.a.createElement(m.b,{component:U}))))})),ee={stateVersion:0,decks:[]};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(n,!0).forEach((function(t){Object(N.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=function(e,t){switch(t.type){case"INCREMENT":return ne({},e,{count:e.count+1});case"DELETEDECK":var n=e.decks.findIndex((function(e){return e.id===t.id}));return ne({},e,{decks:[].concat(Object(L.a)(e.decks.slice(0,n)),Object(L.a)(e.decks.slice(n+1)))});case"UPDATEDECK":var a=ne({},e);return a.decks[t.index]=ne({},t.deck),a;case"SAVEDECK":return ne({},e,{decks:[].concat(Object(L.a)(e.decks),[t.deck])});case"IMPORTCOLLECTION":return ne({},e,{decks:t.decks});case"RESET":return localStorage.clear(),ee;default:return e}},re=n(19),ce=function(){var e=localStorage.getItem("DECKJSON");if(e)try{return JSON.parse(e)}catch(t){}return ee},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce(),t=arguments.length>1?arguments[1]:void 0,n=ae(e,t);return localStorage.setItem("DECKJSON",JSON.stringify(n)),n},ie=(r.a.createContext(null),Object(re.b)(le)),oe=function(){return r.a.createElement(m.a,{to:"/decks/"})};var se=function(){return r.a.createElement(i.a,{store:ie},r.a.createElement(u.a,{basename:"/"},r.a.createElement("nav",{className:"sm-flex"},r.a.createElement(u.c,{exact:!0,activeClassName:"active",to:"/"},r.a.createElement("span",{className:"icon-home medium"})),r.a.createElement(u.c,{activeClassName:"active",to:"/decks/"},"Decks"),r.a.createElement(u.c,{activeClassName:"active",to:"/collection/"},"Collection"),r.a.createElement(u.c,{activeClassName:"active",to:"/config"},r.a.createElement("span",{className:"icon-cog medium"}))),r.a.createElement("div",{className:"Body"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:oe}),r.a.createElement(m.b,{path:"/decks",component:J}),r.a.createElement(m.b,{path:"/collection",component:H}),r.a.createElement(m.b,{path:"/config",component:o}),r.a.createElement(m.b,{component:U})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.af007665.chunk.js.map