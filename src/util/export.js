"use strict";

import util from './util';
import numberUtils from './number';
import stringUtils from './string';

const exportUtils = {
  sortTextStyles(textStyles) {

    // Sort text styles by name
    textStyles.sort((a, b) => {
      return a.name - b.name;
    });

    return textStyles;
  }, 
  excludeTextStyleProperties(textStyles, excludedProps = []) {

    textStyles.forEach(textStyle => {
      excludedProps.forEach(prop => {
        if (textStyle[prop]) {
          delete textStyle[prop];
        }
      });
    });

    return textStyles;
  },
  removeDoubleTextStyles(textStyles) {

    let uniqueTextStyles = {};
    let filtered = [];

    textStyles.forEach((textStyle, i) => {

      let id = util.createTextStyleId(textStyle);

      if (! uniqueTextStyles[id]) {
        uniqueTextStyles[id] = true;
        filtered.push(textStyle);
      }
    });

    return filtered;
  },
  //start creating things!
  createCssProps(textStyle, opts = {}) {

    opts.cssUnit = opts.cssUnit || 0;
    opts.scalingFactor = opts.scalingFactor || 1;
    opts.maxDecimalPlaces = opts.maxDecimalPlaces || 6;

    let cssProps = {};

    cssProps['font-family'] = textStyle.fontFamily;
    cssProps['font-weight'] = 400;
    cssProps['text-transform'] = 'none';

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

    cssProps['font-size'] = numberUtils.parseFloatMaxDecimal(opts.scalingFactor * textStyle.fontSize, opts.maxDecimalPlaces)+opts.cssUnit;
    cssProps['letter-spacing'] = numberUtils.parseFloatMaxDecimal(opts.scalingFactor * textStyle.letterSpacing, opts.maxDecimalPlaces)+opts.cssUnit;

    if (textStyle.textTransform === 1) {
      cssProps['text-transform'] = 'uppercase';
    }

    if (textStyle.textTransform === 2) {
      cssProps['text-transform'] = 'lowercase';
    }
// modified this line height calculator as it was outputting wrong sizes
    if (textStyle.lineHeight) {
      cssProps['line-height'] = numberUtils.parseFloatMaxDecimal(textStyle.lineHeight / textStyle.fontSize, opts.maxDecimalPlaces);
    }

    if (textStyle.color) {
      cssProps['color'] = exportUtils.createRgbaString(textStyle.color);
    }

    return cssProps;
  },
  createRgbaString(colorObj) {
    return 'rgba('+exportUtils.createColorValue(colorObj.r)+', '+exportUtils.createColorValue(colorObj.g)+', '+exportUtils.createColorValue(colorObj.b)+', '+colorObj.a+')';
  },
  createColorValue(normalizedValue) {
    return Math.round(normalizedValue * 255);
  },
  createStyleBlock(cssProps) {

    let output = '';

    for (let prop in cssProps) {
      output += "\t"+prop+': '+cssProps[prop]+';'+"\n";
    }

    return output;
  },
  createClasses(finalTextStyleName) {
    return `.h-${finalTextStyleName} { @include ${finalTextStyleName} }`
    
  },
  createCombinedStyles(textStyles) {
    let output = ` `;
    //combine all the initial mixins into something useful with media queries. As indicated please only provide final and deduped text style names as input 
    function createMegaMixin(finalTextStyleName) {
    // swap in the screen size as second to last name
    let i = finalTextStyleName.lastIndexOf('-');
    function insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
    let phone = insert(finalTextStyleName, i, '-mobile');
    let tablet = insert(finalTextStyleName, i, '-tablet');
    let desktop = insert(finalTextStyleName, i, '-desktop');

    return `@mixin ${finalTextStyleName} { 
    @include media($tablet) { @include ${tablet} }
    @include media($tablet--gt) { @include ${desktop} }
    @include media($phone) { @include ${phone} }   
    } `
    
    };
    //get cleaned list of styles
    finalList = util.createFinalStylesList(textStyles);

    finalList.forEach((finalTextStyleName) => {

      output += `${createMegaMixin(finalTextStyleName)}`;

    });
    return output;
  },
  createCombinedClassNames(textStyles, opt = {}) {
    let output = ` `;
    //get cleaned list of styles
    finalList = util.createFinalStylesList(textStyles);

    finalList.forEach((finalTextStyleName) => {

      output += `${createMegaMixin(finalTextStyleName)}`;

    });

    return output;

  },
  createPatternlab(textStyle, opts = {}) {

    let output = `
      <article class="o-grid o-container">
      <h3 class="h-text---styleguide-styleguide-title">Automated Export, style only</h3>
    `;

    textStyles = createFinalStylesList(textStyle);

    textStyles.forEach((textStyle) => {

      output += `
        <dt class="h-text---styleguide-styleguide-title">
            <span>${i+1}.</span>
            <span>
              ${textStyle}
            </span>
          </dt>
          <dd>
            <div class="h-${textStyle}" contenteditable="true">
              The quick brown fox jumps over the lazy dog
            </div>
            
          </dd>
      `;
    });

    output += `
    </dl>
    </article>


    `;

    return output;
  }
};

export default exportUtils;