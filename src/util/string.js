"use strict";

// here we manipulate the name of the text style going from something like
// Large/ Tablet/ Regular / Brand / Left =>  text--large-tablet-regular

const string = {
  slugify(str) {

    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    let from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    let to   = 'aaaaeeeeiiiioooouuuunc------';

    for (let i = 0, l = from.length; i < l; i++) {
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
  stripSketchWords(str) {
        str = str.replace(/-left|-right|-centre|-light-grey|-black|-white|-series|-event|-brand|brand-1|brand-2|brand-3|brand-4|brand-5|-variable/g, '');
        return str;
                
  },
  // clean off media names, not for sass mixins export, only for other options!
  stripMedias(str) {
    str = str.replace(/-desktop|-mobile|-tablet/g, '');
    return str;
  }
};

export default string;