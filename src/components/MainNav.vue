<template lang="pug">
  nav#nav
    router-link(v-for="(link, index) in links" :key="index" :to="link.url") {{ link.title }}
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Home",
          url: "/"
        },
        {
          title: "About",
          url: "/about"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
