import ui from './util/ui';
import list from './util/list';
import sketch from './util/sketch';
import exportUtils from './util/export';
import openExportDialog from './export/open-export-dialog';

export default function(context) {

  openExportDialog(context, data {
    title: 'SASS mixins export',
    informativeText: 'Export each text style as a SASS mixin'
  }, (textStyles, data) => {

    textStyles = sketch.getTextStyles(textStyles, data);
    let stylesheet = '';

    // stuff these in the stylesheet
    textStyles.forEach(textStyle => {
      textStyle = exportUtils.createCssProps(textStyle);
      

        stylesheet += '@mixin ' + textStyle.name + "\n";
        stylesheet += '{'+"\n";
        stylesheet += exportUtils.createStyleBlock(textStyle);
        stylesheet += '}'+"\n";
  
    });

    stylesheet += '// now create combination mixins with media queries \n';

    let finalStylesList = list.createFinalStylesList(textStyles);

    finalStylesList.forEach(textStyle => {
       stylesheet += exportUtils.createMegaMixin(textStyle);
    });

    ui.createSavePanel('_supertype-mixins.scss', stylesheet);
  });
};