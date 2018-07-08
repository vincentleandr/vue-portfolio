<template>
    <div>
        <header class="header-container">
			<div :class="['header-name d-flex j-center a-center', {'header-name--white' : menuActive}]" @click="menuActive = false">
				<router-link class="header-name__text" :to="{ name: 'Home' }">Vin<span style="color: #FFE349;">.</span></router-link>
			</div>

			<div :class="['burger-menu d-flex d-flex--col j-center a-end', {'burger-menu--change' : menuActive}]" 
				@click="menuActive = !menuActive">
				<div class="bar bar--1"></div>
				<div class="bar bar--2"></div>
			</div>
		</header>

        <!-- Menu -->
        <div :class="['menu-overlay d-flex a-center', {'menu-overlay--active' : menuActive}]">
            <div class="menu d-flex-col">
                <nav class="menu-nav">
                    <ul class="d-flex-col">
                        <li :class="[{'animated fadeIn' : menuActive}]" @click="menuActive = false">
                            <router-link class="menu-nav__option" to="/work">Work</router-link>
                        </li>
                        <li :class="[{'animated fadeIn' : menuActive}]" @click="menuActive = false">
                            <router-link class="menu-nav__option" to="/about">About</router-link>
                        </li>
                        <li :class="[{'animated fadeIn' : menuActive}]" @click="menuActive = false">
                            <router-link class="menu-nav__option" to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </nav>
                
            </div>
            <div class="menu-social d-flex j-center">
                <a :class="['menu-social__option', {'animated fadeInUp' : menuActive}]" href="mailto:vincentleander@yahoo.com"><i class="fa fa-at"></i></a>
                <a :class="['menu-social__option', {'animated fadeInUp' : menuActive}]" href="https://github.com/vincentleandr" target="_blank"><i class="fa fa-github"></i></a>
                <a :class="['menu-social__option', {'animated fadeInUp' : menuActive}]" href="https://www.linkedin.com/in/vincent-leander" target="_blank"><i class="fa fa-linkedin"></i></a>
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
