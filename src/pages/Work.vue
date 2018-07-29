<template>
    <div class="main-content d-flex d-flex--col animated fadeIn">
        <div class="d-flex j-sp-between f-wrap works-page">

            <!-- Project 1 -->
            <div :class="['overlay', {'overlay--active' : project.one}]">

                <div :class="['mac-border d-flex d-flex--col', {'mac-border--active' : project.one}]" @click="project.one = !project.one; overflowStatus = 'hidden'; preventScroll()">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--1"></div>
                </div>

                <div :class="['project-details', {'project-details--active' : project.one}]">
                    <h2 class="project-details__name">TV-Maze Search</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempora dicta repellat blanditiis amet in, itaque, sint error quidem nulla rerum, a molestiae voluptates modi est earum officiis adipisci ipsam!</p>

                    <a class="project-details__link btn-back" href="javascript:;" @click="project.one = false; overflowStatus = 'scroll'; preventScroll()">Back</a>
                </div>
                
            </div>
            
            

            <!--
            <div class="project-details">
                <h2 class="project-details__name">TV-Maze Search</h2>
                <p>A search engine for TV Series that search through <a class="project-details__link" href="https://www.tvmaze.com/" target="_blank">TVMaze</a>'s API.</p>
                <p><span class="project-details__label">Built with:</span> <br>
                React, Redux, SASS.</p>
                
                <div class="d-flex">
                    <a class="btn btn--main project-details__btn" href="https://tvmaze-search.surge.sh/" target="_blank">Visit</a>
                    <a class="btn btn--secondary project-details__btn" href="https://github.com/vincentleandr/react-redux-tvmaze" target="_blank">View Code</a>
                </div>
            </div>
            -->

            <!-- Project 2 
            <div :class="['project project--right', {'project--active' : project.two}]" @click="project.two = !project.two">
                <div class="mac-border d-flex d-flex--col">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                    <div class="mac-border__bg mac-border__bg--2"></div>
                </div>
            </div>
            <div :class="['project__overlay', {'project__overlay--active' : project.two}]">
                <span @click="project.two = false">Back</span>
            </div>
            -->
            
        </div>

        <!--
        <parallax-container class="d-flex d-flex--col works-page">
            <div class="d-flex j-sp-between">
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
                    <p>A collaboration project with a friend for our thesis. The main purpose is to make the process of searching and applying for scholarships easier.</p>
                    <p><span class="project-details__label">Built with:</span> <br>
                    HTML, CSS, Bootstrap, Javascript, JQuery.</p>
                    
                    <div class="d-flex">
                        <a class="btn btn--secondary project-details__btn" href="https://github.com/vincentleandr/ThesisProject" target="_blank">View Code</a>
                    </div>

                </div>

            </div>
        </parallax-container>

        <parallax-container class="d-flex d-flex--col works-page">
            <div class="d-flex j-sp-between">
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
                    <p><span class="project-details__label">Built with:</span> <br>
                    Vue, SASS, Webpack.</p>
                    
                    <div class="d-flex">
                        <a class="btn btn--secondary project-details__btn" href="https://github.com/vincentleandr/vue-portfolio" target="_blank">View Code</a>
                    </div>
                </div>

            </div>
        </parallax-container>

        <parallax-container class="d-flex d-flex--col works-page">
            <div class="d-flex j-sp-between">
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
                    <p><span class="project-details__label">Built with:</span> <br>
                    HTML, CSS, Javascript, JQuery.</p>
                    
                    <div class="d-flex">
                        <a class="btn btn--main project-details__btn" href="https://gotminiquiz.surge.sh/" target="_blank">Visit</a>
                        <a class="btn btn--secondary project-details__btn" href="https://github.com/vincentleandr/Mini-Quiz" target="_blank">View Code</a>
                    </div>
                </div>

            </div>
        </parallax-container>

        <parallax-container class="d-flex d-flex--col works-page">
            <div class="d-flex j-sp-between">
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
                    <p><span class="project-details__label">Built with:</span> <br>
                    HTML, CSS, Javascript, JQuery.</p>
                    
                    <div class="d-flex">
                        <a class="btn btn--main project-details__btn" href="https://get-it-done.surge.sh/" target="_blank">Visit</a>
                        <a class="btn btn--secondary project-details__btn" href="https://github.com/vincentleandr/Get-It-Done" target="_blank">View Code</a>
                    </div>
                </div>

            </div>
        </parallax-container>

        <parallax-container class="d-flex d-flex--col works-page">
            <div class="d-flex j-sp-between">
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
                    <p><span class="project-details__label">Built with:</span> <br>
                    React, SASS.</p>
                    
                    <div class="d-flex">
                        <a class="btn btn--main project-details__btn" href="https://romeow-social-card.surge.sh/" target="_blank">Visit</a>
                        <a class="btn btn--secondary project-details__btn" href="https://github.com/vincentleandr/Social-Card" target="_blank">View Code</a>
                    </div>
                </div>

            </div>
        </parallax-container>
        -->

    </div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
      project: {
          one: false,
          two: false
      },
      overflowStatus: ''
    }
  },
  methods: {
    preventScroll () {
      window.scrollTo(0, 0)
      document.getElementsByTagName('html')[0].style.overflowY = this.overflowStatus
    }
  }
}
</script>
