<template lang="pug">
header
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
  }
};
</script>
