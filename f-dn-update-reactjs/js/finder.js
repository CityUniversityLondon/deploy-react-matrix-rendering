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
    var finders = document.querySelectorAll(".wrapper--finder");
    if (finders) {
      Array.from(finders).forEach(function (finder) {
        if (finder.dataset.config) {
          (0,_shared_logic_funnelback__WEBPACK_IMPORTED_MODULE_8__.finderConfig)(finder.dataset.config).then(function (config) {
            var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_7__.createRoot)(finder);
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
/* harmony import */ var _finder_results_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finder__results__event */ "./src/shared/components/cards/finder__results__event.tsx");
/* harmony import */ var _finder_results_funding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder__results__funding */ "./src/shared/components/cards/finder__results__funding.tsx");
/* harmony import */ var _finder_results_generic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./finder__results__generic */ "./src/shared/components/cards/finder__results__generic.tsx");
/* harmony import */ var _finder_results_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finder__results__module */ "./src/shared/components/cards/finder__results__module.tsx");
/* harmony import */ var _finder_results_news__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./finder__results__news */ "./src/shared/components/cards/finder__results__news.tsx");
/* harmony import */ var _finder_results_profile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finder__results__profile */ "./src/shared/components/cards/finder__results__profile.tsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _finder_results_research__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./finder__results__research */ "./src/shared/components/cards/finder__results__research.tsx");


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
    case "event":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_event__WEBPACK_IMPORTED_MODULE_6__["default"], {
        details: props.details
      });
    case "funding":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_funding__WEBPACK_IMPORTED_MODULE_7__["default"], {
        details: props.details,
        query: props.query
      });
    case "module":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_module__WEBPACK_IMPORTED_MODULE_8__["default"], {
        details: props.details,
        query: props.query
      });
    case "news":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_news__WEBPACK_IMPORTED_MODULE_9__["default"], {
        details: props.details
      });
    case "profile":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_profile__WEBPACK_IMPORTED_MODULE_10__["default"], {
        details: props.details,
        query: props.query
      });
    case "research":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_research__WEBPACK_IMPORTED_MODULE_11__["default"], {
        details: props.details,
        query: props.query
      });
    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_results_generic__WEBPACK_IMPORTED_MODULE_12__["default"], {
        details: props.details
      });
  }
}
Finder__Results__Card.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string)
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
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata && props.details.listMetadata.c && props.details.listMetadata.c[0]), eventLabel, location, audience)));
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
    }) : null;
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
  }, thumbnail, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card__details__text"
  }, dateString, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", {
    className: "card__heading"
  }, props.details.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "card__description"
  }, props.details.listMetadata && props.details.listMetadata.c && props.details.listMetadata.c[0]), hashtags)));
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

/***/ "./src/shared/components/cards/finder__results__promo.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/components/cards/finder__results__promo.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @module patterns/finder/components/finder__results__summary
 * @author Web Development
 * @copyright City, University of London
 */



function Finder__Results__Promo(_ref) {
  var heading = _ref.heading,
    body = _ref.body,
    linkRef = _ref.linkRef,
    linkText = _ref.linkText;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "card card--finder-promo promo-area__wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "promo-area layout__left--full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "promo-area__content background--pink90"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "promo-area__heading"
  }, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "promo-area__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "promo-area__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "cta-block__cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: linkRef,
    className: "outline-cta-arrow--bright"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, linkText))))))));
}
Finder__Results__Promo.propTypes = {
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  body: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  linkRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  linkText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder__Results__Promo);

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
      className: "finder__filter finder__checkbox"
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
      className: "finder__checkbox__indicator finder__checkbox__indicator",
      "aria-hidden": "true",
      onClick: function onClick() {
        return toggleFacet();
      }
    }, toggleChecked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("span", {
      className: "fa fa-fw fas fa-check icon"
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("label", {
      className: "finder__filters__label--always",
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
        className: "finder__filter finder__select"
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
        className: "finder__filter finder__checkbox"
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
        className: "finder__checkbox__indicator finder__checkbox__indicator",
        "aria-hidden": "true",
        onClick: function onClick() {
          return toggleFacet();
        }
      }, toggleChecked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
        className: "fa fa-fw fas fa-check icon"
      }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("label", {
        className: "finder__filters__label--always",
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
  console.log('currentDate.getUTCMonth()', currentDate.getUTCMonth());
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
      className: "finder__filter finder__select ".concat(currentValue && "finder__select--selected")
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
      if (currentValue.toLowerCase() === value.data.toLowerCase() || responseFacetDetails && responseFacetDetails[0]) {
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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _finder_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./finder__select */ "./src/shared/components/filters/finder__select.tsx");
/* harmony import */ var _finder_eventSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./finder__eventSelect */ "./src/shared/components/filters/finder__eventSelect.tsx");
/* harmony import */ var _finder_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./finder__checkbox */ "./src/shared/components/filters/finder__checkbox.tsx");
/* harmony import */ var _finder_paramCheckbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./finder__paramCheckbox */ "./src/shared/components/filters/finder__paramCheckbox.tsx");
/* harmony import */ var _finder_eventCheckbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./finder__eventCheckbox */ "./src/shared/components/filters/finder__eventCheckbox.tsx");
/* harmony import */ var _finder_hiddenInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finder__hiddenInput */ "./src/shared/components/filters/finder__hiddenInput.tsx");
/* harmony import */ var _finder_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./finder__tag */ "./src/shared/components/filters/finder__tag.tsx");
/* harmony import */ var _finder_reset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finder__reset */ "./src/shared/components/filters/finder__reset.tsx");
/* harmony import */ var _finder_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./finder__sort */ "./src/shared/components/filters/finder__sort.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../util */ "./src/shared/util.tsx");









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
  if (setFacets.indexOf(facet.dependency) >= 0 && facetMap[facet.dependency] !== "") {
    return true;
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
  var clearFiltersDesktop = !props.updating && Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
      className: "finder__filters__reset finder__filters__reset--desktop"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_finder_reset__WEBPACK_IMPORTED_MODULE_8__["default"], {
      clear: props.clear,
      resetSort: false,
      matrixState: props.matrixState,
      site: props.config.site || "city" // Ensure site is defined
    })) : null,
    clearFiltersMobile = !props.updating && Object.keys(props.query.facets).length > 0 || props.query.sortType !== props.config.sort[0].type ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_finder_reset__WEBPACK_IMPORTED_MODULE_8__["default"], {
      clear: props.clear,
      resetSort: true,
      matrixState: props.matrixState
    }) : null;
  var sort = !props.matrixState && props.config.sort.length > 1 && props.config.displaySort && totalMatching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
    className: "wrapper--finder__select--sort--mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_finder_sort__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: props.mobile ? "sort-mobile" : "sort-desktop",
    config: props.config,
    query: props.query,
    update: props.update
  })) : null;
  var submitSSR = props.matrixState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
    className: "finder__filter__submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("button", {
    type: "submit",
    className: "finder__query__submit finder__submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("span", {
    className: "fal fa-sharp fa-search finder__query__submit__icon",
    "aria-hidden": "true"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("span", {
    className: "finder__query__submit__text"
  }, "Find"))) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
    className: "finder__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("h2", {
    className: "finder__filters__heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("span", {
    className: "finder__filters__heading__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("span", {
    className: "far fa-sharp fa-sliders-h icon",
    "aria-hidden": "true"
  }), " ", "Filter ".concat(props.config.summariseAs && props.config.summariseAs.plural)), clearFiltersMobile), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("fieldset", null, !props.hasMounted && props.query.fixedParameters ? props.query.fixedParameters.map(function (param) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_finder_hiddenInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: param.name,
      name: param.name,
      value: param.value
    });
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
    className: "wrapper--finder_filters--filters"
  }, props.config.facetLabels && props.config.facetLabels.map(function (facet) {
    if (dependencyMet(facet, props.query.facets)) {
      switch (facet.type) {
        case "eventCheckBox":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_finder_eventCheckbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            update: props.update,
            pastEventsResponse: props.response.extraSearches && props.response.extraSearches.past && props.response.extraSearches.past.response,
            matrixState: props.matrixState
          });
        case "paramCheckBox":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_finder_paramCheckbox__WEBPACK_IMPORTED_MODULE_12__["default"], {
            key: facet.meta,
            facet: facet,
            query: props.query,
            update: props.update,
            pastEventsResponse: props.response.extraSearches && props.response.extraSearches.past && props.response.extraSearches.past.response
          });
        case "eventSelect":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_finder_eventSelect__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_finder_select__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_finder_checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_finder_tag__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
          (0,_util__WEBPACK_IMPORTED_MODULE_17__.gaEvent)("jsError", "JavaScript error", "finder__filters()", "Unknown filter type in finder__filters.js", 0, true);
      }
    } else {
      return null;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("p", {
    className: "finder__filters__nofilters"
  }, "No filters are valid for the current query."), clearFiltersDesktop, sort, submitSSR)));
}
Finder__Filters.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object),
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  mobile: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().bool),
  hasMounted: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().bool),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().bool),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().bool)
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    focusTrap = _useState4[0],
    setFocusTrap = _useState4[1];
  var filtersRef = (0,react__WEBPACK_IMPORTED_MODULE_16__.useRef)(null);

  // Set up the focus trap once after mount
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    var filtersEl = filtersRef.current;
    if (!filtersEl) return;
    var trap = focus_trap__WEBPACK_IMPORTED_MODULE_17__.createFocusTrap(filtersEl, {
      initialFocus: filtersEl.querySelector(".wrapper--finder__filters--mobile__apply"),
      onDeactivate: function onDeactivate() {
        return setDisplay(false);
      },
      clickOutsideDeactivates: true
    });
    setFocusTrap(trap);
  }, []);

  // Manage focus trap and scroll behavior based on `display`
  (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function () {
    if (!focusTrap) return;
    if (display) {
      if (!focusTrap.active) focusTrap.activate();
      (0,_util__WEBPACK_IMPORTED_MODULE_18__.disableBodyScroll)();
    } else {
      if (focusTrap.active) focusTrap.deactivate();
      (0,_util__WEBPACK_IMPORTED_MODULE_18__.enableBodyScroll)();
    }
  }, [display, focusTrap]);
  var totalMatching = props.response && props.response.summary && props.response.summary.totalMatching;
  var result = totalMatching === 1 && props.summariseAs ? props.summariseAs.singular : props.summariseAs && props.summariseAs.plural ? props.summariseAs.plural : null;
  var totalMatchingMessage = totalMatching ? "Show ".concat(totalMatching, " ").concat(result) : "Close";
  var filtersCount = props.config.displaySort ? props.config.sort[0].type !== props.query.sortType || Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, "Filters", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "wrapper--finder__filters--mobile__toggle__count"
  }, "(", props.config.sort[0].type !== props.query.sortType ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, "Filter") : Object.keys(props.query.facets).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, "Filters", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", {
    className: "wrapper--finder__filters--mobile__toggle__count"
  }, "(", props.config.sort[0].type !== props.query.sortType ? Object.keys(props.query.facets).length + 1 : Object.keys(props.query.facets).length, ")")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("span", null, "Filter");
  var toggle = display ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    type: "button",
    className: "wrapper--finder__filters--mobile__toggle",
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
    className: "wrapper--finder__filters",
    "data-open": display,
    ref: filtersRef
  }, toggle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "wrapper--finder__filters--mobile__filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "wrapper--finder__filters--mobile__filters__content"
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
    className: "wrapper--finder__filters--mobile__apply"
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
    className: "wrapper--finder__filters--mobile__apply__text"
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
      className: "finder__filter finder__checkbox"
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
      className: "finder__checkbox__indicator finder__checkbox__indicator",
      "aria-hidden": "true",
      onClick: function onClick() {
        return toggleFacet();
      }
    }, toggleChecked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
      className: "fa fa-fw fas fa-check icon"
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("label", {
      className: "finder__filters__label--always",
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
  var resetClassName = props.site ? "fa fa-times icon" : "fa-sharp fa-solid fa-xmark icon";
  if (props.matrixState) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "?",
      className: "finder__reset",
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: resetClassName
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "finder__reset__text"
    }, "Reset"));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "finder__reset",
      type: "button",
      onClick: function onClick() {
        props.clear(props.resetSort);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: resetClassName
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "finder__reset__text"
    }, "Reset"));
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
      className: "finder__filter finder__select ".concat(currentValue && "finder__select--selected")
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
      if (currentValue.toLowerCase() === value.data.toLowerCase() || responseFacetDetails && responseFacetDetails[0]) {
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
    className: "finder__select--sort finder__select".concat(props.query.sortType !== props.config.sort[0].type ? " finder__select--selected" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("label", {
    className: "finder__select__overline",
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
    className: "finder__tag__text"
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
      className: "finder__filter finder__tag"
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
    className: "finder__clear",
    type: "button",
    onClick: function onClick() {
      props.clear(props.resetSort);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: clearIconCLassName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "finder__clear__text"
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
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _logic_funnelback__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../logic/funnelback */ "./src/shared/logic/funnelback.ts");
/* harmony import */ var _finder_clear__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./finder__clear */ "./src/shared/components/query/finder__clear.tsx");
/* harmony import */ var _logic_has_mounted__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../logic/has-mounted */ "./src/shared/logic/has-mounted.ts");


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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("span", {
    className: "sr-only"
  }, suggestion), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("span", {
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("span", {
    className: "finder__suggestion"
  }, suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()), suggestion.indexOf(partialQuery.toLowerCase()) + partialQuery.length)), suggestion.slice(suggestion.indexOf(partialQuery.toLowerCase()) + partialQuery.length)));
}
function Finder__Query(props) {
  var searchIconClassName = props.config.site && props.config.site === "bayes" ? "fa fa-search fa-lg" : "fal fa-sharp fa-search";
  var hasMounted = (0,_logic_has_mounted__WEBPACK_IMPORTED_MODULE_29__["default"])(); // ✅ detect client vs server

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)(props.query.query || ""),
    _useState2 = _slicedToArray(_useState, 2),
    partialQuery = _useState2[0],
    setPartialQuery = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    suggestions = _useState4[0],
    setSuggestions = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    call = _useState6[0],
    setCall = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)("finder--" + props.query.collection),
    _useState8 = _slicedToArray(_useState7, 1),
    inputId = _useState8[0];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    showSuggestions = _useState0[0],
    setShowSuggestions = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_28__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    activeSuggestionID = _useState10[0],
    setActiveSuggestionID = _useState10[1];
  var textInput = null;
  (0,react__WEBPACK_IMPORTED_MODULE_28__.useEffect)(function () {
    setPartialQuery(props.query.query);
  }, [props.query.query, props.updating]);
  (0,react__WEBPACK_IMPORTED_MODULE_28__.useEffect)(function () {
    return function () {
      if (call) call.cancel();
    };
  }, [call]);
  function focusInput() {
    if (textInput) {
      textInput.focus();
    }
  }
  var clearQuery = function clearQuery() {
    if (call) call.cancel();
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
    if (call) call.cancel();
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
  var clear = partialQuery && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement(_finder_clear__WEBPACK_IMPORTED_MODULE_30__["default"], {
    clear: function clear() {
      clearQuery();
    },
    site: props.config.site || "city"
  });
  var submitSuggestion = function submitSuggestion(suggestion) {
    setShowSuggestions(false);
    setSuggestions([]);
    focusInput();
    submitForm(suggestion);
  };
  var suggestionsList = suggestions && suggestions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("ul", {
    role: "listbox",
    "aria-label": "Search suggestions",
    "aria-activedescendant": activeSuggestionID,
    className: showSuggestions ? "finder__query__suggestions show" : "finder__query__suggestions hide"
  }, _toConsumableArray(new Set(suggestions)).slice(0, maximumSuggestions).map(function (suggestion, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("li", {
      key: suggestion,
      role: "option",
      id: inputId + "--" + i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("button", {
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
        var _e$currentTarget$clos, _e$currentTarget$pare, _e$currentTarget$pare2;
        switch (e.key) {
          case escapeKey:
            (_e$currentTarget$clos = e.currentTarget.closest(".finder__query")) === null || _e$currentTarget$clos === void 0 || (_e$currentTarget$clos = _e$currentTarget$clos.querySelector("input")) === null || _e$currentTarget$clos === void 0 || _e$currentTarget$clos.focus();
            setSuggestions([]);
            setActiveSuggestionID("");
            break;
          case arrowUp:
            e.preventDefault();
            (_e$currentTarget$pare = e.currentTarget.parentElement) === null || _e$currentTarget$pare === void 0 || (_e$currentTarget$pare = _e$currentTarget$pare.previousElementSibling) === null || _e$currentTarget$pare === void 0 || (_e$currentTarget$pare = _e$currentTarget$pare.querySelector("button")) === null || _e$currentTarget$pare === void 0 || _e$currentTarget$pare.focus();
            break;
          case arrowDown:
            e.preventDefault();
            (_e$currentTarget$pare2 = e.currentTarget.parentElement) === null || _e$currentTarget$pare2 === void 0 || (_e$currentTarget$pare2 = _e$currentTarget$pare2.nextElementSibling) === null || _e$currentTarget$pare2 === void 0 || (_e$currentTarget$pare2 = _e$currentTarget$pare2.querySelector("button")) === null || _e$currentTarget$pare2 === void 0 || _e$currentTarget$pare2.focus();
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

  // ✅ Server-side fallback
  if (!hasMounted) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("fieldset", {
      className: "finder__query"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
      className: "finder__query__input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("label", {
      className: "sr-only",
      htmlFor: inputId
    }, "Search ".concat(props.config.summariseAs && props.config.summariseAs.plural)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("input", {
      type: "text",
      id: inputId,
      name: "query",
      className: "finder__query-input",
      placeholder: props.config.placeholder,
      defaultValue: partialQuery
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("button", {
      type: "submit",
      className: "finder__query__submit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("span", {
      className: "fal fa-sharp fa-search finder__query__submit__icon",
      "aria-hidden": "true"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("span", {
      className: "finder__query__submit__text"
    }, "Find"))));
  }

  // ✅ Interactive version after hydration
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("fieldset", {
    className: "finder__query"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
    className: "finder__query__input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("div", {
    className: "finder__query__icon--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("span", {
    className: "finder__icon ".concat(searchIconClassName, " icon"),
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("label", {
    className: "sr-only",
    htmlFor: inputId
  }, "Search ".concat(props.config.summariseAs && props.config.summariseAs.plural)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("input", {
    autoComplete: "off",
    id: inputId,
    name: "query",
    placeholder: props.config.placeholder,
    ref: function ref(input) {
      textInput = input;
    },
    type: "text",
    value: partialQuery,
    onKeyDown: function onKeyDown(e) {
      if (e.key === escapeKey) clearQuery();else if (e.key === arrowDown && suggestions.length > 0) {
        var _e$currentTarget$pare3, _e$currentTarget$pare4;
        e.preventDefault();
        var button = (_e$currentTarget$pare3 = e.currentTarget.parentElement) === null || _e$currentTarget$pare3 === void 0 ? void 0 : _e$currentTarget$pare3.querySelector(".finder__query__suggestions button");
        button === null || button === void 0 || button.focus();
        setActiveSuggestionID(((_e$currentTarget$pare4 = e.currentTarget.parentElement) === null || _e$currentTarget$pare4 === void 0 || (_e$currentTarget$pare4 = _e$currentTarget$pare4.querySelector(".finder__query__suggestions li")) === null || _e$currentTarget$pare4 === void 0 ? void 0 : _e$currentTarget$pare4.id) || "");
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
      if (call) call.cancel();
      if (val) {
        var _ref = (0,_logic_funnelback__WEBPACK_IMPORTED_MODULE_31__.suggest)(props.query.collection, val, props.config.site ? props.config.site : undefined),
          _ref2 = _slicedToArray(_ref, 2),
          promise = _ref2[0],
          newCall = _ref2[1];
        setCall(newCall);
        promise.then(function (data) {
          return setSuggestions(data);
        })["catch"](function () {
          return setSuggestions([]);
        });
      } else {
        setSuggestions([]);
      }
    }
  }), suggestionsList, clear), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("button", {
    type: "submit",
    className: "finder__query__submit",
    onClick: function onClick() {
      return submitForm();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("span", {
    className: "".concat(searchIconClassName, " finder__query__submit__icon"),
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_28___default().createElement("span", {
    className: "finder__query__submit__text"
  }, "Find"))));
}
Finder__Query.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().object),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().object),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_32___default().bool)
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
    className: "finder__results__announcement"
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
    className: "finder__results__didyoumean"
  }, "No ", props.summariseAs && props.summariseAs.plural, " found for \u201C", props.query.misspelling, "\u201D. Searching instead for \u201C", props.query.query, "\u201D.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("p", {
    className: "finder__results__didyoumean"
  }, "Did you mean", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
    type: "button",
    className: "finder__didyoumean__button",
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
  console.log('Rendering Pagination: ', {
    numberOfPages: numberOfPages,
    currentPage: currentPage
  });
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
    className: "pagination__controls__button--prev"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Previous page")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "pagination__controls__button--prev",
    key: "prev",
    role: "button",
    onClick: function onClick(e) {
      e.preventDefault();
      if (currentPage) {
        changePage(currentPage - 1);
      }
    },
    href: (0,_logic_hyper_link__WEBPACK_IMPORTED_MODULE_1__.hyperLink)(props.query, null, currentPage - 1, props.numRanks)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Previous page ", currentPage)));
  var _loop = function _loop(page) {
    var className;
    switch (page - numberOfPages) {
      case 0:
        className = "pagination__controls__element pagination__controls__button pagination__controls__button--last";
        break;
      case -1:
        className = "pagination__controls__element pagination__controls__button pagination__controls__button--penultimate";
        break;
      default:
        className = "pagination__controls__element pagination__controls__button";
    }
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
    if (page === 1) {
      pages.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: "firstEllipsis",
        className: "pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--first"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u2026")));
    } else if (page === numberOfPages - 1) {
      pages.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: "lastEllipsis",
        className: "pagination__controls__element pagination__controls__ellipsis pagination__controls__ellipsis--last"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u2026")));
    }
  };
  for (var page = 1; page <= numberOfPages; page++) {
    _loop(page);
  }
  pages.push(currentPage === numberOfPages ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    key: "nextPage",
    className: "pagination__controls__button--next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Next page")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "pagination__controls__button--next",
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Next page")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pagination__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "pagination__controls",
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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
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
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../cards/finder__results__bestbet */ "./src/shared/components/cards/finder__results__bestbet.tsx");
/* harmony import */ var _cards_finder_results_card__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../cards/finder__results__card */ "./src/shared/components/cards/finder__results__card.tsx");
/* harmony import */ var _finder_didyoumean__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./finder__didyoumean */ "./src/shared/components/results/finder__didyoumean.tsx");
/* harmony import */ var _finder_pagination__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./finder__pagination */ "./src/shared/components/results/finder__pagination.tsx");
/* harmony import */ var _cards_finder_results_promo__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../cards/finder__results__promo */ "./src/shared/components/cards/finder__results__promo.tsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _finder_results_summary__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./finder__results__summary */ "./src/shared/components/results/finder__results__summary.tsx");
/* harmony import */ var _finder_announcement__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./finder__announcement */ "./src/shared/components/results/finder__announcement.tsx");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


























function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
  var updating = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("p", {
    className: "finder__results__updating",
    "aria-live": "polite"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", {
    className: "fas fa-spinner fa-pulse icon",
    "aria-hidden": "true"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", null, "Updating ", props.summariseAs && props.summariseAs.plural, "\u2026"));

  /**
   * Display promo card based on user search/filter input.
   *
   * Props passed from finder. If conditions are met, promo card will display between first
   * result card and the rest of the returned results.
   */
  var promoCardConditionMet = false,
    // Are conditions met to render promo card?
    matchedPromoGroup = [],
    // Matching promo group based on query parameters
    matchedPromoGroupDetails; // Matched promo group data to render to card

  if (props.promo) {
    var promoConditions = props.promo[0]["conditions"],
      // Conditions to render promo card
      promoDetails = props.promo[0]["details"],
      // Details rendered to promo card
      filterFacets = props.query.facets,
      // User-defined filter/search values
      searchFacets = props.query.query.toLowerCase(),
      // User-input search value
      queryFacetsAll = _objectSpread(_objectSpread({}, filterFacets), {}, {
        searchFacets: searchFacets
      }); // Combine filter and search inputs

    var promoCardConditionGroup; // Group-specific data to render in promo card

    // Promo condition check and define group
    var queryFacetsArray = [];
    var queries = Object.values(queryFacetsAll);
    for (var _i = 0, _queries = queries; _i < _queries.length; _i++) {
      var query = _queries[_i];
      queryFacetsArray.push(query);
    }

    // Remove empty array items
    queries = queries.filter(function (item) {
      return item;
    });

    // Loop query parameters and check if they match any of the promo card conditions
    var _iterator = _createForOfIteratorHelper(queries),
      _step;
    try {
      var _loop = function _loop() {
        var q = _step.value;
        matchedPromoGroup = promoConditions.filter(function (el) {
          return el.school === q || el.level === q || el.related === q || el.subject === q || el.type === q || el.searchQuery1 === q;
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }

      // Assign promo group value and define if promo card conditions are met
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (matchedPromoGroup.length > 0) {
      promoCardConditionGroup = matchedPromoGroup[0]["promoGroup"];
      promoCardConditionMet = true;
    } else {
      promoCardConditionMet = false;
    }

    // Filter promo card details to match correct group of data
    matchedPromoGroupDetails = promoDetails.filter(function (el) {
      return el.promoGroup === promoCardConditionGroup;
    });
  }
  var resultsClass = "resultsVariant" in props.config ? "finder__results__list finder__results__list--".concat(props.config.resultsVariant) : "finder__results__list";
  if (props.response) {
    var summary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_finder_results_summary__WEBPACK_IMPORTED_MODULE_27__["default"], {
      clear: props.clear,
      config: props.config,
      currEnd: props.response.summary.currEnd,
      currStart: props.response.summary.currStart,
      numRanks: props.response.summary.numRanks,
      query: props.query,
      summariseAs: props.summariseAs,
      totalMatching: props.response.summary.totalMatching,
      update: props.update,
      summaryHeadingRef: props.summaryHeadingRef
    });
    var announcement = props.config.announcement && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_finder_announcement__WEBPACK_IMPORTED_MODULE_28__["default"], {
      announcement: props.config.announcement
    });
    var didYouMean = (props.query.misspelling || props.response.spell) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_finder_didyoumean__WEBPACK_IMPORTED_MODULE_29__["default"], {
      query: props.query,
      summariseAs: props.summariseAs,
      response: props.response,
      update: props.update
    });

    // if we have more results than will fit on a single page, we need
    // pagination
    var pagination = props.response.summary.totalMatching && props.response.summary.numRanks && props.response.summary.totalMatching > props.response.summary.numRanks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_finder_pagination__WEBPACK_IMPORTED_MODULE_30__["default"], {
      currStart: props.response.summary.currStart,
      numRanks: props.response.summary.numRanks,
      query: props.query,
      totalMatching: props.response.summary.totalMatching,
      update: props.update
    });
    var promoCard = matchedPromoGroupDetails && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_cards_finder_results_promo__WEBPACK_IMPORTED_MODULE_31__["default"], {
      heading: matchedPromoGroupDetails[0]["heading"],
      body: matchedPromoGroupDetails[0]["body"],
      linkRef: matchedPromoGroupDetails[0]["linkRef"],
      linkText: matchedPromoGroupDetails[0]["linkText"]
    });
    var results;
    var secondItemOnwards = props.response.results;
    if (promoCardConditionMet && (props.response.bestBets && props.response.bestBets.length > 0 || props.response.results.length > 0)) {
      if (props.query.startRank === 1) {
        var firstItemData = props.response.results[0];
        var secondItemOnwardsData = Array.from(secondItemOnwards.slice(1));
        results = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("ol", {
          start: props.response.summary.currStart,
          className: resultsClass
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_32__["default"], {
          bestBets: false,
          details: firstItemData,
          type: props.type,
          query: props.query
        }), promoCard, secondItemOnwardsData.map(function (s) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_32__["default"], {
            bestBets: false,
            details: s,
            key: s.docNum,
            type: props.type,
            query: props.query
          });
        }));
      } else {
        results = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("ol", {
          start: props.response.summary.currStart,
          className: resultsClass
        }, props.response.results.map(function (card) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_32__["default"], {
            bestBets: false,
            details: card,
            key: card.docNum,
            type: props.type,
            query: props.query
          });
        }));
      }
    }
    if (props.response.results && !promoCardConditionMet) {
      results = props.response.bestBets && props.response.bestBets.length > 0 || props.response.results.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("ol", {
        start: props.response.summary.currStart,
        className: resultsClass
      }, props.response.bestBets && props.response.bestBets.map(function (card, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_cards_finder_results_bestbet__WEBPACK_IMPORTED_MODULE_33__["default"], {
          details: card,
          key: "best-bet__".concat(i)
        });
      }), props.response.results.map(function (card) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_cards_finder_results_card__WEBPACK_IMPORTED_MODULE_32__["default"], {
          bestBets: false,
          details: card,
          key: card.docNum,
          type: props.type,
          query: props.query
        });
      })) : null;
    }

    // render either the results, or a spinner while we wait for Funnelback
    var resultsContent = props.updating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement((react__WEBPACK_IMPORTED_MODULE_26___default().Fragment), null, updating) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement((react__WEBPACK_IMPORTED_MODULE_26___default().Fragment), null, didYouMean, announcement, summary, results, pagination);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
      className: "finder__results"
    }, resultsContent);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("div", {
      className: "finder__results"
    }, updating);
  }
}
Finder__Results.propTypes = {
  clear: (prop_types__WEBPACK_IMPORTED_MODULE_34___default().func),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_34___default().object),
  response: (prop_types__WEBPACK_IMPORTED_MODULE_34___default().object),
  summariseAs: (prop_types__WEBPACK_IMPORTED_MODULE_34___default().object),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_34___default().string),
  update: (prop_types__WEBPACK_IMPORTED_MODULE_34___default().object),
  updating: (prop_types__WEBPACK_IMPORTED_MODULE_34___default().bool),
  config: (prop_types__WEBPACK_IMPORTED_MODULE_34___default().object),
  promo: (prop_types__WEBPACK_IMPORTED_MODULE_34___default().array),
  pastEventsQuery: (prop_types__WEBPACK_IMPORTED_MODULE_34___default().object),
  pastEventsResponse: (prop_types__WEBPACK_IMPORTED_MODULE_34___default().object),
  pastEventsUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_34___default().object),
  matrixState: (prop_types__WEBPACK_IMPORTED_MODULE_34___default().object)
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
      className: "wrapper--finder__select--sort--desktop"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_filters_finder_sort__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: props.config,
      query: props.query,
      update: props.update
    })) : null;
  if (props.totalMatching === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "finder__results__summary finder__results__summary--noresults",
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "finder__results__summary",
      ref: props.summaryHeadingRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", {
      "aria-live": "polite",
      className: "finder__results__summary__heading"
    }, props.query.query || Object.keys(props.query.facets).length > 0 ? "Matching" : "All", " ", result, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "(showing", " ", props.totalMatching > props.numRanks && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, formatter.format(props.currStart)), "\u2013", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, props.currEnd && formatter.format(props.currEnd)), " ", "of", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, formatter.format(props.totalMatching)), " ", result, props.query.query && " for \u201C".concat(props.query.query, "\u201D"), ")")), sort);
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
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_query_finder_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/query/finder__query */ "./src/shared/components/query/finder__query.tsx");
/* harmony import */ var _components_filters_finder_filtersmobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/filters/finder__filtersmobile */ "./src/shared/components/filters/finder__filtersmobile.tsx");
/* harmony import */ var _components_results_finder_results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/results/finder__results */ "./src/shared/components/results/finder__results.tsx");
/* harmony import */ var _logic_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/logic */ "./src/shared/logic/logic.ts");
/* harmony import */ var _logic_has_mounted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/has-mounted */ "./src/shared/logic/has-mounted.ts");










function Finder(props) {
  var _props$initialResults;
  var hasMounted = (0,_logic_has_mounted__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
  var _useLogicWrapper = (0,_logic_logic__WEBPACK_IMPORTED_MODULE_3__["default"])(props.config, (_props$initialResults = props.initialResults) !== null && _props$initialResults !== void 0 ? _props$initialResults : intialResults, props.initialQuery || {}, props.element),
    query = _useLogicWrapper.query,
    funnelbackResponse = _useLogicWrapper.funnelbackResponse,
    updating = _useLogicWrapper.updating,
    updater = _useLogicWrapper.updater,
    clear = _useLogicWrapper.clear,
    matrixState = _useLogicWrapper.matrixState,
    summaryHeadingRef = _useLogicWrapper.summaryHeadingRef;
  var finderMain = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, props.config.facetLabels && props.config.facetLabels.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_filters_finder_filtersmobile__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_results_finder_results__WEBPACK_IMPORTED_MODULE_5__["default"], {
    clear: clear,
    config: props.config,
    query: query,
    response: funnelbackResponse,
    summariseAs: props.config.summariseAs,
    type: props.config.resultCard,
    update: updater,
    updating: updating,
    summaryHeadingRef: summaryHeadingRef
  }));
  var QueryInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_query_finder_query__WEBPACK_IMPORTED_MODULE_6__["default"], {
    config: props.config,
    query: query,
    update: updater,
    updating: updating
  });

  // If the site is bayes, we want to render the query input in the top section

  var topSectionQueryInput = props.config.queryInputConfig && props.config.queryInputConfig.showQueryInTopSection ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "finder__top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "container"
  }, QueryInput)) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {
    className: "finder",
    method: "GET"
    // prevent default only after mount
    ,
    onSubmit: function onSubmit(e) {
      if (hasMounted) {
        e.preventDefault();
      }
    }
  }, props.config.site && props.config.site === "bayes" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, topSectionQueryInput, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "finder__main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "grid"
  }, finderMain)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, QueryInput, finderMain));
}
Finder.propTypes = {
  config: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object).isRequired,
  element: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  initialQuery: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  initialResults: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)
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
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! https */ "./node_modules/https-browserify/index.js");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../util */ "./src/shared/util.tsx");


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
var dxpFindRootUrl = '/funnelback-dxp-find',
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
function find(collection, fixedFacets, fixedParameters, query, sortType, startRank, numRank, facets, parameters, site, profile) {
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
    facetKeys = Object.keys(facets);
  facetKeys.forEach(function (key) {
    return facetParams["meta_".concat(key, "_sand")] = facets[key];
  });
  var CancelToken = axios__WEBPACK_IMPORTED_MODULE_19__["default"].CancelToken,
    call = CancelToken.source(),
    config = {
      baseURL: baseURL(site),
      cancelToken: call.token,
      httpsAgent: new (https__WEBPACK_IMPORTED_MODULE_18___default().Agent)({
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
  return [(0,_util__WEBPACK_IMPORTED_MODULE_20__.axiosRequest)(config).then(function (data) {
    return data || defaultResponse;
  }), call];
}

/**
 * Funnelback suggestion query.
 *
 * @param {string} collection The Funnelback collection to query.
 * @param {string} partialQuery The string to make suggestions for.
 * @return {Promise} - A promise of an array of suggestion strings.
 */
function suggest(collection, partialQuery, site) {
  var CancelToken = axios__WEBPACK_IMPORTED_MODULE_19__["default"].CancelToken,
    call = CancelToken.source(),
    config = {
      baseURL: baseURL(site),
      cancelToken: call.token,
      url: dxpSuggestRootUrl,
      timeout: timeout,
      params: {
        collection: collection,
        partial_query: partialQuery,
        show: maximumSuggestions
      }
    };
  return [(0,_util__WEBPACK_IMPORTED_MODULE_20__.axiosRequest)(config), call];
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
  return (0,_util__WEBPACK_IMPORTED_MODULE_20__.axiosRequest)(config);
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
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shared_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/util */ "./src/shared/util.tsx");
















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
function hyperLink(query, facet, pageNumber, numberRank) {
  var newStartRank = pageNumber && numberRank && 1 + (pageNumber - 1) * numberRank;
  var newQuery = JSON.parse(JSON.stringify(query)); //deep clone

  if (facet && facet.type === "tag" && facet.meta) {
    remove(newQuery, facet.meta);
  }
  var flattenQuery = (0,_shared_util__WEBPACK_IMPORTED_MODULE_14__.flattenObj)(newQuery);
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
  }).map(function (key) {
    var param = Object.values(key);
    if (/fixedParameters/.test(param[0])) {
      return encodeURIComponent(param[0].substring(16)) + "=" + encodeURIComponent(param[1]);
    } else if (/fixedFacets/.test(param[0])) {
      return encodeURIComponent("meta_".concat(param[0].substring(12), "_sand")) + "=" + encodeURIComponent(param[1]);
    } else if (/parameters/.test(param[0])) {
      return encodeURIComponent(param[0].substring(11)) + "=" + encodeURIComponent(param[1]);
    }
    switch (param[0]) {
      case "collection":
        return encodeURIComponent(param[0]) + "=" + encodeURIComponent(param[1]);
      case "query":
        return encodeURIComponent(param[0]) + "=" + encodeURIComponent(param[1]);
      case "sortType":
        return encodeURIComponent("sort") + "=" + encodeURIComponent(param[1]);
      case "startRank":
        return encodeURIComponent("start_rank") + "=" + encodeURIComponent(facet ? param[1] : newStartRank || '');
      case "numRanks":
        return encodeURIComponent("num_rank") + "=" + encodeURIComponent(param[1]);
      default:
        return encodeURIComponent("meta_".concat(param[0], "_sand")) + "=" + encodeURIComponent(param[1]);
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
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _has_mounted__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./has-mounted */ "./src/shared/logic/has-mounted.ts");
/* harmony import */ var _replace_history__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./replace-history */ "./src/shared/logic/replace-history.ts");
/* harmony import */ var _url_params__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./url-params */ "./src/shared/logic/url-params.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../util */ "./src/shared/util.tsx");
/* harmony import */ var _funnelback__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./funnelback */ "./src/shared/logic/funnelback.ts");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_30__);


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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




































function useLogicWrapper(config, results, matrixQuery, element) {
  var summaryHeadingRef = (0,react__WEBPACK_IMPORTED_MODULE_29__.useRef)(null);
  var hasMounted = (0,_has_mounted__WEBPACK_IMPORTED_MODULE_31__["default"])();
  var screenOffsetRatio = 10;
  var scrollDuration = typeof window !== "undefined" && !(0,_util__WEBPACK_IMPORTED_MODULE_32__.reduceMotion)() ? 1000 : 0;
  var initialResults = results || {};
  var nonFBParams = config.facetLabels && config.facetLabels.filter(function (p) {
    return p.nonFBParam;
  });
  var initializeParams = config.facetLabels && config.facetLabels.length > 0 ? (0,_url_params__WEBPACK_IMPORTED_MODULE_33__.getFacetParams)(config.facetLabels, matrixQuery) : {};
  var site = config.site || undefined;
  var profile = config.profile || "_default";

  /**
   * initial state for the Funnelback query, taken from URL parameters and
   * configuration
   **/
  var initialQuery = {
    collection: config.collection,
    profile: profile,
    facets: initializeParams,
    parameters: matrixQuery && matrixQuery.parameters && matrixQuery.parameters.length > 0 ? matrixQuery.parameters : {},
    fixedFacets: config.fixedFacets,
    fixedParameters: config.fixParameters ? config.fixParameters : [],
    interacted: false,
    misspelling: null,
    numRanks: config.numRanks,
    query: matrixQuery && matrixQuery.query ? matrixQuery.query : "",
    sortType: config.sort[0].type,
    startRank: 1
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(Object.keys(matrixQuery).length ? matrixQuery : null),
    _useState2 = _slicedToArray(_useState, 2),
    defaultParams = _useState2[0],
    setDefaultParams = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(initialQuery),
    _useState4 = _slicedToArray(_useState3, 2),
    query = _useState4[0],
    setQuery = _useState4[1]; // will set once defaultParams is ready
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(Object.keys(initialResults).length > 0 ? Object.freeze(results) : Object.freeze({
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
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(Object.keys(initialResults).length === 0),
    _useState8 = _slicedToArray(_useState7, 2),
    updating = _useState8[0],
    setUpdating = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)({
      cancel: function cancel() {}
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    call = _useState0[0],
    setCall = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    update = _useState10[0],
    setUpdate = _useState10[1];

  // Step 1: Initialize defaultParams after mount
  (0,react__WEBPACK_IMPORTED_MODULE_29__.useEffect)(function () {
    if (!defaultParams && typeof window !== "undefined") {
      var searchParams = new URLSearchParams(window.location.search);
      var obj = {};
      searchParams.forEach(function (value, key) {
        obj[key] = value;
      });
      setDefaultParams(obj);
    }
  }, [defaultParams]);

  // Step 2: Build initial query once defaultParams is ready
  (0,react__WEBPACK_IMPORTED_MODULE_29__.useEffect)(function () {
    if (!defaultParams) return;
    var matrixState = !hasMounted && matrixQuery ? true : false;
    var baseQuery = {
      collection: config.collection,
      facets: config.facetLabels && config.facetLabels.length > 0 ? (0,_url_params__WEBPACK_IMPORTED_MODULE_33__.getFacetParams)(config.facetLabels, defaultParams) : {},
      parameters: config.facetLabels && nonFBParams && nonFBParams.length > 0 ? (0,_url_params__WEBPACK_IMPORTED_MODULE_33__.getNonFBParams)(config.facetLabels, defaultParams) : {},
      fixedFacets: config.fixedFacets,
      fixedParameters: config.fixParameters || [],
      interacted: false,
      misspelling: null,
      numRanks: config.numRanks,
      query: !matrixState && defaultParams["query"] ? defaultParams["query"] : defaultParams.query || "",
      sortType: !matrixState && defaultParams["query"] ? "" : !matrixState && defaultParams["sort"] ? defaultParams["sort"] : config.sort[0].type,
      startRank: !matrixState && defaultParams["start_rank"] ? parseInt(defaultParams["start_rank"], 10) : typeof defaultParams.start_rank === "string" ? parseInt(defaultParams.start_rank, 10) : 1
    };
    setQuery(baseQuery);
  }, [defaultParams, hasMounted]);

  // Step 3: Patch query after mount
  (0,react__WEBPACK_IMPORTED_MODULE_29__.useEffect)(function () {
    if (hasMounted && defaultParams && defaultParams["num_ranks"]) {
      setQuery(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          numRanks: parseInt(defaultParams["num_ranks"], 10) || prev.numRanks
        });
      });
    }
  }, [hasMounted, defaultParams]);

  // Step 4: Update response when `update` flips
  (0,react__WEBPACK_IMPORTED_MODULE_29__.useEffect)(function () {
    if (!query) return;
    (0,_replace_history__WEBPACK_IMPORTED_MODULE_34__["default"])(query.query, query.startRank, query.facets, query.parameters || {}, query.sortType, config.facetLabels || [], config.sort[0].type, hasMounted);
    setUpdating(true);
    if (query.interacted && element) {
      var resultsEl = element.querySelector(".finder__results");
      if (resultsEl instanceof HTMLElement) {
        zenscroll__WEBPACK_IMPORTED_MODULE_30___default().center(resultsEl, scrollDuration, -window.innerHeight / screenOffsetRatio);
      }
    }
    call.cancel();
    var _find = (0,_funnelback__WEBPACK_IMPORTED_MODULE_35__.find)(query.collection, query.fixedFacets, query.fixedParameters, query.query, query.sortType, query.startRank, query.numRanks, query.facets, query.parameters, site, profile),
      _find2 = _slicedToArray(_find, 2),
      request = _find2[0],
      requestToken = _find2[1];
    setCall({
      cancel: function cancel() {
        return requestToken.cancel();
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
    })["catch"](function () {
      setResponse(initialResults);
      setUpdating(false);
    });
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
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _url_params__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./url-params */ "./src/shared/logic/url-params.ts");















/**
 * Preserve the search state in the URL parameters.
 *
 * @param {string} currQuery The search query.
 * @param {integer} currStartRank The start rank.
 * @param {object[]} currFacets A map of facet meta labels to their values.
 * @param {*} facetLabels Array of facet definitions.
 */
function replaceHistory(currQuery, currStartRank, currFacets, currParameters, currSort, facetLabels, defaultSort, hasMounted) {
  if (hasMounted) {
    var params = new URLSearchParams(window.location.search);
    if ((0,_url_params__WEBPACK_IMPORTED_MODULE_12__.isURLSearchParams)(params)) {
      if (currQuery !== "") {
        params.set("query", currQuery);
      } else {
        params["delete"]("query");
      }
      if (currStartRank && currStartRank !== 1) {
        params.set("start_rank", currStartRank.toString());
      } else {
        params["delete"]("start_rank");
      }
      if (currSort !== defaultSort && currSort !== "") {
        params.set("sort", currSort);
      } else {
        params["delete"]("sort");
      }
      facetLabels.forEach(function (facet) {
        if (currFacets[facet.meta]) {
          params.set("meta_".concat(facet.meta, "_sand"), currFacets[facet.meta]);
        } else {
          params["delete"]("meta_".concat(facet.meta, "_sand"));
        }
      });
      facetLabels.forEach(function (facet) {
        if (currParameters[facet.meta]) {
          params.set(facet.meta, currParameters[facet.meta]);
        } else {
          params["delete"](facet.meta);
        }
      });
      var hasParams = params.toString().length ? "?" : "";
      window.history.replaceState({}, "", "".concat(window.location.pathname).concat(hasParams).concat(params.toString()));
    }
  }
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
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_21__);


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
  if (isURLSearchParams(params)) {
    var reducedParams = facets.map(function (facet) {
      var param = {};
      var value = params.get("meta_".concat(facet.meta, "_sand"));
      if (value) {
        param[facet.meta] = value;
      }
      return param;
    }).reduce(function (facetParams, facet) {
      return Object.assign(facetParams, facet);
    }, {});
    return reducedParams;
  } else {
    var typedParams = params;
    var _reducedParams = facets.map(function (facet) {
      var param = {};
      var key = "meta_".concat(facet.meta, "_sand");
      if (typedParams[key]) {
        param[facet.meta] = typedParams[key];
      }
      return param;
    }).reduce(function (facetParams, facet) {
      return Object.assign(facetParams, facet);
    }, {});
    return _reducedParams;
  }
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
/* harmony export */   checkIntersectionObserver: () => (/* binding */ checkIntersectionObserver),
/* harmony export */   createHTMLElement: () => (/* binding */ createHTMLElement),
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
 * Useful utility functions
 * @module util
 * @author ...
 */



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
  var reducedMotionQuery = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  return reducedMotionQuery && reducedMotionQuery.matches ? true : false;
}
function isVisible(elem) {
  return elem.offsetHeight !== 0 && elem.offsetWidth !== 0;
}
function verticallyInWindow(elem) {
  var rect = elem.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= window.innerHeight;
}
function parametersToObject(parameterString) {
  var parameters = {};
  parameterString.substring(1).split("&").forEach(function (parameter) {
    var _parameter$split = parameter.split("="),
      _parameter$split2 = _slicedToArray(_parameter$split, 2),
      k = _parameter$split2[0],
      v = _parameter$split2[1];
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
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
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
function numberFromString(string) {
  return string.replace(/\D/g, "");
}
function isMobile() {
  var screen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 432;
  return window.innerWidth < screen;
}
function toArray(obj) {
  return Array.from(obj);
}
function detectIE() {
  var ua = window.navigator.userAgent;
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
function checkIntersectionObserver() {
  return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;
}
function createHTMLElement(type, attributes) {
  var el = document.createElement(type);
  attributes.forEach(function (att) {
    if (att.label === "content") {
      el.appendChild(document.createTextNode(att.val));
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
    if (!axios__WEBPACK_IMPORTED_MODULE_27__["default"].isCancel(e)) {
      gaEvent("jsError", "JavaScript error", "Line ".concat(e.lineNumber, " - ").concat(e.message), "axiosRequest ".concat(e.fileName, " (").concat(window.location, ")"), 0, true);
    }
    return undefined;
  });
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
  // The object which contains the
  // final result
  var result = {};

  // loop through the object "ob"
  var _loop = function _loop(i) {
    // We check the type of the i using
    // typeof() function and recursively
    // call the function again
    if (_typeof(ob[i]) === "object" && !Array.isArray(ob[i])) {
      var temp = flattenObj(ob[i]);
      for (var j in temp) {
        if (i === "parameters") {
          result["".concat(i, "-").concat(j)] = temp[j];
        } else {
          result[j] = temp[j];
        }
        // Store temp in result
      }
    } else if (Array.isArray(ob[i])) {
      ob[i].forEach(function (val) {
        if (i === "fixedFacets") {
          result["".concat(i, "-").concat(val.meta)] = val.value;
        } else {
          result["".concat(i, "-").concat(val.name)] = val.value;
        }
      });
    }
    // Else store ob[i] in result directly
    else {
      result[i] = ob[i];
    }
  };
  for (var i in ob) {
    _loop(i);
  }
  return result;
}
function getVerticalScrollbarWidth() {
  var scrollDiv = document.createElement("div");
  scrollDiv.style.cssText = "width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;";
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  document.documentElement.style.setProperty("--scrollbar-width", "".concat(scrollbarWidth, "px"));
  return scrollbarWidth;
}
function enableBodyScroll() {
  document.documentElement.classList.remove("no-scroll");
  var btn = document.querySelector(".back-to-top");
  if (btn) btn.removeAttribute("hidden");
}
function disableBodyScroll() {
  getVerticalScrollbarWidth();
  var btn = document.querySelector(".back-to-top");
  if (btn) btn.setAttribute("hidden", "true");
  document.documentElement.classList.add("no-scroll");
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