const createSlug = require("../../../lib/functions/createSlug").createSlug;
'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            data.slug = createSlug(data.name);
        },
        beforeUpdate: async (params, data) => {
            if(data.name !== undefined){
                data.slug = createSlug(data.name);
            }
        }
    }
};
