const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */


const defaultConfig = getDefaultConfig(__dirname)
const config = {
    transformer: {
      // Specify the transformer for SVG files
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      // Modify the asset and source extensions
      assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'), // Remove SVG from asset extensions
      sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'], // Add SVG to source extensions
    },
  };

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
