/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _views_tasksView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/tasksView */ \"./src/views/tasksView.js\");\n/* harmony import */ var _views_projectsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/projectsView */ \"./src/views/projectsView.js\");\n\n\n// import UI from './views/ui';\n\n\n\n\nconst Controller = (() => {\n  const setActiveProject = (project) => {\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setActiveProject(project);\n  };\n\n  const getActiveProject = () => _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActiveProject();\n\n  const getProjects = () => _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAll();\n\n  const getActiveProjectTasks = () => getActiveProject().tasks;\n\n  // HANDLERS\n  const projectSelectHandler = (projectIndex) => {\n    const clickedProject = getProjects()[projectIndex];\n    setActiveProject(clickedProject);\n    _views_tasksView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(getActiveProjectTasks());\n  };\n\n  const AddProjectHandler = (projectName, projectColor) => {\n    const project = Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectName, projectColor);\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(project);\n    // ProjectsView.render(getProjects());\n  };\n\n  const init = () => {\n    setActiveProject(getProjects()[0]);\n\n    _views_projectsView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init(getProjects());\n    _views_tasksView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init(getActiveProjectTasks());\n\n    // BIND\n    _views_projectsView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bindProjectSelect(projectSelectHandler);\n    _views_projectsView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bindAddProject(AddProjectHandler);\n\n    // ATTACH EVENTS\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectEvent.addObserver(_views_projectsView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render);\n  };\n\n\n  return {\n    init,\n    setActiveProject,\n    getActiveProject,\n    getActiveProjectTasks,\n    getProjects\n  };\n})();\n\n// Controller.init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyLmpzPzdmNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0Jztcbi8vIGltcG9ydCBVSSBmcm9tICcuL3ZpZXdzL3VpJztcbmltcG9ydCBUYXNrc1ZpZXcgZnJvbSAnLi92aWV3cy90YXNrc1ZpZXcnO1xuaW1wb3J0IFByb2plY3RzVmlldyBmcm9tICcuL3ZpZXdzL3Byb2plY3RzVmlldyc7XG5cblxuY29uc3QgQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIE1vZGVsLnNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IE1vZGVsLmdldEFjdGl2ZVByb2plY3QoKTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IE1vZGVsLmdldEFsbCgpO1xuXG4gIGNvbnN0IGdldEFjdGl2ZVByb2plY3RUYXNrcyA9ICgpID0+IGdldEFjdGl2ZVByb2plY3QoKS50YXNrcztcblxuICAvLyBIQU5ETEVSU1xuICBjb25zdCBwcm9qZWN0U2VsZWN0SGFuZGxlciA9IChwcm9qZWN0SW5kZXgpID0+IHtcbiAgICBjb25zdCBjbGlja2VkUHJvamVjdCA9IGdldFByb2plY3RzKClbcHJvamVjdEluZGV4XTtcbiAgICBzZXRBY3RpdmVQcm9qZWN0KGNsaWNrZWRQcm9qZWN0KTtcbiAgICBUYXNrc1ZpZXcucmVuZGVyKGdldEFjdGl2ZVByb2plY3RUYXNrcygpKTtcbiAgfTtcblxuICBjb25zdCBBZGRQcm9qZWN0SGFuZGxlciA9IChwcm9qZWN0TmFtZSwgcHJvamVjdENvbG9yKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RDb2xvcik7XG4gICAgTW9kZWwuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAvLyBQcm9qZWN0c1ZpZXcucmVuZGVyKGdldFByb2plY3RzKCkpO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlUHJvamVjdChnZXRQcm9qZWN0cygpWzBdKTtcblxuICAgIFByb2plY3RzVmlldy5pbml0KGdldFByb2plY3RzKCkpO1xuICAgIFRhc2tzVmlldy5pbml0KGdldEFjdGl2ZVByb2plY3RUYXNrcygpKTtcblxuICAgIC8vIEJJTkRcbiAgICBQcm9qZWN0c1ZpZXcuYmluZFByb2plY3RTZWxlY3QocHJvamVjdFNlbGVjdEhhbmRsZXIpO1xuICAgIFByb2plY3RzVmlldy5iaW5kQWRkUHJvamVjdChBZGRQcm9qZWN0SGFuZGxlcik7XG5cbiAgICAvLyBBVFRBQ0ggRVZFTlRTXG4gICAgTW9kZWwuYWRkUHJvamVjdEV2ZW50LmFkZE9ic2VydmVyKFByb2plY3RzVmlldy5yZW5kZXIpO1xuICB9O1xuXG5cbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIHNldEFjdGl2ZVByb2plY3QsXG4gICAgZ2V0QWN0aXZlUHJvamVjdCxcbiAgICBnZXRBY3RpdmVQcm9qZWN0VGFza3MsXG4gICAgZ2V0UHJvamVjdHNcbiAgfTtcbn0pKCk7XG5cbi8vIENvbnRyb2xsZXIuaW5pdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/controller.js\n");

/***/ }),

/***/ "./src/eventDispatcher.js":
/*!********************************!*\
  !*** ./src/eventDispatcher.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst EventDispatcher = () => {\n  const observers = [];\n\n  const addObserver = (observer) => {\n    observers.push(observer);\n  };\n\n  const notify = (args) => {\n    observers.forEach((observer) => {\n      observer(args);\n    });\n  };\n\n  return { addObserver, notify };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventDispatcher);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXZlbnREaXNwYXRjaGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50RGlzcGF0Y2hlci5qcz9mMDExIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEV2ZW50RGlzcGF0Y2hlciA9ICgpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXJzID0gW107XG5cbiAgY29uc3QgYWRkT2JzZXJ2ZXIgPSAob2JzZXJ2ZXIpID0+IHtcbiAgICBvYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gIH07XG5cbiAgY29uc3Qgbm90aWZ5ID0gKGFyZ3MpID0+IHtcbiAgICBvYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIG9ic2VydmVyKGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGFkZE9ic2VydmVyLCBub3RpZnkgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RGlzcGF0Y2hlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/eventDispatcher.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\n// import TasksView from './views/tasksView';\n// import ProjectsView from './views/projectsView';\n\n_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n\nconst projects = [];\n\nconst project = Object(_project__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Default', 'blue');\nprojects.push(project);\nproject.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('d_title', 'description', Date.now(), 1));\nproject.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('d_title2', 'description2', Date.now(), 2));\nproject.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('d_title3', 'description3', Date.now(), 3));\n\nconst project1 = Object(_project__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Week', 'blue');\nprojects.push(project1);\nproject1.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('week', 'description', Date.now(), 1));\nproject1.addTask(Object(_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('week', 'description2', Date.now(), 2));\n\n_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(projects);\n// ProjectsView.init();\n// TasksView.init();\n\n// const project3 = Project('Another one', 'red');\n// projects.push(project3);\n// Model.add(projects);\n\n// UserInterface.init(projects);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/NTE3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG4vLyBpbXBvcnQgVGFza3NWaWV3IGZyb20gJy4vdmlld3MvdGFza3NWaWV3Jztcbi8vIGltcG9ydCBQcm9qZWN0c1ZpZXcgZnJvbSAnLi92aWV3cy9wcm9qZWN0c1ZpZXcnO1xuXG5Nb2RlbC5pbml0KCk7XG5Db250cm9sbGVyLmluaXQoKTtcblxuY29uc3QgcHJvamVjdHMgPSBbXTtcblxuY29uc3QgcHJvamVjdCA9IFByb2plY3QoJ0RlZmF1bHQnLCAnYmx1ZScpO1xucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbnByb2plY3QuYWRkVGFzayhUYXNrKCdkX3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgRGF0ZS5ub3coKSwgMSkpO1xucHJvamVjdC5hZGRUYXNrKFRhc2soJ2RfdGl0bGUyJywgJ2Rlc2NyaXB0aW9uMicsIERhdGUubm93KCksIDIpKTtcbnByb2plY3QuYWRkVGFzayhUYXNrKCdkX3RpdGxlMycsICdkZXNjcmlwdGlvbjMnLCBEYXRlLm5vdygpLCAzKSk7XG5cbmNvbnN0IHByb2plY3QxID0gUHJvamVjdCgnV2VlaycsICdibHVlJyk7XG5wcm9qZWN0cy5wdXNoKHByb2plY3QxKTtcbnByb2plY3QxLmFkZFRhc2soVGFzaygnd2VlaycsICdkZXNjcmlwdGlvbicsIERhdGUubm93KCksIDEpKTtcbnByb2plY3QxLmFkZFRhc2soVGFzaygnd2VlaycsICdkZXNjcmlwdGlvbjInLCBEYXRlLm5vdygpLCAyKSk7XG5cbk1vZGVsLmFkZChwcm9qZWN0cyk7XG4vLyBQcm9qZWN0c1ZpZXcuaW5pdCgpO1xuLy8gVGFza3NWaWV3LmluaXQoKTtcblxuLy8gY29uc3QgcHJvamVjdDMgPSBQcm9qZWN0KCdBbm90aGVyIG9uZScsICdyZWQnKTtcbi8vIHByb2plY3RzLnB1c2gocHJvamVjdDMpO1xuLy8gTW9kZWwuYWRkKHByb2plY3RzKTtcblxuLy8gVXNlckludGVyZmFjZS5pbml0KHByb2plY3RzKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventDispatcher */ \"./src/eventDispatcher.js\");\n\n\nconst Model = (() => {\n  let activeProject = null;\n  const addProjectEvent = Object(_eventDispatcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const init = () => {\n    if (!localStorage.projects) {\n      localStorage.projects = JSON.stringify([]);\n    }\n  };\n\n  const add = (projects) => {\n    localStorage.projects = JSON.stringify(projects);\n  };\n\n  const getAll = () => JSON.parse(localStorage.projects);\n\n  const addProject = (project) => {\n    const projects = getAll();\n    projects.push(project);\n    add(projects);\n    // NOTIFY VIEW\n    addProjectEvent.notify(projects);\n  };\n\n  const getActiveProject = () => activeProject;\n\n  const setActiveProject = (project) => {\n    activeProject = project;\n  };\n\n  return {\n    init,\n    add,\n    getAll,\n    activeProject,\n    getActiveProject,\n    setActiveProject,\n    addProject,\n    addProjectEvent\n  };\n})();\n\nModel.init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwuanM/NDBmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4vZXZlbnREaXNwYXRjaGVyJztcblxuY29uc3QgTW9kZWwgPSAoKCkgPT4ge1xuICBsZXQgYWN0aXZlUHJvamVjdCA9IG51bGw7XG4gIGNvbnN0IGFkZFByb2plY3RFdmVudCA9IEV2ZW50RGlzcGF0Y2hlcigpO1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UucHJvamVjdHMpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KFtdKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkID0gKHByb2plY3RzKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnByb2plY3RzID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xuICB9O1xuXG4gIGNvbnN0IGdldEFsbCA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2plY3RzKTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGdldEFsbCgpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgYWRkKHByb2plY3RzKTtcbiAgICAvLyBOT1RJRlkgVklFV1xuICAgIGFkZFByb2plY3RFdmVudC5ub3RpZnkocHJvamVjdHMpO1xuICB9O1xuXG4gIGNvbnN0IGdldEFjdGl2ZVByb2plY3QgPSAoKSA9PiBhY3RpdmVQcm9qZWN0O1xuXG4gIGNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBhZGQsXG4gICAgZ2V0QWxsLFxuICAgIGFjdGl2ZVByb2plY3QsXG4gICAgZ2V0QWN0aXZlUHJvamVjdCxcbiAgICBzZXRBY3RpdmVQcm9qZWN0LFxuICAgIGFkZFByb2plY3QsXG4gICAgYWRkUHJvamVjdEV2ZW50XG4gIH07XG59KSgpO1xuXG5Nb2RlbC5pbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/model.js\n");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Project = (projectName, projectColor) => {\n  const name = projectName;\n  const color = projectColor;\n  const tasks = [];\n\n  const addTask = (task) => {\n    tasks.push(task);\n  };\n\n  const removeTask = (task) => {\n    tasks.splice(tasks.indexOf(task), 1);\n  };\n\n  return {\n    addTask, removeTask, name, color, tasks\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzP2VhOGYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHJvamVjdCA9IChwcm9qZWN0TmFtZSwgcHJvamVjdENvbG9yKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgY29uc3QgY29sb3IgPSBwcm9qZWN0Q29sb3I7XG4gIGNvbnN0IHRhc2tzID0gW107XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+IHtcbiAgICB0YXNrcy5zcGxpY2UodGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRUYXNrLCByZW1vdmVUYXNrLCBuYW1lLCBjb2xvciwgdGFza3NcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/project.js\n");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Task = (taskTitle, taskDescription, taskDueDate, taskPriority, taskDone = false) => {\n  const title = taskTitle;\n  const description = taskDescription;\n  const dueDate = taskDueDate;\n  const priority = taskPriority;\n  const done = taskDone;\n\n  return {\n    title, description, dueDate, priority, done\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFzay5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90YXNrLmpzP2IzYTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVGFzayA9ICh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgdGFza0RvbmUgPSBmYWxzZSkgPT4ge1xuICBjb25zdCB0aXRsZSA9IHRhc2tUaXRsZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb247XG4gIGNvbnN0IGR1ZURhdGUgPSB0YXNrRHVlRGF0ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHk7XG4gIGNvbnN0IGRvbmUgPSB0YXNrRG9uZTtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmVcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/task.js\n");

/***/ }),

/***/ "./src/views/projectsView.js":
/*!***********************************!*\
  !*** ./src/views/projectsView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import TasksView from './tasksView';\n// import Controller from '../controller';\n\n\nconst ProjectsView = (() => {\n  // const projects = Controller.getProjects();\n  const navBar = document.getElementById('projects');\n  const navList = document.createElement('ul');\n  const form = document.createElement('form');\n  let handleProjectSelect = null;\n  let handleAddProject = null;\n\n  navList.addEventListener('click', (event) => {\n    const projectIndex = event.target.id;\n    handleProjectSelect(projectIndex);\n  });\n\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const projectName = document.querySelector('.project-name-input').value;\n    const projectColor = document.querySelector('.project-color-input').value;\n    handleAddProject(projectName, projectColor);\n  });\n\n  const render = (projects) => {\n    navList.innerHTML = '';\n    projects.forEach((project, index) => {\n      const projectItem = document.createElement('li');\n      projectItem.textContent = project.name;\n      projectItem.id = index;\n      navList.appendChild(projectItem);\n    });\n  };\n\n  const renderForm = () => {\n    const input = document.createElement('input');\n    const colorInput = document.createElement('input');\n    const submitButton = document.createElement('button');\n    input.type = 'text';\n    colorInput.type = 'color';\n    input.className = 'project-name-input';\n    colorInput.className = 'project-color-input';\n    submitButton.textContent = 'Add Project';\n    form.append(input, colorInput, submitButton);\n    navBar.appendChild(form);\n  };\n\n  // BIND\n  const bindProjectSelect = (handler) => {\n    handleProjectSelect = handler;\n  };\n\n  const bindAddProject = (handler) => {\n    handleAddProject = handler;\n  };\n\n  const init = (projects) => {\n    navBar.appendChild(navList);\n    render(projects);\n    renderForm();\n  };\n\n  return {\n    init, render, bindProjectSelect, bindAddProject\n  };\n})();\n\n// ProjectsView.init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsView);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvcHJvamVjdHNWaWV3LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Byb2plY3RzVmlldy5qcz8xZGQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBUYXNrc1ZpZXcgZnJvbSAnLi90YXNrc1ZpZXcnO1xuLy8gaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcic7XG5cblxuY29uc3QgUHJvamVjdHNWaWV3ID0gKCgpID0+IHtcbiAgLy8gY29uc3QgcHJvamVjdHMgPSBDb250cm9sbGVyLmdldFByb2plY3RzKCk7XG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgbGV0IGhhbmRsZVByb2plY3RTZWxlY3QgPSBudWxsO1xuICBsZXQgaGFuZGxlQWRkUHJvamVjdCA9IG51bGw7XG5cbiAgbmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBoYW5kbGVQcm9qZWN0U2VsZWN0KHByb2plY3RJbmRleCk7XG4gIH0pO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0Q29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb2xvci1pbnB1dCcpLnZhbHVlO1xuICAgIGhhbmRsZUFkZFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RDb2xvcik7XG4gIH0pO1xuXG4gIGNvbnN0IHJlbmRlciA9IChwcm9qZWN0cykgPT4ge1xuICAgIG5hdkxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIHByb2plY3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgcHJvamVjdEl0ZW0uaWQgPSBpbmRleDtcbiAgICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgY29sb3JJbnB1dC50eXBlID0gJ2NvbG9yJztcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAncHJvamVjdC1uYW1lLWlucHV0JztcbiAgICBjb2xvcklucHV0LmNsYXNzTmFtZSA9ICdwcm9qZWN0LWNvbG9yLWlucHV0JztcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgIGZvcm0uYXBwZW5kKGlucHV0LCBjb2xvcklucHV0LCBzdWJtaXRCdXR0b24pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgfTtcblxuICAvLyBCSU5EXG4gIGNvbnN0IGJpbmRQcm9qZWN0U2VsZWN0ID0gKGhhbmRsZXIpID0+IHtcbiAgICBoYW5kbGVQcm9qZWN0U2VsZWN0ID0gaGFuZGxlcjtcbiAgfTtcblxuICBjb25zdCBiaW5kQWRkUHJvamVjdCA9IChoYW5kbGVyKSA9PiB7XG4gICAgaGFuZGxlQWRkUHJvamVjdCA9IGhhbmRsZXI7XG4gIH07XG5cbiAgY29uc3QgaW5pdCA9IChwcm9qZWN0cykgPT4ge1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcbiAgICByZW5kZXIocHJvamVjdHMpO1xuICAgIHJlbmRlckZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXQsIHJlbmRlciwgYmluZFByb2plY3RTZWxlY3QsIGJpbmRBZGRQcm9qZWN0XG4gIH07XG59KSgpO1xuXG4vLyBQcm9qZWN0c1ZpZXcuaW5pdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1ZpZXc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/projectsView.js\n");

/***/ }),

/***/ "./src/views/tasksView.js":
/*!********************************!*\
  !*** ./src/views/tasksView.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import Controller from '../controller';\n\nconst TasksView = (() => {\n  // const tasks = Controller.getActiveProjectTasks();\n  const tasksCollection = document.getElementById('tasks');\n\n  const render = (tasks) => {\n    tasksCollection.innerHTML = '';\n    tasks.forEach((task) => {\n      const taskItem = document.createElement('div');\n      taskItem.innerHTML = `\n        <h1>${task.title}</h1>\n        <p>${task.description}</p>\n        <p>${task.dueDate}</p>\n        <br>\n      `;\n      tasksCollection.append(taskItem);\n    });\n  };\n\n  const init = (tasks) => {\n    render(tasks);\n  };\n\n  return { init, render };\n})();\n\n// TasksView.init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TasksView);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvdGFza3NWaWV3LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Rhc2tzVmlldy5qcz9lM2Q4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXInO1xuXG5jb25zdCBUYXNrc1ZpZXcgPSAoKCkgPT4ge1xuICAvLyBjb25zdCB0YXNrcyA9IENvbnRyb2xsZXIuZ2V0QWN0aXZlUHJvamVjdFRhc2tzKCk7XG4gIGNvbnN0IHRhc2tzQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpO1xuXG4gIGNvbnN0IHJlbmRlciA9ICh0YXNrcykgPT4ge1xuICAgIHRhc2tzQ29sbGVjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza0l0ZW0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDE+JHt0YXNrLnRpdGxlfTwvaDE+XG4gICAgICAgIDxwPiR7dGFzay5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxwPiR7dGFzay5kdWVEYXRlfTwvcD5cbiAgICAgICAgPGJyPlxuICAgICAgYDtcbiAgICAgIHRhc2tzQ29sbGVjdGlvbi5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAodGFza3MpID0+IHtcbiAgICByZW5kZXIodGFza3MpO1xuICB9O1xuXG4gIHJldHVybiB7IGluaXQsIHJlbmRlciB9O1xufSkoKTtcblxuLy8gVGFza3NWaWV3LmluaXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFza3NWaWV3O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/views/tasksView.js\n");

/***/ })

/******/ });