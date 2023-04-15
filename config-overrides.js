const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@pages': 'src/pages',
        '@shared': 'src/shared',
        '@components': 'src/components'
    })(config);

    return config;
};