<template>
  <sidebar-item />
  <div class="container__app">
    <header>
      <container-item :class-name="app__wrapper">
        <menu-item />
      </container-item>
    </header>
    <main>
      <section class="about">
        <container-item>
          <div class="about__description">
            <date-item />
            <p class="about__text">Welcome to I’m Sergey Garmas Portfolio</p>
            <h1 class="about__title">Design makes anything When you call myself</h1>
            <p class="about__text">I'm a professional intelligence designer since 2008. I love design, development very much.</p>
          </div>
          <div class="image"></div>
        </container-item>
      </section>
    </main>
    <footer>
      <container-item>
        <p>First footer</p>
      </container-item>
    </footer>
  </div>
</template>

<script>
import MenuItem from  '@/components/menu/Menu.vue'
import SidebarItem from  '@/components/sidebar/TheSidebar.vue'
import DateItem from  '@/components/date/date.vue'
import ContainerItem from  '@/components/layout/container.vue'
export default {
  components: {
    MenuItem, 
    SidebarItem,
    DateItem,
    ContainerItem
  }
}
</script>