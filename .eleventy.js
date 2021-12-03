
module.exports = function(eleventyConfig) {
  // COLLECTIONS
  // -------------------------------

  // FILTERS
  // -------------------------------

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/svg");

  // Base config
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist",
    }
  };
};
