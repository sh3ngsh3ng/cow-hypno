<script>
    import brief from '@/assets/svg/hypnosis-view/brief.svg';
    import healthcoach from '@/assets/svg/healthcoach-view/healthcoach.svg';
    import offer from '@/assets/svg/healthcoach-view/offer.svg';
    import offerlg from '@/assets/svg/healthcoach-view/offer.svg';
    import consultation from '@/assets/svg/base/consultation.svg';
    export default {
        data() {
            return {
                brief,
                healthcoach,
                offer,
                offerlg,
                consultation
            }
        }
    }

</script>

<template>
    <div id="healthcoach-page-div">
        <div id="healthcoach-banner" class="hero-banner">
            <div>
                <div class="hero-banner-big-letters">HEALTH COACH</div>
                <div class="hero-banner-small-letters">What is health coach and what it can do for you</div>
            </div>
        </div>

        <div class="container">

            <div class="therapy-tab">
                <div class="services-tab" @click="$sharedMethods.navigateTo('/services')">Services</div>
                <div>></div>
                <div class="selected-therapy-tab" @click="$sharedMethods.navigateTo('/hypnosis')">Health Coach</div>
            </div>

            <section class="hypnosis-section">
                <div class="desktop-view">
                    <img :src="brief" class="hypnosis-image">
                </div>
                <div class="hypnosis-section-left">
                    <p class="section-header">The brief on Health Coach</p>
                    <div class="mobile-view">
                        <img :src="brief" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        A Health Coach is a valuable professional who helps to make positive changes to your lifestyle,
                        improving your overall well-being and health. The role of a health coach may vary depending on
                        each person's specific needs, but your ultimate goal is to guide and support in achieving your
                        health and wellness goals through personalized strategies and behavior change techniques.
                    </p>
                </div>
            </section>

            <section class="hypnosis-section">
                <div class="hypnosis-section-right">
                    <p class="section-header">What is Health Coach?</p>
                    <div class="mobile-view">
                        <img :src="healthcoach" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        Health coaches support and motivate you to reach your health goals.
                    </p>
                    <p class="p1">
                        Health Coache empower individuals to take control of their health by guiding them through
                        personalized strategies, goal setting, education, behavior change support, and ongoing
                        monitoring and evaluation. With our expertise and supportive approach, health coaches help
                        individuals make sustainable lifestyle changes that lead to improved overall well-being.
                    </p>
                </div>

                <div class="desktop-view">
                    <img :src="healthcoach" class="hypnosis-image max-h-img">
                </div>
            </section>

            <section class="hypnosis-section">
                <div class="hypnosis-section-right">
                    <p class="section-header">What we offer</p>
                    <div class="mobile-view">
                        <img :src="offer" class="hypnosis-image">
                    </div>
                    <p class="p1">
                        Here are the support and accountability when you have engaged us as your health coach:
                    </p>
                    <p class="p1">
                    <ol>
                        <li>Personalized Guidance - We offer tailored strategies based on your health status and goals.
                            We develop a custom plan considering your lifestyle, preferences, and challenges.</li>
                        <li>Goal Setting - We'll assist you in establishing realistic and achievable health goals. We're
                            talking about things like weight management, improved nutrition, stress reduction, and
                            better sleep habits. We'll work together to ensure that your goals are Specific, Measurable,
                            Attainable, Relevant, and Time-bound (SMART), so we can monitor your progress effectively.
                        </li>
                        <li>Education and Information - We'll provide you with the most up-to-date and trustworthy
                            evidence-based practices so that you can make informed decisions about your health. We'll
                            cover topics such as nutrition, exercise, stress management, disease prevention, and other
                            aspects of wellness.</li>
                        <li>Supportive Relationship - We'll provide a safe, non-judgmental space for discussing your
                            journey, fears, and successes. We're your cheerleader!</li>
                        <li>Behavior Change Support - Techniques like Cognitive Behavior Therapy and Hypnosis will
                            assist in adhering to health goals.</li>
                        <li>Monitoring and Evaluation - We'll track your progress, adapting as needed. Health
                            questionnaires, food diaries, and activity logs will monitor your health changes. Our aim is
                            to help you achieve your goals!</li>
                    </ol>
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
    #healthcoach-banner {
        background-image: url('../assets/healthcoach-banner.jpg');
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