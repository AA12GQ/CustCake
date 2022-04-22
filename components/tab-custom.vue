<template>
	<view>
		<view class="">
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
			            <view v-for="(item,index) in cfylist" @click="handleList(item,0)" class="padding-sm u-border-bottom">
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
	</view>
</template>

<script>
	export default {
		name:"tab-custom",
		data() {
			return {
				tabArr:[
					{name:'分类',bcid:'',target:''},
					{name:'蛋糕',bcid:'1',target:'/pages/cake/cake'},
					{name:'面包',bcid:'11',target:'/pages/bread/bread'},
					{name:'小食',bcid:'6',target:'/pages/food/food'},
					{name:'购物车',bcid:'',target:'/pages/cart/cart'},
				],
				show: false,
				cfylist:[],
				listShow:false,
				sceneShow:false
			};
		},
		created(){
			this.$get('/1.1/classes/classify').then(res=>{
				console.log(res);
				this.cfylist = res.results.slice(0,4)
			})
		},
		methods:{
			handleTab(item){
				let {bcid,target} = item
				if(bcid){
					// this.condition.bcid = Number(bcid)
					this.$store.commit('setCondition',{
						bcid:Number(bcid)
					})
				uni.navigateTo({
					url:target,
				})
				}
				if(!bcid&&!target){
					this.show = true
				}
				if(!bcid&&target){
					uni.navigateTo({
						url:target,
					})
				}
			},
			handleClose(){
				this.show = false
			},
			handleList({bid,tid},type){
				let obj = {bcid:bid}
				type === 1 ? obj.fid=tid : obj.sid=tid
				if(type===1){obj.fid=tid}
				if(type===2){obj.sid=tid}
				this.$store.commit('setCondition',obj)
				this.show = false
				uni.navigateTo({
					url:'/pages/cake/cake'
				})
			}
		}
	}
</script>

<style lang="scss">

.count{
	display: flex;
	flex-wrap: wrap;
	padding: 15upx;
	justify-content: space-between;
}
.pop-cont{
	width: 400upx;
	margin-top: 200upx;
}
</style>