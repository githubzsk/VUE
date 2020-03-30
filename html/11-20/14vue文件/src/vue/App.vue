<template>
	<div class="title">
		<h2>{{message}}</h2>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data(){
			return{
				message: '你好啊'
			}
			
		},
		methods:{
			btnClick(){
				console.log('btnClick')
			}
		}
	}
</script>

<style scoped>
	.title{
		color: green
	}
</style>
