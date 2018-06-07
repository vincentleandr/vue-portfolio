<template>
    <div>
        <header class="header-container">
			<div :class="['header-name', {'white' : menuActive}]" @click="menuActive = false">
				<router-link class="header-name__text" :to="{ name: 'Home' }">vin</router-link>
			</div>

			<div :class="['burger-menu', {'active' : menuActive}]" 
				@click="menuActive = !menuActive">
				<div class="bar bar--1"></div>
				<div class="bar bar--2"></div>
				<div class="bar bar--3"></div>
			</div>
		</header>

        <!-- Menu -->
        <div :class="['menu-overlay d-flex a-center', {'active' : menuActive}]">
            <div class="menu d-flex-col">
                <nav class="menu-nav">
                    <ul class="d-flex-col">
                        <li @click="menuActive = false">
                            <router-link class="menu-nav__option" to="/work">Work</router-link>
                        </li>
                        <li @click="menuActive = false">
                            <router-link class="menu-nav__option" to="/about">About</router-link>
                        </li>
                        <li @click="menuActive = false">
                            <router-link class="menu-nav__option" to="/Contact">Contact</router-link>
                        </li>
                    </ul>
                </nav>
                
            </div>
            <div class="menu-social d-flex j-end">
                <a class="menu-social__option" href=""><i class="fa fa-at"></i></a>
                <a class="menu-social__option" href=""><i class="fa fa-github"></i></a>
                <a class="menu-social__option" href=""><i class="fa fa-linkedin"></i></a>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      menuActive: false
    }
  }
}
</script>
