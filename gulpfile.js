const gulp = require("gulp")
const changed = require('gulp-changed')
const sourcemaps = require("gulp-sourcemaps")
const sass = require('gulp-sass')
const babel = require("gulp-babel")
const minifyJs = require("gulp-uglify")


gulp.task("watch", function () {
  gulp.watch('src/sass/*.scss', gulp.series('sass'))
  gulp.watch('src/es6/**/*.js', gulp.series('babel-js'))
})

// ----- padrao -----
gulp.task('default', gulp.series('watch'))

// ----- sass -----
gulp.task('sass', () => {
  return gulp.src('src/sass/*.scss')
    .pipe( changed('css') )
    .pipe( sourcemaps.init() )
    .pipe( sass({ outputStyle: 'compressed' }).on('error', function(e){ console.log(e) }) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('css') )
})

// ----- babel-js -----
gulp.task('babel-js', () => {
  return gulp.src('src/es6/**/*.js')
    .pipe( sourcemaps.init() )
    .pipe(babel({
        presets: ['@babel/preset-env']
      }))
    .pipe(minifyJs())
    .pipe( sourcemaps.write('.') )
    .pipe(gulp.dest('js-min/es6'))
})