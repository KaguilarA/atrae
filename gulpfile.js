const gulp = require(`gulp`),
  nodemon = require(`gulp-nodemon`),
  exec = require(`gulp-exec`),
  paths = {
    components: {
      ts: `./public/src/**/**/**.ts`,
      styles: `./public/src/**/**/**.scaa`,
      views: `./public/src/**/**/**.html`,
    }
  };

gulp.task(`connect`, async () => {
  await exec(`ng build`);
  await exec.reporter();
  nodemon();
})

gulp.task(`reload`, async() => {
  await exec(`ng build`);
  await exec.reporter();
});

gulp.task(`watch`, () => {
  gulp.watch([paths.components.views, paths.components.styles, paths.components.ts], gulp.series([`reload`], () => {}));
});

gulp.task(`default`, gulp.series([`connect`, `reload`, `watch`], () => {}));
