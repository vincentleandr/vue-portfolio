<template>
	<div>

    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link to="/about">About</router-link>
		<router-view></router-view>

		
	</div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>