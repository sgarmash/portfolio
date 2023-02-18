<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      className: String
    }
  }
</script>