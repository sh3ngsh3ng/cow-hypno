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
                                    <div class="hero-banner-big-letters">C.O.W. SOULMATE</div>
                                </div>
                                <div class="mobile-header">
                                    <div class="hero-banner-big-letters mobile-header">C.O.W.</div>
                                    <div class="hero-banner-big-letters mobile-header">SOULMATE</div>
                                </div>
                                <div class="hero-banner-small-letters mb-3">Take your first step to hypnosis</div>
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
                            <svg class="footer-social-logo"
                                @click="$sharedMethods.redirectTo('https://www.facebook.com/profile.php?id=100089680964056&mibextid=ZbWKwL')"
                                width="60" height="60" viewBox="0 0 80 81" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.572266" width="80" height="80" rx="40" fill="white" />
                                <path
                                    d="M49.9702 18.9056H43.1777C39.1468 18.9056 34.6632 20.6341 34.6632 26.5915C34.6829 28.6672 34.6632 30.6552 34.6632 32.8925H30V40.4583H34.8075V62.2389H43.6416V40.3146H49.4724L50 32.8713H43.4894C43.4894 32.8713 43.504 29.5602 43.4894 28.5986C43.4894 26.2444 45.892 26.3793 46.0365 26.3793C47.1799 26.3793 49.4029 26.3827 49.9736 26.3793V18.9056H49.9702Z"
                                    fill="#81D1FE" />
                            </svg>
                            <!-- tiktok -->
                            <svg class="footer-social-logo"
                                @click="$sharedMethods.redirectTo('https://www.tiktok.com/@c.o.w.soulmate?_t=8jSYa5V9eMC&_r=1')"
                                width="60" height="60" viewBox="0 0 80 81" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.572266" width="80" height="80" rx="40" fill="white" />
                                <path
                                    d="M50.2221 26.8389C48.703 25.1048 47.8659 22.8777 47.8665 20.5723H40.9999V48.1278C40.9469 49.619 40.3173 51.0314 39.2438 52.0677C38.1702 53.1039 36.7364 53.6832 35.2443 53.6834C32.0887 53.6834 29.4665 51.1056 29.4665 47.9056C29.4665 44.0834 33.1554 41.2167 36.9554 42.3945V35.3723C29.2887 34.35 22.5776 40.3056 22.5776 47.9056C22.5776 55.3056 28.711 60.5723 35.2221 60.5723C42.1999 60.5723 47.8665 54.9056 47.8665 47.9056V33.9278C50.651 35.9275 53.994 37.0004 57.4221 36.9945V30.1278C57.4221 30.1278 53.2443 30.3278 50.2221 26.8389Z"
                                    fill="#81D1FE" />
                            </svg>

                            <!-- instagram -->
                            <svg class="footer-social-logo"
                                @click="$sharedMethods.redirectTo('https://www.instagram.com/c.o.w.soulmate?igsh=MTc4OGNzdHRlcmR3Mw==')"
                                width="60" height="60" viewBox="0 0 80 81" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.572266" width="80" height="80" rx="40" fill="white" />
                                <g clip-path="url(#clip0_296_2884)">
                                    <path
                                        d="M33.3344 40.5723C33.3344 36.8905 36.3183 33.9051 40 33.9051C43.6817 33.9051 46.6672 36.8905 46.6672 40.5723C46.6672 44.254 43.6817 47.2395 40 47.2395C36.3183 47.2395 33.3344 44.254 33.3344 40.5723ZM29.7302 40.5723C29.7302 46.2443 34.3279 50.8421 40 50.8421C45.6721 50.8421 50.2698 46.2443 50.2698 40.5723C50.2698 34.9002 45.6721 30.3025 40 30.3025C34.3279 30.3025 29.7302 34.9002 29.7302 40.5723ZM48.2763 29.8954C48.2763 31.2201 49.3506 32.296 50.6769 32.296C52.0016 32.296 53.0775 31.2201 53.0775 29.8954C53.0775 28.5706 52.0032 27.4963 50.6769 27.4963C49.3506 27.4963 48.2763 28.5706 48.2763 29.8954ZM31.9192 56.8517C29.9693 56.7629 28.9095 56.4382 28.2052 56.1635C27.2714 55.8001 26.6058 55.3671 25.9047 54.6676C25.2052 53.9681 24.7706 53.3025 24.4087 52.3687C24.1341 51.6643 23.8094 50.6046 23.7205 48.6547C23.6236 46.5464 23.6042 45.9131 23.6042 40.5723C23.6042 35.2314 23.6252 34.5997 23.7205 32.4899C23.8094 30.54 24.1357 29.4818 24.4087 28.7758C24.7722 27.8421 25.2052 27.1765 25.9047 26.4753C26.6042 25.7758 27.2698 25.3412 28.2052 24.9794C28.9095 24.7047 29.9693 24.38 31.9192 24.2912C34.0275 24.1942 34.6607 24.1749 40 24.1749C45.3409 24.1749 45.9725 24.1959 48.0824 24.2912C50.0323 24.38 51.0905 24.7064 51.7964 24.9794C52.7302 25.3412 53.3958 25.7758 54.0969 26.4753C54.7965 27.1748 55.2294 27.8421 55.5929 28.7758C55.8675 29.4802 56.1922 30.54 56.2811 32.4899C56.378 34.5997 56.3974 35.2314 56.3974 40.5723C56.3974 45.9115 56.378 46.5448 56.2811 48.6547C56.1922 50.6046 55.8659 51.6643 55.5929 52.3687C55.2294 53.3025 54.7965 53.9681 54.0969 54.6676C53.3974 55.3671 52.7302 55.8001 51.7964 56.1635C51.0921 56.4382 50.0323 56.7629 48.0824 56.8517C45.9742 56.9487 45.3409 56.9681 40 56.9681C34.6607 56.9681 34.0275 56.9487 31.9192 56.8517ZM31.7544 20.6934C29.6252 20.7904 28.1712 21.128 26.8998 21.6223C25.5848 22.1328 24.4701 22.8178 23.357 23.9293C22.2456 25.0408 21.5606 26.1555 21.0501 27.4721C20.5557 28.7435 20.2181 30.1975 20.1212 32.3267C20.0226 34.4592 20 35.1409 20 40.5723C20 46.0036 20.0226 46.6854 20.1212 48.8178C20.2181 50.9471 20.5557 52.401 21.0501 53.6724C21.5606 54.9874 22.2439 56.1038 23.357 57.2152C24.4685 58.3267 25.5832 59.0101 26.8998 59.5222C28.1729 60.0165 29.6252 60.3542 31.7544 60.4511C33.8885 60.548 34.5687 60.5723 40 60.5723C45.433 60.5723 46.1131 60.5496 48.2456 60.4511C50.3748 60.3542 51.8288 60.0165 53.1002 59.5222C54.4152 59.0101 55.5299 58.3267 56.643 57.2152C57.7544 56.1038 58.4378 54.9874 58.9499 53.6724C59.4443 52.401 59.7835 50.9471 59.8788 48.8178C59.9758 46.6837 59.9984 46.0036 59.9984 40.5723C59.9984 35.1409 59.9758 34.4592 59.8788 32.3267C59.7819 30.1975 59.4443 28.7435 58.9499 27.4721C58.4378 26.1571 57.7544 25.0424 56.643 23.9293C55.5315 22.8178 54.4152 22.1328 53.1018 21.6223C51.8288 21.128 50.3748 20.7887 48.2472 20.6934C46.1147 20.5965 45.433 20.5723 40.0016 20.5723C34.5687 20.5723 33.8885 20.5949 31.7544 20.6934Z"
                                        fill="#81D1FE" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_296_2884">
                                        <rect width="40" height="40" fill="white" transform="translate(20 20.5723)" />
                                    </clipPath>
                                </defs>
                            </svg>

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



<script></script>


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
        }

        #footer-others-div {
            display: flex;
            align-items: center;
        }

        #footer-site-map-div {
            display: flex;
        }

        .footer-social-logo {
            height: 50px;
        }
    }
</style>