<template>
    <div class="main-content main-content--fullpage d-flex a-center animated fadeIn">
        <div class="contact-page d-flex d-flex--col">
            <h2>Say Hi</h2>

            <p class="contact-info">If you want to talk about projects, my work, or maybe something else. Feel free to send me an email or a message. I'm looking forward to have a chat with you.</p>
            <a class="contact-info__link" href="mailto:vincentleander@yahoo.com">vincentleander@yahoo.com</a>
            <a class="contact-info__link" href="tel:+6281808731590">+62-8180-8731-590</a>
            <div class="d-flex">
                <a class="menu-social__option contact-info__link" href="https://github.com/vincentleandr" target="_blank"><i class="fa fa-github"></i></a>
                <a class="menu-social__option contact-info__link" href="https://www.linkedin.com/in/vincent-leander" target="_blank"><i class="fa fa-linkedin"></i></a>
            </div>

            <!--
            <div :class="['d-flex j-sp-between', {'d-flex--col' : window.width <= 1350}]">
                <div class="contact-info d-flex d-flex--col">
                    <p>Want to talk about projects or something else?</p>
                    <a class="contact-info__link" href="mailto:vincentleander@yahoo.com">vincentleander@yahoo.com</a>
                </div>
                <div class="contact-info d-flex d-flex--col">
                    <p>Feel free to send me an email or a message.</p>
                    <a class="contact-info__link" href="tel:+6281808731590">+62-8180-8731-590</a>
                </div>
                <div class="contact-info d-flex d-flex--col">
                    <p>You can also find me on other platform like:</p>
                    <div class="d-flex">
                        <a class="menu-social__option contact-info__link" href="https://github.com/vincentleandr" target="_blank"><i class="fa fa-github"></i></a>
                        <a class="menu-social__option contact-info__link" href="https://www.linkedin.com/in/vincent-leander" target="_blank"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'Contact',
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
