const gulp = require(`gulp`),
  nodemon = require(`gulp-nodemon`),
  exec = require('child_process').exec,
  paths = {
    components: {
      ts: `./public/src/**/**/**.ts`,
      styles: `./public/src/**/**/**.scaa`,
      views: `./public/src/**/**/**.html`,
    }
  };

gulp.task(`connect`, () => {
  nodemon();
})

gulp.task(`build`, (cb) => {
  exec('ng build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task(`watch`, () => {
  gulp.watch([paths.components.views, paths.components.styles, paths.components.ts], gulp.series([`build`], () => {}));
});

gulp.task(`default`, gulp.series([`connect`, `build`, `watch`], () => {}));
