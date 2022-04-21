<template>
	<view>
		<map class="map"></map>
		<form @submit="handleSubmit">
		<view class="cu-form-group margin-top">
			<view class="cuIcon-friendfill padding-right-sm"></view>
			<input name="username" value="王炸"  placeholder="请输入姓名"></input>
		</view>
		<view class="cu-form-group">
			<view class="cuIcon-mobilefill padding-right-sm"></view>
			<input name="phone" value="13017173106" placeholder="请输入电话" ></input>
		</view>
		<view class="cu-form-group">
			<view class="cuIcon-locationfill padding-right-sm"></view>
			<picker  :range="regionArr" @change="handleRegion">
				<view class="picker">
					{{regionIdx==-1?'请选择区域':regionArr[regionIdx]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="cuIcon-locationfill padding-right-sm"></view>
			<input name="detail" value="雨花区" placeholder="请输入详细地址" ></input>
		</view>
		<view class="padding">
			<button form-type="submit" class="cu-btn bg-yellow block">提交</button>
		</view>
		</form>
	</view>
</template>

<script>
import {mapState} from 'vuex'
	export default {
		data() {
			return {
				regionArr:[
					'阿giao区',
					'西八区',
					'王炸区'
				],
				regionIdx:-1
			}
		},
		computed:{
			...mapState({
				userInfo:state=>state.user.userInfo
			})
		},
		methods: {
			handleRegion(ev){
				console.log(ev);
				let {value} = ev.detail
				this.regionIdx = value
			},
			handleSubmit(ev){
				// console.log(11111);
				let {value} = ev.detail
				let {regionArr,regionIdx} = this
				value.city = '重庆市'
				value.isdefault = false
				value.userid = this.userInfo.objectId
				value.region = regionArr[regionIdx]
				this.$store.dispatch('address/addressAddAct',value)
			}
		}
	}
</script>

<style>
.map{
	width: 100%;
	height: 400upx;
}
.cu-form-group uni-picker .picker {
    text-align: left;
}
/* .cu-form-group uni-picker::after {
    position: absolute;
    left: -230px;
} */
</style>
