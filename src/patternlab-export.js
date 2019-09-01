import ui from './util/ui';
import exportUtils from './util/export';
import openExportDialog from "./export/open-export-dialog";

export default function(context) {

  openExportDialog(context, {
    title: 'Create Patternlab samples',
    informativeText: 'Create the type page in Patternlab',
    confirmBtnText: 'Export HTMl'
  }, (textStyles, data) => {

    // Create a HTML fontbook with these styles
    let html = exportUtils.createPatternlab(textStyles, data);

    // Ask the user to save the file
    ui.createSavePanel('supertype.hbs', html);
  });
};