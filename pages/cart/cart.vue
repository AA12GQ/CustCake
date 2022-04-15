<template>
	<view>
		<view class="flex padding" v-for="(item,index) in 6">
			<view class="flex align-center">
				<text class="iconfont icon-gouxuan margin-right"></text>
				<image class="poster margin-right" src="" mode=""></image>
			</view>
			<view class="flex justify-between info">
				<view class="fs-28">
					草莓蛋糕
					<view class="margin-tb-xs">CaoMei</view>
					￥147.0
				</view>
				<view class="flex flex-direction align-end">
					<view class="edit margin-bottom-xs">
						<text class="iconfont icon-bianji"></text>
					</view>
					1磅(454g) x 1
				</view>
			</view>
		</view>
		<view class="fixed bg-fff flex">
			<view class="flex-sub flex padding align-center">
				<text class="iconfont icon-gouxuan margin-right-xs"></text>
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
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
.fixed{
	position: fixed;
	bottom: 0;
	width: 100%;
}
</style>
