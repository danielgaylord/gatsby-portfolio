(self.webpackChunkgatsby_starter_minimal=self.webpackChunkgatsby_starter_minimal||[]).push([[851],{2156:function(t,e,n){t.exports=n(8482)},5261:function(t,e,n){"use strict";var r=n(6494),i=n(9515),o=n(6579),a=n(546),s=n(3991),l=["projectId","dataset","imageOptions","ignoreUnknownTypes"],u={imageOptions:{},ignoreUnknownTypes:!0};function c(t){return"block"===t._type&&t.listItem}t.exports=function(t,e,n,p){var h=r({},u,e),f=Array.isArray(h.blocks)?h.blocks:[h.blocks],d=a(f),m=o(d,h.listNestMode),g=s(n,h.serializers||{}),y=l.reduce((function(t,e){var n=h[e];return void 0!==n&&(t[e]=n),t}),{});function v(e,n,r,o){return"list"===(f=e)._type&&f.listItem?(s=(a=e).listItem,l=a.level,u=a._key,h=a.children.map(v),t(g.list,{key:u,level:l,type:s,options:y},h)):c(e)?function(e,n){var r=e._key,o=i(e).map(v);return t(g.listItem,{node:e,serializers:g,index:n,key:r,options:y},o)}(e,function(t,e){for(var n=0,r=0;r<e.length;r++){if(e[r]===t)return n;c(e[r])&&n++}return n}(e,r)):function(t){return"string"==typeof t||t.marks||"span"===t._type}(e)?p(e,g,n,{serializeNode:v}):function(e,n,r){var o=i(e).map((function(t,e,n){return v(t,e,n,!0)})),a={key:e._key||"block-".concat(n),node:e,isInline:r,serializers:g,options:y};return t(g.block,a,o)}(e,n,o);var a,s,l,u,h,f}var w=Boolean(h.renderContainerOnSingleChild),k=m.map(v);if(w||k.length>1){var b=h.className?{className:h.className}:{};return t(g.container,b,k)}return k[0]?k[0]:"function"==typeof g.empty?t(g.empty):g.empty}},9515:function(t){"use strict";var e=["strong","em","code","underline","strike-through"];function n(t,e,n){if(!t.marks||0===t.marks.length)return t.marks||[];var i=t.marks.reduce((function(t,r){t[r]=t[r]?t[r]+1:1;for(var i=e+1;i<n.length;i++){var o=n[i];if(!o.marks||!Array.isArray(o.marks)||-1===o.marks.indexOf(r))break;t[r]++}return t}),{}),o=r.bind(null,i);return t.marks.slice().sort(o)}function r(t,n,r){var i=t[n]||0,o=t[r]||0;if(i!==o)return o-i;var a=e.indexOf(n),s=e.indexOf(r);return a!==s?a-s:n<r?-1:n>r?1:0}t.exports=function(t){var e=t.children,r=t.markDefs;if(!e||!e.length)return[];var i=e.map(n),o={_type:"span",children:[]},a=[o];return e.forEach((function(t,e){var n=i[e];if(n){var o=1;if(a.length>1)for(;o<a.length;o++){var s=a[o].markKey,l=n.indexOf(s);if(-1===l)break;n.splice(l,1)}var u,c=function(t){for(var e=t.length-1;e>=0;e--){var n=t[e];if("span"===n._type&&n.children)return n}return}(a=a.slice(0,o));if(n.forEach((function(e){var n={_type:"span",_key:t._key,children:[],mark:r.find((function(t){return t._key===e}))||e,markKey:e};c.children.push(n),a.push(n),c=n})),"span"!==(u=t)._type||"string"!=typeof u.text||!Array.isArray(u.marks)&&void 0!==u.marks)c.children=c.children.concat(t);else{for(var p=t.text.split("\n"),h=p.length;h-- >1;)p.splice(h,0,"\n");c.children=c.children.concat(p)}}else{a[a.length-1].children.push(t)}})),o.children}},546:function(t,e,n){"use strict";var r=n(6494);function i(t){var e=0,n=t.length;if(0===n)return e;for(var r=0;r<n;r++)e=(e<<5)-e+t.charCodeAt(r),e&=e;return e}t.exports=function(t){return t.map((function(t){return t._key?t:r({_key:(e=t,i(JSON.stringify(e)).toString(36).replace(/[^A-Za-z0-9]/g,""))},t);var e}))}},3904:function(t,e,n){"use strict";var r=n(8430),i=n(2885),o=n(6494),a=encodeURIComponent,s="You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(r("block-content-image-materializing"));t.exports=function(t){var e=t.node,n=t.options,r=n.projectId,l=n.dataset,u=e.asset;if(!u)throw new Error("Image does not have required `asset` property");if(u.url)return u.url+function(t){var e=t.imageOptions,n=Object.keys(e);if(!n.length)return"";var r=n.map((function(t){return"".concat(a(t),"=").concat(a(e[t]))}));return"?".concat(r.join("&"))}(n);if(!r||!l)throw new Error(s);if(!u._ref)throw new Error("Invalid image reference in block, no `_ref` found on `asset`");return i(o({projectId:r,dataset:l},n.imageOptions||{})).image(e).toString()}},8482:function(t,e,n){"use strict";var r=n(2898),i=n(5261),o=n(3904),a=n(3991);t.exports={blocksToNodes:function(t,e,n,o){if(n)return i(t,e,n,o);var a=r(t);return i(t,e,a.defaultSerializers,a.serializeSpan)},getSerializers:r,getImageUrl:o,mergeSerializers:a}},3991:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var i=n(6494);t.exports=function(t,e){return Object.keys(t).reduce((function(n,o){var a=r(t[o]);return n[o]="function"===a?void 0!==e[o]?e[o]:t[o]:"object"===a?i({},t[o],e[o]):void 0===e[o]?t[o]:e[o],n}),{})}},6579:function(t,e,n){"use strict";var r=n(6494);function i(t){return Boolean(t.listItem)}function o(t,e){return t.level===e.level&&t.listItem===e.listItem}function a(t){return{_type:"list",_key:"".concat(t._key,"-parent"),level:t.level,listItem:t.listItem,children:[t]}}function s(t){return t.children&&t.children[t.children.length-1]}function l(t,e){var n="string"==typeof e.listItem;if("list"===t._type&&t.level===e.level&&n&&t.listItem===e.listItem)return t;var r=s(t);return!!r&&l(r,e)}t.exports=function(t){for(var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",u=[],c=0;c<t.length;c++){var p=t[c];if(i(p))if(e)if(o(p,e))e.children.push(p);else if(p.level>e.level){var h=a(p);if("html"===n){var f=s(e),d=r({},f,{children:f.children.concat(h)});e.children[e.children.length-1]=d}else e.children.push(h);e=h}else if(p.level<e.level){var m=l(u[u.length-1],p);if(m){(e=m).children.push(p);continue}e=a(p),u.push(e)}else if(p.listItem===e.listItem)console.warn("Unknown state encountered for block",p),u.push(p);else{var g=l(u[u.length-1],{level:p.level});if(g&&g.listItem===p.listItem){(e=g).children.push(p);continue}e=a(p),u.push(e)}else e=a(p),u.push(e);else u.push(p),e=null}return u}},2898:function(t,e,n){"use strict";var r=n(6494),i=n(3904);t.exports=function(t,e){var n=e||{useDashedStyles:!1};function o(e,n){return t(e,null,n.children)}return{defaultSerializers:{types:{block:function(e){var n=e.node.style||"normal";return/^h\d/.test(n)?t(n,null,e.children):t("blockquote"===n?"blockquote":"p",null,e.children)},image:function(e){if(!e.node.asset)return null;var n=t("img",{src:i(e)});return e.isInline?n:t("figure",null,n)}},marks:{strong:o.bind(null,"strong"),em:o.bind(null,"em"),code:o.bind(null,"code"),underline:function(e){var r=n.useDashedStyles?{"text-decoration":"underline"}:{textDecoration:"underline"};return t("span",{style:r},e.children)},"strike-through":function(e){return t("del",null,e.children)},link:function(e){return t("a",{href:e.mark.href},e.children)}},list:function(e){var n="bullet"===e.type?"ul":"ol";return t(n,null,e.children)},listItem:function(e){var n=e.node.style&&"normal"!==e.node.style?t(e.serializers.types.block,e,e.children):e.children;return t("li",null,n)},block:function(e){var n=e.node,r=e.serializers,i=e.options,o=e.isInline,a=e.children,s=n._type,l=r.types[s];if(!l){if(i.ignoreUnknownTypes)return console.warn('Unknown block type "'.concat(s,'", please specify a serializer for it in the `serializers.types` prop')),t(r.unknownType,{node:n,options:i,isInline:o},a);throw new Error('Unknown block type "'.concat(s,'", please specify a serializer for it in the `serializers.types` prop'))}return t(l,{node:n,options:i,isInline:o},a)},span:function(e){var n=e.node,r=n.mark,i=n.children,o="string"==typeof r?r:r._type,a=e.serializers.marks[o];return a?t(a,e.node,i):(console.warn('Unknown mark type "'.concat(o,'", please specify a serializer for it in the `serializers.marks` prop')),t(e.serializers.unknownMark,null,i))},hardBreak:function(){return t("br")},unknownType:function(e){return t("div",{style:{display:"none"}},'Unknown block type "'.concat(e.node._type,'", please specify a serializer for it in the `serializers.types` prop'))},unknownMark:"span",container:"div",text:void 0,empty:""},serializeSpan:function(e,n,i,o){if("\n"===e&&n.hardBreak)return t(n.hardBreak,{key:"hb-".concat(i)});if("string"==typeof e)return n.text?t(n.text,{key:"text-".concat(i)},e):e;var a;e.children&&(a={children:e.children.map((function(t,n){return o.serializeNode(t,n,e.children,!0)}))});var s=r({},e,a);return t(n.span,{key:e._key||"span-".concat(i),node:s,serializers:n})}}}},8430:function(t){t.exports=function(t){return"https://docs.sanity.io/help/"+t}},1072:function(t,e,n){"use strict";var r=n(7294),i=n(5697),o=n(2156),a=n(8804),s=a.serializers,l=a.serializeSpan,u=a.renderProps,c=o.getImageUrl,p=o.blocksToNodes,h=o.mergeSerializers,f=r.createElement,d=function t(e){var n=h(t.defaultSerializers,e.serializers),r=Object.assign({},u,e,{serializers:n,blocks:e.blocks||[]});return p(f,r,s,l)};d.defaultSerializers=s,d.getImageUrl=c,d.propTypes={className:i.string,renderContainerOnSingleChild:i.bool,ignoreUnknownTypes:i.bool,projectId:i.string,dataset:i.string,imageOptions:i.object,serializers:i.shape({types:i.object,marks:i.object,list:i.func,listItem:i.func,block:i.func,span:i.func}),blocks:i.oneOfType([i.arrayOf(i.shape({_type:i.string.isRequired})),i.shape({_type:i.string.isRequired})]).isRequired},d.defaultProps={ignoreUnknownTypes:!0,renderContainerOnSingleChild:!1,serializers:{},imageOptions:{}},t.exports=d},8804:function(t,e,n){"use strict";var r=n(7294),i=(0,n(2156).getSerializers)(r.createElement),o=i.defaultSerializers,a=i.serializeSpan;t.exports={serializeSpan:a,serializers:o,renderProps:{nestMarks:!0}}},2885:function(t){t.exports=function(){function t(){return t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},t.apply(this,arguments)}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t){var n=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=e(t)))return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}var i="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function o(t){var e=t.split("-"),n=e[1],r=e[2],o=e[3];if(!n||!r||!o)throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+i+'".');var a=r.split("x"),s=+a[0],l=+a[1];if(!isFinite(s)||!isFinite(l))throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+i+'".');return{id:n,width:s,height:l,format:o}}var a=function(t){return!!t&&"string"==typeof t._ref},s=function(t){return!!t&&"string"==typeof t._id},l=function(t){var e=t;return!(!e||!e.asset)&&"string"==typeof e.asset.url};function u(t){if(!t)return null;var e;if("string"==typeof t&&c(t))e={asset:{_ref:p(t)}};else if("string"==typeof t)e={asset:{_ref:t}};else if(a(t))e={asset:t};else if(s(t))e={asset:{_ref:t._id||""}};else if(l(t))e={asset:{_ref:p(t.asset.url)}};else{if("object"!=typeof t.asset)return null;e=t}var n=t;return n.crop&&(e.crop=n.crop),n.hotspot&&(e.hotspot=n.hotspot),h(e)}function c(t){return/^https?:\/\//.test(""+t)}function p(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}function h(e){if(e.crop&&e.hotspot)return e;var n=t({},e);return n.crop||(n.crop={left:0,top:0,bottom:0,right:0}),n.hotspot||(n.hotspot={x:.5,y:.5,height:1,width:1}),n}var f=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function d(e){var n=t({},e||{}),r=n.source;delete n.source;var i=u(r);if(!i)return null;var a=o(i.asset._ref||i.asset._id||""),s=Math.round(i.crop.left*a.width),l=Math.round(i.crop.top*a.height),c={left:s,top:l,width:Math.round(a.width-i.crop.right*a.width-s),height:Math.round(a.height-i.crop.bottom*a.height-l)},p=i.hotspot.height*a.height/2,h=i.hotspot.width*a.width/2,f=i.hotspot.x*a.width,d=i.hotspot.y*a.height,y={left:f-h,top:d-p,right:f+h,bottom:d+p};return n.rect||n.focalPoint||n.ignoreImageParams||n.crop||(n=t(t({},n),g({crop:c,hotspot:y},n))),m(t(t({},n),{},{asset:a}))}function m(t){var e=t.baseUrl||"https://cdn.sanity.io",n=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,r=e+"/images/"+t.projectId+"/"+t.dataset+"/"+n,i=[];if(t.rect){var o=t.rect,a=o.left,s=o.top,l=o.width,u=o.height;(0!==a||0!==s||u!==t.asset.height||l!==t.asset.width)&&i.push("rect="+a+","+s+","+l+","+u)}t.bg&&i.push("bg="+t.bg),t.focalPoint&&(i.push("fp-x="+t.focalPoint.x),i.push("fp-y="+t.focalPoint.y));var c=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return c&&i.push("flip="+c),f.forEach((function(e){var n=e[0],r=e[1];void 0!==t[n]?i.push(r+"="+encodeURIComponent(t[n])):void 0!==t[r]&&i.push(r+"="+encodeURIComponent(t[r]))})),0===i.length?r:r+"?"+i.join("&")}function g(t,e){var n,r=e.width,i=e.height;if(!r||!i)return{width:r,height:i,rect:t.crop};var o=t.crop,a=t.hotspot,s=r/i;if(o.width/o.height>s){var l=o.height,u=l*s,c=o.top,p=(a.right-a.left)/2+a.left-u/2;p<o.left?p=o.left:p+u>o.left+o.width&&(p=o.left+o.width-u),n={left:Math.round(p),top:Math.round(c),width:Math.round(u),height:Math.round(l)}}else{var h=o.width,f=h/s,d=o.left,m=(a.bottom-a.top)/2+a.top-f/2;m<o.top?m=o.top:m+f>o.top+o.height&&(m=o.top+o.height-f),n={left:Math.max(0,Math.floor(d)),top:Math.max(0,Math.floor(m)),width:Math.round(h),height:Math.round(f)}}return{width:r,height:i,rect:n}}var y=["clip","crop","fill","fillmax","max","scale","min"],v=["top","bottom","left","right","center","focalpoint","entropy"],w=["format"];function k(t){return!!t&&"object"==typeof t.clientConfig}function b(t){for(var e,n=r(f);!(e=n()).done;){var i=e.value,o=i[0],a=i[1];if(t===o||t===a)return o}return t}function x(t){var e=t;if(k(e)){var n=e.clientConfig,r=n.apiHost,i=n.projectId,o=n.dataset;return new O(null,{baseUrl:(r||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:i,dataset:o})}return new O(null,t)}var O=function(){function e(e,n){this.options=t(e?t({},e.options||{}):{},n||{})}var n=e.prototype;return n.withOptions=function(n){var r=n.baseUrl||this.options.baseUrl,i={baseUrl:r};for(var o in n)n.hasOwnProperty(o)&&(i[b(o)]=n[o]);return new e(this,t({baseUrl:r},i))},n.image=function(t){return this.withOptions({source:t})},n.dataset=function(t){return this.withOptions({dataset:t})},n.projectId=function(t){return this.withOptions({projectId:t})},n.bg=function(t){return this.withOptions({bg:t})},n.dpr=function(t){return this.withOptions({dpr:t})},n.width=function(t){return this.withOptions({width:t})},n.height=function(t){return this.withOptions({height:t})},n.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},n.maxWidth=function(t){return this.withOptions({maxWidth:t})},n.minWidth=function(t){return this.withOptions({minWidth:t})},n.maxHeight=function(t){return this.withOptions({maxHeight:t})},n.minHeight=function(t){return this.withOptions({minHeight:t})},n.size=function(t,e){return this.withOptions({width:t,height:e})},n.blur=function(t){return this.withOptions({blur:t})},n.sharpen=function(t){return this.withOptions({sharpen:t})},n.rect=function(t,e,n,r){return this.withOptions({rect:{left:t,top:e,width:n,height:r}})},n.format=function(t){return this.withOptions({format:t})},n.invert=function(t){return this.withOptions({invert:t})},n.orientation=function(t){return this.withOptions({orientation:t})},n.quality=function(t){return this.withOptions({quality:t})},n.forceDownload=function(t){return this.withOptions({download:t})},n.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},n.flipVertical=function(){return this.withOptions({flipVertical:!0})},n.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},n.fit=function(t){if(-1===y.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},n.crop=function(t){if(-1===v.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},n.saturation=function(t){return this.withOptions({saturation:t})},n.auto=function(t){if(-1===w.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},n.pad=function(t){return this.withOptions({pad:t})},n.url=function(){return d(this.options)},n.toString=function(){return this.url()},e}();return x}()},9857:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r,i=n(1880),o=n(7294),a=n(2359),s=n(9),l=n(1072),u=n.n(l),c=s.ZP.div(r||(r=(0,i.Z)(["\n    .post-pic {\n        display: block;\n        margin: auto;\n        width: 50%;\n    }\n    .author-pic {\n        width: 4rem;\n        border-radius: 50%;\n        transform: translateY(-1rem);\n    }\n    .post-text {\n        padding-top: 2rem;\n        padding-bottom: 2rem;\n        margin: auto;\n        width: 90%;\n    }\n"])));function p(t){return o.createElement(c,null,o.createElement(a.G,{image:t.pageContext.image,alt:"Mostly unrelated opening picture for flair purposes",className:"post-pic"}),o.createElement("div",{className:"page-top center"},o.createElement("p",{className:"headline"},t.pageContext.title)),o.createElement(u(),{className:"post-text",blocks:t.pageContext.content}),o.createElement("p",{className:"center"},"Published by ",o.createElement(a.G,{image:t.pageContext.authorImage,alt:t.pageContext.author,className:"author-pic"})," on ",t.pageContext.published),o.createElement("p",{className:"center"},"Filed under ",t.pageContext.categories.map((function(t,e){return o.createElement("em",null,(e?", ":"")+t.title)}))))}}}]);
//# sourceMappingURL=component---src-templates-post-js-792002f56ea3813b754f.js.map