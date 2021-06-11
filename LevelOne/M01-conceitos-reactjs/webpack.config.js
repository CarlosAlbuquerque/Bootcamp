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
                // test é a primeira propriedade obrigatoria
                // vamos passar uma expressão regular que identifica arquivos que terminam com js
                test: /\.js$/,
                // estamos excluindo o node_modules da conversão
                exclude: /node_modules/,
                // passando com loader iremos usar para a conversão
                use:{
                    loader: 'babel-loader',
                }
            }
        ]
    }
}