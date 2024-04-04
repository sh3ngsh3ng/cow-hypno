<script>
    import brief from '@/assets/svg/hypnosis-view/brief.svg';
    import hypnoworkout from '@/assets/svg/hypnoworkout-view/hypnoworkout.svg';
    import hypnoworkoutlg from '@/assets/svg/hypnoworkout-view/hypnoworkout-lg.svg';
    import offer from '@/assets/svg/hypnoworkout-view/offer.svg';
    import offerlg from '@/assets/svg/hypnoworkout-view/offer-lg.svg';
    import consultation from '@/assets/svg/base/consultation.svg';
    export default {
        data() {
            return {
                hypnoworkout,
                hypnoworkoutlg,
                offer,
                offerlg,
                consultation,
                brief
            }
        }
    }
</script>

<template>
    <div id="hypnoworkout-page-div">
        <div id="hypnoworkout-banner" class="hero-banner">
            <div>
                <div class="hero-banner-big-letters">HYPNOWORKOUT</div>
                <div class="hero-banner-small-letters">What is HypnoWorkout and what it can do for you</div>
            </div>
        </div>

        <div class="container">

            <div class="therapy-tab">
                <div class="services-tab" @click="$sharedMethods.navigateTo('/services')">Services</div>
                <div>></div>
                <div class="selected-therapy-tab" @click="$sharedMethods.navigateTo('/hypnosis')">HypnoWorkout</div>
            </div>

            <section class="hypnosis-section">
                <div class="desktop-view">
                    <img :src="brief" class="hypnosis-image">
                </div>
                <div class="hypnosis-section-left">
                    <p class="section-header">The brief on HypnoWorkout</p>
                    <div class="mobile-view">
                        <img :src="brief" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        HypnoWorkout is an innovative and effective approach to improving mental and physical
                        well-being. The integration of both hypnosis & exercise enhances self-awareness, reduces stress
                        and anxiety, improves physical mobility, and promotes emotional release. By addressing both
                        mental and physical aspects, this combined approach facilitates overall healing and well.
                    </p>
                    <p class="p1">
                        Although generally safe, it's important to note that HypnoWorkout should only be conducted by
                        qualified professionals who are trained in both hypnotherapy and personal trainer techniques.
                        Each session is tailored to the individual needs of the client, and outcomes may vary depending
                        on the client's goals and experiences.
                    </p>
                </div>
            </section>

            <section class="hypnosis-section">
                <div class="hypnosis-section-right">
                    <p class="section-header">What is HypnoWorkout?</p>
                    <div class="mobile-view">
                        <img :src="hypnoworkout" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        HypnoWorkout is a therapy that combines hypnosis and exercise works by addressing both the mind
                        and body for holistic healing.
                    </p>
                    <p class="p1">
                        A trained professional guides the individual through relaxation techniques and verbal
                        suggestions to help them reach a state of deep relaxation and heightened awareness. After the
                        hypnosis session, individuals engage in a workout session designed to help them release
                        endorphins, which can reduce pain and increase happiness.
                    </p>
                    <p class="p1">
                        This session also reduces stress levels by decreasing cortisol and increasing serotonin and
                        dopamine.
                        It allows individuals to tap into their physical energy and release any stress or tension that
                        may have been holding them back, while improving self-esteem and confidence through setting and
                        achieving goals.
                        It can even improve sleep and provide structure and purpose in one's life.
                    </p>
                </div>

                <div class="desktop-view">
                    <img :src="hypnoworkoutlg" class="hypnosis-image max-h-img">
                </div>
            </section>

            <section class="hypnosis-section">
                <div class="hypnosis-section-right">
                    <p class="section-header">What we offer</p>
                    <div class="mobile-view">
                        <img :src="offer" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        HypnoWorkout combines hypnosis and exercise is a powerful type of therapy that allows you to
                        quiet your mind and let go of any negative thoughts or emotions that may be weighing you down.
                        This process is an essential step towards achieving a more positive outlook on life, which can
                        have a significant impact on your overall well-being.
                    </p>
                    <p class="p1">
                        The workout session that follows is designed to help you release any pent-up stress and tension,
                        leaving you feeling refreshed and energized.
                    </p>
                    <p class="p1">
                        HypnoWorkout is more than just a workout routine, it is body, spirit, and emotions are all
                        connected and related. Trauma, stress, and other negative experiences can cause tension and
                        other physiological changes in the body, leading to physical discomfort and illness and it helps
                        you recognize these physical responses to emotional experiences and works to release the tension
                        and promote overall well-being.
                    </p>
                    <p class="p1">
                        At HypnoWorkout, we pride ourselves on providing a safe and supportive environment for
                        individuals to explore their physical and emotional selves.
                    </p>
                    <p class="p1">
                        This part of the program is crucial for anyone looking to improve their body posture, physical
                        health and fitness levels.
                    </p>
                </div>

                <div class="desktop-view">
                    <img :src="offerlg" class="hypnosis-image max-h-img">
                </div>
            </section>

            <section class="hypnosis-section">
                <div class="desktop-view">
                    <img :src="consultation" class="hypnosis-image">
                </div>
                <div class="hypnosis-section-left">
                    <p class="section-header">We offer free consultations</p>
                    <div class="mobile-view">
                        <img :src="consultation" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        The purpose of a free hypnotherapy consultation is to allow potential clients to discuss their
                        needs, goals, and concerns with the hypnotherapist. It helps evaluate the client's readiness for
                        therapy session and address any inquiries. The free pre-consultation builds trust and ensures
                        both parties are comfortable before starting therapy session.
                    </p>
                    <div class="consultation-button d-flex justify-content-left">
                        <button class="standard-btn" @click="$sharedMethods.navigateTo('/book')">Book your free
                            consultation now!</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style>
    #hypnoworkout-banner {
        background-image: url('../assets/hypnoworkout-banner.jpg');
        background-position: 50% 52%;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 767px) {
        .hero-banner-big-letters {
            font-size: 30px;
        }

        .hero-banner-small-letters {
            font-size: 15px;
        }

        section {
            padding: 40px 20px 0px 20px;
        }

        .hypnosis-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px 40px 0px 40px;
        }

        .desktop-view {
            display: none;
        }

        .mobile-view {
            display: block;
        }

        .mobile-view svg {
            margin-bottom: 20px;
        }

        .hypnosis-section-left {
            padding-left: 0px;
        }

        .hypnosis-section-right {
            padding-right: 0px;
        }

        .consultation-button {
            margin-bottom: 30px;
        }

    }


    @media screen and (min-width: 768px) {
        section {
            padding: 50px 20px;
        }

        .hypnosis-section {
            display: flex;
        }

        .desktop-view {
            display: block;
        }

        .mobile-view {
            display: none;
        }

        .hypnosis-section-left {
            padding-left: 20px;
        }

        .hypnosis-section-right {
            padding-right: 20px;
        }
    }
</style>