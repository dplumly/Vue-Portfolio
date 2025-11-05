<template>
    <div class="page-content">

        <div id="visceral_reality-landing" class="project-landing">
            <div class="row">
                <h1>Visceral<span> Reality</span></h1>
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
                    <h4>Giving great experiences for event goers is what we strive for. One way to accomplish that is by
                        delivering the most realistic experience possible. Visceral Reality is the future of simulators in
                        the present. By using technologies such as, VR, ambisonic audio, haptic feedback, intense real
                        captured motion, and a world class driver in the Lexus RC F, we have created an experience like no
                        other. 

                        <br>
                        <br>

                        Team One and Lexus aren’t in the business of building one off experiences, we create platforms. We
                        worked with the production company SCPS to create an experience that will live far past its debut at
                        the Long Beach Grand Prix. With the way this experience is built, we are able to add new footage,
                        motion, VR headsets, peripheral devices (scents, heat…), and branding to create a totally new
                        experience based on the project needs. 

                        <br>
                        <br>

                        This sim isn’t just another motion sim, but is the first of its kind. Not only can we update this
                        device, we can scale this platform to be in many areas and situations all over the globe. The goal
                        is not to have just one of these but many. Having these experiences at car shows, sporting arenas,
                        live events, and even dealerships to gain brand awareness allows the user to experience vehicles
                        they never have or couldn’t.

                        <br>
                        <br>

                        The most unique thing about this sim is the fact we captured the actual motion from the car being
                        driven. In post, we were seamlessly able to synch up the motion with the visuals. One thing on one
                        wants in a VR experience is any visuals not being synched with motion. If it wasn’t synched
                        perfectly, we definitely would’ve needed a bucket!

                        <br>
                        <br>

                    </h4>
                </div><!-- end of project-copy -->
            </div><!-- end of row -->

            <div class="gallery">
                <div id="project-color"></div>
                <ul class="row">

                    <div class="row">
                        <div class="nine columns centered">
                            <h3>Premiered at the Long Beach Grand Prix
                            </h3>
                            <div class="header-copy ten columns centered">
                                <h4>It has also been ported to other devices such as Samsung Gear for other events.</h4>
                            </div>
                        </div>
                    </div>


                    <li 
                        v-for="(img, i) in visceralRealityGallery1" 
                        :key="i" 
                        class="four column fadeIn"
                        v-scroll-reveal="{ delay: Math.floor(i / 3) * 200 }">
                        <img :src="img" class="img-gallery" @click="openLightbox(i, visceralRealityGallery1)" />
                    </li>
                </ul>
            </div><!-- end gallery -->


            <div class="gallery">
                <div class="row">
                    <div class="nine columns centered">
                        <h3>We have experimented with Haptic Feedback for years
                        </h3>
                        <div class="header-copy ten columns centered">
                            <h4>Visceral Reality was equipped with wind and we installed this prototype on our sim at Team
                                One.</h4>
                        </div>
                    </div>
                </div>


                <ul class="row">
                    <li 
                        v-for="(img, i) in visceralRealityGallery2" 
                        :key="i" 
                        class="four column fadeIn"
                        v-scroll-reveal="{ delay: Math.floor(i / 3) * 200 }">
                        <img :src="img" class="img-gallery" @click="openLightbox(i, visceralRealityGallery2)" />
                    </li>
                </ul>
            </div><!-- end gallery -->


            <!-- Video for project -->
            <div class="video-container">
                <div class="row">
                    <div class="video-description nine columns centered">
                        <h3>Testing the fan mapped to the speed in a video game
                        </h3>
                    </div>

                    <div class="row">
                        <div class="fadeIn youtube-responsive" v-scroll-reveal>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/5TY61rPqiqo" frameborder="0"
                                allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Files associated with project -->
            <div class="project-files">
                <div class="row">
                    <div class="nine columns centered">
                        <h3>
                            Haptics in VR installations is a must for user experience
                        </h3>
                    </div>
                </div>

                <div class="left-content">
                    <div class="row">
                        <div class="columns six">
                            <img id="haptics" class="left-img" v-scroll-reveal src="/img/projects/visceral_reality/results/haptic.png"
                                alt="Haptics photo">
                        </div>

                        <div class="left-info columns six">
                            <h4>Haptics are the subtle points of contact that truly immerse a person. We take most haptics
                                for granted since we don't notice them. Apple has done a great job of integrating haptics
                                that feel natural to the user experience.
                            </h4>
                            <img src="/img/projects/visceral_reality/results/vibration-logo.svg" alt="Vibration icon">
                        </div>
                    </div>
                </div>

                <div class="right-content">
                    <div class="row">
                        <div class="right-info columns six">
                            <h4>I was lucky enough to go with the experience while it was at the Long Beach Grand Prix.
                                Sure, I had to work for free all weekend, but I also got to help people through the
                                experience and get feedback. It was extremely rewarding to see how well the machine
                                performed and people's reactions.</h4>

                            <img src="/img/projects/visceral_reality/results/ux-logo.svg" alt="UX icon">

                            <!-- More Projects Component -->
                            <MoreProjects />

                        </div>
                        <div class="columns six">
                            <img id="vr-platform" class="right-img" v-scroll-reveal
                                src="/img/projects/visceral_reality/results/VR-platform.png" alt="VR platform">
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
import MoreProjects from '@/components/MoreProjects.vue'
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const visceralRealityGallery1 = [
  'img/projects/visceral_reality/work/visceral_reality1.jpg',
  'img/projects/visceral_reality/work/visceral_reality2.jpg',
  'img/projects/visceral_reality/work/visceral_reality3.jpg',
  'img/projects/visceral_reality/work/visceral_reality4.jpg',
  'img/projects/visceral_reality/work/visceral_reality5.jpg',
  'img/projects/visceral_reality/work/Lexus-VR-viewer.jpg',
]

const visceralRealityGallery2 = [
  'img/projects/visceral_reality/work/visceral_reality-fan2.jpg',
  'img/projects/visceral_reality/work/visceral_reality-fan.jpg',
  'img/projects/visceral_reality/work/visceral_reality-fan-blade.jpg',
]

// Lightbox state (these were missing)
const lightboxVisible = ref(false)
const lightboxIndex = ref(0)
const currentImages = ref([])

function openLightbox(index, imagesArray) {
    currentImages.value = imagesArray
    lightboxIndex.value = index
    lightboxVisible.value = true
}
</script>

<style scoped>
/*===================================

Visceral Velocity Page

===================================*/
#visceral_reality-landing {
    position: relative;
    background: url('../img/projects/visceral_reality/backgrounds/visceral_reality.jpg') left center no-repeat;
    min-height: 600px;
    width: 100%;
    background-color: #262626;
    background-position: 0 -193px;
}

#visceral_reality-landing:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: 0px 0px 220px black inset;
    pointer-events: none;
    z-index: 1;
}

#vr-platform {
    max-width: 1000px;
    right: -383px;
    position: absolute
}

#haptics {
    left: -300px;
    position: absolute;
    min-width: 615px;
    max-height: none;
}

/*========================

Responsive

========================*/
/* 2001 */
@media only screen and (min-width: 125.063em) {

    #visceral_reality-landing {
        background: url('../img/projects/visceral_reality/backgrounds/visceral-reality-big.jpg') no-repeat center center;
    }
}

/* 500 */
@media only screen and (max-width: 31.250em) {

    #visceral_reality-landing {
        background: url('../img/projects/visceral_reality/backgrounds/visceralMobile.jpg') no-repeat center center;
    }
}


</style>
