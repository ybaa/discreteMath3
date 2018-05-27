module.exports = {
    entry: './main.js',
    output: {
      filename: './bundle.js'
    },
    watch: true,
    module: {
      rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: { 
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        } 
      }]
    }
};