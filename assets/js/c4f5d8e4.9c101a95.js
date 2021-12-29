"use strict";(self.webpackChunkmoondao_web=self.webpackChunkmoondao_web||[]).push([[195],{5131:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a,o=n(7294),l=n(7019),r=n(2263),s=n(1262),i=n(3990),c=n(859),m=["title","titleId"];function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=function(e){var t=e.title,n=e.titleId,l=u(e,m);return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 245 240","aria-labelledby":n},l),t?o.createElement("title",{id:n},t):null,a||(a=o.createElement("path",{d:"M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"})))};var h=function(){return o.createElement(s.Z,{fallback:o.createElement("div",null," Loading... ")},(function(){var e=n(9669);e.get("https://api.etherscan.io/api?module=proxy&action=eth_call&to=0xd569d3cce55b71a8a3f3c418c329a66e5f714431&data=0x9cc7f70800000000000000000000000000000000000000000000000000000000000000c7&tag=latest&apikey=TJ95PY19ASCIBJQWX4T77V9MTHG7P57CKS").then((function(t){console.log(t.data);var n=62.43,a=parseInt(t.data.result,16)/1e18;(a=Math.round(100*a)/100)&&(n=a),e.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD").then((function(e){console.log(e.data);var t=e.data.USD;console.log(t);var a=45e4,o=(n*t).toFixed(0),l=o/a*100,r=n.toFixed(2),s=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),i=a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");document.getElementById("progress-bar").style.width=l+"%",document.getElementById("moneyAmounts").textContent="$"+s+" / $"+i+"  ("+r+" ETH)"}))}))}))};function E(){var e=(0,r.Z)().siteConfig,t=void 0===e?{}:e;return o.createElement(l.Z,{title:t.title,description:t.tagline},o.createElement(h,null),o.createElement("div",{className:"Home"},o.createElement("div",{className:"HomeHero"},o.createElement("div",{className:"BigHero"},o.createElement("div",{className:"Block__Contents",id:"homeTitle"},o.createElement("h1",{className:"daoColor",id:"homeTitle"},"Send a MoonDAO member to space"),o.createElement("p",{className:"BigP"},"Buy $MOONEY to join MoonDAO and send a fren to space in 2022!"),o.createElement("h2",{className:"daoColor",id:"fundsRaised"},"Funds Raised:",o.createElement("span",{id:"moneyAmounts"}," ")),o.createElement("div",{className:"progress"},o.createElement("span",{className:"progress-bar",id:"progress-bar"})),o.createElement("div",{className:"HeroButtonGroup"},o.createElement("a",{href:"https://mirror.xyz/pmoncada.eth/uuufJem6v9X-fW3Bu4v1p_3qA5gPf96lZelHUM97BC8",target:"_blank",className:"Button Big Primary Outlined",id:"heroButton"},"Learn more"),o.createElement("a",{href:"https://juicebox.money/#/p/moondao",className:"Button Big Primary Outlined",id:"heroButton"},"Buy token"))))),o.createElement("div",{className:"Goal Block"},o.createElement("div",{className:"Block__Contents"},o.createElement("div",{className:"Row"},o.createElement("div",{className:"Column--100"},o.createElement("h3",null,"Our plan to send a MoonDAO member to space in 2022:"),o.createElement("ol",null,o.createElement("li",null,"Offer governance tokens to begin decentralized community governance of MoonDAO. ",o.createElement("strong",null," This will be our only supply of tokens.")),o.createElement("li",null,"Release the ",o.createElement("strong",null,"Ticket to Space")," NFT collection. These NFTs will give you a chance to fly to space in 2022."),o.createElement("li",null,"Buy a ticket(s) to space on a SpaceX/Blue Origin/Virgin Galactic etc. rocket ship."),o.createElement("li",null,"Send MoonDAO member(s) to space in 2022.")))))),o.createElement("div",{className:"Block PrimaryBg"},o.createElement("div",{className:"Block__Contents"},o.createElement("div",{className:"Row"},o.createElement("div",{className:"Column--100"},o.createElement("h5",{className:"daoColor"},"Mission"),o.createElement("h2",null,"MoonDAO is going to the moon."),o.createElement("p",null,"MoonDAO is an international collective of people united by the mission of decentralizing access to space research and exploration. We are currently living at the inflection point of a privatized space race, and the implications of this moment will define our future. Making life multi-planetary is one of the most inspiring and important missions in our lifetime. The big question is: how? We believe that an international, decentralized, inclusive, and transparent organization would be much better aligned with the needs of the everyday person."),o.createElement("blockquote",null,o.createElement("p",null,'"All civilizations become either spacefaring or extinct."'),o.createElement("p",{className:"attribution"},"\u2014 Carl Sagan")))))),o.createElement("div",{className:"Values Block"},o.createElement("div",{className:"Block__Contents"},o.createElement("div",{className:"Row"},o.createElement("div",{className:"Column--100"},o.createElement("h5",null,"Values"),o.createElement("h3",null,"Space should be in the hands of the people."),o.createElement("p",null,"We uphold values of inclusion, peace, transparency, freedom of organization and speech. Space should be in the hands of the people, not any one nation or private entity."),o.createElement("p",null,"As such, MoonDAO will support funding for individuals to go to space and fund future space research and exploration as it fits into the mission of becoming a governing body for the moon and other celestial bodies."),o.createElement("p",null,"It is very important to note that the core team has not pre-mined any tokens for ourselves. We have not given \u201cspecial terms\u201d to any Venture Capitalists, Influencers, Angel Investors, Rich Friends or Family, or any other person. We are all being treated equally."))))),o.createElement("div",{className:"Roadmap Block PrimaryBg",id:"MoonPhase"},o.createElement("div",{className:"Block__Contents"},o.createElement("h5",null,"Moon Phases"),o.createElement("h3",null,"Our roadmap to the stars."),o.createElement("div",{className:"Row AlignCenter"},o.createElement("div",{className:"Column--66"},o.createElement("h4",null,"Moon phase 1"),o.createElement("p",null,o.createElement("strong",null,"Deploy a token for decentralized governance of MoonDAO.")),o.createElement("p",{className:"small"},"In order to be a DAO, we need a governance token for decision making. This is our first step. There is no expectation of profit with this token, this token\u2019s purpose is to coordinate our governance."),o.createElement("p",{className:"small"},"Every investor, builder, or fren, big or small, has gotten the same terms. No special treatment for anyone. This is unusual for an Ethereum project, but we thought it would be more fair for everyone involved that we did not airdrop or pre-mine any number of tokens for people ahead of time. We are not VC funded, we are community organized and led, this is very important to us!")),o.createElement("div",{className:"Column--33"},o.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf12 ",o.createElement("br",null)))),o.createElement("div",{className:"Row AlignCenter",id:"MoonPhase"},o.createElement("div",{className:"Column--66"},o.createElement("h4",null,"Moon phase 2"),o.createElement("p",null,o.createElement("strong",null,"Send a MoonDAO member to space.")),o.createElement("p",{className:"small"},"Virgin Galactic advertises its tickets will be sold for \u201cas low as\u201d $450K and it has been reported that Blue Origin\u2019s tickets are have gone up for auction for over $28M. The range is large. MoonDAO wants to help create a world where anyone can fly to space regardless of their financial situation. We hope that this can be a meaningful and inspirational first step in decentralizing space exploration."),o.createElement("p",{className:"small"},"So far in history, space exploration has been gated to the rest of the world \u2014 accessible to only the privileged. MoonDAO changes this for the first time in history.")),o.createElement("div",{className:"Column--33"},o.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf13 ",o.createElement("br",null)))),o.createElement("div",{className:"Row AlignCenter",id:"MoonPhase"},o.createElement("div",{className:"Column--66"},o.createElement("h4",null,"Moon phase 3"),o.createElement("p",null,o.createElement("strong",null,"Provide funding to space research and exploration.")),o.createElement("p",{className:"small"},"We don\u2019t want to just take a ride on someone else\u2019s rockets, we\u2019d like to fund and coordinate our own plans. We think an international collective could move much faster than any red-taped organization, and we can contract out certain aspects of rocket development to private companies -- just like NASA."),o.createElement("p",{className:"small"},"The exploration of space should unify the world, not pit us against each other like the last space race. After all, aren't we all just curious earthlings that want to explore the unknown? Now, Web 3.0 represents a technology that can unify earthlings and decentralize space exploration.")),o.createElement("div",{className:"Column--33"},o.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf14 ",o.createElement("br",null)))),o.createElement("div",{className:"Row AlignCenter",id:"MoonPhase"},o.createElement("div",{className:"Column--66"},o.createElement("h4",null,"Moon phase 4"),o.createElement("p",null,o.createElement("strong",null,"Put a MoonDAO colony on the moon.")),o.createElement("p",{className:"small"},"That's\xa0one small step for man, one giant leap for mankind."),o.createElement("p",{className:"small"},"The 1967 Space Treaty forms the basis for all law concerning space. In this treaty it states that no national appropriation of the Moon can take place. However, a DAO is not a nation \u2014 it is an international collective of frens."),o.createElement("p",{className:"small"},"We have the opportunity to use these new governance and coordination tools in order to form a more perfect union as we extend the rights and liberties of every human on earth into the solar system.")),o.createElement("div",{className:"Column--33"},o.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf15 ",o.createElement("br",null)))),o.createElement("div",{className:"Row AlignCenter",id:"MoonPhase5"},o.createElement("div",{className:"Column--66"},o.createElement("h4",null,"Moon phase 5"),o.createElement("p",null,o.createElement("strong",null,"Have sweet moon parties (everyone's invited).")),o.createElement("p",{className:"small"},"They're gonna be sweet. BYOB but we'll provide transportation.")),o.createElement("div",{className:"Column--33"},o.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf1d ",o.createElement("br",null)))))),o.createElement("div",{className:"Block",id:"community"},o.createElement("div",{className:"Block__Contents"},o.createElement("div",{className:"Row"},o.createElement("div",{className:"Column--50"},o.createElement("h3",null,"Join our mission."),o.createElement("p",null,"Contribute to our efforts by buying our governance token to fund our treasury, or lend us your brain power and help us build the world's first decentralized public space program."),o.createElement("div",{id:"community_actions",className:"Row AlignCenter"},o.createElement("div",null,o.createElement("a",{href:"https://juicebox.money/#/p/moondao",className:"Button Primary Outlined"},"Buy token")),o.createElement("div",{className:"Social"},o.createElement("a",{href:"https://discord.gg/5nAu7K9aES",target:"_blank",rel:"noopener noreferrer"},o.createElement(p,null)),o.createElement("a",{href:"https://github.com/Official-MoonDao",target:"_blank",rel:"noopener noreferrer"},o.createElement(c.gik,null)),o.createElement("a",{href:"https://twitter.com/OfficialMoonDAO",target:"_blank",rel:"noopener noreferrer"},o.createElement(i.Fwv,null))))),o.createElement("div",{className:"Column--50"},o.createElement("p",{className:"center"},o.createElement("img",{width:"75%",src:"img/undraw_launch_day_4e04.svg",alt:"moondao logo"}))))))))}}}]);