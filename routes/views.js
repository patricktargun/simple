const H = {}

H.index = function(req, res){
	return res.render('../views/index', {
	  	page_path: '/',
	  	page_title: 'home',
	  	html_title: 'HOME'
	})
}

module.exports = H;

