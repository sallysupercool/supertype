export default [
  
  {
    type: 'multicheckbox',
    id: 'excludeProps',
    label: 'Exclude properties',
    values: [
      'Color',
      'Letter spacing', 
      'Text transform', // swap for our removes
    ]
  },
  // {
  //   type: 'select', //removed as we do this in PostCSS
  //   id: 'cssUnit',
  //   options: [
  //     'px',
  //     'em',
  //     'rem',
  //     '%',
  //     'vh',
  //     'vw',
  //     'No unit'
  //   ],
  //   label: 'CSS unit'
  // },
  // {
  //   type: 'text', //removed as this is not rel for us
  //   id: 'scalingFactor',
  //   value: 1,
  //   label: 'Size scaling factor'
  // },
  {
    type: 'text',
    id: 'maxDecimalPlaces',
    value: 6, // increased to 6 for accuracy
    label: 'Maximal decimal places'
  },
  {
    type: 'text',
    id: 'namingPrefix',
    value: 'text-', // changed to our prefix
    label: 'Naming prefix'
  },
  {
    type: 'select',
    id: 'namingConvention',
    options: [
      'Text style name', // prefer our convention
      'Numeric'
    ],
    label: 'Naming convention'
  }
];