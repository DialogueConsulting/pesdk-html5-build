!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("photoeditorsdk/PhotoEditorSDK.UI.DesktopUI.Core"),require("photoeditorsdk")):"function"==typeof define&&define.amd?define([["PhotoEditorSDK","UI","DesktopUI"],"photoeditorsdk"],e):"object"==typeof exports?exports._unexposedPESDK=e(require("photoeditorsdk/PhotoEditorSDK.UI.DesktopUI.Core"),require("photoeditorsdk")):t._unexposedPESDK=e(t.PhotoEditorSDK.UI.DesktopUI,t.PhotoEditorSDK)}("undefined"!=typeof self?self:this,function(t,e){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=48)}({0:function(e,n){e.exports=t},1:function(t,n){t.exports=e},2:function(t,e,n){"use strict";(function(t){n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r});for(var o="undefined"==typeof window?t:window,i=o.requestAnimationFrame,r=o.cancelAnimationFrame,a=0,s=["ms","moz","webkit","o"],c=0;c<s.length&&!i;++c)i=o[s[c]+"RequestAnimationFrame"],r=o[s[c]+"CancelAnimationFrame"]||o[s[c]+"CancelRequestAnimationFrame"];i&&(i=i.bind(o)),r&&(r=r.bind(o)),i||(i=function(t,e){var n=(new Date).getTime(),o=Math.max(0,16-(n-a)),i=setTimeout(function(){t(n+o)},o);return a=n+o,i}),r||(r=function(t){clearTimeout(t)})}).call(e,n(4))},4:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},48:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n.n(a),c=n(49),l=n(51),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return r(e,t),e.prototype.getOperation=function(){var t=this.context.editor;return this.constructor.FOCUS_OPERATIONS.map(function(e){return t.operations.get(e)}).reduce(function(t,e){return t||e})},e.prototype.isFocusOperation=function(t){var e="object"===(void 0===t?"undefined":p(t))?t.constructor.identifier:t;return-1!==this.constructor.FOCUS_OPERATIONS.indexOf(e)},e.prototype._onEnter=function(){var t=this.context.editor,e=this.getOperation(),n={};e&&(n=e.serializeOptions(),delete n.enabled);var o=e&&e.getInputDimensions(!1);this.sharedState.set({selectedFocus:"none",initialOperation:e,operationExistedBeforeEntering:!!e,initialOptions:n,operation:e,inputDimensions:o}),t.zoom.auto(!0,!1,function(){t.features.disable("zoom","drag")},!1)},e.prototype._onLeave=function(){this.context.editor.features.enable("zoom","drag");var t=this.sharedState.get("initialOptions"),e=this.sharedState.get("initialOperation"),n=this.sharedState.get("operation");(!n&&e||n&&e&&n.constructor===e.constructor)&&this.addHistoryItem({type:"global",operation:e.constructor.identifier,options:e,existent:!0}),n&&!e&&this.addHistoryItem({type:"global",operation:n.constructor.identifier,existent:!1}),n&&e&&n.constructor!==e.constructor&&this.addHistoryItems([{type:"global",operation:e.constructor.identifier,options:t,existent:!0},{type:"global",operation:n.constructor.identifier,options:{},existent:!1}])},e.getPreloadAssets=function(t){var e=[];return this.ITEMS.forEach(function(t){e.push(t.backgroundImagePath),e.push(t.activeBackgroundImagePath)}),e},e.prototype._onOperationRemoved=function(t){},e.isEnabled=function(t){return t.isToolAllowed("focus")&&t.isToolEnabled("focus")},e}(a.BaseControls);u.clickAtPosition=a.BaseControls.clickAtPosition,u.ITEMS=[{identifier:"none",operationIdentifier:null,backgroundImagePath:"editor/controls/focus/none.png",activeBackgroundImagePath:"editor/controls/focus/none-active.png"},{identifier:"radial",operationIdentifier:"radial-focus",backgroundImagePath:"editor/controls/focus/radial.png",activeBackgroundImagePath:"editor/controls/focus/radial-active.png"},{identifier:"mirrored",operationIdentifier:"mirrored-focus",backgroundImagePath:"editor/controls/focus/mirrored.png",activeBackgroundImagePath:"editor/controls/focus/mirrored-active.png"},{identifier:"linear",operationIdentifier:"linear-focus",backgroundImagePath:"editor/controls/focus/linear.png",activeBackgroundImagePath:"editor/controls/focus/linear-active.png"},{identifier:"gaussian",operationIdentifier:"blur",backgroundImagePath:"editor/controls/focus/gaussian.png",activeBackgroundImagePath:"editor/controls/focus/gaussian-active.png"}],u.FOCUS_OPERATIONS=u.ITEMS.map(function(t){return t.operationIdentifier}).filter(function(t){return t}),u.identifier="focus",u.controlsComponent=c.a,u.canvasControlsComponent=l.a,u.iconPath="editor/controls/focus/icon.png",u.activeIconPath="editor/controls/focus/icon-active.png",u.requiredOperations=u.ITEMS.map(function(t){return t.operationIdentifier}).filter(function(t){return t}),u.defaultOptions={availableModes:null},e.default=u,s.a.Controls.FocusControls=u},49:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=n(0),c=(n.n(s),n(50)),l=function(t){function e(){i(this,e);for(var n=arguments.length,a=Array(n),c=0;c<n;c++)a[c]=arguments[c];var l=r(this,t.call.apply(t,[this].concat(a)));return l._bindAll("_onBlurRadiusChanged","_onHistoryUndo"),l._events=o({},s.Constants.EVENTS.HISTORY_UNDO,l._onHistoryUndo),l.state.selectedItem="none",l.state.intensity=50,l._autoSelectItem(!0),l}return a(e,t),e.prototype._isModeAvailable=function(t){var e=this.props.options.availableModes;return"none"===t||null===e||-1!==e.indexOf(t)},e.prototype._autoSelectItem=function(t,e){var n=this,o=this.props.controls,i=o.constructor.ITEMS;e=e||o.getOperation(),e?(i.forEach(function(o){o.operationIdentifier===e.constructor.identifier&&n._onItemClick(o,!1,t)}),t||this.setSharedState({operation:e})):this._onItemClick(i[0],!1,t)},e.prototype._onItemClick=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.context.editor,i=this.getSharedState("operation");if(this.getSharedState("selectedFocus")!==t.identifier){var r={selectedFocus:t.identifier};e&&(i&&o.operations.remove(i,!1),t.operationIdentifier&&(i=o.operations.getOrCreate(t.operationIdentifier),r.operation=i,r.inputDimensions=i.getInputDimensions(!1))),o.render(),this.setSharedState(r,!n)}},e.prototype._onBlurRadiusChanged=function(t){var e=this.context.editor;this.getSharedState("operation").setBlurRadius(t),e.render()},e.prototype._onHistoryUndo=function(t){var e=this.props.controls,n=this.context.editor.operations;t.some(function(t){return e.isFocusOperation(t.getOperation())})&&(n.remove(this.getSharedState("operation")),this._autoSelectItem(!1),this.setSharedState({initialOperation:null}))},e.prototype._renderListItems=function(){var t=this,e=this.props.controls,n=this.getSharedState("operation"),o=this.getSharedState("selectedFocus");return e.constructor.ITEMS.filter(function(e){return t._isModeAvailable(e.identifier)}).map(function(e){var i=t._getAssetPath(e.backgroundImagePath,!0),r=t._getAssetPath(e.activeBackgroundImagePath,!0),a=e.identifier===o;return s.React.createElement(c.a,{key:e.identifier,title:t._t("editor.controls.focus.items."+e.identifier),selected:a,showSlider:!!e.operationIdentifier,blurRadius:n&&n.getBlurRadius(),onBlurRadiusChanged:t._onBlurRadiusChanged,backgroundImagePath:i,activeBackgroundImagePath:r,onClick:t._onItemClick.bind(t,e,!0,!1)})},this)},e.prototype._getRootProps=function(){return{className:void 0,withBorderTop:!0}},e.prototype._renderContent=function(){var t=this;return s.React.createElement(s.ScrollableListComponent,{direction:"vertical",innerListRef:function(e){t._list=e},innerRef:function(e){t._scrollbar=e}},s.React.createElement(p,null,this._renderListItems()))},e}(s.ControlsComponent);l.contextTypes=s.ControlsComponent.contextTypes,l.propTypes=s.ControlsComponent.propTypes,l.RootElement=s.ControlsComponent.RootElement,e.a=l;var p=s.adonis.ul("1snluvd","List")},50:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),s=(n.n(a),a.ControlsStyles.ControlItem),c=a.ControlsStyles.ControlItemTitle,l=a.ControlsStyles.ControlItemActiveOverlay,p=function(t){function e(){o(this,e);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var s=i(this,t.call.apply(t,[this].concat(r)));return s._bindAll("_onSliderValueChanged"),s}return r(e,t),e.prototype._onSliderValueChanged=function(t){var e=this.props.onBlurRadiusChanged,n=this.getSharedState("inputDimensions"),o=n.min();e&&e(t/o)},e.prototype._renderSlider=function(){var t=this.props,e=t.selected,n=t.showSlider,o=t.blurRadius;if(!e||!n)return null;var i=this.getSharedState("operation"),r=Math.min(180,Math.round(.1*i.getInputDimensions(!1).min())),s=this.getSharedState("inputDimensions"),c=s.min();return a.React.createElement(a.SliderComponent,{minValue:0,maxValue:r,valueUnit:"",middleDot:!1,value:o*c,onChange:this._onSliderValueChanged})},e.prototype.render=function(){var t=this.props,e=t.title,n=t.backgroundImagePath,o=t.activeBackgroundImagePath,i=t.selected,r=t.onClick,s=t.showSlider,c={backgroundImage:"url('"+(i?o:n)+"')"},l=this.context.theme.transitionDuration;return a.React.createElement(u,{selected:i,"data-selected":i,className:void 0,onClick:r,style:c},a.React.createElement(d,{selected:i,withSlider:i&&s},e),a.React.createElement(f,{visible:i&&s},this._renderSlider()),a.React.createElement(a.Transition,{active:i,enterProp:"rendered",enterDuration:1e3*l,appearProp:"visible",appearDuration:1e3*l,leaveDuration:1e3*l},a.React.createElement(h,{selected:!0})))},e}(a.SharedStateComponent);p.contextTypes=a.SharedStateComponent.contextTypes,e.a=p;var u=Object(a.adonis)(s).li("19qom6j","ListItem"),d=Object(a.adonis)(c).div("1cwztpc",{selected:"2znik8",withSlider:"fsvvyb"},"ListItemTitle"),h=Object(a.adonis)(l).div("rctda3","ListItemOverlay"),f=a.adonis.div("chwlso",{visible:"vpr3tu"},"Slider")},51:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=n(1),c=(n.n(s),n(0)),l=(n.n(c),n(52)),p=n(53),u=n(54),d=function(t){function e(){i(this,e);for(var n=arguments.length,a=Array(n),l=0;l<n;l++)a[l]=arguments[l];var p=r(this,t.call.apply(t,[this].concat(a)));return p._bindAll("_onZoomDone"),p._events=o({},c.Constants.EVENTS.ZOOM_DONE,p._onZoomDone),p.state=s.Utils.extend(p.state,{zoomDone:!1}),p}return a(e,t),e.prototype._onZoomDone=function(){this.setState({zoomDone:!0})},e.prototype._renderControls=function(){var t=this.getSharedState("selectedFocus"),e=void 0;switch(t){case"radial":e=l.a;break;case"linear":e=p.a;break;case"mirrored":e=u.a;break;default:return c.React.createElement("div",null)}return c.React.createElement(e,{zoomDone:this.state.zoomDone})},e}(c.CanvasControlsComponent);d.contextTypes=c.CanvasControlsComponent.contextTypes,e.a=d},52:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=n(1),c=(n.n(s),n(0)),l=(n.n(c),n(2)),p=c.ControlsStyles.Knob,u=c.ControlsStyles.FullContainer,d=s.Math.Vector2,h=s.Math.Rectangle,f=function(t){function e(){var n;i(this,e);for(var a=arguments.length,p=Array(a),u=0;u<a;u++)p[u]=arguments[u];var h=r(this,t.call.apply(t,[this].concat(p)));return h._bindAll("_onCircleDragStart","_onCircleDrag","_onKnobDragStart","_onKnobDrag","_onOperationUpdated","_onZoomDone"),h.state=s.Utils.extend(h.state,{circlePosition:new d,circleDimensions:new d,knobPosition:new d,visible:!1}),h._knobChangedManually=!1,h._operation=h.getSharedState("operation"),h._events=(n={},o(n,c.Constants.EVENTS.OPERATION_UPDATED,h._onOperationUpdated),o(n,c.Constants.EVENTS.ZOOM_DONE,h._onZoomDone),n),h.props.zoomDone&&Object(l.b)(function(){h._onZoomDone()}),h}return a(e,t),e.prototype.componentDidMount=function(){t.prototype.componentDidMount.call(this),this._updateOnCanvasControls(),this._updatePositionsAndDimensions()},e.prototype._onZoomDone=function(){this.state.visible||(this.state.visible=!0),this._updateOnCanvasControls(),this._updatePositionsAndDimensions()},e.prototype._onOperationUpdated=function(t){t===this.getSharedState("operation")&&(this._knobChangedManually=!1,this._updatePositionsAndDimensions())},e.prototype._onCircleDragStart=function(){this._initialPosition=this._operation.getPosition(),this._initialKnobPosition=this.state.knobPosition.clone()},e.prototype._onCircleDrag=function(t){var e=this.context.editor,n=e.getOutputDimensions(),o=t.clone().divide(n),i=this._initialPosition.clone().add(o),r=this._initialKnobPosition.clone().add(t);this._operation.set({position:i}),this.state.knobPosition=r,e.render(),this._updatePositionsAndDimensions()},e.prototype._onKnobDragStart=function(t){this._knobChangedManually=!0,this._initialKnobPosition=this.state.knobPosition.clone()},e.prototype._onKnobDrag=function(t){var e=this.context.editor,n=e.getOutputDimensions(),o=this._initialKnobPosition.clone().add(t).clamp(new d(0,0),n),i=this._operation.getPosition().clone().multiply(n),r=o.clone().subtract(i).abs().len(),a=r/2;this.setState({knobPosition:o,circleDimensions:new d(2*r,2*r)}),this._operation.set({radius:r/n.min(),gradientRadius:a/n.min()}),e.render()},e.prototype._updatePositionsAndDimensions=function(){var t=this.context.editor,e=t.getOutputDimensions(),n=this._operation.getPosition().clone().multiply(e),o=this._operation.getRadius()*e.min(),i=2*o,r=new d(i,i),a={circleDimensions:r,circlePosition:n};this._knobChangedManually||(a.knobPosition=n.clone().add(o,0)),this.setState(a)},e.prototype._updateOnCanvasControls=function(){var t=this.context.editor,e=t.getSDK().getSprite().getBounds(),n=this._container.getBoundingClientRect(),o=this.context.appComponent.getBounds(),i=new h(Math.floor(e.x-(n.left-o.left)),Math.floor(e.y-(n.top-o.top)),Math.ceil(e.width)+1,Math.ceil(e.height)+1);c.Utils.styleElement(this._onCanvasControls,{left:i.x+"px",top:i.y+"px",width:i.width+"px",height:i.height+"px"}),this.forceUpdate()},e.prototype._getCircleStyles=function(){return{width:this.state.circleDimensions.x,height:this.state.circleDimensions.y,left:this.state.circlePosition.x,top:this.state.circlePosition.y,marginLeft:-.5*this.state.circleDimensions.x,marginTop:-.5*this.state.circleDimensions.y}},e.prototype._getKnobStyle=function(){return{left:this.state.knobPosition.x,top:this.state.knobPosition.y}},e.prototype.render=function(){var t=this;return c.React.createElement(m,{innerRef:function(e){t._container=e}},c.React.createElement(c.Transition,{active:this.state.visible,enterProp:"rendered",enterDuration:1e3*this.context.theme.transitionDuration,appearProp:"visible",appearDuration:1e3*this.context.theme.transitionDuration,leaveDuration:1e3*this.context.theme.transitionDuration},c.React.createElement(g,{innerRef:function(e){t._onCanvasControls=e}},c.React.createElement(c.DraggableComponent,{onStart:this._onCircleDragStart,onDrag:this._onCircleDrag},c.React.createElement(y,{className:void 0,style:this._getCircleStyles()})),c.React.createElement(c.DraggableComponent,{onStart:this._onKnobDragStart,onDrag:this._onKnobDrag},c.React.createElement(b,{className:void 0,style:this._getKnobStyle()})))))},e}(c.SharedStateComponent);f.contextTypes=c.SharedStateComponent.contextTypes,e.a=f;var m=Object(c.adonis)(u).div("1rineb","CanvasControls"),g=c.adonis.div("12e79nm",{rendered:"2jlos",visible:"zgbg08"},"OnCanvasControls"),b=Object(c.adonis)(p).div("120drhm","Knob"),y=c.adonis.div("kgwi8g","Circle")},53:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=n(1),c=(n.n(s),n(0)),l=(n.n(c),n(2)),p=c.ControlsStyles.Knob,u=c.ControlsStyles.FullContainer,d=s.Math.Vector2,h=s.Math.Rectangle,f=function(t){function e(){var n;i(this,e);for(var a=arguments.length,p=Array(a),u=0;u<a;u++)p[u]=arguments[u];var d=r(this,t.call.apply(t,[this].concat(p)));return d._bindAll("_onKnobDragStart","_onKnobDrag","_onOperationUpdated","_onZoomDone"),d.state=s.Utils.extend(d.state,{visible:!1}),d._operation=d.getSharedState("operation"),d._events=(n={},o(n,c.Constants.EVENTS.OPERATION_UPDATED,d._onOperationUpdated),o(n,c.Constants.EVENTS.ZOOM_DONE,d._onZoomDone),n),d.props.zoomDone&&Object(l.b)(function(){d._onZoomDone()}),d}return a(e,t),e.prototype.componentDidMount=function(){t.prototype.componentDidMount.call(this),this._updateOnCanvasControls()},e.prototype._onZoomDone=function(){this.state.visible||(this.state.visible=!0),this._updateOnCanvasControls()},e.prototype._onOperationUpdated=function(t){t===this.getSharedState("operation")&&this.forceUpdate()},e.prototype._onKnobDragStart=function(t,e){var n=this.getSharedState("operation");this._initialPosition=n.getOption("controlPoint"+t)},e.prototype._onKnobDrag=function(t,e){var n=this.context.editor,o=this.getSharedState("operation"),i=n.getSDK().getSprite().getBounds(),r=this._container.getBoundingClientRect(),a=this.context.appComponent.getBounds(),s=this._initialPosition.clone().multiply(i.width,i.height),c=s.add(e).clamp(new d(r.left-a.left-i.x,r.top-a.top-i.y),new d(r.width-(i.x-(r.left-a.left)),r.height-(i.y-(r.top-a.top)))),l=c.divide(i.width,i.height);o.setOption("controlPoint"+t,l),n.render(),this.forceUpdate()},e.prototype._updateOnCanvasControls=function(){var t=this.context.editor,e=t.getSDK().getSprite().getBounds(),n=this._container.getBoundingClientRect(),o=this.context.appComponent.getBounds(),i=new h(Math.floor(e.x-(n.left-o.left)),Math.floor(e.y-(n.top-o.top)),Math.ceil(e.width)+1,Math.ceil(e.height)+1);c.Utils.styleElement(this._onCanvasControls,{left:i.x+"px",top:i.y+"px",width:i.width+"px",height:i.height+"px"}),this.forceUpdate()},e.prototype._getKnobStyle=function(t){var e=this.context.editor,n=this.getSharedState("operation"),o=n.getOption("controlPoint"+t),i=e.getSDK().getSprite().getBounds(),r=o.clone().multiply(i.width,i.height);return{left:r.x,top:r.y}},e.prototype._getLineStyle=function(){var t=this.context.editor,e=this.getSharedState("operation"),n=t.getSDK().getSprite().getBounds(),o={1:e.getControlPoint1().clone().multiply(n.width,n.height),2:e.getControlPoint2().clone().multiply(n.width,n.height)},i=o[2].clone().subtract(o[1]),r=i.len(),a=Math.atan2(i.y,i.x);return{width:r+"px",left:o[1].x+"px",top:o[1].y+"px",transform:"rotate("+a+"rad) translateY(-50%)"}},e.prototype._renderKnobs=function(){for(var t=[],e=1;e<=2;e++)t.push(c.React.createElement(c.DraggableComponent,{onStart:this._onKnobDragStart.bind(this,e),onDrag:this._onKnobDrag.bind(this,e),key:e},c.React.createElement(b,{style:this._getKnobStyle(e),className:void 0})));return t},e.prototype.render=function(){var t=this;return c.React.createElement(m,{innerRef:function(e){t._container=e}},c.React.createElement(c.Transition,{active:this.state.visible,enterProp:"rendered",enterDuration:1e3*this.context.theme.transitionDuration,appearProp:"visible",appearDuration:1e3*this.context.theme.transitionDuration,leaveDuration:1e3*this.context.theme.transitionDuration},c.React.createElement(g,{innerRef:function(e){t._onCanvasControls=e}},this._renderKnobs(),c.React.createElement(y,{style:this._getLineStyle()}))))},e}(c.SharedStateComponent);f.contextTypes=c.SharedStateComponent.contextTypes,e.a=f;var m=Object(c.adonis)(u).div("1rineb","CanvasControls"),g=c.adonis.div("12e79nm",{rendered:"2jlos",visible:"zgbg08"},"OnCanvasControls"),b=Object(c.adonis)(p).div("120drhm","Knob"),y=c.adonis.div("1rrhaqy","Line")},54:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=n(1),c=(n.n(s),n(0)),l=(n.n(c),n(2)),p=c.ControlsStyles.Knob,u=c.ControlsStyles.FullContainer,d=s.Math.Vector2,h=s.Math.Rectangle,f=function(t){function e(){var n;i(this,e);for(var a=arguments.length,p=Array(a),u=0;u<a;u++)p[u]=arguments[u];var h=r(this,t.call.apply(t,[this].concat(p)));return h._bindAll("_onCenterDragStart","_onCenterDrag","_onKnobDragStart","_onKnobDrag","_onOperationUpdated","_onZoomDone"),h.state=s.Utils.extend(h.state,{areaPosition:new d,areaDimensions:new d,knobPosition:new d,visible:!1}),h._events=(n={},o(n,c.Constants.EVENTS.OPERATION_UPDATED,h._onOperationUpdated),o(n,c.Constants.EVENTS.ZOOM_DONE,h._onZoomDone),n),h._operation=h.getSharedState("operation"),h.props.zoomDone&&Object(l.b)(function(){h._onZoomDone()}),h}return a(e,t),e.prototype.componentDidMount=function(){t.prototype.componentDidMount.call(this),this._updateOnCanvasControls(),this._updatePositionsAndDimensions()},e.prototype._onZoomDone=function(){this.state.visible||(this.state.visible=!0),this._updateOnCanvasControls(),this._updatePositionsAndDimensions()},e.prototype._onOperationUpdated=function(t){t===this._operation&&(this.forceUpdate(),this._updatePositionsAndDimensions())},e.prototype._onCenterDragStart=function(){var t=this._operation;this._initialStart=t.getStart(),this._initialEnd=t.getEnd(),this._initialDist=this._initialEnd.clone().subtract(this._initialStart)},e.prototype._onCenterDrag=function(t){var e=this.context.editor,n=this._operation,o=e.getOutputDimensions(),i=t.clone().divide(o),r=this._initialStart.clone().add(i).clamp(new d(0,0),new d(1,1).subtract(this._initialDist)),a=r.clone().add(this._initialDist);n.set({start:r,end:a}),e.render(),this._updatePositionsAndDimensions(),this.forceUpdate()},e.prototype._onKnobDragStart=function(t){this._initialKnobPosition=this.state.knobPosition.clone()},e.prototype._onKnobDrag=function(t){var e=this.context.editor,n=this._operation,o=e.getOutputDimensions(),i=this._initialKnobPosition.clone().add(t).clamp(new d(0,0),o),r=i.clone().subtract(this.state.areaPosition),a=this.state.areaPosition.clone().add(-r.y,r.x).divide(o),s=this.state.areaPosition.clone().add(r.y,-r.x).divide(o),c=2*r.len();n.set({start:a,end:s,size:c/o.min(),gradientSize:c/o.min()}),this.setState({knobPosition:i,areaDimensions:new d(this.state.areaDimensions.x,c)}),e.render()},e.prototype._getAreaStyle=function(){var t=this.state.knobPosition.clone().subtract(this.state.areaPosition),e=Math.atan2(t.x,t.y)*(180/Math.PI),n="rotate("+(-e).toFixed(2)+"deg)";return{width:this.state.areaDimensions.x,height:this.state.areaDimensions.y,left:this.state.areaPosition.x,top:this.state.areaPosition.y,marginLeft:-.5*this.state.areaDimensions.x,marginTop:-.5*this.state.areaDimensions.y,transform:n,MozTransform:n,msTransform:n,WebkitTransform:n}},e.prototype._getKnobStyle=function(){return{left:this.state.knobPosition.x,top:this.state.knobPosition.y}},e.prototype._updatePositionsAndDimensions=function(){var t=this.context.editor,e=t.getOutputDimensions(),n=this._operation,o=n.getStart().clone().multiply(e),i=n.getEnd().clone().multiply(e),r=n.getSize()*e.min(),a=i.clone().subtract(o),s=o.clone().add(a.clone().divide(2)),c=new d(2*e.len(),r),l=a.len(),p=a.clone().divide(l).divide(2);this.setState({areaDimensions:c,areaPosition:s.clone(),knobPosition:s.clone().add(-r*p.y,r*p.x)})},e.prototype._updateOnCanvasControls=function(){var t=this.context.editor,e=t.getSDK().getSprite().getBounds(),n=this._container.getBoundingClientRect(),o=this.context.appComponent.getBounds(),i=new h(Math.floor(e.x-(n.left-o.left)),Math.floor(e.y-(n.top-o.top)),Math.ceil(e.width)+1,Math.ceil(e.height)+1);c.Utils.styleElement(this._onCanvasControls,{left:i.x+"px",top:i.y+"px",width:i.width+"px",height:i.height+"px"}),this.forceUpdate()},e.prototype.render=function(){var t=this;return c.React.createElement(m,{innerRef:function(e){t._container=e}},c.React.createElement(c.Transition,{active:this.state.visible,enterProp:"rendered",enterDuration:1e3*this.context.theme.transitionDuration,appearProp:"visible",appearDuration:1e3*this.context.theme.transitionDuration,leaveDuration:1e3*this.context.theme.transitionDuration},c.React.createElement(g,{innerRef:function(e){t._onCanvasControls=e}},c.React.createElement(c.DraggableComponent,{onStart:this._onCenterDragStart,onDrag:this._onCenterDrag},c.React.createElement(y,{className:void 0,style:this._getAreaStyle()})),c.React.createElement(c.DraggableComponent,{onStart:this._onKnobDragStart,onDrag:this._onKnobDrag},c.React.createElement(b,{className:void 0,style:this._getKnobStyle()})))))},e}(c.SharedStateComponent);f.contextTypes=c.SharedStateComponent.contextTypes,e.a=f;var m=Object(c.adonis)(u).div("1rineb","CanvasControls"),g=c.adonis.div("aovk7s",{rendered:"2jlos",visible:"zgbg08"},"OnCanvasControls"),b=Object(c.adonis)(p).div("120drhm","Knob"),y=c.adonis.div("36haff","Area")}}).default});