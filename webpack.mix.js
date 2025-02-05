const mix = require("laravel-mix");

// Cleans up terminal output
mix.disableNotifications();

// Some file that Webpack is watching is continuously updating after TailwindCSS runs. This results in an infinite loop.
// I am not fully confident that I have identified the file, but excluding the below files from the watch list prevents a loop.
mix.webpackConfig({
  watchOptions: {
    ignored: /node_modules|dist|mix-manifest.json/,
  },
});

// Basic Mix setup
mix.js("src/js/app.js", "dist/js").postCss("src/css/app.pcss", "dist/css");
