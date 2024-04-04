<script>
    import brief from '@/assets/svg/hypnosis-view/brief.svg';
    import hypnoart from "@/assets/svg/hypnoart-view/hypnoart.svg"
    import offer from "@/assets/svg/hypnoart-view/offer.svg"
    import offerlg from "@/assets/svg/hypnoart-view/offer-lg.svg"
    import consultation from '@/assets/svg/base/consultation.svg';
    import hypnoartlg from "@/assets/svg/hypnoart-view/hypnoart-lg.svg";

    export default {
        data() {
            return {
                hypnoart,
                offer,
                consultation,
                brief,
                hypnoartlg,
                offerlg
            }
        }
    }

</script>

<template>
    <div id="hypnoart-page-div">
        <div id="hypnoart-banner" class="hero-banner">
            <div>
                <div class="hero-banner-big-letters">HYPNOART THERAPY</div>
                <div class="hero-banner-small-letters">What is HypnoArt therapy and what it can do for you</div>
            </div>
        </div>

        <div class="container">

            <div class="therapy-tab">
                <div class="services-tab" @click="$sharedMethods.navigateTo('/services')">Services</div>
                <div>></div>
                <div class="selected-therapy-tab" @click="$sharedMethods.navigateTo('/hypnosis')">HypnoArt</div>
            </div>
            <section class="hypnosis-section">
                <div class="desktop-view">
                    <img :src="brief" class="hypnosis-image">
                </div>
                <div class="hypnosis-section-left">
                    <p class="section-header">The brief on HypnoArt</p>
                    <div class="mobile-view">
                        <img :src="brief" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        HypnoArt therapy is a potent combination of hypnosis and art expression. After a transformative
                        hypnosis session, individuals are free to explore their creativity in an art session. This
                        approach helps individuals tap into their inner resources and safely navigate their emotions.
                        Diving them into their subconscious, they can better comprehend their feelings and discover new
                        self-expression avenues.
                    </p>
                    <p class="p1">
                        Although generally safe, it's important to note that HypnoArt should only be conducted by
                        qualified professionals who are trained in both hypnotherapy and art therapy techniques. Each
                        session is tailored to the individual needs of the client, and outcomes may vary depending on
                        the client's goals and experiences.
                    </p>
                </div>
            </section>

            <section class="hypnosis-section">
                <div class="hypnosis-section-right">
                    <p class="section-header">What is HypnoArt?</p>
                    <div class="mobile-view">
                        <img :src="hypnoart" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        HypnoArt, a unique blend of hypnosis and art therapy, begins with a hypnosis session to induce
                        focused attention and increased suggestibility, followed by art therapy.
                    </p>
                    <p class="p1">
                        Through this distinctive approach, individuals can gain valuable insights, experience emotional
                        release, develop self-understanding, and enhance their creativity. The artwork they produce
                        serves as a reflection of their inner world and personal journey.
                    </p>
                    <p class="p1">
                        HypnoArt therapy offers benefits for individuals facing challenges like stress, anxiety, trauma,
                        self-doubt, and emotional blockages. Through HypnoArt therapy, these challenges can be
                        effectively addressed, leading to self-awareness, coping strategies, and personal
                        transformation.
                    </p>
                    <p class="p1">
                        HypnoArt therapy provides a safe and supportive environment for them to explore their creativity
                        and emotions, gain a deeper understanding on themselves, and develop new ways of expressing
                        themselves.
                    </p>
                </div>

                <div class="desktop-view">
                    <img :src="hypnoartlg" class="hypnosis-image max-h-img">
                </div>
            </section>

            <section class="hypnosis-section">
                <div class="hypnosis-section-right">
                    <p class="section-header">What we offer</p>
                    <div class="mobile-view">
                        <img :src="offer" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        HypnoArt is a holistic therapy approach that combines hypnosis and art. During a HypnoArt
                        session, you are guided into a mild hypnotic state. This process helps you to tap into their
                        subconscious and communicate through diverse art forms such as drawing, painting, sculpting, and
                        more.
                    </p>
                    <p class="p1">
                        With the support of a skilled therapist, you will delve into your inner thoughts, emotions, and
                        experiences whilst creating art. This method enables profound self-exploration, insight, and
                        healing, as you can access and process subconscious thoughts and feelings that might be
                        challenging to articulate verbally.
                    </p>
                    <p class="p1">
                        Join our HypnoArt therapy helps you in your transformative journey.
                    <ol>
                        <li>Self-Expression and Creativity</li>
                        <li>Cultivate Self-Confidence</li>
                        <li>Stress Reduction</li>
                        <li>Promote Healthy Coping</li>
                        <li>Personal Growth</li>
                    </ol>
                    </p>
                    <p class="p1">
                        Each session typically lasts between 1.5 to 2 hours, which includes the time for inducing
                        hypnosis.
                        Achieve a better lifestyle and positive vibes with personalized self-care sessions from C.O.W.
                        Soulmate, to maximizes comfort, helping you embrace yourself and feel happier and healthier.
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
    #hypnoart-banner {
        background-image: url('../assets/hypnoart-banner.jpg');
        background-position: 50% 52%;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }

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
</style>