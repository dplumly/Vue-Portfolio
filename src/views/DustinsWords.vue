<template>
    <div class="page-content">
        <div id="dustins-words-landing" class="project-landing">
            <div class="row">
                <h1>Dustin's <span>Words</span></h1>
            </div>
        </div><!-- end landing -->


        <div class="project-container">
            <div class="bg-logo">
                <img src="/img/logo/gear.svg" alt="Donnie Plumly logo">
            </div>

            <div class="row project-overview">
                <div class="company">
                    <h3>Company: <span>Dustin's Words</span></h3>
                </div>
                <br>

                <div class="project-copy">
                    <h4>Imagine a life where you could understand everything that is being said, but physically can’t
                        communicate back. That is a common occurrence for people who suffer from Autism. The project started
                        with Matt Reamer making a device for his brother Dustin to be able to communicate with his Mom over
                        text messages.

                        <br>
                        <br>

                        We started with Dustin, but have found others. The cost and functionality of similar devices on the
                        market make devices like these unobtainable for most. Our goal is to get this device into the hands
                        of people that need it.

                        <br>
                        <br>

                        In 2015 our Indegogo raised enough money for us to figure things out and do the work. With the help
                        of the generous people that donated these devices are cost free for the ones in need. It has been a
                        long road with a lot of bumps, but we are almost to the end.
                    </h4>
                </div><!-- end project-copy -->
            </div><!-- end row -->


            <div class="gallery">
                <div class="row">
                    <div class="nine columns centered">
                        <h3>Many iterations to the current device
                        </h3>
                        <div class="header-copy ten columns centered">
                            <h4>We started out with a foam core box full of wires, then a 3d printed enclosure, and finally
                                created the polished version.</h4>
                        </div>
                    </div>
                </div>


                <ul class="row">
                    <li 
                        v-for="(img, i) in dustinsWordsImages" 
                        :key="i" 
                        class="four column"
                        v-scroll-reveal="{ delay: Math.floor(i / 3) * 200 }">
                        <img :src="img" class="img-gallery" @click="openLightbox(i)" />
                    </li>
                </ul>
            </div><!-- end gallery -->


            <!-- Link to project site  -->
            <div id="dw-site-bg" class="site-link">
                <div class="row">
                    <div class="six columns centered">
                        <a href="https://dustins-words.github.io/Dustins-Words/index.html" target="blank">
                            <img src="/img/projects/dustins-words/results/DW-logo.svg" alt="Dustin's Words Logo">
                        </a>
                        <h4>Click the logo to check out the Dustin's Words Website</h4>
                    </div>
                </div>
            </div>


            <!-- Files associated with project -->
            <div class="project-files">
                <div class="row">
                    <div class="nine columns centered">
                        <h3>
                            Dustin's Words is an open source project
                        </h3>
                    </div>
                </div>

                <div class="left-content">
                    <div class="row">
                        <div class="columns six">
                            <img id="dustins-words-model" class="left-img" v-scroll-reveal
                                src="/img/projects/dustins-words/results/dw-model.png" alt="3D model photo">
                        </div>

                        <div class="left-info columns six">
                            <h4>Models can be found at Thingiverse from the link below. At Thingiverse you can find
                                completed models like the final DW version and the older version. Both will work, but the
                                older version is a little easier to print and work with.
                            </h4>
                            <img src="/img/projects/dustins-words/results/3d.svg" alt="3d icon">
                            <div class="button-container">
                                <a class="btn btn-1 btn-1e" href="https://cults3d.com/en/users/dplumly/3d-models"
                                    target="_blank">
                                    3d models</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="right-content">
                    <div class="row">
                        <div class="right-info columns six">
                            <h4>We built Dustin's Word's using a Particle Board. Here you can find all the code for the
                                project. We believe in this product and want to spread the word and get them in the hands of
                                people that need them!</h4>

                            <img src="/img/projects/dustins-words/results/github.svg" alt="Github icon">
                            <div class="button-container">
                                <a class="btn btn-1 btn-1e" href="https://github.com/Dustins-Words"
                                    target="_blank">Github</a>
                            </div>

                             <!-- More Projects Component -->
                            <MoreProjects />

                        </div>
                        <div class="columns six">
                            <img class="right-img" v-scroll-reveal src="/img/projects/dustins-words/results/dw-code.jpg"
                                alt="Dustin's Words Code photo">
                        </div>
                    </div>
                </div>
            </div><!-- end project files -->
        </div><!-- end project container -->


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

const dustinsWordsImages = [
  '/img/projects/dustins-words/work/foam_core_prototype.jpg',
  '/img/projects/dustins-words/work/foam_core_prototype2.jpg',
  '/img/projects/dustins-words/work/buttons.jpg',
  '/img/projects/dustins-words/work/button_cables.jpg',
  '/img/projects/dustins-words/work/DW-3D-Printing.jpg',
  '/img/projects/dustins-words/work/hole-saw.jpg',
  '/img/projects/dustins-words/work/3d_printed_prototype.jpg',
  '/img/projects/dustins-words/work/3d_printed_prototype2.jpg',
  '/img/projects/dustins-words/work/custom-buttons2.jpg',
  '/img/projects/dustins-words/work/dw-mold.jpg',
  '/img/projects/dustins-words/work/DW-Device.jpg',
  '/img/projects/dustins-words/work/Exploaded.jpg',
  '/img/projects/dustins-words/work/sanded.jpg',
  '/img/projects/dustins-words/work/first_version.jpg',
]

// Lightbox state
const lightboxVisible = ref(false)
const lightboxIndex = ref(0)
const currentImages = ref([])

function openLightbox(index) {
    currentImages.value = dustinsWordsImages; 
    lightboxIndex.value = index;
    lightboxVisible.value = true;
}
</script>

<style scoped>
/*===================================

Dustin's Words

===================================*/
#dustins-words-landing {
    position: relative;
    background: url('../img/projects/dustins-words/backgrounds/dustins-words.jpg') no-repeat center center;
    min-height: 600px;
    width: 100%;
    background-color: #262626;
}

#dustins-words-landing:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: 0px 0px 220px black inset;
    pointer-events: none;
    z-index: 1;
}

#dw-site-bg {
    background: url('../img/projects/dustins-words/backgrounds/dw-bg.jpg') fixed center no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

#dustins-words-model {
    left: -400px;
    position: absolute;
    min-width: 900px;
}
/*========================

Responsive

========================*/
/* 2001 */
@media only screen and (min-width: 125.063em) {

    #dustins-words-landing {
        background: url('../img/projects/dustins-words/backgrounds/dustins-words-big.jpg') no-repeat center center;
    }
}


/* 500 */
@media only screen and (max-width: 31.250em) {

    #dustins-words-landing {
        background: url('../img/projects/dustins-words/backgrounds/dustinsWordsMobile.jpg') no-repeat center center;
    }

    #dw-site-bg {
        background: url('../img/projects/dustins-words/backgrounds/dw-bgMobile.jpg') no-repeat center center;
    }

    .section-one {
        background: url('../img/projects/IBMactivations/backgrounds/section-one-dust-mobile.jpg') center center no-repeat;
    }

    
}

</style>
