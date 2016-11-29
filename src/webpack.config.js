module.exports = {
	test: /vendor\/.+\.(jsx|js)$/,
	loader: 'imports?jQuery=jquery,$=jquery,this=>window'
}