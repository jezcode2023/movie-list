const WorkboxPlugin = require('workbox-webpack-plugin');

plugins: [
  // other plugins...
  new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
  }),
];