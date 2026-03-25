/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/browser/browser-files/finder.tsx":
/*!**********************************************!*\
  !*** ./src/browser/browser-files/finder.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _shared_forms_finder_finder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/forms/finder/finder */ "./src/shared/forms/finder/finder.tsx");
/* harmony import */ var _shared_logic_funnelback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/logic/funnelback */ "./src/shared/logic/funnelback.ts");








/**
 * Finder entry
 *
 * @author Web Development
 * @copyright City, University of London 2019
 */




document.addEventListener("DOMContentLoaded", function () {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    var finders = document.querySelectorAll(".wrapper--v26-finder");
    if (finders) {
      Array.from(finders).forEach(function (finder) {
        if (finder.dataset.config) {
          (0,_shared_logic_funnelback__WEBPACK_IMPORTED_MODULE_8__.finderConfig)(finder.dataset.config).then(function (config) {
            var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_7__.createRoot)(finder);
            // @ts-expect-error: Unreachable code error
            root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_shared_forms_finder_finder__WEBPACK_IMPORTED_MODULE_9__["default"], {
              config: config,
              element: finder
            }));
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./src/shared/components/cards/finder__results__accommodation.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__accommodation.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../util */ "./src/shared/util.tsx");














/**
 * @module patterns/finder/components/cards/finder__results__accommodation
 * @author Web Development
 * @copyright City, University of London 2020
 */




/**
 * Render a Funnelback result as an accommodation card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

function Finder__Results__Accommodation(props) {
  var mph = 60,
    calculateTime = function calculateTime(minutes) {
      return Math.floor(minutes / mph) > 0 ? Math.floor(minutes / mph) + " hour " + minutes % mph : minutes;
    },
    thumbnail = props.details && props.details.listMetadata && props.details.listMetadata.thumbnail && props.details.listMetadata.thumbnail[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("img", {
      src: props.details.listMetadata.thumbnail[0],
      alt: "",
      className: "card__thumbnail"
    }),
    level = props.details && props.details.listMetadata && props.details.listMetadata.level && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", {
      className: "fas fa-fw fa-graduation-cap icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", {
      className: "sr-only"
    }, "Level:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", null, (0,_util__WEBPACK_IMPORTED_MODULE_13__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.level.join("|")).split("|").join(" or "))),
    features = props.details.listMetadata ? Object.keys(props.details.listMetadata).filter(function (meta) {
      var key = meta;
      var value = props.details.listMetadata[key];
      return ["accessible", "catered", "ensuite"].includes(meta) && value && value[0] === "Yes";
    }).map(function (meta) {
      return meta.replace(/ensuite/, "en suite");
    }).sort().join(", ") : "",
    type = props.details && props.details.listMetadata && props.details.listMetadata.type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", {
      className: "sr-only"
    }, "Type:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", null, props.details.listMetadata.type.length > 2 ? (0,_util__WEBPACK_IMPORTED_MODULE_13__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.type.join("|")).split("|").slice(0, -1).join(", ") + " or " + (0,_util__WEBPACK_IMPORTED_MODULE_13__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.type.join("|")).split("|").slice(-1) : (0,_util__WEBPACK_IMPORTED_MODULE_13__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.type.join("|")).split("|").join(" or "), features && " (" + features + ")")),
    price = props.details.listMetadata && props.details.listMetadata.price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", {
      className: "fas fa-fw fa-pound-sign icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", {
      className: "sr-only"
    }, "Price:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", null, props.details.listMetadata.price[0], " (", props.details.listMetadata.deposit && props.details.listMetadata.deposit[0], " ", "deposit)")),
    transport = props.details.listMetadata && props.details.listMetadata.transport && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement((react__WEBPACK_IMPORTED_MODULE_12___default().Fragment), null, " ", "(", calculateTime(parseInt(props.details.listMetadata.transport[0])), " ", "minutes by public transport)"),
    location = props.details.listMetadata && props.details.listMetadata.location && props.details.listMetadata.location[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement((react__WEBPACK_IMPORTED_MODULE_12___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", {
      className: "sr-only"
    }, "Distance to"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
      className: "card__details__location card__details__location-".concat(props.details.listMetadata.location[0].trim().replace(" ", "-").toLowerCase())
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", {
      className: "fas fa-fw fa-location-dot icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", null, props.details.listMetadata.location[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", {
      className: "sr-only"
    }, " campus"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", {
      className: "sr-only"
    }, "Distance to Northampton Square campus:"),
    distance = props.details.listMetadata && props.details.listMetadata.walk && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", {
      className: "fas fa-fw fa-walking icon",
      "aria-hidden": "true"
    }), " ", location, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("span", null, calculateTime(parseInt(props.details.listMetadata.walk[0])), " ", "minutes walk to campus", transport));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("li", {
    className: "card card--accommodation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, thumbnail, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), distance, type, price, level)));
}
Finder__Results__Accommodation.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Accommodation);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__bestbet.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__bestbet.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/cards/finder__results__bestbet
 * @author Web Development
 * @copyright City, University of London 2019
 */



/**
 * Render a Funnelback best bet as a results card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__BestBet(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--bestbet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: props.details.displayUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__heading"
  }, props.details.titleHtml), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "card__description"
  }, props.details.descriptionHtml))));
}
Finder__Results__BestBet.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__BestBet);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__card.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__card.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _finder_results_accommodation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finder__results__accommodation */ "./src/shared/components/cards/finder__results__accommodation.tsx");
/* harmony import */ var _finder_results_casestudy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder__results__casestudy */ "./src/shared/components/cards/finder__results__casestudy.tsx");
/* harmony import */ var _finder_results_centre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finder__results__centre */ "./src/shared/components/cards/finder__results__centre.tsx");
/* harmony import */ var _finder_results_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finder__results__contact */ "./src/shared/components/cards/finder__results__contact.tsx");
/* harmony import */ var _finder_results_course__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finder__results__course */ "./src/shared/components/cards/finder__results__course.tsx");
/* harmony import */ var _finder_results_coursev26__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder__results__coursev26 */ "./src/shared/components/cards/finder__results__coursev26.tsx");
/* harmony import */ var _finder_results_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder__results__event */ "./src/shared/components/cards/finder__results__event.tsx");
/* harmony import */ var _finder_results_funding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finder__results__funding */ "./src/shared/components/cards/finder__results__funding.tsx");
/* harmony import */ var _finder_results_generic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./finder__results__generic */ "./src/shared/components/cards/finder__results__generic.tsx");
/* harmony import */ var _finder_results_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./finder__results__module */ "./src/shared/components/cards/finder__results__module.tsx");
/* harmony import */ var _finder_results_news__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finder__results__news */ "./src/shared/components/cards/finder__results__news.tsx");
/* harmony import */ var _finder_results_profile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./finder__results__profile */ "./src/shared/components/cards/finder__results__profile.tsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _finder_results_research__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./finder__results__research */ "./src/shared/components/cards/finder__results__research.tsx");


/**
 * @module patterns/finder/components/cards/finder__results__card
 * @author Web Development
 * @copyright City, University of London 2019
 */
















/**
 * Render a Funnelback result as the appropriate card type.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__Card(props) {
  switch (props.type) {
    case "accommodation":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_accommodation__WEBPACK_IMPORTED_MODULE_1__["default"], {
        details: props.details
      });
    case "casestudy":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_casestudy__WEBPACK_IMPORTED_MODULE_2__["default"], {
        details: props.details
      });
    case "centre":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_centre__WEBPACK_IMPORTED_MODULE_3__["default"], {
        details: props.details
      });
    case "contact":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_contact__WEBPACK_IMPORTED_MODULE_4__["default"], {
        details: props.details
      });
    case "course":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_course__WEBPACK_IMPORTED_MODULE_5__["default"], {
        details: props.details,
        query: props.query
      });
    case "v26-course":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_coursev26__WEBPACK_IMPORTED_MODULE_6__["default"], {
        details: props.details,
        query: props.query
      });
    case "event":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_event__WEBPACK_IMPORTED_MODULE_7__["default"], {
        details: props.details,
        matrixState: props.matrixState
      });
    case "funding":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_funding__WEBPACK_IMPORTED_MODULE_8__["default"], {
        details: props.details,
        query: props.query
      });
    case "module":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_module__WEBPACK_IMPORTED_MODULE_9__["default"], {
        details: props.details,
        query: props.query
      });
    case "news":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_news__WEBPACK_IMPORTED_MODULE_10__["default"], {
        details: props.details,
        defaultImage: props.defaultImage,
        matrixState: props.matrixState
      });
    case "profile":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_profile__WEBPACK_IMPORTED_MODULE_11__["default"], {
        details: props.details,
        query: props.query
      });
    case "research":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_research__WEBPACK_IMPORTED_MODULE_12__["default"], {
        details: props.details,
        query: props.query
      });
    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_generic__WEBPACK_IMPORTED_MODULE_13__["default"], {
        details: props.details
      });
  }
}
Finder__Results__Card.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
  defaultImage: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Card);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__casestudy.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__casestudy.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




/**
 * @module patterns/finder/components/cards/finder__results__casestudy
 * @author Web Development
 * @copyright City, University of London 2020
 */



/**
 * Render a Funnelback result as a case study card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__CaseStudy(props) {
  var subtitle = props.details.listMetadata && props.details.listMetadata.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__type"
    }, props.details.listMetadata.status[0]) : props.details.listMetadata && props.details.listMetadata.type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__type"
    }, props.details.listMetadata.type[0]),
    school = props.details.listMetadata && props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "School:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(", and "))),
    department = props.details.listMetadata && props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Department:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(", and "))),
    centre = props.details.listMetadata && props.details.listMetadata.centre && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "fas fa-fw fa-vial icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Research centre:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, props.details.listMetadata.centre.length > 2 ? props.details.listMetadata.centre.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.centre.slice(-1) : props.details.listMetadata.centre.join(", and ")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
    className: "card card--casestudy"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), subtitle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata && props.details.listMetadata.c && props.details.listMetadata.c[0]), school, department, centre)));
}
Finder__Results__CaseStudy.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__CaseStudy);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__centre.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__centre.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/shared/util.tsx");




/**
 * @module patterns/finder/components/cards/finder__results__centre
 * @author Web Development
 * @copyright City, University of London 2020
 */




/**
 * Render a Funnelback result as a centre card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__Centre(props) {
  var school = props.details.listMetadata && props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "School:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(", and "))),
    department = props.details.listMetadata && props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "fas fa-fw fa-building icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Department:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(", and "))),
    subject = props.details.listMetadata && props.details.listMetadata.related && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__type"
    }, props.details.listMetadata.related.length > 2 ? (0,_util__WEBPACK_IMPORTED_MODULE_3__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.related.join("|")).split("|").slice(0, -1).join(", ") + " and " + (0,_util__WEBPACK_IMPORTED_MODULE_3__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.related.join("|")).split("|").slice(-1) : (0,_util__WEBPACK_IMPORTED_MODULE_3__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.related.join("|")).split("|").join(" and "));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
    className: "card card--centre"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), subject, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata && props.details.listMetadata.c && props.details.listMetadata.c[0]), school, department)));
}
Finder__Results__Centre.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Centre);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__contact.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__contact.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/cards/finder__results__contact
 * @author Web Development
 * @copyright City, University of London 2019
 */



/**
 * Render a Funnelback result as a contact card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__Contact(props) {
  var department = props.details.listMetadata && props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Department:"), " ", props.details.listMetadata.department[0]),
    school = props.details.listMetadata && props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "School:"), " ", props.details.listMetadata.school[0]),
    jobtitle = props.details.listMetadata && props.details.listMetadata.jobtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__type"
    }, props.details.listMetadata.jobtitle[0]),
    email = props.details.listMetadata && props.details.listMetadata.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-envelope icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Email:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "mailto:" + props.details.listMetadata.email[0]
    }, props.details.listMetadata.email[0])),
    altemail = props.details.listMetadata && props.details.listMetadata.altemail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fad fa-user icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Executive Assistant:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "mailto:" + props.details.listMetadata.altemail[0]
    }, props.details.listMetadata.altemail[0])),
    telephone = props.details.listMetadata && props.details.listMetadata.telephone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-phone fa-rotate-90 icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Telephone:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "tel:" + props.details.listMetadata.telephone[0]
    }, props.details.listMetadata && props.details.listMetadata.friendlytelephone && props.details.listMetadata.friendlytelephone[0])),
    room = props.details.listMetadata && props.details.listMetadata.room && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-door-open icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Room:"), " ", props.details.listMetadata.room[0]),
    enquiry = props.details.listMetadata && props.details.listMetadata.enquiryurl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fas fa-fw fa-edit icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Enquiries:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: props.details.listMetadata.enquiryurl[0]
    }, props.details.listMetadata && props.details.listMetadata.enquirylabel && props.details.listMetadata.enquirylabel[0]));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), jobtitle, school, department, room, email, telephone, enquiry, altemail)));
}
Finder__Results__Contact.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Contact);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__course.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__course.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _results_formatLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../results/formatLabel */ "./src/shared/components/results/formatLabel.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../util */ "./src/shared/util.tsx");















/**
 * @module patterns/finder/components/cards/finder__results__course
 * @author Web Development
 * @copyright City, University of London 2019
 */





/**
 * Render a Funnelback result as a course card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

var externalSiteUrl = ["www.citystgeorges.ac.uk"];
function Finder__Results__Course(props) {
  var subtitle = props.details.listMetadata && props.details.listMetadata.type && props.details.listMetadata.type[0] || props.details.listMetadata && props.details.listMetadata.level && props.details.listMetadata.level[0] || null,
    award = props.details.listMetadata && props.details.listMetadata.qualification && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
      className: "fas fa-fw fa-award icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, "Award", props.details.listMetadata.qualification.length > 1 && "s", ":"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, props.details.listMetadata.qualification.join(", "))),
    duration = props.details.listMetadata && props.details.listMetadata.duration && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
      className: "fal fa-fw fa-clock icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, "Duration:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, props.details.listMetadata.duration[0])),
    method = props.details.listMetadata && props.details.listMetadata.method && props.details.listMetadata.level && props.details.listMetadata.level[0] !== "Short courses and professional development" && (props.query.facets && props.query.facets.method || props.query.query.indexOf(props.details.listMetadata.method[0]) >= 0 || props.details.listMetadata.method[0].indexOf("Online") >= 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
      className: "fa-solid fa-book-open-reader icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, "Method", props.details.listMetadata.method.length > 1 && "s", " of study:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, (0,_util__WEBPACK_IMPORTED_MODULE_14__.uppercaseFirstLetterLowercaseRest)(Array.from(new Set(props.details.listMetadata.method)).join("|") // Remove any duplicates & format
    ).split("|").join(", "))),
    location = props.details.listMetadata && String(props.details.listMetadata.location).toLowerCase() !== "tooting" ? props.details.listMetadata.location && props.query.facets && props.query.facets.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
      className: "fas fa-fw fa-map-marker-alt icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, "Location:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, props.details.listMetadata.location.join("|") === "Online|Online" ? "Online" : props.details.listMetadata.location.join(", "))) : null,
    school = props.details.listMetadata && props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, "School:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, props.details.listMetadata.school.map(function (e, i) {
      return i === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), {
        key: i
      }, e.replace("and", "&")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), {
        key: i
      }, "| ", e);
    }))),
    // City St George's label temporarily in place according to branding guidelines
    stGeorgesLabel = props.details.listMetadata && String(props.details.listMetadata.location).toLowerCase() === "tooting" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "card__label card--course__label--stgeorges"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
      className: "fas fa-fw fa-map-marker-alt icon",
      "aria-hidden": "true"
    }), " ", "Tooting Campus")) : null,
    // City and Business School use different metadata values; check for both
    clearing = props.details.listMetadata && props.details.listMetadata.clearing && ["Yes", "yes"].includes(props.details.listMetadata.clearing[0]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "card__label card--course__label--clearing"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", {
      className: "card__label card--course__label--clearing"
    }, "Clearing")),
    external = !externalSiteUrl.some(function (s) {
      return props.details.indexUrl && props.details.indexUrl.indexOf(s) >= 0;
    }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
      className: "fas fa-sharp fa-external-link icon",
      "aria-label": "(external link)"
    })) : null,
    courseCode = props.details.listMetadata && props.details.listMetadata.code && (["Undergraduate degree", "Foundation course", "Postgraduate taught degree"].some(function (s) {
      return props.details.listMetadata && props.details.listMetadata.level && props.details.listMetadata.level.indexOf(s) >= 0;
    }) || props.query.query.indexOf(props.details.listMetadata.code[0]) >= 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
      className: "fas fa-fw fa-graduation-cap icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, "Course code", props.details.listMetadata.code.length > 1 && "s", ":"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, props.details.listMetadata.code.join("/"))) : null,
    entryYears = props.details.listMetadata && props.details.listMetadata.entryyears && (["Undergraduate degree"].some(function (s) {
      return props.details.listMetadata && props.details.listMetadata.level && props.details.listMetadata.level.indexOf(s) >= 0;
    }) || props.query.query.indexOf(props.details.listMetadata.entryyears[0]) >= 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
      className: "fas fa-fw fa-calendar icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, "Year", props.details.listMetadata.entryyears.length > 1 && "s", " of entry:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, props.details.listMetadata.entryyears.join("/"))) : null,
    description = props.details.listMetadata && props.details.listMetadata.c && props.details.listMetadata.c[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", {
      className: "card__description"
    }, props.query.query ? (0,_results_formatLabel__WEBPACK_IMPORTED_MODULE_15__["default"])(props.details.listMetadata.c[0], props.query.query) : props.details.listMetadata.c[0]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("li", {
    className: "card card--course"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "wrapper--card__label__details"
  }, clearing, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h3", {
    className: "card__heading"
  }, props.query.query ? (0,_results_formatLabel__WEBPACK_IMPORTED_MODULE_15__["default"])(props.details.title, props.query.query) : props.details.title, external), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("p", {
    className: "card__type"
  }, props.query.query && subtitle ? (0,_results_formatLabel__WEBPACK_IMPORTED_MODULE_15__["default"])(subtitle, props.query.query) : subtitle && subtitle), description, stGeorgesLabel, school, award, duration, courseCode, entryYears, method, location))));
}
Finder__Results__Course.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Course);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__coursev26.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__coursev26.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _results_formatLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../results/formatLabel */ "./src/shared/components/results/formatLabel.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../util */ "./src/shared/util.tsx");
















/**
 * @module patterns/finder/components/cards/finder__results__course
 * @author Web Development
 * @copyright City, University of London 2019
 */





/**
 * Render a Funnelback result as a course card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */

var externalSiteUrl = ["www.citystgeorges.ac.uk"];
function Finder__Results__Coursev26(props) {
  var _props$details$listMe, _props$details$listMe2, _props$details$listMe3, _props$details$listMe4, _props$details$listMe5, _props$query$facets, _props$query$facets2, _props$details$listMe6, _props$details$listMe7, _props$details$listMe8, _props$details;
  var subtitle = ((_props$details$listMe = props.details.listMetadata) === null || _props$details$listMe === void 0 || (_props$details$listMe = _props$details$listMe.type) === null || _props$details$listMe === void 0 ? void 0 : _props$details$listMe[0]) || ((_props$details$listMe2 = props.details.listMetadata) === null || _props$details$listMe2 === void 0 || (_props$details$listMe2 = _props$details$listMe2.level) === null || _props$details$listMe2 === void 0 ? void 0 : _props$details$listMe2[0]) || null,
    award = props.details.listMetadata && props.details.listMetadata.qualification && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
      className: "fas fa-fw fa-award icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, "Award", props.details.listMetadata.qualification.length > 1 && "s", ":"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, props.details.listMetadata.qualification.join(", "))),
    duration = ((_props$details$listMe3 = props.details.listMetadata) === null || _props$details$listMe3 === void 0 ? void 0 : _props$details$listMe3.duration) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, "Duration:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("strong", null, props.details.listMetadata.duration[0]))),
    method = ((_props$details$listMe4 = props.details.listMetadata) === null || _props$details$listMe4 === void 0 ? void 0 : _props$details$listMe4.method) && ((_props$details$listMe5 = props.details.listMetadata) === null || _props$details$listMe5 === void 0 || (_props$details$listMe5 = _props$details$listMe5.level) === null || _props$details$listMe5 === void 0 ? void 0 : _props$details$listMe5[0]) !== "Short courses and professional development" && (((_props$query$facets = props.query.facets) === null || _props$query$facets === void 0 ? void 0 : _props$query$facets.method) || props.query.query.indexOf(props.details.listMetadata.method[0]) >= 0 || props.details.listMetadata.method[0].indexOf("Online") >= 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
      className: "fa-solid fa-book-open-reader icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, "Method", props.details.listMetadata.method.length > 1 && "s", " of study:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, (0,_util__WEBPACK_IMPORTED_MODULE_15__.uppercaseFirstLetterLowercaseRest)(Array.from(new Set(props.details.listMetadata.method)).join("|") // Remove any duplicates & format
    ).split("|").join(", "))),
    location = props.details.listMetadata && String(props.details.listMetadata.location).toLowerCase() !== "tooting" ? props.details.listMetadata.location && ((_props$query$facets2 = props.query.facets) === null || _props$query$facets2 === void 0 ? void 0 : _props$query$facets2.location) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
      className: "fas fa-fw fa-map-marker-alt icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, "Location:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("strong", null, props.details.listMetadata.location.join("|") === "Online|Online" ? "Online" : props.details.listMetadata.location.join(", ")))) : null,
    school = ((_props$details$listMe6 = props.details.listMetadata) === null || _props$details$listMe6 === void 0 ? void 0 : _props$details$listMe6.school) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, "School:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("strong", null, props.details.listMetadata.school.map(function (e, i) {
      return i === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), {
        key: i
      }, e.replace("and", "&")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), {
        key: i
      }, "| ", e);
    })))),
    // City St George's label temporarily in place according to branding guidelines
    stGeorgesLabel = props.details.listMetadata && String(props.details.listMetadata.location).toLowerCase() === "tooting" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "card__label card--course__label--stgeorges"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
      className: "fas fa-fw fa-map-marker-alt icon",
      "aria-hidden": "true"
    }), " ", "Tooting Campus")) : null,
    // City and Business School use different metadata values; check for both
    clearing = ((_props$details$listMe7 = props.details.listMetadata) === null || _props$details$listMe7 === void 0 ? void 0 : _props$details$listMe7.clearing) && ["Yes", "yes"].includes(props.details.listMetadata.clearing[0]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
      className: "card__label card--course__label--clearing"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
      className: "card__label card--course__label--clearing"
    }, "Clearing")),
    external = !externalSiteUrl.some(function (s) {
      return props.details.indexUrl && props.details.indexUrl.indexOf(s) >= 0;
    }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
      className: "fas fa-sharp fa-external-link icon",
      "aria-label": "(external link)"
    })) : null,
    courseCode = props.details.listMetadata && props.details.listMetadata.code && (["Undergraduate degree", "Foundation course", "Postgraduate taught degree"].some(function (s) {
      return props.details.listMetadata && props.details.listMetadata.level && props.details.listMetadata.level.indexOf(s) >= 0;
    }) || props.query.query.indexOf(props.details.listMetadata.code[0]) >= 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, "UCAS code", props.details.listMetadata.code.length > 1 && 's', ":"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("strong", null, props.details.listMetadata.code.join('/')))) : null;

  // compute entryYears separately; ensure we don't rely on potentially undefined metadata
  var entryYears = null;
  var _entryyears = (_props$details$listMe8 = props.details.listMetadata) === null || _props$details$listMe8 === void 0 ? void 0 : _props$details$listMe8.entryyears;
  if (_entryyears && _entryyears.length > 0) {
    entryYears = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, "Year", _entryyears.length > 1 && 's', " of entry:"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, _entryyears.map(function (year, idx) {
      var baseUrl = props.details.liveUrl;
      var href = idx > 0 ? "".concat(baseUrl, "/").concat(year) : baseUrl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), {
        key: year
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
        href: href
      }, year), idx < _entryyears.length - 1 ? ', ' : '');
    })));
  }
  var description = ((_props$details = props.details) === null || _props$details === void 0 || (_props$details = _props$details.listMetadata) === null || _props$details === void 0 || (_props$details = _props$details.c) === null || _props$details === void 0 ? void 0 : _props$details[0]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
    className: "card__description"
  }, props.query.query ? (0,_results_formatLabel__WEBPACK_IMPORTED_MODULE_16__["default"])(props.details.listMetadata.c[0], props.query.query) : props.details.listMetadata.c[0]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
    className: "card card--v26-course"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "wrapper--card__label__details"
  }, clearing, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h3", {
    className: "card__heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    href: props.details.liveUrl
  }, props.query.query ? (0,_results_formatLabel__WEBPACK_IMPORTED_MODULE_16__["default"])(props.details.title, props.query.query) : props.details.title, external)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
    className: "card__type"
  }, props.query.query && subtitle ? (0,_results_formatLabel__WEBPACK_IMPORTED_MODULE_16__["default"])(subtitle, props.query.query) : subtitle && subtitle), description, stGeorgesLabel, duration || courseCode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "card--v26-course__duration-and-code"
  }, duration, courseCode) : null, entryYears, method, location || school ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "card--v26-course__location"
  }, school, location) : null)));
}
Finder__Results__Coursev26.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Coursev26);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__event.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__event.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../util */ "./src/shared/util.tsx");
















/**
 * @module patterns/finder/components/cards/finder__results__event
 * @author Web Development
 * @copyright City, University of London 2020
 */




function formatShortDate(dateString) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    date = new Date(dateString),
    month = months[date.getUTCMonth()];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
    className: "card--event__label--shortdate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, date.getUTCDate()), " ", month);
}
function compareDates(startDate, endDate, showTime) {
  var sDate = new Date(startDate),
    eDate = new Date(endDate),
    noTimeSDate = new Date(sDate.setUTCHours(0, 0, 0)),
    noTimeEDate = new Date(eDate.setUTCHours(0, 0, 0)),
    time = showTime ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, ", ", (0,_util__WEBPACK_IMPORTED_MODULE_15__.formatTime)(startDate), " - ", (0,_util__WEBPACK_IMPORTED_MODULE_15__.formatTime)(endDate, true)) : null;
  return noTimeSDate.getTime() === noTimeEDate.getTime() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
    className: "card__type true"
  }, (0,_util__WEBPACK_IMPORTED_MODULE_15__.formatReactDate)(sDate), time) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
    className: "card__type false"
  }, (0,_util__WEBPACK_IMPORTED_MODULE_15__.formatReactDate)(sDate), " - ", (0,_util__WEBPACK_IMPORTED_MODULE_15__.formatReactDate)(eDate), time);
}

/**
 * Render a Funnelback result as an event card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__Event(props) {
  var shortDate = props.details.listMetadata && props.details.listMetadata.d && formatShortDate(props.details.listMetadata.d[0]),
    location = props.details.listMetadata && props.details.listMetadata.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
      className: "fas fa-fw icon fa-map-marker-alt",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, "Location:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, props.details.listMetadata.location.join(", "))),
    audience = props.details.listMetadata && props.details.listMetadata.audience && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
      className: "fas fa-fw icon fa-users",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, "Audience:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", null, Array.from(new Set(props.details.listMetadata.audience)).map(function (str) {
      var capitalized = "".concat(str[0].toUpperCase()).concat(str.slice(1));
      return capitalized.replace(/-/g, " ");
    }).join("|").split("|").join("; "))),
    thumbnail = props.details.listMetadata && props.details.listMetadata.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("img", {
      src: props.details.listMetadata.thumbnail[0],
      alt: "",
      className: "card__thumbnail"
    }),
    eventStartDate = props.details.listMetadata && props.details.listMetadata.d && props.details.listMetadata.d[0],
    eventEndDate = props.details.listMetadata && props.details.listMetadata.d && props.details.listMetadata.d[1],
    eventLabel = eventStartDate && eventEndDate && props.details.listMetadata && props.details.listMetadata.displayTime && compareDates(eventStartDate, eventEndDate, parseInt(props.details.listMetadata.displayTime[0]));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
    className: "card card--event card--landscape"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, thumbnail, shortDate, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h3", {
    className: "card__heading"
  }, (0,_util__WEBPACK_IMPORTED_MODULE_15__.decodeHtml)(props.details.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata && props.details.listMetadata.c && (0,_util__WEBPACK_IMPORTED_MODULE_15__.decodeHtml)(props.details.listMetadata.c[0])), eventLabel, location, audience)));
}
Finder__Results__Event.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Event);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__funding.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__funding.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util */ "./src/shared/util.tsx");






/**
 * @module patterns/finder/components/cards/finder__results__funding
 * @author Web Development
 * @copyright City, University of London 2020
 */




/**
 * Render a Funnelback result as a funding card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__Funding(props) {
  var school = props.details.listMetadata && props.details.listMetadata.school && props.query.facets && props.query.facets.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "School:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(", ") + ", or " + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(", or "))),
    hardship = props.details.listMetadata && props.details.listMetadata.hardship && props.details.listMetadata.hardship[0] === "1" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
      className: "card--funding__label--hardship"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, "Hardship funding")),
    programme = props.details.listMetadata && props.details.listMetadata.programme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      className: "fas fa-fw fa-graduation-cap icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Programme", props.details.listMetadata.programme.length > 2 ? "s" : null, ":"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, props.details.listMetadata.programme.length > 2 ? (0,_util__WEBPACK_IMPORTED_MODULE_5__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.programme.join("|")).split("|").slice(0, -1).join(", ") + " or " + (0,_util__WEBPACK_IMPORTED_MODULE_5__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.programme.join("|")).split("|").slice(-1) : (0,_util__WEBPACK_IMPORTED_MODULE_5__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.programme.join("|")).split("|").join(" or "))),
    level = props.details.listMetadata && props.details.listMetadata.level && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      className: "fas fa-fw fa-award icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Programme level:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, props.details.listMetadata.level.length > 2 ? (0,_util__WEBPACK_IMPORTED_MODULE_5__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.level.join("|")).split("|").slice(0, -1).join(", ") + " or " + (0,_util__WEBPACK_IMPORTED_MODULE_5__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.level.join("|")).split("|").slice(-1) : (0,_util__WEBPACK_IMPORTED_MODULE_5__.uppercaseFirstLetterLowercaseRest)(props.details.listMetadata.level.join("|")).split("|").join(" or "))),
    feestatus = props.details.listMetadata && props.details.listMetadata.feestatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      className: "far fa-fw fa-globe-europe icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Fee status:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, props.details.listMetadata.feestatus.length > 2 ? props.details.listMetadata.feestatus.slice(0, -1).join(", ") + " or " + props.details.listMetadata.feestatus.slice(-1) : props.details.listMetadata.feestatus.join(" or ")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("li", {
    className: "card card--funding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, hardship, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title.replace("&amp;", "&")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
    className: "card__type"
  }, props.details.listMetadata && props.details.listMetadata.type && props.details.listMetadata.type[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata && props.details.listMetadata.c && props.details.listMetadata.c[0]), level, programme, feestatus, school)));
}
Finder__Results__Funding.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Funding);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__generic.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__generic.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);







/**
 * @module patterns/finder/components/cards/finder__results__generic
 * @author Web Development
 * @copyright City, University of London 2019
 */



/**
 * Render a Funnelback result as a generic card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__Generic(props) {
  var school = props.details.listMetadata && props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, "School:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(", and "))),
    department = props.details.listMetadata && props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, "Department:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(", and "))),
    title = props.details.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h3", {
      className: "card__heading"
    }, props.details.title.indexOf("School") >= 0 ? props.details.title.replace("&amp;", "&") : props.details.title);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", {
    className: "card card--generic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    className: "card__details__text"
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata && props.details.listMetadata.c && props.details.listMetadata.c[0]), school, department)));
}
Finder__Results__Generic.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Generic);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__module.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__module.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);







/**
 * @module patterns/finder/components/cards/finder__results__module
 * @author Web Development
 * @copyright City, University of London 2020
 */



/**
 * Render a Funnelback result as a module card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__Module(props) {
  var location = props.details.listMetadata && props.details.listMetadata.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
      className: "fas fa-fw fa-map-marker-alt icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, "Location:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, props.details.listMetadata.location[0])),
    title = props.details.listMetadata && props.details.listMetadata.code ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
      className: "card--module__code"
    }, props.details.listMetadata.code[0]), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, props.details.title)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, props.details.title)),
    school = props.details.listMetadata && props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, "School:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(", ") + ", and " + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(", and "))),
    term = props.details.listMetadata && props.details.listMetadata.term && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
      className: "far fa-fw fa-calendar icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, "Semester:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", null, props.details.listMetadata.term.length > 2 ? "All year" : props.details.listMetadata.term.join(" or "))),
    topic = props.details.listMetadata && props.details.listMetadata.related && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
      className: "card__type"
    }, props.details.listMetadata.related.sort().map(function (topic, i) {
      return i > 0 ? topic.toLowerCase() : topic;
    }).join(", ")),
    specification = props.details.listMetadata && props.details.listMetadata.specification && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
      className: "far fa-fw fa-file-pdf icon",
      "aria-label": "PDF"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", {
      href: props.details.listMetadata.specification[0]
    }, "Download module specification"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", {
    className: "card card--module"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    className: "card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h3", {
    className: "card__heading"
  }, title), topic, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata && props.details.listMetadata.c && props.details.listMetadata.c[0]), term, school, location, specification)));
}
Finder__Results__Module.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Module);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__news.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__news.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/shared/util.tsx");
/* harmony import */ var _tools_finder_toolTip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/finder__toolTip */ "./src/shared/components/tools/finder__toolTip.tsx");




/**
 * @module patterns/finder/components/cards/finder__results__news
 * @author Web Development
 * @copyright City, University of London 2020
 */





/**
 * Render a Funnelback result as a generic card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__News(props) {
  var thumbnailSourceName = props.details.listMetadata && props.details.listMetadata.thumbnailSourceName && props.details.listMetadata.thumbnailSourceName[0] || false,
    thumbnailSourceUrl = props.details.listMetadata && props.details.listMetadata.thumbnailSourceUrl && props.details.listMetadata.thumbnailSourceUrl[0] || false,
    thumbnailAuthorName = props.details.listMetadata && props.details.listMetadata.thumbnailAuthorName && props.details.listMetadata.thumbnailAuthorName[0] || false,
    thumbnailAuthorUrl = props.details.listMetadata && props.details.listMetadata.thumbnailAuthorUrl && props.details.listMetadata.thumbnailAuthorUrl[0] || false,
    thumbnailLicenceType = props.details.listMetadata && props.details.listMetadata.thumbnailLicenceType && props.details.listMetadata.thumbnailLicenceType[0] || false,
    thumbnailLicenceUrl = props.details.listMetadata && props.details.listMetadata.thumbnailLicenceUrl && props.details.listMetadata.thumbnailLicenceUrl[0] || false,
    displayToolTip = props.details.listMetadata && props.details.listMetadata.thumbnailToolTip && (0,_util__WEBPACK_IMPORTED_MODULE_3__.toBool)(props.details.listMetadata.thumbnailToolTip[0]);
  var formattedDate = props.details.listMetadata && props.details.listMetadata.d && (0,_util__WEBPACK_IMPORTED_MODULE_3__.formatReactDate)(new Date(props.details.listMetadata.d[0])),
    dateString = props.details.listMetadata && props.details.listMetadata.d && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__type"
    }, formattedDate),
    hashtags = props.details.listMetadata && props.details.listMetadata.hashtagtext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "fad fa-fw fa-hashtag icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Hashtag", props.details.listMetadata.hashtagtext.length > 1 && "s", ":"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, props.details.listMetadata.hashtagtext.join(", "))),
    thumbnail = props.details.listMetadata && props.details.listMetadata.thumbnailTiny && props.details.listMetadata.thumbnailTiny[0] && props.details.listMetadata.thumbnailMax && props.details.listMetadata.thumbnailMax[0] && props.details.listMetadata.thumbnailMobile && props.details.listMetadata.thumbnailMobile[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("source", {
      srcSet: props.details.listMetadata.thumbnailTiny[0],
      media: "(max-width: 375px)"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("source", {
      srcSet: props.details.listMetadata.thumbnailMax[0],
      media: "(min-width: 3840px)"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
      src: props.details.listMetadata.thumbnailMobile[0],
      alt: props.details.title
    })) : props.details.listMetadata && props.details.listMetadata.thumbnail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
      src: props.details.listMetadata.thumbnail[0],
      alt: "",
      className: "card__thumbnail"
    }) : null,
    defaultImg = props.defaultImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
      src: props.defaultImage,
      alt: "News default image",
      className: "card__thumbnail"
    }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
    className: "card card--news"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_tools_finder_toolTip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    thumbnailSourceName: thumbnailSourceName,
    thumbnailSourceUrl: thumbnailSourceUrl,
    thumbnailAuthorName: thumbnailAuthorName,
    thumbnailAuthorUrl: thumbnailAuthorUrl,
    thumbnailLicenceType: thumbnailLicenceType,
    thumbnailLicenceUrl: thumbnailLicenceUrl,
    displayToolTip: displayToolTip
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details"
  }, thumbnail ? thumbnail : defaultImg, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card__details__text"
  }, dateString, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", {
    className: "card__heading"
  }, props.matrixState ? props.details.title : (0,_util__WEBPACK_IMPORTED_MODULE_3__.decodeHtml)(props.details.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata && props.details.listMetadata.c && !props.matrixState ? (0,_util__WEBPACK_IMPORTED_MODULE_3__.decodeHtml)(props.details.listMetadata.c[0]) : props.details.listMetadata && props.details.listMetadata.c ? props.details.listMetadata.c[0] : null), hashtags)));
}
Finder__Results__News.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__News);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__profile.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__profile.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);






/**
 * @module patterns/finder/components/cards/finder__results__profile
 * @author Web Development
 * @copyright City, University of London 2019
 */



/**
 * Render a Funnelback result as a profile card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__Profile(props) {
  var school = props.details.listMetadata && props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "School:"), " ", props.details.listMetadata.school[0].replace("and", "&")),
    department = props.details.listMetadata && props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Department:"), " ", props.details.listMetadata.department[0]),
    headshot = props.details.listMetadata && props.details.listMetadata.thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
      className: "card__thumbnail"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("img", {
      src: props.details.listMetadata.thumbnail[0],
      alt: "Photo of " + props.details.title
    })),
    EDIAmbassadors = props.details.listMetadata && props.details.listMetadata.ediAmbassador && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-people-roof icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "EDI Ambassador")),
    thumbnailExist = props.details.listMetadata && props.details.listMetadata.thumbnail && "card--profile--thumbnailAvailable",
    country = props.query.facets && props.query.facets.country && props.details.listMetadata && props.details.listMetadata.country && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      className: "fad fa-fw fa-globe-europe icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Country:"), " ", props.details.listMetadata.country.length > 2 ? props.details.listMetadata.country.slice(0, -1).join(", ") + " and " + props.details.listMetadata.country.slice(-1) : props.details.listMetadata.country.join(" and "));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("li", {
    className: "card card--profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
    href: props.details.liveUrl,
    className: "card__anchor card__details ".concat(thumbnailExist)
  }, headshot, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
    className: "card__type"
  }, props.details.listMetadata && props.details.listMetadata.jobtitle && props.details.listMetadata.jobtitle[0]), school, department, country, EDIAmbassadors)));
}
Finder__Results__Profile.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Profile);

/***/ }),

/***/ "./src/shared/components/cards/finder__results__research.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__research.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @module patterns/finder/components/cards/finder__results__research
 * @author Web Development
 * @copyright City, University of London 2021
 */



// import parse from 'html-react-parser';

/**
 * Render a Funnelback result as a PhD research project card.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__Research(props) {
  var school = props.details.listMetadata && props.details.listMetadata.school && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-university icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "School:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, props.details.listMetadata.school.length > 2 ? props.details.listMetadata.school.slice(0, -1).join(", ") + " and " + props.details.listMetadata.school.slice(-1) : props.details.listMetadata.school.join(" and "))),
    department = props.details.listMetadata && props.details.listMetadata.department && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "fas fa-fw fa-sharp fa-building icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Department:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, props.details.listMetadata.department.length > 2 ? props.details.listMetadata.department.slice(0, -1).join(", ") + " and " + props.details.listMetadata.department.slice(-1) : props.details.listMetadata.department.join(" and "))),
    centre = props.details.listMetadata && props.details.listMetadata.researchCentre && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "fas fa-fw fa-vial icon",
      "aria-hidden": "true"
    }), " ", props.details.listMetadata.researchCentre.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Research centres: ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Research centre: ")),
    academic = props.details.listMetadata && props.details.listMetadata.academic && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "fas fa-fw fa-chalkboard-teacher icon",
      "aria-hidden": "true"
    }), " ", props.details.listMetadata.academic.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Academics: ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Academic: ")),
    student = props.details.listMetadata && props.details.listMetadata.student && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "fas fa-fw fa-users icon",
      "aria-hidden": "true"
    }), " ", props.details.listMetadata.student.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Students: ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Student: ")),
    degree = props.details.listMetadata && props.details.listMetadata.relatedDegree && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "far fa-fw fa-diploma icon",
      "aria-hidden": "true"
    }), " ", props.details.listMetadata.relatedDegree.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Related degrees: ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Related degree: ")),
    status = props.details.listMetadata && props.details.listMetadata.status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "far fa-fw fa-hourglass icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Status:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, props.details.listMetadata.status[0], " "), props.details.listMetadata.status[0] === "Completed project" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "far fa-fw fa-check-circle icon",
      "aria-hidden": "true"
    }) : null),
    site = props.details.listMetadata && props.details.listMetadata.site && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
      className: "card__tag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: "far fa-fw fa-globe icon",
      "aria-hidden": "true"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
      href: props.details.listMetadata.site[0]
    }, "View case study site")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
    className: "card card--research"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card__details__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", {
    className: "card--research__title-link"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata && props.details.listMetadata.c && props.details.listMetadata.c[0]), school, department, centre, degree, academic, student, status, site)));
}
Finder__Results__Research.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Research);

/***/ }),

/***/ "./src/shared/components/filters/city-sport/finder__filters-citySport.tsx":
/*!********************************************************************************!*\
  !*** ./src/shared/components/filters/city-sport/finder__filters-citySport.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _finder_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../finder__select */ "./src/shared/components/filters/finder__select.tsx");
/* harmony import */ var _finder_multiCheckbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../finder__multiCheckbox */ "./src/shared/components/filters/finder__multiCheckbox.tsx");
/* harmony import */ var _finder_eventSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../finder__eventSelect */ "./src/shared/components/filters/finder__eventSelect.tsx");
/* harmony import */ var _finder_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../finder__checkbox */ "./src/shared/components/filters/finder__checkbox.tsx");
/* harmony import */ var _finder_paramCheckbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../finder__paramCheckbox */ "./src/shared/components/filters/finder__paramCheckbox.tsx");
/* harmony import */ var _finder_eventCheckbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../finder__eventCheckbox */ "./src/shared/components/filters/finder__eventCheckbox.tsx");
/* harmony import */ var _finder_hiddenInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../finder__hiddenInput */ "./src/shared/components/filters/finder__hiddenInput.tsx");
/* harmony import */ var _finder_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../finder__tag */ "./src/shared/components/filters/finder__tag.tsx");
/* harmony import */ var _finder_reset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../finder__reset */ "./src/shared/components/filters/finder__reset.tsx");
/* harmony import */ var _finder_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../finder__sort */ "./src/shared/components/filters/finder__sort.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../util */ "./src/shared/util.tsx");










/**
 * @module patterns/finder/components/finder__filters
 * @author Web Development
 * @copyright City, University of London 2019
 */














/**
 * Predicate for whether a facet should be displayed, if it's dependent on
 * another facet being set.
 *
 * @param {object} facet The facet to potentially display.
 * @param {object} facetMap The facets currently set on the query.
 * @return {bool} - Has any dependency been met
 */
function dependencyMet(facet, facetMap) {
  var setFacets = Object.keys(facetMap);
  if (!facet.dependency) {
    return true;
  }
  if (setFacets.indexOf(facet.dependency) >= 0) {
    var val = facetMap[facet.dependency];
    if (Array.isArray(val)) {
      if (val.length > 0) return true;
    } else {
      if (val !== "") return true;
    }
  }
  return false;
}

/**
 * Component to update facet values in the query.
 *
 * @param {object} props React props.
 * @returns {object} - React component.
 */
function Finder__Filters(props) {
  var _props$response, _props$config$summari, _props$query$fixedPar, _props$config$facetLa;
  var totalMatching = (_props$response = props.response) === null || _props$response === void 0 || (_props$response = _props$response.summary) === null || _props$response === void 0 ? void 0 : _props$response.fullyMatching;
  var clearFiltersDesktop = !props.updating && Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
      className: "v26-finder__filters__reset v26-finder__filters__reset--desktop"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_reset__WEBPACK_IMPORTED_MODULE_9__["default"], {
      clear: props.clear,
      resetSort: false,
      matrixState: props.matrixState,
      site: props.config.site || "city" // Ensure site is defined
    })) : null,
    clearFiltersMobile = !props.updating && Object.keys(props.query.facets).length > 0 || props.query.sortType !== props.config.sort[0].type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_reset__WEBPACK_IMPORTED_MODULE_9__["default"], {
      clear: props.clear,
      resetSort: true,
      matrixState: props.matrixState,
      site: props.config.site || "city" // Ensure site is defined
    }) : null;
  var sort = !props.matrixState && props.config.sort.length > 1 && props.config.displaySort && totalMatching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "wrapper--v26-finder__select--sort--mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_sort__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: props.mobile ? "sort-mobile" : "sort-desktop",
    config: props.config,
    query: props.query,
    update: props.update
  })) : null;
  var submitSSR = props.matrixState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "v26-finder__filter__submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("button", {
    type: "submit",
    className: "v26-finder__query__submit v26-finder__submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", {
    className: "fal fa-sharp fa-search finder__query__submit__icon",
    "aria-hidden": "true"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", {
    className: "v26-finder__query__submit__text"
  }, "Find"))) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "v26-finder__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", {
    className: "v26-finder__filters__heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", {
    className: "v26-finder__filters__heading__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", {
    className: "far fa-sharp fa-sliders-h icon",
    "aria-hidden": "true"
  }), " ", "Filter ".concat((_props$config$summari = props.config.summariseAs) === null || _props$config$summari === void 0 ? void 0 : _props$config$summari.plural)), clearFiltersMobile), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("fieldset", null, !props.hasMounted && ((_props$query$fixedPar = props.query.fixedParameters) === null || _props$query$fixedPar === void 0 ? void 0 : _props$query$fixedPar.map(function (param) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_hiddenInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: param.name,
      name: param.name,
      value: param.value
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "wrapper--v26-finder_filters--filters"
  }, (_props$config$facetLa = props.config.facetLabels) === null || _props$config$facetLa === void 0 ? void 0 : _props$config$facetLa.map(function (facet) {
    var _props$response$facet, _props$response2, _props$config$facetLa2, _props$response3, _props$response4, _props$response$facet2, _props$response5, _props$config$facetLa3, _props$response$facet3, _props$response6, _props$config$facetLa4, _props$response$facet4, _props$response7, _props$config$facetLa5, _props$response$facet5, _props$response8, _props$config$facetLa6;
    if (dependencyMet(facet, props.query.facets)) {
      switch (facet.type) {
        case 'multiCheckbox':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_multiCheckbox__WEBPACK_IMPORTED_MODULE_12__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: (_props$response$facet = (_props$response2 = props.response) === null || _props$response2 === void 0 || (_props$response2 = _props$response2.facets) === null || _props$response2 === void 0 ? void 0 : _props$response2.filter(function (funnelbackFacet) {
              return funnelbackFacet.name.toLowerCase() === facet.funnelbackName.toLowerCase();
            })) !== null && _props$response$facet !== void 0 ? _props$response$facet : [],
            update: props.update,
            dependencies: (_props$config$facetLa2 = props.config.facetLabels) === null || _props$config$facetLa2 === void 0 ? void 0 : _props$config$facetLa2.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            mobile: props.mobile,
            matrixState: props.matrixState
          });
        case "eventCheckBox":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_eventCheckbox__WEBPACK_IMPORTED_MODULE_13__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            update: props.update,
            pastEventsResponse: (_props$response3 = props.response) === null || _props$response3 === void 0 || (_props$response3 = _props$response3.extraSearches) === null || _props$response3 === void 0 || (_props$response3 = _props$response3.past) === null || _props$response3 === void 0 ? void 0 : _props$response3.response,
            matrixState: props.matrixState
          });
        case "paramCheckBox":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_paramCheckbox__WEBPACK_IMPORTED_MODULE_14__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            update: props.update,
            pastEventsResponse: (_props$response4 = props.response) === null || _props$response4 === void 0 || (_props$response4 = _props$response4.extraSearches) === null || _props$response4 === void 0 || (_props$response4 = _props$response4.past) === null || _props$response4 === void 0 ? void 0 : _props$response4.response
          });
        case "eventSelect":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_eventSelect__WEBPACK_IMPORTED_MODULE_15__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: (_props$response$facet2 = (_props$response5 = props.response) === null || _props$response5 === void 0 || (_props$response5 = _props$response5.facets) === null || _props$response5 === void 0 ? void 0 : _props$response5.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            })) !== null && _props$response$facet2 !== void 0 ? _props$response$facet2 : [],
            update: props.update,
            dependencies: (_props$config$facetLa3 = props.config.facetLabels) === null || _props$config$facetLa3 === void 0 ? void 0 : _props$config$facetLa3.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            mobile: props.mobile
          });
        case "select":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_select__WEBPACK_IMPORTED_MODULE_16__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: (_props$response$facet3 = (_props$response6 = props.response) === null || _props$response6 === void 0 || (_props$response6 = _props$response6.facets) === null || _props$response6 === void 0 ? void 0 : _props$response6.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            })) !== null && _props$response$facet3 !== void 0 ? _props$response$facet3 : [],
            update: props.update,
            dependencies: (_props$config$facetLa4 = props.config.facetLabels) === null || _props$config$facetLa4 === void 0 ? void 0 : _props$config$facetLa4.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            mobile: props.mobile
          });
        case "checkbox":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: (_props$response$facet4 = (_props$response7 = props.response) === null || _props$response7 === void 0 || (_props$response7 = _props$response7.facets) === null || _props$response7 === void 0 ? void 0 : _props$response7.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            })) !== null && _props$response$facet4 !== void 0 ? _props$response$facet4 : [],
            update: props.update,
            dependencies: (_props$config$facetLa5 = props.config.facetLabels) === null || _props$config$facetLa5 === void 0 ? void 0 : _props$config$facetLa5.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            mobile: props.mobile
          });
        case "tag":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_tag__WEBPACK_IMPORTED_MODULE_18__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: (_props$response$facet5 = (_props$response8 = props.response) === null || _props$response8 === void 0 || (_props$response8 = _props$response8.facets) === null || _props$response8 === void 0 ? void 0 : _props$response8.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            })) !== null && _props$response$facet5 !== void 0 ? _props$response$facet5 : [],
            update: props.update,
            dependencies: (_props$config$facetLa6 = props.config.facetLabels) === null || _props$config$facetLa6 === void 0 ? void 0 : _props$config$facetLa6.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            matrixState: props.matrixState
          });
        default:
          (0,_util__WEBPACK_IMPORTED_MODULE_19__.gaEvent)("jsError", "JavaScript error", "finder__filters()", "Unknown filter type in finder__filters.js", 0, true);
      }
    } else {
      return null;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", {
    className: "v26-finder__filters__nofilters"
  }, "No filters are valid for the current query."), clearFiltersDesktop, sort, submitSSR)));
}
Finder__Filters.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func),
  mobile: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),
  hasMounted: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Filters);

/***/ }),

/***/ "./src/shared/components/filters/city-sport/finder__filtersmobile-citySports.tsx":
/*!***************************************************************************************!*\
  !*** ./src/shared/components/filters/city-sport/finder__filtersmobile-citySports.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _finder_filters_citySport__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./finder__filters-citySport */ "./src/shared/components/filters/city-sport/finder__filters-citySport.tsx");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../util */ "./src/shared/util.tsx");


















function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * @module patterns/finder/components/wrapper--finder__filters--mobile
 * @author Web Development
 * @copyright City, University of London 2019
 */







/**
 * Render the mobile version of the filters.
 */
function Finder__FiltersMobile(props) {
  var _props$response, _props$summariseAs, _props$summariseAs$pl, _props$summariseAs2, _props$summariseAs3;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    display = _useState2[0],
    setDisplay = _useState2[1];
  var filtersRef = (0,react__WEBPACK_IMPORTED_MODULE_16__.useRef)(null);
  var focusTrapRef = (0,react__WEBPACK_IMPORTED_MODULE_16__.useRef)(null);

  // Set up the focus trap once after mount
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    var filtersEl = filtersRef.current;
    if (!filtersEl) return;
    var applyButton = filtersEl.querySelector(".wrapper--finder__filters--mobile__apply");
    var trap = focus_trap__WEBPACK_IMPORTED_MODULE_17__.createFocusTrap(filtersEl, {
      initialFocus: applyButton || undefined,
      clickOutsideDeactivates: true
    });
    focusTrapRef.current = trap;
    return function () {
      var _focusTrapRef$current;
      if ((_focusTrapRef$current = focusTrapRef.current) !== null && _focusTrapRef$current !== void 0 && _focusTrapRef$current.active) {
        focusTrapRef.current.deactivate();
      }
    };
  }, []);

  // Manage focus trap and scroll behavior based on `display`
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    var focusTrap = focusTrapRef.current;
    if (!focusTrap) return;
    if (display) {
      if (!focusTrap.active) focusTrap.activate();
      (0,_util__WEBPACK_IMPORTED_MODULE_18__.disableBodyScroll)();
    } else {
      if (focusTrap.active) focusTrap.deactivate();
      (0,_util__WEBPACK_IMPORTED_MODULE_18__.enableBodyScroll)();
    }
  }, [display]);
  var totalMatching = (_props$response = props.response) === null || _props$response === void 0 || (_props$response = _props$response.summary) === null || _props$response === void 0 ? void 0 : _props$response.totalMatching;
  var result = totalMatching === 1 ? (_props$summariseAs = props.summariseAs) === null || _props$summariseAs === void 0 ? void 0 : _props$summariseAs.singular : (_props$summariseAs$pl = (_props$summariseAs2 = props.summariseAs) === null || _props$summariseAs2 === void 0 ? void 0 : _props$summariseAs2.plural) !== null && _props$summariseAs$pl !== void 0 ? _props$summariseAs$pl : null;
  var totalMatchingMessage = totalMatching ? "Show ".concat(totalMatching, " ").concat(result) : "Close";
  var filtersCount = props.config.displaySort ? props.config.sort[0].type !== props.query.sortType || Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, "Filters", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "wrapper--v26-finder__filters--mobile__toggle__count"
  }, "(", props.config.sort[0].type !== props.query.sortType && Object.keys(props.query.facets).length > 0 ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, "Filter") : Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, "Filters", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "wrapper--v26-finder__filters--mobile__toggle__count"
  }, "(", props.config.sort[0].type !== props.query.sortType ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, "Filter");
  var toggle = display ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    type: "button",
    className: "wrapper--v26-finder__filters--mobile__toggle",
    "aria-haspopup": true,
    "aria-expanded": display,
    onClick: function onClick() {
      return setDisplay(true);
    },
    "data-filters-applied": Object.keys(props.query.facets).length !== 0 || props.config.displaySort && props.config.sort[0].type !== props.query.sortType
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "far fa-sharp fa-sliders-h icon",
    "aria-hidden": "true"
  }), " ", filtersCount));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "wrapper--v26-finder__filters",
    "data-open": display,
    ref: filtersRef
  }, toggle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "wrapper--v26-finder__filters--mobile__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "wrapper--v26-finder__filters--mobile__filters__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_finder_filters_citySport__WEBPACK_IMPORTED_MODULE_19__["default"], {
    config: props.config,
    query: props.query,
    response: props.response,
    update: props.update,
    clear: props.clear,
    mobile: props.mobile,
    hasMounted: props.hasMounted,
    matrixState: props.matrixState,
    updating: props.updating
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "wrapper--v26-finder__filters--mobile__apply"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    type: "button",
    "aria-expanded": display,
    onClick: function onClick() {
      return setDisplay(false);
    },
    disabled: props.updating
  }, Object.keys(props.query.facets).length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "fa fa-chevron-left icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    "aria-live": "polite"
  }, props.updating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "wrapper--v26-finder__filters--mobile__apply__text"
  }, "Updating ", (_props$summariseAs3 = props.summariseAs) === null || _props$summariseAs3 === void 0 ? void 0 : _props$summariseAs3.plural, "\u2026")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "wrapper--finder__filters--mobile__apply__text"
  }, Object.keys(props.query.facets).length === 0 ? "Close" : totalMatchingMessage)))));
}
Finder__FiltersMobile.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),
  summariseAs: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  mobile: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),
  hasMounted: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__FiltersMobile);

/***/ }),

/***/ "./src/shared/components/filters/city/finder__filters-city.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/components/filters/city/finder__filters-city.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _finder_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../finder__select */ "./src/shared/components/filters/finder__select.tsx");
/* harmony import */ var _finder_multiCheckbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../finder__multiCheckbox */ "./src/shared/components/filters/finder__multiCheckbox.tsx");
/* harmony import */ var _finder_eventSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../finder__eventSelect */ "./src/shared/components/filters/finder__eventSelect.tsx");
/* harmony import */ var _finder_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../finder__checkbox */ "./src/shared/components/filters/finder__checkbox.tsx");
/* harmony import */ var _finder_paramCheckbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../finder__paramCheckbox */ "./src/shared/components/filters/finder__paramCheckbox.tsx");
/* harmony import */ var _finder_eventCheckbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../finder__eventCheckbox */ "./src/shared/components/filters/finder__eventCheckbox.tsx");
/* harmony import */ var _finder_hiddenInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../finder__hiddenInput */ "./src/shared/components/filters/finder__hiddenInput.tsx");
/* harmony import */ var _finder_tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../finder__tag */ "./src/shared/components/filters/finder__tag.tsx");
/* harmony import */ var _finder_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../finder__sort */ "./src/shared/components/filters/finder__sort.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../util */ "./src/shared/util.tsx");










/**
 * @module patterns/finder/components/finder__filters
 * @author Web Development
 * @copyright City, University of London 2019
 */













/**
 * Predicate for whether a facet should be displayed, if it's dependent on
 * another facet being set.
 *
 * @param {object} facet The facet to potentially display.
 * @param {object} facetMap The facets currently set on the query.
 * @return {bool} - Has any dependency been met
 */
function dependencyMet(facet, facetMap) {
  var setFacets = Object.keys(facetMap);
  if (!facet.dependency) {
    return true;
  }
  if (setFacets.indexOf(facet.dependency) >= 0) {
    var val = facetMap[facet.dependency];
    if (Array.isArray(val)) {
      if (val.length > 0) return true;
    } else {
      if (val !== "") return true;
    }
  }
  return false;
}

/**
 * Component to update facet values in the query.
 *
 * @param {object} props React props.
 * @returns {object} - React component.
 */
function Finder__Filters(props) {
  var _props$config$summari, _props$query$fixedPar, _props$config$facetLa;
  var totalMatching = props.response && props.response.summary && props.response.summary.fullyMatching;
  var sort = !props.matrixState && props.config.sort.length > 1 && props.config.displaySort && totalMatching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "wrapper--v26-finder__select--sort--mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_sort__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: props.mobile ? "sort-mobile" : "sort-desktop",
    config: props.config,
    query: props.query,
    update: props.update
  })) : null;
  var submitSSR = props.matrixState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "v26-finder__filter__submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("button", {
    type: "submit",
    className: "v26-finder__query__submit v26-finder__submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", {
    className: "fal fa-sharp fa-search finder__query__submit__icon",
    "aria-hidden": "true"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", {
    className: "v26-finder__query__submit__text"
  }, "Find"))) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "v26-finder__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", {
    className: "v26-finder__filters__heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", {
    className: "v26-finder__filters__heading__text"
  }, "Filter ".concat((_props$config$summari = props.config.summariseAs) === null || _props$config$summari === void 0 ? void 0 : _props$config$summari.plural))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("fieldset", null, !props.hasMounted && ((_props$query$fixedPar = props.query.fixedParameters) === null || _props$query$fixedPar === void 0 ? void 0 : _props$query$fixedPar.map(function (param) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_hiddenInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: param.name,
      name: param.name,
      value: param.value
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "wrapper--v26-finder_filters--filters"
  }, (_props$config$facetLa = props.config.facetLabels) === null || _props$config$facetLa === void 0 ? void 0 : _props$config$facetLa.map(function (facet) {
    var _props$response$facet, _props$response, _props$config$facetLa2, _props$response2, _props$response3, _props$response$facet2, _props$response4, _props$config$facetLa3, _props$response$facet3, _props$response5, _props$config$facetLa4, _props$response$facet4, _props$response6, _props$config$facetLa5, _props$response$facet5, _props$response7, _props$config$facetLa6;
    if (dependencyMet(facet, props.query.facets)) {
      switch (facet.type) {
        case 'multiCheckbox':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_multiCheckbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: (_props$response$facet = (_props$response = props.response) === null || _props$response === void 0 || (_props$response = _props$response.facets) === null || _props$response === void 0 ? void 0 : _props$response.filter(function (funnelbackFacet) {
              return funnelbackFacet.name.toLowerCase() === facet.funnelbackName.toLowerCase();
            })) !== null && _props$response$facet !== void 0 ? _props$response$facet : [],
            update: props.update,
            dependencies: (_props$config$facetLa2 = props.config.facetLabels) === null || _props$config$facetLa2 === void 0 ? void 0 : _props$config$facetLa2.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            mobile: props.mobile,
            matrixState: props.matrixState
          });
        case "eventCheckBox":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_eventCheckbox__WEBPACK_IMPORTED_MODULE_12__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            update: props.update,
            pastEventsResponse: (_props$response2 = props.response) === null || _props$response2 === void 0 || (_props$response2 = _props$response2.extraSearches) === null || _props$response2 === void 0 || (_props$response2 = _props$response2.past) === null || _props$response2 === void 0 ? void 0 : _props$response2.response,
            matrixState: props.matrixState
          });
        case "paramCheckBox":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_paramCheckbox__WEBPACK_IMPORTED_MODULE_13__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            update: props.update,
            pastEventsResponse: (_props$response3 = props.response) === null || _props$response3 === void 0 || (_props$response3 = _props$response3.extraSearches) === null || _props$response3 === void 0 || (_props$response3 = _props$response3.past) === null || _props$response3 === void 0 ? void 0 : _props$response3.response
          });
        case "eventSelect":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_eventSelect__WEBPACK_IMPORTED_MODULE_14__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: (_props$response$facet2 = (_props$response4 = props.response) === null || _props$response4 === void 0 || (_props$response4 = _props$response4.facets) === null || _props$response4 === void 0 ? void 0 : _props$response4.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            })) !== null && _props$response$facet2 !== void 0 ? _props$response$facet2 : [],
            update: props.update,
            dependencies: (_props$config$facetLa3 = props.config.facetLabels) === null || _props$config$facetLa3 === void 0 ? void 0 : _props$config$facetLa3.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            mobile: props.mobile
          });
        case "select":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_select__WEBPACK_IMPORTED_MODULE_15__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: (_props$response$facet3 = (_props$response5 = props.response) === null || _props$response5 === void 0 || (_props$response5 = _props$response5.facets) === null || _props$response5 === void 0 ? void 0 : _props$response5.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            })) !== null && _props$response$facet3 !== void 0 ? _props$response$facet3 : [],
            update: props.update,
            dependencies: (_props$config$facetLa4 = props.config.facetLabels) === null || _props$config$facetLa4 === void 0 ? void 0 : _props$config$facetLa4.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            mobile: props.mobile
          });
        case "checkbox":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_checkbox__WEBPACK_IMPORTED_MODULE_16__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: (_props$response$facet4 = (_props$response6 = props.response) === null || _props$response6 === void 0 || (_props$response6 = _props$response6.facets) === null || _props$response6 === void 0 ? void 0 : _props$response6.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            })) !== null && _props$response$facet4 !== void 0 ? _props$response$facet4 : [],
            update: props.update,
            dependencies: (_props$config$facetLa5 = props.config.facetLabels) === null || _props$config$facetLa5 === void 0 ? void 0 : _props$config$facetLa5.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            mobile: props.mobile
          });
        case "tag":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_tag__WEBPACK_IMPORTED_MODULE_17__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: (_props$response$facet5 = (_props$response7 = props.response) === null || _props$response7 === void 0 || (_props$response7 = _props$response7.facets) === null || _props$response7 === void 0 ? void 0 : _props$response7.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            })) !== null && _props$response$facet5 !== void 0 ? _props$response$facet5 : [],
            update: props.update,
            dependencies: (_props$config$facetLa6 = props.config.facetLabels) === null || _props$config$facetLa6 === void 0 ? void 0 : _props$config$facetLa6.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            matrixState: props.matrixState
          });
        default:
          (0,_util__WEBPACK_IMPORTED_MODULE_18__.gaEvent)("jsError", "JavaScript error", "finder__filters()", "Unknown filter type in finder__filters.js", 0, true);
      }
    } else {
      return null;
    }
  }), sort, submitSSR)));
}
Finder__Filters.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().object),
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().func),
  mobile: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool),
  hasMounted: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_19___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Filters);

/***/ }),

/***/ "./src/shared/components/filters/city/finder__filtersmobile-city.tsx":
/*!***************************************************************************!*\
  !*** ./src/shared/components/filters/city/finder__filtersmobile-city.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _finder_filters_city__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./finder__filters-city */ "./src/shared/components/filters/city/finder__filters-city.tsx");
/* harmony import */ var _filters_finder_reset__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../filters/finder__reset */ "./src/shared/components/filters/finder__reset.tsx");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../util */ "./src/shared/util.tsx");


function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

















/**
 * @module patterns/finder/components/wrapper--finder__filters--mobile
 * @author Web Development
 * @copyright City, University of London 2019
 */








/**
 * Determine the filter button text and count to display.
 */
function getFiltersCountDisplay(displaySort, sortType, currentSortType, facetArray) {
  var isSortChanged = sortType !== currentSortType;
  var hasFacets = facetArray.length > 0;
  var facetsCount = facetArray.reduce(function (count, facet) {
    if (Array.isArray(facet)) {
      return count + facet.length;
    }
    return count + 1;
  }, 0);
  var displayCount = isSortChanged ? facetsCount + 1 : facetsCount;
  if (displaySort) {
    if (isSortChanged || hasFacets) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", null, "Show Filters", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
        className: "wrapper--v26-finder__filters--mobile__toggle__count"
      }, "(", displayCount, ")"));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", null, "Filter");
  }
  if (hasFacets) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", null, "Show Filters", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
      className: "wrapper--v26-finder__filters--mobile__toggle__count"
    }, "(", displayCount, ")"));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", null, "Show Filter");
}

/**
 * Render the mobile version of the filters.
 */
function Finder__FiltersMobile(props) {
  var _props$response, _props$query, _props$summariseAs;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    display = _useState2[0],
    setDisplay = _useState2[1];
  var filtersRef = (0,react__WEBPACK_IMPORTED_MODULE_17__.useRef)(null);
  var focusTrapRef = (0,react__WEBPACK_IMPORTED_MODULE_17__.useRef)(null);

  // Set up the focus trap once after mount
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    var filtersEl = filtersRef.current;
    if (!filtersEl) return;
    var applyButton = filtersEl.querySelector(".wrapper--v26-finder__filters--mobile__apply");
    var trap = focus_trap__WEBPACK_IMPORTED_MODULE_18__.createFocusTrap(filtersEl, {
      initialFocus: applyButton || undefined,
      clickOutsideDeactivates: true
    });
    focusTrapRef.current = trap;
    return function () {
      var _focusTrapRef$current;
      if ((_focusTrapRef$current = focusTrapRef.current) !== null && _focusTrapRef$current !== void 0 && _focusTrapRef$current.active) {
        focusTrapRef.current.deactivate();
      }
    };
  }, []);

  // Manage focus trap and scroll behavior based on `display`
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    var focusTrap = focusTrapRef.current;
    if (!focusTrap) return;
    if (display) {
      if (!focusTrap.active) focusTrap.activate();
      (0,_util__WEBPACK_IMPORTED_MODULE_19__.disableBodyScroll)();
    } else {
      if (focusTrap.active) focusTrap.deactivate();
      (0,_util__WEBPACK_IMPORTED_MODULE_19__.enableBodyScroll)();
    }
  }, [display]);
  var totalMatching = (_props$response = props.response) === null || _props$response === void 0 || (_props$response = _props$response.summary) === null || _props$response === void 0 ? void 0 : _props$response.totalMatching;
  var noFacetsSelected = !((_props$query = props.query) !== null && _props$query !== void 0 && _props$query.facets) || Object.keys(props.query.facets).length === 0;
  // const result =
  //   totalMatching === 1 && props.summariseAs
  //     ? props.summariseAs.singular
  //     : props.summariseAs && props.summariseAs.plural
  //       ? props.summariseAs.plural
  //       : null;

  var totalMatchingMessage = totalMatching ? "View results (".concat(totalMatching, ")") : "View results"; //Temporarily Left the conditional statement in incase logic of showing Close is reinstated.

  var filtersCount = getFiltersCountDisplay(props.config.displaySort, props.config.sort[0].type, props.query.sortType, Object.values(props.query.facets));
  var toggle = display ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("button", {
    type: "button",
    className: "wrapper--v26-finder__filters--mobile__toggle",
    "aria-haspopup": true,
    "aria-expanded": display,
    onClick: function onClick() {
      return setDisplay(true);
    },
    "data-filters-applied": Object.keys(props.query.facets).length !== 0 || props.config.displaySort && props.config.sort[0].type !== props.query.sortType
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "far fa-sharp fa-sliders-h icon",
    "aria-hidden": "true"
  }), " ", filtersCount));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "wrapper--v26-finder__filters",
    "data-open": display,
    ref: filtersRef
  }, display && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("button", {
    type: "button",
    className: "wrapper--v26-finder__filters--mobile__filters__close",
    "aria-label": "Close filters",
    onClick: function onClick() {
      return setDisplay(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "far fa-times icon",
    "aria-hidden": "true"
  })), !props.hasMounted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("input", {
    type: "checkbox",
    id: "toggleFilters",
    className: "v26-finder__ssr__toggle sr-only",
    "aria-controls": "filtersPanel",
    "aria-label": "Toggle filters"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("label", {
    className: "wrapper--v26-finder__filters--mobile__toggle v26-finder__ssr__toggle-label",
    htmlFor: "toggleFilters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "far fa-sharp fa-sliders-h icon",
    "aria-hidden": "true"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "v26-finder__ssr__toggle-text",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "v26-finder__ssr__toggle__text--show"
  }, "Show filters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "v26-finder__ssr__toggle__text--hide"
  }, "Hide filters")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "wrapper--v26-finder__filters__header"
  }, toggle, !noFacetsSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_filters_finder_reset__WEBPACK_IMPORTED_MODULE_20__["default"], {
    clear: props.clear,
    resetSort: false,
    matrixState: props.matrixState,
    label: "Clear all filters",
    site: props.config.site || "city"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "wrapper--v26-finder__filters--mobile__filters",
    id: "filtersPanel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "wrapper--v26-finder__filters--mobile__filters__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_finder_filters_city__WEBPACK_IMPORTED_MODULE_21__["default"], {
    config: props.config,
    query: props.query,
    response: props.response,
    update: props.update,
    clear: props.clear,
    mobile: props.mobile,
    hasMounted: props.hasMounted,
    matrixState: props.matrixState,
    updating: props.updating
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "wrapper--v26-finder__filters__footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_filters_finder_reset__WEBPACK_IMPORTED_MODULE_20__["default"], {
    clear: props.clear,
    className: "v26-finder__btn_alt",
    resetSort: false,
    matrixState: props.matrixState,
    disabled: noFacetsSelected,
    label: "Clear filters",
    site: props.config.site || "city" // Ensure site is defined
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "wrapper--v26-finder__filters--mobile__apply"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("button", {
    className: "v26-finder__btn",
    type: "button",
    "aria-expanded": display,
    onClick: function onClick() {
      return setDisplay(false);
    },
    disabled: props.updating || noFacetsSelected
  }, Object.keys(props.query.facets).length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "fa fa-chevron-left icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    "aria-live": "polite"
  }, props.updating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "wrapper--v26-finder__filters--mobile__apply__text"
  }, "Updating ", (_props$summariseAs = props.summariseAs) === null || _props$summariseAs === void 0 ? void 0 : _props$summariseAs.plural, "\u2026")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "wrapper--finder__filters--mobile__apply__text"
  }, Object.keys(props.query.facets).length === 0 ? "View results" //Temporarily Left the conditional statement in incase logic of showing Close is reinstated.
  : totalMatchingMessage))))));
}
Finder__FiltersMobile.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().object),
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().func),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().bool),
  summariseAs: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().object),
  mobile: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().bool),
  hasMounted: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().bool),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_22___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__FiltersMobile);

/***/ }),

/***/ "./src/shared/components/filters/finder__checkbox.tsx":
/*!************************************************************!*\
  !*** ./src/shared/components/filters/finder__checkbox.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);








/**
 * @module patterns/finder/components/finder__checkbox
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Finder__Checkbox(props) {
  var randomNumber = props.mobile ? "mobile" : "desktop",
    toggleChecked = props.facet.meta in props.query.facets,
    responseFacetValue = props.responseFacet[0] && props.responseFacet[0].allValues && props.responseFacet[0].allValues.filter(function (value) {
      return props.facet.checkedValue && value.data.toLowerCase() === props.facet.checkedValue.toLowerCase();
    });
  if (responseFacetValue && responseFacetValue[0] && responseFacetValue[0].count > 0) {
    var toggleFacet = function toggleFacet() {
      var newQuery = props.query;
      if (props.dependencies) {
        props.dependencies.forEach(function (facet) {
          delete newQuery.facets[facet.meta];
        });
      }
      if (toggleChecked) {
        delete newQuery.facets[props.facet.meta];
      } else if (props.facet.checkedValue) {
        newQuery.facets[props.facet.meta] = props.facet.checkedValue;
      }
      newQuery.startRank = 1;
      newQuery.misspelling = null;
      newQuery.interacted = true;
      props.update.query(newQuery);
      props.update.results(!props.update.updateState);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
      className: "v26-finder__filter v26-finder__checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("input", {
      type: "checkbox",
      id: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber),
      name: "meta_".concat(props.facet.meta, "_sand"),
      value: props.facet.checkedValue,
      onChange: function onChange() {
        return toggleFacet();
      },
      checked: toggleChecked
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
      className: "v26-finder__checkbox__indicator v26-finder__checkbox__indicator",
      "aria-hidden": "true",
      onClick: function onClick() {
        return toggleFacet();
      }
    }, toggleChecked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("span", {
      className: "fa fa-fw fas fa-check icon"
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("label", {
      className: "v26-finder__filters__label--always",
      htmlFor: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber)
    }, props.facet.name, !toggleChecked && responseFacetValue && " (" + responseFacetValue[0].count + ")"));
  } else {
    return null;
  }
}
Finder__Checkbox.propTypes = {
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)),
  mobile: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Checkbox);

/***/ }),

/***/ "./src/shared/components/filters/finder__clearFilterTag.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/components/filters/finder__clearFilterTag.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _logic_hyper_link__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../logic/hyper-link */ "./src/shared/logic/hyper-link.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../util */ "./src/shared/util.tsx");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






























function Finder__ClearFilterTag(props) {
  var query = props.query,
    facet = props.facet,
    update = props.update,
    dependencies = props.dependencies,
    value = props.value,
    config = props.config;
  var currentQueryFacets = query.facets;
  var normalize = function normalize(v) {
    return v.toLowerCase().trim().replace(/\s+/g, ' ');
  };
  var updateQuery = function updateQuery(facetValue) {
    var normValue = normalize(facetValue);
    var newQuery = _objectSpread(_objectSpread({}, query), {}, {
      facets: _objectSpread({}, query.facets)
    });
    newQuery.facets = _objectSpread({}, newQuery.facets);
    // clear dependent facets
    if (dependencies) {
      dependencies.forEach(function (dep) {
        delete newQuery.facets[dep.meta];
      });
    }
    var rawCurrent = newQuery.facets[facet.meta];
    var currentValues = Array.isArray(rawCurrent) ? rawCurrent.map(normalize) : rawCurrent ? [normalize(rawCurrent)] : [];

    // toggle value
    if (currentValues.includes(normValue)) {
      var updated = currentValues.filter(function (v) {
        return v !== normValue;
      });
      if (updated.length > 0) {
        newQuery.facets[facet.meta] = updated;
      } else {
        // remove empty facet entry entirely
        delete newQuery.facets[facet.meta];
      }
    }

    // reset paging / flags
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    update.query(newQuery);
    update.results(!update.updateState);
  };
  var facetValues = facet === null || facet === void 0 ? void 0 : facet.values;
  var facetValue = facetValues === null || facetValues === void 0 ? void 0 : facetValues.find(function (fv) {
    var normData = normalize(fv.data);
    return normData === value;
  });
  var clearFilterTag = value && props.matrixState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("a", {
    key: "".concat(facet.meta, "-").concat(value),
    "aria-label": "Clear the filter ".concat(value),
    className: "v26-finder__clear-filter-tag",
    href: (0,_logic_hyper_link__WEBPACK_IMPORTED_MODULE_27__.hyperLink)(query, facet, undefined, undefined, value, config)
  }, facetValue ? facetValue.label : (0,_util__WEBPACK_IMPORTED_MODULE_28__.capitalizeFirstLetter)(value), props.site === 'city' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", {
    className: "fa-sharp fa-solid fa-xmark icon"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("button", {
    key: "".concat(facet.meta, "-").concat(value),
    "aria-label": "Clear the filter ".concat(value),
    className: "v26-finder__clear-filter-tag",
    onClick: function onClick() {
      return updateQuery(value);
    }
  }, facetValue ? facetValue.label : (0,_util__WEBPACK_IMPORTED_MODULE_28__.capitalizeFirstLetter)(value), props.site === 'city' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", {
    className: "fa-sharp fa-solid fa-xmark icon"
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
    className: "v26-finder__filter v26-finder__tag"
  }, clearFilterTag);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__ClearFilterTag);
Finder__ClearFilterTag.propTypes = {
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().object).isRequired,
  query: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().object).isRequired,
  update: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().object).isRequired,
  config: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().object).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().string),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().func).isRequired
};

/***/ }),

/***/ "./src/shared/components/filters/finder__eventCheckbox.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/components/filters/finder__eventCheckbox.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_23__);


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






















/**
 * @module patterns/finder/components/finder__checkbox
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Finder__paramCheckbox(props) {
  var dateDayFormat = 10;
  var stringLength = 16,
    stringOffset = -4,
    randomNumber = Math.random().toString(stringLength).slice(stringOffset),
    pastEventsResponseTotal = props.pastEventsResponse && props.pastEventsResponse.resultPacket.resultsSummary && props.pastEventsResponse.resultPacket.resultsSummary.fullyMatching,
    pastEventsPartialResponseTotal = props.pastEventsResponse && props.pastEventsResponse.resultPacket.resultsSummary && props.pastEventsResponse.resultPacket.resultsSummary.partiallyMatching,
    toggleChecked = props.query.parameters && "lt_eventDate" in props.query.parameters,
    totalText = pastEventsResponseTotal ? pastEventsResponseTotal : pastEventsPartialResponseTotal ? pastEventsPartialResponseTotal : 0;
  var currentDate = new Date(),
    currentYear = currentDate.getUTCFullYear(),
    currentDateMonth = currentDate.getUTCMonth() >= 9 ? currentDate.getUTCMonth() + 1 : "0" + (currentDate.getUTCMonth() + 1),
    currentDateDay = currentDate.getUTCDate(),
    currentDateString = "".concat(currentYear).concat(currentDateMonth).concat(currentDateDay >= dateDayFormat ? currentDateDay : "0" + currentDateDay);
  var toggleFacet = function toggleFacet() {
    var currentDate = new Date();
    var dateDayFormat = 10;
    var currentYear = currentDate.getUTCFullYear();
    var currentDateMonth = currentDate.getUTCMonth() + 1 >= 10 ? currentDate.getUTCMonth() + 1 : "0" + (currentDate.getUTCMonth() + 1);
    var currentDateDay = currentDate.getUTCDate();
    var currentDateString = "".concat(currentYear).concat(currentDateMonth).concat(currentDateDay >= dateDayFormat ? currentDateDay : "0" + currentDateDay);
    var newQuery = _objectSpread(_objectSpread({}, props.query), {}, {
      parameters: props.query.parameters ? _objectSpread({}, props.query.parameters) : {}
    });
    if (newQuery.parameters && "lt_eventDate" in newQuery.parameters) {
      // Remove past filters
      delete newQuery.parameters.lt_eventDate;
      delete newQuery.parameters.events;
      newQuery.parameters.ge_eventDate = currentDateString;
      newQuery.sortType = "adate";
    } else if (newQuery.parameters) {
      // Set past filters
      delete newQuery.parameters.ge_eventDate;
      newQuery.parameters.lt_eventDate = currentDateString;
      newQuery.parameters.events = "past";
      newQuery.sortType = "date";
    }
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  if (totalText > 0) {
    if (props.matrixState) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
        className: "v26-finder__filter v26-finder__select"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("label", {
        htmlFor: "event--time"
      }, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("select", {
        name: "event--time",
        id: "event--time"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("option", {
        value: "ge_eventDate!".concat(currentDateString)
      }, "Upcoming events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("option", {
        value: "lt_eventDate!".concat(currentDateString)
      }, "Past events")));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
        className: "v26-finder__filter v26-finder__checkbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
        type: "checkbox",
        id: "".concat(props.facet.funnelbackName, "--").concat(randomNumber),
        name: props.facet.meta,
        value: props.facet.checkedValue,
        onChange: function onChange() {
          return toggleFacet();
        },
        checked: toggleChecked
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
        className: "v26-finder__checkbox__indicator v26-finder__checkbox__indicator",
        "aria-hidden": "true",
        onClick: function onClick() {
          return toggleFacet();
        }
      }, toggleChecked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
        className: "fa fa-fw fas fa-check icon"
      }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("label", {
        className: "v26-finder__filters__label--always",
        htmlFor: "".concat(props.facet.funnelbackName, "--").concat(randomNumber)
      }, props.facet.name, !toggleChecked && totalText && " (" + totalText + ")"));
    }
  } else {
    return null;
  }
}
Finder__paramCheckbox.propTypes = {
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().object),
  pastEventsResponse: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().object),
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_23___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_23___default().object)),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__paramCheckbox);

/***/ }),

/***/ "./src/shared/components/filters/finder__eventSelect.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/components/filters/finder__eventSelect.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__);


function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




















/**<
 * @module patterns/finder/components/finder__select
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Finder__Select(props) {
  var dateDayFormat = 10;
  var currentDate = new Date(),
    currentYear = currentDate.getUTCFullYear(),
    currentDateMonth = currentDate.getUTCMonth() >= 9 ? currentDate.getUTCMonth() + 1 : "0" + (currentDate.getUTCMonth() + 1),
    currentDateDay = currentDate.getUTCDate(),
    currentDateString = "".concat(currentYear).concat(currentDateMonth).concat(currentDateDay >= dateDayFormat ? currentDateDay : "0" + currentDateDay);
  var randomNumber = props.mobile ? "mobile" : "desktop",
    currentValue = props.facet && props.query.facets[props.facet.meta] || "";

  // reduce the facet configuration to an array of all possible values for
  // the facet
  var allFacets = props.facet && props.facet.values && props.facet.values.reduce(function (acc, data) {
    return [].concat(_toConsumableArray(acc), [data]);
  }, []);

  // reduce the Funnelback response for the facet to an array of valid
  // values for the current query
  var responseFacets = props.responseFacet[0] && props.responseFacet[0].allValues ? props.responseFacet[0].allValues.reduce(function (acc, data) {
    return [].concat(_toConsumableArray(acc), [data.data]);
  }, []) : [];

  // count how many possible facets are not valid for the current query
  // and will be hidden
  var hiddenFacets = allFacets && allFacets.map(function (facet) {
    return facet.data;
  }).filter(function (facet) {
    return responseFacets.indexOf(facet.toLowerCase()) < 0;
  }).length;
  var setFacet = function setFacet(value) {
    var newQuery = props.query;
    if (!newQuery.parameters) {
      newQuery.parameters = {};
    }
    if (props.dependencies) {
      props.dependencies.forEach(function (facet) {
        delete newQuery.facets[facet.meta];
      });
    }
    if (value) {
      newQuery.facets[props.facet.meta] = value;
    } else {
      delete newQuery.facets[props.facet.meta];
    }
    if (props.query.parameters && props.query.parameters.events) {
      newQuery.parameters.lt_eventDate = currentDateString;
    } else {
      newQuery.parameters.ge_eventDate = currentDateString;
    }
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  if (props.facet && props.facet.values && hiddenFacets !== undefined && props.facet.values.length > hiddenFacets) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
      className: "v26-finder__filter v26-finder__select ".concat(currentValue && "finder__select--selected")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("label", {
      htmlFor: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber)
    }, props.facet.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("select", {
      name: "meta_".concat(props.facet.meta, "_sand"),
      id: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber),
      onChange: function onChange(e) {
        return setFacet(e.target.value);
      },
      value: currentValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("option", {
      value: "",
      id: "meta".concat(props.facet.meta, "all--").concat(randomNumber)
    }, props.facet.noSelection), props.facet.values.map(function (value, i) {
      var responseFacetDetails = props.responseFacet[0] && props.responseFacet[0].allValues && props.responseFacet[0].allValues.filter(function (responseFacetValue) {
        return responseFacetValue.data.toLowerCase() === value.data.toLowerCase();
      });
      if (!Array.isArray(currentValue) && currentValue.toLowerCase() === value.data.toLowerCase() || responseFacetDetails && responseFacetDetails[0]) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("option", {
          key: i,
          value: value.data.toLowerCase()
        }, value.label, currentValue !== value.data && responseFacetDetails[0] && responseFacetDetails[0].count > 0 ? " (".concat(responseFacetDetails[0].count, ")") : "");
      } else {
        return null;
      }
    })));
  } else {
    return null;
  }
}
Finder__Select.propTypes = {
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_21___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_21___default().object),
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_21___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_21___default().object)),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_21___default().object),
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_21___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_21___default().object)),
  mobile: (prop_types__WEBPACK_IMPORTED_MODULE_21___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Select);

/***/ }),

/***/ "./src/shared/components/filters/finder__filters.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/components/filters/finder__filters.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _finder_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./finder__select */ "./src/shared/components/filters/finder__select.tsx");
/* harmony import */ var _finder_multiCheckbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./finder__multiCheckbox */ "./src/shared/components/filters/finder__multiCheckbox.tsx");
/* harmony import */ var _finder_eventSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./finder__eventSelect */ "./src/shared/components/filters/finder__eventSelect.tsx");
/* harmony import */ var _finder_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./finder__checkbox */ "./src/shared/components/filters/finder__checkbox.tsx");
/* harmony import */ var _finder_paramCheckbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./finder__paramCheckbox */ "./src/shared/components/filters/finder__paramCheckbox.tsx");
/* harmony import */ var _finder_eventCheckbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./finder__eventCheckbox */ "./src/shared/components/filters/finder__eventCheckbox.tsx");
/* harmony import */ var _finder_hiddenInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./finder__hiddenInput */ "./src/shared/components/filters/finder__hiddenInput.tsx");
/* harmony import */ var _finder_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./finder__tag */ "./src/shared/components/filters/finder__tag.tsx");
/* harmony import */ var _finder_reset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./finder__reset */ "./src/shared/components/filters/finder__reset.tsx");
/* harmony import */ var _finder_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finder__sort */ "./src/shared/components/filters/finder__sort.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../util */ "./src/shared/util.tsx");










/**
 * @module patterns/finder/components/finder__filters
 * @author Web Development
 * @copyright City, University of London 2019
 */














/**
 * Predicate for whether a facet should be displayed, if it's dependent on
 * another facet being set.
 *
 * @param {object} facet The facet to potentially display.
 * @param {object} facetMap The facets currently set on the query.
 * @return {bool} - Has any dependency been met
 */
function dependencyMet(facet, facetMap) {
  var setFacets = Object.keys(facetMap);
  if (!facet.dependency) {
    return true;
  }
  if (setFacets.indexOf(facet.dependency) >= 0) {
    var val = facetMap[facet.dependency];
    if (Array.isArray(val)) {
      if (val.length > 0) return true;
    } else {
      if (val !== "") return true;
    }
  }
  return false;
}

/**
 * Component to update facet values in the query.
 *
 * @param {object} props React props.
 * @returns {object} - React component.
 */
function Finder__Filters(props) {
  var totalMatching = props.response && props.response.summary && props.response.summary.fullyMatching;
  var clearFiltersDesktop = !props.updating && Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
      className: "v26-finder__filters__reset v26-finder__filters__reset--desktop"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_reset__WEBPACK_IMPORTED_MODULE_9__["default"], {
      clear: props.clear,
      resetSort: false,
      matrixState: props.matrixState,
      site: props.config.site || "city" // Ensure site is defined
    })) : null,
    clearFiltersMobile = !props.updating && Object.keys(props.query.facets).length > 0 || props.query.sortType !== props.config.sort[0].type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_reset__WEBPACK_IMPORTED_MODULE_9__["default"], {
      clear: props.clear,
      resetSort: true,
      matrixState: props.matrixState,
      site: props.config.site || "city" // Ensure site is defined
    }) : null;
  var sort = !props.matrixState && props.config.sort.length > 1 && props.config.displaySort && totalMatching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "wrapper--v26-finder__select--sort--mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_sort__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: props.mobile ? "sort-mobile" : "sort-desktop",
    config: props.config,
    query: props.query,
    update: props.update
  })) : null;
  var submitSSR = props.matrixState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "v26-finder__filter__submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("button", {
    type: "submit",
    className: "v26-finder__query__submit v26-finder__submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", {
    className: "fal fa-sharp fa-search finder__query__submit__icon",
    "aria-hidden": "true"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", {
    className: "v26-finder__query__submit__text"
  }, "Find"))) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "v26-finder__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("h2", {
    className: "v26-finder__filters__heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", {
    className: "v26-finder__filters__heading__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", {
    className: "far fa-sharp fa-sliders-h icon",
    "aria-hidden": "true"
  }), " ", "Filter ".concat(props.config.summariseAs && props.config.summariseAs.plural)), clearFiltersMobile), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("fieldset", null, !props.hasMounted && props.query.fixedParameters ? props.query.fixedParameters.map(function (param) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_hiddenInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: param.name,
      name: param.name,
      value: param.value
    });
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "wrapper--v26-finder_filters--filters"
  }, props.config.facetLabels && props.config.facetLabels.map(function (facet) {
    if (dependencyMet(facet, props.query.facets)) {
      switch (facet.type) {
        case 'multiCheckbox':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_multiCheckbox__WEBPACK_IMPORTED_MODULE_12__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(function (funnelbackFacet) {
              return funnelbackFacet.name.toLowerCase() === facet.funnelbackName.toLowerCase();
            }) : [],
            update: props.update,
            dependencies: props.config.facetLabels && props.config.facetLabels.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            mobile: props.mobile,
            matrixState: props.matrixState
          });
        case "eventCheckBox":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_eventCheckbox__WEBPACK_IMPORTED_MODULE_13__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            update: props.update,
            pastEventsResponse: props.response.extraSearches && props.response.extraSearches.past && props.response.extraSearches.past.response,
            matrixState: props.matrixState
          });
        case "paramCheckBox":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_paramCheckbox__WEBPACK_IMPORTED_MODULE_14__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            update: props.update,
            pastEventsResponse: props.response.extraSearches && props.response.extraSearches.past && props.response.extraSearches.past.response
          });
        case "eventSelect":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_eventSelect__WEBPACK_IMPORTED_MODULE_15__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            }) : [],
            update: props.update,
            dependencies: props.config.facetLabels && props.config.facetLabels.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            mobile: props.mobile
          });
        case "select":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_select__WEBPACK_IMPORTED_MODULE_16__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            }) : [],
            update: props.update,
            dependencies: props.config.facetLabels && props.config.facetLabels.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            mobile: props.mobile
          });
        case "checkbox":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_checkbox__WEBPACK_IMPORTED_MODULE_17__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            }) : [],
            update: props.update,
            dependencies: props.config.facetLabels && props.config.facetLabels.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            mobile: props.mobile
          });
        case "tag":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_finder_tag__WEBPACK_IMPORTED_MODULE_18__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            responseFacet: props.response && props.response.facets ? props.response.facets.filter(function (funnelbackFacet) {
              return funnelbackFacet.name === facet.funnelbackName;
            }) : [],
            update: props.update,
            dependencies: props.config.facetLabels && props.config.facetLabels.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            matrixState: props.matrixState
          });
        default:
          (0,_util__WEBPACK_IMPORTED_MODULE_19__.gaEvent)("jsError", "JavaScript error", "finder__filters()", "Unknown filter type in finder__filters.js", 0, true);
      }
    } else {
      return null;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("p", {
    className: "v26-finder__filters__nofilters"
  }, "No filters are valid for the current query."), clearFiltersDesktop, sort, submitSSR)));
}
Finder__Filters.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func),
  mobile: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),
  hasMounted: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Filters);

/***/ }),

/***/ "./src/shared/components/filters/finder__filtersmobile.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/components/filters/finder__filtersmobile.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _finder_filters__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./finder__filters */ "./src/shared/components/filters/finder__filters.tsx");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../util */ "./src/shared/util.tsx");


















function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * @module patterns/finder/components/wrapper--finder__filters--mobile
 * @author Web Development
 * @copyright City, University of London 2019
 */







/**
 * Render the mobile version of the filters.
 */
function Finder__FiltersMobile(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    display = _useState2[0],
    setDisplay = _useState2[1];
  var filtersRef = (0,react__WEBPACK_IMPORTED_MODULE_16__.useRef)(null);
  var focusTrapRef = (0,react__WEBPACK_IMPORTED_MODULE_16__.useRef)(null);

  // Set up the focus trap once after mount
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    var filtersEl = filtersRef.current;
    if (!filtersEl) return;
    var applyButton = filtersEl.querySelector(".wrapper--finder__filters--mobile__apply");
    var trap = focus_trap__WEBPACK_IMPORTED_MODULE_17__.createFocusTrap(filtersEl, {
      initialFocus: applyButton || undefined,
      clickOutsideDeactivates: true
    });
    focusTrapRef.current = trap;
    return function () {
      var _focusTrapRef$current;
      if ((_focusTrapRef$current = focusTrapRef.current) !== null && _focusTrapRef$current !== void 0 && _focusTrapRef$current.active) {
        focusTrapRef.current.deactivate();
      }
    };
  }, []);

  // Manage focus trap and scroll behavior based on `display`
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    var focusTrap = focusTrapRef.current;
    if (!focusTrap) return;
    if (display) {
      if (!focusTrap.active) focusTrap.activate();
      (0,_util__WEBPACK_IMPORTED_MODULE_18__.disableBodyScroll)();
    } else {
      if (focusTrap.active) focusTrap.deactivate();
      (0,_util__WEBPACK_IMPORTED_MODULE_18__.enableBodyScroll)();
    }
  }, [display]);
  var totalMatching = props.response && props.response.summary && props.response.summary.totalMatching;
  var result = totalMatching === 1 && props.summariseAs ? props.summariseAs.singular : props.summariseAs && props.summariseAs.plural ? props.summariseAs.plural : null;
  var totalMatchingMessage = totalMatching ? "Show ".concat(totalMatching, " ").concat(result) : "Close";
  var filtersCount = props.config.displaySort ? props.config.sort[0].type !== props.query.sortType || Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, "Filters", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "wrapper--v26-finder__filters--mobile__toggle__count"
  }, "(", props.config.sort[0].type !== props.query.sortType && Object.keys(props.query.facets).length > 0 ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, "Filter") : Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, "Filters", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "wrapper--v26-finder__filters--mobile__toggle__count"
  }, "(", props.config.sort[0].type !== props.query.sortType ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, "Filter");
  var toggle = display ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    type: "button",
    className: "wrapper--v26-finder__filters--mobile__toggle",
    "aria-haspopup": true,
    "aria-expanded": display,
    onClick: function onClick() {
      return setDisplay(true);
    },
    "data-filters-applied": Object.keys(props.query.facets).length !== 0 || props.config.displaySort && props.config.sort[0].type !== props.query.sortType
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "far fa-sharp fa-sliders-h icon",
    "aria-hidden": "true"
  }), " ", filtersCount));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "wrapper--v26-finder__filters",
    "data-open": display,
    ref: filtersRef
  }, toggle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "wrapper--v26-finder__filters--mobile__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "wrapper--v26-finder__filters--mobile__filters__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_finder_filters__WEBPACK_IMPORTED_MODULE_19__["default"], {
    config: props.config,
    query: props.query,
    response: props.response,
    update: props.update,
    clear: props.clear,
    mobile: props.mobile,
    hasMounted: props.hasMounted,
    matrixState: props.matrixState,
    updating: props.updating
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "wrapper--v26-finder__filters--mobile__apply"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    type: "button",
    "aria-expanded": display,
    onClick: function onClick() {
      return setDisplay(false);
    },
    disabled: props.updating
  }, Object.keys(props.query.facets).length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "fa fa-chevron-left icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    "aria-live": "polite"
  }, props.updating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "wrapper--v26-finder__filters--mobile__apply__text"
  }, "Updating ", props.summariseAs && props.summariseAs.plural, "\u2026")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "wrapper--finder__filters--mobile__apply__text"
  }, Object.keys(props.query.facets).length === 0 ? "Close" : totalMatchingMessage)))));
}
Finder__FiltersMobile.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),
  summariseAs: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().object),
  mobile: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),
  hasMounted: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__FiltersMobile);

/***/ }),

/***/ "./src/shared/components/filters/finder__hiddenInput.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/components/filters/finder__hiddenInput.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



/**
 * @module patterns/finder/components/finder__checkbox
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Finder__hiddenInput(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    type: "hidden",
    id: props.name,
    name: props.name,
    value: props.value
  });
}
Finder__hiddenInput.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__hiddenInput);

/***/ }),

/***/ "./src/shared/components/filters/finder__multiCheckbox.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/components/filters/finder__multiCheckbox.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _tools_finder_accordion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../tools/finder__accordion */ "./src/shared/components/tools/finder__accordion.tsx");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

































function Finder__MultiCheckbox(props) {
  var _query$facets, _query$facets2, _props$responseFacet$, _props$responseFacet, _facet$values;
  // Debug logs
  var facet = props.facet,
    query = props.query,
    dependencies = props.dependencies,
    update = props.update;
  var normalize = function normalize(v) {
    return v.toLowerCase().trim().replace(/\s+/g, ' ');
  };

  // Ensure we always treat the facet value as an array (Funnelback can return
  // a string for single values). This prevents length checks on strings and
  // gives a stable `initialChecked` count.
  var rawFacet = (_query$facets = query.facets) === null || _query$facets === void 0 ? void 0 : _query$facets[facet.meta];
  var rawChecked = Array.isArray(rawFacet) ? rawFacet : rawFacet ? [rawFacet] : [];
  var initialChecked = rawChecked.length;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(initialChecked),
    _useState2 = _slicedToArray(_useState, 2),
    checkTotal = _useState2[0],
    setCheckTotal = _useState2[1];

  // Keep internal `checkTotal` synced when `initialChecked` changes due to
  // incoming prop updates (component may mount with 0 then receive props
  // causing initialChecked to become non-zero).
  (0,react__WEBPACK_IMPORTED_MODULE_30__.useEffect)(function () {
    setCheckTotal(initialChecked);
  }, [initialChecked]);
  // Normalize values for comparison and state

  var rawSelected = (_query$facets2 = query.facets) === null || _query$facets2 === void 0 ? void 0 : _query$facets2[facet.meta];
  var selectedValues = Array.isArray(rawSelected) ? rawSelected.map(normalize) : rawSelected ? [normalize(rawSelected)] : [];

  // reduce the Funnelback response for the facet to an array of valid
  // values for the current query
  var responseFacets = (_props$responseFacet$ = (_props$responseFacet = props.responseFacet) === null || _props$responseFacet === void 0 || (_props$responseFacet = _props$responseFacet[0]) === null || _props$responseFacet === void 0 || (_props$responseFacet = _props$responseFacet.allValues) === null || _props$responseFacet === void 0 ? void 0 : _props$responseFacet.map(function (d) {
    return d.data;
  })) !== null && _props$responseFacet$ !== void 0 ? _props$responseFacet$ : [];
  var handleChange = function handleChange(value) {
    var normValue = normalize(value);
    // clone query and facets (immutability)
    var newQuery = _objectSpread(_objectSpread({}, query), {}, {
      facets: _objectSpread({}, query.facets)
    });
    newQuery.facets = _objectSpread({}, newQuery.facets);

    // clear dependent facets
    if (dependencies) {
      dependencies.forEach(function (dep) {
        delete newQuery.facets[dep.meta];
      });
    }
    var rawCurrent = newQuery.facets[facet.meta];
    var currentValues = Array.isArray(rawCurrent) ? rawCurrent.map(normalize) : rawCurrent ? [normalize(rawCurrent)] : [];

    // toggle value
    if (currentValues.includes(normValue)) {
      var updated = currentValues.filter(function (v) {
        return v !== normValue;
      });
      if (updated.length > 0) {
        newQuery.facets[facet.meta] = updated;
      } else {
        // remove empty facet entry entirely
        delete newQuery.facets[facet.meta];
      }
      setCheckTotal(function (prev) {
        return prev - 1;
      });
    } else {
      newQuery.facets[facet.meta] = [].concat(_toConsumableArray(currentValues), [normValue]);
      setCheckTotal(function (prev) {
        return prev + 1;
      });
    }

    // reset paging / flags
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    update.query(newQuery);
    update.results(!update.updateState);
  };
  var multiCheckbox = ((_facet$values = facet.values) === null || _facet$values === void 0 ? void 0 : _facet$values.map(function (value, i) {
    var val = normalize(value.data);
    var isChecked = selectedValues.includes(val);
    var disable = responseFacets.includes(val) ? false : true;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
      key: "".concat(facet.meta, "-").concat(String(value.data)),
      className: "v26-finder_filters__checkbox_wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("input", {
      type: "checkbox",
      id: val.replace(/\s+/g, '-'),
      name: "f\xB1".concat(facet.facetName, "|").concat(facet.meta, "[]"),
      className: "v26-finder_filters__checkbox",
      value: val,
      checked: isChecked,
      onChange: function onChange() {
        return handleChange(val);
      },
      disabled: disable,
      "data-test": isChecked
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("label", {
      className: "v26-finder_filters__label v26-finder_filters__label--always",
      htmlFor: val.replace(/\s+/g, '-')
    }, value.label));
  })) || null;
  if (facet.accordion && !props.matrixState) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_tools_finder_accordion__WEBPACK_IMPORTED_MODULE_31__["default"], {
      title: facet.name,
      matrixState: false,
      totalChecked: checkTotal
    }, multiCheckbox);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
      className: "v26-finder__filter v26-finder__multiCheckbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("legend", null, facet.name), multiCheckbox);
  }
}
Finder__MultiCheckbox.propTypes = {
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().object).isRequired,
  query: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().object).isRequired,
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_32___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_32___default().object)),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().object).isRequired,
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__MultiCheckbox);

/***/ }),

/***/ "./src/shared/components/filters/finder__paramCheckbox.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/components/filters/finder__paramCheckbox.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_23__);


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






















/**
 * @module patterns/finder/components/finder__checkbox
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Finder__paramCheckbox(props) {
  var stringLength = 16,
    stringOffset = -4,
    randomNumber = Math.random().toString(stringLength).slice(stringOffset),
    pastEventsResponseTotal = props.pastEventsResponse && props.pastEventsResponse.resultPacket.resultsSummary && props.pastEventsResponse.resultPacket.resultsSummary.fullyMatching,
    pastEventsPartialResponseTotal = props.pastEventsResponse && props.pastEventsResponse.resultPacket.resultsSummary && props.pastEventsResponse.resultPacket.resultsSummary.partiallyMatching,
    toggleChecked = props.query.parameters && props.facet.meta in props.query.parameters,
    totalText = pastEventsResponseTotal ? pastEventsResponseTotal : pastEventsPartialResponseTotal ? pastEventsPartialResponseTotal : 0;
  var toggleFacet = function toggleFacet() {
    var _props$query$paramete;
    var newQuery = _objectSpread(_objectSpread({}, props.query), {}, {
      parameters: _objectSpread({}, (_props$query$paramete = props.query.parameters) !== null && _props$query$paramete !== void 0 ? _props$query$paramete : {})
    });
    if (toggleChecked) {
      delete newQuery.parameters[props.facet.meta];
    } else if (props.facet.checkedValue !== undefined) {
      newQuery.parameters[props.facet.meta] = props.facet.checkedValue;
    }
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  if (totalText > 0) {
    var _props$facet$checkedV;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
      className: "v26-finder__filter v26-finder__checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
      type: "checkbox",
      id: "".concat(props.facet.funnelbackName, "--").concat(randomNumber),
      name: props.facet.meta,
      value: (_props$facet$checkedV = props.facet.checkedValue) !== null && _props$facet$checkedV !== void 0 ? _props$facet$checkedV : "",
      onChange: function onChange() {
        return toggleFacet();
      },
      checked: toggleChecked
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
      className: "v26-finder__checkbox__indicator v26-finder__checkbox__indicator",
      "aria-hidden": "true",
      onClick: function onClick() {
        return toggleFacet();
      }
    }, toggleChecked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
      className: "fa fa-fw fas fa-check icon"
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("label", {
      className: "v26-finder__filters__label--always",
      htmlFor: "".concat(props.facet.funnelbackName, "--").concat(randomNumber)
    }, props.facet.name, !toggleChecked && totalText && " (" + totalText + ")"));
  } else {
    return null;
  }
}
Finder__paramCheckbox.propTypes = {
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().object),
  pastEventsResponse: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().object),
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_23___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_23___default().object))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__paramCheckbox);

/***/ }),

/***/ "./src/shared/components/filters/finder__reset.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/components/filters/finder__reset.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/filters/finder__reset
 * @author Web Development
 * @copyright City, University of London 2019
 */



/**
 * Clear input button.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Reset(props) {
  var _props$disabled, _props$label;
  var isDisabled = (_props$disabled = props.disabled) !== null && _props$disabled !== void 0 ? _props$disabled : false;
  var label = (_props$label = props.label) !== null && _props$label !== void 0 ? _props$label : "Clear all filters";
  var buttonClassName = props.className ? "v26-finder__reset ".concat(props.className) : "v26-finder__reset";
  var resetIconClassName = props.site ? "fa fa-times icon" : "fa-sharp fa-solid fa-xmark icon";
  if (props.matrixState) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "?",
      className: buttonClassName,
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: resetIconClassName
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "v26-finder__reset__text"
    }, label));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: buttonClassName,
      disabled: isDisabled,
      "aria-disabled": isDisabled,
      type: "button",
      onClick: function onClick() {
        if (!isDisabled) props.clear(props.resetSort);
      }
    }, props.site === 'city' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "v26-finder__reset__text"
    }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: resetIconClassName
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: resetIconClassName
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "v26-finder__reset__text"
    }, label)));
  }
}
Finder__Reset.propTypes = {
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  resetSort: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Reset);

/***/ }),

/***/ "./src/shared/components/filters/finder__select.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/components/filters/finder__select.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_29__);


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




























/**<
 * @module patterns/finder/components/finder__select
 * @author Web Development
 * @copyright City, University of London 2019
 */



function Finder__Select(props) {
  var randomNumber = props.mobile ? "mobile" : "desktop",
    currentValue = props.facet && props.query.facets[props.facet.meta] || "";

  // reduce the facet configuration to an array of all possible values for
  // the facet
  var allFacets = props.facet && props.facet.values && props.facet.values.reduce(function (acc, data) {
    return [].concat(_toConsumableArray(acc), [data]);
  }, []);

  // reduce the Funnelback response for the facet to an array of valid
  // values for the current query
  var responseFacets = props.responseFacet[0] && props.responseFacet[0].allValues ? props.responseFacet[0].allValues.reduce(function (acc, data) {
    return [].concat(_toConsumableArray(acc), [data.data]);
  }, []) : [];

  // count how many possible facets are not valid for the current query
  // and will be hidden
  var hiddenFacets = allFacets ? allFacets.map(function (facet) {
    return facet.data;
  }).filter(function (facet) {
    return responseFacets.indexOf(facet.toLowerCase()) < 0;
  }).length : 0;
  var setFacet = function setFacet(value) {
    var newQuery = _objectSpread(_objectSpread({}, props.query), {}, {
      facets: _objectSpread({}, props.query.facets)
    });
    if (props.dependencies) {
      props.dependencies.forEach(function (facet) {
        delete newQuery.facets[facet.meta];
      });
    }
    if (value) {
      newQuery.facets[props.facet.meta] = value;
    } else {
      delete newQuery.facets[props.facet.meta];
    }
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  if (props.facet && props.facet.values && props.facet.values.length > hiddenFacets) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
      className: "v26-finder__filter v26-finder__select ".concat(currentValue && "v26-finder__select--selected")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("label", {
      htmlFor: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber)
    }, props.facet.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("select", {
      name: "meta_".concat(props.facet.meta, "_sand"),
      id: "meta_".concat(props.facet.meta, "_sand--").concat(randomNumber),
      onChange: function onChange(e) {
        return setFacet(e.target.value);
      },
      value: currentValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("option", {
      value: "",
      id: "meta".concat(props.facet.meta, "all--").concat(randomNumber)
    }, props.facet.noSelection), props.facet.values.map(function (value, i) {
      var responseFacetDetails = props.responseFacet[0] && props.responseFacet[0].allValues && props.responseFacet[0].allValues.filter(function (responseFacetValue) {
        return responseFacetValue.data.toLowerCase() === value.data.toLowerCase();
      });
      if (!Array.isArray(currentValue) && currentValue.toLowerCase() === value.data.toLowerCase() || responseFacetDetails && responseFacetDetails[0]) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("option", {
          key: i,
          value: value.data.toLowerCase()
        }, value.label, currentValue !== value.data && responseFacetDetails[0] && responseFacetDetails[0].count > 0 ? " (".concat(responseFacetDetails[0].count, ")") : "");
      } else {
        return null;
      }
    })));
  } else {
    return null;
  }
}
Finder__Select.propTypes = {
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().object),
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_29___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_29___default().object)),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().object),
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_29___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_29___default().object)),
  mobile: (prop_types__WEBPACK_IMPORTED_MODULE_29___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Select);

/***/ }),

/***/ "./src/shared/components/filters/finder__sort.tsx":
/*!********************************************************!*\
  !*** ./src/shared/components/filters/finder__sort.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);










/**
 * @module patterns/finder/components/finder__sort
 * @author Web Development
 * @copyright City, University of London 2020
 */



/**
 * Component to change the sort order of the query.
 *
 * @param {object} props React props.
 * @returns {object} - React component.
 */
function Finder__Sort(props) {
  var stringLength = 16,
    stringOffset = -4,
    randomNumber = Math.random().toString(stringLength).slice(stringOffset);
  var setSort = function setSort(type) {
    var newQuery = props.query;
    newQuery.sortType = type;
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  var validSorts = props.config.sort.filter(function (sortType) {
    return sortType.type === "" ? props.query.query !== "" || Object.keys(props.query.facets).length > 0 || props.query.sortType === "" ? true : false : true;
  });
  return validSorts.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "v26-finder_select--sort v26-finder__select".concat(props.query.sortType !== props.config.sort[0].type ? " finder__select--selected" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("label", {
    className: "v26-finder__select__overline",
    htmlFor: "sort--".concat(randomNumber)
  }, "Sort by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("select", {
    name: "sort",
    id: "sort--".concat(randomNumber),
    onChange: function onChange(e) {
      return setSort(e.target.value);
    },
    value: props.query.sortType
  }, validSorts.map(function (sortType, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("option", {
      key: i,
      value: sortType.type
    }, sortType.label);
  }))) : null;
}
Finder__Sort.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Sort);

/***/ }),

/***/ "./src/shared/components/filters/finder__tag.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/filters/finder__tag.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _logic_hyper_link__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../logic/hyper-link */ "./src/shared/logic/hyper-link.ts");
/* harmony import */ var _logic_has_mounted__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../logic/has-mounted */ "./src/shared/logic/has-mounted.ts");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




























/**
 * @module patterns/finder/components/finder__tag
 * @author Web Development
 * @copyright City St George's, University of London 2020
 */





function Finder__Tag(props) {
  var hasMounted = (0,_logic_has_mounted__WEBPACK_IMPORTED_MODULE_29__["default"])();
  if (!hasMounted) return null;

  // reduce the facet configuration to an array of all possible values for
  // the facet
  var allFacets = props.facet && props.facet.values && props.facet.values.reduce(function (acc, data) {
    return [].concat(_toConsumableArray(acc), [data]);
  }, []);

  // reduce the Funnelback response for the facet to an array of valid
  // values for the current query
  var responseFacets = props.responseFacet[0] && props.responseFacet[0].allValues ? props.responseFacet[0].allValues.reduce(function (acc, data) {
    return [].concat(_toConsumableArray(acc), [data.data]);
  }, []) : [];

  // count how many possible facets are not valid for the current query
  // and will be hidden
  var hiddenFacets = allFacets && allFacets.map(function (facet) {
    return facet.data;
  }).filter(function (facet) {
    return responseFacets.indexOf(facet.toLowerCase()) < 0;
  }).length;
  var deleteFacet = function deleteFacet() {
    var newQuery = _objectSpread(_objectSpread({}, props.query), {}, {
      facets: _objectSpread({}, props.query.facets)
    });
    if (props.dependencies) {
      props.dependencies.forEach(function (facet) {
        delete newQuery.facets[facet.meta];
      });
    }
    delete newQuery.facets[props.facet.meta];
    newQuery.startRank = 1;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  var labelText = props.query.facets[props.facet.meta] && props.facet.values && hiddenFacets && props.facet.values.length >= hiddenFacets && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement((react__WEBPACK_IMPORTED_MODULE_28___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("span", {
    className: "fa-sharp fa-solid fa-xmark icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("span", {
    className: "v26-finder__tag__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("span", {
    className: "sr-only"
  }, "Remove filter for "), props.facet.name, ":", " ", props.facet.values.filter(function (value) {
    return value.data.toLowerCase() === props.query.facets[props.facet.meta].toLowerCase();
  })[0].label));
  var ssrHiddenField = props.matrixState && props.query.facets[props.facet.meta] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("input", {
    type: "hidden",
    name: "meta_".concat(props.facet.meta, "_sand"),
    value: props.query.facets[props.facet.meta]
  }) : null;
  if (props.facet.values && hiddenFacets && props.facet.values.length >= hiddenFacets && props.query.facets[props.facet.meta]) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
      className: "v26-finder__filter v26-finder__tag"
    }, ssrHiddenField, props.matrixState && props.query.facets[props.facet.meta] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("a", {
      href: (0,_logic_hyper_link__WEBPACK_IMPORTED_MODULE_30__.hyperLink)(props.query, props.facet)
    }, labelText) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("button", {
      onClick: function onClick() {
        return deleteFacet();
      },
      type: "button"
    }, labelText));
  } else {
    return null;
  }
}
Finder__Tag.propTypes = {
  facet: (prop_types__WEBPACK_IMPORTED_MODULE_31___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_31___default().object),
  responseFacet: prop_types__WEBPACK_IMPORTED_MODULE_31___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_31___default().object)),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_31___default().object),
  dependencies: prop_types__WEBPACK_IMPORTED_MODULE_31___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_31___default().object)),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_31___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Tag);

/***/ }),

/***/ "./src/shared/components/query/finder__clear.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/query/finder__clear.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @module patterns/finder/components/finder__clear
 * @author Web Development
 * @copyright City, University of London 2019
 */



/**
 * Clear input button.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Clear(props) {
  var clearIconCLassName = props.site === "bayes" ? "fa fa-times icon" : "fa-sharp fa-solid fa-xmark icon";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "v26-finder__clear",
    type: "button",
    onClick: function onClick() {
      props.clear(props.resetSort);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: clearIconCLassName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "v26-finder__clear__text"
  }, "Clear query"));
}
Finder__Clear.propTypes = {
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  resetSort: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Clear);

/***/ }),

/***/ "./src/shared/components/query/finder__query.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/query/finder__query.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _logic_funnelback__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../logic/funnelback */ "./src/shared/logic/funnelback.ts");
/* harmony import */ var _finder_clear__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./finder__clear */ "./src/shared/components/query/finder__clear.tsx");
/* harmony import */ var _logic_has_mounted__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../logic/has-mounted */ "./src/shared/logic/has-mounted.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../util */ "./src/shared/util.tsx");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






























/**
 * @module patterns/finder/components/finder__query
 * @author Web Development
 * @copyright City, University of London 2019
 */





 // ✅ added

var maximumSuggestions = 5;
var escapeKey = "Escape",
  endKey = "End",
  homeKey = "Home",
  arrowUp = "ArrowUp",
  arrowDown = "ArrowDown";
function highlightQueryTerm(suggestion, partialQuery) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("span", {
    className: "sr-only"
  }, suggestion), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("span", {
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("span", {
    className: "v26-finder__suggestion"
  }, suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()), suggestion.indexOf(partialQuery.toLowerCase()) + partialQuery.length)), suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()) + partialQuery.length)));
}
function Finder__Query(props) {
  var searchIconClassName = props.config.site && props.config.site === "bayes" ? "fa fa-search fa-lg" : "fal fa-sharp fa-search";
  var searchButtonLabel = props.config.site && props.config.site === "city" ? "Search" : "Find";
  var hasMounted = (0,_logic_has_mounted__WEBPACK_IMPORTED_MODULE_31__["default"])(); // ✅ detect client vs server

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_30__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(props.query.query || ""),
    _useState2 = _slicedToArray(_useState, 2),
    partialQuery = _useState2[0],
    setPartialQuery = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    suggestions = _useState4[0],
    setSuggestions = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    call = _useState6[0],
    setCall = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)("v26-finder--" + props.query.collection),
    _useState8 = _slicedToArray(_useState7, 1),
    inputId = _useState8[0];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    showSuggestions = _useState0[0],
    setShowSuggestions = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    activeSuggestionID = _useState10[0],
    setActiveSuggestionID = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_30__.useEffect)(function () {
    setPartialQuery(props.query.query);
  }, [props.query.query, props.updating]);
  (0,react__WEBPACK_IMPORTED_MODULE_30__.useEffect)(function () {
    return function () {
      if (call) call.abort();
    };
  }, [call]);
  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  var clearQuery = function clearQuery() {
    if (call) call.abort();
    setPartialQuery("");
    setSuggestions([]);
    focusInput();
    var newQuery = _objectSpread({}, props.query);
    newQuery.misspelling = null;
    newQuery.query = "";
    newQuery.sortType = props.config.sort[0].type;
    newQuery.startRank = 1;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  var submitForm = function submitForm(query) {
    if (!query) return;
    if (call) call.abort();
    setSuggestions([]);
    var newQuery = props.query;
    newQuery.misspelling = null;
    newQuery.query = query ? query : partialQuery ? partialQuery : "";
    newQuery.sortType = partialQuery ? "" : props.config.sort[0].type;
    newQuery.startRank = 1;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  var clear = partialQuery && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_finder_clear__WEBPACK_IMPORTED_MODULE_32__["default"], {
    clear: function clear() {
      var value = inputRef.current ? inputRef.current.value : "";
      if (inputRef.current) inputRef.current.value = "";
      setPartialQuery("");
      setShowSuggestions(false);
      setActiveSuggestionID("");
      setSuggestions([]);
      if (value === props.query.query) {
        clearQuery();
      }
    },
    site: props.config.site || "city"
  });
  var submitSuggestion = function submitSuggestion(suggestion) {
    setShowSuggestions(false);
    setSuggestions([]);
    focusInput();
    submitForm(suggestion);
  };
  var suggestionsList = suggestions && suggestions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("ul", {
    role: "listbox",
    "aria-label": "Search suggestions",
    "aria-activedescendant": activeSuggestionID,
    className: showSuggestions ? "v26-finder__query__suggestions show" : "v26-finder__query__suggestions hide"
  }, _toConsumableArray(new Set(suggestions)).slice(0, maximumSuggestions).map(function (suggestion, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("li", {
      key: suggestion,
      role: "option",
      id: inputId + "--" + i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("button", {
      type: "button",
      onBlur: function onBlur() {
        setActiveSuggestionID("");
        setShowSuggestions(false);
      },
      onFocus: function onFocus() {
        return setShowSuggestions(true);
      },
      onMouseDown: function onMouseDown() {
        return submitSuggestion(suggestion);
      },
      onClick: function onClick() {
        return submitSuggestion(suggestion);
      },
      onKeyDown: function onKeyDown(e) {
        var _e$currentTarget$clos, _target$parentElement, _e$currentTarget$pare;
        var target = e.target;
        switch (e.key) {
          case escapeKey:
            (_e$currentTarget$clos = e.currentTarget.closest(".v26-finder__query")) === null || _e$currentTarget$clos === void 0 || (_e$currentTarget$clos = _e$currentTarget$clos.querySelector("input")) === null || _e$currentTarget$clos === void 0 || _e$currentTarget$clos.focus();
            setSuggestions([]);
            setActiveSuggestionID("");
            break;
          case arrowUp:
            if ((_target$parentElement = target.parentElement) !== null && _target$parentElement !== void 0 && _target$parentElement.previousElementSibling && target.parentElement.previousElementSibling.querySelector("button")) {
              var _target$parentElement2;
              e.preventDefault();
              (_target$parentElement2 = target.parentElement.previousElementSibling.querySelector("button")) === null || _target$parentElement2 === void 0 || _target$parentElement2.focus();
              setActiveSuggestionID(target.parentElement.previousElementSibling.id);
            } else {
              var _target$parentElement3;
              e.preventDefault();
              (_target$parentElement3 = target.parentElement) === null || _target$parentElement3 === void 0 || (_target$parentElement3 = _target$parentElement3.parentElement) === null || _target$parentElement3 === void 0 || (_target$parentElement3 = _target$parentElement3.parentElement) === null || _target$parentElement3 === void 0 || (_target$parentElement3 = _target$parentElement3.querySelector("input")) === null || _target$parentElement3 === void 0 || _target$parentElement3.focus();
              setActiveSuggestionID("");
            }
            break;
          case arrowDown:
            e.preventDefault();
            (_e$currentTarget$pare = e.currentTarget.parentElement) === null || _e$currentTarget$pare === void 0 || (_e$currentTarget$pare = _e$currentTarget$pare.nextElementSibling) === null || _e$currentTarget$pare === void 0 || (_e$currentTarget$pare = _e$currentTarget$pare.querySelector("button")) === null || _e$currentTarget$pare === void 0 || _e$currentTarget$pare.focus();
            break;
          case homeKey:
            {
              var _e$currentTarget$clos2;
              e.preventDefault();
              var first = (_e$currentTarget$clos2 = e.currentTarget.closest("ul")) === null || _e$currentTarget$clos2 === void 0 ? void 0 : _e$currentTarget$clos2.firstChild;
              if (first instanceof Element) {
                var _first$querySelector;
                (_first$querySelector = first.querySelector("button")) === null || _first$querySelector === void 0 || _first$querySelector.focus();
              }
              break;
            }
          case endKey:
            {
              var _e$currentTarget$clos3;
              e.preventDefault();
              var last = (_e$currentTarget$clos3 = e.currentTarget.closest("ul")) === null || _e$currentTarget$clos3 === void 0 ? void 0 : _e$currentTarget$clos3.lastChild;
              if (last instanceof Element) {
                var _last$querySelector;
                (_last$querySelector = last.querySelector("button")) === null || _last$querySelector === void 0 || _last$querySelector.focus();
              }
              break;
            }
        }
      }
    }, highlightQueryTerm(suggestion, partialQuery)));
  }));

  //shared props between input
  var inputSharedProps = {
    id: inputId,
    name: "query",
    placeholder: props.config.placeholder,
    type: "text",
    className: "v26-finder__query-input"
  };

  //Input for server side render
  var fallbackInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("input", _extends({}, inputSharedProps, {
    defaultValue: partialQuery,
    autoComplete: "off"
  }));

  //Input for client side render
  var searchInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("input", _extends({}, inputSharedProps, {
    ref: inputRef,
    value: partialQuery,
    onKeyDown: function onKeyDown(e) {
      if (e.key === escapeKey) clearQuery();else if (e.key === arrowDown && suggestions.length > 0) {
        var _e$currentTarget$pare2, _e$currentTarget$pare3;
        e.preventDefault();
        var button = (_e$currentTarget$pare2 = e.currentTarget.parentElement) === null || _e$currentTarget$pare2 === void 0 ? void 0 : _e$currentTarget$pare2.querySelector(".v26-finder__query__suggestions button");
        button === null || button === void 0 || button.focus();
        setActiveSuggestionID(((_e$currentTarget$pare3 = e.currentTarget.parentElement) === null || _e$currentTarget$pare3 === void 0 || (_e$currentTarget$pare3 = _e$currentTarget$pare3.querySelector(".v26-finder__query__suggestions li")) === null || _e$currentTarget$pare3 === void 0 ? void 0 : _e$currentTarget$pare3.id) || "");
      }
    },
    onFocus: function onFocus() {
      return setShowSuggestions(true);
    },
    onBlur: function onBlur() {
      return setShowSuggestions(false);
    },
    onChange: function onChange(e) {
      var val = e.target.value;
      setPartialQuery(val);
      setSuggestions([]);
      if (call) call.abort();
      if (val) {
        var _suggest = (0,_logic_funnelback__WEBPACK_IMPORTED_MODULE_33__.suggest)(props.query.collection, val, props.config.site ? props.config.site : undefined),
          _suggest2 = _slicedToArray(_suggest, 2),
          promise = _suggest2[0],
          newCall = _suggest2[1];
        setCall(newCall);
        promise.then(function (data) {
          return setSuggestions(data);
        })["catch"](function (error) {
          if (!(0,_util__WEBPACK_IMPORTED_MODULE_34__.isRequestCanceled)(error)) {
            setSuggestions([]);
          }
        });
      } else {
        setSuggestions([]);
      }
    }
  }));

  // ✅ Server-side fallback
  if (!hasMounted) {
    return props.config.site === "city" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("fieldset", {
      className: "v26-finder__fullwidth__wrapper "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
      className: "v26-finder__fullwidth__inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
      className: "v26-finder__query"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("label", {
      className: "sr-only",
      htmlFor: inputId
    }, "Search ".concat(props.config.summariseAs && props.config.summariseAs.plural)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
      className: "v26-finder__query__input__wrapper"
    }, fallbackInput, clear, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("button", {
      type: "submit",
      className: "v26-finder__query__submit",
      onClick: function onClick() {
        return submitForm(inputRef.current ? inputRef.current.value : "");
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("span", {
      className: "".concat(searchIconClassName, " v26-finder__query__submit__icon"),
      "aria-hidden": "true"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("span", {
      className: "v26-finder__query__submit__text"
    }, searchButtonLabel)))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("fieldset", {
      className: "v26-finder__query"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
      className: "v26-finder__query__input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("label", {
      className: "sr-only",
      htmlFor: inputId
    }, "Search ".concat(props.config.summariseAs && props.config.summariseAs.plural)), fallbackInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("button", {
      type: "submit",
      className: "v26-finder__query__submit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("span", {
      className: "fal fa-sharp fa-search finder__query__submit__icon",
      "aria-hidden": "true"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("span", {
      className: "v26-finder__query__submit__text"
    }, searchButtonLabel))));
  }

  // ✅ Interactive version after hydration
  return props.config.site === "city" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("fieldset", {
    className: "v26-finder__fullwidth__wrapper "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "v26-finder__fullwidth__inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "v26-finder__query"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("label", {
    className: "sr-only",
    htmlFor: inputId
  }, "Search ".concat(props.config.summariseAs && props.config.summariseAs.plural)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "v26-finder__query__input__wrapper"
  }, searchInput, clear, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("button", {
    type: "submit",
    className: "v26-finder__query__submit",
    onClick: function onClick() {
      return submitForm(inputRef.current ? inputRef.current.value : "");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("span", {
    className: "".concat(searchIconClassName, " v26-finder__query__submit__icon"),
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("span", {
    className: "v26-finder__query__submit__text"
  }, searchButtonLabel)), suggestionsList)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("fieldset", {
    className: "v26-finder__query"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "v26-finder__query__input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("div", {
    className: "v26-finder__query__icon--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("span", {
    className: "finder__icon ".concat(searchIconClassName, " icon"),
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("label", {
    className: "sr-only",
    htmlFor: inputId
  }, "Search ".concat(props.config.summariseAs && props.config.summariseAs.plural)), searchInput, suggestionsList, clear), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("button", {
    type: "submit",
    className: "v26-finder__query__submit",
    onClick: function onClick() {
      return submitForm(inputRef.current ? inputRef.current.value : "");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("span", {
    className: "".concat(searchIconClassName, " v26-finder__query__submit__icon"),
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("span", {
    className: "v26-finder__query__submit__text"
  }, searchButtonLabel))));
}
Finder__Query.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_35___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_35___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_35___default().object),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_35___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Query);

/***/ }),

/***/ "./src/shared/components/results/finder__announcement.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/components/results/finder__announcement.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.es.mjs");


/**
 * @module patterns/finder/components/results/finder__announcement
 * @author Web Development
 * @copyright City, University of London 2019
 */




/**
 * Renders the announcement box
 *
 * @param {object} props React props.
 * @returns {object} - React component.
 */

function Finder__Announcement(props) {
  var clean = dompurify__WEBPACK_IMPORTED_MODULE_1__["default"].sanitize(props.announcement, {
    ALLOWED_TAGS: ["strong", "p", "h2", "h3", "a"]
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "v26-finder__results__announcement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    dangerouslySetInnerHTML: {
      __html: clean
    }
  }));
}
Finder__Announcement.propTypes = {
  announcement: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Announcement);

/***/ }),

/***/ "./src/shared/components/results/finder__clear__filters.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/components/results/finder__clear__filters.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _filters_finder_clearFilterTag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../filters/finder__clearFilterTag */ "./src/shared/components/filters/finder__clearFilterTag.tsx");
/* harmony import */ var _filters_finder_reset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../filters/finder__reset */ "./src/shared/components/filters/finder__reset.tsx");













function Finder__Clear__Filters(props) {
  var _config$facetLabels;
  var query = props.query,
    clear = props.clear,
    update = props.update,
    config = props.config,
    updating = props.updating;
  var facetsValues = query.facets ? Object.values(query.facets) : [];
  var hasNoEmptyFacet = facetsValues.some(function (v) {
    return !(v === '' || Array.isArray(v) && v.length === 0);
  });
  var clearFiltersDesktop = !updating && hasNoEmptyFacet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
    className: "v26-finder__filters__reset v26-finder__filters__reset--desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_filters_finder_reset__WEBPACK_IMPORTED_MODULE_8__["default"], {
    clear: props.clear,
    resetSort: false,
    matrixState: props.matrixState,
    site: props.config.site || "city"
  })) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
    className: "v26-finder__results__clear-filters"
  }, (_config$facetLabels = config.facetLabels) === null || _config$facetLabels === void 0 ? void 0 : _config$facetLabels.map(function (facet) {
    if (query.facets && query.facets[facet.meta]) {
      if (Array.isArray(query.facets[facet.meta])) {
        return query.facets[facet.meta].map(function (facetValue) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_filters_finder_clearFilterTag__WEBPACK_IMPORTED_MODULE_9__["default"], {
            key: "".concat(facet.meta, "-").concat(facetValue),
            value: facetValue,
            facet: facet,
            query: query,
            update: update,
            clear: clear,
            dependencies: config.facetLabels && config.facetLabels.filter(function (candidate) {
              return candidate.dependency === facet.meta;
            }),
            site: props.config.site || "city",
            matrixState: props.matrixState,
            config: props.config
          });
        });
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_filters_finder_clearFilterTag__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: "".concat(facet.meta, "-").concat(query.facets[facet.meta]),
        value: query.facets[facet.meta],
        facet: facet,
        query: query,
        update: update,
        clear: clear,
        dependencies: config.facetLabels && config.facetLabels.filter(function (candidate) {
          return candidate.dependency === facet.meta;
        }),
        site: props.config.site || "city",
        matrixState: props.matrixState,
        config: props.config
      });
    }
    return null;
  }), clearFiltersDesktop);
}
Finder__Clear__Filters.propTypes = {
  query: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
  config: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Clear__Filters);

/***/ }),

/***/ "./src/shared/components/results/finder__didyoumean.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/components/results/finder__didyoumean.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__);


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




















/**
 * @module patterns/finder/components/finder__didyoumean
 * @author Web Development
 * @copyright City, University of London 2019
 */



/**
 * Returns a Funnelback spelling suggestion as a button to update the query.
 *
 * @param {object} props React props.
 * @returns {object} - React component.
 */
function Finder__DidYouMean(props) {
  var _props$response$spell, _props$response$spell2;
  var suggestion = (_props$response$spell = (_props$response$spell2 = props.response.spell) === null || _props$response$spell2 === void 0 || (_props$response$spell2 = _props$response$spell2.text) === null || _props$response$spell2 === void 0 ? void 0 : _props$response$spell2.split(/\s/)[0].trim()) !== null && _props$response$spell !== void 0 ? _props$response$spell : "";
  var didyoumean = props.query.misspelling ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("p", {
    className: "v26-finder__results__didyoumean"
  }, "No ", props.summariseAs && props.summariseAs.plural, " found for \u201C", props.query.misspelling, "\u201D. Searching instead for \u201C", props.query.query, "\u201D.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("p", {
    className: "v26-finder__results__didyoumean"
  }, "Did you mean", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
    type: "button",
    className: "v26-finder__didyoumean__button",
    onClick: function onClick() {
      var newQuery = _objectSpread({}, props.query); // clone the query object
      newQuery.query = suggestion;
      newQuery.startRank = 1;
      newQuery.misspelling = null;
      newQuery.interacted = true;
      newQuery.facets = {};
      props.update.query(newQuery);
      props.update.results(!props.update.updateState);
    }
  }, "\u201C", suggestion, "\u201D"), "?");
  return didyoumean;
}
Finder__DidYouMean.propTypes = {
  query: (prop_types__WEBPACK_IMPORTED_MODULE_21___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_21___default().object),
  summariseAs: (prop_types__WEBPACK_IMPORTED_MODULE_21___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_21___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__DidYouMean);

/***/ }),

/***/ "./src/shared/components/results/finder__pagination.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/components/results/finder__pagination.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logic_hyper_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logic/hyper-link */ "./src/shared/logic/hyper-link.ts");


/**
 * @module patterns/finder/components/finder__pagination
 * @author Web Development
 * @copyright City, University of London 2019
 */




/**
 * Renders standard pagination controls patttern for the results.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Pagination(props) {
  var numberOfPages = props.totalMatching && props.numRanks && Math.ceil(props.totalMatching / props.numRanks),
    currentPage = props.currStart && props.numRanks && Math.ceil(props.currStart / props.numRanks),
    pages = [];
  var changePage = function changePage(pageNumber) {
    var newStartRank = props.numRanks && 1 + (pageNumber - 1) * props.numRanks,
      newQuery = props.query;
    newQuery.startRank = newStartRank;
    newQuery.misspelling = null;
    newQuery.interacted = true;
    props.update.query(newQuery);
    props.update.results(!props.update.updateState);
  };
  pages.push(currentPage === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    key: "previousPage",
    className: "v26-pagination__controls__button--prev"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Previous ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "page"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "v26-pagination__controls__button--prev",
    key: "prev",
    role: "button",
    onClick: function onClick(e) {
      e.preventDefault();
      if (currentPage) {
        changePage(currentPage - 1);
      }
    },
    href: (0,_logic_hyper_link__WEBPACK_IMPORTED_MODULE_1__.hyperLink)(props.query, null, currentPage - 1, props.numRanks)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Previous ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "page"))));
  var _loop = function _loop(page) {
    var className;
    switch (page - numberOfPages) {
      case 0:
        className = "v26-pagination__controls__element v26-pagination__controls__button v26-pagination__controls__button--last";
        break;
      case -1:
        className = "v26-pagination__controls__element v26-pagination__controls__button v26-pagination__controls__button--penultimate";
        break;
      default:
        className = "v26-pagination__controls__element v26-pagination__controls__button";
    }
    if (page === currentPage) {
      pages.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        "aria-current": page === currentPage ? "page" : undefined,
        "aria-expanded": page === currentPage ? true : false,
        className: className,
        "data-page": page,
        "data-proximity": Math.abs(page - currentPage),
        key: page,
        "aria-disabled": page === currentPage ? true : false
      }, page));
    } else {
      pages.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        "aria-current": page === currentPage ? "page" : undefined,
        "aria-expanded": page === currentPage ? true : false,
        "aria-label": "Open page ".concat(page),
        className: className,
        "data-page": page,
        "data-proximity": Math.abs(page - currentPage),
        key: page,
        role: "button",
        "aria-disabled": page === currentPage ? true : false,
        onClick: function onClick(e) {
          e.preventDefault();
          changePage(page);
        },
        href: (0,_logic_hyper_link__WEBPACK_IMPORTED_MODULE_1__.hyperLink)(props.query, null, page, props.numRanks)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, page)));
    }
    if (page === 1) {
      pages.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: "firstEllipsis",
        className: "v26-pagination__controls__element v26-pagination__controls__ellipsis v26-pagination__controls__ellipsis--first"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u2026")));
    } else if (page === numberOfPages - 1) {
      pages.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: "lastEllipsis",
        className: "v26-pagination__controls__element v26-pagination__controls__ellipsis v26-pagination__controls__ellipsis--last"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u2026")));
    }
  };
  for (var page = 1; page <= numberOfPages; page++) {
    _loop(page);
  }
  pages.push(currentPage === numberOfPages ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    key: "nextPage",
    className: "v26-pagination__controls__button--next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Next ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "page"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "v26-pagination__controls__button--next",
    key: "next",
    role: "button",
    "aria-disabled": currentPage === numberOfPages ? true : false,
    onClick: function onClick(e) {
      e.preventDefault();
      if (currentPage !== numberOfPages) {
        changePage(currentPage + 1);
      }
    },
    href: (0,_logic_hyper_link__WEBPACK_IMPORTED_MODULE_1__.hyperLink)(props.query, null, currentPage + 1, props.numRanks)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Next ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "page"))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "v26-pagination__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "v26-pagination__controls",
    "data-pagecount": numberOfPages
  }, pages));
}
Finder__Pagination.propTypes = {
  currStart: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  numRanks: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  totalMatching: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Pagination);

/***/ }),

/***/ "./src/shared/components/results/finder__results.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/components/results/finder__results.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cards/finder__results__bestbet */ "./src/shared/components/cards/finder__results__bestbet.tsx");
/* harmony import */ var _cards_finder_results_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cards/finder__results__card */ "./src/shared/components/cards/finder__results__card.tsx");
/* harmony import */ var _finder_didyoumean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder__didyoumean */ "./src/shared/components/results/finder__didyoumean.tsx");
/* harmony import */ var _finder_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finder__pagination */ "./src/shared/components/results/finder__pagination.tsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _finder_results_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finder__results__summary */ "./src/shared/components/results/finder__results__summary.tsx");
/* harmony import */ var _finder_announcement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finder__announcement */ "./src/shared/components/results/finder__announcement.tsx");
/* harmony import */ var _finder_clear_filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder__clear__filters */ "./src/shared/components/results/finder__clear__filters.tsx");





/**
 * @module patterns/finder/components/finder__results
 * @author Web Development
 * @copyright City, University of London 2021
 */










/**
 * Render Funnelback results.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results(props) {
  var updating = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    className: "v26-finder__results__updating",
    "aria-live": "polite"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Updating ", props.summariseAs && props.summariseAs.plural, "\u2026"));
  var resultsClass = "resultsVariant" in props.config ? "v26-finder__results__list v26-finder__results__list--".concat(props.config.resultsVariant) : "finder__results__list";
  if (props.response) {
    var summary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_finder_results_summary__WEBPACK_IMPORTED_MODULE_4__["default"], {
      clear: props.clear,
      config: props.config,
      currEnd: props.response.summary.currEnd,
      currStart: props.response.summary.currStart,
      numRanks: props.response.summary.numRanks,
      query: props.query,
      summariseAs: props.summariseAs,
      totalMatching: props.response.summary.totalMatching,
      update: props.update,
      summaryHeadingRef: props.summaryHeadingRef,
      site: props.config.site || "city"
    });
    var announcement = props.config.announcement && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_finder_announcement__WEBPACK_IMPORTED_MODULE_5__["default"], {
      announcement: props.config.announcement
    });
    var didYouMean = (props.query.misspelling || props.response.spell) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_finder_didyoumean__WEBPACK_IMPORTED_MODULE_6__["default"], {
      query: props.query,
      summariseAs: props.summariseAs,
      response: props.response,
      update: props.update
    });
    var clearFilterTag = props.query.facets && props.config.clearFiltersWithinResults ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_finder_clear_filters__WEBPACK_IMPORTED_MODULE_7__["default"], {
      query: props.query,
      update: props.update,
      clear: props.clear,
      config: props.config,
      matrixState: props.matrixState,
      updating: props.updating,
      site: props.config.site || "city"
    }) : null;

    // if we have more results than will fit on a single page, we need
    // pagination
    var pagination = props.response.summary.totalMatching > props.response.summary.numRanks && props.response.summary.numRanks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_finder_pagination__WEBPACK_IMPORTED_MODULE_8__["default"], {
      currStart: props.response.summary.currStart,
      numRanks: props.response.summary.numRanks,
      query: props.query,
      totalMatching: props.response.summary.totalMatching,
      update: props.update
    });
    var results = props.response.bestBets && props.response.bestBets.length > 0 || props.response.results.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("ol", {
      start: props.response.summary.currStart,
      className: resultsClass
    }, props.response.bestBets && props.response.bestBets.map(function (card, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_9__["default"], {
        details: card,
        key: "best-bet__".concat(i)
      });
    }), props.response.results.map(function (card) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
        bestBets: false,
        details: card,
        key: "".concat(card.collection, "_").concat(card.docNum),
        type: props.type,
        query: props.query,
        defaultImage: props.config.defaultImage,
        matrixState: props.matrixState
      });
    })) : null;

    // render either the results, or a spinner while we wait for Funnelback
    var resultsContent = props.updating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, updating) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, didYouMean, announcement, summary, clearFilterTag, results, pagination);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: "v26-finder__results"
    }, resultsContent);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: "v26-finder__results"
    }, updating);
  }
}
Finder__Results.propTypes = {
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  summariseAs: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
  config: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  promo: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().array),
  pastEventsQuery: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  pastEventsResponse: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  pastEventsUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results);

/***/ }),

/***/ "./src/shared/components/results/finder__results__summary.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/components/results/finder__results__summary.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _filters_finder_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filters/finder__sort */ "./src/shared/components/filters/finder__sort.tsx");




/**
 * @module patterns/finder/components/finder__results__summary
 * @author Web Development
 * @copyright City, University of London 2019
 */




/**
 * Results heading, summarising the response.
 *
 * @param {object} props React props.
 * @return {object} - React component.
 */
function Finder__Results__Summary(props) {
  var result = props.totalMatching === 1 ? props.summariseAs.singular : props.summariseAs.plural,
    formatter = new Intl.NumberFormat("en-GB"),
    sort = props.config.sort.length > 1 && props.config.displaySort ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "wrapper--v26-finder__select--sort--desktop"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_filters_finder_sort__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: props.config,
      query: props.query,
      update: props.update
    })) : null;
  if (props.totalMatching === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "v26-finder__results__summary v26-finder__results__summary--noresults",
      ref: props.summaryHeadingRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", {
      className: "finder__results__summary__heading"
    }, "Your search did not match any ", props.summariseAs.plural, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Suggestions:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", null, "Make sure that all words are spelled correctly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", null, "Try different keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", null, "Try more general keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", null, "Try fewer keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", null, "Try fewer filters"), Object.keys(props.query.facets).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
      type: "button",
      onClick: function onClick() {
        props.clear(true);
      }
    }, "Reset filters")), props.query.query && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
      type: "button",
      onClick: function onClick() {
        var newQuery = props.query;
        newQuery.query = "";
        newQuery.sortType = props.config.sort[0].type;
        newQuery.misspelling = null;
        newQuery.startRank = 1;
        newQuery.interacted = true;
        props.update.query(newQuery);
        props.update.results(!props.update.updateState);
      }
    }, "Reset query"))));
  } else {
    var showingContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, props.site === "city" ? "Showing" : "showing", " ", props.totalMatching > props.numRanks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, formatter.format(props.currStart)), "\u2013", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, props.currEnd && formatter.format(props.currEnd)), " ", "of", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, formatter.format(props.totalMatching)), " ", result, props.query.query && " for \"".concat(props.query.query, "\""));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "v26-finder__results__summary",
      ref: props.summaryHeadingRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", {
      "aria-live": "polite",
      className: "v26-finder__results__summary__heading"
    }, props.site !== "city" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, props.query.query || Object.keys(props.query.facets).length > 0 ? "Matching" : "All", " ", result, " "), props.site === "city" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, showingContent) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "(", showingContent, ")")), sort);
  }
}
Finder__Results__Summary.propTypes = {
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  config: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  currEnd: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
  currStart: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
  numRanks: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  summariseAs: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  totalMatching: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Summary);

/***/ }),

/***/ "./src/shared/components/results/formatLabel.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/results/formatLabel.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);








var formatLabel = function formatLabel(label, value) {
  if (!value) return label;
  var parts = label.split(value);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, parts.reduce(function (acc, part, i) {
    if (i === 0) {
      return [part];
    }
    return acc.concat(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
      className: "highlightText",
      key: value + part
    }, value), part);
  }, []));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLabel);

/***/ }),

/***/ "./src/shared/components/tools/finder__accordion.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/components/tools/finder__accordion.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);















function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * @module patterns/finder/component/tools/finder__toolTip
 * @author Web Development
 * @copyright City, University of London 2020
 */



function Finder__Accordion(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleAccordion = function toggleAccordion() {
    setIsOpen(!isOpen);
  };
  if (props.matrixState) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "v26-finder__accordion",
      "data-matrix-state": props.matrixState
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h3", null, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "v26-finder__accordion__content",
      "data-open": isOpen
    }, props.children));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "finder__accordion"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("h3", {
      className: "v26-finder__accordion__heading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
      className: "v26-finder__accordion__toggle",
      type: "button",
      "aria-expanded": isOpen,
      onClick: toggleAccordion
    }, props.title, " ", props.totalChecked > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
      className: "v26-finder__accordion__count"
    }, "(", props.totalChecked, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
      className: "fa-solid fa-chevron-down finder__accordion__toggle__icon",
      "aria-hidden": "true"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
      className: "v26-finder__accordion__content",
      "data-closed": !isOpen
    }, props.children));
  }
}
Finder__Accordion.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().node).isRequired,
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool).isRequired,
  totalChecked: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Accordion);

/***/ }),

/***/ "./src/shared/components/tools/finder__toolTip.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/components/tools/finder__toolTip.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);















function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * @module patterns/finder/component/tools/finder__toolTip
 * @author Web Development
 * @copyright City, University of London 2020
 */



function Finder__ToolTip(props) {
  var toggleLabel = function toggleLabel() {
    return setShow(!show);
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var thumbnailSourceName = props.thumbnailSourceName,
    thumbnailSourceUrl = props.thumbnailSourceUrl,
    thumbnailAuthorName = props.thumbnailAuthorName,
    thumbnailAuthorUrl = props.thumbnailAuthorUrl,
    thumbnailLicenceType = props.thumbnailLicenceType,
    thumbnailLicenceUrl = props.thumbnailLicenceUrl,
    displayToolTip = props.displayToolTip;
  var labelAuthor = thumbnailAuthorUrl && thumbnailAuthorName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      href: thumbnailAuthorUrl
    }, thumbnailAuthorName) : thumbnailAuthorName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, thumbnailAuthorName) : null,
    labelSource = thumbnailSourceUrl && thumbnailSourceName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      href: thumbnailSourceUrl
    }, thumbnailSourceName) : thumbnailSourceName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", null, thumbnailSourceName) : null,
    labelLicense = thumbnailLicenceUrl && thumbnailLicenceType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
      href: thumbnailLicenceUrl
    }, thumbnailLicenceType) : thumbnailLicenceType ? thumbnailLicenceType : null;
  if (displayToolTip && (thumbnailAuthorName || thumbnailSourceName)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("figure", {
      className: "wrapper--tooltip__label",
      "data-open": show
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
      className: "tooltip tooltip--image-credit",
      type: "button",
      "aria-expanded": show,
      onClick: toggleLabel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
      className: "tooltip__icon icon fa-sharp fa-light fa-subtitles ".concat(show ? "fa-xmark" : "fa-subtitles")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
      className: "sr-only"
    }, "Show image credit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("figcaption", {
      className: "tooltip__label"
    }, labelAuthor, " ", labelSource && "/ ", " ", labelSource, " ", labelLicense));
  } else {
    return null;
  }
}
Finder__ToolTip.propTypes = {
  thumbnailSourceName: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)]),
  thumbnailSourceUrl: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)]),
  thumbnailAuthorName: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)]),
  thumbnailAuthorUrl: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)]),
  thumbnailLicenseType: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)]),
  thumbnailLicenseUrl: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)]),
  displayToolTip: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__ToolTip);

/***/ }),

/***/ "./src/shared/forms/finder/finder.tsx":
/*!********************************************!*\
  !*** ./src/shared/forms/finder/finder.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_query_finder_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/query/finder__query */ "./src/shared/components/query/finder__query.tsx");
/* harmony import */ var _components_filters_finder_filtersmobile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/filters/finder__filtersmobile */ "./src/shared/components/filters/finder__filtersmobile.tsx");
/* harmony import */ var _components_filters_city_finder_filtersmobile_city__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/filters/city/finder__filtersmobile-city */ "./src/shared/components/filters/city/finder__filtersmobile-city.tsx");
/* harmony import */ var _components_filters_city_sport_finder_filtersmobile_citySports__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/filters/city-sport/finder__filtersmobile-citySports */ "./src/shared/components/filters/city-sport/finder__filtersmobile-citySports.tsx");
/* harmony import */ var _components_results_finder_results__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/results/finder__results */ "./src/shared/components/results/finder__results.tsx");
/* harmony import */ var _logic_logic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../logic/logic */ "./src/shared/logic/logic.ts");
/* harmony import */ var _logic_has_mounted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../logic/has-mounted */ "./src/shared/logic/has-mounted.ts");



















function Finder(props) {
  var _props$initialResults;
  var hasMounted = (0,_logic_has_mounted__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var intialResults = Object.freeze({
    bestBets: [],
    extraSearches: {},
    facets: [],
    results: [],
    spell: null,
    summary: {
      currEnd: 0,
      currStart: 0,
      numRanks: 0,
      totalMatching: 0
    }
  });
  var initialQuery = hasMounted ? new URLSearchParams(window.location.search) : props.initialQuery || {};
  var _useLogicWrapper = (0,_logic_logic__WEBPACK_IMPORTED_MODULE_10__["default"])(props.config, (_props$initialResults = props.initialResults) !== null && _props$initialResults !== void 0 ? _props$initialResults : intialResults, initialQuery, props.element),
    query = _useLogicWrapper.query,
    funnelbackResponse = _useLogicWrapper.funnelbackResponse,
    updating = _useLogicWrapper.updating,
    updater = _useLogicWrapper.updater,
    clear = _useLogicWrapper.clear,
    matrixState = _useLogicWrapper.matrixState,
    summaryHeadingRef = _useLogicWrapper.summaryHeadingRef;
  //props.initialQuery || {}, need to find a way to pass the initial query from the URL parameters in the server rendering, as currently it is not being passed and is defaulting to an empty object, which causes issues with the initial render of the component as it is expecting certain parameters to be present in the query object. This is likely due to the fact that the initial query is being parsed from the URL parameters in the server rendering, but is not being passed down to the Finder component as a prop, which is causing it to default to an empty object. This needs to be fixed in order for the Finder component to render correctly on the initial load.

  var sharedProps = {
    config: props.config,
    query: query,
    response: funnelbackResponse,
    update: updater,
    updating: updating,
    summariseAs: props.config.summariseAs,
    clear: clear,
    mobile: true,
    hasMounted: hasMounted,
    matrixState: matrixState
  };
  var finderMain = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null, props.config.facetLabels && props.config.facetLabels.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null, props.config.site === 'city' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_filters_city_finder_filtersmobile_city__WEBPACK_IMPORTED_MODULE_11__["default"], sharedProps), props.config.site === 'citysport' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_filters_city_sport_finder_filtersmobile_citySports__WEBPACK_IMPORTED_MODULE_12__["default"], sharedProps), props.config.site !== 'city' && props.config.site !== 'citysport' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_filters_finder_filtersmobile__WEBPACK_IMPORTED_MODULE_13__["default"], sharedProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_results_finder_results__WEBPACK_IMPORTED_MODULE_14__["default"], {
    clear: clear,
    config: props.config,
    query: query,
    response: funnelbackResponse,
    summariseAs: props.config.summariseAs,
    type: props.config.resultCard,
    update: updater,
    updating: updating,
    summaryHeadingRef: summaryHeadingRef,
    matrixState: matrixState
  }));
  var QueryInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_components_query_finder_query__WEBPACK_IMPORTED_MODULE_15__["default"], {
    config: props.config,
    query: query,
    update: updater,
    updating: updating
  });

  // If the site is bayes, we want to render the query input in the top section

  var topSectionQueryInput = props.config.queryInputConfig && props.config.queryInputConfig.showQueryInTopSection ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "v26-finder__top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "container"
  }, QueryInput)) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("form", {
    className: "v26-finder",
    method: "GET",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
    }
  }, props.config.site && props.config.site === "bayes" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null, topSectionQueryInput, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "v26-finder__main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "grid"
  }, finderMain)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null, QueryInput, props.config.site && props.config.site === "city" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
    className: "v26-finder__main"
  }, finderMain) : finderMain));
}
Finder.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object).isRequired,
  element: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object),
  initialQuery: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object),
  initialResults: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder);

/***/ }),

/***/ "./src/shared/logic/funnelback.ts":
/*!****************************************!*\
  !*** ./src/shared/logic/funnelback.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   finderConfig: () => (/* binding */ finderConfig),
/* harmony export */   suggest: () => (/* binding */ suggest)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! https */ "./node_modules/https-browserify/index.js");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../util */ "./src/shared/util.tsx");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






















/**
 * Functions for making requests to Funnelback
 *
 * @module funnelback
 * @author Web Development
 * @copyright City, University of London 2019
 */



function baseURL(site) {
  switch (site) {
    case 'citysport':
      return 'https://www.citysport.org.uk/web-services/fb/';
    case 'city':
      return 'https://www.citystgeorges.ac.uk/web-services/dxp-fb';
    case 'bayes':
      return 'https://www.bayes.citystgeorges.ac.uk/webservices';
    default:
      return 'https://www.citystgeorges.ac.uk/web-services/dxp-fb';
  }
}
var dxpFindRootUrl = '/funnelback-dxp-find-test/_nocache',
  //remove test as it pointing to a test endpoint, but we want to point to the production endpoint,
  dxpSuggestRootUrl = '/funnelback-dxp-suggest',
  maximumSuggestions = 100,
  timeout = 30000;

/**
 * Funnelback search query.
 *
 * @param {string} collection The Funnelback collection to query.
 * @param {string} [query] The query string.
 * @param {string} [sortType] The field to sort by.
 * @param {integer} startRank The first result to return.
 * @param {integer} numRank The number of results to return.
 * @param {object} [facets] A map of facets to query strings.
 * @return {Promise} - A promise of search results.
 */
function find(collection, fixedFacets, fixedParameters, query, sortType, startRank, numRank, facets, parameters, site, facetLabels, profile) {
  var fixedParams = {};
  if (fixedParameters) {
    fixedParameters.forEach(function (param) {
      fixedParams["".concat(param.name)] = param.value;
    });
  }
  var params = {},
    paramsKeys = parameters ? Object.keys(parameters) : [];
  if (parameters) {
    paramsKeys.forEach(function (key) {
      return params[key] = parameters[key];
    });
  }
  var fixedFacetParams = {};
  if (fixedFacets) {
    fixedFacets.forEach(function (facet) {
      fixedFacetParams["meta_".concat(facet.meta, "_sand")] = facet.value;
    });
  }
  var facetParams = {},
    facetKeys = Object.keys(facets),
    facetValues = Object.values(facets);
  facetValues.forEach(function (value, i) {
    if (Array.isArray(value)) {
      var _facetLabels$find;
      var facetName = (facetLabels === null || facetLabels === void 0 || (_facetLabels$find = facetLabels.find(function (label) {
        return label.meta === facetKeys[i];
      })) === null || _facetLabels$find === void 0 ? void 0 : _facetLabels$find.facetName) || facetKeys[i];
      return facetParams["f\xB1".concat(facetName, "|").concat(facetKeys[i])] = value;
    } else {
      return facetParams["meta_".concat(facetKeys[i], "_sand")] = facets[facetKeys[i]];
    }
  });
  var controller = new AbortController(),
    call = controller.signal,
    config = {
      baseURL: baseURL(site),
      signal: call,
      httpsAgent: new (https__WEBPACK_IMPORTED_MODULE_22___default().Agent)({
        keepAlive: true
      }),
      url: dxpFindRootUrl,
      timeout: timeout,
      params: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, fixedParams), fixedFacetParams), facetParams), params), {}, {
        collection: collection,
        profile: profile || "_default",
        num_ranks: numRank,
        query: query,
        sort: sortType || "",
        start_rank: startRank
      })
    };
  var defaultResponse = {
    bestBets: [],
    results: [],
    summary: {
      totalMatching: 0,
      numRanks: 0,
      currStart: 1
    },
    facets: []
    // Add other required fields if your Response type has them
  };
  return [(0,_util__WEBPACK_IMPORTED_MODULE_23__.axiosRequest)(config).then(function (data) {
    return data || defaultResponse;
  }), controller];
}

/**
 * Funnelback suggestion query.
 *
 * @param {string} collection The Funnelback collection to query.
 * @param {string} partialQuery The string to make suggestions for.
 * @return {Promise} - A promise of an array of suggestion strings.
 */
function suggest(collection, partialQuery, site) {
  var controller = new AbortController(),
    call = controller.signal,
    config = {
      baseURL: baseURL(site),
      signal: call,
      url: dxpSuggestRootUrl,
      timeout: timeout,
      params: {
        collection: collection,
        partial_query: partialQuery,
        show: maximumSuggestions
      }
    };
  return [(0,_util__WEBPACK_IMPORTED_MODULE_23__.axiosRequest)(config).then(function (data) {
    return data || [];
  }), controller];
}

/**
 * Finder configuration.
 *
 * @param {string} url The Finder configuration file.
 * @return {Promise} - A promise of  configuration object.
 */
function finderConfig(url) {
  var config = {
    timeout: timeout,
    url: url
  };
  return (0,_util__WEBPACK_IMPORTED_MODULE_23__.axiosRequest)(config);
}

/***/ }),

/***/ "./src/shared/logic/has-mounted.ts":
/*!*****************************************!*\
  !*** ./src/shared/logic/has-mounted.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);















function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * custom hook to check if react has mounted
 *
 *
 * @module patterns/finder/finder
 * @author Web Development
 * @copyright City, University of London 2019
 */


function useHasMounted() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hasMounted = _useState2[0],
    setHasMounted = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    setHasMounted(true);
  }, []);
  return hasMounted;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHasMounted);

/***/ }),

/***/ "./src/shared/logic/hyper-link.ts":
/*!****************************************!*\
  !*** ./src/shared/logic/hyper-link.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hyperLink: () => (/* binding */ hyperLink)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _shared_util__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shared/util */ "./src/shared/util.tsx");


function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }























function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

function remove(obj, key) {
  for (var k in obj) {
    if (k === key) {
      delete obj[k];
    } else if (_typeof(obj[k]) === "object" && obj[k] !== null) {
      remove(obj[k], key);
    }
  }
}
function removeObjectArray(obj, key, value) {
  var _obj$facets;
  var currentFacet = (_obj$facets = obj.facets) === null || _obj$facets === void 0 ? void 0 : _obj$facets[key];
  if (!Array.isArray(currentFacet) || currentFacet.length === 0) {
    return;
  }
  var updatedFacet = currentFacet.filter(function (item) {
    return item !== value;
  });
  if (updatedFacet.length > 0) {
    obj.facets[key] = updatedFacet;
  } else {
    delete obj.facets[key];
  }
}
function hyperLink(query, facet, pageNumber, numberRank, facetValueInArray, config) {
  var newStartRank = pageNumber && numberRank && 1 + (pageNumber - 1) * numberRank;
  var newQuery = JSON.parse(JSON.stringify(query)); //deep clone

  if (facet && facet.meta && (facet.type === "tag" || facet.type === "multiCheckbox")) {
    if (facet.type === "tag") {
      remove(newQuery, facet.meta);
    }
    if (facet.type === "multiCheckbox") {
      removeObjectArray(newQuery, facet.meta, facetValueInArray);
    }
  }
  var flattenQuery = (0,_shared_util__WEBPACK_IMPORTED_MODULE_23__.flattenObj)(newQuery);
  return "?" + Object.entries(flattenQuery).filter(function (key) {
    var param = Object.values(key);
    if (param[1] === "") {
      return false;
    } else {
      switch (param[0]) {
        case "interacted":
          return false;
        case "num_rank":
          return false;
        case "start_rank":
          return false;
        default:
          return true;
      }
    }
  }).map(function (entry) {
    var _entry = _slicedToArray(entry, 2),
      rawKey = _entry[0],
      value = _entry[1];

    // ✅ detect array keys like level[0], level[1]
    var isArrayKey = /\[\d+\]/.test(rawKey);

    // remove [0], [1], etc.
    var normalizedKey = rawKey.replace(/\[\d+\]/g, "");

    // special cases first
    if (/fixedParameters/.test(rawKey)) {
      return encodeURIComponent(rawKey.substring(16)) + "=" + encodeURIComponent(value);
    }
    if (/fixedFacets/.test(rawKey)) {
      return encodeURIComponent("meta_".concat(rawKey.substring(12), "_sand")) + "=" + encodeURIComponent(value);
    }
    if (/parameters/.test(rawKey)) {
      return encodeURIComponent(rawKey.substring(11)) + "=" + encodeURIComponent(value);
    }

    // ✅ NEW: special handling for array-based keys
    if (isArrayKey) {
      var _config$facetLabels;
      var findFacet = config === null || config === void 0 || (_config$facetLabels = config.facetLabels) === null || _config$facetLabels === void 0 ? void 0 : _config$facetLabels.find(function (facetLabel) {
        return facetLabel.meta === normalizedKey;
      });
      var facetName = findFacet !== null && findFacet !== void 0 && findFacet.facetName ? findFacet.facetName : (0,_shared_util__WEBPACK_IMPORTED_MODULE_23__.capitalizeFirstLetter)(normalizedKey);
      return encodeURIComponent("f\xB1".concat(facetName, "|").concat(normalizedKey, "[]")) + "=" + encodeURIComponent(value);
    }

    // existing switch
    switch (normalizedKey) {
      case "collection":
      case "profile":
      case "query":
        return encodeURIComponent(normalizedKey) + "=" + encodeURIComponent(value);
      case "sortType":
        return encodeURIComponent("sort") + "=" + encodeURIComponent(value);
      case "startRank":
        return encodeURIComponent("start_rank") + "=" + encodeURIComponent(facet ? value : newStartRank || "");
      case "numRanks":
        return encodeURIComponent("num_rank") + "=" + encodeURIComponent(value);
      default:
        return encodeURIComponent("meta_".concat(normalizedKey, "_sand")) + "=" + encodeURIComponent(value);
    }
  }).join("&");
}

/***/ }),

/***/ "./src/shared/logic/logic.ts":
/*!***********************************!*\
  !*** ./src/shared/logic/logic.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _has_mounted__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./has-mounted */ "./src/shared/logic/has-mounted.ts");
/* harmony import */ var _replace_history__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./replace-history */ "./src/shared/logic/replace-history.ts");
/* harmony import */ var _url_params__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./url-params */ "./src/shared/logic/url-params.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../util */ "./src/shared/util.tsx");
/* harmony import */ var _funnelback__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./funnelback */ "./src/shared/logic/funnelback.ts");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_31__);


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





































function useLogicWrapper(config, results, matrixQuery, element) {
  var summaryHeadingRef = (0,react__WEBPACK_IMPORTED_MODULE_30__.useRef)(null);
  var hasMounted = (0,_has_mounted__WEBPACK_IMPORTED_MODULE_32__["default"])();
  var screenOffsetRatio = 10;
  var scrollDuration = typeof window !== "undefined" && !(0,_util__WEBPACK_IMPORTED_MODULE_33__.reduceMotion)() ? 1000 : 0;
  var initialResults = results || {};
  var nonFBParams = config.facetLabels && config.facetLabels.filter(function (p) {
    return p.nonFBParam;
  });
  var initializeParams = config.facetLabels && config.facetLabels.length > 0 ? (0,_url_params__WEBPACK_IMPORTED_MODULE_34__.getFacetParams)(config.facetLabels, matrixQuery) : {};
  var site = config.site || undefined;
  var profile = config.profile || "_default";

  /**
   * initial state for the Funnelback query, taken from URL parameters and
   * configuration
   **/
  // Normalize matrixQuery access for both URLSearchParams and plain objects
  var isURLSearchParams = typeof URLSearchParams !== "undefined" && matrixQuery instanceof URLSearchParams;
  var matrixQueryGet = function matrixQueryGet(key) {
    if (!matrixQuery) return null;
    if (isURLSearchParams) {
      return matrixQuery.get(key);
    }
    var mq = matrixQuery;
    var val = mq[key];
    if (Array.isArray(val)) return val[0] || null;
    return typeof val === "string" ? val : null;
  };
  var matrixQueryGetRaw = function matrixQueryGetRaw(key) {
    if (!matrixQuery) return undefined;
    if (isURLSearchParams) {
      // URLSearchParams doesn't expose arrays; return single value
      var v = matrixQuery.get(key);
      return v === null ? undefined : v;
    }
    return matrixQuery[key];
  };
  var initialQuery = {
    collection: config.collection,
    profile: profile,
    facets: initializeParams,
    parameters: nonFBParams && nonFBParams.length > 0 && matrixQuery ? (0,_url_params__WEBPACK_IMPORTED_MODULE_34__.getNonFBParams)(config.facetLabels || [], matrixQuery) : {},
    fixedFacets: config.fixedFacets,
    fixedParameters: config.fixParameters ? config.fixParameters : [],
    interacted: false,
    misspelling: null,
    numRanks: config.numRanks,
    query: matrixQuery && matrixQueryGet("query") ? matrixQueryGet("query") || "" : "",
    sortType: config.sort[0].type,
    startRank: function () {
      var raw = matrixQueryGetRaw("start_rank");
      if (!raw) return 1;
      if (Array.isArray(raw)) return parseInt(raw[0], 10) || 1;
      return parseInt(raw, 10) || 1;
    }()
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    defaultParams = _useState2[0],
    setDefaultParams = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(initialQuery),
    _useState4 = _slicedToArray(_useState3, 2),
    query = _useState4[0],
    setQuery = _useState4[1]; // will set once defaultParams is ready
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(Object.keys(initialResults).length > 0 ? Object.freeze(results) : Object.freeze({
      bestBets: [],
      extraSearches: {},
      facets: [],
      results: [],
      spell: null,
      summary: {
        currEnd: 0,
        currStart: 0,
        numRanks: 0,
        totalMatching: 0
      }
    })),
    _useState6 = _slicedToArray(_useState5, 2),
    funnelbackResponse = _useState6[0],
    setResponse = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(Object.keys(initialResults).length === 0),
    _useState8 = _slicedToArray(_useState7, 2),
    updating = _useState8[0],
    setUpdating = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)({
      cancel: function cancel() {}
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    call = _useState0[0],
    setCall = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    update = _useState10[0],
    setUpdate = _useState10[1];

  // Step 1: Initialize defaultParams after mount
  (0,react__WEBPACK_IMPORTED_MODULE_30__.useEffect)(function () {
    if (!defaultParams && typeof window !== "undefined") {
      var searchParams = new URLSearchParams(window.location.search);

      // merge in matrixQuery (SSR params)
      if (matrixQuery) {
        if (typeof URLSearchParams !== "undefined" && matrixQuery instanceof URLSearchParams) {
          var _iterator = _createForOfIteratorHelper(matrixQuery.entries()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                _key = _step$value[0],
                value = _step$value[1];
              searchParams.append(_key, value);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          Object.entries(matrixQuery).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];
            if (Array.isArray(value)) {
              value.forEach(function (v) {
                return searchParams.append(key, v);
              });
            } else {
              searchParams.append(key, value);
            }
          });
        }
      }
      setDefaultParams(searchParams);
    }
  }, [defaultParams, matrixQuery]);

  // Step 2: Build initial query once defaultParams is ready
  // Step 2: Build initial query once defaultParams is ready
  (0,react__WEBPACK_IMPORTED_MODULE_30__.useEffect)(function () {
    if (!defaultParams) return;
    var matrixState = !hasMounted && matrixQuery ? true : false;
    var baseQuery = {
      collection: config.collection,
      facets: config.facetLabels && config.facetLabels.length > 0 ? (0,_url_params__WEBPACK_IMPORTED_MODULE_34__.getFacetParams)(config.facetLabels, defaultParams) : {},
      parameters: config.facetLabels && nonFBParams && nonFBParams.length > 0 ? (0,_url_params__WEBPACK_IMPORTED_MODULE_34__.getNonFBParams)(config.facetLabels, defaultParams) : {},
      fixedFacets: config.fixedFacets,
      fixedParameters: config.fixParameters || [],
      interacted: false,
      misspelling: null,
      numRanks: config.numRanks,
      query: !matrixState && defaultParams.get("query") ? defaultParams.get("query") : defaultParams.get("query") || "",
      sortType: !matrixState && defaultParams.get("query") ? "" : !matrixState && defaultParams.get("sort") ? defaultParams.get("sort") : config.sort[0].type,
      startRank: !matrixState && defaultParams.get("start_rank") ? parseInt(defaultParams.get("start_rank"), 10) : defaultParams.get("start_rank") ? parseInt(defaultParams.get("start_rank"), 10) : 1
    };
    setQuery(baseQuery);
  }, [defaultParams, hasMounted]);

  // Step 3: Patch query after mount
  (0,react__WEBPACK_IMPORTED_MODULE_30__.useEffect)(function () {
    if (!hasMounted || !defaultParams) return;
    var numRanksParam = defaultParams.get("num_ranks");
    if (!numRanksParam) return;
    setQuery(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        numRanks: parseInt(numRanksParam, 10) || prev.numRanks
      });
    });
  }, [hasMounted, defaultParams]);

  // Step 4: Update response when `update` flips
  (0,react__WEBPACK_IMPORTED_MODULE_30__.useEffect)(function () {
    if (!query) return;
    (0,_replace_history__WEBPACK_IMPORTED_MODULE_35__["default"])(query.query, query.startRank, query.facets, query.parameters || {}, query.sortType, config.facetLabels || [], config.sort[0].type, hasMounted);
    setUpdating(true);
    if (query.interacted && element) {
      var resultsEl = element.querySelector(".finder__results");
      if (resultsEl instanceof HTMLElement) {
        zenscroll__WEBPACK_IMPORTED_MODULE_31___default().center(resultsEl, scrollDuration, -window.innerHeight / screenOffsetRatio);
      }
    }
    call.cancel();
    var _find = (0,_funnelback__WEBPACK_IMPORTED_MODULE_36__.find)(query.collection, query.fixedFacets, query.fixedParameters, query.query, query.sortType, query.startRank, query.numRanks, query.facets, query.parameters, site, config.facetLabels, profile),
      _find2 = _slicedToArray(_find, 2),
      request = _find2[0],
      abortController = _find2[1];
    setCall({
      cancel: function cancel() {
        return abortController.abort();
      }
    });
    request.then(function (data) {
      setResponse(data); // ✅ Freeze before setting
      setUpdating(false);
    }).then(function () {
      if (query.interacted && summaryHeadingRef.current) {
        summaryHeadingRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    })["catch"](function (error) {
      if ((0,_util__WEBPACK_IMPORTED_MODULE_33__.isRequestCanceled)(error)) {
        return;
      }
      setResponse(initialResults);
      setUpdating(false);
    });
    return function () {
      abortController.abort();
    };
  }, [update, query]);
  var updater = {
    query: function query(newQuery) {
      return setQuery(newQuery);
    },
    results: function results(newUpdate) {
      return setUpdate(newUpdate);
    },
    updateState: update
  };
  var clear = function clear(resetSort) {
    var newQuery = _objectSpread(_objectSpread({}, query), {}, {
      sortType: resetSort ? config.sort[0].type : query.sortType,
      facets: {},
      parameters: {},
      startRank: 1,
      misspelling: null,
      interacted: true
    });
    call.cancel();
    setQuery(newQuery);
    setUpdate(!update);
  };
  return {
    query: query,
    funnelbackResponse: funnelbackResponse,
    updating: updating,
    updater: updater,
    clear: clear,
    hasMounted: hasMounted,
    matrixState: !hasMounted && matrixQuery ? true : false,
    summaryHeadingRef: summaryHeadingRef
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLogicWrapper);

/***/ }),

/***/ "./src/shared/logic/replace-history.ts":
/*!*********************************************!*\
  !*** ./src/shared/logic/replace-history.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ replaceHistory)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _url_params__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./url-params */ "./src/shared/logic/url-params.ts");

















function replaceHistory(currQuery, currStartRank, currFacets, currParameters, currSort, facetLabels, defaultSort, hasMounted) {
  if (!hasMounted) return;
  var baseParams = new URLSearchParams(window.location.search);
  if (!(0,_url_params__WEBPACK_IMPORTED_MODULE_14__.isURLSearchParams)(baseParams)) return;

  // ----- simple params -----
  if (currQuery !== "") {
    baseParams.set("query", currQuery);
  } else {
    baseParams["delete"]("query");
  }
  if (currStartRank && currStartRank !== 1) {
    baseParams.set("start_rank", currStartRank.toString());
  } else {
    baseParams["delete"]("start_rank");
  }
  if (currSort !== defaultSort && currSort !== "") {
    baseParams.set("sort", currSort);
  } else {
    baseParams["delete"]("sort");
  }

  // remove any existing facet params we previously added
  facetLabels.forEach(function (facet) {
    if (facet.type === "multiCheckbox") {
      baseParams["delete"]("f\xB1".concat(facet.facetName, "|").concat(facet.meta, "[]"));
    } else {
      baseParams["delete"]("meta_".concat(facet.meta, "_sand"));
    }
  });

  // ----- build facet params manually -----
  var facetQuery = "";
  facetLabels.forEach(function (facet) {
    var facetValue = currFacets[facet.meta];
    if (!facetValue) return;
    if (Array.isArray(facetValue)) {
      facetValue.forEach(function (value) {
        var key = "f\xB1".concat(facet.facetName, "|").concat(facet.meta, "[]");
        facetQuery += "&".concat(encodeURIComponent(key), "=") + encodeURIComponent(value);
      });
    } else {
      var key = "meta_".concat(facet.meta, "_sand");
      facetQuery += "&".concat(encodeURIComponent(key), "=") + encodeURIComponent(facetValue);
    }
  });

  // ----- extra parameters -----
  Object.keys(currParameters).forEach(function (key) {
    if (currParameters[key]) {
      baseParams.set(key, currParameters[key]);
    } else {
      baseParams["delete"](key);
    }
  });
  var baseString = baseParams.toString();
  var hasParams = baseString.length || facetQuery ? "?" : "";
  window.history.replaceState({}, "", "".concat(window.location.pathname).concat(hasParams).concat(baseString).concat(facetQuery));
}

/***/ }),

/***/ "./src/shared/logic/url-params.ts":
/*!****************************************!*\
  !*** ./src/shared/logic/url-params.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFacetParams: () => (/* binding */ getFacetParams),
/* harmony export */   getNonFBParams: () => (/* binding */ getNonFBParams),
/* harmony export */   isURLSearchParams: () => (/* binding */ isURLSearchParams),
/* harmony export */   replaceAndDeleteKeys: () => (/* binding */ replaceAndDeleteKeys)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_22__);


function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }























/**
 * Search and replace substring in Key on URLSearchParams
 * remove when urls have been replace on Matrix
 *
 * @param {object} params URLSearchParams object for the current page.
 * @param {string} target substring to replace
 * @param {replacement} replacement substring to replace
 * @return {object} - URLSearchParams object of new replace keys.
 */

function replaceAndDeleteKeys(params, target, replacement) {
  var entries;
  if (params instanceof URLSearchParams) {
    entries = Array.from(params.entries());
  } else {
    entries = Object.entries(params);
  }
  var _iterator = _createForOfIteratorHelper(entries),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        _key = _step$value[0],
        value = _step$value[1];
      if (_key.includes(target)) {
        var newKey = _key.replace(target, replacement);
        if (params instanceof URLSearchParams) {
          params.set(newKey, value); // Add new key
          params["delete"](_key); // Delete old key
        } else {
          params[newKey] = value;
          delete params[_key];
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return params;
}

/**
 * Retrieve non FB parameters from the URL parameters
 *
 * @param {object[]} facets Array of facet definitions.
 * @param {object} params URLSearchParams object for the current page.
 * @return {object} - Map of facet meta labels to their current value from the URL.
 */
function isURLSearchParams(obj) {
  return typeof (obj === null || obj === void 0 ? void 0 : obj.get) === "function";
}
function getNonFBParams(facets, params) {
  if (isURLSearchParams(params)) {
    return facets.filter(function (facet) {
      return facet.nonFBParam;
    }).map(function (facet) {
      var param = {};
      var value = params.get(facet.meta);
      if (value) {
        param[facet.meta] = value;
      }
      return param;
    }).reduce(function (facetParams, facet) {
      return Object.assign(facetParams, facet);
    }, {});
  } else {
    return facets.map(function (facet) {
      var param = {};
      if (params[facet.meta]) {
        param[facet.meta] = params[facet.meta];
      }
      return param;
    }).reduce(function (facetParams, facet) {
      return Object.assign(facetParams, facet);
    }, {});
  }
}
function getFacetParams(facets, params) {
  var result = {};
  if (params instanceof URLSearchParams) {
    var _iterator2 = _createForOfIteratorHelper(facets),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var facet = _step2.value;
        var metaKey = "meta_".concat(facet.meta, "_sand");
        var fbKey = "f\xB1".concat(facet.facetName, "|").concat(facet.meta, "[]");
        var metaValues = params.getAll(metaKey);
        var fbValues = params.getAll(fbKey);
        if (metaValues.length > 0) {
          // meta_* behaves normally
          result[facet.meta] = metaValues.length === 1 ? metaValues[0] : metaValues;
        } else if (fbValues.length > 0) {
          // f±* ALWAYS array
          result[facet.meta] = fbValues;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  } else {
    var typedParams = params;
    var _iterator3 = _createForOfIteratorHelper(facets),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _facet = _step3.value;
        var _key2 = "meta_".concat(_facet.meta, "_sand");
        var keyMultiFacet = "f\xB1".concat(_facet.facetName, "|").concat(_facet.meta, "[]");
        if (typedParams[_key2]) {
          result[_facet.meta] = typedParams[_key2];
        } else if (typedParams[keyMultiFacet]) {
          var value = typedParams[keyMultiFacet];
          result[_facet.meta] = Array.isArray(value) ? value : [value];
        } else {
          result[_facet.meta] = '';
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
  return result;
}

/***/ }),

/***/ "./src/shared/util.tsx":
/*!*****************************!*\
  !*** ./src/shared/util.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendAll: () => (/* binding */ appendAll),
/* harmony export */   arraySlicer: () => (/* binding */ arraySlicer),
/* harmony export */   axiosRequest: () => (/* binding */ axiosRequest),
/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   checkIntersectionObserver: () => (/* binding */ checkIntersectionObserver),
/* harmony export */   createHTMLElement: () => (/* binding */ createHTMLElement),
/* harmony export */   decodeHtml: () => (/* binding */ decodeHtml),
/* harmony export */   detectIE: () => (/* binding */ detectIE),
/* harmony export */   disableBodyScroll: () => (/* binding */ disableBodyScroll),
/* harmony export */   enableBodyScroll: () => (/* binding */ enableBodyScroll),
/* harmony export */   flattenObj: () => (/* binding */ flattenObj),
/* harmony export */   formatFBResponse: () => (/* binding */ formatFBResponse),
/* harmony export */   formatReactDate: () => (/* binding */ formatReactDate),
/* harmony export */   formatTime: () => (/* binding */ formatTime),
/* harmony export */   gaEvent: () => (/* binding */ gaEvent),
/* harmony export */   getVerticalScrollbarWidth: () => (/* binding */ getVerticalScrollbarWidth),
/* harmony export */   isMobile: () => (/* binding */ isMobile),
/* harmony export */   isRequestCanceled: () => (/* binding */ isRequestCanceled),
/* harmony export */   isVisible: () => (/* binding */ isVisible),
/* harmony export */   numberFromString: () => (/* binding */ numberFromString),
/* harmony export */   objectToParameters: () => (/* binding */ objectToParameters),
/* harmony export */   parametersToObject: () => (/* binding */ parametersToObject),
/* harmony export */   reduceMotion: () => (/* binding */ reduceMotion),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   toBool: () => (/* binding */ toBool),
/* harmony export */   uppercaseFirstLetterLowercaseRest: () => (/* binding */ uppercaseFirstLetterLowercaseRest),
/* harmony export */   verticallyInWindow: () => (/* binding */ verticallyInWindow)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


























/**
 * Utility Helpers
 * @module util
 * A collection of reusable helper functions used throughout the application.
 *
 * These utilities support both browser and server environments. Because this
 * project may execute code in a server-side rendering (SSR) context, any
 * access to browser-specific APIs such as `window` or `document` must be
 * guarded to prevent runtime errors.
 *
 * To ensure safe execution:
 *   - Browser globals are accessed through helper functions like `getWindow()`
 *     and `getDocument()`.
 *   - Functions that require a DOM environment explicitly validate that
 *     `document` is available before executing.
 *   - Browser-only features degrade gracefully when running on the server.
 *
 * This allows the module to be safely imported in Node.js while still
 * providing full functionality when executed in the browser.
 *
 * Categories of utilities included here:
 *   - DOM manipulation helpers
 *   - browser feature detection
 *   - query parameter parsing
 *   - analytics helpers
 *   - formatting utilities
 *   - data transformation utilities
 *
 * Notes:
 *   Some functions intentionally no-op or return fallback values when
 *   executed server-side, as certain browser APIs simply do not exist
 *   outside the client environment.
 */



function hasWindow() {
  return typeof window !== "undefined";
}
function hasDocument() {
  return typeof document !== "undefined";
}
function getWindow() {
  return hasWindow() ? window : null;
}
function getDocument() {
  return hasDocument() ? document : null;
}
function requireDocument(functionName) {
  var doc = getDocument();
  if (!doc) {
    throw new Error("".concat(functionName, " can only be used in a browser environment."));
  }
  return doc;
}
function toBool(s) {
  return s === "true";
}
var partialMatchFn = function partialMatchFn(m) {
  return function (s) {
    return s.indexOf(m) < 0;
  };
};
var fullMatchFn = function fullMatchFn(m) {
  return function (s) {
    return s !== m;
  };
};
function removeClass(elem, className) {
  var removePartials = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var matchFn = removePartials ? partialMatchFn(className) : fullMatchFn(className);
  elem.className = elem.className.split(/\s+/).filter(function (s) {
    return matchFn(s);
  }).join(" ");
}
function reduceMotion() {
  var win = getWindow();
  var reducedMotionQuery = win ? win.matchMedia("(prefers-reduced-motion: reduce)") : null;
  return Boolean(reducedMotionQuery === null || reducedMotionQuery === void 0 ? void 0 : reducedMotionQuery.matches);
}
function isVisible(elem) {
  return elem.offsetHeight !== 0 && elem.offsetWidth !== 0;
}
function verticallyInWindow(elem) {
  var win = getWindow();
  if (!win) return false;
  var rect = elem.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= win.innerHeight;
}
function parametersToObject(parameterString) {
  var parameters = {};
  parameterString.substring(1).split("&").filter(Boolean).forEach(function (parameter) {
    var _parameter$split = parameter.split("="),
      _parameter$split2 = _slicedToArray(_parameter$split, 2),
      k = _parameter$split2[0],
      _parameter$split2$ = _parameter$split2[1],
      v = _parameter$split2$ === void 0 ? "" : _parameter$split2$;
    parameters[k] = v;
  });
  return parameters;
}
function objectToParameters(parameterObj) {
  var keys = Object.keys(parameterObj);
  if (keys.length > 0) {
    return "?" + keys.map(function (key) {
      return "".concat(key, "=").concat(encodeURIComponent(parameterObj[key]));
    }).join("&");
  }
  return "";
}
function gaEvent(event, eventCategory, eventAction, eventLabel, eventValue, nonInteractionHit) {
  var win = getWindow();
  if (!win) return;
  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push({
    event: event,
    eventCategory: eventCategory,
    eventAction: eventAction,
    eventLabel: eventLabel,
    eventValue: eventValue,
    nonInteractionHit: nonInteractionHit
  });
}
function appendAll(elem, children) {
  children.forEach(function (child) {
    return elem.appendChild(child);
  });
}
function numberFromString(value) {
  return value.replace(/\D/g, "");
}
function isMobile() {
  var screen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 432;
  var win = getWindow();
  if (!win) return false;
  return win.innerWidth < screen;
}
function toArray(obj) {
  return Array.from(obj);
}
function detectIE() {
  var win = getWindow();
  if (!win) return false;
  var ua = win.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }
  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }
  return false;
}
function hasIntersectionRatioOnIntersectionObserverEntry(maybeEntry) {
  if (!maybeEntry || typeof maybeEntry !== "function") return false;
  var _ref = maybeEntry,
    prototype = _ref.prototype;
  return !!prototype && _typeof(prototype) === "object" && "intersectionRatio" in prototype;
}
function checkIntersectionObserver() {
  var win = getWindow();
  if (!win) return false;
  var maybeEntry = win.IntersectionObserverEntry;
  return "IntersectionObserver" in win && hasIntersectionRatioOnIntersectionObserverEntry(maybeEntry);
}
function createHTMLElement(type, attributes) {
  var doc = requireDocument("createHTMLElement");
  var el = doc.createElement(type);
  attributes.forEach(function (att) {
    if (att.label === "content") {
      el.appendChild(doc.createTextNode(att.val));
    } else if (att.label === "html") {
      el.innerHTML = att.val;
    } else {
      el.setAttribute(att.label, att.val);
    }
  });
  return el;
}
function uppercaseFirstLetterLowercaseRest(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
function axiosRequest(config) {
  return (0,axios__WEBPACK_IMPORTED_MODULE_27__["default"])(config).then(function (response) {
    if (response.status === 200) return response.data;
    throw new Error("Bad response: ".concat(response.status));
  })["catch"](function (e) {
    if (isRequestCanceled(e)) {
      throw e;
    }
    var error = e;
    var locationLabel = hasWindow() ? String(window.location) : "server";
    gaEvent("jsError", "JavaScript error", error.message || "Unknown error", "axiosRequest (".concat(locationLabel, ")"), 0, true);
    return undefined;
  });
}
function isRequestCanceled(error) {
  if (axios__WEBPACK_IMPORTED_MODULE_27__["default"].isCancel(error)) {
    return true;
  }
  if (!(error instanceof Error)) {
    return false;
  }
  var requestError = error;
  return requestError.name === "AbortError" || requestError.name === "CanceledError" || requestError.code === "ERR_CANCELED";
}
function formatTime(timeString, timeZone) {
  var timeDate = new Date(timeString);
  var timeLabel = "";
  if (timeZone) {
    var timeOffset = timeDate.getTimezoneOffset() / -60;
    timeLabel = timeOffset === 0 ? "(GMT)" : "(BST)";
  }
  var hours = timeDate.getHours().toString().padStart(2, "0");
  var minutes = timeDate.getMinutes().toString().padStart(2, "0");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("time", {
    dateTime: "".concat(hours, ":").concat(minutes)
  }, hours, ":", minutes, " ", timeLabel);
}
function daySuffix(day) {
  var lastDigit = day % 10;
  var lastTwoDigits = day % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return "th";
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
function formatReactDate(date) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("time", {
    dateTime: date.toISOString().split("T")[0]
  }, days[date.getUTCDay()], ", ", date.getUTCDate(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("sup", null, daySuffix(date.getUTCDate())), " ", months[date.getUTCMonth()], " ", date.getUTCFullYear());
}
function arraySlicer(arr, len) {
  var newArray = [];
  for (var i = 0; i < arr.length; i += len) {
    newArray.push(arr.slice(i, i + len));
  }
  return newArray;
}
function flattenObj(ob) {
  var result = {};
  var _loop = function _loop(i) {
    var value = ob[i];
    if (_typeof(value) === "object" && !Array.isArray(value) && value !== null) {
      var temp = flattenObj(value);
      for (var j in temp) {
        if (i === "parameters") {
          result["".concat(i, "-").concat(j)] = temp[j];
        } else {
          result[j] = temp[j];
        }
      }
    } else if (Array.isArray(value)) {
      value.forEach(function (val, index) {
        // array of objects (your existing case)
        if (_typeof(val) === "object" && val !== null) {
          var objVal = val;
          if (i === "fixedFacets" && objVal.meta && objVal.value) {
            result["".concat(i, "-").concat(objVal.meta)] = objVal.value;
          } else if (objVal.name && objVal.value) {
            result["".concat(i, "-").concat(objVal.name)] = objVal.value;
          }

          // array of primitives (NEW)
        } else {
          result["".concat(i, "[").concat(index, "]")] = String(val);
        }
      });
    } else if (value !== null && value !== undefined) {
      result[i] = String(value);
    }
  };
  for (var i in ob) {
    _loop(i);
  }
  return result;
}
function getVerticalScrollbarWidth() {
  var doc = getDocument();
  if (!doc) return 0;
  var scrollDiv = doc.createElement("div");
  scrollDiv.style.cssText = "width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;";
  doc.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  doc.body.removeChild(scrollDiv);
  doc.documentElement.style.setProperty("--scrollbar-width", "".concat(scrollbarWidth, "px"));
  return scrollbarWidth;
}
function enableBodyScroll() {
  var doc = getDocument();
  if (!doc) return;
  doc.documentElement.classList.remove("no-scroll");
  var btn = doc.querySelector(".back-to-top");
  if (btn) btn.removeAttribute("hidden");
}
function disableBodyScroll() {
  var doc = getDocument();
  if (!doc) return;
  getVerticalScrollbarWidth();
  var btn = doc.querySelector(".back-to-top");
  if (btn) btn.setAttribute("hidden", "true");
  doc.documentElement.classList.add("no-scroll");
}
function formatFBResponse(json) {
  return {
    query: json.question.originalQuery,
    inputParameters: json.question.inputParameters,
    spell: json.response.resultPacket.spell,
    summary: json.response.resultPacket.resultsSummary,
    bestBets: json.response.curator.exhibits,
    results: json.response.resultPacket.results,
    facets: json.response.facets,
    extraSearches: json.extraSearches
  };
}
function decodeHtml() {
  var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var doc = getDocument();
  if (!doc) return html;
  var txt = doc.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
function capitalizeFirstLetter(s) {
  return s.replace(/^./, function (c) {
    return c.toUpperCase();
  });
}

/***/ }),

/***/ "?0cc0":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?aeb7":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"finder": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_matrix_rendering"] = self["webpackChunkreact_matrix_rendering"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core1","vendor-dependencies1","axios1","react1","vendor-direct1"], () => (__webpack_require__("./src/browser/browser-files/finder.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=finder.js.map