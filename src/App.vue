<template lang="pug">
#app(:style="{paddingTop}")
  app-header(@app-padding-top="setAppPaddingTop")
  router-view
</template>

<script>
import AppHeader from "@/components/AppHeader";
export default {
  name: "app",
  components: {
    AppHeader
  },
  data() {
    return {
      paddingTop: ""
    };
  },
  methods: {
    setAppPaddingTop(val) {
      this.paddingTop = val;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
