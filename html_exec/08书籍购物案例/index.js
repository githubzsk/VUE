const app = new Vue({
	el: '#app',
	data:{
		books: [
			{name:'算法导论',time:'2018-9-28',price: 199,count: 1,limit:3},
			{name:'Unix编程艺术',time:'2018-2-08',price: 399,count: 1,limit:2},
			{name:'编程珠玑',time:'2018-6-12',price: 99,count: 1,limit:5},
			{name:'代码大全',time:'2018-1-18',price: 79,count: 1,limit:4},
			]
	},
	methods:{
		changeCount(index,type){
			if('increment' === type){
				this.books[index].count++
			}
			if('decrement' === type){
				this.books[index].count--
			}
		},
		// dealPrice(price){
		// 	return '￥'+price.toFixed(2)
		// }
		remove(index){
			this.books.splice(index,1)
		}
		
	},
	computed:{
		getTotalPrice(){
			let totalPrice = 0
			for (let i = 0; i < this.books.length; i++) {
				totalPrice += this.books[i].price * this.books[i].count
			}
			return totalPrice
		}
	},
	filters:{
		dealPrice(price){
			return '￥'+price.toFixed(2)
		}
	}
})