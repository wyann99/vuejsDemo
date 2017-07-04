<template>
	<header class="header">
		<div id="logo">{{logo}}</div>
		<ul class="nav">
			<li v-for="nav in navs">{{nav.li}}</li>
		</ul>
	</header>
</template>

<style scoped>
    .header ul li {
        float: left;
        margin-right: 20px;
    }
</style>

<script>
export default {
  name: 'HomeHeader',
  data () {
      return {
        navs: [
          {li: '主页'},
          {li: '日志'},
          {li: '说说'},
          {li: '主页'},
          {li: '相册'}
      ]
    }
  },
  props: ['logo']
}

</script>
