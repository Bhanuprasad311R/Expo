const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add support for SVG files
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter(ext => ext !== "svg"),
  sourceExts: [...config.resolver.sourceExts, "svg"],
};

// Enable NativeWind support
module.exports = withNativeWind(config, { input: "./global.css" });
