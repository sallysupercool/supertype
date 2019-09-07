import ui from './util/ui';
import stringUtils from './util/string';
import sassUtils from './util/util';
import exportUtils from './util/export';
import openExportDialog from "./export/open-export-dialog";

export default function(context) {

  openExportDialog(context, {
    title: 'Create Patternlab samples',
    informativeText: 'Create a type page for Patternlab',
    confirmBtnText: 'Export HBS'
  }, (textStyles, data) => {

    let stylesList = [stringUtils.slugify(textStyle.name)];
    stylesList = sassUtils.createFinalStylesList(stylesList);

    // Create a HTML fontbook with these styles
    let hbs = utils.exportUtils.createPatternlab(stylesList);

    // Ask the user to save the file
    ui.createSavePanel('supertype.hbs', hbs);
  });
};