<script>
  import consultation from '@/assets/svg/base/consultation.svg';

  export default {
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
      <div>
        <div class="hero-banner-big-letters">LETS GET STARTED</div>
        <div class="hero-banner-small-letters">Find a slot for your consultation</div>
      </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .booking-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 350px;
  }

  .hero-banner-big-letters {
    line-height: 50px;
  }

  @media screen and (min-width: 1024px) {
    .hero-banner-big-letters {
      line-height: 100px;
    }
  }
</style>