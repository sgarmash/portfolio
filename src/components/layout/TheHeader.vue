<template>
  <header :class="className">
    <base-container class-name="container">
      <the-menu />
    </base-container>
  </header>
</template>
<script>
  import TheMenu from  '@/components/menu/TheMenu.vue'
  import BaseContainer from  '@/components/layout/BaseContainer.vue'
    export default {
      components: {
      TheMenu, 
      BaseContainer
    },
    props: {
      className: String
    }
  }
</script>