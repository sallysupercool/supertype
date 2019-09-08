import ui from './util/ui';
import list from './util/list';

import openExportDialog from './export/open-export-dialog';

export default function(context) {

  openExportDialog(context, {
    title: 'CSS classes export',
    informativeText: 'Export helper classes scss partial.'
    }, (textStyles, data) => {

    
    let finalStylesList = list.createFinalStylesList(textStyles);

    let css = '';
    
    finalStylesList.forEach(style => {
      css += `.h-${style} { @include ${style} }\n`
    })

    ui.createSavePanel('_supertype-helpers.css', css);
  });
}