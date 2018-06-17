<template>
	<div class="container">
    <!--
    <div class="skewed-bg"></div> -->
    <div class="circle-bg"></div>

    <Header />

    <router-view></router-view>
		
	</div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    'Header': Header
  },
  data () {
    return {
      
    }
  }
}
</script>