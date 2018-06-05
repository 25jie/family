<template>
	<div class="hello">
		<!--<div class="item" v-for="item in itemList">1111
			<img class="js-lazy-image" :data-src="item.src">
		</div>-->
		<div class="gradient-box">
			<div class="radial-gradient box1"></div>
			<div class="radial-gradient box2"></div>
			<div class="radial-gradient box3"></div>
			<div class="radial-gradient box4"></div>
			<div class="radial-gradient box5"></div>
			<div class="radial-gradient box6"></div>
			<div class="radial-gradient box7"></div>
		</div>
	</div>
</template>

<script>
	import imgLazyLoad from "../assets/js/imageLazyLoad"
	export default {
		name: 'Test',
		data() {
			return {
				itemList: [{
					'src': '../../static/images/hf.png'
				}, {
					'src': '../../static/images/iphoneX.png'
				}, {
					'src': '../../static/images/sjll.png'
				}]
			}
		},
		beforeCreate() {},
		created() {},
		beforeMount() {},
		mounted() {
			imgLazyLoad.init();
		},
		beforeUpdate() {},
		updated() {},
		activated() {},
		deactivated() {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.item {
		--color: red;
	}
	
	.item {
		color: var(--color);
	}
	
	.item img {
		margin: 20px;
	}
	
	.gradient-box {
		display: flex;
		flex-wrap: wrap;
	}
	
	.radial-gradient {
		width: 300px;
		height: 200px;
		margin: 10px;
	}
	
	.radial-gradient.box1 {
		background: radial-gradient(white, red);
	}
	
	.radial-gradient.box2 {
		background: radial-gradient(circle at 50px 50px, white, red);
	}
	
	.radial-gradient.box3 {
		background: radial-gradient(closest-side circle at 50px 50px, white, red);
	}
	
	.radial-gradient.box4 {
		background: radial-gradient(closest-side circle, yellow, white, red, black);
	}
	
	.radial-gradient.box5 {
		background: radial-gradient(50px 100px ellipse, transparent 40px, yellow 41px, red);
	}
	
	.radial-gradient.box6 {
		background: radial-gradient(5px 10px ellipse, transparent 4px, yellow 6px, red), radial-gradient(circle, transparent 0px, red 3px, white 5px, transparent);
		background-size: 50px;
	}
</style>