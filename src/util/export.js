"use strict";

import list from './list';
import number from './number';
import string from './string';

const exportUtils = {
  
  //start creating things!
  // this creates the initial css mixins from the Sketch properties
  createCssProps(textStyle, opts = {}) {

    opts.cssUnit = 'px';
    opts.maxDecimalPlaces = 6;

    let cssProps = {};

    cssProps['font-family'] = textStyle.fontFamily;
    cssProps['font-weight'] = 400;
    cssProps['text-transform'] = 'none';
    cssProps['margin-bottom'] = '$b';

    let fontParts = textStyle.fontFamily.split('-');

    let fontWeightMap = {
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

    cssProps['font-size'] = number.parseFloatMaxDecimal(1 * textStyle.fontSize, 0)+opts.cssUnit;

    if (textStyle.textTransform === 1) {
      cssProps['text-transform'] = 'uppercase';
    }

    if (textStyle.textTransform === 2) {
      cssProps['text-transform'] = 'lowercase';
    }
// modified this line height calculator as it was outputting wrong sizes
    if (textStyle.lineHeight) {
      cssProps['line-height'] = number.parseFloatMaxDecimal(textStyle.lineHeight / textStyle.fontSize, opts.maxDecimalPlaces);
    }
// huh, maybe we should grab margin bottoms?
    if (textStyle.marginBottom) {
      cssProps['margin-bottom'] = number.parseFloatMaxDecimal(1 * textStyle.fontSize, 0)+opts.cssUnit;
    }

    return cssProps;
  },
  createStyleBlock(cssProps) {

    let output = '';

    for (let prop in cssProps) {
      output += "\t"+prop+': '+cssProps[prop]+';'+"\n";
    }

    return output;
  },
  createHelperClass(textStyle) {
    textStyle.name = string.stripMedias(textStyle.name);
    return `.h-${textStyle.name} { @include ${textStyle.name} }`
    
  },
  createMegaMixin(textStyle) {
    // swap in the screen size as second to last name
    let i = textStyle.lastIndexOf('-');
    function insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
    let phone = insert(textStyle, i, '-mobile');
    let tablet = insert(textStyle, i, '-tablet');
    let desktop = insert(textStyle, i, '-desktop');

    return `@mixin ${textStyle} { 
    @include media($tablet) { @include ${tablet} }
    @include media($tablet--gt) { @include ${desktop} }
    @include media($phone) { @include ${phone} }   
    } `   
  }
};

export default exportUtils;