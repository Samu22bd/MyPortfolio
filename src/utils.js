export const getImageUrl = (path) => {
    // to generate image path
    return new URL(`/assets/${path}`, import.meta.url).href;
    // path akan di append ke import.meta.url
}