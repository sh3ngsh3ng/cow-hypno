<script>
  import help from '@/assets/svg/about-view/how-therapy-help.svg';

  export default {
    data() {
      return {
        help: help
      }
    }
  }
</script>

<template>
  <div id="about-page-div">
    <div id="about-view-banner" class="hero-banner">
      <div class="hero-banner-big-letters pt-3 mb-3">C.O.W. <br>SOULMATE</div>
      <div class="hero-banner-small-letters mb-3">A little more about who we are.</div>
    </div>
    <section>
      <p class="section-header">Our mission</p>
      <p class="p1">
        To help individuals overcome mental and emotional struggles, improve their well-being and to live happier,
        healthier, and more fulfilling lives by providing them with the tools, resources, and support they need to
        overcome challenges and reach their full potential to achieve their personal goal.
      </p>
      <p class="section-header">How therapy can help us achieve that</p>
      <img :src="help" class="help-image">

      <p class="p1">
        We offer personalized evidence-based therapies to help clients achieve their goals by reprogramming the
        subconscious mind for positive behavior and mindset. Our therapists tailor treatments to meet each client's
        unique needs, resulting in long-lasting transformation and personal growth.
      </p>
      <ul>
        <li class="t2">Increased self-awareness and self-understanding by helping individuals gain a deeper
          understanding of themselves, their emotions, and their patterns of behavior.</li>
        <li class="t2">
          Improved mental health by helping alleviate symptoms of mental health conditions such as anxiety, depression,
          and trauma.
        </li>
        <li class="t2">
          Enhanced coping skills by helping individuals to develop new coping skills and strategies for managing stress,
          emotions, and difficult situations.
        </li>
        <li class="t2">
          Increase resilience by helping individuals build resilience and a stronger sense of self, which can improve
          their ability to bounce back from setbacks and challenges.
        </li>
        <li class="t2">
          Improved relationships by helping individuals improve their communication skills, develop stronger
          relationships, and navigate conflict more effectively.
        </li>
      </ul>
      <div class="d-flex justify-content-center">
        <button class="standard-btn" @click="$sharedMethods.navigateTo('/services')">Learn more about our
          services</button>
      </div>
    </section>
  </div>
</template>

<style>
  #about-view-banner {
    background-image: url('../assets/about-banner.jpg');
    background-position: center;
    background-size: cover;
  }

  .help-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 350px;
  }
</style>