const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp');

// Load plugins

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();

function js() {
  const source = './app/components/*.js';

  return src(source)
      .pipe(changed(source))
      .pipe(concat('bundle.js'))
      .pipe(uglify())
      .pipe(rename({
          extname: '.min.js'
      }))
      .pipe(dest('./assets/js/'))
      .pipe(browsersync.stream());
}

// CSS function 

function css() {
  const source = './app/scss/main.scss';

  return src(source)
      .pipe(changed(source))
      .pipe(sass())
      .pipe(autoprefixer({
          overrideBrowserslist: ['last 2 versions'],
          cascade: false
      }))
      .pipe(rename({
          extname: '.min.css'
      }))
      .pipe(cssnano())
      .pipe(dest('./assets/css/'))
      .pipe(browsersync.stream());
}

function watchFiles() {
  watch('./app/scss/*', css);
  watch('./app/js/*', js);
  // watch('./src/img/*', img);
}

// BrowserSync

function browserSync() {
  browsersync.init({
      server: {
          baseDir: './'
      },
      port: 3000
  });
}

// Tasks to define the execution of the functions simultaneously or in series

exports.watch = parallel(watchFiles, browserSync);
exports.default = series(parallel(js, css));