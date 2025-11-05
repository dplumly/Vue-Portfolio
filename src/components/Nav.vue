<template>
    <nav>
        <ul class="row">

            <!-- Home -->
            <router-link to="/" custom v-slot="{ navigate }">
            <li class="columns four" @click="navigate">
                <span class="nav-items">home</span>
            </li>
            </router-link>

            <!-- Projects -->
              <li class="columns four toggle-menu menu-right" @click="togglePushMenu">
                <span class="nav-items">projects</span>
            </li>

            <!-- Contact -->
            <a href="https://www.linkedin.com/in/donnieplumly/" target="_blank">
            <li class="columns four">
                <span class="nav-items">contact</span>
            </li>
            </a>

        </ul>
    </nav>



    <!-- Mobile Navigation Bar -->
    <div id="mobile-nav">
        <ul class="row">
            <li class="mobile-four">
                <router-link id="menu-home" to="/">
                    <img src="/img/icons/mobileIcons/mobile-home.svg">
                </router-link>
            </li>
            <li class="mobile-four">
                <a href="#" @click.prevent="togglePushMenu">
                    <div class="hamburger-menu toggle-menu menu-right" :class="{ open: isHamburgerOpen }">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
            </li>
            <li class="mobile-four">
                <a id="mobile-nav-contact" href="https://www.linkedin.com/in/donnieplumly/" target="_blank">
                    <img src="/img/icons/mobileIcons/mobile-contact.svg">
                </a>
            </li>
        </ul>
    </div>

    <!-- Push Side Menu -->
    <transition name="slide">
        <div v-if="isPushOpen" class="push-nav cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right cbp-spmenu-open">
            <div id="push-nav-container">
                <div id="top-space" class="toggle-menu menu-right">
                    <div id="close-button" @click="closeMenu">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul>
                    <li>
                        <img src="/img/icons/nav-icons/logo-icon.svg" alt="Home Icon" />
                        <router-link to="/" @click="closeMenu">HOME</router-link>
                    </li>
                    <li>
                        <img src="/img/icons/nav-icons/salesforce.svg" alt="Salesforce Icon" />
                        <router-link to="/df25" @click="closeMenu">DF25</router-link>
                    </li>
                    <li>
                        <img src="/img/icons/nav-icons/google.svg" alt="Google Icon" />
                        <router-link to="/google" @click="closeMenu">Google</router-link>
                    </li>
                    <li>
                        <img src="/img/icons/nav-icons/ibm.svg" alt="ibm Icon" />
                        <router-link to="/ibm2020" @click="closeMenu">IBM 2020</router-link>
                    </li>
                    <li>
                        <img src="/img/icons/nav-icons/soundbooth.svg" alt="soundbooth Icon" />
                        <router-link to="/lexussoundbooth" @click="closeMenu">Soundbooth</router-link>
                    </li>
                    <li>
                        <img src="/img/icons/nav-icons/litIS.svg" alt="litIS Icon" />
                        <router-link to="/litcar" @click="closeMenu">Lit IS</router-link>
                    </li>
                    <li>
                        <img src="/img/icons/nav-icons/visceral-reality.svg" alt="visceral reality Icon" />
                        <router-link to="/visceralreality" @click="closeMenu">Visceral Reality</router-link>
                    </li>
                    <li>
                        <img src="/img/icons/nav-icons/dustins-words.svg" alt="dustins words Icon" />
                        <router-link to="/dustinswords" @click="closeMenu">Dustin's Words</router-link>
                    </li>
                    <li>
                        <img src="/img/icons/nav-icons/chingon-pong.svg" alt="Chingon Pong Icon" />
                        <router-link to="/chingongpong" @click="closeMenu">Chingon Pong</router-link>
                    </li>
                    <li>
                        <img src="/img/icons/nav-icons/contact.svg" alt="Contact Icon" />
                        <a href="https://www.linkedin.com/in/donnieplumly/" @click="closeMenu" target="_blank">contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { useMenu } from '@/composables/useMenu'

const { isPushOpen, isHamburgerOpen, togglePushMenu, closeMenu } = useMenu()

</script>




<style scoped>
/* Slide transition */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}

/*===================================

Fixed Nav

===================================*/
.push-nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 350px;
    height: 100vh;
    background: #262626;
    z-index: 9999;
    overflow-y: auto;
    opacity: .95;
    box-shadow: -3px 0 10px rgba(0,0,0,0.2);
}

.push-nav ul li {
    position: relative;
}

.push-nav ul li:hover {
    background-color: #61e3d3;
}

.push-nav ul li:hover a {
    color: #232323;
}

/* Nav stays fixed */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 49px;
    background-color: #171717;
    opacity: 0.95;
    z-index: 5;
}

nav ul, nav li {
    height: 49px;
}

nav li {
    padding: 0;
    cursor: pointer;
    transition: all 0.2s;
}

.push-nav ul li img {
    position: absolute;
    width: 30px;
    bottom: 15px;
    left: 27px;
    height: 30px;
}

.nav-items {
    margin: 0 auto;
    display: table;
    color: #f3f3f3;
    font-variant: small-caps;
    letter-spacing: 3px;
    font-family: 'LatoWebLight';
    font-size: 1.3em;
    position: relative;
    top: 12px;
}

nav ul li:hover {
    background-color: #61e3d3;
}

nav ul li:hover span, nav ul li:hover a {
    color: #232323;
}

/* Body shift when menu is open */
body.menu-open {
    transform: translateX(-350px);
    transition: transform 0.4s ease;
}

/*===================================

Slide Nav

===================================*/
#push-nav ul li {
    position: relative;
}

#push-nav ul li:hover {
    background-color: #61e3d3;
}

#push-nav ul li:hover a {
    color: #232323;
}

#push-nav ul li img {
    position: absolute;
    width: 30px;
    bottom: 15px;
    left: 27px;
    height: 30px;
}

#top-space {
    height: 75px;
    width: auto;
    background-color: #232323;
    border-bottom: 1px solid #000000;
    border-top: 1px solid #000000;
}

#close-button {
    cursor: pointer;
    position: absolute;
    height: 25px;
    width: 34px;
    right: 57px;
    top: 28px;
}

#top-space span:nth-child(1) {
    position: absolute;
    height: 1px;
    width: 25px;
    background: #eaeaea;
    border-radius: 2px;
    margin: 10px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

#top-space span:nth-child(2) {
    position: absolute;
    height: 1px;
    width: 25px;
    background: #eaeaea;
    border-radius: 2px;
    margin: 10px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.cbp-spmenu {
    position: fixed;
    background: #262626;
    opacity: .95;
}

.cbp-spmenu-vertical {
    width: 350px;
    height: 100%;
    top: 0;
    z-index: 3;
}

.cbp-spmenu-vertical a {
    font-family: 'LatoWebLight', sans-serif;
    border-bottom: 1px solid #000000;
    padding: 20px 15px 20px 85px;
    color: #eaeaea;
    letter-spacing: 2px;
    line-height: 20px;
    cursor: pointer;
    text-align: left;
    text-transform: uppercase;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
}

.cbp-spmenu-right {
    right: -710px;
    top: 46px;
}

.cbp-spmenu-right.cbp-spmenu-open {
    right: 0px;
    top: 46px;
    z-index: 4;
}

.cbp-spmenu a {
    display: block;
    font-size: 18px;
}

.cbp-spmenu {
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
}


/*===================================

Mobile Fixed Nav

===================================*/
.hamburger-menu {
    width: 30px;
    height: 30px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
}

.hamburger-menu span {
    display: block;
    position: absolute;
    height: 2px;
    width: 50%;
    background: #f3f3f3;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

.hamburger-menu span:nth-child(even) {
    left: 50%;
    border-radius: 0 3px 3px 0;
}

.hamburger-menu span:nth-child(odd) {
    left: 0px;
    border-radius: 3px 0 0 3px;
}

.hamburger-menu span:nth-child(1),
.hamburger-menu span:nth-child(2) {
    top: 0px;
}

.hamburger-menu span:nth-child(3),
.hamburger-menu span:nth-child(4) {
    top: 8px;
}

.hamburger-menu span:nth-child(5),
.hamburger-menu span:nth-child(6) {
    top: 16px;
}

.hamburger-menu.open span:nth-child(1),
.hamburger-menu.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.hamburger-menu.open span:nth-child(2),
.hamburger-menu.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}


.hamburger-menu.open span:nth-child(1) {
    left: 2px;
    top: 0px;
}

.hamburger-menu.open span:nth-child(2) {
    left: 13px;
    top: 0;
}

.hamburger-menu.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
}

.hamburger-menu.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
}

.hamburger-menu.open span:nth-child(5) {
    left: 2px;
    top: 11px;
}

.hamburger-menu.open span:nth-child(6) {
    left: 13px;
    top: 11px;
} 





/*========================

Responsive

========================*/
/* 768 */
@media only screen and (min-width: 48.000em) {
    #mobile-nav {
        display: none;
    }
}

/* 768 */
@media only screen and (max-width: 48.000em) {
       .row .mobile-four {
        width: 100% !important;
        float: left;
        padding: 0 15px;
    }

    nav {
        display: none;
    }

    #close-button {
        display: none;
    }

    #mobile-nav {
        position: fixed;
        height: 55px;
        background-color: #171717;
        opacity: 0.95;
        z-index: 5;
        width: 100%;
    }

    #mobile-nav ul.row {
        margin: 0 auto;
        display: flex;
    }

    #mobile-nav ul.row li a {
        display: table;
        margin: 20px auto 0 auto;
    }

    #menu-home,
    #nav-contact,
    #mobile-nav-contact {
        height: 30px;
        width: 30px;
    }
}

/* 450px */
@media only screen and (max-width: 28.125em) {
    .cbp-spmenu-right {
        top: 0;
    }

    .cbp-spmenu-right.cbp-spmenu-open {
        top: 0;
        width: 100%;
    }

    #mobile-nav {
        bottom: 0;
    }
}
</style>
