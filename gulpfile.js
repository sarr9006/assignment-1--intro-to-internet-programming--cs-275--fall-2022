const { src, dest, series, watch } = require(`gulp`),
    htmlValidator = require(`gulp-html`),
    CSSLinter = require(`gulp-stylelint`),
    htmlCompressor = require(`gulp-htmlmin`),
    jsLinter = require(`gulp-eslint`),
    babel = require(`gulp-babel`),
    jsCompressor = require(`gulp-uglify`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;
    
let validateHTML = () => {
    return src(`*.html`)
        .pipe(htmlValidator(undefined));
    };    


let validateCSS = () => {
    return src(`css/*.css`)
         .pipe(CSSLinter(undefined));
};

let compressHTML = () => {
    return src(`uncompressed-html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`compressed-html/`));
};

let validateJS = () => {
    return src(`js/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`));
};

let transpileJSForDev = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/scripts`));
};

let compressJS = ()=>{
    return src(`uncompressed-js/*.js`)
        .pipe(jsCompressor({collapseWhitespace: true}))
        .pipe(dest(`compressed-js/`));
}

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        server: {
            baseDir: [
                `dev`,
                `temp`,
                `dev/html`
        
            ]
        }
    });
    watch(`dev/html/*.html`, validateHTML).on(`change`, reload);
    watch(`dev/css/*.css`, validateCSS).on(`change`, reload);
    watch(`dev/js/*.js`, series(validateJS, transpileJSForDev)).on(`change`, reload);
};


let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(CSSLinter({
            failAfterError: false,
            reporters: [
                {formatter: `string`, console: true}
            ]
        }));
};



exports.validateHTML = validateHTML;
exports.validateCSS = validateCSS;
exports.compressHTML = compressHTML;
exports.validateJS = validateJS;
exports.transpileJSForDev = transpileJSForDev;
exports.jsCompressor = jsCompressor;
exports.serve = series(
    validateHTML,
    validateJS,
    transpileJSForDev,
    serve
);
