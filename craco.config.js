const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'), // 将 @ 符号指向 src 目录
		},
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
		},
	],
};
