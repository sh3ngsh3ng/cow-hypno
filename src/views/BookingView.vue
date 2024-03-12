<script>
  import consultation from '@/assets/svg/base/consultation.svg';

  export default {
    // methods: {
    //   openConsultWidget() {
    //     Calendly.initPopupWidget({ url: 'https://calendly.com/cowsoulmate/free_consultation' });
    //     return false;
    //   },
    //   bookSessionWidget() {
    //     Calendly.initPopupWidget({ url: 'https://calendly.com/cowsoulmate/booking-sessions' });
    //     return false;
    //   }
    // }
    data() {
      return {
        consultation: consultation
      }
    }
  }
</script>

<template>
  <div class="calendly-embed" style="height:auto;" data-auto-load="false"></div>
  <div id="booking-page-div">
    <div id="booking-view-banner" class="hero-banner">
      <div class="hero-banner-big-letters pt-2 mb-2">LETS GET STARTED</div>
      <div class="hero-banner-small-letters">Find a slot for your consultation</div>
    </div>
    <section>
      <p class="section-header">
        We offer free consultations
      </p>
      <img :src="consultation" class="booking-image">
      <p class="p1">
        The purpose of a free hypnotherapy consultation is to allow potential clients to discuss their needs, goals, and
        concerns with the hypnotherapist. It helps evaluate the client's readiness for therapy session and address any
        inquiries. The free pre-consultation builds trust and ensures both parties are comfortable before starting
        therapy session.
      </p>
      <button @click="$sharedMethods.openConsultWidget()" class="standard-btn">Book your free consultation now!</button>
    </section>
    <section>
      <p class="section-header">Book an appointment</p>
      <div class="d-flex justify-content-center"><button @click="$sharedMethods.openConsultWidget()"
          id="free-consult-btn" class="standard-btn mb-2">Free Consultations</button></div>
      <div class="d-flex justify-content-center"> <button @click="$sharedMethods.bookSessionWidget()"
          id="book-session-btn" class="standard-btn">Book an Appointment</button></div>


    </section>
  </div>
</template>

<style scoped>
  #booking-view-banner {
    background-image: url('../assets/booking-banner.jpg');
    background-position: center;
    background-size: cover;
  }

  .booking-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 350px;
  }
</style>