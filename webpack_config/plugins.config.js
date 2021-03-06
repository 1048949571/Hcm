const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pluginsConfig = [
    new webpack.ProvidePlugin({
        $:'jquery',
        moment:'moment',
        React:'react',
        ReactDom:'react-dom'
    }),
    new HtmlWebpackPlugin({
        filename:'index.html',
        template: './app/index.html',
        chunks : ['index','vendor']
    }),
    new HtmlWebpackPlugin({
        filename:'user.html',
        template: './app/user.html',
        chunks : ['user','vendor']
    }),
    new HtmlWebpackPlugin({
        filename:'wechat.html',
        template: './app/wechat.html',
        chunks : ['wechat','vendor']
    }),
    
    new ExtractTextPlugin({
        filename:'./css/[name][hash].css',
        allChunks: true
    }),
    new CopyWebpackPlugin([{
        from:path.resolve(__dirname,'../app/static'),
        to:path.resolve(__dirname,'../hcmweb/static')
    },
    {
        from:path.resolve(__dirname,'../app/static/MP_verify_EPFEkhDSa2vICec5.txt'),
        to:path.resolve(__dirname,'../hcmweb')
    },
    {
        from:path.resolve(__dirname,'../app/iconfont'),
        to:path.resolve(__dirname,'../hcmweb/iconfont')
    },
    {
        from:path.resolve(__dirname,'../app/img'),
        to:path.resolve(__dirname,'../hcmweb/img')
    }]),
];
if(process.env.npm_lifecycle_script.indexOf('production')>1){
    console.log(path.resolve(__dirname,'../hcmweb/'))
    pluginsConfig.push(
        new CleanWebpackPlugin(
            path.resolve(__dirname,'../hcmweb/'),{
                root: path.resolve(__dirname,'../'),
            }
        )
    )
    console.log('CleanWebpackPlugin----->')
}
module.exports = pluginsConfig;
console.log('pluginsConfig----->')

