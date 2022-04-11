module.exports = {
    apps: [
        {
            name: 'SOFTCONSTRUCT',
            script: './server.js',
            instances: 1,
            autorestart: true,
            time: true,
            watch: false,
            max_memory_restart: '4G',
            logDateFormat: 'YYYY-MM-DD HH:mm Z',
            error_file: './logs/err.log',
            out_file: './logs/out.log',
        },
    ],
};
