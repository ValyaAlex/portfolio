const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const sass = require('gulp-sass')(require('node-sass'));
const htmlMin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const SvgSprite = require('gulp-svg-sprite')
const image = require('gulp-image')
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const sourceMaps = require('gulp-sourcemaps')
const del = require('del')
const uglify = require('gulp-uglify-es').default
const browserSync = require('browser-sync').create()

const clean = () => {
    return del(['dist'])
}

const resources = () => {
    return src('src/resources/**/*.js')
        .pipe(dest('dist/js'))
}

const resourcesFonts = () => {
    return src('src/resources/fonts/*.woff2')
        .pipe(dest('dist/fonts'))
}

const styles = () => {
    return src([
        'src/styles/*.scss',
        'src/styles/**/*.css'
    ])
        .pipe(sourceMaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            cascade: false,
        }))
        .pipe(cleanCss({
            level: 2,
        }))
        .pipe(sourceMaps.write())
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream())
};

const media = () => {
    return src('src/styles/media/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('media.css'))
        .pipe(autoprefixer({
            cascade: false,
        }))
        .pipe(cleanCss({
            level: 2,
        }))
        .pipe(sourceMaps.write())
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream())
};

const htmlMinify = () => {
    return src('src/**/*.html')
        .pipe(htmlMin({
            collapseWhitespace: true,
        }))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}

const svgSprites = () => {
    return src('src/img/icon/**/*.svg')
        .pipe(SvgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest('dist/img/icon'))
}

const scripts = () => {
    return src('src/js/**/*.js')
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify().on('error', notify.onError()))
        .pipe(sourceMaps.write())
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream())
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.jpeg',
        'src/img/**/*.png',
        'src/img/*.svg',
        'src/img/**/*.webp',
    ])
        .pipe(image())
        .pipe(dest('dist/img'))
}

watch('src/**/*.html', htmlMinify)
watch('src/styles/*.scss', styles)
watch('src/styles/media/*.scss', media)
watch('src/img/icon/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/**/*.js', resources)
watch('src/resources/**.woff2', resourcesFonts)

exports.default = series(clean, htmlMinify, resources, resourcesFonts, scripts, styles, media, images, svgSprites, watchFiles)


const stylesBuild = () => {
    return src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            cascade: false,
        }))
        .pipe(cleanCss({
            level: 2,
        }))
        .pipe(dest('dist/css'))
}

const scriptsBuild = () => {
    return src('src/js/**/*.js')
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify().on('error', notify.onError()))
        .pipe(sourceMaps.write())
        .pipe(dest('dist/js'))
}

exports.build = series(clean, htmlMinify, resources, resourcesFonts, scriptsBuild, stylesBuild, media, images, svgSprites, watchFiles)