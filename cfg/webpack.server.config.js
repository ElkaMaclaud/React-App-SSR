const path = require('path'); 
const nodeExternals = require('webpack-node-externals');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global.css/;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'producnion'; 

module.exports = {
    target: 'node',
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(process.cwd(),'./build/server'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/i,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                use: [ 
                    {
                        loader: 'css-loader',
                        options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]__[local]__[hash:base64:5]',
                            exportOnlyLocals: true,
                            },
                        //onlyLocals: true,
                        },
                    },
                    // 'less-loader',
                ],
                exclude: GLOBAL_CSS_REGEXP
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['css-loader']
            }
            
        ],
    },
    optimization: {
        minimize: false,
    },
    devtool: IS_DEV ? 'eval' : false,
    plugins: [ new DefinePlugin ({'process.env.CLIENT_ID':  `'${process.env.CLIENT_ID}'` }) ]
}