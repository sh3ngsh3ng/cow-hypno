<script>
    import brief from '@/assets/svg/hypnosis-view/brief.svg';
    import hypnodance from '@/assets/svg/hypnodance-view/hypnodance.svg';
    import hypnodancelg from '@/assets/svg/hypnodance-view/hypnodance-lg.svg';
    import offer from '@/assets/svg/hypnodance-view/offer.svg';
    import offerlg from '@/assets/svg/hypnodance-view/offer-lg.svg';
    import consultation from '@/assets/svg/base/consultation.svg';
    export default {
        data() {
            return {
                hypnodance,
                hypnodancelg,
                offer,
                offerlg,
                consultation,
                brief
            }
        }
    }
</script>

<template>
    <div id="hypnodance-page-div">
        <div id="hypnodance-banner" class="hero-banner">
            <div>
                <div class="hero-banner-big-letters">HYPNODANCE</div>
                <div class="hero-banner-small-letters">What is Hypnodance Therapy and what it can do for you</div>
            </div>
        </div>

        <div class="container">

            <div class="therapy-tab">
                <div class="services-tab" @click="$sharedMethods.navigateTo('/services')">Services</div>
                <div>></div>
                <div class="selected-therapy-tab" @click="$sharedMethods.navigateTo('/hypnodance')">HypnoDance</div>
            </div>
            <section class="hypnosis-section">
                <div class="desktop-view">
                    <img :src="brief" class="hypnosis-image">
                </div>
                <div class="hypnosis-section-left">
                    <p class="section-header">The brief on HypnoDance</p>
                    <div class="mobile-view">
                        <img :src="brief" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        HypnoDance is a unique workout routine that goes beyond physical exercise. It combines guided
                        hypnotic inductions and movement suggestions to help individuals achieve balance, clarity, and
                        empowerment, tapping into the deep resources of an individuals mind and body connection.
                    </p>
                    <p class="p1">
                        Although generally safe, it's important to note that HypnoDance should only be conducted by
                        qualified professionals who are trained in both hypnotherapy and dance therapy techniques. Each
                        session is tailored to the individual needs of the client, and outcomes may vary depending on
                        the client's goals and experiences.
                    </p>
                </div>
            </section>

            <section class="hypnosis-section">
                <div class="hypnosis-section-right">
                    <p class="section-header">What is HypnoDance?</p>
                    <div class="mobile-view">
                        <img :src="hypnodance" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        HypnoDance is a treatment that combines hypnosis with dance to help individuals let go of
                        negative thoughts and feelings and gain confidence and positivity.
                    </p>
                    <p class="p1">
                        Here's how HypnoDance can transform their life:
                    <ol>
                        <li>Relaxation and Stress Reduction: By syncing movement with hypnotic suggestions, individuals
                            can enter a state of deep relaxation, releasing tension and promoting a sense of calm.</li>
                        <li>Enhanced Self-Expression: Dance allows for authentic self-expression, while hypnosis
                            facilitates tapping into subconscious emotions and thoughts.</li>
                        <li>Cognitive Enhancement: Engaging in dance and hypnosis simultaneously stimulates various
                            brain regions, leading to improved cognitive function. Attention, memory, and
                            problem-solving abilities can be enhanced through the integration of these practices.</li>
                        <li>Emotional Healing and Personal Growth: By exploring movement and engaging the subconscious
                            mind, individuals can uncover and address emotional blocks, promoting personal
                            transformation.</li>
                    </ol>
                    </p>
                </div>

                <div class="desktop-view">
                    <img :src="hypnodancelg" class="hypnosis-image max-h-img">
                </div>
            </section>

            <section class="hypnosis-section">
                <div class="hypnosis-section-right">
                    <p class="section-header">What we offer</p>
                    <div class="mobile-view">
                        <img :src="offer" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        HypnoDance merges hypnosis and dance for therapy, leveraging the mind-body connection for
                        relaxation, healing, and personal growth. Utilizing dance and hypnosis, it taps into your inner
                        resources to boost overall well-being.
                    </p>
                    <p class="p1">
                        The treatment involves a highly effective hypnosis session, followed by a liberating dance
                        session where you can freely express themselves through movement and relish the moment.
                    </p>
                    <p class="p1">
                        Each session typically lasts between 1.5 to 2 hours, which includes the time for inducing
                        hypnosis.
                    </p>
                    <p class="p1">
                        Join our HypnoDance , you can:
                    <ul>
                        <li>Transform your life through movement and hypnosis with HypnoDance!</li>
                        <li>Discover the power of mind-body connection with HypnoDance!</li>
                        <li>Release stress, express yourself, and find inner harmony with HypnoDance!</li>
                        <li>Experience the fusion of dance and hypnosis for holistic well-being with HypnoDance!</li>
                        <li>Unlock your true potential and embrace personal growth with HypnoDance!</li>
                    </ul>
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
    #hypnodance-banner {
        background-image: url('../assets/hypnodance-banner.jpg');
        background-position: 50% 52%;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 767px) {
        .hero-banner-big-letters {
            font-size: 35px;
        }

        .hero-banner-small-letters {
            font-size: 20px;
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