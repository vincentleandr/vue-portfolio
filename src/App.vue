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

		<div :class="['menu-overlay d-flex a-center', {'active' : menuActive}]">
			<div class="menu d-flex-col">
				<nav class="menu-nav">
					<ul class="d-flex-col">
						<li><a class="menu-nav__option" href="">Work</a></li>
						<li><a class="menu-nav__option" href="">About</a></li>
						<li><a class="menu-nav__option" href="">Contact</a></li>
					</ul>
				</nav>
				
			</div>
			<div class="menu-social d-flex j-end">
				<a class="menu-social__option" href="">vincentleander@yahoo.com</a>
				<a class="menu-social__option" href="">Github</a>
				<a class="menu-social__option" href="">LinkedIn</a>
			</div>
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