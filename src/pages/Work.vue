<template>
    <div class="main-content d-flex d-flex--col animated fadeIn">
        <parallax-container class="works-page d-flex j-center a-center">
            <div :class="['works-page__section d-flex j-sp-between', {'d-flex--col' : window.width < 1024}]">
                <parallax-element :class="['mac-border d-flex d-flex--col', {'mac-border--fw' : window.width < 1024}]" :parallaxStrength="-15" :type="'translation'">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--1"></div>
                </parallax-element>
                
                <div :class="['project-details', {'project-details--fw' : window.width < 1024}]">
                    <h2 class="project-details__name">TV-Maze Search</h2>
                    <p>A simple search engine for TV shows that search through <a class="project-details__link" href="https://www.tvmaze.com/" target="_blank">TVMaze</a>'s API. I made this project as a learning process to understand the concept of Redux and how it works, especially with React.</p>

                    <div class="project-details__meta d-flex d-flex--col">
                        <span class="project-details__label">Technologies</span>
                        <ul class="project-details__list">
                            <li>React</li>
                            <li>Redux</li>
                            <li>SASS</li>
                        </ul>
                    </div>
                    
                    <div class="d-flex a-center">
                        <a class="btn btn--main project-details__btn" href="https://tvmaze-search.surge.sh/" target="_blank">Visit</a>
                        <a class="btn btn--secondary project-details__btn" href="https://github.com/vincentleandr/react-redux-tvmaze" target="_blank">View Code</a>
                        
                    </div>
                </div>
            </div>
        </parallax-container>

        <parallax-container class="works-page d-flex j-center a-center">
            <div class="works-page__section d-flex j-sp-between">
                <parallax-element class="mac-border d-flex d-flex--col" :parallaxStrength="-15" :type="'translation'">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--2"></div>
                </parallax-element>
                
                <div class="project-details">
                    <h2 class="project-details__name">My Scholarships</h2>
                    <p>A collaboration project with a friend of mine for our thesis. My role here is as the Front End Developer. The main purpose of this web application is to make the process of searching and applying for scholarships easier.</p>

                    <div class="project-details__meta d-flex d-flex--col">
                        <span class="project-details__label">Technologies</span>
                        <ul class="project-details__list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                        </ul>
                    </div>
                    
                    <div class="d-flex">
                        <a class="btn btn--secondary project-details__btn" href="https://github.com/vincentleandr/ThesisProject" target="_blank">View Code</a>
                    </div>
                </div>
            </div>
        </parallax-container>

        <parallax-container class="works-page d-flex j-center a-center">
            <div class="works-page__section d-flex j-sp-between">
                <parallax-element class="mac-border d-flex d-flex--col" :parallaxStrength="-15" :type="'translation'">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--3"></div>
                </parallax-element>
                
                <div class="project-details">
                    <h2 class="project-details__name">Personal Web</h2>
                    <p>I consider this personal web as one of my project. This personal web is also my portfolio to showcase my works.</p>

                    <div class="project-details__meta d-flex d-flex--col">
                        <span class="project-details__label">Technologies</span>
                        <ul class="project-details__list">
                            <li>Vue</li>
                            <li>SASS</li>
                            <li>Webpack</li>
                        </ul>
                    </div>
                    
                    <div class="d-flex">
                        <a class="btn btn--secondary project-details__btn" href="https://github.com/vincentleandr/vue-portfolio" target="_blank">View Code</a>
                    </div>
                </div>
            </div>
        </parallax-container>

        <parallax-container class="works-page d-flex j-center a-center">
            <div class="works-page__section d-flex j-sp-between">
                <parallax-element class="mac-border d-flex d-flex--col" :parallaxStrength="-15" :type="'translation'">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--4"></div>
                </parallax-element>
                
                <div class="project-details">
                    <h2 class="project-details__name">Mini Quiz</h2>
                    <p>A fun mini quiz based on the famous hit series Game of Thrones. Fairly easy if you're a big fan of the show !</p>

                    <div class="project-details__meta d-flex d-flex--col">
                        <span class="project-details__label">Technologies</span>
                        <ul class="project-details__list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                        </ul>
                    </div>
                    
                    <div class="d-flex">
                        <a class="btn btn--main project-details__btn" href="https://gotminiquiz.surge.sh/" target="_blank">Visit</a>
                        <a class="btn btn--secondary project-details__btn" href="https://github.com/vincentleandr/Mini-Quiz" target="_blank">View Code</a>
                    </div>
                </div>

            </div>
        </parallax-container>

        <parallax-container class="works-page d-flex j-center a-center">
            <div class="works-page__section d-flex j-sp-between">
                <parallax-element class="mac-border d-flex d-flex--col" :parallaxStrength="-15" :type="'translation'">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--5"></div>
                </parallax-element>
                
                <div class="project-details">
                    <h2 class="project-details__name">Get It Done</h2>
                    <p>A very simple to-do list web application with minimal design.</p>

                    <div class="project-details__meta d-flex d-flex--col">
                        <span class="project-details__label">Technologies</span>
                        <ul class="project-details__list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                        </ul>
                    </div>
                    
                    <div class="d-flex">
                        <a class="btn btn--main project-details__btn" href="https://get-it-done.surge.sh/" target="_blank">Visit</a>
                        <a class="btn btn--secondary project-details__btn" href="https://github.com/vincentleandr/Get-It-Done" target="_blank">View Code</a>
                    </div>
                </div>

            </div>
        </parallax-container>

        <parallax-container class="works-page d-flex j-center a-center">
            <div class="works-page__section d-flex j-sp-between">
                <parallax-element class="mac-border d-flex d-flex--col" :parallaxStrength="-15" :type="'translation'">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--6"></div>
                </parallax-element>
                
                <div class="project-details">
                    <h2 class="project-details__name">Social Card</h2>
                    <p>My first React project. I learned the basic concept of React from this project like props, state, components, etc. This is also the first time I implemented SASS on a project.</p>

                    <div class="project-details__meta d-flex d-flex--col">
                        <span class="project-details__label">Technologies</span>
                        <ul class="project-details__list">
                            <li>React</li>
                            <li>SASS</li>
                        </ul>
                    </div>
                    
                    <div class="d-flex">
                        <a class="btn btn--main project-details__btn" href="https://romeow-social-card.surge.sh/" target="_blank">Visit</a>
                        <a class="btn btn--secondary project-details__btn" href="https://github.com/vincentleandr/Social-Card" target="_blank">View Code</a>
                    </div>
                </div>

            </div>
        </parallax-container>
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
