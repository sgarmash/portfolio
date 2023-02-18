<template>
  <button 
    class="btn collapse collapse__aside" 
    type="button"
    @click="onclick"
  >
    <span class="icon__theme">
      <font-awesome-icon icon="fa-solid fa-angles-right" />
    </span>
    <span class="collapse__text">
      Collapse
    </span>
  </button>
</template>

<script>
  export default {
    data() {
      return {
        isActive: true
      }
    },
    methods: {
      onclick() {
        this.isActive = !this.isActive
        this.$emit('isActiveAside', this.isActive);
      }
    }
  }
</script>