<template>
	<div>
		<header class="header-container">
			<div :class="['header-name', {'white' : menuActive}]">
				<span class="header-name__text">vl</span>
			</div>

			<div :class="['burger-menu', {'active' : menuActive}]" 
				@click="menuActive = !menuActive">
				<div class="bar bar--1"></div>
				<div class="bar bar--2"></div>
				<div class="bar bar--3"></div>
			</div>
		</header>
		<section class="main-content main-content--fullpage d-flex a-center">
			<div class="d-flex-col">
				<span class="home-text-small">Hello, I'm</span>
				<h1 class="home-text-big">Vincent Leander</h1>
			</div>
			
		</section>

		<div :class="['menu-overlay d-flex j-center a-center', {'active' : menuActive}]">
			<h2>Menu</h2>
		</div>
	</div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      menuActive: false
    }
  }
}
</script>