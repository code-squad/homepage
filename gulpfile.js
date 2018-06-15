var gulp = require('gulp');
var less = require('gulp-less');
//var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var htmlmin = require('gulp-htmlmin');
var cachebust = require('gulp-cache-bust');
var concat = require('gulp-concat');
var fileinclude = require('gulp-file-include');
var clean = require('gulp-clean');

// Compile LESS files from /less into /css
gulp.task('less', function() {
    return gulp.src(['less/common.less', 'less/index.less', 
                    'less/application.less', 'less/schedule.less', 'less/level.less',
                    'less/sharedcto.less',
                    'less/special/special.less', 'less/program_unit.less', 'less/special/special_item.less',
                    'less/masters/master.less','less/masters/program_unit_masters_common.less',
                    'less/registration-common.less'])
        .pipe(less())
        .pipe(concat('merged.css'))
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify compiled CSS
gulp.task('minify-css', ['less'], function() {
    return gulp.src('css/agency.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src(['js_src/*.js'])
        //.pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// HTML Process

gulp.task('clean-html', function(){
    return gulp.src(['page/*.html', 'page/**/*.html','html_src/html_merged/*.html','html_src/html_merged/**/*.html', './index.html'])
    .pipe(clean());
});

gulp.task('htmlinclude-reg', ['clean-html'], function() {
    //return gulp.src(['html_src/reg/fe.html', 'html_src/reg/be.html','html_src/reg/ios.html', 'html_src/reg/level1.html'])
    return gulp.src(['html_src/reg/*.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('html_src/html_merged/reg/'));
});

gulp.task('htmlinclude-masters', ['htmlinclude-reg'], function() {
  return gulp.src(['html_src/masters/fe.html', 'html_src/masters/be.html','html_src/masters/ios.html','html_src/masters/level1.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('html_src/html_merged/masters/'));
});

gulp.task('htmlinclude', ['htmlinclude-masters'], function() {
  return gulp.src(['html_src/*.html','html_src/special/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('html_src/html_merged/'));
});

//goPage
gulp.task('minify-html-masters',['htmlinclude'], function() {
    return gulp.src(['html_src/html_merged/masters/fe.html','html_src/html_merged/masters/be.html','html_src/html_merged/masters/ios.html','html_src/html_merged/masters/level1.html'])
    .pipe(cachebust({
      type: 'timestamp'
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('page/masters'));
})

gulp.task('minify-html-reg',['minify-html-masters'], function() {
  return gulp.src(['html_src/html_merged/reg/*.html'])
  .pipe(cachebust({
    type: 'timestamp'
  }))
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('page/reg'));
})

gulp.task('minify-html',['minify-html-reg'], function() {
  return gulp.src(['html_src/html_merged/*.html'])
  .pipe(cachebust({
    type: 'timestamp'
  }))
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('page'));
});

gulp.task('move-index', ['minify-html'], function() {
  return gulp.src('page/index.html')
    .pipe(gulp.dest('./'));
});

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'minify-css', 'minify-js', 'move-index'], function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('less/*/*.less', ['less']);
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('js_src/*.js', ['minify-js']);
    gulp.watch('html_src/*.html', ['move-index']);
    gulp.watch('html_src/common/*.html', ['move-index']);
    gulp.watch('html_src/common/masters/*.html', ['move-index']);
    gulp.watch('html_src/reg/*.html', ['move-index']);
    gulp.watch('html_src/masters/*.html', ['move-index']);
    gulp.watch('html_src/special/*.html', ['move-index']);
    // Reloads the browser whenever HTML or JS files change
    // gulp.watch('page/*.html', browserSync.reload);
    // gulp.watch('css/*.css', browserSync.reload);
    // gulp.watch('js/*.js', browserSync.reload);
});

// Run everything
//gulp.task('default', ['less', 'minify-css', 'minify-js', 'htmlinclude', 'minify-html');
gulp.task('default', ['minify-css', 'minify-js', 'move-index']);



// Set the banner content
var banner = ['/*!\n',
    ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
    ' */\n',
    ''
].join('');

// Copy libs libraries from /node_modules into /libs
gulp.task('copy', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('libs/bootstrap'))

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('libs/jquery'))

    gulp.src([
            'node_modules/font-awesome/**',
            '!node_modules/font-awesome/**/*.map',
            '!node_modules/font-awesome/.npmignore',
            '!node_modules/font-awesome/*.txt',
            '!node_modules/font-awesome/*.md',
            '!node_modules/font-awesome/*.json'
        ])
        .pipe(gulp.dest('libs/font-awesome'))
})
