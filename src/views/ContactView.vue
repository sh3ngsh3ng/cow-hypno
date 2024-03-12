<script>
  import facebook from '@/assets/svg/contact-view/facebook.svg';
  import tiktok from '@/assets/svg/contact-view/tiktok.svg';
  import instagram from '@/assets/svg/contact-view/instagram.svg';
  import wechat from '@/assets/svg/contact-view/wechat.svg';
  import whatsapp from '@/assets/svg/contact-view/whatsapp.svg';
  import email from '@/assets/svg/contact-view/email.svg';
  import feedback from '@/assets/svg/contact-view/feedback.svg';

  export default {
    data() {
        return {
            facebook: facebook,
            tiktok: tiktok,
            instagram: instagram,
            wechat: wechat,
            whatsapp: whatsapp,
            email: email,
            feedback: feedback
        }
    }
  }
</script>

<template>
  <div id="contact-page-div">
    <div id="contact-view-banner" class="hero-banner">
      <div class="hero-banner-big-letters pt-3 mb-3">GET IN TOUCH WITH US</div>
      <div class="hero-banner-small-letters mb-3">Our contact details and social media</div>
    </div>
    <section>
      <div id="contact-main-div">
        <div class="contact-div">
          <p class="section-header">Social Media</p>
          <div class="socials-logo-div d-flex justify-content-between mb-3">
            <!-- facebook -->
            <img :src="facebook" @click="$sharedMethods.redirectTo('https://www.facebook.com/profile.php?id=100089680964056&mibextid=ZbWKwL')">

            <!-- tiktok -->
            <img :src="tiktok" @click="$sharedMethods.redirectTo('https://www.tiktok.com/@c.o.w.soulmate?_t=8jSYa5V9eMC&_r=1')">
            
            <!-- instagram -->
            <img :src="instagram" @click="$sharedMethods.redirectTo('https://www.instagram.com/c.o.w.soulmate?igsh=MTc4OGNzdHRlcmR3Mw==')">
            
          </div>
          <p class="p1">Facebook: C O W Soulmate</p>
          <p class="p1">Tiktok: @c.o.w.soulmate</p>
          <p class="p1">Instagram: c.o.w.soulmate</p>
        </div>
        <div class="contact-div">
          <p class="section-header">Contact details</p>
          <div class="socials-logo-div d-flex justify-content-between mb-3">
            <!-- wechat -->
            <img :src="wechat">
            
            <!-- whatsapp -->
            <img :src="whatsapp">
            
            <!-- email -->
            <img :src="email">
            
          </div>
          <p class="p1">+65 9109 9629</p>
          <p class="p1">support@cowsoulmate.sg</p>
        </div>
        <div class="contact-div">
          <p class="section-header">Opening Hours</p>
          <p class="p1">Mobile locations/online based on booking</p>
          <p class="p1">Weekdays: 09:00 - 22:00</p>
          <p class="p1">Saturday: 09:30 - 23:30</p>
          <p class="p1">Sunday: 10:00 - 16:00</p>
        </div>
      </div>
    </section>

    <section>
      <img :src="feedback" class="feedback-image">

      <p class="section-header">Your feedback is valuable to us</p>
      <p class="p1">If you have any feedback regarding any of your experiences with C.O.W. Soulmate please use our
        feedback form. Your feedback will allow us to improve our service and give you a better experience next time!
      </p>
      <div class="d-flex justify-content-center">


        <button class="standard-btn"><a href="javascript:void(
            window.open(
              'https://form.jotform.com/230793275000449',
              'blank',
              'scrollbars=yes,
              toolbar=no,
              width=700,
              height=500'
            )
          )
        ">
            Feedback Form
          </a></button>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .contact-div {
    padding: 20px;
  }

  .contact-div>p {
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  #contact-view-banner {
    background-image: url('../assets/contact-banner.jpg');
    background-position: center;
    background-size: cover;
  }

  .feedback-image{
    display: block; 
    margin: 0 auto;
  }
</style>