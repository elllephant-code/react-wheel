module.exports = ({ config }) => {

    config.module.rules.push({
        test: /tsx?$/,
        loader: 'awesome-typescript-loader'
    })

    config.resolve.extensions.push('.ts', '.tsx')

    return config
}