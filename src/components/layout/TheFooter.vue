<template>
  <footer :class="className">
    <slot></slot>
  </footer>
</template>
<script>
  export default {
    props: {
      className: String
    }
  }
</script>