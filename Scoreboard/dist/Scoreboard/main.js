(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  max-width: 770px;\r\n}\r\n\r\n#block {\r\n  max-width: 770px;\r\n}\r\n\r\n#backdrop img, #poster img{\r\n  max-width:100%;\r\n  height: auto;\r\n}\r\n\r\n#backdrop {\r\n  margin-left: 10px;\r\n  margin-right: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n#heroimage {\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n#score {\r\n  padding-left: 10px;\r\n  padding-top: 10px;\r\n  font-size: 36px;\r\n  text-align: center;\r\n  font-family: 'Franklin Gothic FS Med',sans-serif;\r\n  font-weight: bold;\r\n  height: 70px;\r\n  vertical-align: middle;\r\n}\r\n\r\n#audiencescore {\r\n  padding-left: 10px;\r\n  padding-top: 10px;\r\n  font-size: 36px;\r\n  text-align: center;\r\n  font-family: 'Franklin Gothic FS Med',sans-serif;\r\n  font-weight: bold;\r\n  vertical-align: middle;\r\n}\r\n\r\n#meterimg {\r\n  margin-left: 10px;\r\n  height: 48px;\r\n  width: 48px;\r\n}\r\n\r\n#audienceimg {\r\n  margin-left: 20px;\r\n  height: 48px;\r\n  width: 48px;\r\n}\r\n\r\n#scoreboard {\r\n  background-color: #EFEFEF;\r\n  width: 524.16px;\r\n  height: 194px;\r\n  max-height: 194px;\r\n  margin-left: 0px;\r\n  margin-right: 0px;\r\n  box-shadow: inset 0 1px 2px rgba(0,0,0,.1);\r\n  overflow: hidden;\r\n}\r\n\r\n#progress {\r\n    margin-top:40px;\r\n    margin-bottom: 14px;\r\n    border-radius: 10px;\r\n    background-color: #D3D3D3;\r\n    height: 20px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n#progress-bar {\r\n  float: left;\r\n  height: 100%;\r\n  font-size: 12px;\r\n  line-height: 20px;\r\n  color: #fff;\r\n  text-align: center;\r\n  box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);\r\n  padding: 0;\r\n  transition: width .6s ease;\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n#play {\r\n  text-align: left;\r\n  box-sizing: border-box;\r\n  border-width: 30px 0px 30px 60px;\r\n  border-style: solid;\r\n  border-color: transparent transparent transparent white;\r\n  vertical-align: middle;\r\n  color:transparent;\r\n  margin-right: 10px;\r\n  background-color: transparent;\r\n}\r\n\r\n#h1play {\r\n  color: white;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  opacity: .85;\r\n  font-size: 50px;\r\n  bottom: 10px;\r\n  left: 35px;\r\n  font-weight: 700;\r\n}\r\n\r\n#h1play h1{\r\n  font-weight: 700;\r\n  font-size: 50px;\r\n  line-height: 50px;\r\n  font-family: inherit;\r\n  padding-top: 20px;\r\n  display: inline;\r\n  vertical-align: middle;\r\n}\r\n\r\n#consensuspanel p span {\r\n  font-weight: bold;\r\n}\r\n\r\n#consensuspanel p a:hover{\r\n  cursor: pointer;\r\n  color: lightskyblue;\r\n}\r\n\r\n#consensuspanel p {\r\n  font-size: 11.5px;\r\n  display: block;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n#scoreboard-poster {\r\n  margin-left: 10px;\r\n  margin-right: 20px;\r\n  margin-top: 12px;\r\n  padding: 0px;\r\n}\r\n\r\n#criticpanel, #audiencepanel {\r\n  height: 194px;\r\n  max-height: 194px;\r\n}\r\n\r\n#criticpanel {\r\n  width: 66.6666%;\r\n  margin-left: 0px;\r\n  margin-right: 0px;\r\n}\r\n\r\n#audiencepanel {\r\n  width: 33.33333%\r\n}\r\n\r\n#poster{\r\n  height: 336;\r\n  width: 29.16667%;\r\n  max-width: 29.16667%;\r\n  padding-left: 0;\r\n  padding-right: 10px;\r\n  margin:0;\r\n}\r\n\r\n#backdrop {\r\n  width: 100%;\r\n}\r\n\r\n#scoreboardrating {\r\n  padding:0px;\r\n  margin:0px;\r\n\r\n}\r\n\r\n#scoreboard-col {\r\n  width: 70.83333%;\r\n  max-width: 70.83333%;\r\n  padding:0px;\r\n  margin:0px;\r\n}\r\n\r\n#criticscorepanel, #consensuspanel {\r\n  width: 49.9%;\r\n  max-width: 162px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#consensuspanel {\r\n  border-right: white 1px;\r\n}\r\n\r\n#scoredata {\r\n  font-size: 12px;\r\n  padding-left: 10px;\r\n}\r\n\r\n#scoredata span {\r\n  font-weight: 500;\r\n}\r\n\r\n.scoretitle {\r\n  margin: 0;\r\n  padding: 10px 10px 5px 10px;\r\n  font-size: 15px;\r\n  color: #000;\r\n  font-weight: bold;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#usrscoredata {\r\n  font-size: 12px;\r\n  padding-left: 10px;\r\n}\r\n\r\n#usrscoredata span {\r\n  font-weight: 500;\r\n}\r\n\r\n.freshrotten {\r\n  margin-left: 25px;\r\n}\r\n\r\n@media (min-width:768px) {\r\n\r\n  #smallH1 {\r\n    display: none;\r\n  }\r\n\r\n  #poster{\r\n    height: 336;\r\n    width: 29.16667%;\r\n  }\r\n\r\n  #backdrop {\r\n    width: 100%;\r\n  }\r\n\r\n  #backdrop img {\r\n    width: 740px;\r\n  }\r\n\r\n  #scoreboard-col {\r\n    width: 70.83333%;\r\n  }\r\n\r\n  #addmobilerating {\r\n    display:none;\r\n  }\r\n}\r\n\r\n#smallH1 {\r\n  font-size: 16px;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  #smallH1 {\r\n    display: block;\r\n  }\r\n\r\n  #h1play {\r\n    display: none;\r\n  }\r\n\r\n  #addrating, #consensuspanel, #scoredata, #usrscoredata {\r\n    display: none;\r\n  }\r\n\r\n  #addmobilerating {\r\n    display:block;\r\n  }\r\n\r\n  #criticpanel, #audiencepanel {\r\n    width: 50%;\r\n  }\r\n\r\n  .scoretitle {\r\n    font-size: 12px;\r\n  }\r\n\r\n  #score, #audiencescore {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .freshrotten {\r\n    display: none;\r\n  }\r\n\r\n  #meterimg {\r\n    margin-left: 10px;\r\n    height: auto;\r\n    width: 90%;\r\n    max-width: 48px;\r\n  }\r\n\r\n  #audienceimg {\r\n    margin-left: 10px;\r\n    height: auto;\r\n    width: 90%;\r\n    max-width: 48px;\r\n  }\r\n\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.col {\r\n  flex-basis: 0;\r\n  flex-grow: 1;\r\n  max-width: 100%;\r\n}\r\n\r\ncw-modal {\r\n  /* modals are hidden by default */\r\n  display: none;\r\n\r\n\r\n}\r\n\r\nbody.cw-modal-open {\r\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\r\n  overflow: hidden;\r\n\r\n}\r\n\r\ncw-modal iframe {\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMENBQTBDO0VBQzFDLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsdURBQXVEO0VBQ3ZELHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVOztBQUVaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7QUFFRjs7QUFFQTtFQUdFLGFBQWE7RUFFYixlQUFlO0FBQ2pCOztBQUVBO0VBRUUsYUFBYTtFQUdiLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7OztBQUdmOztBQUVBO0VBQ0UsNkVBQTZFO0VBQzdFLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG1heC13aWR0aDogNzcwcHg7XHJcbn1cclxuXHJcbiNibG9jayB7XHJcbiAgbWF4LXdpZHRoOiA3NzBweDtcclxufVxyXG5cclxuI2JhY2tkcm9wIGltZywgI3Bvc3RlciBpbWd7XHJcbiAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jYmFja2Ryb3Age1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNoZXJvaW1hZ2Uge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG5cclxuI3Njb3JlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBGUyBNZWQnLHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcblxyXG5cclxuI2F1ZGllbmNlc2NvcmUge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIEZTIE1lZCcsc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4jbWV0ZXJpbWcge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICB3aWR0aDogNDhweDtcclxufVxyXG5cclxuI2F1ZGllbmNlaW1nIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbn1cclxuXHJcbiNzY29yZWJvYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xyXG4gIHdpZHRoOiA1MjQuMTZweDtcclxuICBoZWlnaHQ6IDE5NHB4O1xyXG4gIG1heC1oZWlnaHQ6IDE5NHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNwcm9ncmVzcyB7XHJcbiAgICBtYXJnaW4tdG9wOjQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0QzRDM7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNwcm9ncmVzcy1iYXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIHJnYmEoMCwwLDAsLjE1KTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIC42cyBlYXNlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG4jcGxheSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci13aWR0aDogMzBweCAwcHggMzBweCA2MHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOnRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI2gxcGxheSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgb3BhY2l0eTogLjg1O1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBib3R0b206IDEwcHg7XHJcbiAgbGVmdDogMzVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4jaDFwbGF5IGgxe1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4jY29uc2Vuc3VzcGFuZWwgcCBzcGFuIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI2NvbnNlbnN1c3BhbmVsIHAgYTpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcclxufVxyXG5cclxuI2NvbnNlbnN1c3BhbmVsIHAge1xyXG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG5cclxuI3Njb3JlYm9hcmQtcG9zdGVyIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbiNjcml0aWNwYW5lbCwgI2F1ZGllbmNlcGFuZWwge1xyXG4gIGhlaWdodDogMTk0cHg7XHJcbiAgbWF4LWhlaWdodDogMTk0cHg7XHJcbn1cclxuXHJcbiNjcml0aWNwYW5lbCB7XHJcbiAgd2lkdGg6IDY2LjY2NjYlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbiNhdWRpZW5jZXBhbmVsIHtcclxuICB3aWR0aDogMzMuMzMzMzMlXHJcbn1cclxuXHJcbiNwb3N0ZXJ7XHJcbiAgaGVpZ2h0OiAzMzY7XHJcbiAgd2lkdGg6IDI5LjE2NjY3JTtcclxuICBtYXgtd2lkdGg6IDI5LjE2NjY3JTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXJnaW46MDtcclxufVxyXG5cclxuI2JhY2tkcm9wIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3Njb3JlYm9hcmRyYXRpbmcge1xyXG4gIHBhZGRpbmc6MHB4O1xyXG4gIG1hcmdpbjowcHg7XHJcblxyXG59XHJcblxyXG4jc2NvcmVib2FyZC1jb2wge1xyXG4gIHdpZHRoOiA3MC44MzMzMyU7XHJcbiAgbWF4LXdpZHRoOiA3MC44MzMzMyU7XHJcbiAgcGFkZGluZzowcHg7XHJcbiAgbWFyZ2luOjBweDtcclxufVxyXG5cclxuI2NyaXRpY3Njb3JlcGFuZWwsICNjb25zZW5zdXNwYW5lbCB7XHJcbiAgd2lkdGg6IDQ5LjklO1xyXG4gIG1heC13aWR0aDogMTYycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiNjb25zZW5zdXNwYW5lbCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiB3aGl0ZSAxcHg7XHJcbn1cclxuXHJcbiNzY29yZWRhdGEge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbiNzY29yZWRhdGEgc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnNjb3JldGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4jdXNyc2NvcmVkYXRhIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4jdXNyc2NvcmVkYXRhIHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcblxyXG4uZnJlc2hyb3R0ZW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkge1xyXG5cclxuICAjc21hbGxIMSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgI3Bvc3RlcntcclxuICAgIGhlaWdodDogMzM2O1xyXG4gICAgd2lkdGg6IDI5LjE2NjY3JTtcclxuICB9XHJcblxyXG4gICNiYWNrZHJvcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICNiYWNrZHJvcCBpbWcge1xyXG4gICAgd2lkdGg6IDc0MHB4O1xyXG4gIH1cclxuXHJcbiAgI3Njb3JlYm9hcmQtY29sIHtcclxuICAgIHdpZHRoOiA3MC44MzMzMyU7XHJcbiAgfVxyXG5cclxuICAjYWRkbW9iaWxlcmF0aW5nIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbn1cclxuXHJcbiNzbWFsbEgxIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgI3NtYWxsSDEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAjaDFwbGF5IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAjYWRkcmF0aW5nLCAjY29uc2Vuc3VzcGFuZWwsICNzY29yZWRhdGEsICN1c3JzY29yZWRhdGEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNhZGRtb2JpbGVyYXRpbmcge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICB9XHJcblxyXG4gICNjcml0aWNwYW5lbCwgI2F1ZGllbmNlcGFuZWwge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5zY29yZXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gICNzY29yZSwgI2F1ZGllbmNlc2NvcmUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLmZyZXNocm90dGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAjbWV0ZXJpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA0OHB4O1xyXG4gIH1cclxuXHJcbiAgI2F1ZGllbmNlaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogNDhweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY29sIHtcclxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcclxuICBmbGV4LWJhc2lzOiAwO1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuY3ctbW9kYWwge1xyXG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxuXHJcbn1cclxuXHJcbmJvZHkuY3ctbW9kYWwtb3BlbiB7XHJcbiAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcbmN3LW1vZGFsIGlmcmFtZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"block\">\n<div id=\"backdrop\" (click)=\"playVideo($event)\">\n  <div id=\"heroimage\">\n  <img src=\"{{backdropUrl}}\">\n  <div id=\"h1play\"><button id=\"play\"></button><h1>{{title}}</h1></div>\n</div>\n<div id=\"smallH1\"><h1>{{title}}</h1></div>\n</div>\n<div id=\"scoreboard-poster\" class=\"row\">\n  <div class=\"col\" id=\"poster\"><img src=\"{{posterUrl}}\"></div>\n  <div id=\"scoreboard-col\" class=\"col\">\n    <div class=\"row\" id=\"scoreboardrating\">\n      <div class=\"row\" id=\"scoreboard\">\n              <div class=\"row\" id=\"criticpanel\">\n                <div id=\"criticscorepanel\">\n                    <h4 class=\"scoretitle\">TOMOTOMETER</h4>\n                    <div id=\"scoring\"><img id=\"meterimg\" src=\"{{criticRatingImg}}\"><span id=\"score\">{{tomotoMeter}}%</span></div>\n                    <div id=\"scoredata\">\n                      <div><span>Average Rating: </span>{{avgRating}}/10</div>\n                      <div><span>Reviews Counted: </span>{{numReviews}}</div>\n                      <div><span class=\"freshrotten\">Fresh: </span>{{fresh}}</div>\n                      <div><span class=\"freshrotten\">Rotten: </span>{{rotten}}</div>\n                    </div>\n                </div>\n                <div id=\"consensuspanel\">\n                 <p style=\"float:right; font-weight:bold; padding-top:5px;\"><a [ngStyle]=\"{'font-weight': topCritics ? 'normal' : 'bold'}\" (click)=\"changeAllCritic($event)\">All Critics</a> | <a [ngStyle]=\"{'font-weight': topCritics ? 'bold' : 'normal'}\" (click)=\"changeTopCritic($event)\">Top Critics</a></p>\n                  <div id=\"progress\">\n                    <div id=\"progress-bar\"  [ngStyle]=\"{'width.%': tomotoMeter, 'background-color': tomotoMeter > 55 ? '#FA320A' : '#0ac855' }\"></div>\n                  </div>\n                  <div>\n                  <p id=\"consensus\"><span>Critic Consensus: </span>{{criticConsensus}}</p>\n                  </div>\n                </div>\n              </div>\n              <div id=\"audiencepanel\">\n                  <h4 class=\"scoretitle\">AUDIENCE SCORE</h4>\n                  <div id=\"usrscoring\"><img id=\"audienceimg\" src=\"{{usrRatingImg}}\"><span id=\"audiencescore\">{{usrScore}}</span></div>\n                  <div id=\"usrscoredata\">\n                  <div><span>Average Rating: </span>{{avgUsrRating}}/10</div>\n                  <div><span>User Ratings: </span>{{numUsrReviews}}</div>\n                  </div>\n              </div>\n      </div>\n      <div id=\"post-reviews\"></div>\n    </div>\n  </div>\n</div>\n<div id=\"addmobilerating\"></div>\n</div>\n<cw-modal id=\"youtube-modal\">\n    <iframe class=\"e2e-iframe-trusted-src\" frameborder=\"0\"  [src]=\"videoUrl\"></iframe>\n</cw-modal>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(data, modalService, sanitizer) {
        this.data = data;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        //set default state
        this.title = 'Untitled';
        this.titleUrl = '';
        this.topCritics = false;
        //Image/Vid Defaults
        this.videoUrl = null;
        this.posterUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].cdn + 'assets/img/poster.default.gif';
        this.backdropUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].cdn + 'assets/img/backdrop.default.jpg';
        //Tomato Meter Defaults
        this.tomotoMeter = 60;
        this.avgRating = 5.0;
        this.numReviews = 50;
        this.rotten = 0;
        this.fresh = 0;
        this.criticConsensus = 'Some random review goes here';
        this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].cdn + 'assets/img/large-fresh.png';
        //User Defaults
        this.usrScore = 'N/A';
        this.avgUsrRating = 5.0;
        this.numUsrReviews = 100;
        this.usrRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].cdn + 'assets/img/no-audience.png';
        this.videoUrlText = 'http://www.youtube.com/embed/dQw4w9WgXcQ';
    }
    AppComponent.prototype.playVideo = function (event) {
        if (this.titleUrl !== 'black_panther') {
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrlText + '?autoplay=1');
        }
        this.modalService.open('youtube-modal');
    };
    AppComponent.prototype.changeTopCritic = function (event) {
        if (!this.topCritics) {
            this.topCritics = true;
            this.getTopCriticScore();
        }
    };
    AppComponent.prototype.changeAllCritic = function (event) {
        if (this.topCritics) {
            this.topCritics = false;
            this.getTomotoMeterScore();
        }
    };
    AppComponent.prototype.getTopCriticScore = function () {
        var _this = this;
        this.data.getTopCriticScore(this.titleUrl).subscribe(function (data) {
            _this.tomotoMeter = Math.round(data['tomatometer']);
            _this.avgRating = data['avgrating'];
            _this.numReviews = data['numOfReviews'];
            _this.rotten = data['rotten'];
            _this.fresh = data['fresh'];
            var aCriticReview = Math.floor((Math.random() * data.length));
            _this.criticConsensus = data[aCriticReview]['review_text'];
            if (_this.tomotoMeter > 75) {
                _this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].cdn + 'assets/img/large-certified.png';
            }
            else if (_this.tomotoMeter >= 55 && _this.tomotoMeter < 75) {
                _this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].cdn + 'assets/img/large-fresh.png';
            }
            else {
                _this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].cdn + 'assets/img/large-rotten.png';
            }
        });
    };
    AppComponent.prototype.getTomotoMeterScore = function () {
        var _this = this;
        this.data.getTomotometer(this.titleUrl).subscribe(function (data) {
            console.log('DATA', data);
            _this.tomotoMeter = Math.round(data['0']['tomatometer']);
            _this.avgRating = data['avgrating'];
            _this.numReviews = data['0']['numOfReviews'];
            _this.rotten = data['0']['rotten'];
            _this.fresh = data['0']['fresh'];
            var aCriticReview = Math.floor((Math.random() * data.length));
            _this.criticConsensus = data[aCriticReview]['review_text'];
            if (_this.tomotoMeter > 75) {
                _this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].cdn + 'assets/img/large-certified.png';
            }
            else if (_this.tomotoMeter >= 55 && _this.tomotoMeter < 75) {
                _this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].cdn + 'assets/img/large-fresh.png';
            }
            else {
                _this.criticRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].cdn + 'assets/img/large-rotten.png';
            }
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // var url = window.location.href;
        // if (url[url.length-1]==='/') {
        //   url = url.substring(0,url.length-1);
        // }
        // var urlArray = url.split('/');
        // this.titleUrl = urlArray[urlArray.length-1];
        this.titleUrl = (Math.floor((Math.random() * 1000000) + 1)).toString();
        this.data.getMovieInfo(this.titleUrl).subscribe(function (data) {
            _this.title = data['0']['title'];
            _this.posterUrl = data['0']['poster_url'];
            _this.backdropUrl = data['0']['backdrop_url'];
            _this.videoUrlText = 'http://www.youtube.com/embed/' + data['0']['video'];
            _this.videoUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.videoUrlText);
            var movieId = data['0']['id'];
            _this.data.getUserReviewInfo(movieId).subscribe(function (data) {
                _this.usrScore = String(Math.round(data[0]['audienceScore'])) + '%';
                _this.avgUsrRating = Math.round(data[0]['averageRating'] * 10) / 10;
                _this.numUsrReviews = data[0]['userRatings'];
                if (data[0]['userRatings'] < 2) {
                    _this.usrRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/no-audience.png';
                }
                else if (data[0]['audienceScore'] >= 50) {
                    _this.usrRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/audience-liked.png';
                }
                else if (data[0]['audienceScore'] < 50) {
                    _this.usrRatingImg = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'assets/img/audience-disliked.png';
                }
            });
        });
        this.getTomotoMeterScore();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _critics_critics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./critics/critics.component */ "./src/app/critics/critics.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"],
                _critics_critics_component__WEBPACK_IMPORTED_MODULE_6__["CriticsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _critics_critics_component__WEBPACK_IMPORTED_MODULE_6__["CriticsComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/critics/critics.component.css":
/*!***********************************************!*\
  !*** ./src/app/critics/critics.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "critics-div {\r\n  max-width: 770px;\r\n  display: block;\r\n  box-sizing: border-box;\r\n}\r\ncritics-section {\r\n  margin-left:10px;\r\n  margin-right:20px;\r\n  max-width: 770px;\r\n  display: block;\r\n  box-sizing: border-box;\r\n}\r\n.critics-h2:before {\r\n  position: absolute;\r\n  margin-left: 11px;\r\n  content: ' ';\r\n  background-color: #FA320A;\r\n  min-width: 20px;\r\n  height: 20px;\r\n  box-sizing: border-box;\r\n  left:0 !important;\r\n}\r\n.critics-quotebubble {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  border: 0;\r\n  align-self: top;\r\n}\r\n.critics-h2 {\r\n  font-weight: 600;\r\n  display: block;\r\n  line-height: 25px;\r\n  position: relative;\r\n  -webkit-margin-before: 0.83em;\r\n          margin-block-start: 0.83em;\r\n  -webkit-margin-after: 0.83em;\r\n          margin-block-end: 0.83em;\r\n  -webkit-margin-start: 0px;\r\n          margin-inline-start: 0px;\r\n  -webkit-margin-end: 0px;\r\n          margin-inline-end: 0px;\r\n  font-size: 28px;\r\n  border-radius: 0;\r\n  clear: left;\r\n  color: #1C1C1C;\r\n  text-transform: uppercase;\r\n  padding-left: 35px;\r\n  float: initial;\r\n  font-family: 'Neusa Next Pro Compact',Impact,Arial,sans-serif;\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n\r\n  border-bottom: 1px solid transparent;\r\n}\r\n.reviews:after{\r\n  content: \" \";\r\n  display: table;\r\n}\r\n@media (max-width:767px) {\r\n  .critics-h2:after {\r\n    content: none;\r\n  }\r\n  .critics-quotebubble {\r\n    width: 100%;\r\n  }\r\n\r\n  .critics-body {\r\n    padding: 5px 10px;\r\n  }\r\n\r\n  .critics-review {\r\n    border: 1px solid #000;\r\n    padding: 5px;\r\n  }\r\n\r\n}\r\n@media (min-width:768px) {\r\n  .critics-quotebubble {\r\n    width: 336px;\r\n    max-width: 336px;\r\n    box-sizing: border-box;\r\n  }\r\n  .critics-review {\r\n    border: 2px solid #000;\r\n    padding: 12px;\r\n  }\r\n  .critics-h2 {\r\n    width: 720px;\r\n    overflow: hidden;\r\n  }\r\n  .critics-h2:after {\r\n    content: ' ';\r\n    overflow: hidden;\r\n  }\r\n\r\n  .critics-body {\r\n    padding: 15px;\r\n  }\r\n\r\n}\r\n.critics-h2:after {\r\n  position: absolute;\r\n  margin-left: 11px;\r\n  width: 105%;\r\n  background-color: #FA320A;\r\n  min-width: 20px;\r\n  height: 20px;\r\n  padding: 0;\r\n  border: 0;\r\n\r\n}\r\n.critics-header {\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  display: block;\r\n  -webkit-margin-before: 1em;\r\n          margin-block-start: 1em;\r\n  -webkit-margin-after: 1em;\r\n          margin-block-end: 1em;\r\n  -webkit-margin-start: 0px;\r\n          margin-inline-start: 0px;\r\n  -webkit-margin-end: 0px;\r\n          margin-inline-end: 0px;\r\n  margin: 0 0 10px;\r\n  cursor: default;\r\n\r\n}\r\n.critics-header a {\r\n  text-decoration: none;\r\n  color: gray;\r\n  box-sizing: border-box;\r\n}\r\n.critics-body {\r\n  font-family: 'Franklin Gothic FS Book',sans-serif;\r\n  font-size: 16px;\r\n  clear: both;\r\n  overflow: hidden;\r\n  display: block;\r\n  margin-left: 10px;\r\n  margin-right: 20px;\r\n  max-width: 720px;\r\n}\r\n#reviews {\r\n  width: 100%;\r\n  min-height: 175px;\r\n  display: inline-block;\r\n}\r\n.critics-quotebubble {\r\n  margin-top: 15px;\r\n  display: block;\r\n}\r\n.critics-review {\r\n  border-radius: 0;\r\n  background: #FFF;\r\n  position: relative;\r\n  width: 100%;\r\n  font-family: 'Franklin Gothic FS Book',sans-serif;\r\n  margin:0;\r\n}\r\n.critics-review:after {\r\n  border-color: transparent #FFF transparent transparent;\r\n  border-width: 0 26px 26px 0;\r\n  bottom: -25px;\r\n  left: 40px;\r\n  z-index: 1;\r\n}\r\n.critics-review:before {\r\n  border-color: transparent #000 transparent transparent;\r\n  border-width: 0 28px 28px 0;\r\n  bottom: -28px;\r\n  left: 39px;\r\n  z-index: 0;\r\n}\r\n.critics-review:after, .critics-review:before {\r\n  border-style: solid;\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  width: 0;\r\n}\r\n.critics-review-body {\r\n  font-size: 16px;\r\n  color: #343434;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n.critics-review-body p{\r\n  display: inline;\r\n  -webkit-margin-before: 1em;\r\n          margin-block-start: 1em;\r\n  -webkit-margin-after: 1em;\r\n          margin-block-end: 1em;\r\n  -webkit-margin-start: 0px;\r\n          margin-inline-start: 0px;\r\n  -webkit-margin-end: 0px;\r\n          margin-inline-end: 0px;\r\n  margin: 0 0 10px;\r\n}\r\n.critics-review-date {\r\n  text-align:right;\r\n  font-size: 12px;\r\n}\r\n.critics-critic {\r\n  float: left;\r\n  margin-left: 75px;\r\n  margin-top: 10px;\r\n  zoom: 1;\r\n  zoom: 1;\r\n  overflow: hidden;\r\n}\r\n.critics-critic a {\r\n  color: #000;\r\n  text-decoration:none;\r\n}\r\n.critics-critic-name a {\r\n  font-weight: bold;\r\n}\r\n.critics-critic-top {\r\n  color: #FFAE00;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n}\r\n.critics-critic-img img {\r\n  height:50px;\r\n  width: auto;\r\n}\r\n.critics-critic-body {\r\n  margin-left: 5px;\r\n\r\n}\r\n.critics-critic-org {\r\n  font-size: 12px;\r\n}\r\n.critics-review-icon {\r\n  float: left;\r\n  width: 24px;\r\n  margin-right:8px;\r\n  margin-bottom:8px;\r\n}\r\n.critics-review-icon img{\r\n  height: 24px;\r\n  width: 24px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JpdGljcy9jcml0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsNEJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qix5QkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLHVCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDZEQUE2RDtFQUM3RCxnQkFBZ0I7RUFDaEIsbUJBQW1COztFQUVuQixvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7QUFFRjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFRjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7O0FBRVg7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDBCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQix5QkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLHVCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7O0FBRWpCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaURBQWlEO0VBQ2pELFFBQVE7QUFDVjtBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQ0FBbUM7QUFDckM7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIseUJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxPQUFPO0VBQ1AsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7O0FBRWxCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jcml0aWNzL2NyaXRpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNyaXRpY3MtZGl2IHtcclxuICBtYXgtd2lkdGg6IDc3MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuY3JpdGljcy1zZWN0aW9uIHtcclxuICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDoyMHB4O1xyXG4gIG1heC13aWR0aDogNzcwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY3JpdGljcy1oMjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogMTFweDtcclxuICBjb250ZW50OiAnICc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBMzIwQTtcclxuICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbGVmdDowICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jcml0aWNzLXF1b3RlYnViYmxlIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGFsaWduLXNlbGY6IHRvcDtcclxufVxyXG5cclxuLmNyaXRpY3MtaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC44M2VtO1xyXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuODNlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBjbGVhcjogbGVmdDtcclxuICBjb2xvcjogIzFDMUMxQztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBmbG9hdDogaW5pdGlhbDtcclxuICBmb250LWZhbWlseTogJ05ldXNhIE5leHQgUHJvIENvbXBhY3QnLEltcGFjdCxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucmV2aWV3czphZnRlcntcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAuY3JpdGljcy1oMjphZnRlciB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxuICAuY3JpdGljcy1xdW90ZWJ1YmJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jcml0aWNzLWJvZHkge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY3JpdGljcy1yZXZpZXcge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgLmNyaXRpY3MtcXVvdGVidWJibGUge1xyXG4gICAgd2lkdGg6IDMzNnB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMzZweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5jcml0aWNzLXJldmlldyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICB9XHJcbiAgLmNyaXRpY3MtaDIge1xyXG4gICAgd2lkdGg6IDcyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLmNyaXRpY3MtaDI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5jcml0aWNzLWJvZHkge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG59XHJcbi5jcml0aWNzLWgyOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XHJcbiAgd2lkdGg6IDEwNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBMzIwQTtcclxuICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG5cclxufVxyXG5cclxuLmNyaXRpY3MtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XHJcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxufVxyXG5cclxuLmNyaXRpY3MtaGVhZGVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogZ3JheTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY3JpdGljcy1ib2R5IHtcclxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBGUyBCb29rJyxzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjbGVhcjogYm90aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXgtd2lkdGg6IDcyMHB4O1xyXG59XHJcblxyXG4jcmV2aWV3cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTc1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY3JpdGljcy1xdW90ZWJ1YmJsZSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNyaXRpY3MtcmV2aWV3IHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIEZTIEJvb2snLHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi5jcml0aWNzLXJldmlldzphZnRlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjRkZGIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogMCAyNnB4IDI2cHggMDtcclxuICBib3R0b206IC0yNXB4O1xyXG4gIGxlZnQ6IDQwcHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmNyaXRpY3MtcmV2aWV3OmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMDAwIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogMCAyOHB4IDI4cHggMDtcclxuICBib3R0b206IC0yOHB4O1xyXG4gIGxlZnQ6IDM5cHg7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmNyaXRpY3MtcmV2aWV3OmFmdGVyLCAuY3JpdGljcy1yZXZpZXc6YmVmb3JlIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLmNyaXRpY3MtcmV2aWV3LWJvZHkge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzM0MzQzNDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuLmNyaXRpY3MtcmV2aWV3LWJvZHkgcHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XHJcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuXHJcbi5jcml0aWNzLXJldmlldy1kYXRlIHtcclxuICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNyaXRpY3MtY3JpdGljIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogNzVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHpvb206IDE7XHJcbiAgem9vbTogMTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY3JpdGljcy1jcml0aWMgYSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuXHJcbi5jcml0aWNzLWNyaXRpYy1uYW1lIGEge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY3JpdGljcy1jcml0aWMtdG9wIHtcclxuICBjb2xvcjogI0ZGQUUwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jcml0aWNzLWNyaXRpYy1pbWcgaW1nIHtcclxuICBoZWlnaHQ6NTBweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmNyaXRpY3MtY3JpdGljLWJvZHkge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG59XHJcblxyXG4uY3JpdGljcy1jcml0aWMtb3JnIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNyaXRpY3MtcmV2aWV3LWljb24ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIG1hcmdpbi1yaWdodDo4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTo4cHg7XHJcbn1cclxuXHJcbi5jcml0aWNzLXJldmlldy1pY29uIGltZ3tcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/critics/critics.component.html":
/*!************************************************!*\
  !*** ./src/app/critics/critics.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"critics-div\">\n<section class=\"critics-section\">\n  <h2 class=\"critics-h2\">Critic Reviews For <em>{{title}}</em></h2>\n  <div class=\"critics-body\">\n    <p class=\"critics-header\"><a href=\"#\">All Critics ({{numberOfReviews}}) </a>|<a href=\"#\"> Top Critics ({{numberOfTopCritics}}) </a>|<a href=\"#\"> Fresh ({{numberOfFresh}}) </a>|<a href=\"#\"> Rotten ({{numberOfRotten}}) </a></p>\n    <div id=\"reviews\">\n\n    <!-- Quotes from Reviews Array -->\n    <ng-template ngFor let-review [ngForOf]=\"reviews\" let-i=\"index\" let-o=\"odd\">\n    <div class=\"critics-quotebubble\" [ngStyle]=\"{'float': o ? 'right' : 'left'}\">\n      <div class=\"critics-review\">\n        <div class=\"critics-review-media\">\n          <!-- Need to set rotten or fresh based off of cdn -->\n          <div class=\"critics-review-icon\">\n            <img src=\"{{cdnUrl}}assets/img/tiny-{{review.fresh === 1 ? 'fresh' : 'rotten'}}.png\">\n          </div>\n          <div class=\"critics-review-body\">\n            <!-- Review Text -->\n            <p>{{review.review_text}}</p>\n            <!-- Review Date -->\n            <div class=\"critics-review-date\"> <p>Jan 8, 2019 | <a href=\"#\">Full Review…</a></p></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"critics-critic row\">\n        <!-- Critic Photo -->\n        <div class=\"critics-critic-img\">\n          <img src=\"https://www.rottentomatoes.com/assets/pizza-pie/images/user_none.710c9ebd183.jpg\">\n        </div>\n        <div class=\"critics-critic-body\">\n          <!-- Critic Name -->\n          <div class=\"critics-critic-name\"><a href=\"#\">{{review.name}}</a></div>\n          <!-- Critic Org -->\n          <div class=\"critics-critic-org\"><a href=\"#\">{{review.organization}}</a></div>\n          <!-- Top Critic - If not Top Critic change Display to None -->\n          <div class=\"critics-critic-top\"[ngStyle]=\"{'display': review.top_critic ? 'block' : 'none'}\"><span>Top Critic</span></div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n\n\n\n\n  </div>\n\n  </div>\n</section>\n</div>\n"

/***/ }),

/***/ "./src/app/critics/critics.component.ts":
/*!**********************************************!*\
  !*** ./src/app/critics/critics.component.ts ***!
  \**********************************************/
/*! exports provided: CriticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticsComponent", function() { return CriticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var CriticsComponent = /** @class */ (function () {
    function CriticsComponent(data) {
        this.data = data;
        this.cdnUrl = '';
        this.titleUrl = '';
        this.title = '';
        this.reviews = [];
        this.numberOfReviews = 0;
        this.numberOfFresh = 0;
        this.numberOfRotten = 0;
        this.numberOfTopCritics = 0;
    }
    CriticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cdnUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].cdn;
        // var url = window.location.href;
        // if (url[url.length-1]==='/') {
        //   url = url.substring(0,url.length-1);
        // }
        // var urlArray = url.split('/');
        // this.titleUrl = urlArray[urlArray.length-1];
        this.titleUrl = (Math.floor((Math.random() * 1000000) + 1)).toString();
        this.data.getMovieInfo(this.titleUrl).subscribe(function (data) {
            _this.title = data['0']['title'];
            var movieId = data['0']['id'];
            //get reviews
            _this.data.getDozenReviews(movieId).subscribe(function (data) {
                // console.log(data);
                _this.reviews = data;
            });
        });
        this.data.getTomotometer(this.titleUrl).subscribe(function (data) {
            _this.numberOfReviews = data['0']['numOfReviews'];
            _this.numberOfFresh = data['0']['fresh'];
            _this.numberOfRotten = data['0']['rotten'];
        });
        this.data.getTopCriticScore(this.titleUrl).subscribe(function (data) {
            _this.numberOfTopCritics = data['0']['numOfReviews'];
        });
    };
    CriticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'critics',
            template: __webpack_require__(/*! ./critics.component.html */ "./src/app/critics/critics.component.html"),
            styles: [__webpack_require__(/*! ./critics.component.css */ "./src/app/critics/critics.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CriticsComponent);
    return CriticsComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getMovieInfo = function (titleUrl) {
        if (this.getMovieInfoObservable) {
            return this.getMovieInfoObservable;
        }
        else {
            this.getMovieInfoObservable = this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].url + "m/movieinfo/ID/" + titleUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
            return this.getMovieInfoObservable;
        }
    };
    DataService.prototype.getTomotometer = function (titleUrl) {
        if (this.getTomotoObservable) {
            return this.getTomotoObservable;
        }
        else {
            this.getTomotoObservable = this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].url + "cr/tomotometer/ID/" + titleUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
            return this.getTomotoObservable;
        }
    };
    DataService.prototype.getTopCriticScore = function (titleUrl) {
        if (this.getTopCriticObservable) {
            return this.getTopCriticObservable;
        }
        else {
            this.getTopCriticObservable = this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].url + "cr/topcriticmeter/ID/" + titleUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
            return this.getTopCriticObservable;
        }
    };
    DataService.prototype.getUserReviewInfo = function (movieId) {
        if (this.getUserReviewObservable) {
            return this.getUserReviewObservable;
        }
        else {
            this.getUserReviewObservable = this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].usersUrl + "reviews/scoreboard/" + movieId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
            return this.getUserReviewObservable;
        }
    };
    //${environment.url}
    DataService.prototype.getDozenReviews = function (movieId) {
        if (this.getDozenReviewsObservable) {
            return this.getDozenReviewsObservable;
        }
        else {
            this.getDozenReviewsObservable = this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].url + "cr/topdozenreviews/ID/" + movieId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
            return this.getDozenReviewsObservable;
        }
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/modal.service.ts":
/*!**********************************!*\
  !*** ./src/app/modal.service.ts ***!
  \**********************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/*!*******************************************!*\
  !*** ./src/app/modal/modal.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cw-modal-body {\r\n  padding: 5px;\r\n  background: black;\r\n  /* margin exposes part of the modal background */\r\n  margin-top: 120px;\r\n  width:90%;\r\n  max-width:1000px;\r\n  height:50%;\r\n  display: inline-block;\r\n}\r\n\r\n.cw-modal {\r\n  /* modal container fixed across whole screen */\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  text-align: center;\r\n\r\n  /* z-index must be higher than .cw-modal-background */\r\n  z-index: 1000;\r\n\r\n  /* enables scrolling for tall modals */\r\n  overflow: auto;\r\n\r\n\r\n}\r\n\r\n.cw-modal-background {\r\n  /* modal background fixed across whole screen */\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n\r\n  /* semi-transparent black  */\r\n  background-color: #000;\r\n  opacity: 0.8;\r\n\r\n  /* z-index must be below .cw-modal and above everything else  */\r\n  z-index: 900;\r\n}\r\n\r\nbody.cw-modal-open {\r\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\r\n  overflow: hidden;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0RBQWdEO0VBQ2hELGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxrQkFBa0I7O0VBRWxCLHFEQUFxRDtFQUNyRCxhQUFhOztFQUViLHNDQUFzQztFQUN0QyxjQUFjOzs7QUFHaEI7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87O0VBRVAsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixZQUFZOztFQUVaLCtEQUErRDtFQUMvRCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2RUFBNkU7RUFDN0UsZ0JBQWdCOztBQUVsQiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3ctbW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIC8qIG1hcmdpbiBleHBvc2VzIHBhcnQgb2YgdGhlIG1vZGFsIGJhY2tncm91bmQgKi9cclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICB3aWR0aDo5MCU7XHJcbiAgbWF4LXdpZHRoOjEwMDBweDtcclxuICBoZWlnaHQ6NTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmN3LW1vZGFsIHtcclxuICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmN3LW1vZGFsLWJhY2tncm91bmQgKi9cclxuICB6LWluZGV4OiAxMDAwO1xyXG5cclxuICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcblxyXG59XHJcblxyXG4uY3ctbW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuXHJcbiAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5jdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xyXG4gIHotaW5kZXg6IDkwMDtcclxufVxyXG5cclxuYm9keS5jdy1tb2RhbC1vcGVuIHtcclxuICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'cw-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('cw-modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('cw-modal-open');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cw-modal',
            template: "<div class=\"cw-modal\">\n            <div class=\"cw-modal-body\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"cw-modal-background\"></div>",
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/modal/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    url: '/',
    // cdn: 'http://ddt6x6o76fn2g.cloudfront.net/',
    cdn: '/',
    usersUrl: 'http://ec2-3-14-111-112.us-east-2.compute.amazonaws.com:9003/'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    url: 'http://ec2-13-57-3-67.us-west-1.compute.amazonaws.com:9001/',
    cdn: 'http://ddt6x6o76fn2g.cloudfront.net/',
    usersUrl: 'http://ec2-34-200-239-184.compute-1.amazonaws.com:9003/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/io/Code/GitHub/sdc_rt_remote/Scoreboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map