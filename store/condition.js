export default {
	state(){
		return{
			condition:{
				bcid:1
			},
		}
	},
	mutations:{
		setCondition(state,payload){
			state.condition = payload
		}
	}
}