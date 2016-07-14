var basePath = "/usr/local/share";
var config = {
    typescript: {
        src:[
            basePath + '/input/episodes/*.ts',
            basePath  + '/input/**/*.ts',
            '!' + basePath + '/input/**/**/_**/*.ts',
            '!' + basePath + '/input/_**/*.ts',
            '!' + basePath + '/input/**/_*.ts'
        ],
        build: basePath + "/output/js",
        options: {
            sortOutput: true
        }
    },
    copy: {
        src: [
               basePath + "/input/episodes/*.html",
               basePath + "/input/episodes/**/*.html"
             ],
        target: basePath + "/output/episodes"
    }
};

module.exports=config;
