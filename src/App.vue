<template>
  <div class="container">
    <app-header></app-header>
    <div>
      <h1>EXERCISE 10</h1>
      <hr>
      <transition name="slide" mode="out-in">
        <router-view class="fontstyle"></router-view>
      </transition>

    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style>

  .fontstyle {
    font-family: "Adobe Caslon Pro";
    font-style: oblique;
    font: small-caps;
    font-stretch: extra-expanded;
    color: coral;
  }

  .slide-leave-active {
    transition: opacity 300ms ease;
    opacity: 0;
    animation: slide-out 300ms ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-enter-active {
    animation: slide-in 300ms ease-out forwards;
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-15px);
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0);
    }

  }

</style>
