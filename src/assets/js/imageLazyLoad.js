'use strict'

var init = function() {
	const images = document.querySelectorAll(".js-lazy-image");
	if(!('IntersectionObserver' in window)) {
		Array.from(images).forEach(image => preloadImage(image));
	} else {
		const config = {
			rootMargin: '50px 0px',
			threshold: 0.01
		}

		// 创建可见性变化实例1
		let observer = new IntersectionObserver(onIntersectionObserver, config);
		// 开始观察所有image
		images.forEach(image => {
			observer.observe(image);
		});

		// 可见性变化回调函数
		function onIntersectionObserver(entries) {
			entries.forEach(entry => {
				if(entry.intersectionRatio > 0) {
					// 停止观察
					observer.unobserve(entry.target);
					// 加载图片
					preloadImage(entry.target);
				}
			});
		}
	}

	// 加载图片
	function preloadImage(element) {
		element.src = element.getAttribute("data-src");
	}
}

export default {
	init
}