const cpn = {
	template: '#tmp',
	props: {
		cbooks: {
			type: Array,
			default: [],
			required: true
		}
	},
	methods: {
		btnRemove(index){
			this.$emit('remove-id',index)
		}
	},
	filters: {
		showPrice(price){
			return '￥'+price
		}
	}
}

new Vue({
	el: '#app',
	data: {
		books: [
			{name:'算法导论',time:'2018-9-28',price: 199,count: 1},
			{name:'Unix变成艺术',time:'2018-2-08',price: 399,count: 1},
			{name:'编程珠玑',time:'2018-6-12',price: 99,count: 1},
			{name:'代码大全',time:'2018-1-18',price: 79,count: 1},
		]
	},
	methods:{
			removebyid(id){
				console.log(id)
			}
	},
	components:{
		cpn
	}
})