const { src, dest, series, watch } = require(`gulp`),
    //CSSLinter = require(`gulp-stylelint`),
    //htmlCompressor = require(`gulp-htmlmin`),
    //jsCompressor = require(`gulp-uglify`),
    // htmlValidator = require(`gulp-html`),
    //jsLinter = require(`gulp-eslint`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;
    
    let lintCSS = () => {
        return src(`dev/styles/css/**/*.css`)
            .pipe(CSSLinter({
                failAfterError: false,
                reporters: [
                    {formatter: `string`, console: true}
                ]
            }));
    };
    exports.lintCSS = lintCSS;
    
    let compressHTML = () => {
        return src([`dev/html/*.html`,`dev/html/**/*.html`])
            .pipe(htmlCompressor({collapseWhitespace: true}))
            .pipe(dest(`prod`));
    };
    exports.compressHTML = compressHTML;
    
    let validateHTML = () => {
        return src([
            `dev/html/*.html`,
            `dev/html/**/*.html`])
            .pipe(htmlValidator(undefined));
    };
    exports.validateHTML = validateHTML;
    
    let transpileJSForDev = () => {
        return src(`dev/scripts/*.js`)
            .pipe(babel())
            .pipe(dest(`temp/scripts`));
    };
    exports.transpileJSForDev = transpileJSForDev;
    
    let transpileJSForProd = () => {
        return src(`dev/scripts/*.js`)
            .pipe(babel())
            .pipe(jsCompressor())
            .pipe(dest(`prod/scripts`));
    };
    exports.transpileJSForProd = transpileJSForProd;
    
    let lintJS = () => {
        return src(`dev/scripts/*.js`)
            .pipe(jsLinter())
            .pipe(jsLinter.formatEach(`compact`));
    };
    exports.lintJS = lintJS;

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
   
        server: {
            baseDir: [
                `temp`,
                `dev`,
                `dev/html`,
                `dev/js`,
                `dev/css`
            ]
        }
    });


    watch(`dev/js/**/*.js`)
        .on(`change`, reload);

    watch(`dev/css/**/*.css`)
        .on(`change`, reload);

    watch(`dev/html/**/*.html`)
        .on(`change`, reload);

};
exports.default = serve;

