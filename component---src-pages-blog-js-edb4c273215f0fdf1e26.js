(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"81em":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Guilherme Toti - Full Stack Developer","person":{"name":{"first":"Guilherme","last":"Toti"},"email":"guilhermetoti@gmail.com"},"siteUrl":"https://guilhermetoti.com","social":[{"icon":"dev","service":"DEV Community","url":"https://dev.to/guilhermetoti"},{"icon":"github","service":"GitHub","url":"https://github.com/guilherme-toti"},{"icon":"telegram","service":"Telegram","url":"https://t.me/guilhermetoti"},{"icon":"instagram","service":"Instagram","url":"https://instagram.com/guilherme.toti"},{"icon":"linkedin","service":"LinkedIn","url":"https://linkedin.com/in/guilhermetoti"},{"icon":"twitter","service":"Twitter","url":"https://twitter.com/guilherme_toti"}]}}}}')},"8c0/":function(e){e.exports=JSON.parse('{"data":{"allDevArticles":{"edges":[{"node":{"article":{"title":"My 5 cents about React Hooks","tags":["javascript","react","webdev"],"readable_publish_date":"May 26","slug":"my-5-cents-about-react-hooks-57c0"}}},{"node":{"article":{"title":"The right way to use function as parameter","tags":["javascript","webdev","typescript","node"],"readable_publish_date":"May 25","slug":"the-right-way-to-use-function-as-parameter-23jo"}}},{"node":{"article":{"title":"You don\'t always need “else” in your \\"if\\"","tags":["javascript","codenewbie","codequality"],"readable_publish_date":"May 22","slug":"get-rid-of-unnecessary-else-dp5"}}},{"node":{"article":{"title":"Stop using default console.log, check this instead","tags":["javascript","webdev","typescript","node"],"readable_publish_date":"May 21","slug":"stop-using-default-console-log-check-this-instead-2b3c"}}}]}}}')},A2EY:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));n("f3/d");var r=n("81em"),i=n("Wbzz"),a=n("q1tI"),o=n("qhky"),c=n("qKvR"),s=n("ztNV"),l=n("Kfvu");function d(){var e=O(["\n                    top: 50%;\n                    left: 50%;\n                    z-index: -1;\n                    opacity: 0.1;\n                    position: fixed;\n                    transform: translate(calc(50% - 35rem), -50%);\n                    max-height: 100%;\n\n                    .lights-on & {\n                      opacity: 0.05;\n                      filter: grayscale(1);\n                    }\n\n                    @media screen and (max-width: 1000px) {\n                      transform: translate(-50%, -50%);\n                    }\n                    @media screen and (max-width: 766px) {\n                      transform: translate(-25%, -50%);\n                    }\n                  "]);return d=function(){return e},e}function u(){var e=O(["\n                  animation: fadeIn 0.2s ease-in-out;\n\n                  @keyframes fadeIn {\n                    0% {\n                      opacity: 0;\n                      margin-top: 0.5rem;\n                    }\n                    100% {\n                      opacity: 1;\n                      margin-top: 0;\n                    }\n                  }\n                "]);return u=function(){return e},e}function p(){var e=O(["\n                          background-image: url('/images/icons/",".png');\n                        "]);return p=function(){return e},e}function m(){var e=O(["\n                    right: 2rem;\n                    bottom: 2rem;\n                    position: absolute;\n                    @media screen and (max-width: 766px) {\n                      position: absolute;\n                      left: 0;\n                      right: 0;\n                      bottom: initial;\n                      -webkit-box-ordinal-group: 2;\n                      order: 1;\n                      width: 100%;\n                      display: block;\n                      padding-left: 1.6rem;\n                    }\n                    @media screen and (min-width: 766px) and (max-height: 610px) {\n                      bottom: initial;\n                      top: 0.7rem;\n                      right: 1.8rem;\n                    }\n                    a {\n                      display: block;\n                      width: 2.3rem;\n                      height: 2.3rem;\n                      margin-top: 1rem;\n                      background-position: center;\n                      background-size: 1.5rem;\n                      background-repeat: no-repeat;\n                      opacity: 0.5;\n                      transition-duration: 0.2s;\n                      font-size: 0;\n                      @media screen and (max-width: 766px) {\n                        display: inline-block;\n                      }\n                      .lights-on & {\n                        opacity: 0.7;\n                        filter: invert(1);\n                      }\n                      &:last-child {\n                        margin-bottom: 0;\n                      }\n                      &:hover {\n                        opacity: 1;\n                      }\n                    }\n                  "]);return m=function(){return e},e}function b(){var e=O(["\n                    a {\n                      font-weight: bold;\n                      text-transform: lowercase;\n                      font-size: 1.4rem;\n                      position: relative;\n                      transition-duration: 0.2s;\n                      transform: translateY(0.1rem);\n                      display: inline-block;\n                      margin-bottom: 2rem;\n                      margin-top: -1rem;\n                      &:before {\n                        content: '';\n                        border-bottom: 2px solid;\n                        position: absolute;\n                        left: 0;\n                        right: 0;\n                        bottom: 0;\n                        color: ",";\n                        transition-duration: 0.2s;\n                        opacity: 0;\n                        transform: translateY(-0.7rem);\n                        transition: color 0.5s;\n                        .lights-on & {\n                          color: ",";\n                        }\n                      }\n                      &.active {\n                        color: ",";\n                        .lights-on & {\n                          color: ",";\n                        }\n                      }\n                      &:hover {\n                        transform: translateY(0rem);\n                        color: #fff;\n                        .lights-on & {\n                          color: #000;\n                        }\n                        &:before {\n                          opacity: 1;\n                          transform: translateY(0rem);\n                        }\n                      }\n                      @media screen and (max-width: 766px) {\n                        margin-right: 2rem;\n                        margin-bottom: 1rem;\n                        margin-top: 0rem;\n                      }\n                    }\n                    @media screen and (min-width: 766px) and (max-height: 610px) {\n                      right: 3.8rem;\n                      position: relative;\n                    }\n                  "]);return b=function(){return e},e}function f(){var e=O(["\n                  right: 0;\n                  width: 8rem;\n                  @media screen and (max-width: 766px) {\n                    position: initial;\n                    top: 0;\n                    right: 0;\n                    bottom: initial;\n                    width: initial;\n                    padding-top: 1rem !important;\n                    text-align: left !important;\n                    margin-bottom: -1rem;\n                  }\n                "]);return f=function(){return e},e}function g(){var e=O(["\n                    border-radius: 100%;\n                    background-color: ",";\n                    width: 3rem;\n                    height: 3rem;\n                    display: block;\n                    position: relative;\n                    transition: background-color 0.5s;\n                    color: transparent !important;\n                    .lights-on & {\n                      background-color: ",";\n                    }\n                    &:before,\n                    &:after {\n                      content: '';\n                      border: 1px solid rgba(0, 0, 0, 0.6);\n                      position: absolute;\n                      left: 50%;\n                      top: 50%;\n                      transform: translate(-50%, -50%);\n                      transition: border-color 0.5s;\n                      .lights-on & {\n                        border-color: rgba(255, 255, 255, 0.9);\n                      }\n                    }\n                    &:before {\n                      width: 1.5rem;\n                      height: 1.1rem;\n                      border-radius: 3px;\n                    }\n                    &:after {\n                      width: 1rem;\n                      height: 1rem;\n                      border-left: 0;\n                      border-top: 0;\n                      transform: translate(-50%, -50%) rotate(45deg);\n                      margin-top: -5px;\n                    }\n                    @media screen and (max-width: 766px) {\n                      display: none;\n                    }\n                  "]);return g=function(){return e},e}function h(){var e=O(["\n                    letter-spacing: 0.5rem;\n                    text-transform: uppercase;\n                    font-size: 0.8rem;\n                    line-height: 2rem;\n                    position: relative;\n                    top: -0.6rem;\n                    > div {\n                      @media screen and (max-width: 766px) {\n                        display: inline;\n                        white-space: nowrap;\n                      }\n                    }\n                  "]);return h=function(){return e},e}function v(){var e=O(["\n                  left: 0;\n                "]);return v=function(){return e},e}function y(){var e=O(["\n                .side-bar {\n                  position: fixed;\n                  top: 0;\n                  bottom: 0;\n                  width: 10rem;\n                  padding: 2rem;\n                  display: flex;\n                  flex-wrap: wrap;\n                  flex-direction: column;\n                  justify-content: space-between;\n                  z-index: 2;\n\n                  @media screen and (max-width: 766px) {\n                    position: initial;\n                    display: block;\n                    width: 100%;\n                    padding-bottom: 0;\n                  }\n                }\n              "]);return y=function(){return e},e}function w(){var e=O(["\n      ","\n      body {\n        color: ",";\n        background-color: ",";\n      }\n    "]);return w=function(){return e},e}function O(e,t){return t||(t=e.slice(0)),e.raw=t,e}var k=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),O=0;O<n;O++)a[O]=arguments[O];return(t=e.call.apply(e,[this].concat(a))||this).render=function(){var e=Object(c.b)(w(),s.c,t.props.lightsOn?s.b.secondaryLightsOn:s.b.secondary,t.props.lightsOn?s.b.mainLightsOn:s.b.main);return Object(c.c)(i.b,{query:"3621430728",render:function(n){var r,a=n.site.siteMetadata,w={title:t.props.title?t.props.title+" | "+a.title:a.title,description:t.props.description||""};return r=t.props.cover?a.siteUrl+t.props.cover:a.siteUrl+"/images/cover.png",Object(c.c)("div",{className:t.props.lightsOn?"lights-on":"",css:Object(c.b)(y())},Object(c.c)(o.a,{defaultTitle:w.title,meta:[{name:"theme-color",content:s.b.main},{name:"description",content:w.description},{itemprop:"name",content:w.title},{itemprop:"description",content:w.description},{itemprop:"image",content:r},{property:"og:type",content:"website"},{property:"og:url",content:a.siteUrl},{property:"og:title",content:w.title},{property:"og:description",content:w.description},{property:"og:image",content:r},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:w.title},{name:"twitter:description",content:w.description},{name:"twitter:image",content:r}]},Object(c.c)("html",{lang:"en"})),Object(c.c)(c.a,{styles:e}),Object(c.c)("div",{className:"side-bar",css:Object(c.b)(v())},Object(c.c)(i.a,{to:"/",css:Object(c.b)(h())},Object(c.c)("div",{className:"mr-3"},a.person.name.first),Object(c.c)("div",null,a.person.name.last)),Object(c.c)(l.OutboundLink,{eventLabel:"Contact",href:"mailto:"+a.person.email,css:Object(c.b)(g(),s.a.accent,s.b.accentLightsOn)},"email")),Object(c.c)("div",{className:"side-bar text-right",css:Object(c.b)(f())},Object(c.c)("nav",{css:Object(c.b)(b(),s.a.accent,s.b.accentLightsOn,s.a.accent,s.b.accentLightsOn)},Object(c.c)(i.a,{className:t.props.isWorkPage?"active":"",activeClassName:"active",to:"/work"},"Work"),Object(c.c)(i.a,{className:t.props.isBlogPage?"active":"",activeClassName:"active",to:"/blog"},"Blog"),Object(c.c)(i.a,{activeClassName:"active",to:"/about"},"About"),Object(c.c)(i.a,{activeClassName:"active",to:"/uses"},"Uses")),Object(c.c)("div",{css:Object(c.b)(m())},a.social.map((function(e){return Object(c.c)(l.OutboundLink,{key:e.url,eventLabel:"Social Media ("+e.service+")",href:e.url,target:"_blank",className:"social-icon",rel:"noopener noreferrer",alt:e.service,css:Object(c.b)(p(),e.icon)},e.service)})))),Object(c.c)("div",{css:Object(c.b)(u())},t.props.children,Object(c.c)("div",{css:Object(c.b)(d()),alt:""},t.props.pageBg)))},data:r})},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a}(a.Component)},Kfvu:function(e,t,n){"use strict";var r=n("5NKs");t.__esModule=!0,t.OutboundLink=l,t.trackCustomEvent=function(e){var t=e.category,n=e.action,r=e.label,i=e.value,a=e.nonInteraction,o=void 0!==a&&a,c=e.transport,l=e.hitCallback,d=e.callbackTimeout,u=void 0===d?1e3:d;if("undefined"!=typeof window&&window.ga){var p={eventCategory:t,eventAction:n,eventLabel:r,eventValue:i,nonInteraction:o,transport:c};l&&"function"==typeof l&&(p.hitCallback=s(l,u)),window.ga("send","event",p)}};var i=r(n("j8BX")),a=r(n("uDP2")),o=r(n("q1tI")),c=r(n("17x9")),s=function(e,t){void 0===t&&(t=1e3);var n=!1,r=function(){n||(n=!0,e())};return setTimeout(r,t),r};function l(e){var t=e.eventCategory,n=e.eventAction,r=e.eventLabel,c=e.eventValue,s=(0,a.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return o.default.createElement("a",(0,i.default)({},s,{onClick:function(i){"function"==typeof e.onClick&&e.onClick(i);var a=!0;return(0!==i.button||i.altKey||i.ctrlKey||i.metaKey||i.shiftKey||i.defaultPrevented)&&(a=!1),e.target&&"_self"!==e.target.toLowerCase()&&(a=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:r||e.href,eventValue:c,transport:a?"beacon":"",hitCallback:function(){a&&(document.location=e.href)}}):a&&(document.location=e.href),!1}}))}l.propTypes={href:c.default.string,target:c.default.string,eventCategory:c.default.string,eventAction:c.default.string,eventLabel:c.default.string,eventValue:c.default.number,onClick:c.default.func}},hslC:function(e,t,n){var r=n("q1tI");function i(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},[r.createElement("linearGradient",{id:"fe24b365-19a0-4a71-abdc-76e4b2fc8dee",x1:"313.72",x2:"313.72",y1:"759",gradientUnits:"userSpaceOnUse",key:0},[r.createElement("stop",{offset:"0",stopColor:"gray",stopOpacity:".25",key:0}),r.createElement("stop",{offset:".54",stopColor:"gray",stopOpacity:".12",key:1}),r.createElement("stop",{offset:"1",stopColor:"gray",stopOpacity:".1",key:2})]),r.createElement("linearGradient",{id:"f1e26e3d-9d52-4866-b24c-036458e443cc",x1:"313.72",x2:"313.72",y1:"455.23",y2:"213.09",gradientUnits:"userSpaceOnUse",key:1},[r.createElement("stop",{offset:"0",stopColor:"#b3b3b3",stopOpacity:".25",key:0}),r.createElement("stop",{offset:".54",stopColor:"#b3b3b3",stopOpacity:".1",key:1}),r.createElement("stop",{offset:"1",stopColor:"#b3b3b3",stopOpacity:".05",key:2})])]),r.createElement("title",{key:1},"blog"),r.createElement("rect",{width:"627.45",height:"759",fill:"url(#fe24b365-19a0-4a71-abdc-76e4b2fc8dee)",key:2}),r.createElement("rect",{width:"612.28",height:"736.45",x:"7.58",y:"5.49",fill:"#fff",key:3}),r.createElement("rect",{width:"240.74",height:"19.72",x:"50.71",y:"52.74",fill:"#64ffda",key:4}),r.createElement("rect",{width:"240.74",height:"19.72",x:"50.71",y:"513.37",fill:"#64ffda",key:5}),r.createElement("rect",{width:"526.03",height:"19.72",x:"50.71",y:"92.18",fill:"#e0e0e0",key:6}),r.createElement("rect",{width:"526.03",height:"19.72",x:"50.71",y:"131.63",fill:"#e0e0e0",key:7}),r.createElement("rect",{width:"534.56",height:"242.14",x:"46.44",y:"213.09",fill:"url(#f1e26e3d-9d52-4866-b24c-036458e443cc)",key:8}),r.createElement("rect",{width:"526.03",height:"231.2",x:"51.18",y:"216.78",fill:"#6c63ff",key:9}),r.createElement("rect",{width:"526.03",height:"19.72",x:"50.71",y:"637.59",fill:"#e0e0e0",key:10}),r.createElement("rect",{width:"526.03",height:"19.72",x:"50.71",y:"678.34",fill:"#e0e0e0",key:11}),r.createElement("rect",{width:"526.03",height:"19.72",x:"50.71",y:"597.05",fill:"#e0e0e0",key:12}),r.createElement("rect",{width:"526.03",height:"19.72",x:"50.71",y:"556.51",fill:"#e0e0e0",key:13})])}i.defaultProps={id:"148311d9-c125-4449-a148-b8fa33f3c561",width:"627.45",height:"759","data-name":"Layer 1",viewBox:"0 0 627.45 759"},e.exports=i,i.default=i},vx99:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n("8c0/"),i=n("qKvR"),a=n("A2EY"),o=n("q1tI"),c=n("hslC"),s=n.n(c),l=n("Wbzz");function d(){var e=f(["\n                              display: inline-block;\n                            "]);return d=function(){return e},e}function u(){var e=f(["\n                          line-height: 2rem;\n                        "]);return u=function(){return e},e}function p(){var e=f(["\n                        padding: 2rem;\n                        display: inline-block;\n                        margin-right: 1.9rem;\n                        max-width: 100%;\n                        border-radius: 0.3rem;\n\n                        @media screen and (max-width: 766px) {\n                          margin: 0;\n                          border-radius: 0;\n                          display: block;\n                        }\n                      "]);return p=function(){return e},e}function m(){var e=f(["\n                    margin-right: -1.9rem;\n\n                    @media screen and (max-width: 766px) {\n                      margin: 0 -2rem;\n                    }\n                  "]);return m=function(){return e},e}function b(){var e=f(["\n                    line-height: 1.6;\n                  "]);return b=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),e.raw=t,e}var g=function(e){var t,n;function o(){for(var t,n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))||this).render=function(){return Object(i.c)(l.b,{query:"4087897026",render:function(e){var t=e.allDevArticles.edges.map((function(e){return e.node.article}));return Object(i.c)(a.a,{lightsOn:!0,pageBg:Object(i.c)(s.a,null),title:"Blog",description:"I write development tips & articles often."},Object(i.c)("div",{className:"content-wrap"},Object(i.c)("div",{className:"h1 font-weight-bold mb-3"},"My ",Object(i.c)("span",{className:"high"},"Blog"),Object(i.c)("span",{className:"blinker"},"."),Object(i.c)("br",null)),Object(i.c)("div",{className:"h5 mb-4 pb-4",css:Object(i.b)(b())},"I like writing but as you can tell, I suck at posting consistently.",Object(i.c)("br",null),"But since you're here now, I'll try to post more in here."),Object(i.c)("div",{className:"all-blogs",css:Object(i.b)(m())},t.map((function(e){return Object(i.c)(l.a,{key:e.slug,to:"/blog/"+e.slug,css:Object(i.b)(p()),className:"mb-4 bg-white overflow-hidden"},Object(i.c)("div",{css:Object(i.b)(u()),className:"item-title font-weight-bold brand-light h4"},e.title),Object(i.c)("div",{className:"mb-3 text-muted item-date"},"Published On:"," ",Object(i.c)("strong",null,e.readable_publish_date)),Object(i.c)("div",{className:"item-tags text-lowercase mt-2"},e.tags.map((function(t){return Object(i.c)("span",{key:e.title+"-"+t,css:Object(i.b)(d()),className:"badge badge-pill badge-brand mr-3"},"#",t)}))))})))))},data:r})},t}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o}(o.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-js-edb4c273215f0fdf1e26.js.map