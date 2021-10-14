module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    cron: {
        enabled: true
    },
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', 'd3b2b63905b278c57eb2c08d08b9bb2a'),
        },
    },
});
