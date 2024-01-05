"use strict";(self.webpackChunkwebbteamet_components=self.webpackChunkwebbteamet_components||[]).push([[935],{"./stories/Dropdown.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Styled:()=>Styled,Unstyled:()=>Unstyled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dropdown_stories});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),dropdown=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./stories/styles/dropdown.scss"),options={};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}options.insert="head",options.singleton=!1,injectStylesIntoStyleTag_default()(dropdown.Z,options),dropdown.Z.locals;var Dropdown=function(param){var label=param.label,name=param.name,_useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1];return react.createElement("div",{className:"".concat(name,"-dropdown")},react.createElement("button",{id:"".concat(name,"-button"),className:"".concat(name,"-dropdown__button"),type:"button","aria-expanded":"false","aria-haspopup":"menu","aria-controls":"".concat(name,"-menu"),"data-dropdown":!0,onClick:function(){setIsOpen(!isOpen)}},label),react.createElement("ul",{id:"".concat(name,"-menu"),role:"menu","aria-labelledby":"".concat(name,"-button"),className:"".concat(name,"-dropdown__menu").concat(isOpen?"--open":"")},react.createElement("li",{role:"presentation"},react.createElement("a",{href:"#",role:"menuitem",className:"".concat(name,"-dropdown__item")},"Item 1")),react.createElement("li",{role:"presentation"},react.createElement("a",{href:"#",role:"menuitem",className:"".concat(name,"-dropdown__item")},"Item 2")),react.createElement("li",{role:"presentation"},react.createElement("a",{href:"#",role:"menuitem",className:"".concat(name,"-dropdown__item")},"Item 3"))))};Dropdown.defaultProps={};try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"stories/components/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}let Dropdown_stories={title:"Example/Dropdown",component:Dropdown,parameters:{layout:"centered"}};var Styled={args:{label:"Styled Dropdown",name:"test"}},Unstyled={args:{label:"Unstyled Dropdown"}};Styled.parameters={...Styled.parameters,docs:{...Styled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Styled Dropdown',\n    name: 'test'\n  }\n}",...Styled.parameters?.docs?.source}}},Unstyled.parameters={...Unstyled.parameters,docs:{...Unstyled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Unstyled Dropdown'\n  }\n}",...Unstyled.parameters?.docs?.source}}};let __namedExportsOrder=["Styled","Unstyled"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./stories/styles/dropdown.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".test-dropdown{position:relative;font-family:inherit}.test-dropdown__button{padding-right:2.71875em;background-color:#701131;border-color:#a99b94;color:#efe6dd;align-items:center;-webkit-appearance:none;appearance:none;border:1px solid;border-radius:.375em;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:inherit;font-size:1em;justify-content:center;line-height:1;margin:0;min-height:2.75em;padding:0 1.3125em;text-align:center;text-decoration:none;-webkit-user-select:none;user-select:none;vertical-align:middle}.test-dropdown__menu{display:none !important;background-color:#efe6dd;border:1px solid #a99b94;border-radius:.375em;box-shadow:0 .5em 1em rgba(0,0,0,.15);left:0;max-width:15em;min-width:11.25em;position:fixed;top:100%;z-index:1060;font-family:inherit;font-size:1em;list-style:none;margin:0;padding:.75em 0}.test-dropdown__menu li{display:list-item;text-align:-webkit-match-parent}.test-dropdown__menu--open{display:block}.test-dropdown__item{align-items:center;-webkit-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-radius:0;border-style:none;border-width:0;box-shadow:none;box-sizing:border-box;color:#1c1c1c;cursor:pointer;display:flex;font-family:inherit;font-size:1em;justify-content:flex-start;line-height:1;margin:0;min-height:3.25em;padding:0 1.125em;text-align:left;text-decoration:none;text-shadow:none;width:100%}","",{version:3,sources:["webpack://./stories/styles/dropdown.scss","webpack://./stories/styles/_variables.scss"],names:[],mappings:"AAGA,eACE,iBAAA,CACA,mBAAA,CAGF,uBACE,uBAAA,CACA,wBCTS,CDUT,oBCLO,CDMP,aCLM,CDMN,kBAAA,CACA,uBAAA,CACA,eAAA,CACA,gBAAA,CACA,oBAAA,CACA,qBAAA,CACA,cAAA,CACA,mBAAA,CACA,mBAAA,CACA,aAAA,CACA,sBAAA,CACA,aAAA,CACA,QAAA,CACA,iBAAA,CACA,kBAAA,CACA,iBAAA,CACA,oBAAA,CACA,wBAAA,CACA,gBAAA,CACA,qBAAA,CAGF,qBACE,uBAAA,CACA,wBC9BM,CD+BN,wBAAA,CACA,oBAAA,CACA,qCAAA,CACA,MAAA,CACA,cAAA,CACA,iBAAA,CACA,cAAA,CACA,QAAA,CACA,YAAA,CACA,mBAAA,CACA,aAAA,CACA,eAAA,CACA,QAAA,CACA,eAAA,CAGF,wBACE,iBAAA,CACA,+BAAA,CAGF,2BACE,aAAA,CAGF,qBACE,kBAAA,CACA,uBAAA,CACA,eAAA,CACA,8BAAA,CACA,eAAA,CACA,iBAAA,CACA,cAAA,CACA,eAAA,CACA,qBAAA,CACA,aCrEM,CDsEN,cAAA,CACA,YAAA,CACA,mBAAA,CACA,aAAA,CACA,0BAAA,CACA,aAAA,CACA,QAAA,CACA,iBAAA,CACA,iBAAA,CACA,eAAA,CACA,oBAAA,CACA,gBAAA,CACA,UAAA",sourcesContent:["// Colors\n@import 'variables';\n\n.test-dropdown {\n  position: relative;\n  font-family: inherit;\n}\n\n.test-dropdown__button {\n  padding-right: 2.71875em;\n  background-color: $burgundy;\n  border-color: $greige;\n  color: $beige;\n  align-items: center;\n  -webkit-appearance: none;\n  appearance: none;\n  border: 1px solid;\n  border-radius: calc(0.375em * 1);\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 1em;\n  justify-content: center;\n  line-height: 1;\n  margin: 0;\n  min-height: 2.75em;\n  padding: 0 1.3125em;\n  text-align: center;\n  text-decoration: none;\n  -webkit-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n}\n\n.test-dropdown__menu {\n  display: none !important;\n  background-color: $beige;\n  border: 1px solid $greige;\n  border-radius: calc(0.375em * 1);\n  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.15);\n  left: 0;\n  max-width: 15em;\n  min-width: 11.25em;\n  position: fixed;\n  top: 100%;\n  z-index: 1060;\n  font-family: inherit;\n  font-size: 1em;\n  list-style: none;\n  margin: 0;\n  padding: 0.75em 0;\n}\n\n.test-dropdown__menu li {\n  display: list-item;\n  text-align: -webkit-match-parent;\n}\n\n.test-dropdown__menu--open {\n  display: block;\n}\n\n.test-dropdown__item {\n  align-items: center;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: transparent;\n  border-radius: 0;\n  border-style: none;\n  border-width: 0;\n  box-shadow: none;\n  box-sizing: border-box;\n  color: $black;\n  cursor: pointer;\n  display: flex;\n  font-family: inherit;\n  font-size: 1em;\n  justify-content: flex-start;\n  line-height: 1;\n  margin: 0;\n  min-height: 3.25em;\n  padding: 0 1.125em;\n  text-align: left;\n  text-decoration: none;\n  text-shadow: none;\n  width: 100%;\n}\n","// Consid colors\n$burgundy: #701131;\n$red: #b5223f;\n$light-orange: #f49e88;\n$black: #1c1c1c;\n$purple: #492a34;\n$greige: #a99b94;\n$beige: #efe6dd;\n$orange: #ec6b6a;\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);