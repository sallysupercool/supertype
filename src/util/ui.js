"use strict";

import ui from '../ui';

const uiUtils = {
  createSavePanel(defaultFileName, contents) {

    let save = NSSavePanel.savePanel();

    save.setNameFieldStringValue(defaultFileName);
    save.setAllowsOtherFileTypes(false);
    save.setExtensionHidden(false);

    if (save.runModal()) {

      let file = NSString.stringWithString(contents);
      let path = save.URL().path();

      file.writeToFile_atomically_encoding_error(path, true, NSUTF8StringEncoding, null);
    }
  },
  createHtmlFontbookExportSettingsWindow(context, cb) { // @TODO create refactored function (look a NSGridView for creating the form)

    let cssUnits = ['px', 'em', 'rem'];

    let alert = NSAlert.alloc().init();
    let view = NSView.alloc().init();

    let alertIconPath = context.plugin.urlForResourceNamed('icon.png').path();
    let alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath);
    alert.setIcon(alertIcon);

    alert.setMessageText('Typex');
    alert.setInformativeText('Export your text styles to web');

    let labelPreviewText = ui.createLabel(view, 'Preview text');
    let fieldPreviewText = ui.createField(view, 'The quick brown fox jumps over the lazy dog', 200, 75);

    let labelScalingFactor = ui.createLabel(view, 'Scaling factor');
    let fieldScalingFactor = ui.createField(view, '1');

    let labelCssUnit = ui.createLabel(view, 'CSS unit');
    let selectCssUnit = ui.createSelect(view, cssUnits);

    let btnExport = alert.addButtonWithTitle('Export');
    let btnCancel = alert.addButtonWithTitle('Cancel');

    view.frame = NSMakeRect(0, 0, 400, ui.getCurrentOffset());
    alert.accessoryView = view;

    let responseCode = alert.runModal();

    if (responseCode === 1000) {

      let exportOpts = {
        cssUnit: cssUnits[selectCssUnit.indexOfSelectedItem()],
        scalingFactor: parseFloat(fieldScalingFactor.stringValue().replace(',', '.')),
        previewText: fieldPreviewText.stringValue()
      };

      cb(exportOpts);
    }
  }
};

export default uiUtils;