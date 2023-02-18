<template>
  <section :class="className">
    <slot></slot>
  </section>
</template>
<script>
  export default {
    props: {
      className: String
    }
  }
</script>