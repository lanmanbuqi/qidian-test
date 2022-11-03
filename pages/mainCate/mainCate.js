$(function () {
	var mySwiper = new Swiper('.swiper', {
		loop: true, // 循环模式选项
		autoplay: true,

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			paginationType: 'custom',
			bulletClass: 'my-bullet', //需设置.my-bullet样式
			bulletActiveClass: 'my-bullet-active',
			bulletElement: 'div',
			renderBullet: function (index, className) {
				switch (index) {
					case 0:
						text = '光阴之外';
						break;
					case 1:
						text = '最后的黑暗之王';
						break;
					case 2:
						text = '我是导演，我不比';
						break;
					case 3:
						text = '7号基地';
						break;
					case 4:
						text = '起点百战沙尘';
						break;
				}
				return '<div class="' + className + '">' + text + '</div>';
			},
		},
	});
});
