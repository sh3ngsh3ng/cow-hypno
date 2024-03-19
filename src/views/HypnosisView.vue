<script>
    import brief from '@/assets/svg/hypnosis-view/brief.svg';
    import hypnotherapy from '@/assets/svg/hypnosis-view/hypnotherapy.svg';
    import offer from '@/assets/svg/hypnosis-view/offer.svg';
    import consultation from '@/assets/svg/base/consultation.svg';

    export default {
        data() {
            return {
                brief: brief,
                hypnotherapy: hypnotherapy,
                offer: offer,
                consultation: consultation
            }
        }
    }
</script>

<template>
    <div id="hypnosis-therapy-page-div">
        <div id="hypnosis-therapy-banner" class="hero-banner">
            <div>
                <div class="hero-banner-big-letters">HYPNOSIS THERAPY</div>
                <div class="hero-banner-small-letters">What is Hypnosis Therapy and what it can do for you</div>
            </div>
        </div>

        <div class="container">

            <div class="therapy-tab">
                <div class="services-tab" @click="$sharedMethods.navigateTo('/services')">Services</div>
                <div>></div>
                <div class="selected-therapy-tab" @click="$sharedMethods.navigateTo('/hypnosis')">Hypnosis Therapy</div>
            </div>

            <!-- <section class="hypnosis-section">
                <div class="desktop-view">
                    <img :src="brief" class="hypnosis-image">
                </div>
                <div class="hypnosis-section-left">
                    <p class="section-header">The brief on hypnosis</p>
                    <div class="mobile-view">
                        <img :src="brief" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        Hypnosis is a powerful technique that allows you to open the doorway to your subconscious mind
                        with your
                        full consent by utilizing your focused attention and relaxation. In this relaxed state, you
                        become more
                        receptive to positive suggestions and can use your imagination to manifest positive change more
                        effectively.
                    </p>
                    <p class="p1">
                        Although generally safe, hypnosis should only be conducted by a licensed and trained
                        professional.
                        Rest assured that a competent hypnotherapist should be able to help you manage any negative
                        experiences or
                        feelings that may arise during the hypnosis therapy session with ease.
                    </p>
                </div>
            </section> -->

            <section class="hypnosis-section">
                <div class="hypnosis-section-right">
                    <p class="section-header">What is Hypnotherapy?</p>
                    <div class="mobile-view">
                        <img :src="hypnotherapy" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        Hypnotherapy is a powerful type of therapy that enables you to overcome unwanted habits and
                        behaviors by accessing your subconscious mind. This is where habits and behaviors take root and
                        persist, making it challenging to alter them independently.
                    </p>
                    <p class="p1">
                        Remember that hypnotherapy should not replace medical treatment and should always be used
                        together with other treatments as advised by a licensed medical professional. While hypnotherapy
                        can be a useful tool for managing your mental health, it is not a one-size-fits-all solution.
                        Each person’s situation is unique and a professional hypnotherapist can help determine if
                        hypnotherapy is the right approach for you.
                    </p>
                </div>

                <div class="desktop-view">
                    <img :src="hypnotherapy" class="hypnosis-image">
                </div>
            </section>

            <section class="hypnosis-section">
                <div class="hypnosis-section-right">
                    <p class="section-header">What we offer</p>
                    <div class="mobile-view">
                        <img :src="offer" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        Hypnotherapy is a powerful type of therapy that enables you to overcome unwanted habits and
                        behaviors by accessing your subconscious mind. This is where habits and behaviors take root and
                        persist, making it challenging to alter them independently.
                    </p>
                    <p class="p1">
                        Remember that hypnotherapy should not replace medical treatment and should always be used
                        together with other treatments as advised by a licensed medical professional. While hypnotherapy
                        can be a useful tool for managing your mental health, it is not a one-size-fits-all solution.
                        Each person’s situation is unique and a professional hypnotherapist can help determine if
                        hypnotherapy is the right approach for you.
                    </p>
                </div>

                <div class="desktop-view">
                    <img :src="offer" class="hypnosis-image">
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

<style scoped>
    #hypnosis-therapy-banner {
        background-image: url('../assets/hypnosis-therapy-banner.jpeg');
        background-position: 50% 52%;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* #therapy-tab{
        display: flex;
        gap: 10px;
        margin: 20px 0px 0px 20px;
        color: #5E5E5E;
        font-size: 16px
    }

    #services-tab:hover{
        color: #08ACF2;
    }

    #hypnosis-therapy-tab{
        color: #08ACF2;
    } */



    @media screen and (max-width: 767px) {
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

    @media screen and (min-width: 1280px) {}
</style>