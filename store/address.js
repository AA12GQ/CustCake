export default {
	namespaced:true,
	state(){
		return {
			addressList:[
				{
					username:'王炸',
					phone:'13017176666',
					city:'长沙',
					region:'湘江世纪城',
					detail:'鸿江苑',
					isdefault:true,
				},
				{
					username:'梅栾勇',
					phone:'13088886666',
					city:'长沙',
					region:'湘江世纪城',
					detail:'瑞江苑',
					isdefault:false,
				}
			]
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
		}
	}
}