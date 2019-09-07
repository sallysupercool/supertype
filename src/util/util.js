"use strict";

import string from './string';

const util = {
  createTextStyleId(textStyle) {

    let textStyleId = '';

    // Make sure this id incorporates every possible property of the text style

    textStyleId += textStyle.fontFamily;
    textStyleId += '-'+textStyle.fontSize;
    if (textStyle.letterSpacing) {
      textStyleId += '-'+textStyle.letterSpacing;
    }

    if (textStyle.textTransform) {
      textStyleId += '-'+textStyle.textTransform;
    }

    if (textStyle.lineHeight) {
      textStyleId += '-'+textStyle.lineHeight;
    }

    if (textStyle.color) {
      textStyleId += '-'+textStyle.color.r+'-'+textStyle.color.g+'-'+textStyle.color.b+'-'+textStyle.color.a;
    }

    return textStyleId;
  },
  // make a list of final text styles to drive creation of classes and mega mixins
  createFinalStylesList(textStyles) {
    //clean random names
    let cleanedNames = []

    // get the name out of the text style and run through any cleaning here -- have written it all out so it's easier to add to later

    textStyles.forEach((textStyle, i) => {
    
      let styleName = string.slugify(textStyle.name);
   
      styleName = string.stripSketchWords(styleName);
      styleName = string.stripMedias(styleName);
      return styleName;

    });

    // deduper for cleaned names only
    let deDupe = (cleanedNames) => {
    let unique = [...new Set(cleanedNames)];
    return unique;
    }

    cleanedNames = deDupe(cleanedNames);    

    return cleanedNames;    
  }
};
export default util;