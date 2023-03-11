// * List dependences
const {src, dest, watch, series} = require('gulp');
const pug = require('gulp-pug');
const gulpSass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const production = false


// * Task Html
function viewsTask(){
	return src('src/views/pages/*.pug')
	.pipe(pug({
		pretty: production ? false : true
	}))
	.pipe(dest('./public'))
}

// * Task Sass
function scssTask(){
	return src('./src/scss/**/*.scss')
		.pipe(gulpSass())
		// .pipe(postcss([cssnano()]))
		// .pipe(minify())
		.pipe(dest('public/css'))
}

// * Task Javascript
function jsTask(){
	return src([
		'src/js/jquery.min.js',
		'src/js/toastify.js',
		'src/js/main.js'
	])
	.pipe(concat('bundle.js'))
	// .pipe(terser())
	.pipe(dest('public/js'))
}

// * Task Fonts
function fontsTask(){
	return src(['./src/fonts/*'])
		.pipe(dest('public/fonts/'));
}

// * Task IMGs
function imgsTask(){
	return src(['./src/img/*'])
		.pipe(dest('public/img/'));
}

// * BrowserSync Task
function browsersyncServer(cb){
	browserSync.init({
		server: {
			baseDir: './public'
		}
	});
	cb();
}

function browsersyncReload(cb){
	browserSync.reload();
	cb();
}


// * Watch Task
function watchTask(){
	watch('src/views/**/*.pug', series(viewsTask, browsersyncReload));
	watch(['src/scss/**/*.scss', 'src/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
}

//* Default Gulp task
exports.default = series(
	scssTask,
	viewsTask,
	jsTask,
	fontsTask,
	imgsTask,
	browsersyncServer,
	watchTask
)