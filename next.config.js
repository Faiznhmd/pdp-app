const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'pdp',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './PDPPage': './components/PDPPage',
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          'react-dom': { singleton: true, requiredVersion: false },
        },
      })
    );

    return config;
  },
};
