var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var clean = require('gulp-clean');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');

var autoprefixerOptions = {
    overrideBrowserslist: ['last 2 versions']
};
// Development Tasks
// -----------------

// Start browserSync server
gulp.task('browserSync', function () {
    browserSync({
        notify: true,
        port: 5000,
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('sass', function () {
    return gulp.src('app/scss/**/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(plumber(function (error) {
            console.log("Error happend!", error.message);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'})) // Passes it through a gulp-sass
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(plumber.stop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css')) // Outputs it in the css folder
        .pipe(browserSync.reload({ // Reloading with Browser Sync
            stream: true
        }));
});

// Js Hint
gulp.task('jshint', function () {
    return gulp.src('app/js/**/*.js')
        .pipe(plumber(function (error) {
            console.log("Error happend!", error.message);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(plumber.stop())
        .pipe(browserSync.reload({ // Reloading with Browser Sync
            stream: true
        }));
});

// Watchers
gulp.task('watch', function () {
    gulp.watch('app/scss/**/**/*.scss', ['sass']);
    gulp.watch('app/js/**/*.js', ['jshint']);
    gulp.watch('app/**/*.html', browserSync.reload);
});

// Optimization Tasks
// ------------------

// Optimizing CSS and JavaScript
gulp.task('opt', function () {
    return gulp.src('app/*.html')
        .pipe(useref({ searchPath: 'app' }))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'));
});

// Optimizing Images
gulp.task('images', function () {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});

// Copying fonts
gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

// Copying vendors
gulp.task('vendors', function () {
    return gulp.src('app/vendors/**/*')
        .pipe(gulp.dest('dist/vendors'))
});

// Cleaning
gulp.task('clean', function () {
    return gulp.src('dist', {allowEmpty:true})
        .pipe(clean({force: true}))
        .pipe(gulp.dest('dist'));
});

// Build Sequences
// ---------------

gulp.task('default', gulp.series('sass', 'browserSync', 'watch', function (done) {
    done();
}));

gulp.task('build', gulp.series('clean','sass','opt','images', 'fonts', 'vendors', function (done) {
    done();
}));
