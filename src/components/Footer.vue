<script>
    import facebook from '@/assets/svg/footer/facebook.svg';
    import tiktok from '@/assets/svg/footer/tiktok.svg';
    import instagram from '@/assets/svg/footer/instagram.svg';

    export default {
        data() {
            return {
                facebook: facebook,
                tiktok: tiktok,
                instagram: instagram
            }
        }
    }
</script>

<template>
    <footer>
        <div id="footer-div" class="pb-3">
            <div class="container">
                <div id="footer-section-one">
                    <div id="footer-section-one-logo-div">
                        <div id="footer-logo-div" class="d-flex justify-content-center p-3">
                            <img id="footer-logo" src="../assets/footer-logo.png" />
                        </div>
                        <div id="footer-name-div">
                            <div>
                                <div class="desktop-header">
                                    <div class="footer-big-letters">C.O.W. SOULMATE</div>
                                </div>
                                <div class="mobile-header">
                                    <div class="footer-big-letters mobile-header">C.O.W.</div>
                                    <div class="footer-big-letters mobile-header">SOULMATE</div>
                                </div>
                                <div class="footer-small-letters mb-3">Take your first step to hypnosis</div>
                            </div>
                        </div>
                    </div>
                    <div id="footer-others-div">
                        <div class="desktop-header">
                            <div>Terms & Condition</div>
                            <div>Copyright @ 2024, Vyunvyun Tan</div>
                        </div>
                        <div class="mobile-header">
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="pb-3">Terms & Condition</div>
                                <div class="pb-3">Copyright @ 2024, Vyunvyun Tan</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="white-line"></div>

                <div id="footer-site-map-div">
                    <div id="footer-social-div">
                        <div class="footer-header-title text-center m-3">Follow Us</div>
                        <div class="socials-logo-div d-flex justify-content-around mb-3">
                            <!-- facebook -->
                            <img :src="facebook"
                                @click="$sharedMethods.redirectTo('https://www.facebook.com/profile.php?id=100089680964056&mibextid=ZbWKwL')"
                                class="footer-social-logo">

                            <!-- tiktok -->
                            <img :src="tiktok"
                                @click="$sharedMethods.redirectTo('https://www.tiktok.com/@c.o.w.soulmate?_t=8jSYa5V9eMC&_r=1')"
                                class="footer-social-logo">

                            <!-- instagram -->
                            <img :src="instagram"
                                @click="$sharedMethods.redirectTo('https://www.instagram.com/c.o.w.soulmate?igsh=MTc4OGNzdHRlcmR3Mw==')"
                                class="footer-social-logo">

                        </div>
                    </div>
                    <div class="white-line mobile-header"></div>
                    <div id="footer-menu-div">
                        <div class="footer-header-title text-center m-3">Menu</div>
                        <div class="text-center m-3" @click="$sharedMethods.navigateTo('/')">Home</div>
                        <div class="text-center m-3" @click="$sharedMethods.navigateTo('/about')">About Us</div>
                        <div class="text-center m-3" @click="$sharedMethods.navigateTo('/services')">Our Services</div>
                        <div class="text-center m-3" @click="$sharedMethods.navigateTo('/contact')">Contact Us</div>
                        <div class="text-center m-3" @click="$sharedMethods.navigateTo('/book')">Book Your Session</div>
                    </div>
                    <div class="white-line mobile-header"></div>
                    <div id="footer-contact-us-div">
                        <div class="footer-header-title text-center m-3">Contact Us</div>
                        <div class="text-center m-3">+65 9109 9629</div>
                    </div>
                    <div class="white-line mobile-header"></div>
                    <div id="footer-forms-div">
                        <div class="footer-header-title text-center m-3" @click="$sharedMethods.openConsultWidget()">
                            Feedback Form</div>
                        <div class="footer-header-title text-center m-3" @click="$sharedMethods.bookSessionWidget()">
                            Consent
                            Form</div>
                    </div>
                </div>

            </div>
        </div>
    </footer>
</template>


<style scoped>
    .mobile-header {
        display: block;
    }

    .desktop-header {
        display: none;
    }

    #footer-div {
        min-height: 30vh;
        background-color: #81D1FE;
        color: white;
    }

    .footer-header-title {
        color: white;
        font-weight: 500;
    }

    #footer-logo-div {
        /* background-image: ; */
    }

    .normal-line-height {
        line-height: normal;
    }

    .white-line {
        color: white;
        border: 1px solid white;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .footer-big-letters {
        font-family: "Cinzel Decorative", serif;
        font-weight: 900;
        font-style: normal;
        font-size: 50px;
        color: white;
        text-align: center;
        line-height: 48px;
        padding: 5px;
    }

    .footer-small-letters {
        font-family: Solway;
        font-weight: 700;
        font-size: 20px;
        color: white;
        text-align: center;
        line-height: 24px;
        padding: 5px;
    }

    @media screen and (min-width: 1024px) {
        #footer-section-one {
            display: flex;
            justify-content: space-between;
        }

        .mobile-header {
            display: none;
        }

        .desktop-header {
            display: block;
        }

        #footer-name-div {
            display: flex;
            align-items: center;
        }

        #footer-section-one-logo-div {
            display: flex;
            justify-content: space-around;
        }

        #footer-others-div {
            display: flex;
            align-items: center;
        }

        #footer-site-map-div {
            display: flex;
            justify-content: space-around;
        }

        .footer-social-logo {
            height: 50px;
        }

        .footer-social-logo {
            width: 30%;
        }
    }
</style>