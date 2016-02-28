# Gulp Tutorial

## Installing

```
npm install -g gulp
npm install --save-dev gulp
```

## Using `gulpfile.js`

```js
var gulp = require('gulp'),
  uglify = require('gulp-uglify');

gulp.task('minify', function(){
  gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'))
});
```

Install `gulp-uglify` through npm by running `npm install --save-dev gulp-uglify`, and then run the task by running `gulp minify`.

## Useful Plugins

* gulp-concat
* gulp-ruby-sass
* gulp-autoprefixer
* gulp-uglify
* gulp-jshint

## Watching Files

Gulp has the ability to watch files for chagnes and then run a task or tasks when changes are detected.

## Installing Browsersync

```
npm install -g browser-sync
browser-sync start --server --files "css/*.css"
browser-sync start --server --files "css/*.css, *.html"
```

## References

* [Building With Gulp](https://www.smashingmagazine.com/2014/06/building-with-gulp/)
* [Browsersync - Time-saving synchronised browser testing](https://browsersync.io/)