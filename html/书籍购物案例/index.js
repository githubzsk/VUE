const app = new Vue({
	el: '#app',
	data:{
		books: [
			{name:'算法导论',time:'2018-9-28',price: 199,count: 1},
			{name:'Unix变成艺术',time:'2018-2-08',price: 399,count: 1},
			{name:'编程珠玑',time:'2018-6-12',price: 99,count: 1},
			{name:'代码大全',time:'2018-1-18',price: 79,count: 1},
			]
	},
	methods:{
		changeCount(index,type){
			if('decrement' === type){
				this.books[index].count--
			}
			if('increment' === type){
				this.books[index].count++
			}
		},
		// increment(index){
		// 	if(this.books[index].count < 10){
		// 		this.books[index].count++
		// 		getTotalPrice()
		// 	}else{
		// 		this.canOperate = false
		// 	}
		// },
		// decrement(index){
		// 	if(this.books[index].count > 0){
		// 		this.books[index].count--
		// 		getTotalPrice()
		// 	}else{
		// 		this.canOperate = false
		// 	}
		// },
		// getFinalPrice(price){
		// 	return '￥'+price.toFixed(2)
		// }
	},
	computed:{
		getTotalPrice(){
			// (1)
			// let totalPrice = 0
			// for (var i = 0; i < this.books.length; i++) {
			// 	totalPrice += this.books[i].price*this.books[i].count
			// }
			// return totalPrice
			// (2)
			// let totalPrice = 0
			// for (let i in this.books) {
			// 	totalPrice += this.books[i].price*this.books[i].count
			// }
			// return totalPrice
			// (3)
			let totalPrice = 0
			for (let item of this.books) {
				totalPrice += item.price*item.count 
			}
			return totalPrice
		}
	},
	filters:{
		showPrice(price){
			return '￥'+price.toFixed(2)
		}
	}
})