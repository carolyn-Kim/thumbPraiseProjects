const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('praise',()=>{
    gulp.src(['src/**/*.es','!src/public/*/*.es'])
        .pipe(babel({
            presets:['es2015','stage-0'],
            plugins: [[
                "transform-runtime",
                {
                    "helpers": false,
                    "polyfill": false,
                    "regenerator": true,
                    "moduleName": "babel-runtime"
                }
            ]]

        }))
        .pipe(gulp.dest('./build/'))
})

gulp.task('default',['praise']);
gulp.watch(['src/**/*.es', '!src/public/*/*.es'],['praise'])
