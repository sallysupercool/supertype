import ui from './util/ui';
import list from './util/list';
import openExportDialog from "./export/open-export-dialog";

export default function(context) {

    openExportDialog(context, {
        title: 'Create Patternlab samples',
        informativeText: 'Create a type page for Patternlab. Place this hbs file in /web/pattern-lab/source/_patterns/03-Base/',
        confirmBtnText: 'Export HBS'
    }, (textStyles, data) => {

        let finalStylesList = list.createFinalStylesList(textStyles);
        let i = 0;

        let hbs = `<article class="o-grid o-container">
      <h3 class="h-text---styleguide-styleguide-title">Automated Export, style only, not an html guide</h3>`;

        finalStylesList.forEach(style => {
            hbs += `<dt class="h-text---styleguide-styleguide-title">
            <span>${i+1}.</span>
            <span>
              .h-${style} / @include ${style};
            </span>
          </dt>
          <dd>
            <div class="h-${style}" contenteditable="true">
              The quick brown fox jumps over the lazy dog
            </div>
            
          </dd>
      `;
        })
        hbs += `</dl></article>`;

        // Ask the user to save the file
        ui.createSavePanel('supertype.hbs', hbs);
    });
}