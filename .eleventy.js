module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addFilter("limit", function(array, limit) {return array.slice(0, limit);});
  return {
    templateFormats: ["njk", "html", "md", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
};
