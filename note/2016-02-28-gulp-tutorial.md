# Gulp Tutorial

## Installing

```
npm install -g gulp
npm install --save-dev gulp
```

## Create Our gulpfile

Gulp only has 5 methods: `task`, `run`, `watch`, `src`, and `dest`.

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
* jshint
* gulp-rename

## A more complte gulpfile

```javascript
// Include gulp
var gulp = require("gulp");

var jshint = require('gulp-jshint');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('lint', function(){
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
})

gulp.task('sass', function(){
	return sass('scss/*.scss')
		.pipe(gulp.dest('css'));
})

gulp.task('scripts', function(){
	return gulp.src('js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
})

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['lint', 'scripts']);
	gulp.watch('scss/*.scss', ['sass']);
})

gulp.task('default', ['lint', 'sass', 'scripts', 'watch'])
```

Note that, in `gulp-ruby-sass`, you should use `sass('scss/*.scss')` instead of `gulp.src()` to read in the stylesheet. A detailed explanation is [here][ruby-sass] in stackoverflow.

## Installing Browsersync

```
npm install -g browser-sync
browser-sync start --server --files "css/*.css"
browser-sync start --server --files "css/*.css, *.html"
```

## References

* [Building With Gulp](https://www.smashingmagazine.com/2014/06/building-with-gulp/)
* [Browsersync - Time-saving synchronised browser testing](https://browsersync.io/)
* [Gettting Started with Gulp | Travis Maynard](https://travismaynard.com/writing/getting-started-with-gulp)

[ruby-sass]: http://stackoverflow.com/questions/33083374/gulp-plugin-gulp-ruby-sass-not-compiling