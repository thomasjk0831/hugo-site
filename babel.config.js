// module.exports = function (api) {
//     api.cache(true);
//     const presets = [['@babel/preset-react']];
//     const plugins = [];
//     return {
//       presets,
//       plugins,
//     };
//   };

  module.exports = function (api) {
    api.cache(true);
    const presets = [['@babel/preset-env']];
    const plugins = [
        ["@babel/plugin-transform-react-jsx", {
            "pragma": "h",
            "pragmaFrag": "Fragment",
          }]
    ];
    return {
      presets,
      plugins,
    };
  };

// {
//     "plugins": [
//       ["@babel/plugin-transform-react-jsx", {
//         "pragma": "h",
//         "pragmaFrag": "Fragment",
//       }]
//     ]
//   }