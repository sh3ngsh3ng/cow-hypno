<script>
    import brief from '@/assets/svg/hypnosis-view/brief.svg';
    import hypnotherapy from '@/assets/svg/hypnosis-view/hypnotherapy.svg';
    import offer from '@/assets/svg/hypnosis-view/offer.svg';
    import consultation from '@/assets/svg/base/consultation.svg';
    import offerlg from "@/assets/svg/hypnosis-view/offer-lg.svg";
    import hypnotherapylg from "@/assets/svg/hypnosis-view/hypnotherapy-lg.svg";

    export default {
        data() {
            return {
                brief: brief,
                hypnotherapy: hypnotherapy,
                hypnotherapylg: hypnotherapylg,
                offer: offer,
                offerlg: offerlg,
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

            <section class="hypnosis-section">
                <div class="desktop-view">
                    <img :src="brief" class="hypnosis-image">
                </div>
                <div class="hypnosis-section-left">
                    <p class="section-header">The brief on hypnosis</p>
                    <div class="mobile-view">
                        <img :src="brief" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        Hypnosis lets us explore and change subconscious memories, but it doesn't act as a "truth
                        serum". The memories brought up could be altered, so they need to be checked objectively. When
                        done by a proficient hypnotherapist, Hypnotic Regression Therapy (HRT) is a great method to
                        handle emotional problems, unhealthy habits, fears, anxiety, PTSD, symptoms of dissociation,
                        substance abuse, weight issues, and sleep disorders.
                    </p>
                    <p class="p1">
                        For hypnosis to be successful, it should be administered by a licensed professional, and you
                        should be open and relaxed, ready to engage with the process.
                    </p>
                </div>
            </section>

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
                        Whether it's quitting smoking, losing weight, or overcoming phobias, these deeply ingrained
                        habits often involve strong emotions or habits, which can be difficult to break. With
                        hypnotherapy, a skilled hypnotherapist can help you develop new modes of thinking and coping
                        strategies that produce long-lasting behavioral changes.
                    </p>
                    <p class="p1">
                        Hypnotherapy requires your effort and commitment. Working with the hypnotherapist and following
                        their suggestions, it can be a potent tool, when combined with other treatments, to overcome
                        unwanted behaviors.
                    </p>
                    <p class="p1">
                        Hypnotherapy, while not a substitute for medical treatment, can complement it as a mental health
                        management tool. Its effectiveness varies per individual, and a professional hypnotherapist can
                        determine its suitability for you.
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
                        As your hypnotherapist, we'll get your consent for hypnosis use pre-therapy. Please arrange a
                        free consultation to familiarize with each other. In a hypnotherapy session(s), you will
                        experience deep relaxation as you are guided through positive suggestions and visualization
                        techniques.
                    </p>
                    <p class="p1">
                        Hypnotherapy is a safe and effective method for addressing a range of issues, by working with
                        us, you able to:
                    <ul class="p1">
                        <li>Overcome limiting beliefs and negative patterns</li>
                        <li>Reduce stress and anxiety</li>
                        <li>Releasing emotion</li>
                        <li>Boost self-esteem and self-confidence</li>
                        <li>Improve focus and concentration</li>
                        <li>Enhance performance in various areas of life</li>
                        <li>Achieve personal goals and aspirations</li>
                        <li>Weight Management</li>
                        <li>Building good habits</li>
                        <li>Building healthy brain and body</li>
                    </ul>
                    </p>
                    <p class="p1">
                        Hypnotherapy can be a complementary approach in the treatment of mental disorders and
                        depression.
                        It is important to note that hypnosis therapy should be used as part of a comprehensive
                        treatment plan and under the guidance of a qualified healthcare professional.
                    </p>
                    <p class="p1">
                        Sessions, lasting 1-3 hours, involve achieving relaxation and hypnosis states.
                    </p>
                </div>

                <div class="desktop-view">
                    <img class="max-h-img hypnosis-image" :src="offerlg">
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

    @media screen and (min-width: 1280px) {
        #long-img-offer {
            max-height: 700px;
        }
    }
</style>