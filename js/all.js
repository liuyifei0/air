!function(){var e=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,t=navigator.userAgent.toLowerCase().indexOf("opera")>-1,n=navigator.userAgent.toLowerCase().indexOf("msie")>-1;(e||t||n)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t),e&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus()))},!1)}(),function(e,t,n){"use strict";var o=function(o,s){var a=!!t.getComputedStyle;a||(t.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"===t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this});var i,r,l,c,u,d,p,h=function(e,t,n,o){if("addEventListener"in e)try{e.addEventListener(t,n,o)}catch(s){if("object"!=typeof n||!n.handleEvent)throw s;e.addEventListener(t,function(e){n.handleEvent.call(n,e)},o)}else"attachEvent"in e&&("object"==typeof n&&n.handleEvent?e.attachEvent("on"+t,function(){n.handleEvent.call(n)}):e.attachEvent("on"+t,n))},v=function(e,t,n,o){if("removeEventListener"in e)try{e.removeEventListener(t,n,o)}catch(s){if("object"!=typeof n||!n.handleEvent)throw s;e.removeEventListener(t,function(e){n.handleEvent.call(n,e)},o)}else"detachEvent"in e&&("object"==typeof n&&n.handleEvent?e.detachEvent("on"+t,function(){n.handleEvent.call(n)}):e.detachEvent("on"+t,n))},f=function(e){if(e.children.length<1)throw new Error("The Nav container has no containing elements");for(var t=[],n=0;n<e.children.length;n++)1===e.children[n].nodeType&&t.push(e.children[n]);return t},g=function(e,t){for(var n in t)e.setAttribute(n,t[n])},m=function(e,t){0!==e.className.indexOf(t)&&(e.className+=" "+t,e.className=e.className.replace(/(^\s*)|(\s*$)/g,""))},b=function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/(^\s*)|(\s*$)/g,"")},y=function(e,t,n){for(var o=0;o<e.length;o++)t.call(n,o,e[o])},w=function(e,t){return e.className&&new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)},E=function(){for(var e=this,t=r.menuItems;-1===e.className.indexOf(t);)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement},x=e.createElement("style"),T=e.documentElement,N=function(t,n){var o;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",enableFocus:!1,enableDropdown:!1,menuItems:"menu-items",subMenu:"sub-menu",openDropdown:"Open sub menu",closeDropdown:"Close sub menu",init:function(){},open:function(){},close:function(){},resizeMobile:function(){},resizeDesktop:function(){}};for(o in n)this.options[o]=n[o];if(m(T,this.options.jsClass),this.wrapperEl=t.replace("#",""),e.getElementById(this.wrapperEl))this.wrapper=e.getElementById(this.wrapperEl);else{if(!e.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=e.querySelector(this.wrapperEl)}this.wrapper.inner=f(this.wrapper),r=this.options,i=this.wrapper,this._init(this)};return N.prototype={destroy:function(){if(this._removeStyles(),b(i,"closed"),b(i,"opened"),b(i,r.navClass),b(i,r.navClass+"-"+this.index),b(T,r.navActiveClass),i.removeAttribute("style"),i.removeAttribute("aria-hidden"),v(t,"resize",this,!1),v(t,"focus",this,!1),v(e.body,"touchmove",this,!1),v(l,"touchstart",this,!1),v(l,"touchend",this,!1),v(l,"mouseup",this,!1),v(l,"keyup",this,!1),v(l,"click",this,!1),r.customToggle?l.removeAttribute("aria-hidden"):l.parentNode.removeChild(l),r.enableDropdown){var n=this;y(p,function(e,t){v(t,"touchstart",n,!1),v(t,"touchend",n,!1),v(t,"mouseup",n,!1),v(t,"keyup",n,!1),v(t,"click",n,!1)})}},toggle:function(){c===!0&&(d?this.close():this.open())},open:function(){d||(b(i,"closed"),m(i,"opened"),m(T,r.navActiveClass),m(l,"active"),i.style.position=r.openPos,g(i,{"aria-hidden":"false"}),g(i,{"aria-expanded":"true"}),g(l,{"aria-expanded":"true"}),d=!0,r.open())},close:function(){d&&(m(i,"closed"),b(i,"opened"),b(T,r.navActiveClass),b(l,"active"),g(i,{"aria-hidden":"true"}),g(i,{"aria-expanded":"false"}),g(l,{"aria-expanded":"false"}),r.animate?(c=!1,setTimeout(function(){i.style.position="absolute",c=!0,r.enableDropdown&&(b(i,"dropdown-active"),y(p,function(e,t){b(t,"toggled"),b(t.nextSibling,"toggled")}))},r.transition+10)):(i.style.position="absolute",r.enableDropdown&&(b(i,"dropdown-active"),y(p,function(e,t){b(t,"toggled"),b(t.nextSibling,"toggled")}))),d=!1,r.close())},resize:function(){"none"!==t.getComputedStyle(l,null).getPropertyValue("display")?(u=!0,g(l,{"aria-hidden":"false"}),g(i,{"aria-expanded":"false"}),g(l,{"aria-expanded":"false"}),i.className.match(/(^|\s)closed(\s|$)/)&&(g(i,{"aria-hidden":"true"}),i.style.position="absolute"),i.className.match(/(^|\s)closed(\s|$)/)||(g(i,{"aria-expanded":"true"}),g(l,{"aria-expanded":"true"})),this._createStyles(),this._calcHeight(),r.resizeMobile()):(u=!1,g(l,{"aria-hidden":"true"}),g(i,{"aria-hidden":"false"}),i.removeAttribute("aria-expanded"),l.removeAttribute("aria-expanded"),i.style.position=r.openPos,this._removeStyles(),r.resizeDesktop())},handleEvent:function(e){var n=e||t.event;switch(n.type){case"touchstart":this._onTouchStart(n);break;case"touchmove":this._onTouchMove(n);break;case"touchend":case"mouseup":this._onTouchEnd(n);break;case"click":this._preventDefault(n);break;case"keyup":this._onKeyUp(n);break;case"focus":case"resize":this.resize(n)}},_init:function(){this.index=n++,m(i,r.navClass),m(i,r.navClass+"-"+this.index),m(i,"closed"),c=!0,d=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize(),this._createFocus(),this._createDropdown();var o=this;setTimeout(function(){o.resize()},20),h(t,"resize",this,!1),h(t,"focus",this,!1),h(e.body,"touchmove",this,!1),h(l,"touchstart",this,!1),h(l,"touchend",this,!1),h(l,"mouseup",this,!1),h(l,"keyup",this,!1),h(l,"click",this,!1),r.init()},_createStyles:function(){x.parentNode||(x.type="text/css",e.getElementsByTagName("head")[0].appendChild(x))},_removeStyles:function(){x.parentNode&&x.parentNode.removeChild(x)},_createToggle:function(){if(r.customToggle){var t=r.customToggle.replace("#","");if(e.getElementById(t))l=e.getElementById(t);else{if(!e.querySelector(t))throw new Error("The custom nav toggle you are trying to select doesn't exist");l=e.querySelector(t)}}else{var n=e.createElement("a");n.innerHTML=r.label,g(n,{href:"#","class":"nav-toggle"}),"after"===r.insert?i.parentNode.insertBefore(n,i.nextSibling):i.parentNode.insertBefore(n,i),l=n}},_closeOnNavClick:function(){if(r.closeOnNavClick){var e=i.getElementsByTagName("a"),t=this;y(e,function(n,o){h(e[n],"click",function(){u&&t.toggle()},!1)})}},_preventDefault:function(e){return e.preventDefault?(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation(),!1):void(e.returnValue=!1)},_onTouchStart:function(e){Event.prototype.stopImmediatePropagation||this._preventDefault(e),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY,this.touchHasMoved=!1,v(l,"mouseup",this,!1)},_onTouchMove:function(e){(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(e){if(this._preventDefault(e),u){var n=e||t.event,o=n.target||n.srcElement,s=!1;if(w(o,"dropdown-toggle")&&r.enableDropdown&&(s=!0),!this.touchHasMoved){if("touchend"===e.type)return void(s?this._toggleDropdown(o):this.toggle());var a=e||t.event;3!==a.which&&2!==a.button&&(s?this._toggleDropdown(o):this.toggle())}}},_onKeyUp:function(e){var n=e||t.event,o=e.target,s=!1;w(o,"dropdown-toggle")&&r.enableDropdown&&(s=!0),13===n.keyCode&&(s?this._toggleDropdown(o):this.toggle())},_transitions:function(){if(r.animate){var e=i.style,t="max-height "+r.transition+"ms, visibility "+r.transition+"ms linear";e.WebkitTransition=e.MozTransition=e.OTransition=e.transition=t}},_calcHeight:function(){for(var e=0,t=0;t<i.inner.length;t++)e+=i.inner[t].offsetHeight;var n="."+r.jsClass+" ."+r.navClass+"-"+this.index+".opened{max-height:"+e+"px !important} ."+r.jsClass+" ."+r.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";x.styleSheet?x.styleSheet.cssText=n:x.innerHTML=n,n=""},_createFocus:function(){if(r.enableFocus){var e,t,n=i.getElementsByTagName("ul")[0],o=n.getElementsByTagName("a");for(t=0,e=o.length;e>t;t++)o[t].addEventListener("focus",E,!0),o[t].addEventListener("blur",E,!0)}},_createDropdown:function(){if(r.enableDropdown){var e,t,n=this,o=(i.getElementsByTagName("ul")[0],i.getElementsByClassName(r.subMenu));for(m(i,"multiple-level-nav"),e=0,t=o.length;t>e;e++)o[e].parentNode.setAttribute("aria-haspopup","true"),o[e].insertAdjacentHTML("beforebegin",'<button class="dropdown-toggle" aria-expanded="false">'+r.openDropdown+"</button>");p=i.querySelectorAll(".dropdown-toggle"),y(p,function(e,t){h(t,"touchstart",n,!1),h(t,"touchend",n,!1),h(t,"mouseup",n,!1),h(t,"keyup",n,!1),h(t,"click",n,!1)})}},_toggleDropdown:function(e){e.innerHTML===r.openDropdown?e.innerHTML=r.closeDropdown:e.innerHTML=r.openDropdown;var t=e.parentNode;w(t.parentNode.parentNode,"dropdown");if(w(e,"toggled")){b(e,"toggled"),e.setAttribute("aria-expanded","false");var n=e.nextElementSibling;b(n,"toggled"),b(i,"dropdown-active")}else{m(e,"toggled"),e.setAttribute("aria-expanded","true");var n=e.nextElementSibling;m(n,"toggled"),m(i,"dropdown-active")}}},new N(o,s)};"undefined"!=typeof module&&module.exports?module.exports=o:t.responsiveNav=o}(document,window,0);var customToggle=document.getElementById("nav-toggle"),customLabel=document.getElementById("nav-toggle-label"),navigation=responsiveNav(".nav-collapse",{animate:!0,transition:284,customToggle:".nav-toggle",navClass:"nav-collapse",menuItems:"menu-items",subMenu:"sub-menu",enableFocus:!0,enableDropdown:!0,openDropdown:screenReaderTexts.expandSubMenu,closeDropdown:screenReaderTexts.collapseSubMenu,open:function(){customLabel.innerHTML=screenReaderTexts.collapseMenu},close:function(){customLabel.innerHTML=screenReaderTexts.expandMenu},resizeMobile:function(){customToggle.setAttribute("aria-controls","nav")},resizeDesktop:function(){customToggle.removeAttribute("aria-controls")}});!function(e){e(window).scroll(function(){var t=300,n=1200;e(this).scrollTop()>t?e(".top").addClass("is-visible"):e(".top").removeClass("is-visible"),e(this).scrollTop()>n?e(".top").addClass("fade-out"):e(".top").removeClass("fade-out")}),e(function(){e(".top").on("click",function(t){t.preventDefault(),e("body, html").animate({scrollTop:0},700)}),e('a[href^="#"]').on("click",function(t){t.preventDefault();var n=this.hash,o=e(n);e("html, body").stop().animate({scrollTop:o.offset().top},500,"swing",function(){window.location.hash=n})})})}(jQuery);