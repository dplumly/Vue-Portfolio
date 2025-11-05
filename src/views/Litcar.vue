<template>
    <div class="page-content">
        <div id="litIS-landing" class="project-landing">
            <div class="row">
                <h1>Lit<span> IS</span></h1>
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
				<h4>The Lit IS is a moving piece of artistic advertising comprised of 41,999 programmable LEDs. I know
					what you are saying; couldn’t the have fit one more LED to make an even 42,000? Yes, but then you
					wouldn’t ask that question.

					<br>
					<br>

					Besides having 41,999 LEDs, the Lit IS also is comprised or 20 microcontrollers, a six 12-volt
					battery bank in the back seat, and is 175,000 lumens. The Lit IS creates a unique form of
					advertising because it doesn’t seem like a typical form of advertising. The Lit IS really excels in
					the event space by being a passive mind-blowing attraction.

					<br>
					<br>

					I have been on numerous shoots, events, and held trainings for the vehicle and work with the same
					LEDs on a weekly basis. We in creative technology work with these LED strips generally called
					“Neopixels” all the time. These strips are very popular due to the addressable nature of them and
					ease of use.

					<br>
					<br>

					We have built many things with Neopixels, such as, a sound reactive prototype to show a small-scale
					version of the sound reactive mode on the Lit IS to one of a kind Neopixel mini Lexus grill. The Lit
					IS was produced by the production companies TOOL and SPCS. We have continued to work with SCPS on
					Lit IS and other projects.
				</h4>
			</div><!-- end of project-copy -->
		</div><!-- end of row -->



		<!-- Video for project -->
		<div class="video-container">
			<div class="row">
				<div class="video-description nine columns centered">
					<h3>Signals: Lexus LIT IS Reveal Video
					</h3>
				</div>

				<div class="row">
					<div class="fadeIn youtube-responsive" v-scroll-reveal>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/AcYVAfAMono" frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen></iframe>
					</div>
				</div>
			</div>
		</div><!-- end video container -->



		<div class="gallery">
			<div id="project-color"></div>
			<div class="row">
				<div class="nine columns centered">
					<h3>Production shoots, events, trainings to mechanical calls
					</h3>
					<div class="header-copy ten columns centered">
						<h4>I got to go to a ton of events to make sure everything went smooth. Lit IS was featured in a
							bunch of different productions so I got to be on set to fix any issues that may arise as
							well as train Lexus employees on how it works.</h4>
					</div>
				</div>
			</div>


            <ul class="row">
                <li
                    v-for="(img, i) in litISGallery1"
                    :key="i"
                    class="four column fadeIn"
                     v-scroll-reveal="{ delay: Math.floor(i / 3) * 200 }"
                    @click="openLightbox(i, litISGallery1)"
                >
                    <img :src="img" class="img-gallery" />
                </li>
            </ul>
		</div><!-- end gallery -->


		<div class="gallery">
			<div class="row">
				<div class="nine columns centered">
					<h3>Prototypes of Lit IS functionality
					</h3>
					<div class="header-copy ten columns centered">
						<h4>This even turned into a different project for a Lexus Desktop Trophy. This is 3d
							printed
							with electronics inside that shines through a logo we created from a mold.</h4>
					</div>
				</div>
			</div>
			
            <ul class="row">
                <li
                    v-for="(img, i) in litISGallery2"
                    :key="i"
                    class="four column fadeIn"
                     v-scroll-reveal="{ delay: Math.floor(i / 3) * 200 }"
                    @click="openLightbox(i, litISGallery2)">
                    <img :src="img" class="img-gallery" />
                </li>
            </ul>

		</div><!-- end gallery -->


		<!-- Video for project -->
		<div class="video-container">
			<div class="row">
				<div class="video-description nine columns centered">
					<h3>Sound reactive prototype to show functionality
					</h3>
				</div>

				<div class="row">
					<div class="fadeIn youtube-responsive" v-scroll-reveal>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/3JRYYKgTp-8?rel=0"
							frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
					</div>
				</div>
			</div>
		</div><!-- end video container -->


		<!-- Files associated with project -->
		<div class="project-files">
			<div class="row">
				<div class="nine columns centered">
					<h3>
						Here are the files to make your own!
					</h3>
					<div class="header-copy ten columns centered">
						<h4>Project files are below. On the github page you will see a list of the parts with
							links.
						</h4>
					</div>
				</div>
			</div>

			<div class="left-content">
				<div class="row">
					<div class="columns six">
						<img id="lit-is-model" class="left-img" v-scroll-reveal src="/img/projects/LitIS/results/lit-model.png"
							alt="3D model photo">
					</div>

					<div class="left-info columns six">
						<h4>Model can be found at cults3d from the link below. You will need an Arduino Uno,
							a
							microphone sound sensor, Neopixel strip, and an external 5v power supply.
						</h4>
						<img src="/img/projects/LitIS/results/3d.svg" alt="3d icon">
						<div class="button-container">
							<a class="btn btn-1 btn-1e" href="https://cults3d.com/en/3d-model/tool/arduino-sound-reactive-box"
								target="blank">3d model</a>
						</div>
					</div>
				</div>
			</div>

                <div class="right-content">
                    <div class="row">
                        <div class="right-info columns six">
                            <h4>The code can be found at Github. As with any code I post publically this is open
                                source.
                                Feel free to do whatever with it you would like!</h4>
                            <img src="/img/projects/LitIS/results/github.svg" alt="Github icon">
                            <div class="button-container">
                                <a class="btn btn-1 btn-1e"
                                    href="https://github.com/dplumly/Arduino/tree/master/Sound_Reactive_Neopixel"
                                    target="blank">Github
                                </a>
                            </div>


                            <!-- More Projects Component -->
                            <MoreProjects />


                        </div>
                        <div class="columns six">
                            <img class="right-img" v-scroll-reveal src="/img/projects/LitIS/results/litIS-code.jpg" alt="Lit IS code">
                        </div>
                    </div>
                </div>
            </div>
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


// Lightbox state
const lightboxVisible = ref(false)
const lightboxIndex = ref(0)
const currentImages = ref([])

const litISGallery1 = [
  '/img/projects/LitIS/work/litIS1.jpg',
  '/img/projects/LitIS/work/litIS2.jpg',
  '/img/projects/LitIS/work/litIS3.jpg',
  '/img/projects/LitIS/work/litIS4.jpg',
  '/img/projects/LitIS/work/litIS5.jpg',
  '/img/projects/LitIS/work/litIS6.jpg',
  '/img/projects/LitIS/work/litLog.jpg',
]


const litISGallery2 = [
  '/img/projects/LitIS/work/litCar-prototype1.jpg',
  '/img/projects/LitIS/work/litCar-prototype2.jpg',
  '/img/projects/LitIS/work/litProto1.jpg',
  '/img/projects/LitIS/work/litProto2.jpg',
  '/img/projects/LitIS/work/2_part_cast.jpg',
  '/img/projects/LitIS/work/litProto3.jpg',
]

function openLightbox(index, images) {
    currentImages.value = images
    lightboxIndex.value = index
    lightboxVisible.value = true
}

</script>

<style scoped>
/*===================================

Lit IS 

===================================*/
#litIS-landing {
    position: relative;
    background: url('../img/projects/LitIS/backgrounds/litIS.jpg') no-repeat center center;
    min-height: 600px;
    width: 100%;
    background-color: #262626;
}

#litIS-landing:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: 0px 0px 220px black inset;
    pointer-events: none;
    z-index: 1;
}

#lit-is-model {
    left: -400px;
    position: absolute;
    min-width: 900px;
}

/*========================

Responsive

========================*/
/* 2001 */
@media only screen and (min-width: 125.063em) {

    #litIS-landing {
        background: url('../img/projects/LitIS/backgrounds/litIS-big.jpg') no-repeat center center;
    }
}


/* 500 */
@media only screen and (max-width: 31.250em) {

    #litIS-landing {
        background: url('../img/projects/LitIS/backgrounds/litisMobile.jpg') no-repeat center center;
    }
}
</style>
