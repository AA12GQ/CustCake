<template>
	<view>
		<view class="count">
			<view class="cake-item" v-for="(item,index) in 8">
				<view class="poster">
					
				</view>
				<view class="info-cont">
					<view class="info">
						<view class="fs-28">
							草莓蛋糕
						</view>
						<view class="fs-16">
							CaoMei DanGao
						</view>
						<view class="fs-18">
							<text class="fs-14">￥</text>
							218.00
						</view>
					</view>
					<view class="cart-btn">
						
					</view>
				</view>
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
</style>
