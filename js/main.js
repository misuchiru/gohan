$(function(){
	$('.headerMenuBtn').click(function(e){
		$('.headerMenu').fadeToggle();
		e.stopPropagation();
	});
	/*$('.mainPic').click(function(){
		$(this).fadeOut('slow',function(){
			$('.testPic').fadeIn()
		});
	});*/
	$('.mainbtn3').click(function(){
		$(this).fadeOut('slow',function(){
			$('.testPic').hide()
			$('.ansPic').fadeIn()
		});
	});
	$(document).click(function(e){
		$('.headerMenu').fadeOut();
		e.stopPropagation();
	});

	/*menu active*/
	var m_urlName = ['heart', 'smart', 'beauty', 'delicious', 'wakeup', 'goodTaste', 'jiming', 'item', 'spicy', 'local'];
	var m_menuLen = m_urlName.length;
	var m_url= document.location.pathname.match(/[^\/]+$/)[0];
	for(var i = 0 ; i < m_menuLen ; ++i){
		if(m_url.indexOf(m_urlName[i]) != -1){
			console.log('array = ' + m_urlName[i] + "  m_url = " + m_url);
			$('a[href = "' + m_urlName[i] + '.html"]').addClass('active');
		};
	};
});