<template>
      <navbar-vac/>
    <main class="main">
        <router-view/>
    </main>
    <footer-vac/>
</template>



<script>
import NavbarVac from '@/components/NavbarVac.vue'
import FooterVac from '@/components/FooterVac.vue'
export default{

  components: {
    NavbarVac,
    FooterVac
  },

}

</script>



<style lang="scss">
#app{
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.main{
  flex: 1 1 auto;
}
</style>
