import ui from './util/ui';
import stringUtils from './util/string';
import exportUtils from './util/export';

import openExportDialog from './export/open-export-dialog';

export default function(context) {

  openExportDialog(context, {
    title: 'CSS classes export',
    informativeText: 'Export helper classes scss partial.'
    }, (textStyles, data) => {

    let output = '';
    textStyles = []
    textStyles += [exportUtils.createFinalStylesList(textStyles)];


    textStyles.forEach(textStyle => {
      output += `.h-${textStyle} { @include ${textStyle} }`
    });


    ui.createSavePanel('_supertype-helpers.css', output);
  });
};