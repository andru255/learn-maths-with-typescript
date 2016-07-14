var gulp            = require("gulp");
var config          = require("/usr/local/share/config/index.js");
var sourceMaps      = require("gulp-sourcemaps");
var typescript      = require("gulp-typescript");

gulp.task("typescript", function(){
    gulp.src(config.typescript.src)
        .pipe(typescript(config.typescript.options))
        .pipe(gulp.dest(config.typescript.build));
});

gulp.task("copy", function(){
    gulp.src(config.copy.src)
        .pipe(gulp.dest(config.copy.target));
});

gulp.task("default", ["copy", "typescript"]);
