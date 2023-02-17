<template>
  <aside 
    class="aside"
    v-bind:class="{ 'aside-collapse' : this.stateSidebar }"
  >
    <div class="wrapper__logo">
        <logo-item />
    </div>
    <social-list />
    <sidebar-collapse @isActiveAside="handleSidebarStatus"/>
  </aside>
</template>

<script>
  import logoItem from  '@/components/logo/LogoItem.vue'
  import SocialList from  '@/components/social/SocialList.vue'
  import SidebarCollapse from  '@/components/sidebar/SidebarCollapse.vue'

  export default {
    components: { 
      logoItem,
      SocialList, 
      SidebarCollapse
    },
    data() {
      return {
        stateSidebar: true
      }
    },  
    methods: {
      handleSidebarStatus(checkActive) {
        this.stateSidebar = checkActive;
        if(this.stateSidebar) {
          document.body.classList.remove('open-aside');
        }else {
          document.body.classList.add('open-aside');
        }
      }
    }
  }
</script>
