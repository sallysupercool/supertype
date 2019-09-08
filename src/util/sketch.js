"use strict";
import string from './string';
//here we grab all the properties from sketch and change the name, retaining media tags for now
// this is called by ./export/open-export-dialog

const sketch = {
  getTextStyles(context) {

    let texts = context.document.documentData().layerTextStyles().objects();
    let rawTextStyles = [];

    texts.forEach((text, i) => {

      rawTextStyles.push({
        attributes: text.style().textStyle().attributes(),
        textStyle: text,
        name: text.name()
      });
    });

    let textStyles = [];

    rawTextStyles.forEach(rawTextStyle => {

      let textStyle = {};

      textStyle.name = string.slugify(rawTextStyle.name);
      textStyle.name = string.stripSketchWords(textStyle.name);

      textStyle.fontFamily = String(rawTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontNameAttribute));
      textStyle.fontSize = rawTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontSizeAttribute);
      textStyle.paragraph = rawTextStyle.attributes.NSParagraphStyle;

      if (textStyle.paragraph) {
        textStyle.lineHeight = textStyle.paragraph.maximumLineHeight();
        textStyle.marginBottom = textStyle.paragraph.paragraphSpacing();
      }

      // textStyle.letterSpacing = rawTextStyle.attributes.NSKern || 0;
      textStyle.textTransform = parseInt(rawTextStyle.attributes.MSAttributedStringTextTransformAttribute || 0);

      textStyles.push(textStyle);
    });

    return textStyles;
  }
};

export default sketch;