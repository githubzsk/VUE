const app = new Vue({
		el: '#app',
		data:{
			movies:['111111111111','222222222222222','33333333333333','44444444444444'],
			currentIndex: 0
		},
		methods:{
			getCurrentIndex(index){
				this.currentIndex = index
			}
		}
	})