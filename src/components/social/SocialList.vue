<template>
  <ul class="list social__list">
    <social-list-item 
      v-for="item in socialLinks" 
      :key="item.id"
      :href="item.href"
      :text="item.name"
      :icon="item.icon"
      :target="item.target"
      :rel="item.rel"
      :download="item.download"
      class="social__item"
    />
  </ul>
</template>
<script>
  import SocialListItem from  '@/components/social/SocialListItem.vue'
  import {socialLinks} from  '@/dataLinks'
  export default {
    components: { 
      SocialListItem
    },
    data() {
      return {
        socialLinks: socialLinks
      }
    }
  }
</script>