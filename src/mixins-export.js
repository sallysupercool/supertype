import ui from './util/ui';
import list from './util/list';
import sketch from './util/sketch';
import exportUtils from './util/export';
import openExportDialog from './export/open-export-dialog';

export default function(context) {

    openExportDialog(context, {
        title: 'SASS mixins export',
        informativeText: 'Export each text style as a SASS mixin'
    }, (textStyles, data) => {

        let stylesheet = '//export all text styles as mixins \n';

        // stuff these in the stylesheet
        textStyles.forEach(textStyle => {
           stylesheet += 
          `@mixin ${textStyle.name} {` + exportUtils.createMixin(textStyle) + `}\n`
        });

        stylesheet += '// now create combination mixins with media queries \n';

        let finalStylesList = list.createFinalStylesList(textStyles);

        finalStylesList.forEach(textStyle => {
            stylesheet += exportUtils.createMegaMixin(textStyle);
        });

        ui.createSavePanel('_supertype-mixins.scss', stylesheet);
    });
};