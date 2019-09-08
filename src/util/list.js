"use strict";
import string from './string';

const list = {
  // make a list of final text styles to drive creation of classes and mega mixins
  createFinalStylesList(textStyles) {
    //make array, strip out the media names, and dedupe (there will be 3 of each)
    let namesArray = textStyles.map(textStyles => textStyles.name);
  
    //strip out the media sizes -- update this as necessary
    let cleanedNames = namesArray.map(function(str){ return str.replace(/-mobile|-tablet|-desktop/g,"") });
    
    let deDupedNames = [...new Set(cleanedNames)];
    deDupedNames.sort();


    return deDupedNames;    
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