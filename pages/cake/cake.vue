<template>
	<view>
		<nav-custom></nav-custom>
		<view class="count" >
			<good-item v-for="(item,index) in glist" :gdata="item"></good-item>
			<view class="fixed flex bg-fff justify-around padding-sm">
				<view v-for="(item,index) in tabArr" :key="index" @click="handleTab(item)"  class="flex align-center ">
					<view class="">
						{{item.name}}
					</view>
					<u-line v-if="index<tabArr.length-1" direction="col" length="15" margin="30upx"></u-line>
				</view>
			</view>
		</view>
		<u-popup :show="show" mode="left"  @close="handleClose" >
		        <view class="pop-cont" >
		            <view v-for="(item,index) in cfylist" class="padding-sm u-border-bottom">
		            	{{item.bname}}
						<view class="cu-tag round bg-yellow color-fff margin-left-xs">
							{{item.num}}
						</view>
						<view v-if="index==0">
							<view @click="listShow=!listShow" class="padding-tb-sm margin-top  u-border-top">
								口味筛选	
							</view>
							<u-cell-group v-if="listShow">
									<u-cell @click="handleList(itm,1)" v-for="(itm,idx) in item.list" :title="itm.tname" isLink ></u-cell>
							</u-cell-group>
							<view @click="sceneShow=!sceneShow" class="padding-tb-sm">
								场景筛选
							</view>
							<u-cell-group v-if="sceneShow">
									<u-cell @click="handleList(itm,1)" v-for="(itm,idx) in item.scene" :title="itm.tname" isLink ></u-cell>
							</u-cell-group>
						</view>
		            </view>
		        </view>
			</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				glist:[],
				page:0,
				tabArr:[
					{name:'分类',bcid:'',target:''},
					{name:'蛋糕',bcid:'1',target:'/pages/cake'},
					{name:'面包',bcid:'11',target:'/pages/bread'},
					{name:'小食',bcid:'6',target:'/pages/food/food'},
					{name:'购物车',bcid:'',target:'/pages/cart/cart'},
				],
				// bcid:1,
				// condition:{
				// 	bcid:1
				// },
				show: false,
				cfylist:[],
				listShow:false,
				sceneShow:false
			}
		},
		computed:{
			num(){
				return this.$store.state.count.num
			},
			condition(){
				return this.$store.state.condition.condition
			}
		},
		methods: {
			handleDetail(idx){
				uni.navigateTo({
					url:'../detail/detail?idx='+idx,
					
				})
				console.log(idx)
			},
			onLoad(){
				this.loadData()
				// this.$get('/1.1/classes/goods').then(res=>{
				// 				console.log(res);
				// 				this.glist = res.results
				// 			})
				this.$get('/1.1/classes/classify').then(res=>{
					console.log(res)
					this.cfylist = res.results.slice(0,4)
				})
			},
			onPullDownRefresh() {
						this.glist = []
						this.page = 0
						this.loadData()
					},
			onReachBottom() {
						this.loadData()
					},
			loadData(){
				let skip = this.page * 8
				let wh = JSON.stringify(this.condition)
				let url = `/1.1/classes/goods?where=${wh}&limit=8&skip=${skip}`
				this.$get(url).then(res=>{
					uni.stopPullDownRefresh()
					let {results} = res
					console.log("11",res)
					if(results.length){
						this.page++
						this.glist = [
							...this.glist,
							...res.results
						]
					}else{
						uni.showToast({
							title:'这回真没了',
							icon:'none'
						})
					}
					
				})
			},
			reloadData(){
				this.glist = []
				this.page = 0
				this.loadData()
			},
			handleTab(item){
				let {bcid,target} = item
				if(bcid){
					// this.condition.bcid = Number(bcid)
					this.$store.commit('setCondition',{
						bcid:Number(bcid)
					})
					this.reloadData()
				}
				if(!bcid&&!target){
					this.show = true
				}
			},
			handleClose(){
				this.show = false
			},
			handleList({bid,tid},type){
				let obj = {bcid:bid}
				type === 1 ? obj.fid=tid : obj.sid=tid
				this.$store.commit('setCondition',obj)
				this.reloadData()
				this.show = false
			}
		}
	}
</script>

<style lang="scss">
page{
	padding:100upx 0 120upx;
}
.count{
	display: flex;
	flex-wrap: wrap;
	padding: 15upx;
	justify-content: space-between;
}
.cake-item{
	width: 350upx;
	.poster{
		height: 350upx;
		background-color: #f5f5f5;
	}
	.fs-28{
		margin-top: 26upx;
	}
	.fs-16{
		margin:14upx 0;
	}
	.fs-14{
		margin-bottom: 22upx;
	}
}
.fixed{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	box-shadow: 0 0 10upx 2upx rgba(0,0,0,0.2);
}
.pop-cont{
	width: 400upx;
	margin-top: 200upx;
}
</style>
