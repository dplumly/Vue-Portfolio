<template>
    <div class="page-content">
        
        <div id="LC_soundbooth-landing" class="project-landing">
            <div class="row">
                <h1>LC 500<span> Sound booth</span></h1>
            </div>
        </div><!-- end landing -->



        <div class="project-container">
            <div class="bg-logo">
                <img src="/img/logo/gear.svg" alt="logo">
            </div>

            <div class="row project-overview">
                <div class="company">
                    <h3>Company: <span>Team One</span></h3>
                    <h3>Client: <span>Lexus</span></h3>
                </div>
                <br>

                <div class="project-copy">
                    <h4>The Lexus audio experiment was the perfect way to introduce the Lexus LC to the audience at SEMA.
                        The sound of the LC is in comparison with other high-grade performance cars. 

                        <br>
                        <br>

                        As a way to position Lexus as a serious contender in the performance category, this installation was
                        the perfect fit. This gave the car industry audience at SEMA the chance to guess the brand to the
                        sound through a 9.1 surround sound experience. At first this project started out as a virtual
                        reality project. This time in history everyone is pushing the newest hottest thing, VR. One has to
                        look at what is trying to achieved and pick the best platform for the concept. The Creative
                        Technology team knew that VR was not the best option for this vehicle.

                        <br>
                        <br>

                        The new LC 500 being in a class of its own we knew we needed to be as realistic as possible. We
                        wanted to show the vehicle without actually showing the vehicle. We stripped away all the senses
                        except sound to have people feel the raw power of the LC 500.

                        <br>
                        <br>

                        We had to figure out all the technical requirements, how all the different parts were going to work
                        together, and sell the idea to client. To do this we built a room to the exact same size as the
                        actual experience inside of Team One. It was a long week of testing and weekend of framing to get
                        the thumbs up by the client in seconds. 

                        <br>
                        <br>

                        We went above what we usually do for this project . We were heavily involved in the whole flow of
                        the project from creation to production. We travelled with the experience and gave support to ensure
                        it was done to Lexus standards.
                    </h4>
                </div><!-- end of project-copy -->
            </div><!-- end of row -->


            <!-- Video for project -->
            <div class="video-container">
                <div class="row">
                    <div class="video-description nine columns centered">
                        <h3>Case study
                        </h3>
                    </div>

                    <div class="row">
                        <div class="fadeIn" v-scroll-reveal style="padding:56.25% 0 0 0;position:relative;">
                            <iframe
                                src="https://player.vimeo.com/video/220500261?title=0&byline=0&portrait=0"
                                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                                frameborder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div><!-- end video container -->


             <div class="gallery">
                <div class="row">
                    <div class="nine columns centered">
                        <h3>Prototype created to for client approval
                        </h3>
                        <div class="header-copy ten columns centered">
                            <h4>It was the exact size of the trailer to give the clients a feel of the confinement and
                                volume. It took us 3 days to create the prototype for a 15 minute meeting with the client
                                for the green light.</h4>
                        </div>
                    </div>
                </div>

                <ul class="row">
                    <li
                        v-for="(img, i) in lcSoundboothGallery1"
                        :key="i"
                        class="four column fadeIn"
                         v-scroll-reveal="{ delay: Math.floor(i / 3) * 200 }"
                        @click="openLightbox(i, lcSoundboothGallery1)"
                    >
                        <img :src="img" class="img-gallery" />
                    </li>
                </ul>
            </div><!-- end gallery -->



            <div class="gallery">
                <div id="project-color"></div>
                <div class="row">
                    <div class="nine columns centered">
                        <h3>LC 500 Sonic Challenge premiered at SEMA 2016</h3>
                    </div>
                </div>

                 <ul class="row">
                    <li
                        v-for="(img, i) in lcSoundboothGallery2"
                        :key="i"
                        class="four column fadeIn"
                         v-scroll-reveal="{ delay: Math.floor(i / 3) * 200 }"
                        @click="openLightbox(i, lcSoundboothGallery2)"
                    >
                        <img :src="img" class="img-gallery" />
                    </li>
                </ul>
            </div><!-- end gallery -->


            <!-- Link to project site  -->
            <div id="soundbooth-site-bg" class="site-link">
                <div class="row">
                    <div class="six columns centered">
                            <img src="/img/projects/LC_soundbooth/results/soundbooth-logo.svg" alt="LC 500 Sound Booth logo">
                    </div>
                </div>
            </div>


            <!-- Files associated with project -->
            <div class="project-files">
                <div class="row">
                    <div class="nine columns centered">
                        <h3>
                            The LC 500 Sonic Challenge had an extended life span with many brand extensions
                        </h3>
                    </div>
                </div>

                <div class="left-content">
                    <div class="row">
                        <div class="columns six">
                            <img id="soundwave" class="left-img" v-scroll-reveal
                                src="/img/projects/LC_soundbooth/results/intro_soundwave.png" alt="soundwave">
                        </div>

                        <div class="left-info columns six">
                            <h4>This was an experience like no other. At this time everyone was pushing VR but, we knew that
                                isolating senses was the best option. The project went on for an extremely long time. It was
                                being shipped all over the US over a year after the premiere at SEMA.
                            </h4>
                            <img src="/img/projects/LC_soundbooth/results/travel.svg" alt="travel icon">
                        </div>
                    </div>
                </div>

                <div class="right-content">
                    <div class="row">
                        <div class="right-info columns six">
                            <h4>This project branched off into many extensions. At events with the trailer we had listening
                                kiosks set up with 7.1 surround sound headphones. These traveled to smaller venues when the
                                trailer was too large. The audio was also inside of select movie theaters. We remastered the
                                audio for their systems to reach as large of an audience possible.</h4>

                            <img src="/img/projects/LC_soundbooth/results/movie.svg" alt="Movie icon">
                            <div class="row">

                                 <!-- More Projects Component -->
                                <MoreProjects />

                            </div>
                        </div>
                        <div class="columns six">
                            <img class="soundbooth-right-img" v-scroll-reveal src="/img/projects/LC_soundbooth/results/LC_soundbooth.png"
                                alt="Soundbooth trailer">
                        </div>
                    </div>
                </div>
            </div><!-- end project files -->
        </div><!-- end of project-container -->

        <!-- Lightbox modal -->
        <VueEasyLightbox
            :visible="lightboxVisible"
            :imgs="currentImages"
            :index="lightboxIndex"
            @hide="lightboxVisible = false"
        />
    </div>
</template>



<script setup>
import { ref, onMounted } from 'vue'
import MoreProjects from '@/components/MoreProjects.vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import Player from '@vimeo/player'

// Lightbox state
const lightboxVisible = ref(false)
const lightboxIndex = ref(0)
const currentImages = ref([])

// LC Soundbooth Gallery 1
const lcSoundboothGallery1 = [
  'img/projects/LC_soundbooth/work/prototype1.jpg',
  'img/projects/LC_soundbooth/work/prototype2.jpg',
  'img/projects/LC_soundbooth/work/prototype3.jpg',
  'img/projects/LC_soundbooth/work/prototype4.jpg',
  'img/projects/LC_soundbooth/work/truck_back.jpg',
  'img/projects/LC_soundbooth/work/soundbooth_ASV.jpg',
  'img/projects/LC_soundbooth/work/testing_lights.jpg',
]

// LC Soundbooth Gallery 2
const lcSoundboothGallery2 = [
  'img/projects/LC_soundbooth/work/hero.jpg',
  'img/projects/LC_soundbooth/work/site.jpg',
  'img/projects/LC_soundbooth/work/end-card.jpg',
  'img/projects/LC_soundbooth/work/sema.jpg',
  'img/projects/LC_soundbooth/work/lc500.jpg',
]


function openLightbox(index, images) {
    currentImages.value = images
    lightboxIndex.value = index
    lightboxVisible.value = true
}



onMounted(() => {
  const iframe = document.querySelector('iframe')
  if (iframe) {
    const player = new Player(iframe)
    // Example: log when video is ready
    player.on('loaded', () => console.log('Vimeo player ready'))
  }
})
</script>

<style scoped>
/*===================================

LC 500 Soundbooth Page

===================================*/
#LC_soundbooth-landing {
    position: relative;
    background: url('../img/projects/LC_soundbooth/backgrounds/LC_soundbooth.jpg') center left no-repeat;
    min-height: 600px;
    width: 100%;
    background-color: #262626;
    background-position: 0 -193px;
}

#LC_soundbooth-landing:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: 0px 0px 220px black inset;
    pointer-events: none;
    z-index: 1;
}

#soundbooth-site-bg {
    background: url('../img/projects/LC_soundbooth/backgrounds/sound-wave.jpg') fixed center no-repeat;
    background-color: #000;
}

img.soundbooth-right-img {
    position: absolute;
    right: -525px;
    max-width: none;
}

#soundwave {
    left: -400px;
    position: absolute;
    min-width: 800px;
}


/*========================

Responsive

========================*/
/* 2001 */
@media only screen and (min-width: 125.063em) {

    #LC_soundbooth-landing {
        background: url('../img/projects/LC_soundbooth/backgrounds/LC-soundbooth-big.jpg') no-repeat center center;
    }
}

/* 850 */
@media only screen and (max-width: 53.125em) {
    img.soundbooth-right-img {
        right: -620px;
    }
}

/* 768 */
@media only screen and (max-width: 48.000em) {

    img.soundbooth-right-img {
        display: none;
    }
}

/* 600 */
@media only screen and (max-width: 37.500em) {

    #soundbooth-site-bg {
        background: url('../img/projects/LC_soundbooth/backgrounds/sound-waveMobile.jpg') fixed center no-repeat;
    }
}

/* 500 */
@media only screen and (max-width: 31.250em) {

    #LC_soundbooth-landing {
        background: url('../img/projects/LC_soundbooth/backgrounds/sound-waveMobile.jpg') no-repeat center center;
    }
}
</style>
