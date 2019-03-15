<template lang="pug">
header(ref="header")
  .container
    app-logo
    main-nav  
    lang-switcher
</template>

<script>
import LangSwitcher from "@/components/LangSwitcher";
import MainNav from "@/components/MainNav";
import AppLogo from "@/components/AppLogo";

export default {
  name: "app-header",
  components: {
    LangSwitcher,
    MainNav,
    AppLogo
  },
  data() {
    return {};
  },
  methods: {
    getHeaderHeight() {
      const header = this.$refs.header;
      const { height } = getComputedStyle(header);
      this.$emit("app-padding-top", height);
    }
  },
  mounted() {
    window.addEventListener("resize", this.getHeaderHeight, false);
    this.getHeaderHeight();
  }
};
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0 2em;
}
</style>
