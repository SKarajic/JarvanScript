var nodeExternals = require('webpack-node-externals');
var path = require('path');
var fs = require('fs');


module.exports = {
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  output: {
    filename: 'jarvanscript.js',
    path: path.resolve(__dirname, 'lib'),
  },
  plugins: [
    new DtsBundlePlugin({
      in: './src',
      out: './dist',
      dts: {
        main: path.resolve(__dirname, 'dist/**/*.d.ts'),
        out: path.resolve(__dirname, 'lib/jarvanscript.d.ts'),
        exclude: function(file) {
          return (
            /classes\/enums\/methods\.d\.ts/.test(file) ||
            /classes\/interfaces\.d\.ts/.test(file) ||
            /classes\/interfaces\/index/.test(file) ||
            /classes\/enums\.d\.ts/.test(file) ||
            /classes\/enums\/index/.test(file) ||
            /classes\/managers/.test(file) ||
            /classes\/dto/.test(file) ||
            /wrappers/.test(file) ||
            /handlers/.test(file)
          )
        }
      },
    }),
  ]
};

function DtsBundlePlugin(config) {
  this.config = config
}

DtsBundlePlugin.prototype.apply = function (compiler) {
  var _this = this
  compiler.plugin('done', function() {
    var dts = require('dts-bundle');

    walkSync(_this.config.in).filter(function (file) {
      return file.endsWith('.d.ts')
    }).forEach(function(file) {
      var contents = fs.readFileSync(file)
      var outFile = file.replace(path.join(_this.config.in), path.join(_this.config.out))

      fs.writeFileSync(
        outFile,
        contents,
      )
    })

    dts.bundle(Object.assign({}, {
      name: 'jarvanscript',
      outputAsModuleFolder: true
    }, _this.config.dts))
  });
};

function walkSync(dir, filelist) {
  var path = path || require('path');
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};