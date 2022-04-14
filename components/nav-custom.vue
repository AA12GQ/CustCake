<template>
	<view>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-locationfill text-gray"></text> 长沙
			</view>
			<view class="content text-bold">
				MCAKE
			</view>
			<view class="action text-grey">
				<text class="cuIcon-search "></text>
				<u-line direction="col" margin="0px 10px" length="15"></u-line>
				<text class="cuIcon-sort"></text>
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
.cu-bar{
	position: fixed;
	top: 0;
	left:0;
	width: 100%;
	z-index: 2;
}
</style>