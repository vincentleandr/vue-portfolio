<template>
    <div class="main-content d-flex d-flex--col animated fadeIn">
        <div class="works-page d-flex">
            <div :class="['works-page__section d-flex j-sp-between a-center', {'d-flex--col' : window.width < 1200}]">
                <div :class="['mac-border d-flex d-flex--col', {'mac-border--fw' : window.width < 1200}]" >
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--1"></div>
                    <a class="divlinker" href="http://tvmaze-search.surge.sh/" target="_blank"></a>
                </div>
                
                <div :class="['project-details', {'project-details--fw' : window.width < 1200}]">
                    <h2 class="project-details__name">TV-Maze Search</h2>
                    <p>A simple search engine for TV shows that search through <a class="project-details__link" href="https://www.tvmaze.com/" target="_blank">TVMaze</a>'s API. I made this project as a learning process to understand the concept of Redux and how it works, especially with React.</p>

                    <div class="project-details__meta d-flex d-flex--col">
                        <span class="label">Technologies</span>
                        <ul class="project-details__list d-flex">
                            <li class="project-details__icon d-flex"><img src="../assets/icons/reactjs.svg" alt="reactjs"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/redux.svg" alt="redux"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/sass.svg" alt="sass"></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <div class="works-page works-page--gray d-flex j-center a-center">
            <div :class="['works-page__section d-flex j-sp-between a-center', {'d-flex--col' : window.width < 1200}]">
                <div :class="['mac-border d-flex d-flex--col', {'mac-border--fw' : window.width < 1200}]" v-if="window.width <= 1200">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--2"></div>

                    <a class="divlinker" href="https://github.com/vincentleandr/ThesisProject" target="_blank"></a>
                </div>

                <div :class="['project-details', {'project-details--fw' : window.width < 1200}]">
                    <h2 class="project-details__name">My Scholarships</h2>
                    <p>A collaboration project with a friend of mine for our thesis. My role here is as the Front End Developer. The main purpose of this web application is to make the process of searching and applying for scholarships easier.</p>

                    <div class="project-details__meta d-flex d-flex--col">
                        <span class="label">Technologies</span>
                        <ul class="project-details__list d-flex">
                            <li class="project-details__icon d-flex"><img src="../assets/icons/html5.svg" alt="html5"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/css3.svg" alt="css3"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/bootstrap.svg" alt="bootstrap"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/javascript.svg" alt="javascript"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/jquery.svg" alt="jquery"></li>
                        </ul>
                    </div>
                </div>

                <div :class="['mac-border d-flex d-flex--col', {'mac-border--fw' : window.width < 1200}]" v-if="window.width > 1200">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--2"></div>

                    <a class="divlinker" href="https://github.com/vincentleandr/ThesisProject" target="_blank"></a>
                </div>

            </div>
        </div>

        <div class="works-page d-flex j-center a-center">
            <div :class="['works-page__section d-flex j-sp-between a-center', {'d-flex--col' : window.width < 1200}]">
                <div :class="['mac-border d-flex d-flex--col', {'mac-border--fw' : window.width < 1200}]" >
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--3"></div>

                    <a class="divlinker" href="https://github.com/vincentleandr/vue-portfolio" target="_blank"></a>
                </div>
                
                <div :class="['project-details', {'project-details--fw' : window.width < 1200}]">
                    <h2 class="project-details__name">Personal Web</h2>
                    <p>I consider this personal web as one of my project. This personal web is also my portfolio to showcase my works. This is also my learning experience for Vue.js.</p>

                    <div class="project-details__meta d-flex d-flex--col">
                        <span class="label">Technologies</span>
                        <ul class="project-details__list d-flex">
                            <li class="project-details__icon d-flex"><img src="../assets/icons/vuejs.svg" alt="vuejs"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/sass.svg" alt="sass"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/webpack.svg" alt="webpack"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="works-page d-flex j-center a-center">
            <div :class="['works-page__section d-flex j-sp-between a-center', {'d-flex--col' : window.width < 1200}]">
                <div :class="['mac-border d-flex d-flex--col', {'mac-border--fw' : window.width < 1200}]" v-if="window.width <= 1200">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--4"></div>

                    <a class="divlinker" href="https://gotminiquiz.surge.sh/" target="_blank"></a>
                </div>
                
                <div :class="['project-details', {'project-details--fw' : window.width < 1200}]">
                    <h2 class="project-details__name">Mini Quiz</h2>
                    <p>A fun mini quiz based on the famous hit series Game of Thrones. Fairly easy if you're a big fan of the show !</p>

                    <div class="project-details__meta d-flex d-flex--col">
                        <span class="label">Technologies</span>
                        <ul class="project-details__list d-flex">
                            <li class="project-details__icon d-flex"><img src="../assets/icons/html5.svg" alt="html5"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/css3.svg" alt="css3"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/javascript.svg" alt="javascript"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/jquery.svg" alt="jquery"></li>
                        </ul>
                    </div>
                </div>

                <div :class="['mac-border d-flex d-flex--col', {'mac-border--fw' : window.width < 1200}]" v-if="window.width > 1200">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--4"></div>

                    <a class="divlinker" href="https://gotminiquiz.surge.sh/" target="_blank"></a>
                </div>
            </div>
        </div>

        <div class="works-page d-flex j-center a-center">
            <div :class="['works-page__section d-flex j-sp-between a-center', {'d-flex--col' : window.width < 1200}]">
                <div :class="['mac-border d-flex d-flex--col', {'mac-border--fw' : window.width < 1200}]" >
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--5"></div>

                    <a class="divlinker" href="https://get-it-done.surge.sh/" target="_blank"></a>
                </div>
                
                <div :class="['project-details', {'project-details--fw' : window.width < 1200}]">
                    <h2 class="project-details__name">Get It Done</h2>
                    <p>A very simple to-do list web application with minimal design.</p>

                    <div class="project-details__meta d-flex d-flex--col">
                        <span class="label">Technologies</span>
                        <ul class="project-details__list d-flex">
                            <li class="project-details__icon d-flex"><img src="../assets/icons/html5.svg" alt="html5"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/css3.svg" alt="css3"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/bootstrap.svg" alt="bootstrap"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/javascript.svg" alt="javascript"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/jquery.svg" alt="jquery"></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        <div class="works-page d-flex j-center a-center">
            <div :class="['works-page__section d-flex j-sp-between a-center', {'d-flex--col' : window.width < 1200}]">
                <div :class="['mac-border d-flex d-flex--col', {'mac-border--fw' : window.width < 1200}]" v-if="window.width <= 1200">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--6"></div>

                    <a class="divlinker" href="https://romeow-social-card.surge.sh/" target="_blank"></a>
                </div>
                
                <div :class="['project-details', {'project-details--fw' : window.width < 1200}]">
                    <h2 class="project-details__name">Social Card</h2>
                    <p>My first React project, a simple one really. I learned the basic concept of React from this project like props, state, components, etc. This is also the first time I implemented Sass on a project.</p>

                    <div class="project-details__meta d-flex d-flex--col">
                        <span class="label">Technologies</span>
                        <ul class="project-details__list d-flex">
                            <li class="project-details__icon d-flex"><img src="../assets/icons/reactjs.svg" alt="reactjs"></li>
                            <li class="project-details__icon d-flex"><img src="../assets/icons/sass.svg" alt="sass"></li>
                        </ul>
                    </div>
                </div>

                <div :class="['mac-border d-flex d-flex--col', {'mac-border--fw' : window.width < 1200}]" v-if="window.width > 1200">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--6"></div>

                    <a class="divlinker" href="https://romeow-social-card.surge.sh/" target="_blank"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Work',
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
