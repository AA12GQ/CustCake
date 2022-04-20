<template>
	<view>
		<view class="u-border padding margin-sm default" v-for="(item,index) in 3">
			<view class="default-count">
				默
			</view>
			<view class="flex justify-between align-center">
				<view class="flex align-center">
					<text class="iconfont icon-gouxuan margin-right"></text>
					<view class="">
						王炸 166666666
						<view class="">
							长沙市 河州镇 中心幼儿园
						</view>
					</view>
				</view>
				<view @click="handleEdit(index)" class="edit margin-bottom-xs">
					<text class="iconfont icon-bianji"></text>
				</view>
			</view>
			<view class="flex justify-around margin-top">
				<view class="">
					设为默认
				</view>
				<u-line length="15" direction="col"></u-line>
				<view class="">
					删除地址
				</view>
			</view>
		</view>
		<view class="text-center">
			<button type="cu-btn bg-brown">新增地址</button>
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

<style>
.edit{
		width: 80upx;
		height:80upx;
		text-align: center;
		line-height: 80upx;
		background-color: #e6e6e6;
		border-radius: 50%;
	}
.default{
	position: relative;
	overflow: hidden;
}	
.default-count{
	width: 100upx;
	padding: 40upx 10upx 10upx;
	background-color: #FAE456;
	font-size: 12upx;
	text-align: center;
	position: absolute;
	top: -30upx;
	right: -40upx;
	transform: rotate(45deg);
}
</style>
