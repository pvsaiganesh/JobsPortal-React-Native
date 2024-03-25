export const isValidImageUrl = (url) => {
  // Regular expression pattern for a valid image URL
  const imageUrlPattern =
    /(https?:\/\/.*\.(?:|jpg|jpeg|gif|svg|webp|avif|png|))/i;
  // Test the URL against the pattern
  return imageUrlPattern.test(url);
};
