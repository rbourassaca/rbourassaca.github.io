const slugify = require("slugify");

const createSlug = (string) => {
    return slugify(string, {
        remove: /[-]/g,
        lower: true,
    });
}

exports.createSlug = createSlug;