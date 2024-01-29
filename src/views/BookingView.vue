<script>
  export default {
    methods: {
      openConsultWidget() {
        Calendly.initPopupWidget({ url: 'https://calendly.com/cowsoulmate/free_consultation' });
        return false;
      },
      bookSessionWidget() {
        Calendly.initPopupWidget({ url: 'https://calendly.com/cowsoulmate/booking-sessions' });
        return false;
      }
    }
  }


</script>

<template>
  <div class="calendly-embed" style="height:auto;" data-auto-load="false"></div>
  <div id="booking-page-div">
    <section>
      <p class="section-header">
        We offer free consultations
      </p>
      <img alt="..." />
      <p class="p1">
        The purpose of a free hypnotherapy consultation is to allow potential clients to discuss their needs, goals, and
        concerns with the hypnotherapist. It helps evaluate the client's readiness for therapy session and address any
        inquiries. The free pre-consultation builds trust and ensures both parties are comfortable before starting
        therapy session.
      </p>
      <button class="standard-btn">Book your free consultation now!</button>
    </section>
    <section>
      <p class="section-header">Book an appointment</p>
      <button @click="openConsultWidget()" id="free-consult-btn" class="standard-btn mb-2">Free Consultations</button>
      <button @click="bookSessionWidget()" id="book-session-btn" class="standard-btn">Book Session</button>
    </section>
  </div>
</template>

<style scoped>
</style>