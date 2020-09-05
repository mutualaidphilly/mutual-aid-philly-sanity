module.exports = () => ({
  plugins: [
    require('postcss-import'),
    require('postcss-responsive-type'),
    require('postcss-preset-env')({
      stage: 0
    })
  ]
})
