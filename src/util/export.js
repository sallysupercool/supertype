"use strict";

import list from './list';
import number from './number';
import string from './string';

const exportUtils = {

    //start creating things!
    // this creates the initial css mixins from the Sketch properties
    createMixin(textStyle, opts = {}) {
        function createCssProps(textStyle, opts = {}) {

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

            cssProps['font-size'] = number.parseFloatMaxDecimal(1 * textStyle.fontSize, 0) + opts.cssUnit;

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
                cssProps['margin-bottom'] = number.parseFloatMaxDecimal(1 * textStyle.marginBottom, 0) + opts.cssUnit;
            }
            // log('props ' + cssProps);

            return cssProps;
        };

        function createStyleBlock(cssProps) {

            let ruleSet = '';

            for (let prop in cssProps) {
                ruleSet += "\t" + prop + ': ' + cssProps[prop] + ';' + "\n";
            }
            // log('ruleSet' + ruleSet);

            return ruleSet;
        };

        // first get properties
        textStyle = createCssProps(textStyle);
        // then create styles
        textStyle = createStyleBlock(textStyle);

        return textStyle;
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

        return `@mixin ${textStyle} {\n
        @include media($tablet) { @include ${tablet} }\n
        @include media($tablet--gt) { @include ${desktop} }\n
        @include media($phone) { @include ${phone} }\n  
        }\n`
    }
};

export default exportUtils;