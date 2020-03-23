"use strict";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

// Ensure environment variables are read.
require("../config/env");

const webpack = require("webpack");
const configFactory = require("../config/webpack.config");
// this one is optional, just for better feedback on build
const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const green = text => {
  return chalk.green.bold(text);
};

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
// Generate configuration
const config = configFactory("production");

// pushing BundleAnalyzerPlugin to plugins array
config.plugins.push(new BundleAnalyzerPlugin());

// optional - pushing progress-bar plugin for better feedback;
// it can and will work without progress-bar,
// but during build time you will not see any messages for 10-60 seconds (depends on the size of the project)
// and decide that compilation is kind of hang up on you; progress bar shows nice progression of webpack compilation
config.plugins.push(
  new ProgressBarPlugin({
    format: `${green("analyzing...")} ${green("[:bar]")}${green(
      "[:percent]"
    )}${green("[:elapsed seconds]")} - :msg`
  })
);

// actually running compilation and waiting for plugin to start explorer
webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err);
  }
});
