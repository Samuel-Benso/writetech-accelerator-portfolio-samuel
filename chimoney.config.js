module.exports = {
  chimoney: {
    specPath: "openapi/chimoney.yaml", // Path to your OpenAPI spec
    outputDir: "docs/chimoney-api",   // Where to generate docs
    sidebarOptions: {
      groupPathsBy: "tag",
      categoryLinkSource: "tag",
    },
  },
};
