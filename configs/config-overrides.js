const { addBabelPresets, addBabelPlugins, override } = require( 'customize-cra' );

module.exports = override( ...addBabelPresets( [ "@babel/preset-react" ] ), ...addBabelPlugins( [ "emotion" ] ) );
