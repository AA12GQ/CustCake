<template>
	<view>
		<nav-custom></nav-custom>
		<swiper class="banner" :indicator-dots="true" :autoplay="true" indicator-active-color="#ffe32a">
			<swiper-item v-for="(item,index) in 2">
				<view class="swiper-item">
					<image src="../../static/img/banner01.jpg" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<home-title
		title="本季推荐"
		en-title="Seasonal Recommend"
		en-tit="Seasonal"
		>
		</home-title>
		<scroll-view scroll-x="true" >
			<view class="scroll-inner">
				<image src="../../static/img/recommend01.jpg" mode="heightFix"></image>
				<image src="../../static/img/recommend02.jpg" mode="heightFix"></image>
				<image src="../../static/img/recommend03.jpg" mode="heightFix"></image>
			</view>
		</scroll-view>
		<home-title
		title="法式经典"
		en-title="French Classics"
		en-tit="French"
		>
		</home-title>
		<image class="classify" src="../../static/img/classify.jpg" mode=""></image>
		<view class="flex flex-wrap justify-between padding-sm">
			<good-item v-for="(item,index) in 4"></good-item>
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
	.banner{
		height: 1000upx;
		swiper-item{
			width: 100%;
			height: 1000upx;
		}
		image{
			width: 100%;
			height: 1000upx;
		}
		
	}
.scroll-inner{
	white-space: nowrap;
		iamge{
			height: 290upx;
			width: auto;
		}
	}
.classify{
	height: 380upx;
	width:  100%;
}	
</style>