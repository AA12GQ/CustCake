<template>
	<view>
		<map class="map"></map>
		<view class="cu-form-group margin-top">
			<view class="cuIcon-friendfill padding-right-sm"></view>
			<input  placeholder="请输入姓名" name="input"></input>
		</view>
		<view class="cu-form-group">
			<view class="cuIcon-mobilefill padding-right-sm"></view>
			<input  placeholder="请输入电话" name="input"></input>
		</view>
		<view class="cu-form-group">
			<view class="cuIcon-locationfill padding-right-sm"></view>
			<picker>
				<view class="picker">
					请选择区域
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="cuIcon-locationfill padding-right-sm"></view>
			<input placeholder="请输入详细地址" name="input"></input>
		</view>
		<view class="padding">
			<button class="cu-btn bg-yellow block">提交</button>
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
.map{
	width: 100%;
	height: 400upx;
}
.cu-form-group uni-picker .picker {
    text-align: left;
}
.cu-form-group uni-picker::after {
    position: absolute;
    left: -175px;
}
</style>
