
(function(a){function u(a,d){var c=Array.from(a.querySelectorAll(d));a.matches&&a.matches(d)&&c.splice(0,0,a);return c}function n(b){b=a(b);var d=b.attr("ID")+"-carousel";b.find(".carousel").attr("id",d);b.find(".carousel-controls a").attr("href","#"+d);b.find(".carousel-indicators li").attr("data-target","#"+d);a(b).find(".carousel-item:first").addClass("active")}function v(b){b=a(b);var d=b.find(".carousel-item").length,c=b.find(".carousel-inner").attr("data-visible");d<c&&(c=d);b.find(".carousel-inner").attr("class",
"carousel-inner slides"+c);b.find(".clonedCol").remove();b.find(".carousel-item .col-md-12").each(function(){2>c?a(this).attr("class","col-md-12"):"5"==c?a(this).attr("class","col-md-12 col-lg-15"):a(this).attr("class","col-md-12 col-lg-"+12/c)});b.find(".carousel-item").each(function(){for(var b=a(this),d=1;d<c;d++){b=b.next();b.length||(b=a(this).siblings(":first"));var g=b.index();b.find(".col-md-12:first").clone().addClass("cloneditem-"+d).addClass("clonedCol").attr("data-cloned-index",g).appendTo(a(this).children().eq(0))}})}
function w(b){0!==a(b).find(".nav-tabs").length&&a(b).outerFind('section[id^="tabs"]').each(function(){var b=a(this).attr("id"),c=a(this).find(".nav-tabs .nav-item"),e=a(this).find(".tab-pane");e.removeClass("active").eq(0).addClass("active");c.find("a").removeClass("active").removeAttr("aria-expanded").eq(0).addClass("active");e.each(function(){a(this).attr("id",b+"_tab"+a(this).index())});c.each(function(){a(this).find("a").attr("href","#"+b+"_tab"+a(this).index())})})}function p(){if(document.querySelector(".loop-container")){var a=
function(d){var c=0,e=0,f=+d.children[0].dataset.speed||.05,g=d.querySelector(".item"),h=g.dataset.direction;if(g){(function(){d.querySelectorAll(".item").forEach(function(a){a.textContent=a.dataset.linewords+"\u00a0"})})();d.style.cssText="position: relative; display: inline-flex; white-space: nowrap;";d.children[1].style.cssText="position: absolute; left: "+100*-h+"%;";var k=function(){e+=f;c=.8*c+.2*e;100<e&&(c-=e,e=0);d.style.transform="translateX("+c*h+"%)";window.requestAnimationFrame(k)},l=
new MutationObserver(function(){document.querySelectorAll(".loop-container").forEach(function(a){a.style.transform=""});l.disconnect();a(d)});l.observe(g,{attributes:!0,attributeFilter:["data-direction","data-speed","data-linewords"]});(function(){window.addEventListener("scroll",function(){return e+=1.5*f})})();k()}};document.querySelectorAll(".loop-container").forEach(function(d){return a(d)})}}function r(){var a=Array.from(document.querySelectorAll(".ticker__item"));if(0!==a.length){var d=a.map(function(a){return a.textContent}),
c=new MutationObserver(function(){a.forEach(function(a,b){a.textContent=a.dataset.word})});a.forEach(function(a,b){a.textContent=d[b];c.observe(a,{attributes:!0,attributeFilter:["data-word"]})});(function(){document.querySelectorAll(".ticker__item").forEach(function(a){a.textContent=a.dataset.word})})()}}var k=a("html").hasClass("is-builder");a.extend(a.easing,{easeInOutCubic:function(a,d,c,e,f){return 1>(d/=f/2)?e/2*d*d*d+c:e/2*((d-=2)*d*d+2)+c}});a.fn.outerFind=function(a){return this.find(a).addBack(a)};
a.fn.scrollEnd=function(b,d){a(this).scroll(function(){var c=a(this);c.data("scrollTimeout")&&clearTimeout(c.data("scrollTimeout"));c.data("scrollTimeout",setTimeout(b,d))})};a.fn.footerReveal=function(){function b(){!f&&d.outerHeight()<=e.outerHeight()?(d.css({"z-index":-999,position:"fixed",bottom:0}),d.css({width:c.outerWidth()}),c.css({"margin-bottom":d.outerHeight()})):(d.css({"z-index":"",position:"",bottom:""}),d.css({width:""}),c.css({"margin-bottom":""}))}var d=a(this),c=d.prev(),e=a(window),
f=!!document.documentMode;b();e.on("load resize",function(){b()});return this};(function(a,d){var c=function(a,b,d){var c;return function(){var k=this,l=arguments;c?clearTimeout(c):d&&a.apply(k,l);c=setTimeout(function(){d||a.apply(k,l);c=null},b||100)}};jQuery.fn[d]=function(a){return a?this.bind("resize",c(a)):this.trigger(d)}})(jQuery,"smartresize");a.isMobile=function(b){var d=[],c={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};b="undefined"==
a.type(b)?"*":b.toLowerCase();"*"==b?d=a.map(c,function(a){return a}):b in c&&d.push(c[b]);return(b=!(!d.find(function(a){return"iPhone|iPod|iPad"===a})||!(navigator.userAgent.match(/(iPad)/)||"MacIntel"===navigator.platform&&"undefined"!==typeof navigator.standalone)))?b:!(!d.length||!navigator.userAgent.match(new RegExp(d.join("|"),"i")))};var x=function(){var b=a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),d=b[0],c=parseInt(window.innerHeight/
2,10),d=parseInt((window.getComputedStyle?getComputedStyle(d,null):d.currentStyle).height,10);b.remove();return d==c}();a(function(){function b(){a(this).css("height",9*a(this).parent().width()/16)}function d(b){setTimeout(function(){a(b).outerFind(".mbr-parallax-background").jarallax({speed:.6}).css("position","relative")},0)}function c(a){u(a,"[data-bg-video]").forEach(function(a){var b=a.getAttribute("data-bg-video");if(b){var d=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(shorts\/|video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),
c=a.querySelector(".mbr-background-video-preview")||document.createElement("div");c.classList.add("mbr-background-video-preview");c.style.display="none";c.style.backgroundSize="cover";c.style.backgroundPosition="center";a.querySelector(".mbr-background-video-preview")||a.childNodes[0].before(c);if(d&&(/youtu\.?be/g.test(d[3])||/vimeo/g.test(d[3])))if(d&&/youtu\.?be/g.test(d[3])){d[6]=d[6].replace("shorts","embed");var b="http"+("https:"===location.protocol?"s":"")+":",b=b+("//img.youtube.com/vi/"+
d[6]+"/maxresdefault.jpg"),l=new Image;l.onload=function(){if(120===(l.naturalWidth||l.width)){var b=l.src.split("/").pop();switch(b){case "maxresdefault.jpg":l.src=l.src.replace(b,"sddefault.jpg");break;case "sddefault.jpg":l.src=l.src.replace(b,"hqdefault.jpg");break;default:k&&(c.style.backgroundImage='url("images/no-video.jpg")',c.style.display="block")}}else c.style.backgroundImage='url("'+l.src+'")',c.style.display="block";a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();
var e=document.createElement("div"),f=document.createElement("div"),h=document.createElement("div"),g=document.createElement("div");g.classList.add("mbr-video-foreground");g.appendChild(e);h.appendChild(g);f.appendChild(h);e.classList.add("mbr-background-video");a.childNodes[1].before(f);b=new YouTubePlayer(e,{modestBranding:!0,autoplay:!0,controls:!1,origin:"*",iv_load_policy:!1,keyboard:!1,captions:!1,annotations:!1,related:!1});f.style.overflow="hidden";f.style.position="absolute";f.style.width=
"100%";f.style.height="100%";f.style.top="0";f.style.left="0";h.style.background="#000";h.style.top="0";h.style.right="0";h.style.bottom="0";h.style.left="0";g.style.position="absolute";g.style.top="0";g.style.left="0";g.style.width="100%";g.style.height="100%";g.style.pointerEvents="none";e.style.marginTop="0";e.style.maxWidth="initial";e.style.transitionProperty="opacity";e.style.transitionDuration="1000ms";e.style.pointerEvents="none";e.style.position="absolute";e.style.top="0";e.style.left="0";
e.style.width="100%";e.style.height="100%";e.parentNode.style.overflow="hidden";e.style.transform="scale(1.2)";b.load(d[6],!0);b.play();b.loadPlaylist();b.setLoop(!0);b.mute();var h=window.outerWidth,g=window.outerHeight,t=b._opts.width/b._opts.height,e=h,f=Math.ceil(e/t);Math.ceil(-((f-g)/2));f<g&&(f=g,e=Math.ceil(f*t),Math.ceil(-((e-h)/2)));b.setSize(e,f)};l.setAttribute("src",b)}else{if(d&&/vimeo/g.test(d[3])){var e=new XMLHttpRequest;e.open("GET","https://vimeo.com/api/v2/video/"+d[6]+".json",
!0);e.onreadystatechange=function(){if(4===this.readyState)if(200<=this.status&&400>this.status){var a=JSON.parse(this.responseText);c.style.backgroundImage='url("'+a[0].thumbnail_large+'")';c.style.display="block"}else k&&(c.style.backgroundImage='url("images/no-video.jpg")',c.style.display="block")};e.send();e=null;a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();e=document.createElement("div");e.classList.add("mbr-background-video");a.childNodes[1].before(e);
b=new Vimeo.Player(e,{id:b,loop:!0,background:!0,responsive:!0,autoplay:!0,byline:!1,title:!1,muted:!0,controls:!1});e=b.element.parentNode;e.style.overflow="hidden";b.element.style.pointerEvents="none";b.element.style.marginLeft="-"+(b.element.scrollWidth-e.scrollWidth)/2+"px";b.element.style.minHeight="100vh";b.element.style.minWidth="177.77vh"}}else if(k)c.style.backgroundImage='url("images/video-placeholder.jpg")',c.style.display="block";else if(!k){var e=document.createElement("video"),f=document.createElement("source");
e.append(f);a.childNodes[1].before(e);f.src=b;e.autoplay=!0;e.loop=!0;e.muted=!0;e.setAttribute("muted","");e.playsinline=!0;e.setAttribute("playsinline","");e.style.position="absolute";e.style.left="50%";e.style.top="50%";e.style.bottom="0";e.style.right="0";e.style.minWidth="100%";e.style.minHeight="100%";e.style.transform="translateX(-50%) translateY(-50%)";b="";a.querySelector(".mbr-fallback-image")&&(b=window.getComputedStyle(a.querySelector(".mbr-fallback-image")).backgroundImage,b=b.match(/\((.*?)\)/)[1].replace(/('|")/g,
""),e.setAttribute("poster",b));e.parentNode.style.overflow="hidden"}}})}a("html").addClass(a.isMobile()?"mobile":"desktop");a(window).scroll(function(){a(".mbr-navbar--sticky").each(function(){var b=10<a(window).scrollTop()?"addClass":"removeClass";a(this)[b]("mbr-navbar--stuck").not(".mbr-navbar--open")[b]("mbr-navbar--short")})});a.isMobile()&&navigator.userAgent.match(/Chrome/i)?function(b,d){var c=[b,b];c[d>b?0:1]=d;a(window).smartresize(function(){var b=a(window).height();0>a.inArray(b,c)&&
(b=c[a(window).width()>b?1:0]);a(".mbr-section--full-height").css("height",b+"px")})}(a(window).width(),a(window).height()):x||(a(window).smartresize(function(){a(".mbr-section--full-height").css("height",a(window).height()+"px")}),a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind(".mbr-section--full-height").length&&a(window).resize()}));a(window).smartresize(function(){a(".mbr-section--16by9").each(b)});a(document).on("add.cards changeParameter.cards",
function(d){var c=a(d.target).outerFind(".mbr-section--16by9");c.length?c.attr("data-16by9","true").each(b):a(d.target).outerFind("[data-16by9]").css("height","").removeAttr("data-16by9")});a.fn.jarallax&&!a.isMobile()&&(a(window).on("update.parallax",function(b){setTimeout(function(){var b=a(".mbr-parallax-background");b.jarallax("coverImage");b.jarallax("clipContainer");b.jarallax("onScroll")},0)}),k?(a(document).on("add.cards",function(b){d(b.target);a(window).trigger("update.parallax")}),a(document).on("changeParameter.cards",
function(b,c,e,f){if("bg"===c)switch(a(b.target).jarallax("destroy").css("position",""),a(b.target).find(".mbr-background-video-preview").remove(),a(b.target).find(".mbr-background-video").remove(),a(b.target).find(".mbr-background-video-wrapper").remove(),a(b.target).find(".mbr-fallback-image").remove(),f){case "type":!0===e.parallax&&d(b.target);break;case "value":"image"===e.type&&!0===e.parallax&&d(b.target);break;case "parallax":!0===e.parallax&&d(b.target)}a(window).trigger("update.parallax")})):
d(document.body),a(window).on("shown.bs.tab",function(b){a(window).trigger("update.parallax")}));var e,f,g=0,h=null,q=!a.isMobile();a(window).scroll(function(){f&&clearTimeout(f);var b=a(window).scrollTop(),d=b<=g||q;g=b;if(h){var c=b>h.breakPoint;d?c!=h.fixed&&(q?(h.fixed=c,a(h.elm).toggleClass("is-fixed")):f=setTimeout(function(){h.fixed=c;a(h.elm).toggleClass("is-fixed")},40)):(h.fixed=!1,a(h.elm).removeClass("is-fixed"))}});a(document).on("add.cards delete.cards",function(b){e&&clearTimeout(e);
e=setTimeout(function(){h&&(h.fixed=!1,a(h.elm).removeClass("is-fixed"));a(".mbr-fixed-top:first").each(function(){h={breakPoint:a(this).offset().top+3*a(this).height(),fixed:!1,elm:this};a(window).scroll()})},650)});a(window).smartresize(function(){a(".mbr-embedded-video").each(function(){a(this).height(a(this).width()*parseInt(a(this).attr("height")||315)/parseInt(a(this).attr("width")||560))})});a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind("iframe").length&&
a(window).resize()});if(k)a(document).on("add.cards",function(a){c(a.target)});else c(document.body);a(document).on("changeParameter.cards",function(b,d,e,f){if("bg"===d)switch(f){case "type":a(b.target).find(".mbr-background-video-preview").remove();"video"===e.type&&c(b.target);break;case "value":"video"===e.type&&(a(b.target).find(".mbr-background-video-preview").remove(),c(b.target))}});k||a("body > *:not(style, script)").trigger("add.cards");a("html").addClass("mbr-site-loaded");a(window).resize().scroll();
k||a(document).click(function(b){try{var d=b.target;if(!a(d).parents().hasClass("carousel")){do if(d.hash){var c=/#bottom|#top/g.test(d.hash);a(c?"body":d.hash).each(function(){b.preventDefault();var c=a(d).parents().hasClass("navbar-fixed-top")?60:0,c="#bottom"==d.hash?a(this).height()-a(window).height():a(this).offset().top-c;a(this).hasClass("panel-collapse")||a(this).hasClass("tab-pane")||a("html, body").stop().animate({scrollTop:c},800,"easeInOutCubic")});break}while(d=d.parentNode)}}catch(e){}});
a(".cols-same-height .mbr-figure").each(function(){function b(){c.css({width:"",maxWidth:"",marginLeft:""});if(g&&f){var a=g/f;d.addClass({position:"absolute",top:0,left:0,right:0,bottom:0});var h=e.height()/e.width();h>a&&(a=100*(h-a)/a,c.css({width:a+100+"%",maxWidth:a+100+"%",marginLeft:-a/2+"%"}))}}var d=a(this),c=d.children("img"),e=d.parent(),f=c[0].width,g=c[0].height;c.one("load",function(){f=c[0].width;g=c[0].height;b()});a(window).on("resize",b);b()})});if(!k){if(a.fn.socialLikes)a(document).on("add.cards",
function(b){a(b.target).outerFind(".mbr-social-likes").on("counter.social-likes",function(b,c,e){999<e&&a(".social-likes__counter",b.target).html(Math.floor(e/1E3)+"k")}).socialLikes({initHtml:!1})});a(document).on("add.cards",function(b){a(b.target).hasClass("mbr-reveal")&&a(b.target).footerReveal()});a(document).ready(function(){if(a.isMobile()){var b=this.querySelectorAll("section[data-bg-video]");[].forEach.call(b,function(a){(a=a.querySelector(".mbr-fallback-image"))&&a.classList.remove("disabled")})}else if(a("input[name=animation]").length){var d=
function(a){if("none"!==a.parents(".carousel-item").css("display"))return!1;var b=a.parents(".carousel-item").parent();if(b.find(".carousel-item.active .hidden.animated").lenght)return!1;if(1<b.attr("data-visible")){b=b.attr("data-visible");if(a.parents().is(".cloneditem-"+(b-1))&&a.parents(".cloneditem-"+(b-1)).attr("data-cloned-index")>=b)return!0;a.removeClass("animated hidden");return!1}return!0},c=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b};a("input[name=animation]").remove();
var e=a("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not(function(){return a(this).parents().is("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop, .modal-content")}).not(function(){return a(this).parents().is("form")&&
a(this).is("li")}).addClass("hidden animated"),b=a(window);b.on("scroll resize",function(){var b=document.documentElement.scrollTop||document.body.scrollTop,g=b+window.innerHeight-50;a.each(e,function(){var e=a(this),k=e[0],l=k.offsetHeight,k=c(k);if((k+l>=b&&k<=g||d(e))&&e.hasClass("hidden"))e.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass("animated fadeInUp")})})});b.trigger("scroll")}});a(".nav-dropdown").length&&
a(".nav-dropdown").swipe({swipeLeft:function(b,d,c,e,f){a(".navbar-close").click()}})}a(document).ready(function(){if(a(".mbr-arrow-up").length){var b=a("#scrollToTop"),d=a("body,html"),c=a(window);b.css("display","none");c.scroll(function(){0<a(this).scrollTop()?b.fadeIn():b.fadeOut()});b.click(function(){d.animate({scrollTop:0},400);return!1})}});if(!k)a(".mbr-arrow").on("click",function(b){b=a(b.target).closest("section").next();b.hasClass("engine")&&(b=b.closest("section").next());b=b.offset();
a("html, body").stop().animate({scrollTop:b.top},800,"linear")});if(a("nav.navbar").length){var m=a("nav.navbar").height();a(".mbr-after-navbar.mbr-fullscreen").css("padding-top",m+"px")}if(!k&&(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./)))a(document).on("add.cards",function(b){var d=a(b.target);if(d.hasClass("mbr-fullscreen"))a(window).on("load resize",function(){d.css("height","auto");d.outerHeight()<=a(window).height()&&d.css("height","1px")});
if(d.hasClass("mbr-slider")||d.hasClass("mbr-gallery"))d.find(".carousel-indicators").addClass("ie-fix").find("li").css({display:"inline-block",width:"30px"}),d.hasClass("mbr-slider")&&d.find(".full-screen .slider-fullscreen-image").css("height","1px")});a(document).ready(function(){if(!k){var b=function(b){var c=a(b).parents("section").find("iframe"),e=1<c.length?c[1]:c[0],f=a(e).attr("src"),c=a(b).parents("section").find(a(b).attr("data-modal"));b.parents("section").css("z-index","5000");c.find("iframe, video").click(function(a){a.stopPropagation()});
if(f){if(-1!==f.indexOf("youtu")&&e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),-1!==f.indexOf("vimeo")){var g=new Vimeo.Player(a(e));g.play()}}else(c=a(e).parents("section").find("video")[0])&&c.play&&c.play();a(b).parents("section").find(a(b).attr("data-modal")).css("display","table").click(function(){if(f)-1!==f.indexOf("youtu")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),-1!==f.indexOf("vimeo")&&g.pause();else{var c=
a(e).parents("section").find("video")[0];c&&c.pause&&c.pause()}a(this).css("display","none").off("click");b.parents("section").css("z-index","0")})};a(".modalWindow-video iframe").each(function(){var b=a(this).attr("data-src");a(this).removeAttr("data-src");var c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);if(-1!==b.indexOf("youtu"))a(this).attr("src","https://youtube.com/embed/"+
c[6]+"?rel=0&enablejsapi=1");else if(-1!==b.indexOf("vimeo"))a(this).attr("src","https://player.vimeo.com/video/"+c[6]+"?autoplay=0&loop=0");else if(/\.(mp4|webm|ogg|ogv|m4a|m4v)$/.test(b)){c=document.createElement("video");c.onloadeddata=function(a){a.target.style.height=a.target.videoHeight>a.target.videoWidth?window.innerHeight-.2*window.innerHeight+"px":"100%"};var e=a(this).parents("section").find("img")[0];e&&c.setAttribute("poster",e.src);c.setAttribute("controls","");c.setAttribute("playsinline",
"");c.setAttribute("loop","");c.setAttribute("src",b);a(this).css("display","none");c.style.width="100%";a(this).after(c)}});a("[data-modal]").click(function(){b(a(this))})}});if(!k&&!a.isMobile()){var m=a("section.menu"),y=a(window).width();!m.find(".navbar").hasClass("collapsed")&&991<y&&(m.find("ul.navbar-nav li.dropdown").hover(function(){a(this).hasClass("open")||a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&a(this).find("a")[0].click()}),m.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(function(){a(this).hasClass("open")||
a(this).find("a")[0].click()},function(){a(this).hasClass("open")&&a(this).find("a")[0].click()}))}a.fn.outerFind=function(a){return this.find(a).addBack(a)};k||("undefined"===typeof window.initClientPlugin&&0!=a(document.body).find(".clients").length&&(window.initClientPlugin=!0,a(document.body).find(".clients").each(function(b,d){a(this).attr("data-isinit")||(n(a(this)),v(a(this)))})),"undefined"===typeof window.initPopupBtnPlugin&&0!=a(document.body).find("section.popup-btn-cards").length&&(window.initPopupBtnPlugin=
!0,a("section.popup-btn-cards .card-wrapper").each(function(b,d){a(this).addClass("popup-btn")})),"undefined"===typeof window.initTestimonialsPlugin&&0!=a(document.body).find(".testimonials-slider").length&&(window.initTestimonialsPlugin=!0,a(".testimonials-slider").each(function(){n(this)})),"undefined"===typeof window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=!0,a(document).ready(function(){0!=a(".accordionStyles").length&&a('.accordionStyles .card-header a[role="button"]').each(function(){a(this).hasClass("collapsed")||
a(this).addClass("collapsed")})}),a('.accordionStyles .card-header a[role="button"]').click(function(){var b=a(this).closest(".accordionStyles").attr("id");a(this).closest(".card").find(".panel-collapse").hasClass("collapsing")||(-1!=b.indexOf("toggle")?a(this).hasClass("collapsed")?a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up"):a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down"):-1!=b.indexOf("accordion")&&(a(this).closest(".accordionStyles ").children(".card").each(function(){a(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down")}),
a(this).hasClass("collapsed")&&a(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up")))})),"undefined"===typeof window.initTabsPlugin&&(window.initTabsPlugin=!0,w(document.body)),0!=a(".mbr-slider.carousel").length&&a(".mbr-slider.carousel").each(function(){var b=a(this),d=b.find(".carousel-control"),c=b.find(".carousel-indicators li");b.on("slide.bs.carousel",function(){d.bind("click",function(a){a.stopPropagation();a.preventDefault()});c.bind("click",function(a){a.stopPropagation();
a.preventDefault()});b.carousel({keyboard:!1})}).on("slid.bs.carousel",function(){d.unbind("click");c.unbind("click");b.carousel({keyboard:!0});1<b.find(".carousel-item.active").length&&(b.find(".carousel-item.active").eq(1).removeClass("active"),b.find(".carousel-control li.active").eq(1).removeClass("active"))})}));if(k)a(document).on("add.cards",function(b){a(b.target).find(".form-with-styler").length&&(b=a(b.target).find(".form-with-styler"),a(b).find('select:not("[multiple]")').each(function(){a(this).styler()}),
a(b).find("input[type=number]").each(function(){a(this).styler();a(this).parent().parent().removeClass("form-control")}),a(b).find("input[type=date]").each(function(){a(this).datetimepicker&&a(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),a(b).find("input[type=time]").each(function(){a(this).datetimepicker&&a(this).datetimepicker({format:"H:i",datepicker:!1})}))});else a("section .form-with-styler").each(function(){a(this).find('select:not("[multiple]")').each(function(){a(this).styler()});
a(this).find("input[type=number]").each(function(){a(this).styler();a(this).parent().parent().removeClass("form-control")});var b;b=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Firefox/i)?!0:!1;!b&&a(this).datetimepicker&&(a(this).find("input[type=date]").each(function(){a(this).datetimepicker({format:"Y-m-d",
timepicker:!1})}),a(this).find("input[type=time]").each(function(){a(this).datetimepicker({format:"H:i",datepicker:!1})}))});a(document).on("change",'input[type="range"]',function(b){a(b.target).parents(".form-group").find(".value")[0].innerHTML=b.target.value});a(document).ready(function(){a(window).scroll(function(){var b=a(".navbar-dropdown"),d=a(".navbar-collapse");if(b&&!b.hasClass("opacityScrollOff")){var c=1<a(document).scrollTop();b.toggleClass("opacityScroll",!c);d.toggleClass("opacityScroll",
!c)}})});if(k)a(document).on("add.cards",p);else window.addEventListener("DOMContentLoaded",p);if(k)a(document).on("add.cards",r);else window.addEventListener("DOMContentLoaded",r)})(jQuery);