<template>
  <main :class="className">
    <slot></slot>
  </main>
</template>
<script>
  export default {
    props: {
      className: String
    }
  }
</script>