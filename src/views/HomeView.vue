<script>
  import homeSectionOneLogo from '@/assets/svg/home-view/home-section-one-logo.svg';
  import hypnosis from '@/assets/svg/home-view/hypnosis.svg';
  import hypnoart from '@/assets/svg/home-view/hypnoart.svg';
  import hypnodance from '@/assets/svg/home-view/hypnodance.svg';
  import consultation from '@/assets/svg/base/consultation.svg';

  export default {
    data() {
      return {
        homeSectionOneLogo: homeSectionOneLogo,
        hypnosis: hypnosis,
        hypnoart: hypnoart,
        hypnodance: hypnodance,
        consultation: consultation
      }
    }
  }
</script>

<template>
  <div id="home-page-div">
    <div id="home-view-banner" class="hero-banner">
      <div>
        <div class="hero-banner-big-letters">Welcome</div>
        <div class="hero-banner-small-letters">Take your first step to happiness here at C.O.W. Soulmate!</div>
        <div id="hero-consult-btn-div" class="m"><button @click="$sharedMethods.openConsultWidget()"
            class="action-btn">Book a Free consultation
            now</button>
        </div>
      </div>
    </div>
    <section class="container">
      <p class="section-header mobile-header">What do we mean by 'Soulmate'</p>
      <div id="home-page-section-one">
        <div id="home-section-one-logo-div" class="d-flex justify-content-center mb-3">
          <img :src="homeSectionOneLogo" id="home-section-one-logo">
        </div>
        <div class="section-text-desktop-div">
          <p class="section-header desktop-header">What do we mean by 'Soulmate'</p>
          <p class="p1">
            The idea of a “soulmate” is often associated with a romantic partner who is meant to be a perfect match for
            us.
            However the concept of a soulmate may also refer to hold personal or spiritual significance by having a
            supportive to certainly contribute to one’s emotional well-being and potentially serve as a therapeutic
            presence. A healthy and fulfilling relationship can provide emotional support, validation, and a sense of
            connection that can be beneficial for an individual’s mental health.
          </p>
          <p class="p1">
            It’s important to note that relying solely on a romantic partner for emotional support can be problematic
            and
            may lead to codependency. Therapy with a licensed mental health professional can provide additional tools
            and
            strategies for managing mental health concerns and developing healthy relationships and building a quality
            lifestyle.
          </p>
          <p class="p1">
            Overall, while the idea of a C.O.W. Soulmate is a supportive and caring professional services can contribute
            to
            your emotional well-being and bring back a quality lifestyle.
          </p>

          <div id="learn-more-div" class="d-flex justify-content-center">
            <button class="standard-btn" @click="$sharedMethods.navigateTo('/about')">Learn more about us</button>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <p class="section-header">Our services</p>
      <p class="p1">
        We offer a variety of holistic wellness services. These allow individuals to "Create Own Wellness" by tailoring
        to clients' needs, promoting overall well-being.
      </p>
      <p class="p2">
        Here are three of our most popular services:
      </p>
      <div id="card-div">
        <!-- Hypnosis Therapy Card -->
        <div class="service-card">
          <img :src="hypnosis">
          <p class="t1">Hypnosis Therapy</p>
          <p class="p1">
            Hypnosis Therapy is the best and effective therapy to clear its trauma and promote mental health and also
            able to help you overcome any psychological barriers or self-limiting beliefs that may be inhibiting their
            ability to fully engage in lifestyle activities.
          </p>
          <button class="service-btn standard-btn" @click="$sharedMethods.navigateTo('/hypnosis')">Read more
            here</button>
        </div>
        <!-- HypnoArt Therapy Card -->
        <div class="service-card">
          <img :src="hypnoart">
          <p class="t1">HypnoArt Therapy</p>
          <p class="p1">
            By combining hypnotherapy and art, individuals can gain insight into their thoughts and emotions and find
            new ways to cope with challenges. This approach can have positive effects on mental health and well-being.
          </p>
          <button class="service-btn standard-btn" @click="$sharedMethods.navigateTo('/hypnoart')">Read more
            here</button>
        </div>
        <!-- HypnoDance Therapy Card -->
        <div class="service-card">
          <img :src="hypnodance">
          <p class="t1">HypnoDance Therapy</p>
          <p class="p1">
            Combining hypnosis and fusion dance offers a transformative experience, enhancing mind-body connection,
            well-being, and personal growth. Working with skilled practitioners ensures safe and effective application
            for healing, self-expression, and teamwork.</p>
          <button class="service-btn standard-btn" @click="$sharedMethods.navigateTo('/hypnodance')">Read more
            here</button>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="standard-btn" @click="$sharedMethods.navigateTo('/services')">Learn more about our
          services</button>
      </div>

    </section>
    <section class="container">
      <p class="section-header mobile-header">We offer free consultations</p>
      <div id="home-page-section-three">
        <div id="home-section-three-logo-div" class="d-flex justify-content-center mb-3">
          <img :src="consultation" id="home-section-three-logo">
        </div>
        <div class="section-text-desktop-div">
          <p class="section-header desktop-header">We offer free consultations</p>
          <p class="p1">The purpose of a free hypnotherapy consultation is to allow potential clients to discuss their
            needs, goals, and concerns with the hypnotherapist. It helps evaluate the client's readiness for therapy
            session
            and address any inquiries. The free pre-consultation builds trust and ensures both parties are comfortable
            before starting therapy session.</p>
          <button class="standard-btn" @click="$sharedMethods.openConsultWidget()">Book your free consultation
            now!</button>
        </div>
      </div>


    </section>
  </div>
</template>

<style scoped>
  .mobile-header {
    display: block;
  }

  .desktop-header {
    display: none;
  }

  #hero-consult-btn-div {
    display: flex;
    justify-content: center;
  }

  #home-view-banner {
    background-image: url('../assets/home-banner.jpg');
    background-position: center calc(50% - 60px);
    background-size: 100%;
    background-repeat: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #home-section-one-logo {
    width: 100%;
    max-width: 350px;
  }

  #home-section-three-logo {
    width: 100%;
    max-width: 350px;
  }

  .action-btn {
    background-color: #08ACF2;
    padding: 12px;
    border: none;
    border-radius: 20px;
    color: white;
    font-weight: 700;
  }

  @media screen and (min-width: 1024px) {

    #learn-more-div {
      display: block !important;
    }

    .service-card {
      width: 30%;
    }

    .mobile-header {
      display: none;
    }

    .desktop-header {
      display: block;
    }

    #card-div {
      display: flex;
      justify-content: space-around;
    }

    #home-page-section-one {
      display: flex;
      justify-content: center;
      position: relative;
    }

    #home-page-section-three {
      display: flex;
      justify-content: center;
      position: relative;
    }

    #home-section-one-logo-div {
      padding: 20px;
    }

    #home-page-section-three-div {
      padding: 20px;
    }

    #home-section-one-logo {
      width: 30vw;
      vertical-align: middle;
    }

    #home-section-three-logo {
      width: 30vw;
      vertical-align: middle;
    }

    .section-text-desktop-div {
      padding-left: 10px;
    }
  }

  @media screen and (min-width: 1280px) {}
</style>