const path = require("path");

module.exports = {
  verbose: true,
  preset: "react-native",
  // transform: {
  //   "^.+\\.jsx?$": path.join(__dirname, "./jest-transformer.js"),
  // },
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.(test|spec).(ts|tsx|js)"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)/)",
  ],
  // transformIgnorePatterns: ["<rootDir>/node_modules/"],
  // transformIgnorePatterns: [
  //   "<rootDir>/node_modules/",
  // "<rootDir>/node_modules/(?!(@react-native|react-native)/)",
  //   // "<rootDir>/node_modules/react-native/",
  //   // "<rootDir>/node_modules/@react-native/",
  // ],
};
