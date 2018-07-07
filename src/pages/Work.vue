<template>
    <div class="main-content d-flex d-flex--col animated fadeIn">
        <parallax-container class="d-flex d-flex--col works-page">
            <div class="d-flex j-sp-between">
                <parallax-element class="mac-border mac-border--bg-1" :parallaxStrength="-15" :type="'translation'">
                    <div class="mac-border__top d-flex a-center">
                        <div class="mac-border__btn mac-border__btn--red"></div>
                        <div class="mac-border__btn mac-border__btn--orange"></div>
                        <div class="mac-border__btn mac-border__btn--green"></div>
                    </div>
                </parallax-element>
                
                <div class="project-details">
                    <h2 class="project-details__name">Project Name</h2>
                    <p>Bacon ipsum dolor amet shank cupim ribeye, corned beef meatball ham hock frankfurter hamburger spare ribs sausage andouille ground round.</p>
                    <!--
                    -->
                    <span class="span-label">Technologies</span>
                    <div class="d-flex a-center">
                        <div class="project-details__icon-tech">
                            <img src="../assets/icons/html5.svg" alt="HTML 5">
                        </div>
                        <div class="project-details__icon-tech">
                            <img src="../assets/icons/sass.svg" alt="HTML 5">
                        </div>
                        <div class="project-details__icon-tech">
                            <img src="../assets/icons/reactjs.svg" alt="HTML 5">
                        </div>
                        <div class="project-details__icon-tech">
                            <img src="../assets/icons/gulpjs.svg" alt="HTML 5">
                        </div>
                        <div class="project-details__icon-tech">
                            <img src="../assets/icons/webpack.svg" alt="HTML 5">
                        </div>
                    </div>
                    
                    <div class="d-flex">
                        <a class="btn btn--main project-details__btn" href="#">Visit</a>
                        <a class="btn btn--secondary project-details__btn" href="#">View Code</a>
                    </div>

                </div>

            </div>
        </parallax-container>
    </div>
</template>

<script>
export default {
  name: 'Work'
}
</script>
