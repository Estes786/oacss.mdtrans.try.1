module.exports = {
  apps: [
    {
      name: 'oasis-v4-frontend',
      script: 'npm',
      args: 'start',
      cwd: '/home/user/webapp',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
    }
  ]
};
