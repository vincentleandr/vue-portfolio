<template>
    <div class="main-content d-flex d-flex--col animated fadeIn">
        <parallax-container :class="['about-page d-flex j-sp-between', {'d-flex--col' : window.width <= 1200}]">
            <parallax-element class="about-page__section--fw d-flex d-flex--col" :parallaxStrength="-15" :type="'translation'" v-if="window.width <= 1200">
                <img class="about-page__img" src="../assets/images/self-pic-1.jpg" alt="Who I Am">
            </parallax-element>
            
            <div :class="['about-page__section d-flex d-flex--col', {'about-page__section--fw' : window.width <= 1200}]">
                <h2 class="about-page__title">Who I Am</h2>
                <p>My name is Vincent Leander. I'm a passionate and ambitious learner. One of my major passion has always been on web development.</p>
                <p>It all started two years ago. I started as an intern and I was introduced to web development. I fell in love with it pretty quick and decided to make it into a career.</p>
                <p></p>
            </div>

            <parallax-element class="about-page__section d-flex d-flex--col" :parallaxStrength="-15" :type="'translation'" v-if="window.width > 1200">
                <img class="about-page__img" src="../assets/images/self-pic-1.jpg" alt="Who I Am">
            </parallax-element>
        </parallax-container>

        <parallax-container :class="['about-page d-flex j-sp-between', {'d-flex--col' : window.width <= 1200}]">
            <parallax-element :class="['about-page__section d-flex d-flex--col', {'about-page__section--fw' : window.width <= 1200}]" :parallaxStrength="-15" :type="'translation'">
                <img class="about-page__img" src="../assets/images/typing.jpg" alt="What I Do">
            </parallax-element>
            <div :class="['about-page__section d-flex d-flex--col', {'about-page__section--fw' : window.width <= 1200}]">
                <h2 class="about-page__title">What I Do</h2>
                <p>I prefer simplicity and minimalism when building/designing websites. However, I like to make it interactive. I believe this can make a major impact on an even a simple website to look more sophisticated and attractive to users.</p>
                <p>I'm also a true admirer of great user experience. I always do some research before starting and I always consider the best flow and way for a website and for all the user interfaces.</p>
            </div>
        </parallax-container>

        <div class="about-page d-flex d-flex--col">
            <h2 class="about-page__title">Skill Sets</h2>

            <div :class="['d-flex j-sp-between', {'d-flex--col' : window.width <= 1200}]">
                <div :class="['about-page__section d-flex d-flex--col', {'about-page__section--fw' : window.width <= 1200}]">
                    <p>Along the way, I've been learning great deal of things related to web development. To help me learning, I like to apply them to the project I'm working on.</p>
                    <p>When starting a new project, when necessary, I usually pick either React or Vue for the framework. As for styling, most of the time I use Sass with BEM method.</p>
                </div>

                <div :class="['about-page__section d-flex j-sp-between f-wrap', {'about-page__section--fw' : window.width <= 1200}]">
                    <div class="about-page__list d-flex d-flex--col">
                        <span class="label">Basic</span>
                        <ul class="project-details__list">
                            <li>Html</li>
                            <li>Css</li>
                            <li>Javascript</li>
                            <li>Jquery</li>
                        </ul>
                    </div>
                    <div class="about-page__list d-flex d-flex--col">
                        <span class="label">Styling</span>
                        <ul class="project-details__list">
                            <li>Sass</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div class="about-page__list d-flex d-flex--col">
                        <span class="label">Framework</span>
                        <ul class="project-details__list">
                            <li>React.js</li>
                            <li>Vue.js</li>
                        </ul>
                    </div>
                    <div class="about-page__list d-flex d-flex--col">
                        <span class="label">Others</span>
                        <ul class="project-details__list">
                            <li>Git</li>
                            <li>Webpack</li>
                            <li>Gulp.js</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
  name: 'About',
  data () {
    return {
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  }
}
</script>
