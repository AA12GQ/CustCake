<template>
	<view>
		<view class="count"></view>
		<view class="margin bg-fff" @click="handleUser">
			<view class="text-center">
				<image class="avatar" src="../../static/logo.png" mode=""></image>
			</view>
			<view class="text-xl text-center">
				{{userName}}
			</view>
			<view class="flex grid col-4 text-df">
				<view v-for="(item,index) in gridArr" class="flex flex-direction align-center margin-bottom">
					<text :class="['iconfont margin-bottom-xs', item.icon]"></text>
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				  gridArr : [
					{
						icon:'icon-danju',
						name:"我的订单"
					},
					{
						icon:'icon-ziliaoshouce',
						name:"代付款"
					},
					{
						icon:'icon-weizhi',
						name:"待收货"
					},
					{
						icon:'icon-vip-fill',
						name:"会员等级"
					},
					{
						icon:'icon-jifen',
						name:"积分"
					},
					{
						icon:'icon-caiwu',
						name:"余额"
					},
					{
						icon:'icon-youhuijuan',
						name:"红包/优惠卷"
					},
					{
						icon:'icon-yinhangqia',
						name:"现金卡"
					}
				]
			}
		},
		computed: {
			userName() {
				let {userInfo} = this.$store.state.user
				let name = userInfo ? userInfo.username : '未登录'
				return name
			}
		},
		methods: {
			handleUser(){
				uni.navigateTo({
					url:'../user/login'
				})
			}
		}
	}
</script>

<style lang="scss">
.count{
	background-color: #F6f6f6;
	height: 400upx;
}
.grid .iconfont{
	font-size: 60upx;
	color: #888;
}
.avatar{
	width: 150upx;
	height: 150upx;
	border-radius: 50%;
	margin-top: -75upx;
}
.margin.bg-fff{
	margin-top: -200upx;
}
</style>
