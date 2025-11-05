<template>
  <div class="page-content">
    
    <!-- Landing -->
    <div id="chingon-pong-landing" class="project-landing">
      <div class="row">
        <h1><span id="chingon-exclamation">¡</span>Chingon<span> Pong!</span></h1>
      </div>
    </div>

    <!-- Project container -->
    <div class="project-container">
      <div class="bg-logo">
        <img src="/img/logo/gear.svg" alt="logo">
      </div>

      <!-- Project overview -->
      <div class="row project-overview">
        <div class="company">
          <h3>Company: <span>Team One</span></h3>
          <h3>Pitch: <span>Four Corner Brewery Co</span></h3>
        </div>
        <br>
        <div class="project-copy">
          <h4>
            Team One has events called Moonshot where speakers come tell their story. At some of these events we
					want to do something special that relates to the speaker. This Moonshot we had George Esquivel from
					Four Corner Brewery Co. in Dallas speak at the new Team One Office.

					<br>
					<br>

					Four Corner Brewery Co. is special in many ways. One we noticed was their unique personality and
					innovative cans. These cans don’t open like any old can of beer. They have a pull tab that removes a
					large opening so you can drink from a can like you were from a mug. I like to think of it as a beer
					can for adults.

					<br>
					<br>

					To show how awesome these cans are we made a game that utilizes the large opening. Do you remember
					beer pong? Well, we made Chingon Pong, beer pong on steroids! This game has 90 cans that a ping pong
					ball can fall through scoring you points and giving unique interactions with their different
					flavors.

					<br>
					<br>

					This build was completed by a very small team inside of Team One within 2 weeks. We had to
					completely think of how the game would be played, challenging but not too hard, and how we would
					build it. Not to mention we were building this in LA and then shipping it to Dallas. Therefore, the
					design of the machine was critical.

					<br>
					<br>
          </h4>
        </div>
      </div>

      <!-- Video -->
      <div class="video-container">
            <div class="row">
                <div class="video-description nine columns centered">
                <h3>Case study</h3>
                </div>
                <div class="row">
                    <div class="youtube-responsive" v-scroll-reveal>
                        <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/-dLw3ipWiNo" 
                        frameborder="0"
                        allow="autoplay; encrypted-media" 
                        allowfullscreen
                        />
                    </div>
                </div>
            </div>
        </div>

      <!-- Gallery section -->
      <div class="gallery">
            <div id="project-color"></div>

            <div class="row">
                <div class="nine columns centered">
                    <h3>The machine</h3>
                    <div class="header-copy ten columns centered">
                        <h4>The machine was played at 3 locations. Team one LA (not nearly long enough) Team One Dallas Moonshot, and Four Corner Brewery. In LA, we had about 20 minutes to play it for testing and then shipped it out. We all wish we had more time to have fun with it since we were on such a tight schedule.</h4>
                    </div>
                </div>
            </div>

                <ul class="row">
                    <li
                        v-for="(img, i) in chingonMachineGallery"
                        :key="i"
                        class="four column fadeIn"
                        v-scroll-reveal="{ delay: Math.floor(i / 3) * 200 }"
                        @click="openLightbox(i, chingonMachineGallery)"
                    >
                        <img :src="img" class="img-gallery" />
                    </li>
                </ul>
        </div>

        <div class="gallery">
            <div class="row">
            <div class="nine columns centered">
                <h3>Build process</h3>
                <div class="header-copy ten columns centered">
                <h4>We tried to document the best we could with the little extra time we had. These show the overall construction, wiring and testing of the game.</h4>
                </div>
            </div>
            </div>

            <ul class="row">
                <li
                    v-for="(img, i) in chingonBuildGallery"
                    :key="i"
                    class="four column fadeIn"
                    v-scroll-reveal="{ delay: Math.floor(i / 3) * 200 }"
                    @click="openLightbox(i, chingonBuildGallery)"
                >
                    <img :src="img" class="img-gallery" />
                </li>
            </ul>
        </div>

        <!-- Project files -->
        <div class="project-files">
                <div class="row">
                    <div class="nine columns centered">
                        <h3>We could not be happier with the results</h3>
                        <div class="header-copy ten columns centered">
                            <h4>Four Corners Brewery wants to keep the machine at their brewery for patrons to play. Chingon Pong did exactly what it was supposed to do by opening the door for a conversation.</h4>
                        </div>
                    </div>
                </div>

            <div class="left-content">
                <div class="row">
                    <div class="columns six">
                        <img id="chingon-machine" class="left-img" v-scroll-reveal
                        src="/img/projects/chingonPong/results/chingon-pong.png" alt="photo of machine">
                    </div>

                    <div class="left-info columns six">
                        <h4>We hope this was the first project of many for Four Corner Brewery. This installation was very challenging to get done in the 2 weeks we had. I knew we could pull it off, but I don't think my wife will ever forget.</h4>
                        <img src="/img/projects/chingonPong/results/chingon-icon.svg" alt="logo icon">
                    </div>
                </div>
            </div>

            <!-- More Projects Component -->
            <MoreProjects />

        </div>
    </div>

    <!-- Lightbox Modal -->
    <VueEasyLightbox
        :visible="lightboxVisible"
        :imgs="currentImages"
        :index="lightboxIndex"
        @hide="lightboxVisible = false"
    />


  </div>
</template>

<script setup>
import MoreProjects from '@/components/MoreProjects.vue'
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const chingonMachineGallery = [
  '/img/projects/chingonPong/work/pong1.jpg',
  '/img/projects/chingonPong/work/pong2.jpg',
  '/img/projects/chingonPong/work/pong3.jpg',
  '/img/projects/chingonPong/work/pong4.jpg',
  '/img/projects/chingonPong/work/pong5.jpg',
  '/img/projects/chingonPong/work/pong6.jpg',
  '/img/projects/chingonPong/work/pong7.jpg',
  '/img/projects/chingonPong/work/pong8.jpg',
  '/img/projects/chingonPong/work/pong9.jpg',
  '/img/projects/chingonPong/work/pong10.jpg',
  '/img/projects/chingonPong/work/pong11.jpg',
  '/img/projects/chingonPong/work/pong12.jpg',
  '/img/projects/chingonPong/work/pong13.jpg',
]

const chingonBuildGallery = [
  '/img/projects/chingonPong/work/build1.jpg',
  '/img/projects/chingonPong/work/build2.jpg',
  '/img/projects/chingonPong/work/build3.jpg',
  '/img/projects/chingonPong/work/build4.jpg',
  '/img/projects/chingonPong/work/build5.jpg',
  '/img/projects/chingonPong/work/build6.jpg',
  '/img/projects/chingonPong/work/build7.jpg',
  '/img/projects/chingonPong/work/build8.jpg',
  '/img/projects/chingonPong/work/build9.jpg',
  '/img/projects/chingonPong/work/build10.jpg',
  '/img/projects/chingonPong/work/build11.jpg',
  '/img/projects/chingonPong/work/build12.jpg',
  '/img/projects/chingonPong/work/build13.jpg',
  '/img/projects/chingonPong/work/build14.jpg',
  '/img/projects/chingonPong/work/build15.jpg',
]

// 💡 Lightbox State
const lightboxVisible = ref(false)
const lightboxIndex = ref(0)
const currentImages = ref([])

// 🔍 Open Lightbox
function openLightbox(index, gallery) {
  currentImages.value = gallery
  lightboxIndex.value = index
  lightboxVisible.value = true
}
</script>

<style scoped>
/*===================================

Chingon Pong Page

===================================*/
#chingon-pong-landing {
    position: relative;
    background: url('../img/projects/chingonPong/backgrounds/chingon-pong.jpg') right center no-repeat;
    min-height: 600px;
    width: 100%;
    background-color: #262626;
}

#chingon-pong-landing:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: 0px 0px 220px black inset;
    pointer-events: none;
    z-index: 1;
}

#chingon-exclamation {
    position: relative;
    bottom: 7px;
    color: #eaeaea;
}

#chingon-machine {
    position: absolute;
    left: -200px;
    top: -150px;
    max-height: none;
}

/*========================

Responsive

========================*/
/* 2001 */
@media only screen and (min-width: 125.063em) {

    #chingon-pong-landing {
        background: url('../img/projects/chingonPong/backgrounds/chingon-pong-big.jpg') right center no-repeat;
    }
}

/* 768 */
@media only screen and (max-width: 48.000em) {

    .chingon.left-img {
        display: none;
    }
}

/* 500 */
@media only screen and (max-width: 31.250em) {

    #chingon-pong-landing {
        background: url('../img/projects/chingonPong/backgrounds/chingonPongMobile.jpg') right center no-repeat;
    }
}
</style>




