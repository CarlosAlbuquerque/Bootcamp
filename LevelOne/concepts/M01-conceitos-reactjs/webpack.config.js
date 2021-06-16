const path = require('path')

module.exports = {
    // Qual o arquivo de entrada da nossa aplicação
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        // qual pasta receberá o arquivo
        path: path.resolve(__dirname, 'public'),
        // qual arquivo receberá o bundle
        filename: 'bundle.js'
    },
    devServer: {
        // qual o caminho para o diretorio que contem os arquivos public
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            // loader para conversão do js, babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
            },
            // loader para conversão do css
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            // loader para conversão do imgs
            {
                test: /.*\.(gif)|(png)|(jpe?g)$/i,
                use: {
                    loader: 'file-loader',
                }
            },
        ]
    }
}