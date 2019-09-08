import ui from '../util/ui';
import sketch from '../util/sketch';
import exportComponents from './export-components';

export default function(context, opts, cb) {

  ui.createSettingsDialog(context, opts, exportComponents, (data) => {

    // Defaults
    data.cssUnit = (data.cssUnit === 'No unit' ? 0 : data.cssUnit);

    // Get the text styles from the Sketch document
    let textStyles = sketch.getTextStyles(context);  

    cb(textStyles, data);
  });
};