// const withTM = require('next-transpile-modules');

// module.exports = withTM({
//   transpileModules: ['gsap']
// });
// module.exports = {
//   devIndicators: {
//     autoPrerender: false,
//   },
//   build: {
//     transpile: ['gsap'],
//   },
// };
//module.exports = require("gsap/ScrollTrigger")

const path = require('path')

module.exports = {
  target: "serverless",
  devIndicators: {
    autoPrerender: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}