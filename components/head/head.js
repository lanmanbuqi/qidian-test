$(function () {
	$('.webGame>ul>li').on('mouseover', function () {
		$('.webGame>ul>li .active').removeClass('active');
		$(this).find('img').addClass('active');
	});
});
