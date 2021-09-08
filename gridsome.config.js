// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Dalton Kirk',
  plugins: [
    {
      use: 'gridsome-plugin-gtag',
      options: {
        config: {
          id: 'UA-140937339-1',
        }
      }
    }
  ],
};
