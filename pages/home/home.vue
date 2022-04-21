<template>
	<scroll-view scroll-with-animation :scroll-into-view="topItem" class="scroll-cont" scroll-y="true" @scroll="handelScroll">
		<view>
			<view id="top"></view>
			<nav-custom></nav-custom>
			<swiper class="banner" :indicator-dots="true" :autoplay="true" indicator-active-color="#ffe32a">
				<swiper-item v-for="(item,index) in banner" >
					<view class="swiper-item" @click="handelBanner(item.link)">
						<image :src="item.img" mode="" ></image>
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
			<view class="back-top" v-if="isShow" @click="handelBackUp">
				<text class="iconfont icon-tubiao_fanhuidingbu"></text>
			</view>
		</view>
		<tab-custom></tab-custom>
	</scroll-view>
</template>

<script>
import {$http}  from '../../utils/request.js'
	export default {
		data() {
			return {
			isShow : false,
			topItem:'',
			banner:[]
			}
		},
		methods: {
			handelScroll(ev){
				// console.log(ev)
				let {scrollTop} = ev.detail
				this.isShow = scrollTop>500
				this.topItem = ''
			},
			handelBackUp(){
				this.topItem = 'top'
			},
			handelBanner(link){
				uni.navigateTo({
					url:`./banner1-ad?link=${link}`
				})
			},
			onLoad(){
				// $http('/1.1/classes/classify').then(res=>{
				// 	console.log(res)
				// })
				this.$get('/1.1/classes/banner').then(res=>{
					console.log(res);
					this.banner = res.results
				})
			}
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
.back-top{
	width:100upx;
	height: 100upx;
	background-color: #fff;
	border-radius: 50%;
	box-shadow: 0 0 30upx 4upx rgba(0,0,0,0.4);
	position: fixed;
	bottom: 40upx;
	right: 20upx;
	text-align: center;
	line-height: 100upx;
}
.scroll-cont{
	height: 100vh;
	
}
</style>