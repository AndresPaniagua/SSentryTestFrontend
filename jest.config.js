const {defaults} = require('jest-config');

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleDirectories: ["node_modules", "src"],
  reporters: [ "default", [ "./node_modules/jest-html-reporter", { "pageTitle": "Sentry Report" } ] ],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
 }
};

