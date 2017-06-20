var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("server",function(){
	browserSync.init({
		server:{
			baseDir: ["./"]
		},
		port: "3000",
		open: "external"
	})
});

gulp.task("default",["server"]);

