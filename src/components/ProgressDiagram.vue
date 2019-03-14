<template lang="pug">
  ul
    li(v-for="(item,index) in calendar") {{ item }}

</template>

<script>
export default {
  data() {
    [];
  },
  methods: {
    makeCalendar() {
      const monthes = [];
      return monthes;
    }
  },
  created() {
    this.makeCalendar();
  }
};
</script>
