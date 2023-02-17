<template>
  <p class="about__date">{{month[date.getMonth()]}} {{date.getDate()}}, {{date.getFullYear()}}</p>
</template>
<script>
  export default {
    data() {
      return {
        date: new Date("1992-03-09"),
        month: ["January","February","March","April","May","June","July","August","September","October","November","December"]
      }
    }
  }
</script>