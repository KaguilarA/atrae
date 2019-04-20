const gulp = require(`gulp`),
  nodemon = require(`gulp-nodemon`),
  ngBuild = require('gulp-ng-build'),
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

gulp.task(`build`, ngBuild, function(){
  console.log('build done with success'); 
})

gulp.task(`watch`, () => {
  gulp.watch([paths.components.views, paths.components.styles, paths.components.ts], gulp.series([`build`], () => {}));
});

gulp.task(`default`, gulp.series([`connect`, `build`, `watch`], () => {}));
