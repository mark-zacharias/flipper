(self.webpackChunk=self.webpackChunk||[]).push([[1339],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3680:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,metadata:()=>u,toc:()=>c,default:()=>d});var r=n(4034),o=n(9973),a=(n(7294),n(3905)),i=n(1395),l=n(8215),p={},u={type:"mdx",permalink:"/docs/plugins/network/setup",source:"@site/src/embedded-pages/docs/plugins/network/setup.mdx"},c=[{value:"Android",id:"android",children:[{value:"OkHttp Integration",id:"okhttp-integration",children:[]},{value:"Protobuf / Retrofit Integration",id:"protobuf--retrofit-integration",children:[]}]},{value:"iOS",id:"ios",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To use the network plugin, you need to add the plugin to your Flipper client instance."),(0,a.kt)("h2",{id:"android"},"Android"),(0,a.kt)("p",null,"The network plugin is shipped as a separate Maven artifact:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-network-plugin:0.95.0'\n}\n")),(0,a.kt)("p",null,"Once added to your dependencies, you can instantiate the plugin and add it to\nthe client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;\n\nNetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();\nnew NetworkingModule.CustomClientBuilder() {\n    @Override\n    public void apply(OkHttpClient.Builder builder) {\n        builder.addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin));\n    }\n});\nclient.addPlugin(networkFlipperPlugin);\n")),(0,a.kt)("h3",{id:"okhttp-integration"},"OkHttp Integration"),(0,a.kt)("p",null,"If you are using the popular OkHttp library, you can use the Interceptors system to automatically hook into your existing stack."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;\n\nnew OkHttpClient.Builder()\n    .addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin))\n    .build();\n")),(0,a.kt)("p",null,"As interceptors can modify the request and response, add the Flipper interceptor after all others to get an accurate view of the network traffic."),(0,a.kt)("h3",{id:"protobuf--retrofit-integration"},"Protobuf / Retrofit Integration"),(0,a.kt)("p",null,"If you are using Retrofit with Protobuf request or response types, you can setup automatic decoding so that the network inspector can display a human readable payload. First you must add the separate dependency:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-retrofit2-protobuf-plugin:0.91.2'\n}\n")),(0,a.kt)("p",null,"Then call ",(0,a.kt)("inlineCode",{parentName:"p"},"SendProtobufToFlipperFromRetrofit")," for each service class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.facebook.flipper.plugins.retrofit2protobuf.SendProtobufToFlipperFromRetrofit\n\nSendProtobufToFlipperFromRetrofit("https://baseurl.com/", MyApiService::class.java)\n')),(0,a.kt)("h2",{id:"ios"},"iOS"),(0,a.kt)("p",null,"To enable network inspection, add the following pod to your Podfile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version\n")),(0,a.kt)("p",null,"Initialise the plugin in the following way:"),(0,a.kt)(i.Z,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n\n[[FlipperClient sharedClient] addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n\n"))),(0,a.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nclient?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n\n")))))}d.isMDXComponent=!0},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7294);const o=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7294),o=n(944),a=n(6010);const i="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,u=39;const c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,s=e.values,d=e.groupId,f=e.className,m=(0,o.Z)(),k=m.tabGroupChoices,g=m.setTabGroupChoices,b=(0,r.useState)(c),v=b[0],y=b[1],h=r.Children.toArray(e.children),w=[];if(null!=d){var O=k[d];null!=O&&O!==v&&s.some((function(e){return e.value===O}))&&y(O)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),r=s[n].value;y(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,o,a,i,p,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,p=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=p&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},P=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case p:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},f)},s.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:P,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(7294),o=n(9443);const a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6010:(e,t,n)=>{"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})}}]);