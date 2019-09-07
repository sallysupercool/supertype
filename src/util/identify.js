"use strict";

import string from './string';

const identify = {
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
};
export default identify;