<template>
	<view class="padding flex justify-between align-center margin-tb-sm">
		<view class="flex align-center">
			<text class="iconfont icon-canju text-grey margin-right"></text>
			<view class="">
				{{title}}
				<view>{{enTitle}}</view>
			</view>
		</view>
		<view class="">
			{{enTit}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"home-title",
		props:['title','enTitle','enTit'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.icon-canju{
	font-size: 65upx;
}
</style>
