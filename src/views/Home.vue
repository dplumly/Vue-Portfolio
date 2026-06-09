<template>
        <!-- Landing Section -->
        <div id="landing">
            <div id="color"></div>
            <div class="row">
            <ul>
                <li><h1>nerd</h1></li>
                <li><h1>maker</h1></li>
                <li><h1>story teller</h1></li>
                <li><h1>creative tech</h1></li>
            </ul>
            </div>
        </div>

      <!-- About Section -->
      <div id="about">
            <div class="bg-logo">
                <img src="/img/logo/gear.svg" alt="logo" />
            </div>
            <div class="row">
            <h2>Hey <span>there</span></h2>
            <br /><br />
            <h4>
                I grew up in Virginia, with a love of toys and plenty of scrap wood. I started out building playhouses and display cases for my toy collection, and I've basically been making stuff ever since. (Yes, I still collect toys. And yes, I make toys and props.)
                <br /><br />
                That early love of building led me to college, where I discovered a way to channel it all into something bigger. Advertising gave me a playground where creativity, tech, storytelling and making could all live together.
                <br /><br />
                Since then, I've built everything from digital tools to physical installations, and the best part? It still feels like play. I work hard, but it rarely feels like "work."
            </h4>
            </div>
      </div>

      <!-- Thumbnails Section -->
      <div id="thumb-container">
            <div id="thumbnails" class="row">
                <div class="six columns fadeIn" v-for="(project, index) in projects" :key="index" v-scroll-reveal>
                    <router-link :to="project.link">
                        <figure class="tint">
                            <img :src="project.image" :alt="project.alt" />
                        </figure>
                        <figcaption>
                            <h2 v-html="project.title"></h2>
                            <h5>{{ project.subtitle }}</h5>
                        </figcaption>
                    </router-link>
                </div>

                <!-- Example blog link -->
                <div class="twelve columns fadeIn">
                    <a href="https://think-make-repeat.tumblr.com/" target="_blank">
                    <figure class="tint">
                        <img id="tmrDesktop" src="/img/projects/landing/tmr-thumb.jpg" alt="Think Make Repeat Blog" />
                        <img id="tmrMobile" src="/img/projects/landing/tmr-thumb-sm.jpg" alt="Think Make Repeat Blog" />
                    </figure>
                    </a>
                </div>
            </div>
        </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  name: 'Home',
  setup() {
    const PARTICLE_MIN = 8
    const PARTICLE_MAX = 16
    const RADIUS_MIN = 20
    const RADIUS_MAX = 90

    const handleMouseDown = (e) => {
      const particleCount = PARTICLE_MIN + Math.floor(Math.random() * (PARTICLE_MAX - PARTICLE_MIN))

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'binary-burst'
        particle.dataset.text = ''

        const binary = Array.from({ length: 2 + Math.floor(Math.random() * 4) })
          .map(() => (Math.random() > 0.5 ? '1' : '0'))
          .join('')

        particle.textContent = binary
        particle.dataset.text = binary

        particle.style.left = `${e.clientX}px`
        particle.style.top = `${e.clientY}px`

        const angle = Math.random() * Math.PI * 2
        const radius = RADIUS_MIN + Math.random() * (RADIUS_MAX - RADIUS_MIN)
        const tx = Math.cos(angle) * radius
        const ty = Math.sin(angle) * radius

        particle.style.setProperty('--tx', `${tx}px`)
        particle.style.setProperty('--ty', `${ty}px`)

        const duration = 0.7 + Math.random() * 0.6
        const delay = Math.random() * 0.1
        particle.style.setProperty('--particle-duration', `${duration}s`)
        particle.style.animationDelay = `${delay}s`

        const hueShift = Math.floor(Math.random() * 360)
        particle.style.filter = `hue-rotate(${hueShift}deg)`

        document.body.appendChild(particle)

        setTimeout(() => {
          particle.remove()
        }, (duration + delay) * 1000)
      }
    }

    onMounted(() => {
      document.addEventListener('mousedown', handleMouseDown)
    })

    onUnmounted(() => {
      document.removeEventListener('mousedown', handleMouseDown)
    })

    const projects = [
        {
        link: "/ddk",
        image: "/img/projects/ddk/ddk.png",
        alt: "Digial badge",
        title: "Workday<span> DevCon DDK</span>",
        subtitle: "Giving developers a playground",
      },
      {
        link: "/df25",
        image: "/img/projects/df25/dreamforce25.jpg",
        alt: "df25 project image",
        title: "Dream<span>force 25</span>",
        subtitle: "Leading the team Dreamforce 2025",
      },
      {
        link: "/google",
        image: "/img/projects/google/google.jpg",
        alt: "google project image",
        title: "Google<span> AI Photo</span>",
        subtitle: "Google Next AI Photo experience",
      },
      {
        link: "/ibm2020",
        image: "/img/projects/IBMactivations/activations.jpg",
        alt: "IBM 2020 Digital Activations",
        title: "IBM<span> 2020</span>",
        subtitle: "Web Activations",
      },
      {
        link: "/lexussoundbooth",
        image: "/img/projects/LC_soundbooth/LC_soundbooth.jpg",
        alt: "soundbooth project image: photo by Matt Hartz",
        title: "Sound<span> Booth</span>",
        subtitle: "LC 500 Immersive audio experience",
      },
      {
        link: "/litcar",
        image: "/img/projects/LitIS/litIS.jpg",
        alt: "Lexus Lit IS",
        title: "Lexus Lit<span> IS</span>",
        subtitle: "41,999 LEDs on an Lexus IS",
      },
      {
        link: "/visceralreality",
        image: "/img/projects/visceral_reality/visceral_reality.jpg",
        alt: "Lexus Visceral Reality",
        title: "Visceral<span> Reality</span>",
        subtitle: "Lexus RC F hot lap in 360",
      },
    //   {
    //     link: "/dustinswords",
    //     image: "/img/projects/dustins-words/dustins_words.jpg",
    //     alt: "Dustin's Words Device",
    //     title: "Dustin's<span> Words</span>",
    //     subtitle: "Helping give autism a voice",
    //   },
      {
        link: "/chingongpong",
        image: "/img/projects/chingonPong/chingon-pong.jpg",
        alt: "chingon-pong beer pong for adults",
        title: "Chingong<span> Pong</span>",
        subtitle: "Four Corner Brewery Beer Pong",
      },
    ]

    return {
      projects
    }
  }
}
</script>

<style>
/*===================================

Binary Burst Particle Effects (Home Page Only)

===================================*/
.binary-burst {
  position: fixed;
  color: #0ff;
  font-size: 16px;
  pointer-events: none;
  opacity: 0;
  z-index: 9998;
  transform-origin: center;
  animation:
    particle-pop var(--particle-duration, 0.9s) ease-out forwards,
    glitch-color 0.35s linear infinite;
  text-shadow:
    1px 0 #9e1c2b,
    -1px 0 #00ffff,
    0 0 8px currentColor;
}

.binary-burst::before,
.binary-burst::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  opacity: 0.25;
  pointer-events: none;
}

.binary-burst::before {
  color: #9e1c2b;
  clip-path: inset(0 0 60% 0);
  transform: translate(-1px, -1px);
  animation: glitch-slice 0.6s steps(2, end) infinite;
}

.binary-burst::after {
  color: #00f7ff;
  clip-path: inset(40% 0 0 0);
  transform: translate(1px, 1px);
  animation: glitch-slice 0.45s steps(2, end) infinite reverse;
}

@keyframes glitch-color {
  0%, 100% { filter: hue-rotate(0deg); }
  33% { filter: hue-rotate(90deg); }
  66% { filter: hue-rotate(180deg); }
}

@keyframes glitch-slice {
  0% { clip-path: inset(0 0 70% 0); transform: translate(-2px, -2px); }
  25% { clip-path: inset(10% 0 50% 0); transform: translate(2px, 1px); }
  50% { clip-path: inset(40% 0 20% 0); transform: translate(-1px, 2px); }
  75% { clip-path: inset(30% 0 30% 0); transform: translate(1px, -2px); }
  100% { clip-path: inset(0 0 70% 0); transform: translate(0, 0); }
}

@keyframes particle-pop {
  0% {
    opacity: 0;
    transform: scale(0.3) translate(0, 0);
  }
  45% {
    opacity: 1;
    transform: scale(1.05) translate(var(--tx, 0px), var(--ty, 0px));
  }
  100% {
    opacity: 0;
    transform: scale(0.85) translate(calc(var(--tx, 0px) * 1.15), calc(var(--ty, 0px) * 1.15));
  }
}

/*===================================

Landing Page

===================================*/
#landing {
    position: relative;
    min-height: 600px;
    width: 100%;
    background: url('../img/projects/landing/backgrounds/landing.jpg') no-repeat right center;
    background-color: #262626;
}

#color {
    position: absolute;
    background-color: rgba(158, 28, 44, .6);
    z-index: 1;
    height: 100%;
    width: 40%;
    transform: skewX(28deg);
    transform-origin: 100%;
    left: 39px;
    max-width: 500px;
}

#project-color {
    position: absolute;
    background-color: rgba(158, 28, 44, .6);
    height: 100%;
    width: 40%;
    transform: skewX(38deg);
    transform-origin: 100%;
    max-width: 500px;
}

#landing:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: 0px 0px 220px rgba(0, 0, 0, .6) inset;
    pointer-events: none;
    z-index: 2;
}

#landing ul {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 600px;
    left: -70px;
    margin-left: 20px;
}

#landing li {
    z-index: 3;
}

#landing h1 {
    color: #61e3d3;
    margin: 25px 0;
    font-family: 'LatoWebBlack', sans-serif;
    text-transform: uppercase;
}

#landing li:nth-child(2) {
    margin-left: 40px;
}

#landing li:nth-child(3) {
    margin-left: 76px;
}

#landing li:nth-child(4) {
    margin-left: 115px;
}

#heading {
    position: relative;
    margin: 0 auto;
    display: table;
    position: relative;
    top: 27%;
    transform: translateY(-50%);
}

#heading span {
    position: absolute;
    height: 250px;
    width: 2px;
    background-color: #ffffff;
    transform: rotate(45deg);
}

#heading span:nth-child(2) {
    position: absolute;
    height: 250px;
    width: 2px;
    background-color: #ffffff;
    transform: rotate(-45deg);
}

/*===================================

About 

===================================*/
#about {
    height: auto;
    width: 100%;
    background-color: #232323;
    overflow: hidden;
    position: relative;
}

.bg-logo {
    position: absolute;
    z-index: 0;
    opacity: .1;
    top: -200px;
    margin: 0 auto;
    left: 0;
    right: 0;
}

#about h1 {
    font-size: 2.5em;
    letter-spacing: 5px;
}

#about .row,
.project-container .row {
    position: relative;
}

#about .row {
    padding: 50px 0;
}

#about h2,
.project-container h2 {
    text-transform: uppercase;
    color: #eaeaea;
    margin-bottom: 5px;
    font-family: 'LatoWebLight', sans-serif;
}

#about h2 span {
    font-family: 'LatoWebBold', sans-serif;
    color: #61e3d3;
}

#about h4,
.project-copy h4 {
    max-width: 600px;
    color: #eaeaea;
}

/*===================================

Landing Page Thumbnails

===================================*/
#thumb-container {
    background-color: #eaeaea;
}

#thumbnails {
    padding: 50px 0;
}

#thumbnails.row .six.columns h2 {
    position: absolute;
    top: 65px;
    left: 30px;
    font-family: 'LatoWebLight', sans-serif;
    color: #eaeaea;
    text-transform: uppercase;
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
}

#thumbnails.row .six.columns h5 {
    position: absolute;
    top: 110px;
    left: 30px;
    color: #eaeaea;
    max-width: 400px;
    font-family: 'Open Sans', sans-serif;
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
}

#thumbnails figure.tint {
    margin: 0;
    float: left;
    background: #000;
    overflow: hidden;
    height: auto;
    border-radius: 15px;
}

#thumbnails figurecaption h2 span {
    color: #61e3d3;
    font-family: 'LatoWebBold', sans-serif;
}

#thumbnails figure.tint img {
    opacity: .6;
    -webkit-transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
    -moz-transform: scale(1);
    -webkit-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
}

#thumbnails figure.tint:hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
    opacity: 1;
    /* cursor: pointer; */
}

/*========================

Responsive

========================*/
/* 2001 */
@media only screen and (min-width: 125.063em) {
    #landing {
        background: url('../img/projects/landing/backgrounds/landing-big.jpg') no-repeat center center;
    }

    #color {
        left: 19%;
    }
}

/* 1120 */
@media only screen and (max-width: 70.000em) {
    #landing ul {
        left: 0px;
        margin-left: 20px;
    }

    #landing h1 {
        font-size: 2.8em;
    }
}

/* 1000 */
@media only screen and (max-width: 62.500em) {

    #about h2 {
        padding: 20px 0 0 0;
    }

    #about div {
        margin: 0 20px;
    }
}


/* 768 */
@media only screen and (min-width: 48.000em) {
    #tmrMobile {
        display: none;
    }

    #tmrDesktop {
        display: block;
    }
}


/* 768 */
@media only screen and (max-width: 48.000em) {
    #landing ul {
        left: 25px;
    }

    #color {
        transform: skewX(20deg);
    }

    #landing h1 {
        font-size: 2.2em !important;
        margin: 12px 0;
        line-height: 35px;
    }

    #landing li:nth-child(1) {
        margin-left: 0px;
    }

    #landing li:nth-child(2) {
        margin-left: 18px;
    }

    #landing li:nth-child(3) {
        margin-left: 36px;
    }

    #landing li:nth-child(4) {
        margin-left: 53px;
    }

    #tmrMobile {
        display: block;
    }

    #tmrDesktop {
        display: none;
    }
}

/* 600 */
@media only screen and (max-width: 37.500em) {
    #color {
        width: 45%;
        left: 0;
        transform: skewX(15deg);
    }

    #landing ul {
        margin-left: 10px;
    }

    #landing li:nth-child(1) {
        margin-left: 0px;
    }

    #landing li:nth-child(2) {
        margin-left: 13px;
    }

    #landing li:nth-child(3) {
        margin-left: 25px;
    }

    #landing li:nth-child(4) {
        margin-left: 38px;
    }
}

/* 500 */
@media only screen and (max-width: 31.250em) {
    #landing {
        background: url('../img/projects/landing/backgrounds/landingMobile.jpg') no-repeat center center;
    }

    #about h4 {
        font-size: 1.2em;
        line-height: 28px;
    }
}

/* 450px */
@media only screen and (max-width: 28.125em) {

    #about h2 {
        font-size: 2em;
    }

    figurecaption h2 {
        font-size: 1.8em;
    }

    #about hr {
        width: 180px;
    }

    figurecaption h5 {
        font-size: 1em;
    }
}

/* 400px */
@media only screen and (max-width: 25.000em) {
    figurecaption h2 {
        letter-spacing: 0px;
    }

    #landing ul {
        left: 0;
    }

    #landing li:nth-child(1) {
        margin-left: 0px;
    }

    #landing li:nth-child(2) {
        margin-left: 17px;
    }

    #landing li:nth-child(3) {
        margin-left: 33px;
    }

    #landing li:nth-child(4) {
        margin-left: 48px;
    }
}
</style>