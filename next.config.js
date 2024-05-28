const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'main',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        exposes: {}
      })
    );
    return config;
  }
}

module.exports = nextConfig
