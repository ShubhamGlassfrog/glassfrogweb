export const slugify = (title) => {
    // Normalize to NFD form to separate accents from letters, then remove accents
    const normalized = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    return encodeURIComponent(
        normalized
            .toLowerCase()
            .replace(/[^a-zA-Z0-9\u0900-\u097F\s-]/g, '') // Keep Hindi characters and Latin letters/numbers
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/-+/g, '-') // Replace multiple - with single -
            .trim()
    );
};
