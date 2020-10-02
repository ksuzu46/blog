/**
 * ecosystem.config.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 * @description PM2 configuration file which run yarn start
 */

module.exports = {
    apps : [{
        name: 'blog',
        script: 'yarn',
        cwd: '/home/ubuntu/blog',
        interpreter: '/bin/bash',
        args: 'start',
        instances: 1,
        autorestart: true,
        max_memory_restart: '512M',
    }],
};
