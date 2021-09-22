const slugify = require("slugify");
'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            (data.name ? data.slug = slugify(data.name) : null);
        },
        beforeUpdate: async (params, data) => {
            (data.name ? data.slug = slugify(data.name) : null);
        }
    }
};
