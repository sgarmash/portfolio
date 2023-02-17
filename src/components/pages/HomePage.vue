<template>
  <the-sidebar />
  <base-container class-name="container__app">
    <the-header class-name="header"/>
    <the-main class-name="main">
      <base-section class-name="about">
        <base-container class-name="container">
          <base-container class-name="about__description">
            <the-date />
            <p class="about__text">Welcome to I’m Sergey Garmas Portfolio</p>
            <h1 class="about__title">Design makes anything When you call myself</h1>
            <p class="about__text">I'm a professional intelligence designer since 2008. I love design, development very much.</p>
          </base-container>
          <the-avatar />
        </base-container>
      </base-section>
    </the-main>
    <the-footer class-name="footer">
      <base-container class-name="container">
        <p>First footer</p>
      </base-container>
    </the-footer>
  </base-container>
</template>

<script>
import TheSidebar from  '@/components/sidebar/TheSidebar.vue'
import TheDate from  '@/components/date/TheDate.vue'
import TheAvatar from  '@/components/layout/TheAvatar.vue'
import TheMain from  '@/components/layout/TheMain.vue'
import BaseContainer from  '@/components/layout/BaseContainer.vue'
import BaseSection from  '@/components/layout/BaseSection.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import TheHeader from  '@/components/layout/TheHeader.vue'
export default {
  components: {
    TheHeader,
    TheSidebar,
    TheDate,
    BaseContainer,
    BaseSection,
    TheMain,
    TheFooter,
    TheAvatar
  }
}
</script>