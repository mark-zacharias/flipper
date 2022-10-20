(self.webpackChunk=self.webpackChunk||[]).push([[247],{65067:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>K,contentTitle:()=>_,default:()=>$,frontMatter:()=>V,metadata:()=>J,toc:()=>Q});var l,a,r=n(83117),o=n(80102),i=n(67294),s=n(3905),c=n(37446),d=n(56741),m=n(71577),h=n(59652),u=n(54907),p=n(93735),g=n(14670),b=n(26713),y=n(69677),f=n(95507),E=n(89035),j=n(18215),w=n(18872),v=n(87413),k=n(73935),T=["children"],L=function(e){var t,n,l=e.children,a=(0,o.Z)(e,T),s=(0,i.useState)(null),c=s[0],d=s[1],m=null==c||null==(t=c.contentWindow)||null==(n=t.document)?void 0:n.body;return i.createElement("iframe",(0,r.Z)({},a,{ref:d}),m&&(0,k.createPortal)(l,m))},x=d.Z.Title,C=d.Z.Text,z=d.Z.Link,S={square:{background:j.theme.successColor,width:50,height:50,lineHeight:"50px",textAlign:"center"},border:{border:"1px dotted "+j.theme.primaryColor}},Z=i.createElement("div",{style:{background:j.theme.warningColor}},i.createElement("img",{src:"https://fbflipper.com/img/mascot.png",height:500})),I=i.createElement(m.Z,null,"A button"),P=i.createElement("div",{style:Object.assign({},S.square,{width:100})},"A fixed child"),A=i.createElement("div",{style:{background:j.theme.primaryColor,width:150,color:"white"}},"Fixed width box"),B=i.createElement("div",{style:{background:j.theme.primaryColor,height:40,lineHeight:"40px",color:"white"}},"Fixed height box"),D=i.createElement("div",{style:{background:j.theme.warningColor,flex:1}},"A dynamic child (flex: 1)"),U=i.createElement(C,null,"Some text"),H=[{title:"Layout.Container",description:"Layout.Container can be used to organize the UI in regions. It takes care of paddings and borders. Children will be arranged vertically. Use Layout.Horizontal instead for arranging children horizontally. If you need a margin on this component, try to wrap it in other Layout component instead.",props:[["rounded","boolean (false)","Make the corners rounded"],["padv / padh / pad",Object.keys(j.theme.space).join(" | ")+" | number | true","Short-hand to set the horizontal, vertical or both paddings. The keys correspond to the theme space settings. Using `true` picks the default horizontal / vertical padding for inline elements."],["width / height","number","Set the width / height of this container in pixels. Use sparingly."],["bordered","boolean (false)","This container will use a default border on all sides"],["borderTop / borderRight / borderBottom / borderLeft","boolean (false)","Use a standard padding on the top side"],["gap","true / number (0)","Set the spacing between children. If just set, theme.space.small will be used."],["center","boolean (false)","If set, all children will use their own naturally width, and they will be centered horizontally in the Container. If not set, all children will be stretched to the width of the Container."]],demos:{"Basic container with fixed dimensions":i.createElement(j.Layout.Container,{style:S.square}),"Basic container with fixed height":i.createElement(j.Layout.Container,{style:{height:50,background:j.theme.successColor}}),"bordered pad rounded":i.createElement(j.Layout.Container,{bordered:!0,pad:!0,rounded:!0,style:{background:j.theme.backgroundDefault,width:200}},i.createElement("div",{style:S.square},"child")),"Multiple children, gap={24}":i.createElement(j.Layout.Container,{gap:24},I,U,P,D),"Multiple children icmw. pad center gap":i.createElement(j.Layout.Container,{pad:!0,center:!0,gap:!0},I,U,P,D)}},{title:"Layout.Horizontal",description:"Use this component to arrange multiple items horizontally. All vanilla Container props can be used as well.",props:[["center","boolean (false)","If set, all children will use their own height, and they will be centered vertically in the layout. If not set, all children will be stretched to the height of the layout."]],demos:{'Basic usage, gap="large"':i.createElement(j.Layout.Horizontal,{gap:"large"},I,U,P,D),"Using flags: pad center gap={8} (great for toolbars and such)":i.createElement(j.Layout.Horizontal,{pad:!0,center:!0,gap:8},I,U,P,D)}},{title:"Layout.ScrollContainer",description:"Use this component to create an area that can be scrolled. The scrollable area will automatically consume all available space. ScrollContainer accepts all properties that Container accepts as well. Padding will be applied to the child rather than the parent.",props:[["horizontal / vertical","boolean","specifies in which directions the container should scroll. If none is specified the container will scroll in both directions"],["padv / padh / pad","see Container","Padding will be applied to the child"]],demos:{"Basic usage":i.createElement(j.Layout.ScrollContainer,{style:{height:100}},Z),"ScrollContainer + Vertical for vertical scroll only":i.createElement(j.Layout.ScrollContainer,{vertical:!0,style:{height:100,width:100,border:"2px solid "+j.theme.primaryColor}},i.createElement(j.Layout.Container,null,i.createElement(C,{ellipsis:!0},"This text is truncated because it is too long and scroll is vertical only..."),Z))}},{title:"Layout.Top|Left|Right|Bottom",description:"Divides all available space over two children. The (top|left|right|bottom)-most first child will keep it's own dimensions, and positioned (top|left|right|bottom) of the other child. All remaining space will be assigned to the remaining child. If you are using a Layout.Right at the top level of your plugin, consider using DetailSidebar component instead, which will move its children to the right sidebar of Flipper.",props:[["scrollable","boolean (false)","If set, the area of the second child will automatically be made scrollable."],["center","boolean (false)","If set, all children will use their own height, and they will be centered vertically in the layout. If not set, all children will be stretched to the height of the layout."],["gap","true / number (0)","Set the spacing between children. If just set, theme.space.small will be used."],["resizable","true / undefined","If set, this split container will be resizable by the user. It is recommend to set width, maxWidth, minWidth respectively height, maxHeight, minHeight properties as well."],["width / height / minWidth  / minHeight / maxWidth / maxHeight","number / undefined","These dimensions in pixels will be used for clamping if the layout is marked as resizable"]],demos:{"Layout.Top":i.createElement(j.Layout.Top,null,B,D),"Layout.Left":i.createElement(j.Layout.Left,null,A,D),"Layout.Right":i.createElement(j.Layout.Right,null,D,A),"Layout.Bottom":i.createElement(j.Layout.Bottom,null,D,B),"Layout.Top + Layout.ScrollContainer":i.createElement(j.Layout.Container,{style:{height:150}},i.createElement(j.Layout.Top,null,B,i.createElement(j.Layout.ScrollContainer,null,Z))),"Layout.Left + Layout.ScrollContainer":i.createElement(j.Layout.Container,{style:{height:150}},i.createElement(j.Layout.Left,null,A,i.createElement(j.Layout.ScrollContainer,null,Z))),"Layout.Right resizable + Layout.ScrollContainer":i.createElement(j.Layout.Container,{style:{height:150}},i.createElement(j.Layout.Right,{resizable:!0},i.createElement(j.Layout.ScrollContainer,null,Z),D)),"Layout.Bottom resizable + Layout.ScrollContainer":i.createElement(j.Layout.Container,{style:{height:150}},i.createElement(j.Layout.Bottom,{resizable:!0,height:50,minHeight:20},i.createElement(j.Layout.ScrollContainer,null,Z),D))}},{title:"Panel",description:"A collapsible UI region. The collapsed state of the pane will automatically be persisted so that the collapsed state is restored the next time user visits the plugin again. Note that the children of a Panel should have some size, either a fixed or a natural size. Elements that grow to their parent size will become invisible.",props:[["title","string","Title of the pane"],["collapsible","boolean (true)","If set to false it won't be possible to collapse the panel"],["collapsed","boolean (false)","The initial collapsed state of the panel."],["pad / gap","boolean / number (false)","See the pad property of Layout.Container, determines whether the pane contents will have some padding and space between the items. By default no padding / gap is applied."]],demos:{"Two panels in a fixed height container":i.createElement(j.Layout.Container,null,i.createElement(j.Panel,{title:"Panel 1"},"Some content"),i.createElement(j.Panel,{title:"Panel 2 (collapsed)",collapsed:!0},B),i.createElement(j.Panel,{title:"Panel 3 (not collapsible, pad, gap)",collapsible:!1,pad:!0,gap:!0},B,B))}},{title:"Tabs / Tab",description:"Tabs represents a tab control and all it's children should be Tab components. By default the Tab control uses all available space, but set grow=false to only use the minimally required space",props:[["grow (Tabs)","boolean (true)","If true, the tab control will grow all tabs to the maximum available vertical space. If false, only the minimal required (natural) vertical space will be used"],["pad / gap (Tab)","boolean / number (false)","See the pad property of Layout.Container, determines whether the pane contents will have some padding and space between the items. By default no padding / gap is applied."],["other props","","This component wraps Tabs from ant design, see https://ant.design/components/tabs/ for more details"]],demos:{"Two tabs":i.createElement(j.Layout.Container,{height:200},i.createElement(j.Tabs,null,i.createElement(j.Tab,{tab:"Pane 1"},D),i.createElement(j.Tab,{tab:"Pane 2 pad gap",pad:!0,gap:!0},B,B))),"Two tabs (no grow)":i.createElement(j.Layout.Container,{grow:!1},i.createElement(j.Tabs,null,i.createElement(j.Tab,{tab:"Pane 1"},D),i.createElement(j.Tab,{tab:"Pane 2 pad gap",pad:!0,gap:!0},B,B)))}},{title:"NUX",description:"A component to provide a New-User-eXperience: Highlight new features to first time users. For tooltips that should stay available, use ToolTip from ANT design",props:[["title","string / React element","The tooltip contents"],["placement",i.createElement(i.Fragment,null,"See"," ",i.createElement(z,{href:"https://ant.design/components/tooltip/#components-tooltip-demo-placement"},"docs")),"(optional) on which side to place the tooltip"]],demos:{"NUX example":i.createElement(j.NUX,{title:"This button does something cool",placement:"right"},i.createElement(m.Z,null,"Hello world"))}},{title:"Tracked",description:"A component that tracks component interactions. For Facebook internal builds, global stats for these interactions will be tracked. Wrap this component around another element to track its events",props:[["events",'string | string[] (default: "onClick")',"The event(s) of the child component that should be tracked"],["action","string (optional)","Describes the element the user interacted with. Will by default be derived from the title, key or contents of the element"]],demos:{"Basic example":i.createElement(j.Tracked,null,i.createElement(m.Z,{onClick:function(){}},"Test"))}},{title:"TrackingScope",description:"Describes more precisely the place in the UI for all underlying Tracked elements. Multiple Tracking scopes are automatically nested. Use the `withTrackingScope` HoC to automatically wrap a component definition in a tracking scope",props:[["scope","string",'The name of the scope. For example "Login Dialog"']],demos:{"Basic example":i.createElement(j.TrackingScope,{scope:"tracking scope demo"},i.createElement(j.Tracked,null,i.createElement(m.Z,{onClick:function(){}},"Test")))}}];function F(e){var t=e.title,n=e.demos,l=e.description,a=e.props;return i.createElement(h.Z,{title:t,size:"small",type:"inner"},i.createElement(j.TrackingScope,{scope:t},i.createElement(j.Layout.Container,{gap:"small"},i.createElement(C,{type:"secondary"},l),i.createElement(u.Z,{ghost:!0},i.createElement(u.Z.Panel,{header:"Examples",key:"demos"},i.createElement(j.Layout.Container,{gap:"large"},Object.entries(n).map((function(e){var t=e[0],n=e[1];return i.createElement(j.Tabs,{type:"line",key:t},i.createElement(j.Tab,{tab:t,key:"1"},i.createElement("div",{style:{background:j.theme.backgroundWash,width:"100%"}},n)),i.createElement(j.Tab,{tab:i.createElement(E.Z,null),key:"2"},i.createElement("div",{style:{background:j.theme.backgroundWash,width:"100%",padding:j.theme.space.medium}},i.createElement("pre",null,(0,v.default)(n)))))})))),i.createElement(u.Z.Panel,{header:"Props",key:"props"},i.createElement(p.Z,{size:"small",pagination:!1,dataSource:a.map((function(e){return Object.assign(e,{key:e[0]})})),columns:[{title:"Property",dataIndex:0,width:100},{title:"Type and default",dataIndex:1,width:200},{title:"Description",dataIndex:2}]}))))))}var N=function(){return i.createElement(j.Layout.Container,{gap:j.theme.space.large},H.map((function(e){return i.createElement(F,(0,r.Z)({key:e.title},e))})))};function M(){var e=(0,i.useState)(null),t=e[0],n=e[1];return(0,i.useLayoutEffect)((function(){if(t){var e=window.parent.document.getElementById("styleguide");e.style.height=t.scrollHeight+"px";var n=new MutationObserver((function(){e.style.height=t.scrollHeight+"px"}));return n.observe(t,{subtree:!0,childList:!0,attributes:!0,characterData:!0}),function(){return n.disconnect()}}}),[t]),i.createElement(j.Layout.Container,{className:R,gap:"large",ref:n},i.createElement(h.Z,{title:"Flipper Design System",bordered:!1},i.createElement("p",null,"Welcome to the Flipper Design System. The Flipper design system is based on"," ",i.createElement(z,{href:"https://ant.design/components/overview/"},"Ant Design"),". Any component found in the ANT documentation can be used. This page demonstrates the usage of:"),i.createElement("ul",null,i.createElement("li",null,"Colors"),i.createElement("li",null,"Typography"),i.createElement("li",null,"Theme Variables"),i.createElement("li",null,"Layout components")),i.createElement("p",null,"The following components from Ant should ",i.createElement("em",null,"not")," be used:"),i.createElement("ul",null,i.createElement("li",null,i.createElement("code",null,"Layout"),": use Flipper's ",i.createElement("code",null,"Layout.*")," instead.")),i.createElement("p",null,"Sandy guidelines"),i.createElement("ul",null,i.createElement("li",null,"Avoid using `margin` properties, use padding on the container indeed, or ",i.createElement("code",null,"gap")," in combination with"," ",i.createElement("code",null,"Layout.Horizontal|Vertical")),i.createElement("li",null,"Avoid using ",i.createElement("code",null,"width / height: 100%"),", use"," ",i.createElement("code",null,"Layout.Container")," instead."),i.createElement("li",null,"In general, components that have a ",i.createElement("code",null,"grow")," property will grow to use the full height of their ",i.createElement("em",null,"parents")," if"," ",i.createElement("code",null,"true"),". In contrast, if grow is set to ",i.createElement("code",null,"false")," ","components will use their natural size, based on their"," ",i.createElement("em",null,"children"),"."),i.createElement("li",null,"The other important property here is ",i.createElement("em",null,"scrollable"),". If an element supports this property, setting it will imply"," ",i.createElement("code",null,"grow"),", and the element will show a scrollbar if needed. Setting ",i.createElement("code",null,"scrollabe")," to ",i.createElement("code",null,"false")," causes the element to always use its natural size, growing or shrinking based on the contents rather than the parent."))),i.createElement(h.Z,{title:"Colors",bordered:!1},i.createElement(g.Z,{message:"The following colors are available on the <code>theme</code> object. Please stick to this color palette, as these colors will be translated to dark mode correctly."}),i.createElement(O,{name:"primaryColor"}),i.createElement(O,{name:"successColor"}),i.createElement(O,{name:"errorColor"}),i.createElement(O,{name:"warningColor"}),i.createElement(O,{name:"textColorPrimary"}),i.createElement(O,{name:"textColorSecondary"}),i.createElement(O,{name:"textColorPlaceholder"}),i.createElement(O,{name:"textColorActive"}),i.createElement(O,{name:"disabledColor"}),i.createElement(O,{name:"backgroundDefault"}),i.createElement(O,{name:"backgroundWash"}),i.createElement(O,{name:"buttonDefaultBackground"}),i.createElement(O,{name:"backgroundTransparentHover"}),i.createElement(O,{name:"dividerColor"})),i.createElement(h.Z,{title:"Typography",bordered:!1},i.createElement(b.Z,{direction:"vertical"},i.createElement(g.Z,{message:i.createElement(i.Fragment,null,"Common Ant components, with modifiers applied. The"," ",i.createElement("code",null,"Title"),", ",i.createElement("code",null,"Text")," and ",i.createElement("code",null,"Link")," ","components can be found by importing the ",i.createElement("code",null,"Typography")," ","namespace from Ant."),type:"info"}),i.createElement(x,null,"Title"),i.createElement(x,{level:2},"Title level=2"),i.createElement(x,{level:3},"Title level=3"),i.createElement(x,{level:4},"Title level=4"),i.createElement(C,null,"Text"),i.createElement(C,{type:"secondary"},"Text - type=secondary"),i.createElement(C,{type:"success"},"Text - type=success"),i.createElement(C,{type:"warning"},"Text - type=warning"),i.createElement(C,{type:"danger"},"Text - danger"),i.createElement(C,{disabled:!0},"Text - disbled "),i.createElement(C,{strong:!0},"Text - strong"),i.createElement(C,{code:!0},"Text - code"),i.createElement(z,{href:"https://fbflipper.com/"},"Link"),i.createElement(z,{type:"secondary",href:"https://fbflipper.com/"},"Link - type=secondary"),i.createElement(m.Z,null,"Button"),i.createElement(m.Z,{size:"small"},"Button - size=small"),i.createElement(y.Z,{placeholder:"Input"}))),i.createElement(h.Z,{title:"Theme variables",bordered:!1},i.createElement(g.Z,{message:i.createElement(i.Fragment,null,"The following theme veriables are exposed from the Flipper"," ",i.createElement("code",null,"theme")," object. See the colors section above for a preview of the colors.")}),i.createElement("pre",null,JSON.stringify(j.theme,null,2))),i.createElement(h.Z,{title:"Layout components",bordered:!1},i.createElement(N,null)))}function W(){return i.createElement(L,{className:q,id:"styleguide"},i.createElement("link",{rel:"stylesheet",href:"/css/style-guide.css"}),i.createElement("style",null,X),i.createElement(M,null))}function O(e){var t=e.name;return i.createElement(f.ZP.Item,null,i.createElement(f.ZP.Item.Meta,{avatar:i.createElement("div",{style:{background:j.theme[t],width:24,height:24,borderRadius:j.theme.borderRadius}}),title:"theme."+t}))}var R=(0,w.css)(l||(l=(0,c.Z)(["\n  ol,\n  ul {\n    list-style: revert;\n    margin-left: ","px;\n  }\n  .ant-alert {\n    margin-bottom: ","px;\n  }\n  .ant-card {\n    background: transparent;\n  }\n"])),j.theme.space.huge,j.theme.space.huge),q=(0,w.css)(a||(a=(0,c.Z)(["\n  width: 100%;\n"]))),X="\n  body {\n    overflow: hidden;\n  }\n",G=["components"],V={id:"style-guide",title:"Style Guide"},_=void 0,J={unversionedId:"extending/style-guide",id:"extending/style-guide",title:"Style Guide",description:"",source:"@site/../docs/extending/style-guide.mdx",sourceDirName:"extending",slug:"/extending/style-guide",permalink:"/docs/extending/style-guide",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/style-guide.mdx",tags:[],version:"current",frontMatter:{id:"style-guide",title:"Style Guide"},sidebar:"main",previous:{title:"Styling Components",permalink:"/docs/extending/styling-components"},next:{title:"Using Deeplinks",permalink:"/docs/extending/deeplinks"}},K={},Q=[],Y={toc:Q};function $(e){var t=e.components,n=(0,o.Z)(e,G);return(0,s.mdx)("wrapper",(0,r.Z)({},Y,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)(W,{mdxType:"StyleGuide"}))}$.isMDXComponent=!0},55066:(e,t,n)=>{var l={"./af":57142,"./af.js":57142,"./ar":44386,"./ar-dz":29037,"./ar-dz.js":29037,"./ar-kw":90124,"./ar-kw.js":90124,"./ar-ly":49275,"./ar-ly.js":49275,"./ar-ma":81054,"./ar-ma.js":81054,"./ar-sa":39912,"./ar-sa.js":39912,"./ar-tn":29402,"./ar-tn.js":29402,"./ar.js":44386,"./az":10544,"./az.js":10544,"./be":29642,"./be.js":29642,"./bg":58857,"./bg.js":58857,"./bm":55935,"./bm.js":55935,"./bn":72039,"./bn-bd":98425,"./bn-bd.js":98425,"./bn.js":72039,"./bo":41594,"./bo.js":41594,"./br":43384,"./br.js":43384,"./bs":13502,"./bs.js":13502,"./ca":66277,"./ca.js":66277,"./cs":6121,"./cs.js":6121,"./cv":40964,"./cv.js":40964,"./cy":18079,"./cy.js":18079,"./da":57303,"./da.js":57303,"./de":22384,"./de-at":92754,"./de-at.js":92754,"./de-ch":81437,"./de-ch.js":81437,"./de.js":22384,"./dv":15430,"./dv.js":15430,"./el":2134,"./el.js":2134,"./en-au":76629,"./en-au.js":76629,"./en-ca":4024,"./en-ca.js":4024,"./en-gb":86407,"./en-gb.js":86407,"./en-ie":82721,"./en-ie.js":82721,"./en-il":95848,"./en-il.js":95848,"./en-in":34775,"./en-in.js":34775,"./en-nz":63942,"./en-nz.js":63942,"./en-sg":44222,"./en-sg.js":44222,"./eo":60343,"./eo.js":60343,"./es":99781,"./es-do":70047,"./es-do.js":70047,"./es-mx":34253,"./es-mx.js":34253,"./es-us":91342,"./es-us.js":91342,"./es.js":99781,"./et":62723,"./et.js":62723,"./eu":69464,"./eu.js":69464,"./fa":28167,"./fa.js":28167,"./fi":81201,"./fi.js":81201,"./fil":47418,"./fil.js":47418,"./fo":85334,"./fo.js":85334,"./fr":23510,"./fr-ca":56335,"./fr-ca.js":56335,"./fr-ch":4071,"./fr-ch.js":4071,"./fr.js":23510,"./fy":67915,"./fy.js":67915,"./ga":28101,"./ga.js":28101,"./gd":54775,"./gd.js":54775,"./gl":93012,"./gl.js":93012,"./gom-deva":49780,"./gom-deva.js":49780,"./gom-latn":18783,"./gom-latn.js":18783,"./gu":9402,"./gu.js":9402,"./he":93121,"./he.js":93121,"./hi":77446,"./hi.js":77446,"./hr":50293,"./hr.js":50293,"./hu":20377,"./hu.js":20377,"./hy-am":1822,"./hy-am.js":1822,"./id":92328,"./id.js":92328,"./is":95361,"./is.js":95361,"./it":92817,"./it-ch":82469,"./it-ch.js":82469,"./it.js":92817,"./ja":60512,"./ja.js":60512,"./jv":21237,"./jv.js":21237,"./ka":96173,"./ka.js":96173,"./kk":17496,"./kk.js":17496,"./km":65583,"./km.js":65583,"./kn":28614,"./kn.js":28614,"./ko":55917,"./ko.js":55917,"./ku":11685,"./ku.js":11685,"./ky":14689,"./ky.js":14689,"./lb":89959,"./lb.js":89959,"./lo":7809,"./lo.js":7809,"./lt":7006,"./lt.js":7006,"./lv":75238,"./lv.js":75238,"./me":1065,"./me.js":1065,"./mi":17643,"./mi.js":17643,"./mk":75536,"./mk.js":75536,"./ml":19993,"./ml.js":19993,"./mn":27797,"./mn.js":27797,"./mr":57039,"./mr.js":57039,"./ms":85452,"./ms-my":45748,"./ms-my.js":45748,"./ms.js":85452,"./mt":41494,"./mt.js":41494,"./my":22055,"./my.js":22055,"./nb":11538,"./nb.js":11538,"./ne":50642,"./ne.js":50642,"./nl":54353,"./nl-be":68607,"./nl-be.js":68607,"./nl.js":54353,"./nn":42849,"./nn.js":42849,"./oc-lnc":39682,"./oc-lnc.js":39682,"./pa-in":40489,"./pa-in.js":40489,"./pl":84626,"./pl.js":84626,"./pt":68826,"./pt-br":1004,"./pt-br.js":1004,"./pt.js":68826,"./ro":48289,"./ro.js":48289,"./ru":79260,"./ru.js":79260,"./sd":66680,"./sd.js":66680,"./se":69364,"./se.js":69364,"./si":54511,"./si.js":54511,"./sk":55752,"./sk.js":55752,"./sl":43239,"./sl.js":43239,"./sq":64262,"./sq.js":64262,"./sr":31625,"./sr-cyrl":49808,"./sr-cyrl.js":49808,"./sr.js":31625,"./ss":20026,"./ss.js":20026,"./sv":33491,"./sv.js":33491,"./sw":47210,"./sw.js":47210,"./ta":61975,"./ta.js":61975,"./te":24519,"./te.js":24519,"./tet":40557,"./tet.js":40557,"./tg":4363,"./tg.js":4363,"./th":77113,"./th.js":77113,"./tk":45169,"./tk.js":45169,"./tl-ph":76285,"./tl-ph.js":76285,"./tlh":11560,"./tlh.js":11560,"./tr":70023,"./tr.js":70023,"./tzl":35556,"./tzl.js":35556,"./tzm":65154,"./tzm-latn":15716,"./tzm-latn.js":15716,"./tzm.js":65154,"./ug-cn":53573,"./ug-cn.js":53573,"./uk":4045,"./uk.js":4045,"./ur":13076,"./ur.js":13076,"./uz":55658,"./uz-latn":23345,"./uz-latn.js":23345,"./uz.js":55658,"./vi":71991,"./vi.js":71991,"./x-pseudo":96307,"./x-pseudo.js":96307,"./yo":19712,"./yo.js":19712,"./zh-cn":21544,"./zh-cn.js":21544,"./zh-hk":64309,"./zh-hk.js":64309,"./zh-mo":91019,"./zh-mo.js":91019,"./zh-tw":7351,"./zh-tw.js":7351};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(l,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return l[e]}a.keys=function(){return Object.keys(l)},a.resolve=r,e.exports=a,a.id=55066}}]);