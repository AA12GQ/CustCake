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
					￥{{item.price}}
				</view>
				<view class="flex flex-direction align-end">
					<view @click="show=true" class="edit margin-bottom-xs">
						<text class="iconfont icon-bianji"></text>
					</view>
					1磅(454g) x 1
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
								草莓蛋糕
								<view class="margin-tb-xs">CaoMei</view>
								￥199
							</view>
						</view>
						<view class="flex justify-between padding-tb u-border-bottom">
							<view class="">
								规格选择
							</view>
							<view class="">
								下拉菜单
							</view>
						</view>
						<view class="flex justify-between padding-tb-sm align-center u-border-bottom">
							<view class="">
								数量选择
							</view>
							<u-number-box 
							    button-size="36"
							></u-number-box>
						</view>
						<view class="flex margin-top">
							<button type="default" class="cu-btn lg bg-brown">取消</button>
							<button type="default" class="cu-btn lg bg-yellow">确认</button>
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
					共计：189
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
				show:true
			}
		},
		computed:{
			...mapState({
				cartList:state=>state.cart.cartList
			}),
			...mapGetters({
				allInfo:'cart/allInfo'
			})
		},
		methods: {
			...mapMutations({
				handleCheck:'cart/cartCheckMut',
				handleAllCheck:'cart/cartAllCheckMut',
			})
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
}
</style>
