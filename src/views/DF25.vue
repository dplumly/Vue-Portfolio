<template>
    <div class="page-content">
        

        <div id="salesforceDF25-landing" class="project-landing">
            <div class="row">
                <h1>Dreamforce<span> 25</span></h1>
            </div>
        </div><!-- end landing -->



	<div class="project-container">
		<div class="bg-logo">
			<img src="/img/logo/gear.svg" alt="logo">
		</div>

		<div class="row project-overview">
			<div class="company">
				<h3>Company: <span>GPJ</span></h3>
				<h3>Client: <span>Salesforce</span></h3>
			</div>
			<br>

			<div class="project-copy">
				<h4>Dreamforce is one of the largest and most influential events in the United States encompassing an immersive world of innovation, connection, and discovery. Each year, GPJ partners with Salesforce to transform this massive experience into something unforgettable, bringing their vision to life through storytelling, technology, and creativity that deliver tangible value to both the client and every attendee who walks through the doors.


					<br>
					<br>

                    Across the event, digital touchpoints played a vital role in unifying the experience. Our Creative Tech team was responsible for bringing these interactions to life, integrating activations into the broader event tech stack, connecting badge scanning to engagement moments, and integration of Salesforce tech.
					<br>
					<br>

					In my role, I oversaw all digital activations scoping, resourcing, and managing both internal and external teams. I also led digital strategy, creative concepting, UX/UI, experience architecture, creative production, and on-site execution. This included hands-on creative direction and oversight across every activation, ensuring a seamless, innovative, and cohesive digital experience throughout the event.

				</h4>
			</div><!-- end of project-copy -->
		</div><!-- end of row -->




		<!-- Agentforce Voice-->
		<div class="project-files">
            <div class="gallery">
                <div id="project-color"></div>
                <ul class="row">

                    <div class="row">
                        <div class="nine columns centered">
                            <h3>Agentforce Voice</h3>

                            <div class="header-copy ten columns centered">
                                
                                <h4>Agentforce Voice was an amazing experience integrating personalization and Salesforce tech to create a personalized agent for the attendees to talk to. There were many challenges along the way, Kate Milleker ran the day to day from our Creative Tech team ensuring it’s success. 

                                <br>
                                <br>

                                Attendees came into the DJ styled booth and put on a headset. They scanned their badge where we captured some registration data to populate in the experience. We used this data to create a custom agent with a little more info from the attendee. 

                                <br>
                                <br>

                                From there, we had a little time to manage since it takes roughly two minutes to create the agent. Here we had a fish eye lens camera to create a Delphine moment where the attendee could scan a QR code to retrieve their photo for sharing. 							<br>
                                
                                <br>
                                <br>

                                Once the agent is created, they get a QR code to call the agent and can converse with the tech on their own device. 							

                                </h4>
                            </div>
                        </div>
                    </div>


                    <li
                    v-for="(img, i) in voice"
                    :key="i"
                    class="four column fadeIn"
                     v-scroll-reveal="{ delay: Math.floor(i / 3) * 200 }"
                    @click="openLightbox(i, voice)">
                    <img :src="img" class="img-gallery" />
                </li>
                </ul>
            </div><!-- end gallery -->
		</div>


        <!-- Liv Golf-->
        <div class="project-files">
            <div class="gallery">
                <div id="project-color"></div>
                <ul class="row">

                    <div class="row">
                        <div class="nine columns centered">
                            <h3>Data Cloud</h3>

                            <div class="header-copy ten columns centered">
                                
                                <h4>Salesforce has a great relationship with Liv Golf and wanted to illustrate how Liv Golf uses Data Cloud. Macklin Andrick from our Creative Tech team worked with the Salesforce team to bring this partnership to life by creating a Golf simulator activation creating a golfer profile pulling structured and unstructured data together helping their golf game.
                                
                                    <br>
                                    <br>

                                    The journey was designed to be simple and seamless. Attendees began by scanning their badge to start creating their profile. Data from the registration platform automatically filled in certain fields, while attendees entered additional information to complete both structured and unstructured data.

                                    <br>
                                    <br>

                                    Each participant then got three swings. An overhead camera captured key data points from each shot, which were added to their profile to complete their results.

                                    <br>
                                    <br>

                                </h4>
                            </div>
                        </div>
                    </div>

                    <li
                        v-for="(img, i) in golf"
                        :key="i"
                        class="four column fadeIn"
                        v-scroll-reveal="{ delay: Math.floor(i / 3) * 200 }"
                        @click="openLightbox(i, golf)">
                        <img :src="img" class="img-gallery" />
                    </li>
			
                </ul>
            </div><!-- end gallery -->
		</div>


        <!-- Liv Golf-->
		<div class="project-files">
			<div id="salesforce-section-one" class="right-content">
				<div class="row">
					<div class="right-info columns six center-activation-text">
					</div>
					<div class="columns six">
					</div>
				</div>
			</div>
		</div>


 <!-- Liv Golf-->
        <div class="project-files">
            <div class="gallery">
                <div id="project-color"></div>
                <ul class="row">

                    <div class="row">
                        <div class="nine columns centered">
                            <h3>Dreamforce 2025 Activations</h3>

                            <div class="header-copy ten columns centered">
                               <h4>Here are some more of the other fantasic activations the GPJ Creative Tech team worked on.</h4> 
              
                            </div>
                        </div>
                    </div>

                    <li
                        v-for="(img, i) in activations"
                        :key="i"
                        class="four column fadeIn"
                        v-scroll-reveal="{ delay: Math.floor(i / 3) * 200 }"
                        @click="openLightbox(i, activations)">
                        <img :src="img" class="img-gallery" />
                    </li>
			
                </ul>
            </div><!-- end gallery -->
		</div>


			<!-- Files associated with project -->
			<div class="project-files">
				<div class="row">

                    <!-- More Projects Component -->
                    <MoreProjects />

				</div>
			</div><!-- end project files -->
		</div><!-- end of project-container -->

         <!-- Lightbox modal -->
        <VueEasyLightbox
            :visible="lightboxVisible"
            :imgs="currentImages"
            :index="lightboxIndex"
            @hide="lightboxVisible = false"/>

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

const voice = [
  '/img/projects/df25/work/voice/2.jpg',
  '/img/projects/df25/work/voice/3.jpg',
  '/img/projects/df25/work/voice/4.jpg',
  '/img/projects/df25/work/voice/5.jpg',
  '/img/projects/df25/work/voice/6.jpg',
  '/img/projects/df25/work/voice/7.jpg',
  '/img/projects/df25/work/voice/8.jpg',
  '/img/projects/df25/work/voice/9.jpg',
  '/img/projects/df25/work/voice/10.jpg',
  '/img/projects/df25/work/voice/11.jpg',
]

const golf = [
  '/img/projects/df25/work/golf/1.jpg',
  '/img/projects/df25/work/golf/2.jpg',
  '/img/projects/df25/work/golf/3.jpg',
  '/img/projects/df25/work/golf/4.jpg',
  '/img/projects/df25/work/golf/5.jpg',
  '/img/projects/df25/work/golf/6.jpg',
  '/img/projects/df25/work/golf/7.jpg',
  '/img/projects/df25/work/golf/8.jpg',
  '/img/projects/df25/work/golf/9.jpg',
  '/img/projects/df25/work/golf/10.jpg',
]



const activations = [
  '/img/projects/df25/work/activations/1.jpg',
  '/img/projects/df25/work/activations/2.jpg',
  '/img/projects/df25/work/activations/3.jpg',
  '/img/projects/df25/work/activations/4.jpg',
  '/img/projects/df25/work/activations/5.jpg',
  '/img/projects/df25/work/activations/6.jpg',
  '/img/projects/df25/work/activations/7.jpg',
  '/img/projects/df25/work/activations/8.jpg',
  '/img/projects/df25/work/activations/9.jpg',
  '/img/projects/df25/work/activations/10.jpg',
  '/img/projects/df25/work/activations/11.jpg',
  '/img/projects/df25/work/activations/12.jpg',
  '/img/projects/df25/work/activations/13.jpg',
  '/img/projects/df25/work/activations/14.jpg',
  '/img/projects/df25/work/activations/15.jpg',
  '/img/projects/df25/work/activations/16.jpg',
  '/img/projects/df25/work/activations/17.jpg',
  '/img/projects/df25/work/activations/18.jpg',
  '/img/projects/df25/work/activations/19.jpg',
  '/img/projects/df25/work/activations/20.jpg',
]

function openLightbox(index, images) {
    currentImages.value = images
    lightboxIndex.value = index
    lightboxVisible.value = true
}

</script>

<style scoped>
/*===================================

Salesforce DF23 

===================================*/
.df25-main {
    min-height: 725px;
    position: relative;
}

.df25-content {
    padding-top: 0;
}

#salesforceDF25-landing {
    position: relative;
    background: url('../img/projects/df25/backgrounds/df25-landing.jpg') center center no-repeat;
    min-height: 600px;
    width: 100%;
    background-color: #262626;
}

.df25left-img {
    padding: 70px 30px 70px 0;
}

.df25-content .left-info h4 {
    height: auto;
}

#salesforce-section-one {
    background: url('../img/projects/df25/backgrounds/section-one-bg.jpg') fixed center no-repeat;
    background-color: #000;
}

/*========================

Responsive

========================*/
/* 2001 */
@media only screen and (min-width: 125.063em) {

    #salesforceDF25-landing {
        background: url('../img/projects/df25/backgrounds/df25-big.jpg') no-repeat center center;
    }
}


/* 500 */
@media only screen and (max-width: 31.250em) {

    #salesforceDF25-landing {
        background: url('../img/projects/df25/backgrounds/salesforceDF25-bgMobile.jpg') no-repeat center center;
    }
}
</style>
