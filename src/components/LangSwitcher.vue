<template lang="pug">
ul(class="lang-switcher")
  li(
    v-for="(lang, index) in languages" 
    class="lang-switcher__item"
    :key="index")
    button(
      @click="(e) => selectLang(e, lang)" 
      :class="['lang-switcher__button', { 'active':  lang === selectedLang }]")  
      | {{ lang }}
</template>

<script>
export default {
  name: "LangSwitcher",
  data() {
    return {
      languages: ["us", "ukr"],
      selectedLang: ""
    };
  },
  methods: {
    selectLang(e, lang) {
      e.preventDefault();
      this.selectedLang = lang;
    }
  }
};
</script>

<style lang="scss" scoped>
.lang-switcher {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &__item {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__button {
    padding: 1em 2em;
    text-transform: uppercase;
    font-size: 0.6em;

    &:hover {
      cursor: pointer;
    }

    &.active {
      color: red;
    }
  }
}
</style>
