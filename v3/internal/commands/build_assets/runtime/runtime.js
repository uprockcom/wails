(()=>{var de=Object.defineProperty;var w=(e,i)=>{for(var n in i)de(e,n,{get:i[n],enumerable:!0})};var T={};w(T,{Hide:()=>We,Quit:()=>fe,Show:()=>ge});var le="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var f=(e=21)=>{let i="",n=e;for(;n--;)i+=le[Math.random()*64|0];return i};var ce=window.location.origin+"/wails/runtime",d={Call:0,Clipboard:1,Application:2,Events:3,ContextMenu:4,Dialog:5,Window:6,Screens:7,System:8,Browser:9},se=f();function l(e,i){return function(n,o=null){return we(e,n,i,o)}}function we(e,i,n,o){let t=new URL(ce);t.searchParams.append("object",e),t.searchParams.append("method",i);let a={headers:{}};return n&&(a.headers["x-wails-window-name"]=n),o&&t.searchParams.append("args",JSON.stringify(o)),a.headers["x-wails-client-id"]=se,new Promise((s,p)=>{fetch(t,a).then(c=>{if(c.ok)return c.headers.get("Content-Type")&&c.headers.get("Content-Type").indexOf("application/json")!==-1?c.json():c.text();p(Error(c.statusText))}).then(c=>s(c)).catch(c=>p(c))})}var P=l(d.Application,""),me=0,ue=1,pe=2;function We(){return P(me)}function ge(){return P(ue)}function fe(){return P(pe)}var B={};w(B,{OpenURL:()=>b});var he=l(d.Browser,""),De=0;function b(e){return he(De,{url:e})}var I={};w(I,{SetText:()=>Me,Text:()=>xe});var q=l(d.Clipboard,""),Ce=0,Se=1;function Me(e){return q(Ce,{text:e})}function xe(){return q(Se)}var L={};w(L,{Capabilities:()=>Re,Environment:()=>Ee,IsAMD64:()=>Oe,IsARM:()=>Pe,IsARM64:()=>Te,IsDarkMode:()=>be,IsDebug:()=>F,IsLinux:()=>Ue,IsMac:()=>ye,IsWindows:()=>R,invoke:()=>h});var J=l(d.System,""),Ae=0,ve=1;function h(e){return window.chrome?window.chrome.webview.postMessage(e):window.webkit.messageHandlers.external.postMessage(e)}function be(){return J(Ae)}function Re(){return fetch("/wails/capabilities").json()}function Ee(){return J(ve)}function R(){return window._wails.environment.OS==="windows"}function Ue(){return window._wails.environment.OS==="linux"}function ye(){return window._wails.environment.OS==="darwin"}function Oe(){return window._wails.environment.Arch==="amd64"}function Pe(){return window._wails.environment.Arch==="arm"}function Te(){return window._wails.environment.Arch==="arm64"}function F(){return window._wails.environment.Debug===!0}window.addEventListener("contextmenu",Le);var Be=l(d.ContextMenu,""),Ie=0;function Fe(e,i,n,o){Be(Ie,{id:e,x:i,y:n,data:o})}function Le(e){let i=e.target,n=window.getComputedStyle(i).getPropertyValue("--custom-contextmenu");if(n=n?n.trim():"",n){e.preventDefault();let o=window.getComputedStyle(i).getPropertyValue("--custom-contextmenu-data");Fe(n,e.clientX,e.clientY,o);return}ze(e)}function ze(e){if(F())return;let i=e.target;switch(window.getComputedStyle(i).getPropertyValue("--default-contextmenu").trim()){case"show":return;case"hide":e.preventDefault();return;default:if(i.isContentEditable)return;let t=window.getSelection(),a=t.toString().length>0;if(a)for(let s=0;s<t.rangeCount;s++){let c=t.getRangeAt(s).getClientRects();for(let g=0;g<c.length;g++){let C=c[g];if(document.elementFromPoint(C.left,C.top)===i)return}}if((i.tagName==="INPUT"||i.tagName==="TEXTAREA")&&(a||!i.readOnly&&!i.disabled))return;e.preventDefault()}}var z={};w(z,{GetFlag:()=>S});function S(e){try{return window._wails.flags[e]}catch(i){throw new Error("Unable to retrieve flag '"+e+"': "+i)}}window._wails=window._wails||{};window._wails.setResizable=He;window._wails.endDrag=ee;window.addEventListener("mousedown",_e);window.addEventListener("mousemove",Ge);window.addEventListener("mouseup",je);var M=!1,E=null,$=!1,ke="auto";function Ne(e){let i=window.getComputedStyle(e.target).getPropertyValue("--webkit-app-region");return!i||i===""||i.trim()!=="drag"||e.buttons!==1?!1:e.detail===1}function He(e){$=e}function ee(){document.body.style.cursor="default",M=!1}function Ve(){return E?(h(`resize:${E}`),!0):!1}function _e(e){(R()&&Ve()||Ne(e))&&(M=!!Ze(e))}function Ze(e){return!(e.offsetX>e.target.clientWidth||e.offsetY>e.target.clientHeight)}function je(e){(e.buttons!==void 0?e.buttons:e.which)>0&&ee()}function u(e=ke){document.documentElement.style.cursor=e,E=e}function Ge(e){M=Ye(e),R()&&$&&Ke(e)}function Ye(e){let i=e.buttons!==void 0?e.buttons:e.which;return M&&i>0?(h("drag"),!1):M}function Ke(e){let i=S("system.resizeHandleHeight")||5,n=S("system.resizeHandleWidth")||5,o=S("resizeCornerExtra")||10,t=window.outerWidth-e.clientX<n,a=e.clientX<n,s=e.clientY<i,p=window.outerHeight-e.clientY<i,c=window.outerWidth-e.clientX<n+o,g=e.clientX<n+o,C=e.clientY<i+o,Q=window.outerHeight-e.clientY<i+o;!a&&!t&&!s&&!p&&E!==void 0?u():c&&Q?u("se-resize"):g&&Q?u("sw-resize"):g&&C?u("nw-resize"):C&&c?u("ne-resize"):a?u("w-resize"):s?u("n-resize"):p?u("s-resize"):t&&u("e-resize")}var N={};w(N,{GetAll:()=>Je,GetCurrent:()=>ei,GetPrimary:()=>$e});var k=l(d.Screens,""),Xe=0,Qe=1,qe=2;function Je(){return k(Xe)}function $e(){return k(Qe)}function ei(){return k(qe)}var H={};w(H,{Center:()=>Oi,Close:()=>Qi,Fullscreen:()=>Ti,Get:()=>U,GetZoomLevel:()=>rn,Height:()=>en,Hide:()=>Vi,Maximise:()=>_i,Minimise:()=>Gi,RelativePosition:()=>Ni,Restore:()=>Ki,Screen:()=>Hi,SetAlwaysOnTop:()=>zi,SetBackgroundColour:()=>qi,SetMaxSize:()=>Fi,SetMinSize:()=>Li,SetRelativePosition:()=>ki,SetResizable:()=>Ji,SetSize:()=>Bi,SetTitle:()=>Pi,SetZoomLevel:()=>an,Show:()=>Xi,Size:()=>Ii,ToggleMaximise:()=>ji,UnMaximise:()=>Zi,UnMinimise:()=>Yi,Width:()=>$i,ZoomIn:()=>nn,ZoomOut:()=>on,ZoomReset:()=>tn});var ii=0,ni=1,oi=2,ti=3,ri=4,ai=5,di=6,li=7,ci=8,si=9,wi=10,mi=11,ui=12,pi=13,Wi=14,gi=15,fi=16,hi=17,Di=18,Ci=19,Si=20,Mi=21,xi=22,Ai=23,vi=24,bi=25,Ri=26,Ei=27,Ui=28,yi=29,r=U("");function ie(e){return{Get:i=>ie(l(d.Window,i)),Center:()=>e(ii),SetTitle:i=>e(ni,{title:i}),Fullscreen:()=>e(oi),UnFullscreen:()=>e(ti),SetSize:(i,n)=>e(ri,{width:i,height:n}),Size:()=>e(ai),SetMaxSize:(i,n)=>e(di,{width:i,height:n}),SetMinSize:(i,n)=>e(li,{width:i,height:n}),SetAlwaysOnTop:i=>e(ci,{alwaysOnTop:i}),SetRelativePosition:(i,n)=>e(si,{x:i,y:n}),RelativePosition:()=>e(wi),Screen:()=>e(mi),Hide:()=>e(ui),Maximise:()=>e(pi),UnMaximise:()=>e(Wi),ToggleMaximise:()=>e(gi),Minimise:()=>e(fi),UnMinimise:()=>e(hi),Restore:()=>e(Di),Show:()=>e(Ci),Close:()=>e(Si),SetBackgroundColour:(i,n,o,t)=>e(Mi,{r:i,g:n,b:o,a:t}),SetResizable:i=>e(xi,{resizable:i}),Width:()=>e(Ai),Height:()=>e(vi),ZoomIn:()=>e(bi),ZoomOut:()=>e(Ri),ZoomReset:()=>e(Ei),GetZoomLevel:()=>e(Ui),SetZoomLevel:i=>e(yi,{zoomLevel:i})}}function U(e){return ie(l(d.Window,e))}function Oi(){r.Center()}function Pi(e){r.SetTitle(e)}function Ti(){r.Fullscreen()}function Bi(e,i){r.SetSize(e,i)}function Ii(){return r.Size()}function Fi(e,i){r.SetMaxSize(e,i)}function Li(e,i){r.SetMinSize(e,i)}function zi(e){r.SetAlwaysOnTop(e)}function ki(e,i){r.SetRelativePosition(e,i)}function Ni(){return r.RelativePosition()}function Hi(){return r.Screen()}function Vi(){r.Hide()}function _i(){r.Maximise()}function Zi(){r.UnMaximise()}function ji(){r.ToggleMaximise()}function Gi(){r.Minimise()}function Yi(){r.UnMinimise()}function Ki(){r.Restore()}function Xi(){r.Show()}function Qi(){r.Close()}function qi(e,i,n,o){r.SetBackgroundColour(e,i,n,o)}function Ji(e){r.SetResizable(e)}function $i(){return r.Width()}function en(){return r.Height()}function nn(){r.ZoomIn()}function on(){r.ZoomOut()}function tn(){r.ZoomReset()}function rn(){return r.GetZoomLevel()}function an(e){r.SetZoomLevel(e)}var K={};w(K,{Reload:()=>Y});var j={};w(j,{Emit:()=>Z,Off:()=>Wn,OffAll:()=>gn,On:()=>mn,OnMultiple:()=>_,Once:()=>un,Types:()=>dn,WailsEvent:()=>x,setup:()=>sn});var ne={Windows:{SystemThemeChanged:"windows:SystemThemeChanged",APMPowerStatusChange:"windows:APMPowerStatusChange",APMSuspend:"windows:APMSuspend",APMResumeAutomatic:"windows:APMResumeAutomatic",APMResumeSuspend:"windows:APMResumeSuspend",APMPowerSettingChange:"windows:APMPowerSettingChange",ApplicationStarted:"windows:ApplicationStarted",WebViewNavigationCompleted:"windows:WebViewNavigationCompleted",WindowInactive:"windows:WindowInactive",WindowActive:"windows:WindowActive",WindowClickActive:"windows:WindowClickActive",WindowMaximise:"windows:WindowMaximise",WindowUnMaximise:"windows:WindowUnMaximise",WindowFullscreen:"windows:WindowFullscreen",WindowUnFullscreen:"windows:WindowUnFullscreen",WindowRestore:"windows:WindowRestore",WindowMinimise:"windows:WindowMinimise",WindowUnMinimise:"windows:WindowUnMinimise",WindowClose:"windows:WindowClose",WindowSetFocus:"windows:WindowSetFocus",WindowKillFocus:"windows:WindowKillFocus",WindowDragDrop:"windows:WindowDragDrop",WindowDragEnter:"windows:WindowDragEnter",WindowDragLeave:"windows:WindowDragLeave",WindowDragOver:"windows:WindowDragOver"},Mac:{ApplicationDidBecomeActive:"mac:ApplicationDidBecomeActive",ApplicationDidChangeBackingProperties:"mac:ApplicationDidChangeBackingProperties",ApplicationDidChangeEffectiveAppearance:"mac:ApplicationDidChangeEffectiveAppearance",ApplicationDidChangeIcon:"mac:ApplicationDidChangeIcon",ApplicationDidChangeOcclusionState:"mac:ApplicationDidChangeOcclusionState",ApplicationDidChangeScreenParameters:"mac:ApplicationDidChangeScreenParameters",ApplicationDidChangeStatusBarFrame:"mac:ApplicationDidChangeStatusBarFrame",ApplicationDidChangeStatusBarOrientation:"mac:ApplicationDidChangeStatusBarOrientation",ApplicationDidFinishLaunching:"mac:ApplicationDidFinishLaunching",ApplicationDidHide:"mac:ApplicationDidHide",ApplicationDidResignActiveNotification:"mac:ApplicationDidResignActiveNotification",ApplicationDidUnhide:"mac:ApplicationDidUnhide",ApplicationDidUpdate:"mac:ApplicationDidUpdate",ApplicationWillBecomeActive:"mac:ApplicationWillBecomeActive",ApplicationWillFinishLaunching:"mac:ApplicationWillFinishLaunching",ApplicationWillHide:"mac:ApplicationWillHide",ApplicationWillResignActive:"mac:ApplicationWillResignActive",ApplicationWillTerminate:"mac:ApplicationWillTerminate",ApplicationWillUnhide:"mac:ApplicationWillUnhide",ApplicationWillUpdate:"mac:ApplicationWillUpdate",ApplicationDidChangeTheme:"mac:ApplicationDidChangeTheme!",ApplicationShouldHandleReopen:"mac:ApplicationShouldHandleReopen!",WindowDidBecomeKey:"mac:WindowDidBecomeKey",WindowDidBecomeMain:"mac:WindowDidBecomeMain",WindowDidBeginSheet:"mac:WindowDidBeginSheet",WindowDidChangeAlpha:"mac:WindowDidChangeAlpha",WindowDidChangeBackingLocation:"mac:WindowDidChangeBackingLocation",WindowDidChangeBackingProperties:"mac:WindowDidChangeBackingProperties",WindowDidChangeCollectionBehavior:"mac:WindowDidChangeCollectionBehavior",WindowDidChangeEffectiveAppearance:"mac:WindowDidChangeEffectiveAppearance",WindowDidChangeOcclusionState:"mac:WindowDidChangeOcclusionState",WindowDidChangeOrderingMode:"mac:WindowDidChangeOrderingMode",WindowDidChangeScreen:"mac:WindowDidChangeScreen",WindowDidChangeScreenParameters:"mac:WindowDidChangeScreenParameters",WindowDidChangeScreenProfile:"mac:WindowDidChangeScreenProfile",WindowDidChangeScreenSpace:"mac:WindowDidChangeScreenSpace",WindowDidChangeScreenSpaceProperties:"mac:WindowDidChangeScreenSpaceProperties",WindowDidChangeSharingType:"mac:WindowDidChangeSharingType",WindowDidChangeSpace:"mac:WindowDidChangeSpace",WindowDidChangeSpaceOrderingMode:"mac:WindowDidChangeSpaceOrderingMode",WindowDidChangeTitle:"mac:WindowDidChangeTitle",WindowDidChangeToolbar:"mac:WindowDidChangeToolbar",WindowDidChangeVisibility:"mac:WindowDidChangeVisibility",WindowDidDeminiaturize:"mac:WindowDidDeminiaturize",WindowDidEndSheet:"mac:WindowDidEndSheet",WindowDidEnterFullScreen:"mac:WindowDidEnterFullScreen",WindowDidEnterVersionBrowser:"mac:WindowDidEnterVersionBrowser",WindowDidExitFullScreen:"mac:WindowDidExitFullScreen",WindowDidExitVersionBrowser:"mac:WindowDidExitVersionBrowser",WindowDidExpose:"mac:WindowDidExpose",WindowDidFocus:"mac:WindowDidFocus",WindowDidMiniaturize:"mac:WindowDidMiniaturize",WindowDidMove:"mac:WindowDidMove",WindowDidOrderOffScreen:"mac:WindowDidOrderOffScreen",WindowDidOrderOnScreen:"mac:WindowDidOrderOnScreen",WindowDidResignKey:"mac:WindowDidResignKey",WindowDidResignMain:"mac:WindowDidResignMain",WindowDidResize:"mac:WindowDidResize",WindowDidUpdate:"mac:WindowDidUpdate",WindowDidUpdateAlpha:"mac:WindowDidUpdateAlpha",WindowDidUpdateCollectionBehavior:"mac:WindowDidUpdateCollectionBehavior",WindowDidUpdateCollectionProperties:"mac:WindowDidUpdateCollectionProperties",WindowDidUpdateShadow:"mac:WindowDidUpdateShadow",WindowDidUpdateTitle:"mac:WindowDidUpdateTitle",WindowDidUpdateToolbar:"mac:WindowDidUpdateToolbar",WindowDidUpdateVisibility:"mac:WindowDidUpdateVisibility",WindowShouldClose:"mac:WindowShouldClose!",WindowWillBecomeKey:"mac:WindowWillBecomeKey",WindowWillBecomeMain:"mac:WindowWillBecomeMain",WindowWillBeginSheet:"mac:WindowWillBeginSheet",WindowWillChangeOrderingMode:"mac:WindowWillChangeOrderingMode",WindowWillClose:"mac:WindowWillClose",WindowWillDeminiaturize:"mac:WindowWillDeminiaturize",WindowWillEnterFullScreen:"mac:WindowWillEnterFullScreen",WindowWillEnterVersionBrowser:"mac:WindowWillEnterVersionBrowser",WindowWillExitFullScreen:"mac:WindowWillExitFullScreen",WindowWillExitVersionBrowser:"mac:WindowWillExitVersionBrowser",WindowWillFocus:"mac:WindowWillFocus",WindowWillMiniaturize:"mac:WindowWillMiniaturize",WindowWillMove:"mac:WindowWillMove",WindowWillOrderOffScreen:"mac:WindowWillOrderOffScreen",WindowWillOrderOnScreen:"mac:WindowWillOrderOnScreen",WindowWillResignMain:"mac:WindowWillResignMain",WindowWillResize:"mac:WindowWillResize",WindowWillUnfocus:"mac:WindowWillUnfocus",WindowWillUpdate:"mac:WindowWillUpdate",WindowWillUpdateAlpha:"mac:WindowWillUpdateAlpha",WindowWillUpdateCollectionBehavior:"mac:WindowWillUpdateCollectionBehavior",WindowWillUpdateCollectionProperties:"mac:WindowWillUpdateCollectionProperties",WindowWillUpdateShadow:"mac:WindowWillUpdateShadow",WindowWillUpdateTitle:"mac:WindowWillUpdateTitle",WindowWillUpdateToolbar:"mac:WindowWillUpdateToolbar",WindowWillUpdateVisibility:"mac:WindowWillUpdateVisibility",WindowWillUseStandardFrame:"mac:WindowWillUseStandardFrame",MenuWillOpen:"mac:MenuWillOpen",MenuDidOpen:"mac:MenuDidOpen",MenuDidClose:"mac:MenuDidClose",MenuWillSendAction:"mac:MenuWillSendAction",MenuDidSendAction:"mac:MenuDidSendAction",MenuWillHighlightItem:"mac:MenuWillHighlightItem",MenuDidHighlightItem:"mac:MenuDidHighlightItem",MenuWillDisplayItem:"mac:MenuWillDisplayItem",MenuDidDisplayItem:"mac:MenuDidDisplayItem",MenuWillAddItem:"mac:MenuWillAddItem",MenuDidAddItem:"mac:MenuDidAddItem",MenuWillRemoveItem:"mac:MenuWillRemoveItem",MenuDidRemoveItem:"mac:MenuDidRemoveItem",MenuWillBeginTracking:"mac:MenuWillBeginTracking",MenuDidBeginTracking:"mac:MenuDidBeginTracking",MenuWillEndTracking:"mac:MenuWillEndTracking",MenuDidEndTracking:"mac:MenuDidEndTracking",MenuWillUpdate:"mac:MenuWillUpdate",MenuDidUpdate:"mac:MenuDidUpdate",MenuWillPopUp:"mac:MenuWillPopUp",MenuDidPopUp:"mac:MenuDidPopUp",MenuWillSendActionToItem:"mac:MenuWillSendActionToItem",MenuDidSendActionToItem:"mac:MenuDidSendActionToItem",WebViewDidStartProvisionalNavigation:"mac:WebViewDidStartProvisionalNavigation",WebViewDidReceiveServerRedirectForProvisionalNavigation:"mac:WebViewDidReceiveServerRedirectForProvisionalNavigation",WebViewDidFinishNavigation:"mac:WebViewDidFinishNavigation",WebViewDidCommitNavigation:"mac:WebViewDidCommitNavigation",WindowFileDraggingEntered:"mac:WindowFileDraggingEntered",WindowFileDraggingPerformed:"mac:WindowFileDraggingPerformed",WindowFileDraggingExited:"mac:WindowFileDraggingExited"},Linux:{SystemThemeChanged:"linux:SystemThemeChanged"},Common:{ApplicationStarted:"common:ApplicationStarted",WindowMaximise:"common:WindowMaximise",WindowUnMaximise:"common:WindowUnMaximise",WindowFullscreen:"common:WindowFullscreen",WindowUnFullscreen:"common:WindowUnFullscreen",WindowRestore:"common:WindowRestore",WindowMinimise:"common:WindowMinimise",WindowUnMinimise:"common:WindowUnMinimise",WindowClosing:"common:WindowClosing",WindowZoom:"common:WindowZoom",WindowZoomIn:"common:WindowZoomIn",WindowZoomOut:"common:WindowZoomOut",WindowZoomReset:"common:WindowZoomReset",WindowFocus:"common:WindowFocus",WindowLostFocus:"common:WindowLostFocus",WindowShow:"common:WindowShow",WindowHide:"common:WindowHide",WindowDPIChanged:"common:WindowDPIChanged",WindowFilesDropped:"common:WindowFilesDropped",WindowRuntimeReady:"common:WindowRuntimeReady",ThemeChanged:"common:ThemeChanged"}};var dn=ne;window._wails=window._wails||{};window._wails.dispatchWailsEvent=wn;var ln=l(d.Events,""),cn=0,m=new Map,V=class{constructor(i,n,o){this.eventName=i,this.maxCallbacks=o||-1,this.Callback=t=>(n(t),this.maxCallbacks===-1?!1:(this.maxCallbacks-=1,this.maxCallbacks===0))}},x=class{constructor(i,n=null){this.name=i,this.data=n}};function sn(){}function wn(e){let i=m.get(e.name);if(i){let n=i.filter(o=>{if(o.Callback(e))return!0});n.length>0&&(i=i.filter(o=>!n.includes(o)),i.length===0?m.delete(e.name):m.set(e.name,i))}}function _(e,i,n){let o=m.get(e)||[],t=new V(e,i,n);return o.push(t),m.set(e,o),()=>pn(t)}function mn(e,i){return _(e,i,-1)}function un(e,i){return _(e,i,1)}function pn(e){let i=e.eventName,n=m.get(i).filter(o=>o!==e);n.length===0?m.delete(i):m.set(i,n)}function Wn(e,...i){[e,...i].forEach(o=>m.delete(o))}function gn(){m.clear()}function Z(e){return ln(cn,e)}var G={};w(G,{Error:()=>Un,Info:()=>Rn,OpenFile:()=>yn,Question:()=>A,SaveFile:()=>On,Warning:()=>En});window._wails=window._wails||{};window._wails.dialogErrorCallback=bn;window._wails.dialogResultCallback=vn;var fn=0,hn=1,Dn=2,Cn=3,Sn=4,Mn=5,xn=l(d.Dialog,""),W=new Map;function An(){let e;do e=f();while(W.has(e));return e}function D(e,i={}){let n=An();return i["dialog-id"]=n,new Promise((o,t)=>{W.set(n,{resolve:o,reject:t}),xn(e,i).catch(a=>{t(a),W.delete(n)})})}function vn(e,i,n){let o=W.get(e);o&&(n?o.resolve(JSON.parse(i)):o.resolve(i),W.delete(e))}function bn(e,i){let n=W.get(e);n&&(n.reject(i),W.delete(e))}var Rn=e=>D(fn,e),En=e=>D(hn,e),Un=e=>D(Dn,e),A=e=>D(Cn,e),yn=e=>D(Sn,e),On=e=>D(Mn,e);function oe(e,i=null){let n=new x(e,i);Z(n)}function Pn(){document.querySelectorAll("[wml-event]").forEach(function(i){let n=i.getAttribute("wml-event"),o=i.getAttribute("wml-confirm"),t=i.getAttribute("wml-trigger")||"click",a=function(){if(o){A({Title:"Confirm",Message:o,Detached:!1,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(function(s){s!=="No"&&oe(n)});return}oe(n)};i.removeEventListener(t,a),i.addEventListener(t,a)})}function te(e,i){let n=U(e),o=In(n);o.has(i);try{o.get(i)()}catch{}}function Tn(){document.querySelectorAll("[wml-window]").forEach(function(i){let n=i.getAttribute("wml-window"),o=i.getAttribute("wml-confirm"),t=i.getAttribute("wml-trigger")||"click",a=i.getAttribute("wml-target-window")||"",s=function(){if(o){A({Title:"Confirm",Message:o,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(function(p){p!=="No"&&te(a,n)});return}te(a,n)};i.removeEventListener(t,s),i.addEventListener(t,s)})}function Bn(){document.querySelectorAll("[wml-openurl]").forEach(function(i){let n=i.getAttribute("wml-openurl"),o=i.getAttribute("wml-confirm"),t=i.getAttribute("wml-trigger")||"click",a=function(){if(o){A({Title:"Confirm",Message:o,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(function(s){s!=="No"&&b(n)});return}b(n)};i.removeEventListener(t,a),i.addEventListener(t,a)})}function Y(){Pn(),Tn(),Bn()}function In(e){let i=new Map;for(let n in e)typeof e[n]=="function"&&i.set(n,e[n]);return i}var X={};w(X,{ByID:()=>Vn,ByName:()=>Hn,Call:()=>Nn,Plugin:()=>_n});window._wails=window._wails||{};window._wails.callResultHandler=zn;window._wails.callErrorHandler=kn;var y=0,Fn=l(d.Call,""),v=new Map;function Ln(){let e;do e=f();while(v.has(e));return e}function zn(e,i,n){let o=re(e);o&&o.resolve(n?JSON.parse(i):i)}function kn(e,i){let n=re(e);n&&n.reject(i)}function re(e){let i=v.get(e);return v.delete(e),i}function O(e,i={}){return new Promise((n,o)=>{let t=Ln();i["call-id"]=t,v.set(t,{resolve:n,reject:o}),Fn(e,i).catch(a=>{o(a),v.delete(t)})})}function Nn(e){return O(y,e)}function Hn(e,...i){if(typeof e!="string"||e.split(".").length!==3)throw new Error("CallByName requires a string in the format 'package.struct.method'");let[n,o,t]=e.split(".");return O(y,{packageName:n,structName:o,methodName:t,args:i})}function Vn(e,...i){return O(y,{methodID:e,args:i})}function _n(e,i,...n){return O(y,{packageName:"wails-plugins",structName:e,methodName:i,args:n})}window._wails=window._wails||{};window._wails.invoke=h;window.wails=window.wails||{};window.wails.Application=T;window.wails.Browser=B;window.wails.Call=X;window.wails.Clipboard=I;window.wails.Dialogs=G;window.wails.Events=j;window.wails.Flags=z;window.wails.Screens=N;window.wails.System=L;window.wails.Window=H;window.wails.WML=K;var ae=!1;document.addEventListener("DOMContentLoaded",function(){ae=!0,window._wails.invoke("wails:runtime:ready")});function Zn(e){ae||document.readyState==="complete"?e():document.addEventListener("DOMContentLoaded",e)}Zn(()=>{Y()});})();