# Supertype

This is a drastic fork of [Typex](https://github.com/reinvanoyen/typex/). Please retain his licence.

It has been reconfigured to our specifications and requirements, so I've taken off the GUI configuration Typex comes with. I've left the code in, just commented it out. The guts of the output code are now the same as the old node app I made before, Typesystem.

### To install:
Double click the Sketch plugin.

### To use
Navigate to Plugins > Super Type > Export 

You probably want to export all three assets. A good next step would be to make Export All a button on the dialog!

### To develop

* This is written in the [Sketch Plugin Manager](https://skpm.io/) so install that first.
* Here's the [Sketch JS API](https://developer.sketch.com/plugins/javascript-api) for your reference.
* cd into /src and ```npm i```  then ```npm run build```  to build the plugin.
* If you're working up something best thing to do is use the ```npm run watch``` function and also open up the console in [Sketch Dev Tools](https://github.com/skpm/sketch-dev-tools) so you can see what you are doing. Use ```log()``` instead of ```console.log()``` to feed through to the Sketch console.

#### Next steps
* provide interface to select which are $display-font-family and which are $base-font-family fonts, and automatically replace that in.
* ask about margin-bottom


