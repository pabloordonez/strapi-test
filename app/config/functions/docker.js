const axios = require("axios");

module.exports = async () =>
{
    console.log("Fetching docker information...");
    const { data } = await axios.get('https://hub.docker.com/v2/repositories/strapi/strapi/');
    console.log(`Data received: ${data.pull_count} pull counts.`);

    const { description, last_updated, pull_count } = data;

    await strapi.query('docker').create({
        description,
        pull_count,
        updated_on: last_updated,
    });
};