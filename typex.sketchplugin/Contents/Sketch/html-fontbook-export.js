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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/html-fontbook-export.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/html-fontbook-export.js":
/*!*************************************!*\
  !*** ./src/html-fontbook-export.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/ui */ "./src/util/ui.js");
/* harmony import */ var _util_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/export */ "./src/util/export.js");
/* harmony import */ var _util_sketch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/sketch */ "./src/util/sketch.js");



/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  _util_ui__WEBPACK_IMPORTED_MODULE_0__["default"].createSettingsDialog(context, {
    title: 'Create HTML fontbook',
    informativeText: 'Create a handy HTML fontbook from your text styles',
    confirmBtnText: 'Export HTML fontbook'
  }, [{
    type: 'select',
    id: 'cssUnit',
    options: ['px', 'em', 'rem'],
    label: 'Css unit'
  }, {
    type: 'text',
    id: 'scalingFactor',
    value: 1,
    label: 'Size scaling factor'
  }, {
    type: 'text',
    id: 'maxDecimalPlaces',
    value: 2,
    label: 'Maximal decimal places'
  }, {
    type: 'text',
    id: 'textStyleNamingPrefix',
    value: 'type',
    label: 'Text style naming prefix'
  }, {
    type: 'select',
    id: 'textStyleNamingConvention',
    options: ['Numeric', 'Text style name'],
    label: 'Text style naming convention'
  }, {
    type: 'text',
    id: 'previewText',
    value: 'The quick brown fox jumps over the lazy dog',
    label: 'Preview text'
  }], function (data) {
    // Get the text styles from the Sketch document
    var textStyles = _util_sketch__WEBPACK_IMPORTED_MODULE_2__["default"].getTextStyles(context);
    textStyles = _util_export__WEBPACK_IMPORTED_MODULE_1__["default"].sortTextStyles(textStyles); // Create a HTML fontbook with these styles

    var html = _util_export__WEBPACK_IMPORTED_MODULE_1__["default"].createHtmlFontbook(textStyles, data); // Ask the user to save the file

    _util_ui__WEBPACK_IMPORTED_MODULE_0__["default"].createSavePanel('typex-fontbook.html', html);
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




var exportUtils = {
  sortTextStyles: function sortTextStyles(textStyles) {
    // Sort text styles by size
    textStyles.sort(function (a, b) {
      return a.fontSize - b.fontSize;
    });
    return textStyles;
  },
  createCssProps: function createCssProps(textStyle) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    opts.cssUnit = opts.cssUnit || 'px';
    opts.scalingFactor = opts.scalingFactor || 1;
    opts.maxDecimalPlaces = opts.maxDecimalPlaces || 2;
    var cssProps = {};
    cssProps['font-family'] = textStyle.fontFamily;
    cssProps['font-weight'] = 400;
    cssProps['line-height'] = 1;
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
    }

    if (textStyle.lineHeight) {
      cssProps['line-height'] = _number__WEBPACK_IMPORTED_MODULE_1__["default"].parseFloatMaxDecimal(1 + (textStyle.lineHeight - textStyle.fontSize) / textStyle.lineHeight, opts.maxDecimalPlaces);
    }

    return cssProps;
  },
  createStyleBlock: function createStyleBlock(cssProps) {
    var output = '';

    for (var prop in cssProps) {
      output += "\t" + prop + ': ' + cssProps[prop] + ';' + "\n";
    }

    return output;
  },
  createInlineStyleString: function createInlineStyleString(cssProps) {
    var styleString = '';

    for (var prop in cssProps) {
      styleString += prop + ': ' + cssProps[prop] + '; ';
    }

    return styleString;
  },
  createHtmlFontbook: function createHtmlFontbook(textStyles) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var exportedTextStyles = {};
    var output = "\n      <!DOCTYPE html>\n      <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\">\n        <title>Typex text styles</title>\n      </head>\n      <body style=\"padding: 0; margin: 0;\">\n    ";
    textStyles.forEach(function (textStyle, i) {
      var textStyleId = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createTextStyleId(textStyle);
      var textStyleName = opts.textStyleNamingPrefix + ' ' + (opts.textStyleNamingConvention === 'Numeric' ? i + 1 : textStyle.name);

      if (!exportedTextStyles[textStyleId]) {
        var cssProps = exportUtils.createCssProps(textStyle, opts);
        var inlineStyleString = exportUtils.createInlineStyleString(cssProps);
        output += "\n          <div style=\"box-shadow: 0 5px 15px #f0f0f0; padding: 25px 50px; border-bottom: 1px solid #ccc;\">\n            <div style=\"font-family: Helvetica, Arial, Sans-Serif; font-size: 14px; margin-bottom: 15px;\">\n              <span>".concat(i + 1, ".</span>\n              <span>\n                ").concat(textStyleName, "\n              </span>\n              <span style=\"color: #ccc;\">\n                ").concat(inlineStyleString, "\n              </span>\n            </div>\n            <div style=\"").concat(inlineStyleString, ";\">").concat(opts.previewText, "</div>\n          </div>\n        "); // Add the id to the stack of text styles we've already exported

        exportedTextStyles[textStyleId] = true;
      }
    });
    output += "\n      </body>\n      </html>\n    ";
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
  createLabel: function createLabel(text) {
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
    var comboBox = NSComboBox.alloc().init();
    comboBox.addItemsWithObjectValues(options);
    comboBox.selectItemAtIndex(0);
    comboBox.setNumberOfVisibleItems(16);
    comboBox.setCompletes(1);
    return comboBox;
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
    var height = 0; // Loop each component

    components.forEach(function (c) {
      var label, field;

      switch (c.type) {
        case 'text':
          label = ui.createLabel(c.label);
          field = ui.createTextField(c.value);
          height += 22;
          break;

        case 'select':
          label = ui.createLabel(c.label);
          field = ui.createSelect(c.options);
          height += 28;
          break;
      }

      inputs[c.id] = field;
      gridView.addRowWithViews([label, field]);
    }); // Set grid view as view of dialog

    dialog.accessoryView = gridView;
    gridView.columnSpacing = 30;
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
        }
      });
      cb(data);
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
    textStyleId += '-' + textStyle.lineHeight;
    textStyleId += '-' + textStyle.letterSpacing;
    textStyleId += '-' + textStyle.textTransform;
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

//# sourceMappingURL=html-fontbook-export.js.map