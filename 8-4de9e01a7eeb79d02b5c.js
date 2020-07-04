(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./.linaria-cache/src/components/contribute/Contribute.linaria.css":function(e,a,t){},"./src/components/contribute/Contribute.tsx":function(e,a,t){"use strict";t.r(a),function(e){var s,l=t("./node_modules/formik/dist/formik.esm.js"),r=t("./node_modules/linaria/lib/index.js"),i=t("./node_modules/linaria/react.js"),c=t("./node_modules/ramda/es/find.js"),n=t("./node_modules/ramda/es/pathEq.js"),o=t("./node_modules/ramda/es/uniq.js"),m=t("./node_modules/react/index.js"),d=t.n(m),u=t("./node_modules/react-syntax-highlighter/dist/esm/prism-light.js"),g=t("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/yaml.js"),b=t("./node_modules/react-syntax-highlighter/dist/esm/styles/prism/base16-ateliersulphurpool.light.js"),f=t("./node_modules/js-yaml/index.js"),v=t.n(f),p=t("./node_modules/react-octicon/lib/index.js"),E=t.n(p),N=t("./src/lib/stickers.ts");(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);var k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const h=Object(i.styled)("div")({name:"Contribute",class:"c1b6b6t9"}),w=/^https:\/\/signal.art\/addstickers\/#pack_id=([\dA-Za-z]+)&pack_key=([\dA-Za-z]+)$/g,y=/^(?:([\w ]+))+(?:, ?([\w ]+))*$/g,x={signalArtUrl:"",source:"",tags:"",isNsfw:void 0,isOriginal:void 0},O={signalArtUrl:async e=>{if(!e)return"This field is required.";const a=new RegExp(w).exec(e);if(!a)return"Invalid signal.art URL.";const[,t,s]=a;if(c.a(n.a(["meta","id"],t),await Object(N.e)()))return"A sticker pack with that ID already exists in the directory.";try{await Object(N.d)(t,s)}catch{return"Invalid sticker pack. Please check the pack ID and key."}},source:e=>{if(e&&e.length>320)return"This field must be no longer than 320 characters."},tags:e=>{if(""!==e&&!new RegExp(y).test(e))return"Invalid value. Tags must be a list of comma-delimited strings."},isNsfw:e=>{if(void 0===e)return"This field is required."},isOriginal:e=>{if(void 0===e)return"This field is required."}};u.a.registerLanguage("yaml",g.a);const j=()=>{const[e,a]=Object(m.useState)(!1),[t,s]=Object(m.useState)(""),[i,c]=Object(m.useState)(""),n=Object(m.useRef)(null),g=()=>{a(!0),s(""),c("")};return d.a.createElement(h,{className:"my-4 p-lg-3 px-lg-4"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12"},d.a.createElement("p",{className:"mt-lg-3 mb-4"},"Getting your sticker pack listed in the Signal Stickers directory is easy! First, paste the ",d.a.createElement("code",null,"signal.art")," link for your sticker pack, including the ",d.a.createElement("code",null,"pack_id")," and ",d.a.createElement("code",null,"pack_key")," values, into the form below. Then, answer a few questions about your sticker pack and add optional metadata."))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},d.a.createElement(l.d,{initialValues:x,onSubmit:e=>{const a=new RegExp(w).exec(e.signalArtUrl);if(!a)throw new Error("Unable to extract pack ID and pack key from signal.art URL.");const[,t,l]=a,r=o.a(e.tags.split(",").map(e=>e.trim()).filter(e=>e.length));return s(v.a.safeDump({[t]:{key:l,source:e.source,tags:r,nsfw:"true"===e.isNsfw,original:"true"===e.isOriginal}},{indent:2}).trim()),c(`https://signalstickers.com/pack/${t}?key=${l}`),n.current&&n.current.scrollIntoView({behavior:"smooth"}),!0},validateOnChange:e,validateOnBlur:e},({values:e,errors:a,isValidating:t,isSubmitting:s})=>d.a.createElement(l.c,{noValidate:!0},d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("label",{className:Object(r.cx)("col-12",a.signalArtUrl&&"text-danger"),htmlFor:"signal-art-url"},"Signal Art URL:",d.a.createElement(l.b,{type:"text",id:"signal-art-url",name:"signalArtUrl",validate:O.signalArtUrl,className:Object(r.cx)("form-control",a.signalArtUrl&&"is-invalid"),placeholder:"https://signal.art/addstickers/#pack_id=<your pack id>&pack_key=<your pack key>"}),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"signalArtUrl"})," ")))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("label",{className:Object(r.cx)("col-12",a.source&&"text-danger"),htmlFor:"source"},"(Optional) Source:",d.a.createElement(l.b,{type:"text",id:"source",name:"source",validate:O.source,className:Object(r.cx)("form-control",a.source&&"is-invalid")}),d.a.createElement("small",{className:"form-text text-muted"},"Original author, website, company, etc."),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"source"})," ")))),d.a.createElement("div",{className:"form-group mb-4"},d.a.createElement("div",{className:"form-row"},d.a.createElement("label",{className:Object(r.cx)("col-12",a.tags&&"text-danger"),htmlFor:"tags"},"(Optional) Tags:",d.a.createElement(l.b,{type:"text",id:"tags",name:"tags",validate:O.tags,className:Object(r.cx)("form-control",a.tags&&"is-invalid")}),d.a.createElement("small",{className:"form-text text-muted"},"Comma-separated list of words."),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"tags"})," ")))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("legend",{className:Object(r.cx)("col-12","mb-2",a.isNsfw&&"text-danger")},"Is your sticker pack ",d.a.createElement("a",{href:"https://www.urbandictionary.com/define.php?term=NSFW",target:"_blank",rel:"noreferrer"},"NSFW"),"?")),d.a.createElement("div",{className:"form-row"},d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-nsfw-true",name:"isNsfw",validate:O.isNsfw,className:Object(r.cx)("custom-control-input",a.isNsfw&&"is-invalid"),value:"true",checked:"true"===e.isNsfw}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-nsfw-true"},"Yes"))),d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-nsfw-false",name:"isNsfw",validate:O.isNsfw,className:Object(r.cx)("custom-control-input",a.isNsfw&&"is-invalid"),value:"false",checked:"false"===e.isNsfw}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-nsfw-false"},"No")),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"isNsfw"})," ")))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("legend",{className:Object(r.cx)("col-12","mb-2",a.isOriginal&&"text-danger")},"Is your pack original? Did the author of the pack draw it exclusively for Signal, from original artworks?")),d.a.createElement("div",{className:"form-row"},d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-original-true",name:"isOriginal",validate:O.isOriginal,className:Object(r.cx)("custom-control-input",a.isOriginal&&"is-invalid"),value:"true",checked:"true"===e.isOriginal}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-original-true"},"Yes"))),d.a.createElement("div",{className:"col-12 mb-1"},d.a.createElement("div",{className:"custom-control custom-radio"},d.a.createElement(l.b,{type:"radio",id:"is-original-false",name:"isOriginal",validate:O.isOriginal,className:Object(r.cx)("custom-control-input",a.isOriginal&&"is-invalid"),value:"false",checked:"false"===e.isOriginal}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-original-false"},"No")),d.a.createElement("div",{className:"invalid-feedback"},d.a.createElement(l.a,{name:"isOriginal"})," ")))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-row"},d.a.createElement("div",{className:"col-12"},d.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:s||t,onClick:g},"Generate YML")))))))),t?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12"},d.a.createElement("hr",null),d.a.createElement("p",{className:"mt-4 mb-4"},"Great! Below is the YML blob you will need to add at the end of ",d.a.createElement("code",null,"stickers.yml")," in the ",d.a.createElement("a",{href:"https://github.com/signalstickers/signalstickers/edit/master/stickers.yml",target:"_blank",rel:"noreferrer"},"Signal Stickers repository"),"."))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},d.a.createElement("div",{className:"card"},d.a.createElement(u.a,{language:"yaml",style:b.a,customStyle:{margin:"0"}},t)))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12"},d.a.createElement("p",{className:"mt-4 mb-4"},"Please also include this link in your Pull Request description, as it allows us to review your pack easily!"))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},d.a.createElement("div",{className:"card mb-3"},d.a.createElement(u.a,{language:"yaml",style:b.a,customStyle:{margin:"0"}},i)))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},d.a.createElement("a",{ref:n,className:"btn btn-success btn-block",href:"https://github.com/signalstickers/signalstickers/edit/master/stickers.yml",target:"_blank",rel:"noreferrer",title:"Open a Pull Request"},d.a.createElement(E.a,{name:"link-external"})," Edit the file and open a Pull Request")))):null)};k(j,"useState{[hasBeenSubmitted, setHasBeenSubmitted](false)}\nuseState{[ymlBlob, setYmlBlob]('')}\nuseState{[previewUrl, setPreviewUrl]('')}\nuseRef{openPrButton}");const _=j;var S,A;a.default=_,t("./.linaria-cache/src/components/contribute/Contribute.linaria.css"),(S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(S.register(h,"Contribute","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),S.register(w,"SIGNAL_ART_URL_PATTERN","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),S.register(y,"TAGS_PATTERN","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),S.register(x,"initialValues","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),S.register(O,"validators","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),S.register(j,"ContributeComponent","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),S.register(_,"default","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx")),(A="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&A(e)}.call(this,t("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);
//# sourceMappingURL=8-4de9e01a7eeb79d02b5c.js.map