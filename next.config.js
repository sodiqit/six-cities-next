const withSass = require('@zeit/next-sass');

let config = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': `${__dirname}/src/styles`,
    };

    return config;
  },
};

config = withSass(config);

module.exports = config;
