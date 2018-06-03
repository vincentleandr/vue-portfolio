<template>
	<div>
		<header class="header-container d-flex j-sp-between a-center">
			<div class="header-name">
				<span class="header-name-text">vin</span>
			</div>

			<div class="burger-menu">
				<div class="bar bar__1"></div>
				<div class="bar bar__2"></div>
				<div class="bar bar__3"></div>
			</div>
		</header>
		<section class="main-content main-content__fullpage d-flex a-center">
			<div class="d-flex-col">
				<span class="home-text-small">Hi, I'm</span>
				<h1 class="home-name-text-big">Vincent Leander</h1>
			</div>
			
		</section>
	</div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>