module.exports = ({ config }) => {

    config.module.rules.push({
        test: /tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
            configFileName: 'tsconfig.dev.json'
        }
    })

    config.resolve.extensions.push('.ts', '.tsx')

    return config
}