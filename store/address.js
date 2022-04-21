import {$post,$get} from '../utils/request.js'
export default {
	namespaced:true,
	state(){
		return {
			checkedIdx:-1,
			addressList:[
				// {
				// 	username:'王炸',
				// 	phone:'13017176666',
				// 	city:'长沙',
				// 	region:'湘江世纪城',
				// 	detail:'鸿江苑',
				// 	isdefault:true,
				// },
				// {
				// 	username:'梅栾勇',
				// 	phone:'13088886666',
				// 	city:'长沙',
				// 	region:'湘江世纪城',
				// 	detail:'瑞江苑',
				// 	isdefault:false,
				// }
			]
		}
	},
	getters:{
		orderAddress(state){
			let {checkedIdx,addressList} = state
			if(checkedIdx!=-1){
				return addressList[checkedIdx]
			}
			let len = addressList.length
			for(let i = 0;i < len; i++){
				if(addressList[i].isdefault){
					return addressList[i]
				}
			}
		}
	},
	mutations:{
		addressDefaultMut(state,idx){
			state.addressList.forEach((item,i)=>{
				if(i==idx){
					item.isdefault = true
				}else{
					item.isdefault = false
				}
			})
		},
		addressCheckMut(state,idx){
			state.checkedIdx = idx
			uni.navigateBack({
				delta:1
			})
		},
		addressAddMut(state,addressObj){ 
			state.addressList.push(addressObj)
		},
		addressInitMut(state,addressArr){
			state.addressList = addressArr
		}
	},
	actions:{
		addressAddAct(context,addressObj){
			$post('/1.1/classes/address',addressObj).then(({objectId})=>{
				// console.log(res);
				context.commit('addressAddMut',{
					...addressObj,
					objectId
				})
				uni.navigateBack({
					delta:1
				})
			})
		},
		addressInitAct(context,userid){
					let url = `/1.1/classes/address?where={"userid":"${userid}"}`
					$get(url).then(({results})=>{
						console.log(results);
						context.commit('addressInitMut',results)
					})
				}
	}
}