const path = require('path'); 
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV; 
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production'; 
const GLOBAL_CSS_REGEXP = /\.global.css/;
const DEV_PLUGINS = [ new CleanWebpackPlugin(), new HotModuleReplacementPlugin() ];
const COMMON_PLUGINS = [ new DefinePlugin ({'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`}) ]
const ASSET_PATH = process.env.ASSET_PATH || '/';
/** 
 * Генерирует настройку для devtool в зависимости от NODE_ENV: 
 * - в продакшене false
 * - в девелопменте eval
 */

function setupDevtool() {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
}

function getEntry() {
    if (IS_PROD) {
        return [ path.resolve(__dirname, '../src/client/index.js') ]
        }
        return [ path.resolve(__dirname, '../src/client/index.js'),
        'webpack-hot-middleware/client?path=https://react-app-ssr-production.up.railway.app/public/__webpack_hmr']
    }

module.exports = {
    target: "web",
    // watch: true,
    // watchOptions: {
    //     aggregateTimeout: 200,
    //     poll: 1000,
    //   },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] ,
        alias: {
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
        }
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: getEntry(),
    output: {
        path: path.resolve(process.cwd(), './build/client'),
        filename: 'client.js',
        publicPath: '/public/', 
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/, //ПОЭТОМУ была ошибка!!!!!! из-за i на конце выражения /\.css$/i
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            },
                        },
                    },
                    // 'less-loader',
                ],
                exclude: GLOBAL_CSS_REGEXP
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    devtool: setupDevtool(),
    plugins: IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS,
}; 


