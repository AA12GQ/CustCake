<template>
	<view>
		<view class="flex padding" v-for="(item,index) in cartList">
			<view class="flex align-center">
				<text 
				class="iconfont icon-gouxuan margin-right"
				:class="item.ischeck ? 'color-yellow' : ''"
				@click="handleCheck(index)"
				>
				</text>
				<image class="poster margin-right" :src="item.img" mode=""></image>
			</view>
			<view class="flex justify-between info">
				<view class="fs-28">
					{{item.name}}
					<view class="margin-tb-xs">{{item.french}}</view>
					￥{{item.list[item.idx].price}}
				</view>
				<view class="flex flex-direction align-end">
					<view @click="handleEdit(index)" class="edit margin-bottom-xs">
						<text class="iconfont icon-bianji"></text>
					</view>
					{{item.list[item.idx].spec}}
					 x 
					 {{item.num}}
				</view>
			</view>
		</view>
		<!-- 弹窗 -->
		<u-overlay :show="show" @click="show = false">
				<view class="bg-fff margin cover-pop" @click.stop>
					<view class="padding">
						<view class="flex justify-between info">
							<image class="poster margin-right" src="" mode=""></image>
							<view class="">
								{{cartList[cartIdx].name}}
								<view class="margin-tb-xs">{{cartList[cartIdx].french}}</view>
								￥{{checkCartInfo.price}}
							</view>
						</view>
						<view class="flex justify-between padding-tb u-border-bottom">
							<view class="">
								规格选择
							</view>
							<view class="drop">
								<view class="" @click="dropShow=!dropShow">
									{{checkCartInfo.spec}} 
									-
									{{checkCartInfo.edible}}
									<text class="iconfont icon-xiala margin-left-sm"></text>
								</view>
								<view class="drop-list bg-fff" v-if="dropShow">
									<view 
									v-for="(item,index) in cartList[cartIdx].list" 
									class="padding"
									@click="handleDropList(index)"
									>
										{{item.spec}} - {{item.edible}}
									</view>
								</view>
							</view>
						</view>
						<view class="flex justify-between padding-tb-sm align-center u-border-bottom">
							<view class="">
								数量选择
							</view>
							<u-number-box 
							    button-size="36"
								@change="handleNum"
							></u-number-box>
						</view>
						<view class="flex margin-top">
							<button type="default" class="cu-btn lg bg-brown" @click="show = false">取消</button>
							<button type="default" class="cu-btn lg bg-yellow" @click="handleOk">确认</button>
						</view>
					</view>
				</view>
		</u-overlay>
		<view class="fixed bg-fff flex">
			<view class="flex-sub flex padding align-center">
				<text 
				class="iconfont icon-gouxuan margin-right-xs"
				:class="allInfo.allCheck ? 'color-yellow' : ''"
				@click="handleAllCheck(allInfo.allCheck)"
				></text>
				全选
				<view class="margin-left">
					共计：{{allInfo.allPrice}}
				</view>
			</view>
			<view class="bg-yellow padding text-center color-fff">
				立即结算
			</view>
		</view>
	</view>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
	export default {
		data() {
			return {
				show:false,
				dropShow:false,
				cartIdx:0,
				dropIdx:0,
				num:1
			}
		},
		computed:{
			...mapState({
				cartList:state=>state.cart.cartList
			}),
			...mapGetters({
				allInfo:'cart/allInfo'
			}),
			checkCartInfo(){
				let { cartIdx,cartList,dropIdx} = this
				return cartList[cartIdx].list[dropIdx]
			}
		},
		methods: {
			...mapMutations({
				handleCheck:'cart/cartCheckMut',
				handleAllCheck:'cart/cartAllCheckMut',
			}),
			handleEdit(idx){
				this.cartIdx = idx
				this.dropIdx = this.cartList[idx].idx
				this.show = !this.show
			},
			handleDropList(dropIdx){
				this.dropShow = false
				this.dropIdx = dropIdx
			},
			handleOk(){
				this.show = false
				let {cartIdx,dropIdx,num} = this
				console.log(cartIdx,dropIdx,num);
				this.$store.commit('cart/cartListCheckMut',{cartIdx,dropIdx,num})
			},
			handleNum({value}){
				console.log(value);
			}
		}
	}
</script>

<style lang="scss">
page{
	padding-bottom: 100upx;
}	
.poster{
	width: 180upx;
	height: 180upx;
	background-color: gray;
}
.info{
	width: 60%;
	.edit{
		width: 80upx;
		height:80upx;
		text-align: center;
		line-height: 80upx;
		background-color: #e6e6e6;
		border-radius: 50%;
	}
}
.flex.align-end{
	min-width: 210upx;
}
.icon-gouxuan{
	color: #e7e7e7;
}
.fixed{
	position: fixed;
	bottom: 0;
	width: 100%;
}
.cu-btn {
	width: 50%;
}
.cover-pop{
	position: absolute;
	top:25%;
	left: 0;
	width: 690upx;
	border-radius: 15supx;
}	
.drop{
	position: relative;
	.drop-list{
		width: 300upx;
		position: absolute;
		top: 60upx;
		right: 0;
		box-shadow: 0 0 10upx 2upx rgba(0,0,0,0.2);
		z-index: 2;
		view:hover{
			background-color: #e6e6e6;
		}
	}
}

</style>
