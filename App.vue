<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			try {
				const value = uni.getStorageSync('userInfo');
				console.log(111);
				if (value) {
					this.$store.commit('user/initInfo',value)
					this.$store.dispatch('address/addressInitAct',value.objectId)
				}
			} catch (e) {
				// error
				console.log('提取用户信息失败')
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
</style>
