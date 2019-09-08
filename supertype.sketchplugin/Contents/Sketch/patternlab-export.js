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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/patternlab-export.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/export/export-components.js":
/*!*****************************************!*\
  !*** ./src/export/export-components.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([// {
  //   type: 'multicheckbox',
  //   id: 'excludeProps',
  //   label: 'Exclude properties',
  //   values: [
  //     'Color',
  //     'Letter spacing', 
  //     'Text transform', // swap for our removes
  //   ]
  // },
  // {
  //   type: 'select', //removed as we do this in PostCSS
  //   id: 'cssUnit',
  //   options: [
  //     'px',
  //     'em',
  //     'rem',
  //     '%',
  //     'vh',
  //     'vw',
  //     'No unit'
  //   ],
  //   label: 'CSS unit'
  // },
  // {
  //   type: 'text', //removed as this is not rel for us
  //   id: 'scalingFactor',
  //   value: 1,
  //   label: 'Size scaling factor'
  // },
  // {
  //   type: 'text',
  //   id: 'maxDecimalPlaces',
  //   value: 6, // increased to 6 for accuracy
  //   label: 'Maximal decimal places'
  // },
  // {
  //   type: 'text',
  //   id: 'namingPrefix',
  //   value: 'text-', // changed to our prefix
  //   label: 'Naming prefix'
  // },
  // {
  //   type: 'select',
  //   id: 'namingConvention',
  //   options: [
  //     'Text style name', // prefer our convention
  //     'Numeric'
  //   ],
  //   label: 'Naming convention'
  // }
]);

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
/* harmony import */ var _util_sketch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/sketch */ "./src/util/sketch.js");
/* harmony import */ var _export_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export-components */ "./src/export/export-components.js");



/* harmony default export */ __webpack_exports__["default"] = (function (context, opts, cb) {
  _util_ui__WEBPACK_IMPORTED_MODULE_0__["default"].createSettingsDialog(context, opts, _export_components__WEBPACK_IMPORTED_MODULE_2__["default"], function (data) {
    // Defaults
    data.cssUnit = data.cssUnit === 'No unit' ? 0 : data.cssUnit; // Get the text styles from the Sketch document

    var textStyles = _util_sketch__WEBPACK_IMPORTED_MODULE_1__["default"].getTextStyles(context);
    cb(textStyles, data);
  });
});
;

/***/ }),

/***/ "./src/patternlab-export.js":
/*!**********************************!*\
  !*** ./src/patternlab-export.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/ui */ "./src/util/ui.js");
/* harmony import */ var _util_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/list */ "./src/util/list.js");
/* harmony import */ var _export_open_export_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export/open-export-dialog */ "./src/export/open-export-dialog.js");



/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  Object(_export_open_export_dialog__WEBPACK_IMPORTED_MODULE_2__["default"])(context, {
    title: 'Create Patternlab samples',
    informativeText: 'Create a type page for Patternlab. Place this hbs file in /web/pattern-lab/source/_patterns/03-Base/',
    confirmBtnText: 'Export HBS'
  }, function (textStyles, data) {
    var finalStylesList = _util_list__WEBPACK_IMPORTED_MODULE_1__["default"].createFinalStylesList(textStyles);
    var i = 0;
    var hbs = "<article class=\"o-grid o-container\">\n      <h3 class=\"h-text---styleguide-styleguide-title\">Automated Export, style only, not an html guide</h3>";
    finalStylesList.forEach(function (style) {
      hbs += "<dt class=\"h-text---styleguide-styleguide-title\">\n            <span>".concat(i + 1, ".</span>\n            <span>\n              .h-").concat(style, " / @include ").concat(style, ";\n            </span>\n          </dt>\n          <dd>\n            <div class=\"h-").concat(style, "\" contenteditable=\"true\">\n              The quick brown fox jumps over the lazy dog\n            </div>\n            \n          </dd>\n      ");
    });
    hbs += "</dl></article>"; // Ask the user to save the file

    _util_ui__WEBPACK_IMPORTED_MODULE_0__["default"].createSavePanel('supertype.hbs', hbs);
  });
});

/***/ }),

/***/ "./src/util/list.js":
/*!**************************!*\
  !*** ./src/util/list.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/util/string.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var list = {
  // make a list of final text styles to drive creation of classes and mega mixins
  createFinalStylesList: function createFinalStylesList(textStyles) {
    //make array, strip out the media names, and dedupe (there will be 3 of each)
    var namesArray = textStyles.map(function (textStyles) {
      return textStyles.name;
    }); //strip out the media sizes -- update this as necessary

    var cleanedNames = namesArray.map(function (str) {
      return str.replace(/-mobile|-tablet|-desktop/g, "");
    });

    var deDupedNames = _toConsumableArray(new Set(cleanedNames));

    deDupedNames.sort();
    return deDupedNames;
  },
  sortTextStyles: function sortTextStyles(textStyles) {
    // Sort text styles by name
    textStyles.sort(function (a, b) {
      return a.name - b.name;
    });
    return textStyles;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (list);

/***/ }),

/***/ "./src/util/sketch.js":
/*!****************************!*\
  !*** ./src/util/sketch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/util/string.js");


 //here we grab all the properties from sketch and change the name, retaining media tags for now
// this is called by ./export/open-export-dialog

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
      textStyle.name = _string__WEBPACK_IMPORTED_MODULE_0__["default"].slugify(rawTextStyle.name);
      textStyle.name = _string__WEBPACK_IMPORTED_MODULE_0__["default"].stripSketchWords(textStyle.name);
      textStyle.fontFamily = String(rawTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontNameAttribute));
      textStyle.fontSize = rawTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontSizeAttribute);
      textStyle.paragraph = rawTextStyle.attributes.NSParagraphStyle;

      if (textStyle.paragraph) {
        textStyle.lineHeight = textStyle.paragraph.maximumLineHeight();
        textStyle.marginBottom = textStyle.paragraph.paragraphSpacing();
      } // textStyle.letterSpacing = rawTextStyle.attributes.NSKern || 0;


      textStyle.textTransform = parseInt(rawTextStyle.attributes.MSAttributedStringTextTransformAttribute || 0);
      textStyles.push(textStyle);
    });
    return textStyles;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (sketch);

/***/ }),

/***/ "./src/util/string.js":
/*!****************************!*\
  !*** ./src/util/string.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
 // here we manipulate the name of the text style going from something like
// Large/ Tablet/ Regular / Brand / Left =>  text--large-tablet-regular

var string = {
  slugify: function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim

    str = str.toLowerCase(); // remove accents, swap ñ for n, etc

    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    var to = 'aaaaeeeeiiiioooouuuunc------';

    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes
    ;
    str = 'text--' + str; // add prefix

    return str;
  },
  // strip Sketch parts from name ADD IN ANY MORE HERE-- TODO make this a UI 
  stripSketchWords: function stripSketchWords(str) {
    str = str.replace(/-left|-right|-centre|-light-grey|-black|-white|-series|-event|-brand|brand-1|brand-2|brand-3|brand-4|brand-5|-variable/g, '');
    return str;
  },
  // clean off media names, not for sass mixins export, only for other options!
  stripMedias: function stripMedias(str) {
    str = str.replace(/-desktop|-mobile|-tablet/g, '');
    return str;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (string);

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

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=patternlab-export.js.map