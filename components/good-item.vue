<template>
	<view class="cake-item">
			<view>
				<image :src="gdata.img" mode=""></image>
			</view>
			<view class="info-cont">
				<view class="info flex align-center justify-between ">
					<view class="">
						<view class="fs-28">
							{{gdata.name}}
						</view>
						<view class="fs-16">
							{{gdata.french}}
						</view>
					</view>
					<view class="cart-btn margin-right-sm">
						<text class="iconfont icon-gouwuche"></text>
					</view>
				</view>
					<view class="fs-18">
						<text class="fs-14">￥</text>
						{{gdata.price}}
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"good-item",
		props:['gdata'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
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
	.cart-btn{
		width:60upx;
		height: 60upx;
		border-radius: 50%;
		background-color: #ffe32a;
		text-align: center;
		line-height: 60upx;
	}
}
</style>
