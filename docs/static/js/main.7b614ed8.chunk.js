(this["webpackJsonp07-react-estilos"]=this["webpackJsonp07-react-estilos"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports={iconSearch:"SearchBar_iconSearch__3t8OQ",searchContainer:"SearchBar_searchContainer__K-FqS",iconDelete:"SearchBar_iconDelete__2DE1N",msgError:"SearchBar_msgError__2fTE8"}},,function(e,a,t){e.exports={display:"Header_display__1sOkW",nav:"Header_nav__3yRlw"}},,function(e,a,t){e.exports={cardsContainer:"Cards_cardsContainer__prY-G"}},,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(5),n=t(11),r=t(13),c=t(3),o=t(1),s=t(2),l=t(10),d=t.n(l),u=(t(18),t(0)),h=function(){return Object(u.jsxs)("div",{className:"lds-ring",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})},j=t(8),b=t.n(j),m=function(e){var a=e.city,t=e.cleanCity,i=e.onSearch,n=e.changeInputValue,r=e.changeActiveResults,c=e.changeInvalidResults,s=e.loading,l=e.errorMensage,d=e.handleSumPos,j=e.handleSubPos,m=e.dataActivePos,x=e.filteredData,g=Object(o.useRef)(null);return Object(u.jsxs)("div",{className:b.a.searchContainer,children:[Object(u.jsx)("i",{className:"".concat(b.a.iconSearch," bi bi-search"),type:"button",value:"Search",onClick:function(){return i(a)}}),Object(u.jsx)("input",{id:"inputCity",type:"text",placeholder:"Enter the city",ref:g,onChange:function(){n(g),r()},onClick:r,onKeyDown:function(e){return function(e){if("Enter"===e.key){if(-1===m)return i(e.target.value);i(x[m])}"ArrowDown"===e.key&&d(),"ArrowUp"===e.key&&j()}(e)}}),Object(u.jsx)("i",{onClick:function(){g.current.value="",g.current.focus(),c(),t()},className:"".concat(b.a.iconDelete," bi bi-x")}),s&&Object(u.jsx)(h,{}),l&&Object(u.jsx)("span",{className:b.a.msgError,children:"City Not Found"})]})},x=(t(20),function(e){var a=e.filteredData,t=e.onSearch,i=e.dataActivePos;return Object(u.jsx)(u.Fragment,{children:0!==a.length&&Object(u.jsx)("div",{id:"dataSearch",className:"dataResultContainer",children:Object(u.jsx)("div",{className:"dataResult",children:a.slice(0,10).map((function(e,a){return Object(u.jsx)("div",{className:"dataItem ".concat(a===i?"dataActive":""),children:Object(u.jsxs)("p",{onClick:function(e){t(e.target.textContent)},children:[Object(u.jsx)("i",{className:"bi bi-search search-small"}),e]})},a)}))})})})}),g=function(e){var a=e.title,t=e.onSearch,n=e.isActiveResults,r=e.changeInvalidResults,c=e.changeActiveResults,o=e.changeInputValue,s=e.city,l=e.cleanCity,h=e.filteredData,j=e.errorMensage,b=e.loading,g=e.dataActivePos,O=e.handleSubPos,p=e.handleSumPos;return Object(u.jsxs)("header",{className:d.a.display,children:[Object(u.jsx)("div",{onClick:r,children:Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("h1",{children:a})})}),Object(u.jsxs)("nav",{className:d.a.nav,children:[Object(u.jsx)(i.c,{to:"/",style:function(e){var a=e.isActive;return{display:"block",color:"white",fontWeight:a?"bold":"normal",borderBottom:a?"solid 1px white":"none"}},children:"Home"}),Object(u.jsx)(i.c,{to:"/about",style:function(e){var a=e.isActive;return{display:"block",color:"white",fontWeight:a?"bold":"normal",borderBottom:a?"solid 1px white":"none"}},children:"About"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{city:s,cleanCity:l,onSearch:t,changeInputValue:o,changeActiveResults:c,changeInvalidResults:r,errorMensage:j,loading:b,handleSumPos:p,handleSubPos:O,dataActivePos:g,filteredData:h}),n&&Object(u.jsx)(x,{filteredData:h,onSearch:t,dataActivePos:g})]})]})},O=function(e){var a=Number(e[0]+e[1]);return"n"===e[2]&&a>=1&&a<=4?"nigth":1===a?"sunny":11===a?"thunderstorm":a>=2&&a<=4?"cloudy":9===a||10===a?"rain":"mist"},p={AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas (the)",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia (Plurinational State of)",BQ:"Bonaire, Sint Eustatius and Saba",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory (the)",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",CV:"Cabo Verde",KH:"Cambodia",CM:"Cameroon",CA:"Canada",KY:"Cayman Islands (the)",CF:"Central African Republic (the)",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands (the)",CO:"Colombia",KM:"Comoros (the)",CD:"Congo (the Democratic Republic of the)",CG:"Congo (the)",CK:"Cook Islands (the)",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CW:"Cura\xe7ao",CY:"Cyprus",CZ:"Czechia",CI:"C\xf4te d'Ivoire",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic (the)",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",SZ:"Eswatini",ET:"Ethiopia",FK:"Falkland Islands (the) [Malvinas]",FO:"Faroe Islands (the)",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories (the)",GA:"Gabon",GM:"Gambia (the)",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",VA:"Holy See (the)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran (Islamic Republic of)",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"Korea (the Democratic People's Republic of)",KR:"Korea (the Republic of)",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic (the)",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands (the)",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia (Federated States of)",MD:"Moldova (the Republic of)",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands (the)",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger (the)",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands (the)",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine, State of",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines (the)",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",MK:"Republic of North Macedonia",RO:"Romania",RU:"Russian Federation (the)",RW:"Rwanda",RE:"R\xe9union",BL:"Saint Barth\xe9lemy",SH:"Saint Helena, Ascension and Tristan da Cunha",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin (French part)",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten (Dutch part)",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan (the)",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania, United Republic of",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands (the)",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates (the)",GB:"United Kingdom of Great Britain and Northern Ireland (the)",UM:"United States Minor Outlying Islands (the)",US:"United States of America (the)",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela (Bolivarian Republic of)",VN:"Viet Nam",VG:"Virgin Islands (British)",VI:"Virgin Islands (U.S.)",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe",AX:"\xc5land Islands"},C=(t(21),function(e){var a=e.id,t=e.temp,n=e.name,r=e.countryCode,c=e.img,o=e.onClose,s="https://openweathermap.org/img/wn/".concat(c,"@2x.png");return Object(u.jsxs)("div",{className:"card ".concat(O(c)),children:[Object(u.jsx)("div",{className:"d-flex flex-end delete-container",children:Object(u.jsx)("i",{id:a,onClick:function(e){return o(e.target.id)},className:"bi bi-x"})}),Object(u.jsxs)(i.b,{to:"/city/".concat(a),style:{color:"white"},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("i",{className:"bi bi-geo-alt-fill location-icon"}),Object(u.jsx)("i",{className:"name-country",children:n})]}),Object(u.jsx)("i",{className:"name-city",children:p[r]}),Object(u.jsxs)("div",{className:"img-container",children:[Object(u.jsx)("img",{src:s,alt:n}),Object(u.jsxs)("span",{children:[Math.trunc(t),"\xb0"]})]})]})]})}),M=t(12),A=t.n(M),f=function(e){var a=e.cities,t=e.onClose,i=Object(s.g)().idCity,n=i?a.filter((function(e){return e.id!==Number(i)})):a;return Object(u.jsx)("div",{className:A.a.cardsContainer,children:n.map((function(e,a){var i=e.id,n=e.name,r=e.main,c=e.sys,o=e.weather;return Object(u.jsx)(C,{id:i,name:n,countryCode:c.country,temp:r.temp,img:o[0].icon,onClose:t},a)}))})},S=function(e){var a=new Date(Date.now()+1e3*e),t=a.toUTCString().slice(16,22),i=["January","February","March","April","May","June","July","August","September","Octuber","November","December"][a.getMonth()],n=a.getDate();return"".concat(i," ").concat(n,", ").concat(t)},v=(t(22),function(e){var a=e.onFilter,t=e.onSearch,i=a(Object(s.g)().idCity);if(!i)return Object(u.jsx)("div",{children:Object(u.jsx)("p",{style:{textAlign:"center",marginBottom:"1rem",color:"#2229"},children:"No city found with that id!"})});var n=i.timezone,r=i.name,c=i.main,o=i.sys,l=i.weather,d=i.wind,h=o.country,j=l[0].icon,b=c.temp,m=c.pressure,x=c.humidity,g=d.speed;return Object(u.jsxs)("div",{className:"city img".concat(O(j)),children:[Object(u.jsxs)("div",{className:"description-container",children:[Object(u.jsx)("i",{className:"bi bi-arrow-clockwise reload",onClick:function(){return t(r)}}),Object(u.jsx)("p",{className:"description",children:l[0].description})]}),Object(u.jsxs)("div",{className:"t-center ".concat(O(j)," info-city "),children:[Object(u.jsx)("div",{children:Object(u.jsx)("i",{className:"name-city",children:S(n)})}),Object(u.jsx)("i",{className:"bi bi-geo-alt-fill location-icon"}),Object(u.jsx)("i",{className:"name-country",children:r}),Object(u.jsx)("div",{children:Object(u.jsx)("i",{className:"name-city",children:p[h]})}),Object(u.jsxs)("div",{className:"d-flex flex-center",children:[Object(u.jsxs)("span",{className:"temp",children:[Math.trunc(b),"\xb0"]}),Object(u.jsxs)("div",{className:"humidity d-flex flex-column",children:[Object(u.jsx)("span",{children:"".concat(x,"% Humidity")}),Object(u.jsx)("span",{children:"".concat(m,"hpa Pressure")}),Object(u.jsx)("span",{children:"".concat(g,"kph Wind")})]})]})]})]})}),y=(t(23),function(){return Object(u.jsxs)("div",{className:"page-about",children:[Object(u.jsxs)("section",{className:"section-about",children:[Object(u.jsx)("h3",{children:"About"}),Object(u.jsx)("p",{children:"This is a SPA web application that I developed in module 2 of the soyHenry bootcamp to improve my skills in React, API'S and CSS modules."}),Object(u.jsx)("p",{children:"You can find out about the climate of different cities in the world."})]}),Object(u.jsxs)("section",{className:"section-weathers",children:[Object(u.jsx)("h3",{children:"What is the weather in your city?"}),Object(u.jsxs)("div",{className:"weather-container",children:[Object(u.jsxs)("div",{className:"sunny",children:[Object(u.jsx)("p",{children:"Sunny"}),Object(u.jsx)("img",{src:"https://openweathermap.org/img/wn/01d@2x.png",alt:""})]}),Object(u.jsxs)("div",{className:"cloudy",children:[Object(u.jsx)("p",{children:"Cloudy"}),Object(u.jsx)("img",{src:"https://openweathermap.org/img/wn/03d@2x.png",alt:""})]}),Object(u.jsxs)("div",{className:"rain",children:[Object(u.jsx)("p",{children:"Rain"}),Object(u.jsx)("img",{src:"https://openweathermap.org/img/wn/09d@2x.png",alt:""})]}),Object(u.jsxs)("div",{className:"thunderstorm",children:[Object(u.jsx)("p",{children:"Torm"}),Object(u.jsx)("img",{src:"https://openweathermap.org/img/wn/11n@2x.png",alt:""})]}),Object(u.jsxs)("div",{className:"mist",children:[Object(u.jsx)("p",{children:"Mist"}),Object(u.jsx)("img",{src:"https://openweathermap.org/img/wn/13d@2x.png",alt:""})]})]})]}),Object(u.jsx)("section",{children:Object(u.jsx)("div",{children:Object(u.jsx)("a",{className:"doc-api",href:"https://openweathermap.org/current",target:"_black",children:"doc openWeatherMap API"})})})]})}),P=["Amazonas, Brazil","Ancash, Per\xfa","Apur\xedmac, Per\xfa","Arequipa, Per\xfa","Ayacucho, Per\xfa","Cajamarca, Per\xfa","Callao, Per\xfa","Cusco, Per\xfa","Huancavelica, Per\xfa","Hu\xe1nuco, Per\xfa","Ica, Per\xfa","Jun\xedn, Per\xfa","La Libertad, Per\xfa","Lambayeque, Per\xfa","Lima, Per\xfa","Loreto, Per\xfa","Madre de Dios, Per\xfa","Moquegua, Per\xfa","Pasco, Per\xfa","Piura, Per\xfa","Puno, Per\xfa","San Mart\xedn, Per\xfa","Tacna, Per\xfa","Tumbes, Per\xfa","Ucayali, Per\xfa","Valpara\xedso, Chile","Ais\xe9n del General Carlos, Chile","Antofagasta, Chile","Araucan\xeda, Chile","Atacama, Chile","B\xedo-B\xedo, Chile","Coquimbo, Chile","Libertador General, Chile","Los Lagos, Chile","Magallanes y Ant\xe1rtica, Chile","Maule, Chile","Region Metropolitana, Chile","Tarapac\xe1, Chile","Amazonas, Colombia","Antioquia, Colombia","Arauca, Colombia","Atl\xe1ntico, Colombia","Caquet\xe1, Colombia","Cauca, Colombia","C\xe9sar, Colombia","Choc\xf3, Colombia","C\xf3rdoba, Colombia","Guaviare, Colombia","Guain\xeda, Colombia","Huila, Colombia","La Guajira, Colombia","Meta, Colombia","Narino, Colombia","Norte de Santander, Colombia","Putumayo, Colombia","Quind\xedo, Colombia","Risaralda, Colombia","San Andr\xe9s, Colombia","Santander, Colombia","Sucre, Colombia","Tolima, Colombia","Valle del Cauca, Colombia","Vaup\xe9s, Colombia","Vichada, Colombia","Casanare, Colombia","Cundinamarca, Colombia","Distrito Capital, Colombia","Caldas, Colombia","Magdalena, Colombia","Aguascalientes, M\xe9xico","Baja California, M\xe9xico","Baja California Sur, M\xe9xico","Campeche, M\xe9xico","Chiapas, M\xe9xico","Chihuahua, M\xe9xico","Coahuila de Zaragoza, M\xe9xico","Colima, M\xe9xico","Distrito Federal, M\xe9xico","Durango, M\xe9xico","Guanajuato, M\xe9xico","Guerrero, M\xe9xico","Hidalgo, M\xe9xico","Jalisco, M\xe9xico","M\xe9xico, M\xe9xico","Michoac\xe1n de Ocampo, M\xe9xico","Morelos, M\xe9xico","Nayarit, M\xe9xico","Nuevo Le\xf3n, M\xe9xico","Oaxaca, M\xe9xico","Puebla, M\xe9xico","Quer\xe9taro de Arteaga, M\xe9xico","Quintana Roo, M\xe9xico","San Luis Potos\xed, M\xe9xico","Sinaloa, M\xe9xico","Sonora, M\xe9xico","Tabasco, M\xe9xico","Tamaulipas, M\xe9xico","Tlaxcala, M\xe9xico","Veracruz-Llave, M\xe9xico","Yucat\xe1n, M\xe9xico","Zacatecas, M\xe9xico","Chuquisaca, Bolivia","Cochabamba, Bolivia","El Beni, Bolivia","La Paz, Bolivia","Oruro, Bolivia","Pando, Bolivia","Potos\xed, Bolivia","Santa Cruz, Bolivia","Tarija, Bolivia","Buenos Aires, Argentina","Catamarca, Argentina","Chaco, Argentina","Chubut, Argentina","C\xf3rdoba, Argentina","Corrientes, Argentina","Distrito Federal, Argentina","Entre R\xedos, Argentina","Formosa, Argentina","Jujuy, Argentina","La Pampa, Argentina","La Rioja, Argentina","Mendoza, Argentina","Misiones, Argentina","Neuqu\xe9n, Argentina","R\xedo Negro, Argentina","Salta, Argentina","San Juan, Argentina","San Luis, Argentina","Santa Cruz, Argentina","Santa Fe, Argentina","Santiago del Estero, Argentina","Tierra del Fuego, Argentina","Tucum\xe1n, Argentina","Bolivar, Colombia","Boyac\xe1, Colombia"],B=(t(24),function(){return Object(u.jsxs)("footer",{children:[Object(u.jsxs)("div",{className:"footer-container container",children:[Object(u.jsxs)("div",{className:"img-henry",children:[Object(u.jsx)("figure",{children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkYAAABsCAMAAAC4q40nAAABOFBMVEVHcEz////////y8sv//////////////////////////////////6D9/f3///////////////////8AAAD//////wL//////////////wH//////////wH//////////////wb//////////wL//////////////wP//////wT//wH//////xD//wX//wH//wL//////wL///////8AAAD//wL//wH//wP//wH//////wL//wL//wH//wr//wH///n//////wH//wL//wT//wf//////////////0H//53//7T//0j//wH//////0r//y7//zz//yD//1n//8P//4z//xX//wr//5b///z//2v//6f//83//7D//4D//3P//9f//97//+7///b//2P//7n//3r//57//+dp4Wy5AAAATHRSTlMA4f0CP78VqvgYqLsGK+0iNPOyCwliSWiTwneBz6AQmijG1ITOitxVW0PkHA8x/HDol1E5BqHsTPRteqe6GNtkDa+NOiKnpBflwbvuvBnTXQAAC2JJREFUeNrt3WlD4rwTAPBoUWABBBZRxFsAVVTUx/ta1d39H4BcgigoKML3/wZPwV1PoJM0bRPIvF7Ktv0xk6TTiBKwQB1C5cdxjwOJAUpf5PS2PYBF55MdtDhjA+E5z0xg3zciIdywQb7DHRzreOQxwOeHkGDUMU6ZYPQhLPPmfReWJRfMasLmVeHQJBh1jiB7jF5yh21iBO7IDDxqqP3HhweVP2pDglGX2GKTkZw7EnMTK0BGjkFgovvR5sP/oFNQMhKMusRPRhm93PZfLpijKeABF9sysoGSkWDU7U5ZGWbUHNluQRiNWGBHM7djBKlpW4JR9wiwzUjOl5DSNg4ccnnJapoNCUbdxyAxO+OMEu59ZUa/3bBjbZLVtC3BiGC8wBajRMIzrfh9AcKhoASpaR4kGCmlozn2GSUGHErfN+0kq2rfIWuPW4KRcjjYZ5RwKk7ZJsiq2ndATfMgwUg5ZjhglHCbFL7QGwMd5xdBTXMJRpA7NM0Bo4Rbqa6NwQ5jx65pHiQYQWKCB0aJsMI42x4GHcaHXdNcghHsBkk8MErYFJ7XLoKOMvVhtg+oaR4kGCUIfqGsMurQjvA2zpkHDdbt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",alt:""})}),Object(u.jsx)("h3",{className:"gradient-text",children:"Weather App"})]}),Object(u.jsxs)("div",{className:"links-container",children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)("h4",{children:"Other Projects"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://alejandrobarua.github.io/todoList-henry/",target:"_black",children:"TodoList"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://alejandrobarua.github.io/music-8d-henry/",target:"_black",children:"Page Music 8D"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://alejandrobarua.github.io/react-personal-planner/",target:"_black",children:"Week Planner"})})]})]}),Object(u.jsxs)("div",{className:"social",children:[Object(u.jsx)("h4",{children:"Contact"}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/alejandrobarua/",target:"_black",children:Object(u.jsx)("i",{className:"bi bi-linkedin"})}),Object(u.jsx)("a",{href:"https://github.com/alejandroBarua/",target:"_black",children:Object(u.jsx)("i",{className:"bi bi-github"})})]})]})]}),Object(u.jsx)("div",{className:"copy",children:Object(u.jsx)("span",{children:"\xa9 2021 Designed by Alejandro Barua"})})]})}),w=function(){var e=Object(o.useState)([]),a=Object(c.a)(e,2),t=a[0],i=a[1],n=Object(o.useState)(!1),l=Object(c.a)(n,2),d=l[0],h=l[1],j=Object(o.useState)(-1),b=Object(c.a)(j,2),m=b[0],x=b[1],O=Object(o.useState)(0),p=Object(c.a)(O,2),C=p[0],M=p[1],A=Object(o.useState)(-1),S=Object(c.a)(A,2),w=S[0],N=S[1],R=Object(o.useState)(!1),G=Object(c.a)(R,2),I=G[0],T=G[1],E=Object(o.useState)(!1),D=Object(c.a)(E,2),L=D[0],H=D[1],k=function(){x(-1),N(-1),M(0)},K=function(){h(!1),k()},F=Object(o.useState)(""),Z=Object(c.a)(F,2),U=Z[0],Y=Z[1],z=Object(o.useState)([]),W=Object(c.a)(z,2),J=W[0],V=W[1],Q=function(e){if(""===e)return H(!0);T(!0);fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("15dbe9612294778560ef5ad24e400225","&units=metric")).then((function(e){return e.json()})).then((function(e){var a=e.id,t=e.timezone,n=e.name,c=e.main,o=e.sys,s=e.weather,l=e.wind;T(!1),void 0!==n?i((function(e){return 7===e.length&&e.pop(),V([]),e=e.filter((function(e){return e.id!==a})),[{id:a,timezone:t,name:n,main:c,sys:o,weather:s,wind:l}].concat(Object(r.a)(e))})):H(!0)})).catch((function(e){return console.log(e)})),document.querySelector("#inputCity").value="",Y(""),k(),h(!1)},q=function(e){return i((function(a){return a.filter((function(a){return a.id!==Number(e)}))}))};return Object(o.useEffect)((function(){Q("Buenos Aires, Argentina")}),[]),Object(o.useEffect)((function(){var e=document.querySelector(".dataResult");e&&e.scroll({top:C})}),[C]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{title:"Weather App",onSearch:Q,statesList:P,isActiveResults:d,changeInvalidResults:K,changeActiveResults:function(){h(!0),H(!1)},changeInputValue:function(e){k(),Y(e.current.value);var a=P.filter((function(e){return e.toLowerCase().includes(U.toLowerCase())}));V(a)},filteredData:J,city:U,cleanCity:function(){return Y("")},loading:I,errorMensage:L,dataActivePos:m,handleSumPos:function(){J.length&&m<J.slice(0,9).length&&(x(m+1),w<4&&N(w+1),4===w&&M(C+30))},handleSubPos:function(){m>-1&&(x(m-1),w>0&&N(w-1),0===w&&M(C-30))}}),Object(u.jsx)("div",{onClick:K,className:"container wrapper",children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{path:"/",element:Object(u.jsxs)(u.Fragment,{children:[!t.length&&Object(u.jsx)("div",{children:Object(u.jsx)("p",{style:{textAlign:"center",marginBottom:"1rem",color:"#2229"},children:"Look for a city."})}),Object(u.jsx)(f,{cities:t,onClose:q})]})}),Object(u.jsx)(s.a,{path:"/about",element:Object(u.jsx)(y,{})}),Object(u.jsx)(s.a,{path:"/city/:idCity",element:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{onSearch:Q,onFilter:function(e){var a=t.filter((function(a){return a.id===parseInt(e)}));return a.length>0?a[0]:null}}),Object(u.jsx)(f,{cities:t,onClose:q})]})}),Object(u.jsx)(s.a,{path:"*",element:Object(u.jsx)("div",{children:Object(u.jsx)("p",{style:{textAlign:"center",marginBottom:"1rem",color:"#2229"},children:"There's nothing here!"})})})]})}),Object(u.jsx)(B,{})]})};t(25);Object(n.render)(Object(u.jsx)(i.a,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.7b614ed8.chunk.js.map