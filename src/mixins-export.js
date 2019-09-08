import ui from './util/ui';
import list from './util/list';
import sketch from './util/sketch';
import scss from './util/scss';
import openExportDialog from './export/open-export-dialog';

export default function(context) {

    openExportDialog(context, {
        title: 'SASS mixins export',
        informativeText: 'Export all mixins and combined styles. Place this file in web/pattern-lab/source/styles/02-Mixins-and-Models/Mixins/'
    }, (textStyles, data) => {

        let stylesheet = '//export all text styles as mixins \n';

        // stuff these in the stylesheet
        textStyles.forEach(textStyle => {
           stylesheet += 
          `@mixin ${textStyle.name} {` + scss.createMixin(textStyle) + `}\n`
        });

        stylesheet += '// now create combination mixins with media queries \n';

        let finalStylesList = list.createFinalStylesList(textStyles);

        finalStylesList.forEach(textStyle => {
            stylesheet += scss.createMegaMixin(textStyle);
        });

        ui.createSavePanel('_supertype-mixins.scss', stylesheet);
    });
};