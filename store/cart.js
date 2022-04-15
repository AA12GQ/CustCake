export default {
	namespaced:true,  
	state() {
		return {
			cartList: [{
					id: "10090",
					twoId: 10089,
					name: "拿破仑莓恋",
					french: "Napoléon aux fraises",
					ischeck:false,
					price: "218.00",
					img: "https://static.mcake.com/new_goods/napolunmeilian/N0201/list/1.jpg"
				},
				{
					id: "11547",
					twoId: 11540,
					name: "白色恋人",
					french: "Blanc Amant",
					ischeck:true,
					price: "218.00",
					tid: 11,
					tname: "限定",
					img: "https://static.mcake.com/new_goods/napolunmeilian/N0201/list/1.jpg"
				}
			]
		}
	},
	getters:{
		allInfo(state){
			let allCheck = true
			state.cartList.forEach(item=>{
				if(!item.ischeck){
					allCheck = false
				}
			})
			return {allCheck}
		}
	},
	mutations:{
			cartCheckMut(state,idx){
				state.cartList[idx].ischeck = !state.cartList[idx].ischeck 
			},
			cartAllCheckMut(state,bool){
				state.cartList.forEach(item=>{
					item.ischeck = !bool
				})
			}
	}
}
