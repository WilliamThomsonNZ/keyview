const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    ["global"]: "./src/global.js",
    ["home-page"]: "./src/home-page.js",
    ["team-member"]: "./src/team-member.js",
    ["capital-solutions"]: "./src/capital-solutions.js",
    ["credit-opportunities"]: "./src/credit-opportunities.js",
    ["flagship"]: "./src/flagship.js",
    ["team"]: "./src/team.js",
    ["private-credit"]: "./src/private-credit.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
    clean: true,
  },
};
