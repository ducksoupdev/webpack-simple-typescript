module.exports = {
	entry: './main.ts',
	output: {
		path: '.',
    	filename: 'bundle.js'
	},
	resolve: {
        extensions: ['.ts', '.js']
    },
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'ts-loader'
					}
				]
			}
		]
	}
};