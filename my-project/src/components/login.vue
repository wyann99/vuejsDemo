<template>
	<section>
		<div class="login">
			<label>
				<span>用户名：</span>
				<input v-model="username" @change="setUser">
			</label>
		</div>
	</section>
</template>

<script>
	export default{
		name: 'Login',
		data () {
			return {
				username: ''
			}
		},
		methods: {
			setUser: function () {
				this.$emit('transferUser', this.username)
			}
		}
	}
	/* 在 setUser 中，使用了 $emit 来遍历 transferUser 事件，并返回 this.username */
	/* 其中 transferUser 是一个自定义的事件，功能类似于一个中转，this.username 将通过这个事件传递给父组件  */
</script>
