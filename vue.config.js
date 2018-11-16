module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: 'raw-loader'
                }
            ]
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/styles/main.scss";`
            }
        }
    }
};
