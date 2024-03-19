<script>
  import consultation from '@/assets/svg/base/consultation.svg';
  import consent from '@/assets/svg/services-view/consent.svg';
  import hypnosis from '@/assets/svg/services-view/hypnosis.svg';
  import hypnoart from '@/assets/svg/services-view/hypnoart.svg';
  import hypnodance from '@/assets/svg/services-view/hypnodance.svg';
  import hypnoworkout from '@/assets/svg/services-view/hypnoworkout.svg';
  import healthcoach from '@/assets/svg/services-view/healthcoach.svg';

  export default {
    data() {
      return {
        consultation: consultation,
        consent: consent,
        hypnosis: hypnosis,
        hypnoart: hypnoart,
        hypnodance: hypnodance,
        hypnoworkout: hypnoworkout,
        healthcoach: healthcoach
      }
    }
  }
</script>

<template>
  <div id="services-page-div">
    <div id="service-view-banner" class="hero-banner">
      <div>
        <div class="hero-banner-big-letters">WHAT WE OFFER</div>
        <div class="hero-banner-small-letters">How we can lead you to a happier and healthier life.</div>
      </div>
    </div>
    <div class="container">
      <section>
        <div id="service-page-section-one">
          <div>
            <img :src="consultation" id="service-section-one-logo">
          </div>
          <div id="service-section-one-right">
            <p class="section-header">We offer free consultations</p>
            <p class="p1">
              The purpose of a free hypnotherapy consultation is to allow potential clients to discuss their needs,
              goals,
              and
              concerns with the hypnotherapist. It helps evaluate the client's readiness for therapy session and address
              any
              inquiries. The free pre-consultation builds trust and ensures both parties are comfortable before starting
              therapy session.
            </p>
            <div class="d-flex justify-content-center"><button class="standard-btn"
                @click="$sharedMethods.openConsultWidget()">Book your free consultation
                now!</button>
            </div>
          </div>
        </div>



      </section>
      <section>
        <p class="section-header">Our selection of therapeutic services</p>
        <p class="p1">
          At our holistic wellness business, we provide a range of services that blend hypnosis with therapeutic
          approaches like HypnoDance, HypnoArt, HypnoWorkout, and Hypnotherapy. These techniques are designed to promote
          mental empowerment, emotional release, physical health, and mindfulness, supporting personal growth, healing,
          and overall well-being.
        </p>
      </section>
      <section>
        <div id="service-page-section-three">
          <div id="service-section-three-logo-div">
            <img :src="consent" id="service-section-three-logo">
          </div>
          <div id="service-section-three-right">
            <p class="section-header">Informed Consent</p>


            <p class="p1">
              Hypnosis is a powerful technique that allows you to open the doorway to your subconscious mind with your
              full
              consent by utilizing your focused attention and relaxation. In this relaxed state, you become more
              receptive
              to
              positive suggestions and can use your imagination to manifest positive change more effectively.
            </p>
            <p class="p1">
              Although generally safe, hypnosis should only be conducted by a licensed and trained professional. Rest
              assured
              that a competent hypnotherapist should be able to help you manage any negative experiences or feelings
              that
              may
              arise during the hypnosis therapy session with ease.
            </p>
            <d class="d-flex justify-content-center">
              <button class="standard-btn"><a style="text-decoration: none;" href="javascript:void(
                window.open(
                    'https://form.jotform.com/230803205747452',
                    'blank',
                    'scrollbars=yes,
                    toolbar=no,
                    width=700,
                    height=500'
                )
                )
            ">
                  View Form Here
                </a></button>
            </d>
          </div>
        </div>
      </section>
      <section>
        <div id="card-div">
          <!-- Hypnosis Therapy Card -->
          <div class="service-card">
            <div class="service-img-div">
              <img :src="hypnosis" class="service-img">
            </div>
            <div class="service-text-div">
              <p class="t1">Hypnosis Therapy</p>
              <p class="p1">
                Hypnosis Therapy is the best and effective therapy to clear its trauma and promote mental health and
                also
                able to help you overcome any psychological barriers or self-limiting beliefs that may be inhibiting
                their
                ability to fully engage in lifestyle activities.
              </p>
              <button class="service-btn standard-btn" @click="$sharedMethods.navigateTo('/hypnosis')">Read more
                here</button>
            </div>
          </div>
          <!-- HypnoArt Therapy Card -->
          <div class="service-card">
            <div class="service-img-div">
              <img :src="hypnoart" class="service-img">
            </div>
            <div class="service-text-div">
              <p class="t1">HypnoArt Therapy</p>
              <p class="p1">
                By combining hypnotherapy and art, individuals can gain insight into their thoughts and emotions and
                find
                new ways to cope with challenges. This approach can have positive effects on mental health and
                well-being.
              </p>
              <button class="service-btn standard-btn" @click="$sharedMethods.navigateTo('/hypnoart')">Read more
                here</button>
            </div>
          </div>
          <!-- HypnoDance Therapy Card -->
          <div class="service-card">
            <div class="service-img-div">
              <img :src="hypnodance" class="service-img">

            </div>
            <div class="service-text-div">
              <p class="t1">HypnoDance Therapy</p>
              <p class="p1">
                Combining hypnosis and fusion dance offers a transformative experience, enhancing mind-body connection,
                well-being, and personal growth. Working with skilled practitioners ensures safe and effective
                application
                for healing, self-expression, and teamwork.</p>
              <button class="service-btn standard-btn" @click="$sharedMethods.navigateTo('/hypnodance')">Read more
                here</button>
            </div>
          </div>
          <!-- HypnoWorkout Therapy Card -->
          <div class="service-card">
            <div class="service-img-div">
              <img :src="hypnoworkout" class="service-img">
            </div>
            <div class="service-text-div">
              <p class="t1">HypnoWorkout Therapy</p>
              <p class="p1">
                The Mindfulness Workout combines hypnosis and exercise to enhance the mind-body connection, reduce
                stress,
                and improve overall well-being through present-moment awareness, relaxation, and mental clarity.</p>
              <button class="service-btn standard-btn" @click="$sharedMethods.navigateTo('/hypnoworkout')">Read more
                here</button>
            </div>
          </div>
          <!-- Health Coach -->
          <div class="service-card">
            <div class="service-img-div">
              <img :src="healthcoach" class="service-img">
            </div>
            <div class="service-text-div">
              <p class="t1">Health Coach</p>
              <p class="p1">
                A health coach helps individuals achieve their health goals through personalized plans, guidance, and
                accountability. They focus on nutrition, exercise, stress management, sleep, and behavior change to
                improve
                overall well-being.</p>
              <button class="service-btn standard-btn" @click="$sharedMethods.navigateTo('/healthcoach')">Read more
                here</button>
            </div>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<style scoped>
  #service-view-banner {
    background-image: url('../assets/service-banner.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #service-section-one-logo {
    width: 100%;
    max-width: 350px;
  }

  .hero-banner-big-letters {
    line-height: 50px;
  }

  @media screen and (min-width: 768px) {
    #service-page-section-one {
      display: flex;
      justify-content: center;
    }

    /* #service-section-one-logo-div {
      padding: 20px;
    } */

    #service-section-one-logo {
      width: 40vw;
    }

    #service-section-one-right {
      padding-left: 20px;
    }

    #service-page-section-three {
      display: flex;
      justify-content: center;
    }

    #service-section-three-logo {
      width: 40vw;
    }

    #service-section-three-right {
      padding-left: 20px;
    }
  }


  @media screen and (min-width: 1024px) {

    .service-card {
      display: flex;
      height: auto;
      min-height: 200px;
    }

    .p1 {
      line-height: 20px;
    }

    .service-img {
      width: 40vw;
    }

    .service-text-div {
      padding: 10px;
    }

    #service-section-one-logo-div {
      padding: 20px;
    }

    #service-section-one-logo {
      width: 30vw;
    }

    #service-section-three-logo {
      width: 30vw;
    }

    .hero-banner-big-letters {
      line-height: 100px;
    }
  }

  @media screen and (min-width: 1440px) {
    .service-img {
      width: 20vw;
    }

    #service-section-one-logo {
      width: 25vw;
    }

    #service-section-three-logo {
      width: 25vw;
    }

    /* .standard-btn {
      right: 10px;
    } */
  }
</style>