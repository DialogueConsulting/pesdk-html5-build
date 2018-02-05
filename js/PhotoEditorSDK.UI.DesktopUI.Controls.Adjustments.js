!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("photoeditorsdk/PhotoEditorSDK.UI.DesktopUI.Core"),require("photoeditorsdk")):"function"==typeof define&&define.amd?define([["PhotoEditorSDK","UI","DesktopUI"],"photoeditorsdk"],e):"object"==typeof exports?exports._unexposedPESDK=e(require("photoeditorsdk/PhotoEditorSDK.UI.DesktopUI.Core"),require("photoeditorsdk")):t._unexposedPESDK=e(t.PhotoEditorSDK.UI.DesktopUI,t.PhotoEditorSDK)}("undefined"!=typeof self?self:this,function(t,e){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=24)}({0:function(e,o){e.exports=t},1:function(t,o){t.exports=e},24:function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=o(0),a=o.n(s),p=o(25),l=function(t){function e(){return n(this,e),r(this,t.apply(this,arguments))}return i(e,t),e.prototype._onEnter=function(){var t=this.context.editor,e=t.operations.exists("adjustments"),o=t.operations.getOrCreate("adjustments"),n=o.serializeOptions();this.sharedState.set({operation:o,operationExistedBeforeEntering:e,operationExistedBeforeLastHistoryItem:e,initialOptions:n})},e.prototype._onLeave=function(){var t=this.context.editor,e=this.sharedState.get("operation"),o=this.sharedState.get("operationExistedBeforeEntering"),n=this.sharedState.get("initialOptions");e.optionsEqual(n)||this.addHistoryItem(t.history.createItem({type:"global",operation:e.constructor.identifier,options:n,existent:o}));var r=e.getDefaultOptions();e.optionsEqual(r)&&t.operations.remove(e)},e.prototype._onOperationRemoved=function(t){t===this.sharedState.get("operation")&&this._onEnter()},e.isEnabled=function(t){return t.isToolAllowed("adjustment")&&t.isToolEnabled("adjustments")},e}(s.BaseControls);l.clickAtPosition=s.BaseControls.clickAtPosition,l.getPreloadAssets=s.BaseControls.getPreloadAssets,l.identifier="adjustments",l.controlsComponent=p.a,l.canvasControlsComponent=s.BaseControls.canvasControlsComponent,l.iconPath="editor/controls/adjustments/icon.png",l.activeIconPath="editor/controls/adjustments/icon-active.png",l.requiredOperations=["adjustments"],l.defaultOptions={availableAdjustments:null},e.default=l,a.a.Controls.AdjustmentsControls=l},25:function(t,e,o){"use strict";function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=o(0),p=(o.n(a),o(26)),l=a.GroupedControlsStyles.ControlGroupList,u=[{identifier:"basics",items:["brightness","saturation","contrast","gamma"]},{identifier:"refinements",items:["clarity","exposure","shadows","highlights"]}],c=function(t){function e(){r(this,e);for(var o=arguments.length,s=Array(o),p=0;p<o;p++)s[p]=arguments[p];var l=i(this,t.call.apply(t,[this].concat(s)));return l._bindAll("_onOperationUpdated","_onTabSwitch","_onResetDefaultClick"),l._events=n({},a.Constants.EVENTS.OPERATION_UPDATED,l._onOperationUpdated),l._lastLocalHistoryItem=null,l}return s(e,t),e.prototype._isAdjustmentAvailable=function(t){var e=this.props.options.availableAdjustments;return null===e||-1!==e.indexOf(t)},e.prototype._onOperationUpdated=function(t){t===this.getSharedState("operation")&&this.forceUpdate()},e.prototype._onTabSwitch=function(){this._scrollbar.update()},e.prototype._onResetDefaultClick=function(){this.getSharedState("operation").resetOptions(),this.context.editor.render(),this.forceUpdate()},e.prototype._registerLocalHistoryChange=function(t){this.props.controls.registerLocalHistoryChange(t,!0)},e.prototype._renderAdjustmentsControls=function(){var t=this,e=function(e){return a.React.createElement(a.CollapseSectionComponent,{key:e.identifier,title:t._t("editor.controls.adjustments.sections."+e.identifier),alwaysExpanded:!0},a.React.createElement(d,{className:void 0+e.identifier},o(e.items)))},o=function(e){return e.filter(function(e){return t._isAdjustmentAvailable(e)}).map(function(e){return t._makeItem(e)})};return u.filter(function(e){return e.items.filter(function(e){return t._isAdjustmentAvailable(e)}).length>0}).map(e)},e.prototype._makeItem=function(t){var e=this.getSharedState("operation"),o=e.getOption(t);return a.React.createElement(p.a,{item:t,value:o,onBeforeValueChange:this._registerLocalHistoryChange.bind(this,t),className:void 0,key:t})},e.prototype._getRootProps=function(){return{className:void 0,withBorderTop:!0}},e.prototype._renderContent=function(){var t=this;return a.React.createElement(a.ScrollableListComponent,{direction:"vertical",innerListRef:function(e){t._list=e},innerRef:function(e){t._scrollbar=e}},a.React.createElement(f,null,a.React.createElement(h,null,a.React.createElement(a.ButtonComponent,{title:this._t("editor.controls.adjustments.reset"),className:void 0,onClick:this._onResetDefaultClick})),this._renderAdjustmentsControls()))},e}(a.ControlsComponent);c.contextTypes=a.ControlsComponent.contextTypes,c.RootElement=a.ControlsComponent.RootElement,e.a=c;var f=Object(a.adonis)(l).ul("x32ss4","SectionList"),d=a.adonis.ul("gz4y54","SectionItemList"),h=a.adonis.div("7abnmv","BottomSection")},26:function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=o(1),a=o.n(s),p=o(0),l=(o.n(p),a.a.Operations.AdjustmentsOperation),u=function(t){function e(){n(this,e);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];var a=r(this,t.call.apply(t,[this].concat(i)));a._bindAll("_onValueChange"),a._option=l.prototype.availableOptions[a.props.item];var p=a.getSharedState("operation");return a.state={value:p?p.getOption(a.props.item):a._option.default},a}return i(e,t),e.prototype.shouldComponentUpdate=function(t){return t.value!==this.props.value||t.value!==this.state.value},e.prototype._onValueChange=function(t){this.props.onBeforeValueChange&&this.props.onBeforeValueChange(t);var e=this.getSharedState("operation"),o=this._option,n=o.minValue,r=o.midValue,i=o.maxValue;t=t<0?r+(r-n)*t/100:r+(i-r)*t/100,e.setOption(this.props.item,t),this.context.editor.render(),this.setState({value:t}),this.props.onValueChange&&this.props.onValueChange(t),this.forceUpdate()},e.prototype.render=function(){var t=this.getSharedState("operation"),e=this._option,o=e.minValue,n=e.midValue,r=e.maxValue,i=t?t.getOption(this.props.item):n,s=100*(i<=n?(i-o)/(n-o)-1:(i-n)/(r-n));return i===o&&(s=-100),p.React.createElement(p.SliderControlComponent,{key:this.props.item,label:this._t("editor.controls.adjustments.items."+this.props.item),minValue:-100,maxValue:100,value:parseInt(s),onSliderValueChange:this._onValueChange,onValueChange:this._onValueChange,className:this.props.className,middleDot:!0})},e}(p.SharedStateComponent);u.contextTypes=p.SharedStateComponent.contextTypes,e.a=u}}).default});