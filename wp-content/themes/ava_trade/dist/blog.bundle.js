!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/wp-content/themes/ava_trade/dist/",n(n.s=6)}({6:function(e,t,n){e.exports=n("mSW1")},AFOx:function(e){e.exports=JSON.parse('{"version":"44307","name":"production","myAvaDomain":"https://myvip.avatrade.com/","myAvaWebroot":"myava/","servicesDomain":"https://services.avaapiweb.com/","cdnResourcesDomain":"https://myvip.avatrade.com/myava/","sslEnabled":true,"MyAccountOldNewFlag":true,"ABTestingFlag":true,"myAvaMobileDemoPath":"/register/step1/2","myAvaMobileRealPath":"/register/step1/1","myAvaPrefix":"https://my","marketingAPI":"https://marketdata.avaapiweb.com/","services_v2":"https://services.avaapiweb.com/","services_v1":"https://services.avatrade.sa.com/","services_wt":"https://app.avatrade.com/","trackingApi":"https://www.avatrade.io/api/","avatrade_io_api":"https://www.avatrade.io","ShowPartnerCode":true,"dryRun":false,"services_wt_step1":"https://services.avaapiweb.com/","perimiterx_client_id":"PXp8oF1R5L","recaptcha":{"version":"","keys":{"v2":"6LfA1dMZAAAAAN01YEblcdMU2pchonCUPQ13oJtn","v3":"6LeDW_8UAAAAAK-N7imVemEZ16jMKPTl5OC3cyzQ"},"hosts":{"default":"google.com","cn":"recaptcha.net"}}}')},IT0g:function(e,t,n){},Qk3a:function(e,t,n){"use strict";n.d(t,"o",(function(){return x})),n.d(t,"d",(function(){return A})),n.d(t,"t",(function(){return P})),n.d(t,"p",(function(){return _})),n.d(t,"m",(function(){return b})),n.d(t,"n",(function(){return i})),n.d(t,"v",(function(){return c})),n.d(t,"u",(function(){return l})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return p})),n.d(t,"g",(function(){return d})),n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return g})),n.d(t,"q",(function(){return w})),n.d(t,"c",(function(){return y})),n.d(t,"e",(function(){return h})),n.d(t,"h",(function(){return k})),n.d(t,"k",(function(){return S})),n.d(t,"s",(function(){return m})),n.d(t,"f",(function(){return f})),n.d(t,"l",(function(){return j})),n.d(t,"r",(function(){return o}));var a=n("UPJa");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){a.a.isProd||console.log(e)},s=function(e){return void 0===e||"undefined"==e||null==e||e.length<=0},i=function(e){return void 0===e||"undefined"==e||null==e||e.length<=0},c=function(e){var t;try{t=JSON.parse(e)}catch(e){}return t="object"===r(t)?t:{}},l=function(e,t){var n=t;if(null!==e&&e.length>0&&!isNaN(e))try{n=parseInt(e)}catch(e){}return n},u=function(e){e=e.replace(/[\\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null==t?"":decodeURIComponent(t[1].replace(/\+/g," "))},p=function(e,t){var n="[\\?&]"+(t=t.replace(/[\\[]/,"\\[").replace(/[\]]/,"\\]")).toLowerCase()+"=([^&#]*)",a=new RegExp(n).exec(e);return null==a?"":decodeURIComponent(a[1].replace(/\+/g," "))},d=function(e){if(s(e))return"en";switch(e.toLowerCase()){case"pl-pl":return"pl";case"ng":return"en-NG";case"au":return"en-AU";case"es-mx":case"es-cl":case"es-es":return"es";case"za":return"en-ZA";case"pt-pt":case"pt-br":return"pt";case"zh-hant":return"zh-Hant";case"en-uk":return"en-GB";case"fr-ca":case"fb-fr":case"fr-fr":return"fr";case"ar-ae":case"ar_ar":return"ar";case"ms":return"en";case"ko":case"fb-ca":case"en-ca":case"en-ae":case"en-us":return"en";default:return e}},f=function(e){if(s(e)||"en"==e)return"en";switch(e.toLowerCase()){case"ng":case"ko":case"en-ae":case"en-us":return"en";case"za":return"en-ZA";case"au":return"en-AU";case"fb-ca":case"en-cA":return"en-CA";case"en-uk":return"en-GB";case"es-mx":case"es-cl":case"es-es":return"es";case"pt-pt":case"pt-br":return"pt";case"zh-hant":return"zh-Hant";case"pl-pl":return"pl";case"fr-ca":case"fb-fr":case"fr-fr":return"fr";case"ar-ae":case"ar_ar":return"ar";default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.siteLang;return!(window.location.pathname.indexOf("/lp/")>-1||window.location.hostname.indexOf("lp.")>-1)&&("en"==e||"en-uk"==e||"za"==e||"ja"==e)},h=function(e){switch(e.toLowerCase()){case"pt":case"pt-pt":case"pt-br":return"pt";case"fi":case"fi-fi":return"fi";case"es":case"es-mx":case"es-cl":case"es-es":return"es";case"it":case"it-it":return"it";case"nl":case"nl-nl":return"nl";case"fr":case"fr-fr":case"fr-ca":return"fr";case"ru":case"ru-ru":return"ru";case"hu":case"hu-hu":return"hu";case"de":case"de-de":return"de";case"pl":case"pl-pl":return"pl";case"sv":case"se":case"se-se":return"se";case"tr":case"tr-tr":return"tr";case"id":case"id-id":return"id";case"ar":case"ar-ae":case"ar-ar":case"ar_ar":return"ar";case"mn":case"mn-mn":return"mn";case"th":case"th-th":return"th";case"zh":case"zh-hant":return"zh";default:return"en"}},g=function(e,t,n){jQuery.ajax({type:"GET",url:a.a.config.marketingAPI+"api/MarketData/"+e,async:!0,contentType:"application/json; charset=utf-8",dataType:"json",success:function(){t.apply(this,arguments)},error:function(){n.apply(this,arguments)}})},v=function(e,t,n){var r=e.indexOf("?")>-1?"&lang="+window.siteLang:"?lang="+window.siteLang;jQuery.ajax({type:"GET",url:a.a.config.wordPressAPI+e+r,async:!0,contentType:"application/json; charset=utf-8",dataType:"json",success:function(){t.apply(this,arguments)},error:function(){n.apply(this,arguments)}})},w=function(e){var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=e,document.head.appendChild(t)},y=function(e){return e.replace(/-([a-z])/gi,(function(e,t){return t.toUpperCase()}))},b=function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)<=1024},_=function(e){if("avaoptions"==u("p").toLowerCase())return!1;if("test-widget"==u("mode"))return!1;if("test-iframe"==u("mode"))return!1;if("test-static-widget"==u("mode"))return!0;var t=window.location.pathname.toLowerCase(),n=window.siteLang.toLowerCase()||window.document.documentElement.lang.toLowerCase();return!(t.indexOf("ava-options-trading")>-1||t.indexOf("avaoptions")>-1||t.indexOf("what-are-vanilla-options")>-1||t.indexOf("que-son-opciones-vanillae")>-1||t.indexOf("que-son-opciones-vanillae")>-1)&&("tr"!=e&&"il"!=e&&"ca"!=e&&"cn"!=e&&"jp"!=e&&"sa"!=e&&"pk"!=e&&("fb-ca"!=n&&"en-ca"!=n&&"fb-fr"!=n&&"fr-ca"!=n&&"he"!=n&&"ca"!=n&&(!x()||null!==localStorage.getItem("TagChannel")&&-1==localStorage.getItem("TagChannel").indexOf("Affiliates"))))},k=function(){return window.location.pathname.indexOf("/lp/")>-1?"LP":"/"==window.location.pathname?"Home":window.location.pathname.indexOf("demo-account")>-1||window.location.pathname.indexOf("demo-account")>-1?"Registry":"Inner"},S=function(){var e="";if(x()&&(e=localStorage.getItem("registrationId")||""),!e){var t=new Date;e="".concat(t.getDate()).concat(t.getMonth().toString()).concat(t.getHours().toString()).concat(t.getMinutes().toString()).concat(t.getSeconds().toString()).concat(t.getUTCMilliseconds()).concat(Math.floor(101*Math.random())),x()&&localStorage.setItem("registrationId",e)}return e},P=function(e){var t=e?new Date(e):new Date,n="";try{n="".concat(t.getDate().toString().padStart(2,"0"),"-").concat((t.getMonth()+1).toString().padStart(2,"0"),"-").concat(t.getFullYear()," ").concat(t.getHours().toString().padStart(2,"0"),":").concat(t.getMinutes().toString().padStart(2,"0"),":").concat(t.getSeconds().toString().padStart(2,"0"),".").concat(t.getMilliseconds().toString().padStart(3,"0"))}catch(e){n="".concat(t.getDate().toString(),"-").concat((t.getMonth()+1).toString(),"-").concat(t.getFullYear()," ").concat(t.getHours().toString(),":").concat(t.getMinutes().toString(),":").concat(t.getSeconds().toString(),".").concat(t.getMilliseconds().toString())}return n},x=function(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),!0}catch(e){return!1}},j=function(e,t){try{if(!e)return;if(window._pxAppId=e.appId,!window._pxAppId)return;var n={"zh-hans":"zh-CN","zh-hant":"zh-tw"}[window.siteLang],a=n||window.siteLang;window._pxJsClientSrc=e.jsClientSrc,window._pxFirstPartyEnabled=e.firstPartyEnabled,window._pxVid=e.vid,window._pxUuid=e.uuid,window._pxHostUrl=e.hostUrl,window["_"+window._pxAppId]={locale:a,challenge:{view:{width:"100%",height:70,margin:"1px 1px 0 0",fillColor:"#23527c",borderColor:"#23527c",borderWidth:3,textColor:"#23527c",texSize:18,checkmarkThickness:"4px",checkmarkHeight:"20px",checkmarkWidth:"8px"}}},window._pxOnCaptchaSuccess=function(e){"function"==typeof t&&t(e)};var r=document.createElement("script");r.src=e.blockScript,document.getElementsByTagName("head")[0].appendChild(r)}catch(e){console.error(e)}},A=function(e){var t=e||navigator.userAgent,n="";return[{name:"Android Phone",tests:[/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i]},{name:"Android Phone",tests:[/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i]},{name:"Android Tablet",tests:[/Android/i]},{name:"Windows Phone",tests:[/Windows Phone/i]},{name:"Windows Tablet",tests:[/(?=.*\bWindows\b)(?=.*\bARM\b)/i]},{name:"Windows",tests:[/microsoft\s(windows)\s(vista|xp)/i,/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\\/]?([ntce\d\\.\s]+\w)/i,/(win(?=3|9|n)|win\s9x\s)([nt\d\\.]+)/i]},{name:"Blackberry",tests:[/\((bb)(10);/i,/(blackberry)\w*\/?([\w\\.]+)*/i]},{name:"Firefox OS",tests:[/mozilla.+\(mobile;.+gecko.+firefox/i]},{name:"Chromium OS",tests:[/(cros)\s[\w]+\s([\w\\.]+\w)/i]},{name:"iPad",tests:[/iPad/i]},{name:"iOS",tests:[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i]},{name:"Mac OS",tests:[/(mac\sos\sx)\s?([\w\s\\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i]},{name:"Mac OS",tests:[/(mac\sos\sx)\s?([\w\s\\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i]}].forEach((function(e){e.tests.forEach((function(a){a.test(t)&&(n=e.name)}))})),n}},UPJa:function(e,t,n){"use strict";var a=n("AFOx");function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="Environment Class";try{this.environment="production",this.isProd="production"==this.environment,this.environment}catch(e){}this.hostName=window.location.hostname,this.lang=window.siteLang||"en",this.getSubDomain=function(e){var t=e.split(".");return t[0]?t[0]:"www"},this.getMyAvaDomain=function(e){if("fb-ca"===this.lang.toLowerCase()&&"stg"==this.config.subDomainName)return"https://mystgvip.friedbergdirectav.ca/";if("fb-fr"===this.lang.toLowerCase()&&"stgfr"==this.config.subDomainName)return"https://mystgvip.fr.friedbergdirectav.ca/";if("fb-ca"===this.lang.toLowerCase()&&"wpdev"==this.config.subDomainName)return"https://myqa2.friedbergdirectav.ca/";if("fb-ca"===this.lang.toLowerCase()&&"local"==this.config.subDomainName)return"https://mystgvip.friedbergdirectav.ca/";if("fb-ca"===this.lang.toLowerCase())return"https://myvip.friedbergdirectav.ca/";if("fb-fr"===this.lang.toLowerCase())return"https://myvip.fr.friedbergdirectav.ca/";if("www.atrade.co.il"===e)return"https://myvip.atrade.co.il/";switch(this.config.subDomainName){case"www":return"https://myvip"+e.replace("www","")+"/";case"it":return"https://myvip.avatrade.it/";case"es":return"https://myvip.avatrade.es/";case"de":return"https://myvip.avatrade.de/";case"pt":return"https://myvip.avatrade.p/t/";case"fr":return"https://myvip.avatrade.ca/";case"en":return"https://myvip.en.avatrade.ae/";case"ru":return"https://myvip-ru.avatrade.com/";case"stg":return"https://my"+e.replace("stg","stgvip")+"/";case"stg2":return"https://my"+e.replace("stg2","stgvip")+"/";case"stgfr":return"https://my"+e.replace("stgfr","stgvip")+"/";case"stg3":return"https://my"+e.replace("stg3","stgvip")+"/";case"stg4":return"https://my"+e.replace("stg4","stgvip")+"/";case"stgen":return"https://my"+e.replace("stgen","stgvip.en")+"/";case"stgru":return"https://my"+e.replace("stgru","stgvipru")+"/";case"stg-ru":return"https://my"+e.replace("stg-ru","stgvip-ru")+"/";case"wpqafr":return"https://my"+e.replace("wpqafr","qa2")+"/";case"wpqa":return"https://my"+e.replace("wpqa","qa2")+"/";case"qa2":case"qa":return"http://my"+e+"/";case"wpdev":return"https://my"+e.replace("wpdev","qa2")+"/";case"local":return"https://my"+e.replace("local","qa2")+"/";default:return"https://myvip."+e+"/"}},this.getAvaAppDomain=function(e){var t=this.config.services_wt;if(t.indexOf("https://app.")>-1)try{var n=e.slice(e.indexOf("."));t=this.getSubDomain(t)+n+"/"}catch(e){t=this.config.services_wt}return t},this.config=a||{},this.config.lang=this.lang,this.config.version=a.version||"5.2.2",this.config.loaded=!0,this.config.services_wt_step1=a.services_wt_step1||"https://services.avaapiweb.com/",this.config.services_wt=a.services_wt||"https://app.avatrade.com/",this.config.services_v2=a.services_v2||"https://services.avaapiweb.com/",this.config.servicesDomain=a.servicesDomain||"https://services.avaapiweb.com/",this.config.cdnResourcesDomain=a.cdnResourcesDomain||"https://myvip.avatrade.com/myava/",this.config.ShowPartnerCode=a.ShowPartnerCode||!0,this.config.sslEnabled=a.sslEnabled||!1,this.config.marketingAPI=a.marketingAPI||"https://marketdata.avaapiweb.com/",this.config.avaTradeDomain=location.protocol+"//"+location.host+"/",this.config.wordPressAPI=window.location.protocol+"//"+this.hostName+"/wp-json/wp/v2/",this.config.myAvaWebroot="",this.config.ava_io_api=a.avatrade_io_api?a.avatrade_io_api+"/":"https://www.avatrade.io/",this.config.subDomainName=this.getSubDomain(this.hostName),this.config.myAvaDomain=this.getMyAvaDomain(this.hostName),this.config.avaAppDomain=this.getAvaAppDomain(this.hostName),this.config.whiteLabel={name:"AvaTrade"},this.handleDomains(),window.env={config:a}}var t,n,o;return t=e,(n=[{key:"handleDomains",value:function(){"en-uk"!==this.lang.toLowerCase()&&"ar_ar"!==this.lang.toLowerCase()&&"ar-ae"!==this.lang.toLowerCase()&&"en-ae"!==this.lang.toLowerCase()&&"ar"!==this.lang.toLowerCase()&&"id"!==this.lang.toLowerCase()||(this.config.cdnResourcesDomain=this.config.cdnResourcesDomain.replace(".com",".co.uk")),(location.host.indexOf("atrade.co.il")>=0||"he"==this.lang)&&(this.config.whiteLabel={name:"ATrade"},this.config.ShowPartnerCode=!1),"fb-ca"!=this.lang&&"En-ca"!=this.lang&&"fb-fr"!=this.lang&&"fr-ca"!=this.lang||(this.config.whiteLabel={name:"FriedbergDirectAVA"})}},{key:"init",value:function(e){"function"==typeof e&&e()}}])&&r(t.prototype,n),o&&r(t,o),e}());t.a=o},kFTg:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n("Qk3a"),r=function(e){var t=document.querySelector(e).querySelectorAll(".save-item");if($(e).on("click",".save-item",(function(e){var t,n=Object(a.o)()?JSON.parse(localStorage.getItem("bookmark_posts")):[];e.preventDefault(),e.currentTarget.classList.toggle("save-item_fill");var r,o=jQuery(e.currentTarget).data();null!==(t=n)&&void 0!==t&&t.some((function(e){return e.id==o.id}))?n=n.filter((function(e){return e.id!==o.id})):null===(r=n)||void 0===r||r.push(o);Object(a.o)()&&localStorage.setItem("bookmark_posts",JSON.stringify(n))})),Object(a.o)()){var n=Object(a.o)()?JSON.parse(localStorage.getItem("bookmark_posts")):null;n&&n.forEach((function(e){t.forEach((function(t){+t.dataset.id===e.id&&t.classList.add("save-item_fill")}))}))}},o=function(e){jQuery("#main").on("click",".remove-item",(function(t){var n=this;t.preventDefault(),e=e.filter((function(e){return e.id!==$(n).data("id")})),$(this).closest("article").remove(),Object(a.o)()&&localStorage.setItem("bookmark_posts",JSON.stringify(e)),0===e.length&&$("#no__bookmark").css("display","flex")}))}},mSW1:function(e,t,n){"use strict";n.r(t);var a=n("Qk3a"),r=(n("IT0g"),function(e){return'\n            <article id="post-'.concat(e.id,'" class="').concat(e.classes,'">\n                  <a class="post-link d-flex" href="').concat(e.url,'">\n                  <div class="ava-col-8 d-flex d-flex-column justify-content-between">\n                  <h2 class="title">').concat(e.title,'</h2>\n                    <div class="content">').concat(e.excerpt,'</div>\n                    <div class="d-flex justify-content-between">\n                    <div class="meta-post d-flex">\n                    <span class="post-date">').concat(e.date,'</span>\n                      <span class="circle"></span>\n                      <span class="post-read_time">').concat(e.reading,'</span>\n                    </div>\n                    <div\n                    class="remove-item save-item_fill"\n                    data-id="').concat(e.id,'"\n                    >\n                    <svg xmlns="http://www.w3.org/2000/svg" width="17.056" height="21.5" viewBox="0 0 17.056 21.5">\n                      <g id="Icon_feather-bookmark" data-name="Icon feather-bookmark" transform="translate(0.75 0.75)">\n                        <path id="Icon_feather-bookmark-2" data-name="Icon feather-bookmark" d="M23.056,24.5l-7.778-5.556L7.5,24.5V6.722A2.222,2.222,0,0,1,9.722,4.5H20.833a2.222,2.222,0,0,1,2.222,2.222Z" transform="translate(-7.5 -4.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>\n                      </g>\n                    </svg>\n\n                    </div>\n                    </div>\n                  </div>\n\n                  <div class="ava-col-4">\n                  <picture loading="lazy">\n                      <source srcset="').concat(e.featured_image,'.webp" type="image/webp">\n                      <img\n                      class="wp-post-image rounded w-100"\n                      src="').concat(e.featured_image,'"\n                      onerror="this.onerror = null;this.parentNode.children[0].srcset = this.src;"\n                      alt="').concat(e.title,'">\n                  </picture>\n                  </div>\n                    </a>\n            </article>\n\n      ')}),o=n("kFTg");function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(new(function(){function e(){var t,n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(){o.postPage++;var e=o.getHTMLFromSession(),t=o.getTotalPagesToSession();e&&t&&o.renderPosts(e,t),Object(a.b)(o.getApi(),(function(e,t,n){o.saveTotalPagesToSession(parseInt(n.getResponseHeader("x-wp-totalpages"))),o.saveHTMLToSession(e),o.renderPosts(e,parseInt(n.getResponseHeader("x-wp-totalpages")))}),(function(e){400===e.status&&jQuery("#ava_load_more").remove()}))},(n="loadPosts")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}var t,n,i;return t=e,(n=[{key:"imageResize",value:function(){if(window.matchMedia&&window.matchMedia("(max-width: 768px)").matches){var e=$(".latest article");e.each((function(e,t){var n=$(t).height();$(t).find(".wp-post-image").attr("height",n),$(t).find(".wp-post-image").css("height",n)})),$(window).on("resize",(function(){e.each((function(e,t){var n=$(t).height();$(t).find(".wp-post-image").attr("height",n),$(t).find(".wp-post-image").css("height",n)}))}))}}},{key:"infinate",value:function(){var e=this,t=new IntersectionObserver((function(t){t.forEach((function(t){e.loadPosts(t)}))}),{rootMargin:"0px"});null==t||t.observe(document.getElementById("ava_load_more"))}},{key:"events",value:function(){jQuery("#main").on("click",".share_btn.copy",(function(){var e=jQuery(this).data("copy"),t=$("<input>");$("body").append(t),t.val(e).select(),document.execCommand("copy"),t.remove()})),jQuery("#show-more").on("click",(function(){jQuery(".popular").removeClass("hide-articles"),jQuery(this).remove()})),jQuery(".mobile_share").on("click",(function(){jQuery("body").addClass("social_open"),jQuery(".social_buttons").addClass("social_fixed")})),jQuery(".social_close").on("click",(function(){jQuery("body").removeClass("social_open"),jQuery(".social_buttons").removeClass("social_fixed")}));var e=jQuery(".header-wrapper").innerHeight();jQuery(".sticky-top").css("top",e),Object(o.b)("#content");var t=Object(a.o)()?JSON.parse(localStorage.getItem("bookmark_posts")):[];Object(o.a)(t);var n=null==t?void 0:t.map((function(e){return r(e)})).join(""),s=document.querySelector("#articles__bookmark");$(".title .clear_all").on("click",(function(){$(this).parent().addClass("title_are_you_sure"),$(this).html('Are you sure? <span class="clear_yes">Yes</span> or <span class="clear_cancel">Cancel</span>')})),$(".title .clear_all").on("click",".clear_yes",(function(){Object(a.o)()&&localStorage.setItem("bookmark_posts",JSON.stringify(t)),$("#articles__bookmark").html(""),$("#no__bookmark").css("display","flex"),$(".title .clear_all").remove()})),$(".title .clear_all").on("click",".clear_cancel",(function(e){e.stopPropagation(),$(this).parent().parent().removeClass("title_are_you_sure"),e.target.parentNode.innerHTML="clear all"})),s&&(null!=t&&t.length?($(".title .clear_all").css("display","block"),s.innerHTML=n):$("#no__bookmark").css("display","flex"))}},{key:"saveTotalPagesToSession",value:function(e){Object(a.o)()&&window.sessionStorage.setItem("blog_total_pages",e)}},{key:"getTotalPagesToSession",value:function(){if(Object(a.o)())return window.sessionStorage.getItem("blog_total_pages")}},{key:"saveHTMLToSession",value:function(e){Object(a.o)()&&window.sessionStorage.setItem("blog_"+this.postPage+"_"+this.postPerPage,JSON.stringify(e))}},{key:"getHTMLFromSession",value:function(){if(Object(a.o)())return JSON.parse(window.sessionStorage.getItem("blog_"+this.postPage+"_"+this.postPerPage))}},{key:"getApi",value:function(){return this.categoryId?"posts?page="+this.postPage+"&per_page="+this.postPerPage+"&categories="+this.categoryId+"&lazy-api=true":"posts?page="+this.postPage+"&per_page="+this.postPerPage+"&lazy-api=true"}},{key:"renderPosts",value:function(e,t){var n=this,r=Object(a.o)()?JSON.parse(localStorage.getItem("bookmark_posts")):[],o=document.querySelectorAll("#content .save-item");null==e||e.forEach((function(e){null==r||r.forEach((function(t){t.id===e.id&&o.forEach((function(e){+e.dataset.id===t.id&&e.classList.add("save-item_fill")}))})),n.buildPost(e),jQuery("#ava_load_more").before(n.tempPostHtml)})),t==this.postPage&&jQuery("#ava_load_more").remove()}},{key:"buildPost",value:function(e){var t=e.custom.date?e.custom.date:"",n=e.title?e.title.rendered:"";this.tempPostHtml=this.tempPostHtml.clone(),this.tempPostHtml.attr("id","post-"+e.id),this.tempPostHtml.find(".post-date").html(t),this.tempPostHtml.find(".post-read_time").html(e.custom.reading_time),this.tempPostHtml.find(".post-link").attr("href",e.link),e.custom.featured_image&&(this.tempPostHtml.find("source").attr("srcset","".concat(e.custom.featured_image,".webp")),this.tempPostHtml.find("img.wp-post-image").attr("src",e.custom.featured_image)),this.tempPostHtml.find(".title").html(n),this.tempPostHtml.find(".content").html(e.custom.post_excerpt),this.tempPostHtml.find(".save-item").attr("data-id",e.id),this.tempPostHtml.find(".save-item").attr("data-title",e.title.rendered),this.tempPostHtml.find(".save-item").attr("data-featured_image",e.custom.featured_image)}},{key:"init",value:function(){this.tempPostHtml=jQuery(".posts .type-post").first().clone(),this.postPage=1,this.postPerPage=5,this.categoryId=jQuery("#main").data("category-id"),this.events(),this.infinate()}}])&&s(t.prototype,n),i&&s(t,i),e}())).init()}});