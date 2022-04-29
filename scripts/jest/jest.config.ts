module.exports = {
  rootDir: "./../../",
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/scripts/jest/jest-preprocess.ts",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "^gatsby-page-utils/(.*)$": `gatsby-page-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    "^gatsby-core-utils/(.*)$": `gatsby-core-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
    "^gatsby-plugin-utils/(.*)$": [`gatsby-plugin-utils/dist/$1`, `gatsby-plugin-utils/$1`], // Workaround for https://github.com/facebook/jest/issues/9771
  },
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/scripts/jest/loadershim.ts`],
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: ["<rootDir>/scripts/jest/setup-test-env.ts"],
};
