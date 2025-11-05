<template>
    <div class="page-content">
    
        <div id="google-landing" class="project-landing">
            <div class="row">
                <h1>Google<span> AI Photo</span></h1>
            </div>
        </div><!-- end landing -->

        <div class="project-container">
            <div class="bg-logo">
                <img src="/img/logo/gear.svg" alt="logo">
            </div>

            <div class="row project-overview">
                <div class="company">
                    <h3>Company: <span>GPJ</span></h3>
                    <h3>Google: <span>AI Photo</span></h3>
                </div>
                <br>

                <div class="project-copy">
                    <h4>Still not using AI to create images? You’re missing out. AI is transforming the way we bring ideas to life, faster, smarter, and more creatively than ever. To put Google’s Gemini to the test, we combined real-time personalized image generation with the craft of a latte artist. It’s where technology meets creativity, one cup at a time.

                        <br>
                        <br>

                        My role included dev resourcing, project management, creative ideation, UX/UI design, and overseeing the integration of Google’s technologies and prompt engineering.

                        <br>
                        <br>

                        This wasn’t the only activation I was involved with. I also supported the team onsite, providing extra hands and guidance for anything that came up. 
                    </h4>
                </div><!-- end of project-copy -->
            </div><!-- end of row -->



        <!-- Gallery section -->
        <div class="gallery">
                <div id="project-color"></div>

                <div class="row">
                    <div class="nine columns centered">
                        <h3>The Experience</h3>

                        <div class="header-copy ten columns centered">
                            <h4>The experience was built to highlight Gemini’s power and consistency. Attendees answered a few Madlibs-style questions, which fed into custom prompts designed to produce a specific look and recurring characters.
                                
                                <br>
                                <br>
                                Once attendees submitted their answers, Gemini generated a unique image they could instantly save via QR code. On a separate display, the latte artist could pull up each attendee’s creation and use it as inspiration to pour a one-of-a-kind foam masterpiece.
                            </h4>
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


            <!-- Project files -->
            <div class="project-files">
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
  '/img/projects/google/work/1.jpg',
  '/img/projects/google/work/2.jpg',
  '/img/projects/google/work/3.png',
  '/img/projects/google/work/4.png',
  '/img/projects/google/work/5.png',
  '/img/projects/google/work/6.png',
  '/img/projects/google/work/7.png',
  '/img/projects/google/work/8.png',
  '/img/projects/google/work/9.png',
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

Google Page

===================================*/
#google-landing {
    position: relative;
    background: url('../img/projects/google/backgrounds/google.jpg') right center no-repeat;
    min-height: 600px;
    width: 100%;
    background-color: #262626;
}

#google-landing:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: 0px 0px 220px black inset;
    pointer-events: none;
    z-index: 1;
}

/* #chingon-exclamation {
    position: relative;
    bottom: 7px;
    color: #eaeaea;
}

#chingon-machine {
    position: absolute;
    left: -200px;
    top: -150px;
    max-height: none;
} */

/*========================

Responsive

========================*/
/* 2001 */
@media only screen and (min-width: 125.063em) {

    #google-landing {
        background: url('../img/projects/google/backgrounds/google-big.jpg') right center no-repeat;
    }
}

/* 768 */
/* @media only screen and (max-width: 48.000em) {

    .chingon.left-img {
        display: none;
    }
} */

/* 500 */
@media only screen and (max-width: 31.250em) {

    #google-landing {
        background: url('../img/projects/google/backgrounds/google-mobile.jpg') right center no-repeat;
    }
}
</style>
