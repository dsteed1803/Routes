<template>
  <div>
    <p>The User Details are stored here.</p>
    <router-link
      tag="button"
      :to="{ name: 'userEdit', query: {locale1: 'A black Raincoat', q: 200} }"
      class="btn btn-primary">
      Edit User
    </router-link>
    <br>
    <hr>
  </div>
</template>
