<script>
    import logo1 from '@/assets/svg/navbar/logo1.svg';
    import logo2 from '@/assets/svg/navbar/logo2.svg';

    export default {
        name: "NavBar",
        data() {
            return {
                logo1: logo1,
                logo2: logo2
            }
        }
    }
</script>

<template>
  <nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" @click="$sharedMethods.navigateTo('/')">
        <!-- <img id="nav-logo" src="../assets/logo.jpg"/> -->
        <img :src="logo1" class="header-logo me-2">
        <img :src="logo2" class="header-logo">
        
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a :class="[
                'nav-link',
                {
                  activeLink: $route.path === '/',
                },
              ]" @click="$sharedMethods.navigateTo('/')">Home</a>
          </li>
          <li class="nav-item">
            <a :class="[
                'nav-link',
                {
                  activeLink: $route.path === '/about',
                },
              ]" @click="$sharedMethods.navigateTo('/about')">About Us</a>
          </li>
          <li class="nav-item">
            <a :class="[
                'nav-link',
                {
                  activeLink: $route.path === '/services',
                },
              ]" @click="$sharedMethods.navigateTo('/services')">Our Services</a>
          </li>
          <li class="nav-item">
            <a :class="[
                'nav-link',
                {
                  activeLink: $route.path === '/contact',
                },
              ]" @click="$sharedMethods.navigateTo('/contact')">Contact Us</a>
          </li>
          <li class="nav-item">
            <a :class="[
                'nav-link',
                {
                  activeLink: $route.path === '/book',
                },
              ]" @click="$sharedMethods.navigateTo('/book')">Book your session</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  #navbar {
    background-color: #81d1fe !important;
  }

  li {
    font-family: Solway;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
  }

  li>a {
    color: white;
  }

  .activeLink {
    font-weight: 800;
    color: white;
  }

</style>