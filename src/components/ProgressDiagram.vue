<template lang="pug">
.progress-diagram
  h4 {{ year }}
  ul
    li(v-for="(item, index) in monthes") {{ item }}

</template>

<script>
export default {
  data() {
    return {
      year: null,
      monthes: []
    };
  },
  methods: {
    makeCalendar() {
      const monthes = [];
      return monthes;
    },
    getYear() {
      return new Date().getUTCFullYear();
    },
    getMonth() {
      return new Date().getUTCMonth();
    },
    getDate() {
      return new Date().getUTCDate();
    },
    createCalendar() {
      {
        //days:
      }
    }
  },
  created() {
    this.makeCalendar();
    this.getYear();
  }
};
</script>
