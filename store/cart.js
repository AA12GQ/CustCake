import Vue from 'vue'
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
					img: "https://static.mcake.com/new_goods/napolunmeilian/N0201/list/1.jpg",
					list:[
						{id: 10090, sku: "n0201", ahead: "提前5小时预定", edible: "2-3人食", spec: "1磅", price: "218.00"},
						{id: 10091, sku: "n0202", ahead: "提前5小时预定", edible: "4-7人食", spec: "2磅", price: "318.00"},
						{id: 10092, sku: "n0203", ahead: "提前5小时预定", edible: "8-12人食", spec: "3磅", price: "458.00"},
						{id: 10093, sku: "n0205", ahead: "提前5小时预定", edible: "12-20人食", spec: "5磅", price: "750.00"}
						],
						num:1,
						idx:0
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
					img: "https://static.mcake.com/new_goods/napolunmeilian/N0201/list/1.jpg",
					list:[
						{id: 10090, sku: "n0201", ahead: "提前5小时预定", edible: "2-3人食", spec: "1磅", price: "218.00"},
						{id: 10091, sku: "n0202", ahead: "提前5小时预定", edible: "4-7人食", spec: "2磅", price: "318.00"},
						{id: 10092, sku: "n0203", ahead: "提前5小时预定", edible: "8-12人食", spec: "3磅", price: "458.00"},
						],
						num:1,
						idx:0
				}
			]
		}
	},
	getters:{
		allInfo(state){
			let allCheck = true
			let allPrice = 0
			state.cartList.forEach(item=>{
				if(!item.ischeck){
					allCheck = false
				}
				if(item.ischeck){
					allPrice += item.list[item.idx].price * item.num
				}
			})
			return {allCheck,allPrice}
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
			},
			cartListCheckMut(state,{cartIdx,dropIdx,num}){
				state.cartList[cartIdx].idx = dropIdx
				state.cartList[cartIdx].num = num
			},
			cartAddMut(state,goodObj){
				// goodObj.ischeck = false
				// goodObj.num = 1
				// goodObj.idx = 0
				Vue.set(goodObj,'ischeck',true)
				Vue.set(goodObj,'num',1)
				Vue.set(goodObj,'idx',0)
				state.cartList.push(goodObj)
			}
			
	}
}
