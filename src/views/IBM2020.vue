<template>
    <div class="page-content">

        <div id="activations-landing" class="project-landing">
            <div class="row">
                <h1>Digital<span> Activations</span></h1>
            </div>
        </div><!-- end landing -->


        <div class="project-container">

            <div class="row project-overview">
                <div class="company">
                    <h3>Company: <span>GPJ</span></h3>
                    <h3>Client: <span>IBM</span></h3>
                </div>

                <div class="project-copy">
                    <h4>Covid-19 has changed a lot of things and one of those things has been events. The fact that we have
                        been housebound has
                        changed how we can interact and experience brands. As most have become familiar with the term
                        “pivot”, IBM and GPJ pivoted into the digital environment.

                        <br>
                        <br>

                        My overall role was vendor selection, managing the execution, creative ideation, UX, digital strategy, overseeing the integration of IBM technologies and ensuring worldwide reuse for IBM's reuse program.
                    </h4>
                </div><!-- end of project-copy -->
            </div><!-- end of row -->


            <!-- Quantum-->
            <div class="project-files">
                <div class="row">
                    <div class="nine columns centered">
                        <h3>
                            Watson Harmonic State
                        </h3>
                    </div>
                </div>

                <div class="left-content">
                    <!-- <div class="row"> -->
                    <div class="columns six computer-in-front">
                        <img class="left-img fadeIn" v-scroll-reveal src="/img/projects/IBMactivations/work/section-one-macbook.png"
                            alt="Computer with Harmonic State">
                    </div>

                    <div class="left-info columns six">
                        <h4>Harmonic State is an IBM digital activation that helps break down the complexity of IBM Watson.
                            Artificial intelligence is still not understood by most and is a magical thing. Our goal was
                            to take this complex
                            topic and make is palatable and fun for remote users at digital events.
                        </h4>
                    </div>
                    <!-- </div> -->
                </div>

                <div class="right-content section-one">
                    <div class="row">
                        <div class="right-info columns six center-activation-text">
                            <h4>This activation premiered at the Think 2021 digital event. We worked with Active Theory to
                                bring this idea to life as an interactive game that gets easier as you go along. The
                                reason being, as you work with the Watson technology, the insights Watson locates make data
                                usable
                                and actionable for a business.
                                <br>
                                <br>
                                <strong>Featured on:</strong>
                                <a class="awards" href="https://www.awwwards.com/sites/the-harmonic-state"
                                    target="_blank">Awwwards </a>
                                <a class="awards "
                                    href="https://www.awwwards.com/the-harmonic-state-by-active-theory-wins-site-of-the-month-july-2021.html"
                                    target="_blank">Awwwards - Site of the month
                                </a>
                                <a class="awards " href="https://www.cssdesignawards.com/sites/the-harmonic-state/39291/"
                                    target="_blank">CSS Design Awards </a>
                                <a class="awards " href="https://thefwa.com/cases/the-harmonic-state" target="_blank">FWA
                                </a>
                                <a class="awards " href="https://www.commarts.com/webpicks/the-harmonic-state"
                                    target="_blank">Comm Arts
                                </a>
                                <a class="awards " href="https://museaward.com/winner-info.php?id=220727"
                                    target="_blank">Museaward - Game App
                                </a>
                                <a class="awards " href="https://museaward.com/winner-info.php?id=220728"
                                    target="_blank">Museaward - Microsite
                                </a>
                            </h4>

                        </div>
                        <div class="columns six">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Ripple-->
            <div class="project-files">
                <div class="row">
                    <div class="nine columns centered">
                        <h3>
                            Systems Backbone and Brains
                        </h3>
                    </div>
                </div>

                <div class="left-content">
                    <!-- <div class="row"> -->
                    <div class="columns six computer-in-front">
                        <img class="left-img fadeIn" v-scroll-reveal src="/img/projects/IBMactivations/work/section-two-macbook.png"
                            alt="Ripple effect on laptop">
                    </div>

                    <div class="left-info columns six">
                        <h4>IBM Systems is comprised of three brands that needed to be represented equally in this
                            experience. Our concept, Backbone and Brains recognises when people think of hardware and
                            infrastructure they think of rigidness. Systems is not only about the hardware though, they
                            have
                            the expertise. This is the core of IBM Systems and the core of this experience.
                        </h4>
                    </div>
                </div>
                <!-- </div> -->
            </div>

            <div class="right-content ripple-section">
                <div class="row">
                    <div class="right-info columns six center-activation-text">
                        <h4>This experience launched at Think 2021. We worked with Unit 9 | The Polish Bureau to create a
                            webGL experience that guides users through
                            three interactive stories representing each brand. This experience speaks to how IBM Systems
                            has the Backbone and Brains to help any organization work efficiently as possible.

                            <br>
                            <br>
                            <strong>Featured on:</strong>
                            <a class="awards" href="https://thefwa.com/cases/ibm-backbone-brains" target="_blank">FWA </a>
                            <a class="awards" href="https://museaward.com/winner-info.php?id=220720"
                                target="_blank">Museaward - B2B</a>
                        </h4>

                    </div>
                    <div class="columns six">
                    </div>
                </div>
            </div>


            <div class="bright-white">
                <div class="row">

                    <!-- More Projects Component -->
                    <MoreProjects />

                </div>
            </div>
        </div><!-- end project files -->
    </div>
</template>



<script setup>
import MoreProjects from '@/components/MoreProjects.vue'

</script>

<style scoped>

/*--IBM Digital activation globals
==============================================================================================*/
/* .project-files h3 span {
    color: #61e3d3;
} */


/*===================================

IBM 2020 Activations Page
Watson Harmonic State

===================================*/
#activations-landing {
    position: relative;
    background: url('../img/projects/IBMactivations/backgrounds/activations-landing.jpg') left center no-repeat;
    min-height: 600px;
    width: 100%;
    background-color: #262626;
}

#activations-landing:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: 0px 0px 220px black inset;
    pointer-events: none;
    z-index: 1;
}

.section-one {
    background: url('../img/projects/IBMactivations/backgrounds/section-one-dust.jpg') right center no-repeat;
    background-color: #000;
    min-height: 500px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.computer-in-front {
    z-index: 1;
}

.computer-in-front img {
    position: absolute;
    right: 0;
    max-height: 340px;
}

.center-activation-text h4 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 400px;
    color: #f3f3f3;
}

.awards {
    color: #61e3d3;
}

a.awards {
    padding: 2px 0 !important;
}


/*--Systems Backbone and Brains
==============================================================================================*/
.right-content.ripple-section::before {
    content: "";
    background: url('../img/projects/IBMactivations/backgrounds/section-two-bg.jpg') left center no-repeat;
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

/*========================

Responsive

========================*/
/* 2001 */
@media only screen and (min-width: 125.063em) {

    #activations-landing {
        background: url('../img/projects/IBMactivations/backgrounds/activations-big.jpg') no-repeat center center;
    }
}


/* 768 */
@media only screen and (max-width: 48.000em) {

    .right-content.ripple-section::before {
        opacity: 0.5;
    }
}


/* 500 */
@media only screen and (max-width: 31.250em) {

    #activations-landing {
        background: url('../img/projects/IBMactivations/backgrounds/section-one-mobile.jpg') no-repeat center center;
    }

    .section-one {
        background: url('../img/projects/IBMactivations/backgrounds/section-one-dust-mobile.jpg') center center no-repeat;
    }
}
</style>
