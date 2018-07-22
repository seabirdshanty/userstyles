// ==UserScript==
// @name       Remove Tumblrs CLEARFIX bs
// @namespace url(http://www.w3.org/1999/xhtml);
// @version    0.1
// @description  Makes tumblr blue bs transparent. Might not work on all themes idk
// @match      http://*.tumblr.com/*
// @match      http://tumblr.com/*
// @match      https://*.tumblr.com/*
// @match      https://tumblr.com/*
// @copyright  Godoka
// ==/UserScript==

(function() {
var css = "";
css += "@namespace url(http://www.w3.org/1999/xhtml);";
if (false || (document.location.href.indexOf("http://www.tumblr.com/") == 0))
    css += " .l-content {\n\n background-color: transparent !important;\n opacity: 1 !important;\n\n }";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
