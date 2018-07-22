<template>
    <div class="main-content d-flex d-flex--col animated fadeIn">
        <parallax-container class="about-page d-flex j-sp-between">
            <div class="about-page__section d-flex d-flex--col">
                <h2 class="about-page__title">Who I Am</h2>
                <p>My name is Vincent Leander. I'm a passionate and ambitious learner. One of my major passion has always been on web development.</p>
                <p>It all started a year ago. I started as an intern and I was introduced to web development. Apparently, I really enjoy my time building sites and pages. I fell in love with it pretty quick and decided to make it into a career.</p>
                <p>Along the way, I've learned a great deal of things related to web development but that doesn't mean that I stopped learning. I also found a new passion in UI/UX. I think I always have a good eyes and taste for designing things.</p>
            </div>

            <parallax-element class="about-page__section d-flex d-flex--col" :parallaxStrength="-15" :type="'translation'">
                <img class="about-page__img" src="../assets/images/self-pic-1.jpg" alt="Who I Am">
            </parallax-element>
        </parallax-container>

        <parallax-container class="about-page d-flex j-sp-between">
            <parallax-element class="about-page__section d-flex d-flex--col" :parallaxStrength="-15" :type="'translation'">
                <img class="about-page__img" src="../assets/images/typing.jpg" alt="What I Do">
            </parallax-element>
            <div class="about-page__section d-flex d-flex--col">
                <h2 class="about-page__title">What I Do</h2>
                <p>I'm a Front-End Developer.</p>
                <p>Front-End Developer is the one who builds all the visual components you can see on a website.</p>
                <p>I prefer simplicity and minimalism when building/designing websites. However, I like to make it interactive. I believe this can make a major impact on an even a simple website to look more sophisticated and attractive to users.</p>
                <p>I'm also a true admirer of great user experience. I always do some research before starting and I always consider the best flow and way for a website and for all the user interfaces.</p>
            </div>
        </parallax-container>

        <div class="about-page d-flex j-sp-between">
            <div class="about-page__section--fw d-flex d-flex--col">
                <h2 class="about-page__title">Skill Sets</h2>
                <div class="skill-sets d-flex j-center">
                    <div class="skill-sets__icon d-flex j-center">
                        <img src="../assets/icons/html5.svg" alt="HTML 5">
                        <span class="skill-sets__name">HTML 5</span>
                    </div>
                    <div class="skill-sets__icon d-flex j-center">
                        <img src="../assets/icons/css3.svg" alt="CSS 3">
                        <span class="skill-sets__name">CSS 3</span>
                    </div>
                    <div class="skill-sets__icon d-flex j-center">
                        <img src="../assets/icons/javascript.svg" alt="Javascript">
                        <span class="skill-sets__name">Javascript</span>
                    </div>
                    <div class="skill-sets__icon d-flex j-center">
                        <img src="../assets/icons/reactjs.svg" alt="React.js">
                        <span class="skill-sets__name">React.js</span>
                    </div>
                    <div class="skill-sets__icon d-flex j-center">
                        <img src="../assets/icons/vuejs.svg" alt="Vue.js">
                        <span class="skill-sets__name">Vue.js</span>
                    </div>
                    <div class="skill-sets__icon d-flex j-center">
                        <img src="../assets/icons/jquery.svg" alt="Jquery">
                        <span class="skill-sets__name">JQuery</span>
                    </div>
                    <div class="skill-sets__icon d-flex j-center">
                        <img src="../assets/icons/sass.svg" alt="SASS">
                        <span class="skill-sets__name">SASS</span>
                    </div>
                    <div class="skill-sets__icon d-flex j-center">
                        <img src="../assets/icons/bootstrap.svg" alt="Bootstrap">
                        <span class="skill-sets__name">Bootstrap</span>
                    </div>
                    <div class="skill-sets__icon d-flex j-center">
                        <img src="../assets/icons/git.svg" alt="Git">
                        <span class="skill-sets__name">Git</span>
                    </div>
                    <div class="skill-sets__icon d-flex j-center">
                        <img src="../assets/icons/webpack.svg" alt="Webpack">
                        <span class="skill-sets__name">Webpack</span>
                    </div>
                    <div class="skill-sets__icon d-flex j-center">
                        <img src="../assets/icons/gulpjs.svg" alt="Gulp.js">
                        <span class="skill-sets__name">Gulp.js</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
  name: 'About'
}
</script>
