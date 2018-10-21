const ghpages = require('gh-pages');

ghpages.publish('dist', {
	branch: 'master',
	repo: 'https://github.com/Alan18081/fire'
}, () => console.log('Done'));