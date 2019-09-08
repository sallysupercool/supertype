var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/combined-mixins-export.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/combined-mixins-export.js":
/*!***************************************!*\
  !*** ./src/combined-mixins-export.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/ui */ "./src/util/ui.js");
/* harmony import */ var _util_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/export */ "./src/util/export.js");
/* harmony import */ var _export_open_export_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export/open-export-dialog */ "./src/export/open-export-dialog.js");



/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  Object(_export_open_export_dialog__WEBPACK_IMPORTED_MODULE_2__["default"])(context, {
    title: 'Create Combined Mixins',
    informativeText: 'Group the initial mixins into super mixins with media queries',
    confirmBtnText: 'Export SCSS'
  }, function (textStyles, data) {
    // Create mega mixins and save out
    var output = _util_export__WEBPACK_IMPORTED_MODULE_1__["default"].createCombinedStyles(textStyles, data); // Ask the user to save the file

    _util_ui__WEBPACK_IMPORTED_MODULE_0__["default"].createSavePanel('_combined-type.scss', output);
  });
});
;

/***/ }),

/***/ "./src/export/export-components.js":
/*!*****************************************!*\
  !*** ./src/export/export-components.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: 'multicheckbox',
  id: 'excludeProps',
  label: 'Exclude properties',
  values: ['Color', 'Letter spacing', 'Text transform' // swap for our removes
  ]
}, {
  type: 'text',
  id: 'maxDecimalPlaces',
  value: 6,
  // increased to 6 for accuracy
  label: 'Maximal decimal places'
}, {
  type: 'checkbox',
  id: 'export New Site Pack',
  label: 'Export all',
  values: 0
}, {
  type: 'select',
  //TODO: remove as we do this in PostCSS
  id: 'cssUnit',
  options: ['px', 'em', 'rem', '%', 'vh', 'vw', 'No unit'],
  label: 'CSS unit'
}, {
  type: 'text',
  //TODO remove as this is not rel for us
  id: 'scalingFactor',
  value: 1,
  label: 'Size scaling factor'
}, {
  type: 'text',
  id: 'namingPrefix',
  value: 'text-',
  // changed to our prefix
  label: 'Naming prefix'
}, {
  type: 'select',
  id: 'namingConvention',
  options: ['Text style name', // prefer our convention
  'Numeric'],
  label: 'Naming convention'
}]);

/***/ }),

/***/ "./src/export/open-export-dialog.js":
/*!******************************************!*\
  !*** ./src/export/open-export-dialog.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ui */ "./src/util/ui.js");
/* harmony import */ var _util_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/export */ "./src/util/export.js");
/* harmony import */ var _util_sketch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/sketch */ "./src/util/sketch.js");
/* harmony import */ var _export_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./export-components */ "./src/export/export-components.js");




/* harmony default export */ __webpack_exports__["default"] = (function (context, opts, cb) {
  _util_ui__WEBPACK_IMPORTED_MODULE_0__["default"].createSettingsDialog(context, opts, _export_components__WEBPACK_IMPORTED_MODULE_3__["default"], function (data) {
    // Defaults
    data.propertyNamingConvention = data.propertyNamingConvention || 'Numeric';
    data.cssUnit = data.cssUnit === 'No unit' ? 0 : data.cssUnit; // First store the properties we should exclude

    var excludeProps = [];

    if (data['excludeProps']['Color']) {
      excludeProps.push('color');
    }

    if (data['excludeProps']['Letter Spacing']) {
      excludeProps.push('letterSpacing');
    }

    if (data['excludeProps']['Text Transform']) {
      excludeProps.push('textTransform');
    } // Next store the words we should strip out from the text style names !not yet hooked up


    var excludeWords = [];

    if (data.excludeWords | length) {
      var wordString = data.excludeWords;
      wordArray = excludeWords.split(",");
      excludeWords.push(wordArray);
    } // Get the text styles from the Sketch document


    var textStyles = _util_sketch__WEBPACK_IMPORTED_MODULE_2__["default"].getTextStyles(context);
    textStyles = _util_export__WEBPACK_IMPORTED_MODULE_1__["default"].sortTextStyles(textStyles);
    textStyles = _util_export__WEBPACK_IMPORTED_MODULE_1__["default"].excludeTextStyleProperties(textStyles, excludeProps);
    textStyles = _util_export__WEBPACK_IMPORTED_MODULE_1__["default"].stripSketchWords(textStyles, excludeWords);

    if (data['merge']) {
      textStyles = _util_export__WEBPACK_IMPORTED_MODULE_1__["default"].removeDoubleTextStyles(textStyles);
    }

    cb(textStyles, data);
  });
});
;

/***/ }),

/***/ "./src/util/export.js":
/*!****************************!*\
  !*** ./src/util/export.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util/util.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./src/util/number.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var exportUtils = {
  sortTextStyles: function sortTextStyles(textStyles) {
    // Sort text styles by name
    textStyles.sort(function (a, b) {
      return a.name - b.name;
    });
    return textStyles;
  },
  // strip Sketch parts from name ADD IN ANY MORE HERE-- TODO make this a UI
  stripSketchWords: function stripSketchWords(mixinName) {
    mixinName = mixinName.replace(/-left|-right|-centre|-light-grey|-black|-white|-series|-event|-brand|-variable/g, '');
    return mixinName;
  },
  // clean off media names, not for sass mixins export, only for other options!
  stripMedias: function stripMedias(mixinName) {
    mixinName = mixinName.replace(/-desktop|-mobile|-tablet/g, '');
    return mixinName;
  },
  // deduper for cleaned names only
  deDupe: function deDupe(cleanedNames) {
    var unique = _toConsumableArray(new Set(cleanedNames));

    return unique;
  },
  excludeTextStyleProperties: function excludeTextStyleProperties(textStyles) {
    var excludedProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    textStyles.forEach(function (textStyle) {
      excludedProps.forEach(function (prop) {
        if (textStyle[prop]) {
          delete textStyle[prop];
        }
      });
    });
    return textStyles;
  },
  //start creating things!
  // make a list of final text styles to drive creation of classes and mega mixins
  createFinalStylesList: function createFinalStylesList(textStyles) {
    //clean random names
    var cleanedNames = []; // get the name out of the text style and run through any cleaning here -- have written it all out so it's easier to add to later

    textStyles.forEach(function (textStyle, i) {
      var cleanedName = textStyle.name;
      cleanedName = stripSketchWords(textStyle.name);
      cleanedName = stripMedias(textStyle.name);
      cleanedNames = cleanedNames + cleanedName;
    });
    cleanedNames = deDupe(cleanedNames);
    return cleanedNames;
  },
  createCssProps: function createCssProps(textStyle) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    opts.cssUnit = opts.cssUnit || 0;
    opts.scalingFactor = opts.scalingFactor || 1;
    opts.maxDecimalPlaces = opts.maxDecimalPlaces || 2;
    var cssProps = {};
    cssProps['font-family'] = textStyle.fontFamily;
    cssProps['font-weight'] = 400;
    cssProps['text-transform'] = 'none';
    var fontParts = textStyle.fontFamily.split('-');
    var fontWeightMap = {
      'Thin': 100,
      'Light': 300,
      'Regular': 400,
      'Medium': 500,
      'Bold': 700,
      'Black': 900
    };

    if (fontParts[1] && fontWeightMap[fontParts[1]]) {
      cssProps['font-family'] = fontParts[0];
      cssProps['font-weight'] = fontWeightMap[fontParts[1]];
    }

    cssProps['font-size'] = _number__WEBPACK_IMPORTED_MODULE_1__["default"].parseFloatMaxDecimal(opts.scalingFactor * textStyle.fontSize, opts.maxDecimalPlaces) + opts.cssUnit;
    cssProps['letter-spacing'] = _number__WEBPACK_IMPORTED_MODULE_1__["default"].parseFloatMaxDecimal(opts.scalingFactor * textStyle.letterSpacing, opts.maxDecimalPlaces) + opts.cssUnit;

    if (textStyle.textTransform === 1) {
      cssProps['text-transform'] = 'uppercase';
    }

    if (textStyle.textTransform === 2) {
      cssProps['text-transform'] = 'lowercase';
    } // modified this line height calculator as it was outputting wrong sizes


    if (textStyle.lineHeight) {
      cssProps['line-height'] = _number__WEBPACK_IMPORTED_MODULE_1__["default"].parseFloatMaxDecimal(textStyle.lineHeight / textStyle.fontSize, opts.maxDecimalPlaces);
    }

    if (textStyle.color) {
      cssProps['color'] = exportUtils.createRgbaString(textStyle.color);
    }

    return cssProps;
  },
  createRgbaString: function createRgbaString(colorObj) {
    return 'rgba(' + exportUtils.createColorValue(colorObj.r) + ', ' + exportUtils.createColorValue(colorObj.g) + ', ' + exportUtils.createColorValue(colorObj.b) + ', ' + colorObj.a + ')';
  },
  createColorValue: function createColorValue(normalizedValue) {
    return Math.round(normalizedValue * 255);
  },
  createStyleBlock: function createStyleBlock(cssProps) {
    var output = '';

    for (var prop in cssProps) {
      output += "\t" + prop + ': ' + cssProps[prop] + ';' + "\n";
    }

    return output;
  },
  //combine all the initial mixins into something useful with media queries. As indicated please only provide final and deduped text style names as input 
  createMegaMixin: function createMegaMixin(finalTextStyleName) {
    // swap in the screen size as second to last name
    var i = finalTextStyleName.lastIndexOf('-');

    function insert(str, index, value) {
      return str.substr(0, index) + value + str.substr(index);
    }

    var phone = insert(finalTextStyleName, i, '-mobile');
    var tablet = insert(finalTextStyleName, i, '-tablet');
    var desktop = insert(finalTextStyleName, i, '-desktop');
    return "@mixin ".concat(finalTextStyleName, " { \n    @include media($tablet) { @include ").concat(tablet, " }\n    @include media($tablet--gt) { @include ").concat(desktop, " }\n    @include media($phone) { @include ").concat(phone, " }   \n    } ");
  },
  createClasses: function createClasses(finalTextStyleName) {
    return ".h-".concat(finalTextStyleName, " { @include ").concat(finalTextStyleName, " }");
  },
  createCombinedStyles: function createCombinedStyles(textStyles) {
    var output = " "; //get cleaned list of styles

    finalList = createFinalStylesList(textStyles);
    finalList.forEach(function (finalTextStyleName) {
      output += "".concat(createMegaMixin(finalTextStyleName));
    });
    return output;
  },
  createCombinedClassNames: function createCombinedClassNames(textStyles) {
    var output = " "; //get cleaned list of styles

    finalList = createFinalStylesList(textStyles);
    finalList.forEach(function (finalTextStyleName) {
      output += "".concat(createMegaMixin(finalTextStyleName));
    });
    return output;
  },
  createPatternlab: function createPatternlab(textStyles) {
    var output = "\n      <article class=\"o-grid o-container\">\n      <h3 class=\"h-text---styleguide-styleguide-title\">Automated Export, style only</h3>\n    ";
    textStyles = createFinalStylesList(textStyles);
    textStyles.forEach(function (textStyle) {
      output += "\n        <dt class=\"h-text---styleguide-styleguide-title\">\n            <span>".concat(i + 1, ".</span>\n            <span>\n              ").concat(textStyle, "\n            </span>\n          </dt>\n          <dd>\n            <div class=\"h-").concat(textStyle, "\" contenteditable=\"true\">\n              The quick brown fox jumps over the lazy dog\n            </div>\n            \n          </dd>\n      ");
    });
    output += "\n    </dl>\n    </article>\n\n\n    ";
    return output;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (exportUtils);

/***/ }),

/***/ "./src/util/number.js":
/*!****************************!*\
  !*** ./src/util/number.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var number = {
  parseFloatMaxDecimal: function parseFloatMaxDecimal(number, maxDecimalPlaces) {
    return Number(number.toFixed(maxDecimalPlaces).replace(/[.,]00$/, ''));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (number);

/***/ }),

/***/ "./src/util/sketch.js":
/*!****************************!*\
  !*** ./src/util/sketch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var sketch = {
  getTextStyles: function getTextStyles(context) {
    var texts = context.document.documentData().layerTextStyles().objects();
    var rawTextStyles = [];
    texts.forEach(function (text, i) {
      rawTextStyles.push({
        attributes: text.style().textStyle().attributes(),
        textStyle: text,
        name: text.name()
      });
    });
    var textStyles = [];
    rawTextStyles.forEach(function (rawTextStyle) {
      var textStyle = {};
      textStyle.name = rawTextStyle.name;
      textStyle.fontFamily = String(rawTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontNameAttribute));
      textStyle.fontSize = rawTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontSizeAttribute);
      textStyle.paragraph = rawTextStyle.attributes.NSParagraphStyle;

      if (textStyle.paragraph) {
        textStyle.lineHeight = textStyle.paragraph.maximumLineHeight();
      }

      var color = rawTextStyle.attributes.MSAttributedStringColorAttribute;

      if (color) {
        var r = color.red();
        var g = color.green();
        var b = color.blue();
        var a = color.alpha();
        textStyle.color = {
          r: r,
          g: g,
          b: b,
          a: a
        };
      }

      textStyle.letterSpacing = rawTextStyle.attributes.NSKern || 0;
      textStyle.textTransform = parseInt(rawTextStyle.attributes.MSAttributedStringTextTransformAttribute || 0); // @TODO strikethrough & underline, or is this not needed?

      textStyles.push(textStyle);
    });
    return textStyles;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (sketch);

/***/ }),

/***/ "./src/util/ui.js":
/*!************************!*\
  !*** ./src/util/ui.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var ui = {
  createSavePanel: function createSavePanel(defaultFileName, contents) {
    var save = NSSavePanel.savePanel();
    save.setNameFieldStringValue(defaultFileName);
    save.setAllowsOtherFileTypes(false);
    save.setExtensionHidden(false);

    if (save.runModal()) {
      var file = NSString.stringWithString(contents);
      var path = save.URL().path();
      file.writeToFile_atomically_encoding_error(path, true, NSUTF8StringEncoding, null);
    }
  },
  createLabel: function createLabel() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var label = NSTextField.alloc().init();
    label.setStringValue(text);
    label.setFont(NSFont.boldSystemFontOfSize(12));
    label.setBezeled(false);
    label.setDrawsBackground(false);
    label.setEditable(false);
    label.setSelectable(false);
    return label;
  },
  createTextField: function createTextField(value) {
    var field = NSTextField.alloc().init();
    field.setStringValue(value);
    return field;
  },
  createSelect: function createSelect(options) {
    var comboBox = NSPopUpButton.alloc().init();
    comboBox.addItemsWithTitles(options);
    comboBox.selectItemAtIndex(0);
    return comboBox;
  },
  createStepper: function createStepper(value) {
    var stepper = NSStepper.alloc().init();
    return stepper;
  },
  createCheckbox: function createCheckbox(title) {
    var checkbox = NSButton.alloc().init();
    checkbox.setButtonType(NSSwitchButton);
    checkbox.title = title;
    return checkbox;
  },
  createSettingsDialog: function createSettingsDialog(context) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var components = arguments.length > 2 ? arguments[2] : undefined;
    var cb = arguments.length > 3 ? arguments[3] : undefined;
    opts.title = opts.title || 'Alert';
    opts.informativeText = opts.informativeText || '';
    opts.cancelBtnText = opts.cancelBtnText || 'Cancel';
    opts.confirmBtnText = opts.confirmBtnText || 'Ok';
    var dialog = NSAlert.alloc().init();
    var dialogIconPath = context.plugin.urlForResourceNamed('icon.png').path();
    var dialogIcon = NSImage.alloc().initByReferencingFile(dialogIconPath);
    dialog.setIcon(dialogIcon);
    dialog.setMessageText(opts.title);
    dialog.setInformativeText(opts.informativeText);
    var btnConfirm = dialog.addButtonWithTitle(opts.confirmBtnText);
    var btnCancel = dialog.addButtonWithTitle(opts.cancelBtnText); // Create grid view

    var gridView = NSGridView.alloc().init(); // Create object to hold all inputs

    var inputs = {};
    var height = 0;
    var rowSpacing = 8; // Loop each component

    components.forEach(function (c) {
      var label, field;

      switch (c.type) {
        case 'text':
          label = ui.createLabel(c.label);
          field = ui.createTextField(c.value);
          height += 22 + rowSpacing;
          gridView.addRowWithViews([label, field]);
          break;

        case 'stepper':
          label = ui.createLabel(c.label);
          field = ui.createStepper(c.value);
          height += 22 + rowSpacing;
          gridView.addRowWithViews([label, field]);
          break;

        case 'checkbox':
          label = ui.createLabel(c.label);
          field = ui.createCheckbox(c.value);
          height += 22 + rowSpacing;
          gridView.addRowWithViews([label, field]);
          break;

        case 'multicheckbox':
          field = [];
          c.values.forEach(function (v, i) {
            label = i ? ui.createLabel() : ui.createLabel(c.label);
            var checkbox = ui.createCheckbox(v);
            height += 22 + rowSpacing;
            field.push(checkbox);
            gridView.addRowWithViews([label, checkbox]);
          });
          break;

        case 'select':
          label = ui.createLabel(c.label);
          field = ui.createSelect(c.options);
          height += 28 + rowSpacing;
          gridView.addRowWithViews([label, field]);
          break;
      }

      inputs[c.id] = field;
    }); // Set grid view as view of dialog

    dialog.accessoryView = gridView;
    gridView.columnSpacing = 30;
    gridView.rowSpacing = rowSpacing;
    gridView.frame = NSMakeRect(0, 0, 400, height); // Open the dialog and store the response code

    var responseCode = dialog.runModal(); // The dialog is being 'submitted'

    if (responseCode === 1000) {
      var data = {};
      components.forEach(function (c) {
        switch (c.type) {
          case 'text':
            data[c.id] = inputs[c.id].stringValue();
            break;

          case 'select':
            data[c.id] = c.options[inputs[c.id].indexOfSelectedItem()];
            break;

          case 'checkbox':
            data[c.id] = inputs[c.id].state() === 1;
            break;

          case 'multicheckbox':
            var values = {};
            c.values.forEach(function (v, i) {
              values[v] = inputs[c.id][i].state() === 1;
            });
            data[c.id] = values;
        }
      });
      cb(data);
      return;
    }

    return dialog;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ui);

/***/ }),

/***/ "./src/util/util.js":
/*!**************************!*\
  !*** ./src/util/util.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var util = {
  createTextStyleId: function createTextStyleId(textStyle) {
    var textStyleId = ''; // Make sure this id incorporates every possible property of the text style

    textStyleId += textStyle.fontFamily;
    textStyleId += '-' + textStyle.fontSize;

    if (textStyle.letterSpacing) {
      textStyleId += '-' + textStyle.letterSpacing;
    }

    if (textStyle.textTransform) {
      textStyleId += '-' + textStyle.textTransform;
    }

    if (textStyle.lineHeight) {
      textStyleId += '-' + textStyle.lineHeight;
    }

    if (textStyle.color) {
      textStyleId += '-' + textStyle.color.r + '-' + textStyle.color.g + '-' + textStyle.color.b + '-' + textStyle.color.a;
    }

    return textStyleId;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=combined-mixins-export.js.map