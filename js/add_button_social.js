// twitter
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],
	p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;
		js.async = true; //追加コード 非同期
		js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
	}
}(document, 'script', 'twitter-wjs');

//facebook
(function(d, s, id) {
  var js,fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
	js.id = id;
	js.async = true; //追加コード 非同期
  js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));