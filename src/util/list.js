"use strict";
import string from './string';

const list = {
  // make a list of final text styles to drive creation of classes and mega mixins
  createFinalStylesList(textStyles) {
    //clean random names
    let cleanedNames = []

    //strip out the media sizes
    textStyles.forEach((textStyle, i) => {
      cleanedNames += string.stripMedias(textStyle.name);
    });

    // remove duplicates (there will be at least three of each name)
    let deDupe = (cleanedNames) => {
    let unique = [...new Set(cleanedNames)];
    return unique;
    }

    cleanedNames = deDupe(cleanedNames);    

    return cleanedNames;    
  },
  sortTextStyles(textStyles) {

    // Sort text styles by name
    textStyles.sort((a, b) => {
      return a.name - b.name;
    });

    return textStyles;
  }
};

export default list;