<template>
    <div class="main-content d-flex d-flex--col animated fadeIn">
        <div :class="['about-page d-flex j-sp-between a-center', {'d-flex--col' : window.width <= 1200}]">
            <div class="about-page__section--fw d-flex d-flex--col" v-if="window.width <= 1200">
                <img class="about-page__img" src="../assets/images/self-pic-1.jpg" alt="Who I Am">
            </div>
            
            <div :class="['about-page__section d-flex d-flex--col', {'about-page__section--fw' : window.width <= 1200}]">
                <h2 class="about-page__title">Who I Am</h2>
                <p>My name is Vincent Leander. I'm a passionate and ambitious learner. One of my major passion has always been on web development.</p>
                <p>It all started two years ago. I started as an intern and I was introduced to web development. I fell in love with it pretty quick and decided to make it into a career.</p>
            </div>

            <div class="about-page__section d-flex d-flex--col" v-if="window.width > 1200">
                <img class="about-page__img" src="../assets/images/self-pic-1.jpg" alt="Who I Am">
            </div>
        </div>

        <div :class="['about-page d-flex j-sp-between a-center', {'d-flex--col' : window.width <= 1200}]">
            <div :class="['about-page__section d-flex d-flex--col', {'about-page__section--fw' : window.width <= 1200}]">
                <img class="about-page__img" src="../assets/images/typing.jpg" alt="What I Do">
            </div>
            <div :class="['about-page__section d-flex d-flex--col', {'about-page__section--fw' : window.width <= 1200}]">
                <h2 class="about-page__title">What I Do</h2>
                <p>I prefer simplicity and minimalism when building/designing websites. However, I like to make it interactive. I believe this can make a major impact on even a simple website to look more sophisticated and attractive to users.</p>
                <p>I'm also a true admirer of great user experience. I make sure to do a little research before starting and I always consider the best flow and way for a website and for all the user interfaces.</p>
            </div>
        </div>

        <div class="about-page d-flex d-flex--col">
            <h2 class="about-page__title">Skill Sets</h2>

            <div :class="['d-flex j-sp-between', {'d-flex--col' : window.width <= 1200}]">
                <div :class="['about-page__section d-flex d-flex--col', {'about-page__section--fw' : window.width <= 1200}]">
                    <p>Along the way, I've been learning great deal of things related to web development. To help me learning, I like to apply them to the project I'm working on.</p>
                    <p>When starting a new project, if it's necessary, I usually pick either React or Vue for the framework. As for styling, most of the time I use Sass with BEM method.</p>
                </div>

                <div :class="['about-page__section d-flex d-flex--col', {'about-page__section--fw' : window.width <= 1200}]">
                    <div class="about-page__list d-flex d-flex--col">
                        <span class="label">Basic</span>
                        <ul class="about-page__icon-grp d-flex">
                            <li class="about-page__icon d-flex"><img src="../assets/icons/html5.svg" alt="html5"></li>
                            <li class="about-page__icon d-flex"><img src="../assets/icons/css3.svg" alt="css3"></li>
                            <li class="about-page__icon d-flex"><img src="../assets/icons/javascript.svg" alt="javascript"></li>
                            <li class="about-page__icon d-flex"><img src="../assets/icons/jquery.svg" alt="jquery"></li>
                        </ul>
                    </div>
                    <div class="about-page__list d-flex d-flex--col">
                        <span class="label">Styling</span>
                        <ul class="about-page__icon-grp d-flex">
                            <li class="about-page__icon d-flex"><img src="../assets/icons/sass.svg" alt="sass"></li>
                            <li class="about-page__icon d-flex"><img src="../assets/icons/bootstrap.svg" alt="bootstrap"></li>
                        </ul>
                    </div>
                    <div class="about-page__list d-flex d-flex--col">
                        <span class="label">Framework</span>
                        <ul class="about-page__icon-grp d-flex">
                            <li class="about-page__icon d-flex"><img src="../assets/icons/reactjs.svg" alt="reactjs"></li>
                            <li class="about-page__icon d-flex"><img src="../assets/icons/vuejs.svg" alt="vuejs"></li>
                        </ul>
                    </div>
                    <div class="about-page__list d-flex d-flex--col">
                        <span class="label">Others</span>
                        <ul class="about-page__icon-grp d-flex">
                            <li class="about-page__icon d-flex"><img src="../assets/icons/redux.svg" alt="redux"></li>
                            <li class="about-page__icon d-flex"><img src="../assets/icons/webpack.svg" alt="webpack"></li>
                            <li class="about-page__icon d-flex"><img src="../assets/icons/gulpjs.svg" alt="gulpjs"></li>
                            <li class="about-page__icon d-flex"><img src="../assets/icons/git.svg" alt="git"></li>
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
