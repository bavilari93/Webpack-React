(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{201:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),n=a(1),r=c(n),l=(c(a(0)),a(17)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(55));c(a(92));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={book:null},a.loadBook=a.loadBook.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),o(t,[{key:"componentDidMount",value:function(){this.loadBook(this.props.match.params.bookId)}},{key:"loadBook",value:function(e){var t=this;u.get(e).then(function(e){return t.setState({book:e})})}},{key:"render",value:function(){var e=this.state.book;return e?r.default.createElement("div",{className:"search-books"},r.default.createElement("div",{className:"search-books-bar"},r.default.createElement(l.Link,{className:"close-search",to:"/"},"Close"),r.default.createElement("div",{className:"search-books-input-wrapper"},r.default.createElement("input",{type:"text",name:"searchTerm",value:e.title,readOnly:!0}))),r.default.createElement("div",{className:"bookshelf"},r.default.createElement("h2",{className:"bookshelf-title"}," "),r.default.createElement("div",{className:"bookshelf-books"},r.default.createElement("ol",{className:"books-grid"},r.default.createElement("li",null,r.default.createElement("div",{className:"book"},r.default.createElement("div",{className:"book-top"},r.default.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'+e.imageLinks.thumbnail+'")'}})),r.default.createElement("div",{className:"book-title"},e.title),r.default.createElement("div",{className:"book-authors"},e.authors.map(function(e){return r.default.createElement("span",{key:e},e,r.default.createElement("br",null))})),r.default.createElement("div",{className:"book-authors"},e.subtitle))))))):r.default.createElement("p",null,"Loading book")}}]),t}();t.default=s}}]);