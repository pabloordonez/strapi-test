'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    findByDate: (ctx) =>
    {
        const { from, to } = ctx.params;

        console.log(`Filtering docker entries by date from '${from}' to '${to}'...`);

        return strapi.query('docker').find({ updated_on_gte: from, updated_on_lte: to });
    }
};
