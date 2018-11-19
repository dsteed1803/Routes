<template>
  <div>
    <p></p>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <button @click="navigateHome" class="btn btn-primary">Go To Homepage</button>
    <br>
    <br>
    <button @click="navigateUserDetail" class="btn btn-primary">View User Details</button>
  </div>
</template>

<script>
  export default {
    methods: {
      navigateHome() {
        this.$router.push('/')
      },
      navigateUserDetail() {
        this.$router.push('/details')
      }
    }
  }
</script>
