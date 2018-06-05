<template>
	<div class="hello">
		{{msg}}
		<input type="text" v-model="msg">
		<router-link :to="{path:'/test'}">Test</router-link>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: '欢迎来到Vue应用 Welcome to Your Vue.js App '
			}
		},
		beforeCreate() {
			console.log("beforeCreate..." + this.$el);
			console.log("beforeCreate..." + this.$data);
			console.log("beforeCreate..." + this.msg);
		},
		created() {
			console.log("created..." + this.$el);
			console.log("created..." + this.$data);
			console.log("created..." + this.msg);
		},
		beforeMount() {
			console.log("beforeMount..." + this.$el);
			console.log("beforeMount..." + this.$data);
			console.log("beforeMount..." + this.msg);
		},
		mounted() {
			Toast("mounted")
			console.log("mounted..." + this.$el.outerHTML);
			console.log("mounted..." + this.$data);
			console.log("mounted..." + this.msg);
		},
		beforeUpdate() {
			console.log("beforeUpdate..." + this.$el.outerHTML);
			console.log("beforeUpdate..." + this.$data);
			console.log("beforeUpdate..." + this.msg);
		},
		updated() {
			console.log("updated..." + this.$el.outerHTML);
			console.log("updated..." + this.$data);
			console.log("updated..." + this.msg);
		},
		activated() {
			console.log("activated..." + this.$el.outerHTML);
			console.log("activated..." + this.$data);
			console.log("activated..." + this.msg);
		},
		deactivated() {
			console.log("deactivated..." + this.$el.outerHTML);
			console.log("deactivated..." + this.$data);
			console.log("deactivated..." + this.msg);
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>