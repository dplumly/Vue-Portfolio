<template>
    <div class="page-content">
    
        <div id="google-landing" class="project-landing">
            <div class="row">
                <h1>Workday<span> DevCon DDK</span></h1>
            </div>
        </div>

        <div class="project-container">
            <div class="bg-logo">
                <img src="/img/logo/gear.svg" alt="logo">
            </div>

            <div class="row project-overview">
                <div class="company">
                    <h3>Company: <span>GPJ</span></h3>
                    <h3>Workday: <span>DevCon DDK</span></h3>
                </div>
                <br>

                <div class="project-copy">
                    <h4>Workday DevCon is an intimate, developer focused event centered on learning and collaboration. To spark creativity, foster a sense of community, and inject some fun into the experience, we needed an engaging medium that would encourage attendees to explore the event dynamically.
               
                    <br>
                    <br>

                    In my role, I oversaw all creative and tech, creative direction, concepting, UX/UI, experience architecture, dev, and on-site execution. 

                    </h4>
                </div>
            </div>

            <!-- Gallery section -->
            <div class="gallery">
                <div id="project-color"></div>

                <div class="row">
                    <div class="nine columns centered">
                        <h3>Main <span>Features</span></h3>

                        <div class="header-copy ten columns centered">
                            <h4>
                                <strong>- Trace Route (Scavenger Hunt):</strong> A gamified experience designed to drive foot traffic.
                                <br><br>
                                <strong>- Keynote Synchronization:</strong> A passive, synchronized experience where custom animations were pushed to all attendees' badges.
                                <br><br>
                                <strong>- Interactive Innovation Sessions:</strong> A live feedback tool allowing attendees to engage with presenters in real time.
                                <br><br>
                                <strong>- Retro Games:</strong> Pre-loaded games turned "AFK" downtime into opportunities for discovery and play.
                                <br><br>
                                <strong>- Hardware Hacking:</strong> An open-source invitation for developers to "hack the badge," upload custom code, and entirely personalize their device.
                                <br><br>
                                <strong>- Tutorial:</strong> To give developers a starting point we created a tutorial to get them started or if they don't have time to make an image to personalize their badge.
                                <br><br>
                                <strong>- Default Animations:</strong> Suite of default DevCon animations for attendees to play.
                                <br><br>
                                <strong>- KONAMI Code Easter Egg:</strong> Lite weight app with custom animation for attendees to discover. 
                            </h4>
                        </div>
                    </div>
                </div>

                <div class="gallery-grid">
                    <div
                        v-for="(src, i) in ddkGallery"
                        :key="i"
                        class="gallery-item fadeIn"
                        :class="`gallery-item--${getImageSize(i)}`"
                        v-scroll-reveal="{ delay: Math.floor(i / 3) * 200 }"
                        @click="openLightbox(i)"
                    >
                        <video
                            :ref="el => registerVideo(el, i)"
                            :src="src"
                            muted
                            loop
                            playsinline
                            preload="metadata"
                            class="img-gallery"
                        />
                    </div>
                </div>
            </div>

            <!-- Project files -->
            <div class="project-files">
                <MoreProjects />
            </div>
        </div>

        <!-- Video Lightbox -->
        <Teleport to="body">
            <Transition name="lightbox-fade">
                <div
                    v-if="lightboxVisible"
                    class="lightbox-overlay"
                    @click.self="closeLightbox"
                >
                    <button class="lightbox-close" @click="closeLightbox">✕</button>
                    <button class="lightbox-arrow lightbox-arrow--left" @click="prevVideo">‹</button>

                    <div class="lightbox-content">
                        <video
                            ref="lightboxVideoRef"
                            :src="ddkGallery[lightboxIndex]"
                            controls
                            autoplay
                            loop
                            playsinline
                            class="lightbox-video"
                        />
                    </div>

                    <button class="lightbox-arrow lightbox-arrow--right" @click="nextVideo">›</button>
                </div>
            </Transition>
        </Teleport>

    </div>
</template>



<script setup>
import { ref, nextTick, onUnmounted } from 'vue'
import { useVideoScroll } from '@/composables/useVideoScroll'
import MoreProjects from '@/components/MoreProjects.vue'

const { observe, unobserve } = useVideoScroll(0.5)

const ddkGallery = [
    '/img/projects/ddk/work/after-dark.mp4',
    '/img/projects/ddk/work/build-an-agent.mp4',
    '/img/projects/ddk/work/chalk.mp4',
    '/img/projects/ddk/work/community.mp4',
    '/img/projects/ddk/work/demo-animations.mp4',
    '/img/projects/ddk/work/express.mp4',
    '/img/projects/ddk/work/innovation.mp4',
    '/img/projects/ddk/work/intro.mp4',
    '/img/projects/ddk/work/keynote.mp4',
     '/img/projects/ddk/work/meetups.mp4',
    '/img/projects/ddk/work/pacman.mp4',
    '/img/projects/ddk/work/signify.mp4'
]


// Grid video refs
const videoRefs = ref({})

function registerVideo(el, index) {
    if (el) {
        videoRefs.value[index] = el
        observe(el)
    }
}

// Lightbox state
const lightboxVisible = ref(false)
const lightboxIndex = ref(0)
const lightboxVideoRef = ref(null)

function openLightbox(index) {
    lightboxIndex.value = index
    lightboxVisible.value = true
    nextTick(() => lightboxVideoRef.value?.play())
}

function closeLightbox() {
    lightboxVideoRef.value?.pause()
    lightboxVisible.value = false
}

function prevVideo() {
    lightboxIndex.value = (lightboxIndex.value - 1 + ddkGallery.length) % ddkGallery.length
    nextTick(() => lightboxVideoRef.value?.play())
}

function nextVideo() {
    lightboxIndex.value = (lightboxIndex.value + 1) % ddkGallery.length
    nextTick(() => lightboxVideoRef.value?.play())
}

function getImageSize(index) {
    const sizePattern = ['small', 'medium', 'large', 'tall', 'wide', 'medium', 'large', 'small', 'tall', 'medium', 'wide', 'large', 'small']
    return sizePattern[index % sizePattern.length]
}

onUnmounted(() => {
    Object.values(videoRefs.value).forEach(unobserve)
})
</script>


<style scoped>
/*===================================

Google Page

===================================*/
#google-landing {
    position: relative;
    background: url('../img/projects/ddk/backgrounds/ddk.png') right center no-repeat;
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







/* Grid videos match your existing img-gallery sizing */
video.img-gallery {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Lightbox */
.lightbox-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.lightbox-content {
    max-width: 90vw;
    max-height: 90vh;
}

.lightbox-video {
    max-width: 90vw;
    max-height: 90vh;
    border-radius: 8px;
}

.lightbox-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    line-height: 1;
    z-index: 10000;
}

.lightbox-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: white;
    font-size: 4rem;
    cursor: pointer;
    padding: 0 1rem;
    line-height: 1;
    user-select: none;
    z-index: 10000;
}

.lightbox-arrow--left  { left: 1rem; }
.lightbox-arrow--right { right: 1rem; }

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
    transition: opacity 0.25s ease;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
    opacity: 0;
}


/*========================

Responsive

========================*/
/* 2001 */
@media only screen and (min-width: 125.063em) {

    #google-landing {
        background: url('../img/projects/ddk/backgrounds/ddk-big.png') right center no-repeat;
    }
}

/* 500 */
@media only screen and (max-width: 31.250em) {

    #google-landing {
        background: url('../img/projects/ddk/backgrounds/ddk-mobile.png') right center no-repeat;
    }
}
</style>
