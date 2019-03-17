<template lang="pug">
.progress-diagram
  h4 {{ year }}
  ul
    li(v-for="(item, index) in monthes") 
      template(v-if="item === 0")
        hr
      | {{ item }}

</template>

<script>
export default {
  data() {
    return {
      year: null,
      monthes: [],
      days: []
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
      return {
        //days:
      };
    },
    daysInMonth(month) {
      const now = new Date();
      return new Date(now.getFullYear(), month, 0).getDate();
    }
  },
  created() {
    this.makeCalendar();
    this.getYear();
  },
  mounted() {
    const year = this.getYear();
    for (let i = 1; i < 13; i++) {
      this.days.push(this.daysInMonth(i, year));
    }

    // const manthes = this.days.reduce((prev, curr) => {
    //   prev.push(new Array(curr).fill(curr))
    // }, [])

    const monthes = this.days.reduce((acc, curr) => {
      const month = Array.from(Array(curr).keys());
      return acc.concat(month);
    }, []);

    this.monthes = monthes;
  }
};
</script>
